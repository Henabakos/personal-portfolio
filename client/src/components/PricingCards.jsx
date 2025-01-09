import React from "react";
import { Link } from "react-router-dom";

const PricingCards = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-800 min-h-screen py-10 px-5">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Fullstack UI/UX Design */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center">
            UI/UX Design
          </h2>
          <p className="text-center my-4 text-gray-600 dark:text-gray-200">
            Delivering exceptional design experiences with seamless usability.
          </p>
          <ul className="text-gray-600 dark:text-gray-200 my-6 space-y-4">
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              Wireframes and Prototypes
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              Responsive Web Design
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              Modern Animations and Interactivity
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              UI/UX Research and Testing
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              Consistent Brand Design
            </li>
          </ul>
          <Link to="/contact">
            <button className="w-full py-3 btn-gradient rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Hire Me!
            </button>
          </Link>
        </div>

        {/* Mobile App Development */}
        <div className="btn-gradient text-white rounded-xl shadow-lg p-8 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-center">
            Mobile App Development
          </h2>
          <p className="text-center my-4">
            Building cutting-edge mobile applications for iOS and Android.
          </p>
          <ul className="my-6 space-y-4">
            <li className="flex items-center">
              <span className="text-green-200 text-xl mr-2">✔</span>
              Cross-Platform Development
            </li>
            <li className="flex items-center">
              <span className="text-green-200 text-xl mr-2">✔</span>
              Intuitive User Interfaces
            </li>
            <li className="flex items-center">
              <span className="text-green-200 text-xl mr-2">✔</span>
              Seamless Backend Integration
            </li>
            <li className="flex items-center">
              <span className="text-green-200 text-xl mr-2">✔</span>
              High Performance and Scalability
            </li>
            <li className="flex items-center">
              <span className="text-green-200 text-xl mr-2">✔</span>
              App Store Deployment Support
            </li>
          </ul>
          <Link to="/contact">
            <button className="w-full py-3 bg-white text-cyan-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Hire Me!
            </button>
          </Link>
        </div>

        {/* Custom Development */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center">
            Full-Stack Development
          </h2>
          <p className="text-center my-4 text-gray-600 dark:text-gray-200">
            Tailored solutions to meet your unique business needs.
          </p>
          <ul className="text-gray-600 dark:text-gray-200 my-6 space-y-4">
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              Fullstack Web Applications
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              Scalable Cloud Solutions
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              API Development and Integration
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              Database Design and Management
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              Continuous Support and Maintenance
            </li>
          </ul>
          <Link to="/contact">
            <button className="w-full py-3 btn-gradient rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Hire Me!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
