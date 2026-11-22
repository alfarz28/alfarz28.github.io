import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { getAllPosts, getPost, formatDate } from "../../../lib/blog";
import TableOfContents from "./TableOfContents";
import styles from "./styles.module.scss";
import { mdxComponents } from "../../components/mdx";
import remarkGfm from "remark-gfm";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      images: post.meta.cover ? [post.meta.cover] : [],
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { meta, content, headings } = post;

  return (
    <main className={styles.page}>
      <Link href="/blog" className={styles.back}>
        ← Semua artikel
      </Link>

      <header className={styles.header}>
        <p className={styles.meta}>
          <span>{meta.category}</span>
          <span>{formatDate(meta.date)}</span>
          <span>{meta.readingTime} menit baca</span>
        </p>
        <h1>{meta.title}</h1>
        {meta.description && <p className={styles.lead}>{meta.description}</p>}
        {meta.tags.length > 0 && (
          <ul className={styles.tags}>
            {meta.tags.map((t) => (
              <li key={t}>#{t}</li>
            ))}
          </ul>
        )}
      </header>

      {meta.cover && (
        <div className={styles.cover}>
          <img src={meta.cover} alt={meta.title} />
        </div>
      )}

      <div className={styles.layout}>
        <article className={styles.prose}>
          <MDXRemote
            source={content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug, rehypeHighlight],
              },
            }}
          />
        </article>

        {headings.length > 0 && <TableOfContents headings={headings} />}
      </div>
    </main>
  );
}
