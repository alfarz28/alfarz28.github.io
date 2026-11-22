import { getAllPosts } from "../../lib/blog";
import BlogList from "./BlogList";
import styles from "./styles.module.scss";

export const metadata = {
  title: "Blog",
  description: "Write-up lomba, tutorial singkat, dan catatan belajar.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className={styles.page}>
      <header className={styles.head}>
        <h1>Blog</h1>
        <p>Write-up lomba, tutorial singkat, dan catatan belajar.</p>
      </header>
      <BlogList posts={posts} />
    </main>
  );
}
