import React from "react";

import HeroSection from "../components/HeroSection";
import WhatIdo from "../components/WhatIdo";
import Progress from "../components/Progress";
import SkillCards from "../components/Services";
import Banner from "../components/Banner";
import FeaturedProjects from "../components/FeaturedProjects";
import ProjectCard from "../components/ProjectCard";
import Testimonial from "../components/Testimonial";
import BlogSection from "../components/BlogSection";
import {
  FaBootstrap,
  FaChartBar,
  FaCss3,
  FaCss3Alt,
  FaDatabase,
  // FaGit,
  // FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import Services from "../components/Services";

const projects = [
  {
    name: "E-Commerce Website",
    quote: "A responsive e-commerce platform offering seamless experiences.",
    title: "Frontend & Backend Development",
    icons: [
      <FaReact size={36} className="text-sky-400" />,
      <FaNodeJs size={36} className="text-green-600" />,
      <FaCss3Alt size={36} className="text-purple-700" />,
    ],
  },
  {
    quote:
      "A real-time chat application enabling users to communicate effectively, featuring private and group messaging.",
    name: "Chat Application",
    title: "Full-Stack Development",
    icons: [
      <FaReact size={36} className="text-sky-400" />,
      <FaNodeJs size={36} className="text-green-600" />,
      <FaDatabase size={36} className="text-orange-500" />,
    ],
  },
  {
    quote:
      "A portfolio website showcasing my skills, projects, and professional background, designed to be visually appealing and highly interactive.",
    name: "Portfolio Website",
    title: "Frontend Development",
    icons: [
      <FaHtml5 size={36} className="text-orange-600" />,
      <FaCss3 size={36} className="text-blue-500" />,
      <FaReact size={36} className="text-sky-400" />,
    ],
  },
  {
    quote:
      "A task management system allowing users to create, assign, and monitor tasks efficiently, with features like priority setting and deadlines.",
    name: "Task Management Tool",
    title: "Full-Stack Development",
    icons: [
      <FaReact size={36} className="text-sky-400" />,
      <FaNodeJs size={36} className="text-green-600" />,
      <FaDatabase size={36} className="text-orange-500" />,
    ],
  },
  {
    quote:
      "A blogging platform where users can create, edit, and share posts, with built-in support for rich-text editing and user comments.",
    name: "Blogging Platform",
    title: "Full-Stack Development",
    icons: [
      <FaReact size={36} className="text-sky-400" />,
      <FaNodeJs size={36} className="text-green-600" />,
      <FaDatabase size={36} className="text-orange-500" />,
    ],
  },
  {
    quote:
      "A ticket booking system for events, enabling users to browse events, book tickets, and manage reservations easily.",
    name: "Ticket Booking System",
    title: "Full-Stack Development",
    icons: [
      <FaReact size={36} className="text-sky-400" />,
      <FaNodeJs size={36} className="text-green-600" />,
      <FaBootstrap size={36} className="text-purple-700" />,
    ],
  },
  {
    quote:
      "A weather forecasting app providing real-time weather data and forecasts, integrated with location-based services.",
    name: "Weather App",
    title: "Frontend Development",
    icons: [
      <FaReact size={36} className="text-sky-400" />,
      <FaNodeJs size={36} className="text-green-600" />,
      <FaBootstrap size={36} className="text-purple-700" />,
    ],
  },
  {
    quote:
      "A financial dashboard providing insights into expenses, budgets, and analytics using interactive charts and graphs.",
    name: "Financial Dashboard",
    title: "Frontend & Data Visualization",
    icons: [
      <FaReact size={36} className="text-sky-400" />,
      <FaChartBar size={36} className="text-yellow-600" />,
      <FaDatabase size={36} className="text-orange-500" />,
    ],
  },
];

const projectData = [
  {
    title: "Portfolio Website",
    btn1: "react",
    btn2: "Web",
    btn3: "Tailwind",
    img: "https://img.freepik.com/free-vector/flat-design-portfolio-template-design_52683-80880.jpg?ga=GA1.1.759831061.1727009205&semt=ais_hybrid",
  },
  {
    title: "Inventory Dashboard",
    btn1: "react ",
    btn2: "Web ",
    btn3: "Tailwind",
    img: "https://img.freepik.com/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg?ga=GA1.1.759831061.1727009205&semt=ais_hybrid",
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
const LandingPage = () => {
  return (
    <div className="w-full sm:px-10 lg:px-24">
      <HeroSection />
      <Services />
      <Banner />
      <FeaturedProjects />
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-10 max-sm:px-10 px-4">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
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
      <div className="w-full flex flex-col md:flex-row md:items-center  border-b my-10  px-2 md:px-10  ">
        <div className="flex flex-col md:justify-center p-4 my-4 w-full lg:w-[70vw]">
          <h1 className="text-3xl sm:text-3xl md:text-4xl  font-[400] text-slate-700 dark:text-gray-100 py-5">
            <span className="text-blue-500 font-light pr-3">|</span>
            Get In Touch
          </h1>
          <p className="text-base md:text-lg font-normal text-gray-700 dark:text-gray-200 leading-relaxed pl-1">
            I’d love to hear from you! Whether you have a project in mind, a
            question, or just want to connect, feel free to reach out. Let’s
            discuss how we can work together to bring your ideas to life.
          </p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default LandingPage;
