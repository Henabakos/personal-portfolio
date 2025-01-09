import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Progress from "./Progress";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full pt-32 flex max-sm:px-0 max-lg:px-8 flex-col items-center justify-center  dark:bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between md:gap-24">
        <div className="w-full text-center md:text-left">
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#13282b] dark:text-gray-100 mb-4">
            Hi,<span className=" px-0 lg:px-2"> I&apos;m</span>
            <span className="text-gradient pl-3">Henok Assefa</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
            <span className="text-gradient">
              <Typewriter
                words={["DEVELOPER", "DESIGNER", "FREELANCER"]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={80}
                delaySpeed={1200}
              />
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 font-light max-sm:px-5">
            I craft innovative mobile apps, dynamic websites, and user-centered
            digital solutions that create meaningful experiences for clients
            worldwide.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            <Link to="/contact" aria-label="Contact me">
              <button className="btn-gradient px-6 py-3 rounded-full  w-[150px] text-white font-medium hover:scale-105 transition-transform duration-300 shadow-md">
                Let&apos;s Talk
              </button>
            </Link>
            <Link to="/resume" aria-label="View my resume">
              <button className="px-6 py-3 rounded-full border-2 border-cyan-500  text-gradient font-medium bg-transparent hover:scale-105 transition-transform duration-300 shadow-md  w-[150px">
                View Resume
              </button>
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <motion.div
          className="mt-10 md:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative w-40 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-80">
            <img
              src="profile.jpg"
              alt="profile"
              className="w-full h-full rounded-2xl shadow-lg transition-transform duration-300 object-cover border-[4px] border-cyan-500/70"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-cyan-600/25 rounded-2xl"></div>
          </div>
        </motion.div>
      </div>
      <div className="flex py-10">
        <Progress />
      </div>
    </section>
  );
};

export default HeroSection;
