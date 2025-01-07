import React from "react";
import BlogDetail from "../components/BlogDetail";

const BlogDetailPage = ({ blogs }) => {
  return (
    <div className="mt-20">
      <BlogDetail blogs={blogs} />
    </div>
  );
};

export default BlogDetailPage;
