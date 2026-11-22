"use client";
import { memo } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

function Card({
  index,
  position,
  organization,
  url,
  onEnter,
  onLeave,
  start_date,
  end_date,
}) {
  return (
    <Link
      href={url}
      className={styles.project}
      onMouseEnter={() => onEnter(index)}
      onMouseLeave={onLeave}
    >
      <div className={styles.wrapper}>
        <h2 className={styles.h2}>{position}</h2>
        <p className={styles.org}>{organization}</p>
        {start_date && end_date ? (
          <p className={styles.date}>
            {start_date} - {end_date}
          </p>
        ) : (
          <></>
        )}
      </div>
      <span>{index + 1}</span>
    </Link>
  );
}

export default memo(Card);
