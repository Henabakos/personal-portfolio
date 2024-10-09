import React from "react";

import HeroSection from "../components/HeroSection";
import WhatIdo from "../components/WhatIdo";
import Progress from "../components/Progress";
import SkillCards from "../components/SkillCards";
import Banner from "../components/Banner";
import FeaturedProjects from "../components/FeaturedProjects";
import ProjectCard from "../components/ProjectCard";
import Testimonial from "../components/Testimonial";
import BlogSection from "../components/BlogSection";

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
];
const LandingPage = () => {
  return (
    <div className="w-full ">
      <HeroSection />

      <WhatIdo />
      <SkillCards />
      <Banner />
      <FeaturedProjects />
      <div className="mx-auto w-full grid sm:grid-cols-2  gap-8 border-b pb-16 mb-10">
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
      <Testimonial />
      <BlogSection />
    </div>
  );
};

export default LandingPage;
