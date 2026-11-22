import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./styles.module.scss";
// Sesuaikan path import dengan struktur proyek Anda
import {
  Works,
  Organization,
  Certification,
} from "../../../components/data-experience";

const DATA = {
  works: Works,
  organization: Organization,
  certification: Certification,
};

const LABEL = {
  works: "Works",
  organization: "Organization",
  certification: "Certification",
};

const findItem = (type, id) =>
  DATA[type]?.find((item) => String(item.id) === String(id));

// Item placeholder kosong tidak dibuatkan halaman
const isFilled = (item) => Boolean(item.position || item.organization);

export function generateStaticParams() {
  return Object.entries(DATA).flatMap(([type, items]) =>
    items.filter(isFilled).map((item) => ({ type, id: String(item.id) })),
  );
}

export async function generateMetadata({ params }) {
  const { type, id } = await params;
  const item = findItem(type, id);
  if (!item) return {};
  return {
    title: `${item.position || item.organization} | ${LABEL[type]}`,
    description: item.highlight || item.organization,
  };
}

export default async function ExperienceDetail({ params }) {
  const { type, id } = await params;
  const item = findItem(type, id);

  if (!item || !isFilled(item)) notFound();

  const period = [item.start_date, item.end_date].filter(Boolean).join(" - ");

  const meta = [
    { label: "Lokasi", value: item.location },
    { label: "Tipe Lokasi", value: item.location_type },
    { label: "Jenis", value: item.work_type },
    { label: "Periode", value: period },
  ].filter((m) => m.value);

  const gallery = (item.media || []).filter(Boolean);

  const pseudo = (i, salt = 1) => {
    const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
    return x - Math.floor(x);
  };
  const rotation = (i) => Number((pseudo(i, 1) * 14 - 7).toFixed(1)); // -7° s/d 7°
  const shiftY = (i) => Math.round(pseudo(i, 2) * 40 - 20);

  return (
    <main className={styles.main}>
      <Link href="/experience" className={styles.back}>
        ← Kembali
      </Link>

      <p className={styles.type}>{LABEL[type]}</p>
      <h1 className={styles.title}>{item.position || item.organization}</h1>
      {item.position && item.organization && (
        <p className={styles.organization}>{item.organization}</p>
      )}

      {item.image && (
        <div className={styles.cover}>
          <Image
            src={item.image}
            alt={item.position || item.organization}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 900px"
          />
        </div>
      )}

      {meta.length > 0 && (
        <dl className={styles.meta}>
          {meta.map(({ label, value }) => (
            <div key={label} className={styles.metaItem}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      )}

      {item.highlight && (
        <section className={styles.block}>
          <h2>Highlight</h2>
          <p>{item.highlight}</p>
        </section>
      )}

      {item.skills?.length > 0 && (
        <section className={styles.block}>
          <h2>Skills</h2>
          <ul className={styles.skills}>
            {item.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
      )}

      {gallery.length > 0 && (
        <section className={styles.block}>
          <h2>Media</h2>
          <div className={styles.collage}>
            {gallery.map((src, i) => (
              <figure
                key={`${src}-${i}`}
                className={styles.collageItem}
                style={{
                  "--rotate": `${rotation(i)}deg`,
                  "--shift": `${shiftY(i)}px`,
                }}
              >
                <img
                  src={src}
                  alt={`${item.position || item.organization} ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
