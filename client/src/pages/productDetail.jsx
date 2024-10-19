import React from "react";
import Header from "../components/Header";
import { PiPaperPlaneRight } from "react-icons/pi";

const PortfolioData = {
  header: "Case Study: Agency Website Development For Dev X",
  description:
    "Discover my case studies to see how I address real-world challenges with impactful solutions. Each highlights my user-centered design approach, from e-commerce revamps to mobile app launches, focusing on enhancing user satisfaction and achieving client goals.",
  icon: <PiPaperPlaneRight />,
  button: "Let's Work Together",
};

const ProductDetail = () => {
  return (
    <div className="w-full px-4 md:px-20 py-10 flex flex-col gap-10">
      <Header data={PortfolioData} />
      <div className="flex flex-col sm:flex-row gap-10 ">
        <div className="md:w-1/3 sticky top-10 h-fit">
          {/* Client Info */}
          <div className="border rounded-lg p-4 bg-white dark:text-gray-100 shadow-md">
            <h2 className="text-lg font-semibold mb-4">Client Information</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium">Name:</h3>
                <p className="text-gray-700 dark:text-gray-100">Dev X</p>
              </div>
              <div>
                <h3 className="font-medium">Industry:</h3>
                <p className="text-gray-700 lg:text-3xl ">Technology</p>
              </div>
              <div>
                <h3 className="font-medium">Location:</h3>
                <p className="text-gray-700 lg:text-3xl ">Remote</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          {/* Project Details */}
          <div className="mb-6">
            <img
              src="https://i.pinimg.com/564x/85/dd/4f/85dd4f0031481e04ed1c873029718456.jpg"
              alt="Project"
              className="w-full h-[300px] object-cover rounded-lg shadow-md"
            />
            <p className="mt-2 text-gray-600">Project Description</p>
          </div>

          <h2 className="text-xl font-semibold mb-2">Project Requirements</h2>
          <ul className="list-disc pl-5 mb-6 text-gray-700">
            <li>Responsive design</li>
            <li>User-friendly interface</li>
            <li>Integration with existing systems</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Project Overview</h2>
          <p className="mb-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In minima
            recusandae, officiis illum, voluptates animi delectus sunt commodi
            optio autem eligendi numquam nemo ea sint rem, corporis aliquid
            velit vel!
          </p>

          <h2 className="text-xl font-semibold mb-2">The Challenge</h2>
          <p className="mb-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
            necessitatibus perferendis perspiciatis quae ipsa nobis cumque eaque
            dolores! Aliquam laboriosam enim magni corporis vitae, soluta
            cupiditate adipisci tenetur at aspernatur?
          </p>

          <h2 className="text-xl font-semibold mb-2">The Solution</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
            necessitatibus perferendis perspiciatis quae ipsa nobis cumque eaque
            dolores! Aliquam laboriosam enim magni corporis vitae, soluta
            cupiditate adipisci tenetur at aspernatur?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
