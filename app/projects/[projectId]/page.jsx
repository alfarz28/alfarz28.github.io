import { notFound } from "next/navigation";
import { ProjectsData } from "../../components/data";
import StudyCaseHeader from "./StudyCaseHeader";
import ImagePreview from "./ImagePreview";
import Features from "./Features";
import styles from "./styles.module.scss";

export async function generateStaticParams() {
  return ProjectsData.map((project) => ({
    projectId: project.id.toString(),
  }));
}

export default async function Page(props) {
  const { projectId } = await props.params;
  const data = ProjectsData.find((item) => item.id.toString() === projectId);

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
      <ImagePreview data={data} />
      {features.length > 0 && (
        <Features features={features} defaultImg={data.img} />
      )}
    </main>
  );
}
