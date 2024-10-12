import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import { PiPaperPlaneRight } from "react-icons/pi";
import Header from "../components/Header";

const projectData = [
  {
    title: "Inventory Dashboard",
    btn1: "React",
    btn2: "Web ",
    btn3: "Tailwind",
    img: "https://img.freepik.com/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg?ga=GA1.1.759831061.1727009205&semt=ais_hybrid",
  },
  {
    title: "Portfolio Website",
    btn1: "React",
    btn2: "Web",
    btn3: "Tailwind",
    img: "https://img.freepik.com/free-vector/flat-design-portfolio-template-design_52683-80880.jpg?ga=GA1.1.759831061.1727009205&semt=ais_hybrid",
  },

  {
    title: "Designr Portfolio Website",
    btn1: "react",
    btn2: "Web ",
    btn3: "Tailwind",
    img: "https://i.pinimg.com/enabled/564x/f6/f2/82/f6f282669632157cb46e33ea7d8bf5be.jpg",
  },

  {
    title: "E-commerce Website",
    btn1: "react",
    btn2: "Web ",
    btn3: "Tailwind",
    img: "https://img.freepik.com/premium-photo/website-company-called-nike_659722-12325.jpg?ga=GA1.1.759831061.1727009205&semt=ais_hybrid",
  },

  {
    title: "Gym Website",
    btn1: "react",
    btn2: "Web ",
    btn3: "Tailwind",
    img: "https://i.pinimg.com/564x/85/dd/4f/85dd4f0031481e04ed1c873029718456.jpg",
  },
  {
    title: "Designr Portfolio Website",
    btn1: "react",
    btn2: "Web ",
    btn3: "Tailwind",
    img: "https://i.pinimg.com/enabled/564x/f6/f2/82/f6f282669632157cb46e33ea7d8bf5be.jpg",
  },

  {
    title: "E-commerce Website",
    btn1: "react",
    btn2: "Web ",
    btn3: "Tailwind",
    img: "https://img.freepik.com/premium-photo/website-company-called-nike_659722-12325.jpg?ga=GA1.1.759831061.1727009205&semt=ais_hybrid",
  },

  {
    title: "Gym Website",
    btn1: "react",
    btn2: "Web ",
    btn3: "Tailwind",
    img: "https://i.pinimg.com/564x/85/dd/4f/85dd4f0031481e04ed1c873029718456.jpg",
  },
];

const PortfolioData = {
  header: "A Collection Of My Best Projects",
  description:
    "Lorem ipsum quia at earum, quo ad consequatur tenetur iste, cum voluptatem odio maxime exercitationem pariatur excepturi id voluptatumnemo praesentium?",
  icon: <PiPaperPlaneRight />,
  button: "Let's Work Together",
};

const Portfoliopage = () => {
  return (
    <div className="w-full mx-auto px-4">
      {/* Header Section */}
      <Header data={PortfolioData} />

      {/* Filter Buttons */}
      <div className="w-full flex items-center justify-center my-10">
        <div className="flex items-center justify-center gap-4 border p-2 rounded-xl bg-gray-100 shadow-md">
          {["All", "Front-end", "Full-stack", "Back-end", "Design"].map(
            (category) => (
              <button
                key={category}
                className="text-sm md:text-lg text-gray-600 hover:text-blue-500 transition duration-300"
              >
                {category}
              </button>
            )
          )}
        </div>
      </div>

      {/* Project Cards */}
      <div className="mx-auto w-full grid sm:grid-cols-3 xl:grid-cols-3 gap-y-5 gap-x-2">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index} // Unique key for each project
            image={project.img}
            btn1={project.btn1}
            btn2={project.btn2}
            btn3={project.btn3}
            title={project.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfoliopage;
