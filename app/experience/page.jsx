"use client";
import { useState, useCallback } from "react";
import styles from "./styles.module.scss";
import Card from "./Card";
import Modal from "./Card/Modal";
import {
  Works,
  Organization,
  Certification,
} from "../components/data-experience";

const SECTIONS = [
  { key: "works", title: "Works", data: Works, number: 1 },
  { key: "organization", title: "Organization", data: Organization, number: 2 },
  {
    key: "certification",
    title: "Certification",
    data: Certification,
    number: 3,
  },
];

const isFilled = (item) => Boolean(item.position || item.organization);

const buildSections = () => {
  let globalIndex = 0;
  return SECTIONS.map(({ key, title, number, data }) => ({
    key,
    title,
    number,
    items: data.filter(isFilled).map((item) => ({
      ...item,
      section: key,
      globalIndex: globalIndex++,
    })),
  }));
};

const sections = buildSections();
const allItems = sections.flatMap((section) => section.items);

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  const handleEnter = useCallback(
    (index) => setModal({ active: true, index }),
    [],
  );
  const handleLeave = useCallback(
    () => setModal((prev) => ({ ...prev, active: false })),
    [],
  );

  return (
    <main className={styles.main}>
      {sections.map(({ key, title, items, number }) => (
        <section key={key} className={styles.section}>
          <div className={styles.heading}>
            <div className={styles.headingContainer}>
              <h2>{title}</h2>[<p>{String(number).padStart(2, "0")}</p>]
            </div>
          </div>

          <div className={styles.body}>
            {items.length === 0 ? (
              <p className={styles.empty}>Belum ada data.</p>
            ) : (
              items.map((item) => (
                <Card
                  key={`${item.section}-${item.id}`}
                  url={`/experience/${item.section}/${item.id}`}
                  index={item.globalIndex}
                  position={item.position}
                  organization={item.organization}
                  start_date={item.start_date}
                  end_date={item.end_date}
                  onEnter={handleEnter}
                  onLeave={handleLeave}
                />
              ))
            )}
          </div>
        </section>
      ))}

      <Modal modal={modal} items={allItems} />
    </main>
  );
}
