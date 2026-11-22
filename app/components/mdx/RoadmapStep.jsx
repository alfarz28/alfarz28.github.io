import styles from "./RoadmapStep.module.scss";

const STATUS = ["default", "done", "active", "todo"];

export default function RoadmapStep({
  title,
  step,
  status = "default",
  children,
}) {
  const variant = STATUS.includes(status) ? status : "default";

  return (
    <div className={`${styles.step} ${styles[variant]}`}>
      <span className={styles.marker} aria-hidden="true">
        {variant === "done" ? "✓" : step}
      </span>
      <div className={styles.body}>
        {title && <strong className={styles.title}>{title}</strong>}
        {children}
      </div>
    </div>
  );
}
