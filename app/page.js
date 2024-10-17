"use client";
import React from "react";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This service is amazing! Highly recommend to everyone.",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCo5rBr2N6uQKaltnIgwzmdJxCBRhodVB-sQ&s",
    company: "Tech Solutions Inc.",
    position: "HR Manager",
  },
  {
    name: "Jane Smith",
    feedback:
      "A game changer for our business. Excellent support and features.",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKIAFXYLCGIL_tRScNaak8HXH-74tr3ZMkNw&s",
    company: "Innovatech",
    position: "HR Director",
  },
  {
    name: "Sam Wilson",
    feedback: "Affordable and reliable. Couldn't ask for more.",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZZL0BuDHYzOcO5WWH8t7IXxCkg_sQS3FCQ&s",
    company: "Future Enterprises",
    position: "HR Specialist",
  },
];

const blogs = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMZD7gtOg-aRXiYZ_ZkmYGch46UxHAygL-Pw&s",
    title: "Typescript Blog", 
    excerpt: "TypeScript ek JavaScript-based language hai jo strong type checking aur better debugging tools provide karti hai. Ye code ko JavaScript mein convert karta hai. Is blog mein, hum TypeScript ke basics aur use ko discuss karenge.",
    link: '#',
},
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMZD7gtOg-aRXiYZ_ZkmYGch46UxHAygL-Pw&s",
    title: "Next.js Blog",
    excerpt: "Next.js ek React framework hai jo server-side rendering aur static site generation support karta hai. Ye fast performance aur SEO-friendly features provide karta hai. Is blog mein, hum Next.js ke basics aur features ko cover karenge.",
    link: "#",
  },
  {
    image: "https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png",
    title: "JavaScript Blog",
    excerpt: "JavaScript ek client-side language hai jo web pages ko interactive aur dynamic banati hai. Is blog mein, hum JavaScript ke basics aur asynchronous programming ko cover karenge. Blog me ham javascript complete karenge.",
    link: "#",
  },
];

export default function Page() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Coding",
        "Web Development",
        "Software Engineering",
        "Data Science",
        "Machine Learning",
        "Artificial Intelligence",
        "Programming Languages",
        "Next.js",
        "React.js",
      ],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  return (
    <main>
      <section className="container px-4 py-14 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-4xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            Explore Free Blogs Like
            <br className="hidden lg:block" />{" "}
            <span className="font-bold" ref={el} />{" "}
          </h1>
          <p className="mt-4 text-2xl text-gray-500 dark:text-gray-300 md:text-xl">
            Dive into our{" "}
            <span className="font-semibold text-gray-600">
              collection of free blogs
            </span>{" "}
            covering a wide range of <br className="hidden lg:block" />
            platforms. Stay informed and enhance your skills with valuable
            insights!
          </p>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
              Pricing Plans
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Choose the plan that suits you best.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-6 md:space-y-0">
            {[
              {
                name: "Basic",
                price: "$10/month",
                storage: "Free Storage",
                users: "Single user",
                access: "Community access",
                support: "Weekly updates",
                buttonText: "Choose Basic",
                isBestseller: false,
              },
              {
                name: "Standard",
                price: "$20/month",
                storage: "100GB Storage",
                users: "5 users",
                access: "Community access",
                support: "Daily updates",
                buttonText: "Choose Standard",
                isBestseller: true,
              },
              {
                name: "Premium",
                price: "$30/month",
                storage: "Unlimited Storage",
                users: "Unlimited users",
                access: "Community access",
                additionalText: "Realtime updates",
                buttonText: "Choose Premium",
                isBestseller: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 shadow-lg shadow-gray-500 dark:shadow-gray-700 rounded-lg p-6 w-full md:w-1/3 hover:shadow-2xl transition-shadow duration-300 text-center hover:scale-105 transform ${
                  plan.isBestseller
                    ? "border-2 border-customPurple relative"
                    : ""
                }`}
              >
                {plan.isBestseller && (
                  <span className="absolute top-0 right-0 bg-customPurple text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                    Bestseller
                  </span>
                )}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {plan.name}
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {plan.price}
                </p>
                <ul className="mt-6 space-y-4">
                  <li
                    className={`${
                      plan.name === "Basic" ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {plan.storage}
                  </li>
                  <li
                    className={`${
                      plan.name === "Basic" ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {plan.users}
                  </li>
                  <li
                    className={`${
                      plan.name === "Basic" ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {plan.access}
                  </li>
                  <li>{plan.support}</li>
                </ul>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {plan.additionalText}
                </p>
                <button className="mt-6 w-full bg-customPurple text-white py-2 rounded-lg">
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
              Testimonials
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Hear what our customers have to say.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-6 md:space-y-0">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-lg p-6 w-full md:w-1/3 transition-all duration-300 text-center animate-fadeIn shadow-lg dark:shadow-none ${
                  testimonial.name === "Jane Smith"
                    ? "scale-105"
                    : "hover:shadow-2xl hover:scale-105 transform dark:transition-all dark:duration-300"
                }`}
                style={{ boxShadow: "4px 8px 10px rgba(0, 0, 0, 0.5)" }} // Adjusted box-shadow
              >
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src={testimonial.avatar}
                  alt={`${testimonial.name}'s avatar`}
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {testimonial.name}
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {testimonial.position}, {testimonial.company}
                </p>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  {testimonial.feedback}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-white dark:bg-gray-900">
          <hr className="mt-28 border-gray-500" />
       
      </section>

      <footer className="relative bg-gray-900 px-8 pt-24 pb-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="mx-auto w-full md:px-24">
              <div className="items-top mb-6 flex flex-wrap">
                <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                  <span className="text-md mb-4 block font-medium text-white">
                    Company
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        Freebies
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        Premium
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        Affiliate Program
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        Creative Tim Club
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                  <span className="text-md mb-4 block font-medium text-white">
                    Help and Support
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        Knowledge Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        Premium Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        Custom Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        Licenses
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        Illustrations
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                  <span className="text-md mb-4 block font-medium text-white">
                    Tailwind Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        Admin &amp; Dashboards
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        Templates &amp; Kits
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        React &amp; Tailwind Framework
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        HTML &amp; Tailwind Framework
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        Figma Design System
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        TW Cheatsheet
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        TW Gradient Generator
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        TW Components
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                  <span className="text-md mb-4 block font-medium text-white">
                    Developer Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        GaliChat AI Assistant
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        GPTs Collection
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        Bootstrap Cheat Sheet
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        ChatGPT Prompts
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        AI Code Mentor
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        Digital Ocean
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        Top Software Companies
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-2 text-sm font-normal leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        Software Engineering Intelligence
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-500" />
          <div className="w-full md:w-4/12 mx-auto text-center">
            <a href="#" className="mx-auto inline-block">
              <img
                src="https://savagefitness.com.au/cdn/shop/products/Stickers2022-01.png?v=1662789840"
                alt="logo"
                className="max-w-[100px] mt-4"
              />
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
            <div className="text-center">
              <div className="text-md mt-6 py-1 mb-4 font-normal text-white/60 sm:mb-12">
                Web Platform &amp; Design Copyright © 2024{" "}
                <a href="#" className="text-inherit transition-all">
                  S 4 V A G E.
                </a>
                <br />
                Component copyrights belong to their authors. Made with ♡ by S 4
                V A G E.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
