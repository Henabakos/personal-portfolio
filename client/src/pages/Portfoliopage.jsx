import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import { PiPaperPlane, PiPaperPlaneRight } from "react-icons/pi";
import Header from "../components/Header";

const projectData = [
  {
    title: "Inventory Dashboard",
    btn1: "react js",
    btn2: "Web development",
    btn3: "TailwindCss",
    img: "https://img.freepik.com/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg?ga=GA1.1.759831061.1727009205&semt=ais_hybrid",
  },
  {
    title: "Portfolio Website",
    btn1: "react js",
    btn2: "Web development",
    btn3: "TailwindCss",
    img: "https://img.freepik.com/free-vector/flat-design-portfolio-template-design_52683-80880.jpg?ga=GA1.1.759831061.1727009205&semt=ais_hybrid",
  },
  {
    title: "E-commerce Website",
    btn1: "react js",
    btn2: "Web development",
    btn3: "TailwindCss",
    img: "https://img.freepik.com/premium-photo/website-company-called-nike_659722-12325.jpg?ga=GA1.1.759831061.1727009205&semt=ais_hybrid",
  },
  {
    title: "Admin Dashboard",
    btn1: "react js",
    btn2: "Web development",
    btn3: "TailwindCss",
    img: "https://img.freepik.com/free-vector/dashboard-user-panel-template_23-2148373760.jpg?ga=GA1.1.759831061.1727009205&semt=ais_hybrid",
  },
];

const PortfolioData = {
  header: " A Collection Of My Best Projects",
  description:
    " Lorem ipsum quia at earum, quo ad consequatur tenetur iste, cumvoluptatem odio maxime exercitationem pariatur excepturi id voluptatumnemo praesentium?",
  icon: <PiPaperPlaneRight />,
  button: "let's work Together",
};
const Portfoliopage = () => {
  return (
    <div className="w-full mx-auto">
      <Header data={PortfolioData} />
      <div className="w-full flex  items-center justify-center my-10 ">
        <div className="flex items-center justify-center gap-4 border p-2 rounded-xl">
          <button className="text-blue-500 text-sm md:text-lg">All</button>
          <button>Front-end</button>
          <button>Full-stack</button>
          <button>Back-end</button>
          <button>Design</button>
        </div>
      </div>
      <div className="mx-auto w-full grid sm:grid-cols-2  xl:grid-cols-3 gap-8">
        {projectData.map((project) => (
          <ProjectCard
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
