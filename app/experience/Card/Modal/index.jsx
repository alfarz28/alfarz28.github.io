"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import styles from "./styles.module.scss";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Modal({ modal, items }) {
  const { active, index } = modal;

  // Modal hanya tampil jika item yang di-hover punya gambar
  const hasImage = Boolean(items[index]?.image);
  const isVisible = active && hasImage;

  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    const move = (target, duration) => ({
      x: gsap.quickTo(target, "left", { duration, ease: "power3" }),
      y: gsap.quickTo(target, "top", { duration, ease: "power3" }),
    });

    const container = move(modalContainer.current, 0.8);
    const dot = move(cursor.current, 0.5);
    const label = move(cursorLabel.current, 0.45);

    const onMouseMove = ({ pageX, pageY }) => {
      container.x(pageX);
      container.y(pageY);
      dot.x(pageX);
      dot.y(pageY);
      label.x(pageX);
      label.y(pageY);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  const animate = isVisible ? "enter" : "closed";

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={animate}
        className={styles.modalContainer}
      >
        <div style={{ top: `${index * -100}%` }} className={styles.modalSlider}>
          {items.map((item, i) => (
            <div
              key={`modal_${item.section}_${item.id}`}
              className={styles.modal}
              style={{ backgroundColor: item.color }}
            >
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.position || "Preview"}
                  fill
                  sizes="400px"
                  style={{ objectFit: "cover" }}
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        ref={cursor}
        className={styles.cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={animate}
      />
      <motion.div
        ref={cursorLabel}
        className={styles.cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={animate}
      >
        View
      </motion.div>
    </>
  );
}
