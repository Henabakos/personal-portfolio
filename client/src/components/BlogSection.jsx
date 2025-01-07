import React from "react";
import BlogCard from "./BlogCard";
import BlogHeader from "./BlogHeader";
import BlogGrid from "./BlogGrid";

const dummyBlogs = [
  {
    id: 1,
    title: "How to Start with React",
    excerpt:
      "Learn the basics of React and start building your first app today.",
    author: "Jane Doe",
    date: "Jan 7, 2025",
    readingTime: "5 min read",
    image: "https://via.placeholder.com/400x200",
    featuredImage: "https://via.placeholder.com/800x400",
    content: [
      "React is a popular JavaScript library for building user interfaces.",
      "This guide will walk you through the basics of getting started with React.",
    ],
  },
  {
    id: 2,
    title: "Understanding Tailwind CSS",
    excerpt:
      "Discover how CSS Grid and Flexbox can transform your web layouts, making them responsive and user-friendly.",
    author: "Henok Assefa",
    date: "Jan 8, 2025",
    readingTime: "7 min read",
    image: "https://via.placeholder.com/400x200",
    featuredImage: "https://via.placeholder.com/800x400",
    content: [
      "Introduction: Importance of responsive design and how CSS Grid and Flexbox are game-changers.",
      "Understanding CSS Grid: Concepts, code examples, and use cases.",
      "Exploring Flexbox: Key properties, patterns, and examples.",
      "Combining Grid and Flexbox: Guide to building layouts with both.",
      "Best Practices: Mobile-first design and optimizing layouts for various screen sizes.",
      "Conclusion: Advantages of CSS Grid and Flexbox.",
    ],
  },
];
const BlogSection = () => {
  return (
    <div className="max-sm:px-4">
      <BlogHeader />
      <BlogGrid blogs={dummyBlogs} />
    </div>
  );
};

export default BlogSection;
