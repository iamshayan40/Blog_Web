"use client";
import Link from "next/link";
import { useEffect } from "react";
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function About() {
  useEffect(() => {
    // Add margin to the last section to ensure the footer is not cut off
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    if (main && footer) {
      main.style.paddingBottom = `${footer.offsetHeight}px`; // Ensure footer is fully visible
    }
  }, []);

  return (
    <main>
      <div>
        <div className="flex flex-col items-center justify-center py-32 text-black border-black rounded-sm dark:text-white overflow-hidden">
          <div className="w-full max-w-4xl p-8 bg-white text-black border-2 border-black relative hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:border-none shadow-lg rounded-lg hover:scale-105 transition-all duration-300 dark:hover:bg-gray-900">
            <div className="flex flex-col items-center">
              <div className="w-full flex flex-col justify-center mx-auto">
                <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-6 text-center">
                  About Me
                </h1>
                <p className="text-gray-600 dark:text-gray-50 text-lg mb-4 text-center">
                  Hello! I'm Shayan, a passionate software developer and tech
                  enthusiast. I created this blog to share my experiences, tips,
                  and tutorials on various programming languages and
                  technologies. I believe that learning should be a continuous
                  journey, and I'm here to help others on their path to
                  mastering the art of coding.
                </p>
                <p className="text-gray-600 dark:text-gray-50 text-lg text-center">
                  Whether you're just starting out or looking to sharpen your
                  skills, you'll find a variety of resources and insights here.
                  Let's explore the world of programming together!
                </p>
                <Link href="https://github.com/iamshayan40">
                  <button className="flex justify-center items-center mx-auto mt-6 w-72 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-all duration-500">
                    Let's dive to my GitHub
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section className="py-16 dark:bg-gray-800 dark:text-white">
          <div className="max-w-7xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                Shayan's Journey as a Coder
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
                From curious beginner to seasoned developer, here's how Shayan
                navigated the world of programming.
              </p>
            </div>
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                  <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white">
                    TypeScript
                  </h3>
                  <hr className="border-t border-gray-300 my-2" />
                  <p className="mt-4 text-gray-600 dark:text-gray-50">
                    My journey into coding started with TypeScript as my first
                    programming language, and I dedicated significant time to
                    mastering it. I built multiple projects, crafted custom
                    packages, and even took the step of uploading them to npm.
                    This hands-on experience not only enhanced my skills but
                    also deepened my understanding of how to develop and
                    distribute code effectively.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                  <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white">
                    Node JS
                  </h3>
                  <hr className="border-t border-gray-300 my-2" />
                  <p className="mt-4 text-gray-600 dark:text-gray-50">
                    My journey into coding continued with Node.js, where I
                    focused on backend development. I worked on several
                    projects, built APIs, and created robust server-side
                    applications. This hands-on experience helped me understand
                    how to manage databases, handle requests, and build scalable
                    applications, further enhancing my programming skills.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                  <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white">
                    FullStack Development with Next.js
                  </h3>
                  <hr className="border-t border-gray-300 my-2" />
                  <p className="mt-4 text-gray-600 dark:text-gray-50">
                    My journey into FullStack Development with Next.js allowed
                    me to work on both frontend and backend aspects of web
                    applications. I built scalable projects, utilizing Next.js
                    for server-side rendering, API routes for backend logic, and
                    React for dynamic user interfaces. This comprehensive
                    experience enhanced my ability to manage databases, optimize
                    performance, and create full-fledged web applications
                    efficiently.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                  <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white">
                    Giving Back
                  </h3>
                  <hr className="border-t border-gray-300 my-2" />
                  <p className="mt-4 text-gray-600 dark:text-gray-50">
                    My journey of giving back to the community involves sharing
                    knowledge and helping others grow. I contribute by writing
                    tutorials, participating in open-source projects, and
                    offering support to fellow developers. By giving back, I aim
                    to inspire and guide others in their coding journeys,
                    fostering a collaborative and supportive tech community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-gray-800 text-white py-5 -mb-11 dark:bg-customGray dark:text-white">
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
    </main>
  );
}