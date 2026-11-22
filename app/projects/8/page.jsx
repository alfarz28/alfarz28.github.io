import { notFound } from "next/navigation";
import { ProjectsData } from "../../components/data";
import StudyCaseHeader from "./StudyCaseHeader";
import ImagePreview from "./ImagePreview";
import Features from "./Features";
import styles from "./styles.module.scss";
import { div } from "framer-motion/client";

const ID = "8";

export async function generateMetadata() {
  const data = ProjectsData.find((item) => item.id.toString() === ID);
  return { title: data?.title };
}

export default function Page() {
  const data = ProjectsData.find((item) => item.id.toString() === ID);

  if (!data) notFound();

  const features = data.features || [];

  return (
    <main className={styles.page}>
      <StudyCaseHeader
        title={data.title}
        cat={data.cat}
        tech={data.tech}
        date={data.date}
        studycase={data.studycase}
      />

      {/* 1. PROJECT SNAPSHOT & KEY IMPACT */}
      {(data.projectOverview || data.impactMetrics?.length > 0) && (
        <section className={styles.section}>
          <p className={styles.label}>
            <span className={styles.bullet} />
            <span>Overview & Impact</span>
          </p>
          <h2 className={styles.sectionTitle}>Project Scope & Highlights</h2>

          {data.projectOverview && (
            <dl className={styles.overviewMeta}>
              <div>
                <dt>My Role</dt>
                <dd>{data.projectOverview.role}</dd>
              </div>
              <div>
                <dt>Client / Company</dt>
                <dd>{data.projectOverview.client}</dd>
              </div>
              <div>
                <dt>Workflow</dt>
                <dd>{data.projectOverview.workflow}</dd>
              </div>
              {data.projectOverview.userRoles?.length > 0 && (
                <div className={styles.fullRow}>
                  <dt>Supported User Roles</dt>
                  <dd>
                    <ul className={styles.chips}>
                      {data.projectOverview.userRoles.map((role, idx) => (
                        <li key={idx}>{role}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          )}

          {data.images?.length > 0 && (
            <div className={styles.techStack}>
              <img src={data.images[1]} alt="" />
            </div>
          )}

          {data.impactMetrics?.length > 0 && (
            <div className={styles.metricsGrid}>
              {data.impactMetrics.map((metric, idx) => (
                <div key={idx} className={styles.metricCard}>
                  <span className={styles.metricValue}>{metric.value}</span>
                  <h3>{metric.label}</h3>
                  <p>{metric.detail}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* 2. PRODUCT CONTEXT & CHALLENGES */}
      {(data.background || data.challengesAndSolutions?.length > 0) && (
        <section className={styles.section}>
          <p className={styles.label}>
            <span className={styles.bullet} />
            <span>Context & Architecture</span>
          </p>
          <h2 className={styles.sectionTitle}>
            The Problem & How We Solved It
          </h2>

          {data.background && (
            <p className={styles.paragraph}>{data.background}</p>
          )}

          {data.challengesAndSolutions?.length > 0 && (
            <div className={styles.csGrid}>
              {data.challengesAndSolutions.map((item, idx) => (
                <article key={idx} className={styles.csCard}>
                  <div className={styles.csBlock}>
                    <span className={styles.csTag}>
                      0{idx + 1} &bull; Challenge
                    </span>
                    <p>{item.challenge}</p>
                  </div>
                  <div className={`${styles.csBlock} ${styles.solutionBlock}`}>
                    <span className={styles.csTag}>Engineering Solution</span>
                    <p>{item.solution}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      )}

      {/* 3. INTERACTIVE KEY FEATURES */}
      {features.length > 0 && (
        <div className={styles.featuresWrap}>
          <Features features={features} defaultImg={data.img} />
        </div>
      )}

      {/* 4. AI MODEL BENCHMARKING */}
      {data.aiBenchmark && (
        <section className={styles.section}>
          <p className={styles.label}>
            <span className={styles.bullet} />
            <span>AI Engineering</span>
          </p>
          <h2 className={styles.sectionTitle}>
            Face Recognition Model Selection
          </h2>
          <p className={styles.subtext}>{data.aiBenchmark.summary}</p>

          <div className={styles.testModel}>
            <img src={data.images[0]} alt="" />
          </div>

          <div className={styles.modelGrid}>
            {data.aiBenchmark.models?.map((model, idx) => {
              const isSelected = model.status === "Production Pick";
              return (
                <article
                  key={idx}
                  className={`${styles.modelCard} ${
                    isSelected ? styles.selectedModel : ""
                  }`}
                >
                  <div className={styles.modelTop}>
                    <div>
                      <span
                        className={`${styles.statusPill} ${
                          isSelected ? styles.activePill : ""
                        }`}
                      >
                        {model.status}
                      </span>
                      <h3>{model.name}</h3>
                    </div>
                    <span className={styles.licenseText}>{model.license}</span>
                  </div>

                  <div className={styles.statRow}>
                    <div className={styles.statBox}>
                      <span>Peak Accuracy</span>
                      <strong>{model.accuracy}</strong>
                    </div>
                    <div className={styles.statBox}>
                      <span>Precision (@0.5)</span>
                      <strong>{model.precision}</strong>
                    </div>
                  </div>

                  <p className={styles.modelNote}>{model.note}</p>
                </article>
              );
            })}
          </div>
        </section>
      )}

      <ImagePreview data={data} />
    </main>
  );
}
