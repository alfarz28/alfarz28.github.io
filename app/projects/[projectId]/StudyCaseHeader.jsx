import styles from "./styles.module.scss";

const getLabel = (t) =>
  typeof t === "string" ? t : t?.name || t?.label || t?.title || "";

const toList = (tech) => {
  const list = Array.isArray(tech) ? tech : String(tech || "").split(",");
  return list
    .map((t) => getLabel(typeof t === "string" ? t.trim() : t))
    .filter(Boolean);
};

const StudyCaseHeader = ({ title, cat, tech, date, studycase }) => {
  const techList = toList(tech);

  return (
    <header className={styles.header}>
      <p className={styles.label}>
        <span className={styles.bullet} />
        Study Case
      </p>

      <h1 className={styles.title}>
        {title ? title.toUpperCase() : "NO TITLE"}
      </h1>

      <dl className={styles.meta}>
        <div>
          <dt>Role</dt>
          <dd>{cat || "-"}</dd>
        </div>
        <div>
          <dt>Date</dt>
          <dd>{date || "-"}</dd>
        </div>
        <div>
          <dt>Tech</dt>
          <dd>
            {techList.length > 0 ? (
              <ul className={styles.chips}>
                {techList.map((t, i) => (
                  <li key={`${t}-${i}`}>{t}</li>
                ))}
              </ul>
            ) : (
              "-"
            )}
          </dd>
        </div>
      </dl>

      {studycase && <p className={styles.studycase}>{studycase}</p>}
    </header>
  );
};

export default StudyCaseHeader;
