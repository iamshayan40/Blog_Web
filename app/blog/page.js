import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"

const blogs = [
  {
    title: "First Blog",
    description: "This is about my setup behind the blogs you can see on the website.",
    slug: "first-blog",
    date: "2023-10-01",
    author: "Bob Smith",
    image: "https://images.pexels.com/photos/5380607/pexels-photo-5380607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Second Blog",
    description: "Recently I have been working on Node.JS and I am really happy with the results I have been getting.",
    slug: "second-blog",
    date: "2023-10-02",
    author: "John Doe",
    image: "https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Third Blog",
    description: "Hmmm I am not sure what to write, But I'm recently learning Next.js and i'll for sure be making a lot of blogs in the future.",
    slug: "third-blog",
    date: "2023-10-03",
    author: "Charlie Brown",
    image: "https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  // Add more blog objects as needed
];

function Blog() {
  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-4xl font-bold mb-8 dark:text-white">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs && blogs.map((blog, index) => (
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
              <h2 className="text-2xl font-bold mb-2 text-gray-100 dark:text-white">{blog.title}</h2>
              <p className="text-gray-100 dark:text-gray-400 mb-4">{blog.description}</p>
              <p className="text-sm text-gray-100 dark:text-gray-300 mb-2">
                By {blog.author} on {blog.date}
              </p>
              <div className="flex justify-end">
      <Link
        href={`/blogpost/${blog.slug}`}
        className={buttonVariants({ variant: 'outline' })}
      >
        Click here
      </Link>
    </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;