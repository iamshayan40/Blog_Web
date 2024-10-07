import fs from "fs";
import matter from "gray-matter";
import React from "react";
import Link from "next/link";

// Fetching and Parsing Blogs
export default function Blog() {
  const files = fs.readdirSync('content'); // Assuming your markdown files are in a 'content' folder
  const posts = files.map(file => {
    const fileContent = fs.readFileSync(`content/${file}`, 'utf-8');
    const { data } = matter(fileContent);
    return { slug: file.replace('.md', ''), ...data };
  });

  console.log("All Blogs: ", posts); // Debugging: Print posts array

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 dark:text-white">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts && // Correcting variable name from blogs to posts
          posts.map((post, index) => ( // Changed blogs to posts
            <div
              key={index}
              className="bg-gray-800 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={post.image} // Accessing image property from post
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2 text-gray-100 dark:text-white">
                  {post.title} {/* Accessing title property from post */}
                </h2>
                <p className="text-gray-100 dark:text-gray-400 mb-4">
                  {post.description} {/* Accessing description property from post */}
                </p>
                <p className="text-sm text-gray-100 dark:text-gray-300 mb-2 italic">
                  By {post.author} on {post.date} {/* Accessing author and date from post */}
                </p>
                <div className="flex justify-end">
                  <Link
                    href={`/blogpost/${post.slug}`} // Use template literal for dynamic routing
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
