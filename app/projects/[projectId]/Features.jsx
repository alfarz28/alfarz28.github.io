"use client";
import { useState } from "react";
import styles from "./styles.module.scss";

const Features = ({ features, defaultImg }) => {
  const [openId, setOpenId] = useState(features[0]?.id ?? null);

  const activeFeature = features.find((item) => item.id === openId);
  const currentImg = activeFeature?.img || defaultImg;

  const images = [
    ...new Set([defaultImg, ...features.map((f) => f.img)].filter(Boolean)),
  ];

  return (
    <section className={styles.features}>
      <div className={styles.featuresHead}>
        <p className={styles.label}>
          <span className={styles.bullet} />
          Features
        </p>
      </div>

      <div className={styles.featuresBody}>
        <div className={styles.accordion}>
          {features.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`${styles.item} ${isOpen ? styles.open : ""}`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className={styles.itemButton}
                >
                  <span className={styles.itemNumber}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.itemTitle}>{item.title}</span>
                  <span className={styles.icon} aria-hidden="true" />
                </button>

                <div className={styles.itemPanel}>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.featureImg}>
          {images.map((src) => (
            <img
              key={src}
              src={src}
              alt="Feature preview"
              className={src === currentImg ? styles.active : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
