import React from "react";
import BlogCard from "./BlogCard";
import BlogHeader from "./BlogHeader";

const blogData = [
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
const BlogSection = () => {
  return (
    <div>
      <BlogHeader />
      <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-8  px-2 md:px-10 ">
        {blogData.map((data) => (
          <BlogCard data={data} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
