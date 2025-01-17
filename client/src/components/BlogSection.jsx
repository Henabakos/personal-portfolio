import React from "react";
import BlogCard from "./BlogCard";
import BlogHeader from "./BlogHeader";
import BlogGrid from "./BlogGrid";
import { Blogs } from "../constants";

const BlogSection = () => {
  return (
    <div className="max-sm:px-4">
      <BlogHeader />
      <BlogGrid blogs={Blogs} />
    </div>
  );
};

export default BlogSection;
