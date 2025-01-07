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
    title: "Inventory Dashboard",
    description:
      "A robust dashboard to manage inventory and sales in real time.",
    image:
      "https://i.pinimg.com/474x/b1/93/a3/b193a3e2211a3be34eaffa4ce7c71505.jpg",
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
    title: "Inventory Dashboard",
    description:
      "A robust dashboard to manage inventory and sales in real time.",
    image:
      "https://i.pinimg.com/236x/04/2c/57/042c577a9bbc63473b6269ff8693902f.jpg",
    features: [
      "Real-time tracking",
      "Customizable UI",
      "Analytics integration",
    ],
    tags: ["React", "Web", "Tailwind CSS"],
    category: "Frontend",
  },
];
const LandingPage = () => {
  return (
    <div className="w-full  ">
      <HeroSection />
      <Services />
      <Banner />
      <FeaturedProjects />
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mb-10 gap-10 px-4">
        {projectData.map((project, index) => (
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

      <Testimonial />
      <BlogSection />
      <div className="w-full flex flex-col md:flex-row items-center justify-between py-12  dark:bg-gray-900 max-sm:px-4 gap-8">
        <div className="flex-1 flex flex-col text-left">
          <h1 className="text-3xl md:text-4xl font-[400] text-gray-800 dark:text-gray-100 mb-6">
            <span className="text-blue-500 font-light pr-3">|</span>
            Get In Touch
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
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
