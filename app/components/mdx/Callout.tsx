import { Info, Lightbulb, OctagonExclamationPoint, TriangleExclamationPoint } from "lucide-react";
import styles from "./Callout.module.scss";

const ICONS = {
  info: <Info />,
  tip: <Lightbulb />,
  warning: <OctagonExclamationPoint />,
  danger: <TriangleExclamationPoint />,
};

export default function Callout({ type = "info", title, children }) {
  const variant = ICONS[type] ? type : "info";

  return (
    <aside className={`${styles.callout} ${styles[variant]}`} role="note">
      <span className={styles.icon} aria-hidden="true">
        {ICONS[variant]}
      </span>
      <div className={styles.body}>
        {title && <strong className={styles.title}>{title}</strong>}
        {children}
      </div>
    </aside>
  );
}
