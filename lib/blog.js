import fs from "fs";
import path from "path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";

const DIR = path.join(process.cwd(), "content", "blog");

const calcReadingTime = (text) =>
  Math.max(1, Math.ceil(text.trim().split(/\s+/).length / 200));

// Heading h2 dan h3 untuk daftar isi (id sama dengan rehype-slug)
export function getHeadings(content) {
  const slugger = new GithubSlugger();
  const withoutCode = content.replace(/```[\s\S]*?```/g, "");

  return [...withoutCode.matchAll(/^(#{2,3})\s+(.+)$/gm)].map((m) => {
    const text = m[2].replace(/[`*_]/g, "").trim();
    return { level: m[1].length, text, id: slugger.slug(text) };
  });
}

const readFile = (file) => {
  const slug = file.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    content,
    meta: {
      slug,
      title: data.title || slug,
      date: data.date ? String(data.date).slice(0, 10) : "",
      description: data.description || "",
      category: data.category || "Umum",
      tags: data.tags || [],
      cover: data.cover || "",
      draft: Boolean(data.draft),
      readingTime: calcReadingTime(content),
    },
  };
};

export function getAllPosts() {
  if (!fs.existsSync(DIR)) return [];

  return fs
    .readdirSync(DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => readFile(f).meta)
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug) {
  if (!fs.existsSync(DIR)) return null;

  const file = fs
    .readdirSync(DIR)
    .find((f) => f.replace(/\.mdx?$/, "") === slug);
  if (!file) return null;

  const post = readFile(file);
  if (post.meta.draft) return null;

  return { ...post, headings: getHeadings(post.content) };
}

export const formatDate = (iso) =>
  iso
    ? new Date(iso).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";
