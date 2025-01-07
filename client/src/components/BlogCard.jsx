import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { id, title, excerpt, author, date, readingTime, image } = blog;

  return (
    <Link to={`/blog/${id}`} className="block group">
      <div className="rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800 overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-105">
        {/* Thumbnail Image */}
        <img src={image} alt={title} className="w-full h-48 object-cover" />

        {/* Content Section */}
        <div className="p-4">
          {/* Title */}
          <h2 className="text-lg font-bold text-cyan-500  mb-2 line-clamp-2 group-hover:text-gradient">
            {title}
          </h2>

          {/* Excerpt */}
          <p className="text-gray-600 dark:text-gray-50 text-sm line-clamp-2 mb-4">
            {excerpt}
          </p>

          {/* Metadata */}
          <div className="text-gray-500 dark:text-gray-200 text-xs mb-4">
            By <span className="font-medium">{author}</span> • {date} •
            {readingTime}
          </div>

          {/* Call to Action */}
          <div className="text-right">
            <span className="inline-block text-cyan-500 text-sm font-medium group-hover:underline">
              Read More →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
