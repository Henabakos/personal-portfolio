import React from "react";
import BlogCard from "../components/BlogCard";
const blogData = [
  {
    image:
      "https://img.freepik.com/free-vector/gradient-futuristic-cyber-background_23-2149116407.jpg?ga=GA1.1.759831061.1727009205&semt=ais_hybrid",
    title: "The Revolution Of AI",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex dolorem deserunt earum vero aliquam nam iste corporis illo pariatur ?",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/web-development-coding-programming-internet-technology-business-concept_628331-249.jpg?w=740",
    title: "The Revolution Of AI",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex dolorem deserunt earum vero aliquam nam iste corporis illo pariatur ?",
  },
  {
    image:
      "https://img.freepik.com/free-vector/background-pixel-rain-abstract_23-2148374569.jpg?ga=GA1.1.759831061.1727009205&semt=ais_hybrid",
    title: "The Revolution Of AI",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex dolorem deserunt earum vero aliquam nam iste corporis illo pariatur ?",
  },
  {
    image:
      "https://img.freepik.com/free-photo/technology-circuit-processor-innovation-network-concept_53876-124249.jpg?ga=GA1.1.759831061.1727009205&semt=ais_hybrid",
    title: "The Revolution Of AI",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex dolorem deserunt earum vero aliquam nam iste corporis illo pariatur ?",
  },
  {
    image:
      "https://img.freepik.com/free-vector/abstract-gradient-circuit-board-background_52683-14562.jpg?ga=GA1.1.759831061.1727009205&semt=ais_hybrid",
    title: "The Revolution Of AI",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex dolorem deserunt earum vero aliquam nam iste corporis illo pariatur ?",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/computer-screen-with-words-code-it_1126040-1237.jpg?ga=GA1.1.759831061.1727009205&semt=ais_hybrid",
    title: "The Revolution Of AI",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex dolorem deserunt earum vero aliquam nam iste corporis illo pariatur ?",
  },
];

const BlogPage = () => {
  return (
    <div>
      <div className="w-full h-[50vh] sm:h-[30vh] lg:h-[50vh] border-b mb-20">
        <div className="w-full h-full flex flex-col md:items-center justify-center">
          <h1 className="text-2xl font-[500] md:text-3xl text-center">
            A Blog About Software Development And Life
          </h1>
          <p className="w-[80%] text-sm md:text-lg font-regular text-gray-700 dark:text-gray-200 leading-relaxed py-4 text-center mx-auto mb-6 ">
            Explore the range of services I provide to help bring your
            projectsto life. From initial concept to final delivery
          </p>
          <div className="w-full md:w-[80%] px-8 grid sm:grid-cols-2 gap-8 justify-center items-center">
            <input
              type="text"
              placeholder="Subscribe to get latest blog"
              className="border border-blue-500 dark:bg-[#3b3b3b] h-12 shadow-md rounded-lg px-4"
            />
            <button className="bg-blue-500 text-white rounded-full  h-12">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {blogData.map((data) => (
          <BlogCard data={data} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
