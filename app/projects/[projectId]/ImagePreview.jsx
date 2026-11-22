import styles from "./styles.module.scss";

const ImagePreview = ({ data }) => {
  const links = data.type
    ? [{ label: "View", href: data.url }]
    : [
        { label: "Live View", href: data.url },
        { label: "Github", href: data.github },
      ];

  const activeLinks = links.filter((l) => l.href);

  return (
    <section className={styles.preview}>
      <div className={styles.imgWrapper}>
        <img src={data.img} alt={data.title || "Preview project"} />

        {activeLinks.length > 0 && (
          <div className={styles.darken}>
            {activeLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ImagePreview;
