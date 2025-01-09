import React from "react";

import HeroSection from "../components/HeroSection";

import Banner from "../components/Banner";
import FeaturedProjects from "../components/FeaturedProjects";
import ProjectCard from "../components/ProjectCard";
import Testimonial from "../components/Testimonial";
import BlogSection from "../components/BlogSection";

import ContactForm from "../components/ContactForm";
import Services from "../components/Services";
import { projects } from "../constants";

const LandingPage = () => {
  return (
    <div className="w-full ">
      <HeroSection />
      <Services />
      <Banner />
      <FeaturedProjects />
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mb-10 gap-10 px-4">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard key={index} project={project} />
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
