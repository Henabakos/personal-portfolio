import React from "react";
import { motion } from "framer-motion";
import WhatIdo from "./WhatIdo";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <motion.div
      className="w-full  bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center justify-center w-14 h-14 btn-gradient text-white rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
          {title}
        </h3>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Build visually appealing, responsive, and user-friendly interfaces with cutting-edge technologies.",
      icon: "🖼️", // Replace with an actual icon if needed
    },
    {
      title: "Backend Development",
      description:
        "Design robust, secure, and scalable server-side architectures to power your applications.",
      icon: "🔧",
    },
    {
      title: "UI/UX Design",
      description:
        "Create intuitive, user-centric designs that enhance usability and deliver seamless experiences.",
      icon: "🎨",
    },
    {
      title: "Fullstack Development",
      description:
        "Develop complete solutions, seamlessly integrating front-end and back-end technologies.",
      icon: "🌐",
    },
  ];

  return (
    <section className="w-full py-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <WhatIdo />
        <div className="grid md:grid-cols-2 justify-center  gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
