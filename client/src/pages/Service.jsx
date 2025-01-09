import React from "react";
import Header from "../components/Header";
import { PiPaperPlaneRight } from "react-icons/pi";
import PricingCards from "../components/PricingCards";

const SearviceData = {
  header: " Services & Pricing",
  description:
    " Discover the range of services I offer, tailored to meet your specific needs. From mobile app development to UI/UX design and website creation, I provide transparent pricing to ensure you receive exceptional value for your investment. Let’s find the perfect solution for your project!",
  icon: <PiPaperPlaneRight />,
  button: "let's work Together",
};
const customPlan = {
  header: " Went To Hire Me For A Custom Plan ?",
  description:
    " I’m here to help bring your unique vision to life! Whether you have a specific project in mind or need tailored solutions, I offer flexible custom plans designed to meet your goals and budget. Let’s collaborate to create something exceptional together! ",
  icon: <PiPaperPlaneRight />,
  button: "let's work Together",
};
const Service = () => {
  return (
    <div className="">
      <Header data={SearviceData} />
      <div className="w-full flex flex-col pl-2 md:pl-16 mb-10 pb-6 border-gray-300">
        <div className="px-4 md:px-0 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-[400] text-gray-800 dark:text-gray-100 mb-4">
            <span className="text-blue-500 font-light pr-3">|</span>
            service Package
          </h1>
          <p className="text-base md:text-lg font-normal text-gray-600 dark:text-gray-200 leading-relaxed">
            Explore the range of services I provide to help bring your projects
            to life. From initial concept to final delivery, I am committed to
            delivering high-quality results tailored to your needs.
          </p>
        </div>
      </div>
      <PricingCards />
      <Header data={customPlan} />
    </div>
  );
};

export default Service;
