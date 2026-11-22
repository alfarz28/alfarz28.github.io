"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const formatDate = (iso) =>
  iso
    ? new Date(iso).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

export default function BlogList({ posts }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua");

  const categories = useMemo(
    () => ["Semua", ...new Set(posts.map((p) => p.category))],
    [posts],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchCategory = category === "Semua" || p.category === category;
      const haystack = [p.title, p.description, ...p.tags]
        .join(" ")
        .toLowerCase();
      return matchCategory && (!q || haystack.includes(q));
    });
  }, [posts, query, category]);

  // Artikel terbesar hanya tampil saat tidak ada filter
  const isFiltering = query.trim() !== "" || category !== "Semua";
  const featured = !isFiltering ? filtered[0] : null;
  const rest = featured ? filtered.slice(1) : filtered;

  return (
    <>
      <div className={styles.controls}>
        <input
          type="search"
          placeholder="Cari artikel atau tag..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.search}
          aria-label="Cari artikel"
        />

        <div className={styles.filters}>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`${styles.chip} ${c === category ? styles.active : ""}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 && (
        <p className={styles.empty}>
          {posts.length === 0
            ? "Belum ada artikel."
            : "Tidak ada artikel yang cocok."}
        </p>
      )}

      {featured && (
        <Link href={`/blog/${featured.slug}`} className={styles.featured}>
          {featured.cover && (
            <div className={styles.featuredCover}>
              <img src={featured.cover} alt={featured.title} />
            </div>
          )}
          <div className={styles.featuredBody}>
            <p className={styles.meta}>
              <span>{featured.category}</span>
              <span>{formatDate(featured.date)}</span>
              <span>{featured.readingTime} menit baca</span>
            </p>
            <h2>{featured.title}</h2>
            <p className={styles.desc}>{featured.description}</p>
            <ul className={styles.tags}>
              {featured.tags.map((t) => (
                <li key={t}>#{t}</li>
              ))}
            </ul>
          </div>
        </Link>
      )}

      <div className={styles.list}>
        {rest.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={styles.row}
          >
            <span className={styles.index}>
              {String(i + 1 + (featured ? 1 : 0)).padStart(2, "0")}
            </span>
            <div className={styles.rowBody}>
              <h3>{post.title}</h3>
              <p className={styles.meta}>
                <span>{post.category}</span>
                <span>{formatDate(post.date)}</span>
                <span>{post.readingTime} menit baca</span>
              </p>
            </div>
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
