import React from "react";
import BlogCard from "../components/BlogCard";
import BlogGrid from "../components/BlogGrid";

const BlogPage = ({ blogs }) => {
  return (
    <div>
      <div className="w-full h-[50vh] sm:h-[30vh] lg:h-[50vh] border-b mb-20 mt-20">
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
              className="border border-purple-600 dark:bg-gray-900 h-12 shadow-md rounded-lg px-4"
            />
            <button className="btn-gradient rounded-full  h-12">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="my-10">
        <BlogGrid blogs={blogs} />
      </div>
    </div>
  );
};

export default BlogPage;
