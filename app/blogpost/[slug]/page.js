import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import OnThisPage from "@/components/onthispage";
import { notFound } from "next/navigation";

// Function to generate static paths for all markdown files
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "content"));

  return files.map((filename) => {
    const slug = filename.replace(".md", "");
    return { slug };
  });
}

// Blog post component using slug params
export default async function BlogPostPage({ params }) {
  const { slug } = params;
  const filepath = path.join(process.cwd(), "content", `${slug}.md`);

  if (!fs.existsSync(filepath)) {
    notFound(); // Show 404 if blog doesn't exist
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: data.title })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "aurora-x",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-4xl font-bold mb-4 ">{data.title}</h2>
      <p className="text-lg mb-2 border-l-4 border-gray-500 pl-4 italic">
        &quot;{data.description}&quot;
      </p>
      <div className="flex gap-2">
        <h2 className="text-sm text-gray-500 mb- italic">By {data.author}</h2>
        <p className="text-sm text-gray-500 mb-4">{data.date}</p>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="prose dark:prose-invert"
      ></div>
      <OnThisPage htmlContent={htmlContent} />
      <footer className="mt-8 py-4 border-t border-gray-600 text-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} Shayan's Blog. All rights reserved.</p>
        <p>Crafted with care and professionalism.</p>
      </footer>
    </div>
  );
}
