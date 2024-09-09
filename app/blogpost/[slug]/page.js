import fs from "fs"
import matter from "gray-matter"
export default function Page({ params }) {

const filePath = `content/${params.slug}.md`
const fileContent = fs.readFileSync(filePath, "utf-8")
const {content, data} = matter(fileContent)  

  // const blog = {
  //   title: "Next.js",
  //   author: "John Doe",
  //   description: "This is a sample blog post description.",
  //   date: "2024-09-02",
  //   content:
  //     "<p>This is the content of the blog post. It can include <strong>HTML</strong> tags and other elements.</p>",
  // };


return(
  <div className="max-w-5xl mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4 ">{data.title}</h1>
  <p className="text-lg mb-2 border-l-4 border-gray-500 pl-4 italic">&quot;{data.description}&quot;</p>
  <div className="flex gap-2">
  <h1 className="text-sm text-gray-500 mb- italic">By {data.author}</h1>
  <p className="text-sm text-gray-500 mb-4">{data.date}</p>
  </div>
  <div dangerouslySetInnerHTML={{ __html: content }} className="prose"></div>
  </div>
)
}