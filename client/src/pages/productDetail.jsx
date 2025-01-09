import React from "react";
import Header from "../components/Header";
import { PiPaperPlaneRight } from "react-icons/pi";
import { useParams } from "react-router-dom";

const PortfolioData = {
  header: "Case Study: Agency Website Development For Dev X",
  description:
    "Discover my case studies to see how I address real-world challenges with impactful solutions. Each highlights my user-centered design approach, from e-commerce revamps to mobile app launches, focusing on enhancing user satisfaction and achieving client goals.",
  icon: <PiPaperPlaneRight />,
  button: "Let's Work Together",
};

const ProductDetail = ({ projects }) => {
  const { id } = useParams();

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div className="p-6 text-center"> project not found</div>;
  }

  const {
    title,
    client,
    link,
    company,
    projectOverview,
    problem,
    solution,
    requirements,
    image,
  } = project;

  return (
    <div className="w-full px-4 md:px-20 py-10 flex flex-col gap-10">
      <Header data={PortfolioData} />
      <div className="flex flex-col sm:flex-row gap-10 ">
        <div className="w-full md:w-1/3 sticky top-10 self-start h-fit">
          {/* Client Info */}
          <div className="border border-cyan-500 rounded-lg p-4 bg-white dark:bg-gray-800 shadow-md">
            <h2 className="text-xl font-extrabold mb-4 text-gradient">
              Client Information
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium">Industry:</h3>
                <p className="text-gray-500 dark:text-gray-400">{company}</p>
              </div>
              <div>
                <h3 className="font-medium">Project-Name:</h3>
                <p className="text-gray-500 dark:text-gray-400 ">{title}</p>
              </div>
              <div>
                <h3 className="font-medium">Location:</h3>
                <p className="text-gray-500 dark:text-gray-400">{client}</p>
              </div>
              <div>
                <h3 className="font-medium">Live-link:</h3>
                <p className="text-gray-500 dark:text-gray-400">{link}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          {/* Project Details */}
          <div className="mb-6">
            <img
              src={image}
              alt={title}
              className="w-full h-[300px] object-cover rounded-lg shadow-md"
            />
            <p className="mt-2 text-gray-600 dark:text-gray-400 ">
              Project Description
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-2">Project Requirements</h2>
          <ul className="list-disc pl-5 mb-6 text-gray-500 dark:text-gray-400 ">
            {requirements?.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            )) || <li>No requirements available</li>}
          </ul>

          <h2 className="text-xl font-semibold mb-2">Project Overview</h2>
          <p className="mb-4 text-gray-500 dark:text-gray-400 font-light ">
            {projectOverview}
          </p>

          <h2 className="text-xl font-semibold mb-2">The Challenge</h2>
          <p className="mb-4 text-gray-500 dark:text-gray-400 font-light ">
            {problem}
          </p>

          <h2 className="text-xl font-semibold mb-2">The Solution</h2>
          <p className="text-gray-500 dark:text-gray-400  font-light">
            {solution}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
