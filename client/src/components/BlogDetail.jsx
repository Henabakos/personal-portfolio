import React from "react";
import Header from "./Header";
import { PiPaperPlaneRight } from "react-icons/pi";
const PortfolioData = {
  header: "Case Study: Agency Website Development For Dev X",
  description:
    "Discover my case studies to see how I address real-world challenges with impactful solutions. Each highlights my user-centered design approach, from e-commerce revamps to mobile app launches, focusing on enhancing user satisfaction and achieving client goals.",
  icon: <PiPaperPlaneRight />,
  button: "Let's Work Together",
};
const BlogDetail = () => {
  return (
    <div className="w-full px-10 lg:px-[100px] md:px-20 py-10">
      <Header data={PortfolioData} />
      <div className="max-w-full mx-auto">
        {/* Blog Title */}
        <h1 className="text-3xl font-bold mb-4 ">
          Understanding Responsive Design
        </h1>
        <p className="text-gray-600 dark:text-gray-100 mb-4">
          Published on: <span className="font-medium">October 19, 2024</span>
        </p>
        {/* Blog Image */}
        <img
          src="https://i.pinimg.com/enabled/564x/f6/f2/82/f6f282669632157cb46e33ea7d8bf5be.jpg"
          alt="Blog Cover"
          className="w-full h-[500px] object-cover rounded-lg shadow-lg mb-6"
        />

        <p className="text-gray-700 dark:text-gray-100 leading-relaxed mb-6">
          Responsive design is an approach that allows web pages to render well
          on a variety of devices and window or screen sizes. Recent
          advancements in web technology have made it easier than ever to create
          layouts that adapt fluidly to changing conditions.
        </p>

        {/* Bullet Points */}
        <h2 className="text-xl  lg:text-3xl font-semibold mb-2">Key Points:</h2>
        <ul className="list-disc pl-5 mb-6 text-gray-700 dark:text-gray-100">
          <li>Adapts to any screen size and device type.</li>
          <li>Improves user experience and accessibility.</li>
          <li>Reduces the need for multiple versions of a site.</li>
          <li>SEO benefits from a single URL structure.</li>
          <li>Cost-effective in the long run.</li>
        </ul>

        {/* Conclusion */}
        <h2 className="text-xl lg:text-3xl  font-semibold mb-2">Conclusion</h2>
        <p className="text-gray-700 dark:text-gray-100 leading-relaxed">
          Embracing responsive design ensures that your website is not only
          visually appealing but also functional across various platforms. This
          approach is crucial for meeting user expectations in today’s digital
          landscape.
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;
