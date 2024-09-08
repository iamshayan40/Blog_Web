import React from "react";
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
    image: "https://example.com/image1.jpg",
    title: "Blog Post 1",
    excerpt: "This is a short description of blog post 1.",
    link: "https://example.com/blog1",
  },
  {
    image: "https://example.com/image2.jpg",
    title: "Blog Post 2",
    excerpt: "This is a short description of blog post 2.",
    link: "https://example.com/blog2",
  },
  {
    image: "https://example.com/image3.jpg",
    title: "Blog Post 3",
    excerpt: "This is a short description of blog post 3.",
    link: "https://example.com/blog3",
  },
];
function page() {
  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for
            community <br className="hidden lg:block" /> components using{" "}
            <span className="font-semibold underline decoration-primary">
              Tailwind CSS
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to{" "}
            <br className="hidden lg:block" /> bootstrap your new apps, projects
            or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form
              action="https://www.creative-tim.com/twcomponents/search"
              className="flex flex-wrap justify-between md:flex-row"
            >
              <input
                type="search"
                name="query"
                placeholder="Search Components"
                required
                className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-customPurple hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
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
                className={`bg-white dark:bg-gray-800 shadow-lg shadow-gray-500 dark:shadow-gray-700 rounded-lg p-6 w-full md:w-1/3 hover:shadow-2xl transition-shadow duration-300 text-center ${
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
                className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full md:w-1/3 transition-shadow duration-300 text-center animate-fadeIn shadow-lg dark:shadow-none hover:shadow-2xl hover:scale-105 transform"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
              Top Blogs
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Discover our most popular blog posts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-md p-6 transition-transform duration-300 transform hover:scale-105 shadow-lg dark:shadow-none hover:shadow-2xl"
                style={{
                  boxShadow:
                    "0 8px 26px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.2)",
                }} // Adjusted box-shadow
              >
                <img
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                  src={
                    index === 0
                      ? "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      : index === 1
                      ? "https://images.pexels.com/photos/1181279/pexels-photo-1181279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      : "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt={`${blog.title} image`}
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {blog.title}
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {blog.excerpt}
                </p>
                <div className="flex justify-end">
                <a
                  href={`/blog/${blog.slug}`}
                  className="inline-block text-black-white bg-transparent  border-gray-800  hover:bg-customPurple transition duration-300 dark:border-zinc-50 dark:text-white py-1 px-3 mt-3 rounded border"
                >
                  Read more
                </a>
              </div>
              </div>
            ))}
          </div>
        </div>
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
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="text-center">
              <div className="text-md mt-2 py-1 font-normal text-white/60">
                Web, Platform &amp; Design Copyright © 2024{" "}
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

export default page;
