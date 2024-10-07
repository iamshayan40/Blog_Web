import fs from "fs";
import matter from "gray-matter";
import React from "react";
import Link from "next/link";

// Fetching and Parsing Blogs
const blogs = fs.readdirSync("content").map((file) => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8"); // Use template literal for path
  const { data } = matter(fileContent);
  console.log("Parsed Blog Data: ", data);
  return { ...data, slug: file.replace(".md", "") }; // Add slug for the link
});

console.log("All Blogs: ", blogs); // Debugging: Print blogs array

function Blog() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 dark:text-white">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs &&
          blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-gray-800 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2 text-gray-100 dark:text-white">
                  {blog.title}
                </h2>
                <p className="text-gray-100 dark:text-gray-400 mb-4">
                  {blog.description}
                </p>
                <p className="text-sm text-gray-100 dark:text-gray-300 mb-2 italic">
                  By {blog.author} on {blog.date}
                </p>
                <div className="flex justify-end">
                  <Link
                    href={`/blogpost/${blog.slug}`} // Use template literal for dynamic routing
                    className="px-5 py-1.5 text-white dark:text-white font-medium border rounded-sm border-white hover:bg-blue-700 transition-colors duration-300"
                  >
                    Full Blog
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      <footer className="bg-gray-800 text-white py-5 mt-10 rounded-lg dark:bg-customGray dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <h2 className="text-2xl font-bold">Shayan's Blog</h2>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Shayan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Blog;
