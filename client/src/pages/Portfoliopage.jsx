import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import { PiPaperPlaneRight } from "react-icons/pi";
import Header from "../components/Header";

const projectData = [
  {
    title: "Inventory Dashboard",
    description:
      "A robust dashboard to manage inventory and sales in real time.",
    image:
      "https://img.freepik.com/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg",
    features: [
      "Real-time tracking",
      "Customizable UI",
      "Analytics integration",
    ],
    tags: ["React", "Web", "Tailwind CSS"],
    category: "Frontend",
  },
  {
    title: "Inventory Dashboard",
    description:
      "A robust dashboard to manage inventory and sales in real time.",
    image:
      "https://img.freepik.com/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg",
    features: [
      "Real-time tracking",
      "Customizable UI",
      "Analytics integration",
    ],
    tags: ["React", "Web", "Tailwind CSS"],
    category: "Frontend",
  },
  {
    title: "Designr Portfolio Website",
    category: "Design",
    btn1: "React",
    btn2: "Web",
    btn3: "Tailwind",
    img: "https://i.pinimg.com/enabled/564x/f6/f2/82/f6f282669632157cb46e33ea7d8bf5be.jpg",
  },
  {
    title: "Inventory Dashboard",
    description:
      "A robust dashboard to manage inventory and sales in real time.",
    image:
      "https://img.freepik.com/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg",
    features: [
      "Real-time tracking",
      "Customizable UI",
      "Analytics integration",
    ],
    tags: ["React", "Web", "Tailwind CSS"],
    category: "Frontend",
  },
  {
    title: "Inventory Dashboard",
    description:
      "A robust dashboard to manage inventory and sales in real time.",
    image:
      "https://img.freepik.com/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg",
    features: [
      "Real-time tracking",
      "Customizable UI",
      "Analytics integration",
    ],
    tags: ["React", "Web", "Tailwind CSS"],
    category: "Frontend",
  },
];

const PortfolioData = {
  header: "A Collection Of My Best Projects",
  description:
    "Explore a curated selection of my finest work, showcasing my expertise in mobile app development, web design, and UI/UX design. Each project highlights my commitment to quality and innovation, demonstrating how I bring ideas to life through impactful digital solutions.",
  icon: <PiPaperPlaneRight />,
  button: "Let's Work Together",
};

const Portfoliopage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter project data based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  return (
    <div className="w-full mx-auto px-4">
      {/* Header Section */}
      <Header data={PortfolioData} />

      {/* Filter Buttons */}
      <div className="w-full flex items-center justify-center my-10">
        <div className="flex items-center justify-center gap-5 border border-cyan-500 p-2 rounded-xl bg-gray-100 dark:bg-gray-900 shadow-md">
          {["All", "Frontend", "Full-Stack", "Backend", "Design"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)} // Update selected category
                className={`text-sm md:text-lg ${
                  selectedCategory === category
                    ? "text-cyan-500 dark:text-cyan-500"
                    : "text-gray-600 dark:text-white"
                } hover:text-cyan-500 hover:dark:text-cyan-500 transition duration-300`}
              >
                {category}
              </button>
            )
          )}
        </div>
      </div>

      <div className="mx-auto w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            features={project.features}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfoliopage;
