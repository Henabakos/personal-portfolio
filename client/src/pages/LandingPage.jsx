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
import {
  FaBootstrap,
  FaCss3,
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

const skills = [
  {
    quote:
      "HTML & CSS are the building blocks of the web, forming the structure and styling that shape the visual experiences of modern websites.",
    name: "HTML & CSS",
    title: "Frontend Basics",
    icons: {
      icon: <FaHtml5 size={24} className="text-orange-600" />,
      icon1: <FaCss3 size={24} />,
    },
  },
  {
    quote:
      "Tailwind & Bootstrap offer modern utility-first and component-based frameworks that streamline web development and make responsive design a breeze.",
    name: "Tailwind & Bootstrap",
    title: "CSS Frameworks",
    icons: {
      icon: <FaBootstrap size={24} className="text-purple-700" />,
      icon1: <FaCss3Alt size={24} className="text-blue-600" />,
    },
  },
  {
    quote:
      "React & Next.js enable developers to build fast, scalable, and interactive web applications with ease, leveraging component-based architecture.",
    name: "React & Next.js",
    title: "JavaScript Frameworks",
    icons: {
      icon: <FaReact size={24} className="text-sky-400" />,
      icon1: <FaNodeJs size={24} className="text-green-600" />,
    },
  },
  {
    quote:
      "MongoDB & Express combine to create the backend foundation for full-stack development, enabling powerful data handling and API creation.",
    name: "MongoDB & Express",
    title: "Backend Development",
    icons: {
      icon: <FaNodeJs size={24} className="text-green-500" />,
      icon1: null,
    },
  },
  {
    quote:
      "Git & GitHub form the backbone of modern version control and collaboration, enabling developers to work together and track changes seamlessly.",
    name: "Git & GitHub",
    title: "Version Control",
    icons: {
      icon: <FaGit size={24} className="text-red-500" />,
      icon1: <FaGithub size={24} className="text-sky-950" />,
    },
  },
  {
    quote:
      "Antd & Material UI are comprehensive component libraries that offer reusable, customizable UI elements for building intuitive and responsive user interfaces.",
    name: "Antd & Material UI",
    title: "UI Component Libraries",
    icons: {
      icon: <FaGit size={24} className="text-red-500" />,
      icon1: <FaGithub size={24} className="text-sky-950" />,
    },
  },
  {
    quote:
      "MySQL & PostgreSQL are robust relational database systems that provide reliable, efficient storage and querying capabilities for large-scale applications.",
    name: "MySQL & PostgreSQL",
    title: "Relational Databases",
    icons: {
      icon: <FaGit size={24} className="text-red-500" />,
      icon1: <FaGithub size={24} className="text-sky-950" />,
    },
  },
  {
    quote:
      "Shadcn & NextUI provide modern design systems and UI frameworks for building sleek, responsive web applications with great developer experience.",
    name: "Shadcn & NextUI",
    title: "Design Systems",
    icons: {
      icon: <FaGit size={24} className="text-red-500" />,
      icon1: <FaGithub size={24} className="text-sky-950" />,
    },
  },
];
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
      <div className="flex flex-col w-full mb-10 h-full">
        <SkillCards items={skills} direction={"left"} speed={"slow"} />
        <SkillCards items={skills} direction={"right"} speed={"slow"} />
      </div>
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
