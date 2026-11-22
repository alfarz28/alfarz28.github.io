"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState(headings[0]?.id);

  useEffect(() => {
    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-80px 0px -70% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  return (
    <nav className={styles.toc} aria-label="Daftar isi">
      <p>Daftar isi</p>
      <ul>
        {headings.map((h) => (
          <li
            key={h.id}
            className={`${h.level === 3 ? styles.sub : ""} ${
              activeId === h.id ? styles.current : ""
            }`}
          >
            <a href={`#${h.id}`}>{h.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
