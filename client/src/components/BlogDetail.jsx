import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id.toString() === id);

  if (!blog) {
    return <div className="p-6 text-center">Blog not found!</div>;
  }

  const { title, author, date, content, featuredImage } = blog;

  return (
    <div className="w-full  mx-auto p-6 sm:px-20">
      <img
        src={featuredImage}
        alt={title}
        className="w-full h-80 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-4 text-gradient">{title}</h1>
      <div className="text-gray-500 text-sm mb-8">
        By <span className="font-medium">{author}</span> • {date}
      </div>
      <div>
        {content.map((item, index) => {
          switch (item.type) {
            case "heading":
              return (
                <h2 key={index} className="text-2xl font-bold py-3">
                  {item.text}
                </h2>
              );
            case "paragraph":
              return <p key={index}>{item.text}</p>;
            case "list":
              return (
                <ul key={index}>
                  {item.items.map((listItem, listIndex) => (
                    <li key={listIndex}>{listItem}</li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default BlogDetail;
