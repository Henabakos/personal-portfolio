import React from "react";
import Header from "../components/Header";
import { PiPaperPlaneRight } from "react-icons/pi";
import PricingCards from "../components/PricingCards";

const SearviceData = {
  header: " Services & Pricing",
  description:
    " Lorem ipsum quia at earum, quo ad consequatur tenetur iste, cumvoluptatem odio maxime exercitationem pariatur excepturi id voluptatumnemo praesentium?",
  icon: <PiPaperPlaneRight />,
  button: "let's work Together",
};
const customPlan = {
  header: " Went To Hire Me For A Custom Plan ?",
  description:
    " Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore. ",
  icon: <PiPaperPlaneRight />,
  button: "let's work Together",
};
const Service = () => {
  return (
    <div>
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
