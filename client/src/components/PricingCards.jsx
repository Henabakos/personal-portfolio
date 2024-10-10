import React from "react";

const PricingCards = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 dark:bg-[#636363] min-h-screen py-10 px-5">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-[#3b3b3b] rounded-xl shadow-lg p-8 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800  dark:text-gray-200 text-center">
            Basic Plan
          </h2>
          <p className="text-center my-4">
            <span className="text-4xl font-bold text-gradient">$100</span>
            <span className="text-gray-600 dark:text-gray-200">/month</span>
          </p>
          <ul className="text-gray-600 dark:text-gray-200 my-6 space-y-4">
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              Static Website (up to 5 pages)
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              Basic UI Design
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              Contact Form Integration
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              SEO Optimization
            </li>{" "}
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              No Backend Services (e.g., No Databases)
            </li>
          </ul>
          <button className="w-full py-3  btn-gradient  rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>

        <div className="btn-gradient text-white rounded-xl shadow-lg p-8 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-center">Pro Plan</h2>
          <p className="text-center my-4">
            <span className="text-4xl font-bold">$250</span>
            <span>/month</span>
          </p>
          <ul className="my-6 space-y-4">
            <li className="flex items-center">
              <span className="text-green-200 text-xl mr-2">✔</span>
              Dynamic Website (up to 10 pages)
            </li>
            <li className="flex items-center">
              <span className="text-green-200 text-xl mr-2">✔</span>
              Custom UI Design with Animations
            </li>
            <li className="flex items-center">
              <span className="text-green-200 text-xl mr-2">✔</span>
              API Integration
            </li>
            <li className="flex items-center">
              <span className="text-green-200 text-xl mr-2">✔</span>
              Backend Services
            </li>
            <li className="flex items-center">
              <span className="text-green-200 text-xl mr-2">✔</span>
              Performance Optimization
            </li>
          </ul>
          <button className="w-full py-3 bg-white text-purple-500 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>

        <div className="bg-white dark:bg-[#3b3b3b] rounded-xl shadow-lg p-8 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center">
            Enterprise Plan
          </h2>
          <p className="text-center my-4">
            <span className="text-4xl font-bold text-gradient">$500</span>
            <span className="text-gray-600 dark:text-gray-200">/month</span>
          </p>
          <ul className="text-gray-600 dark:text-gray-200 my-6 space-y-4">
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              Complex Website (unlimited pages)
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              Full-Stack Development
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              Advanced UI/UX Design
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              Multiple API Integrations
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              Advanced Backend Services
            </li>
          </ul>
          <button className="w-full py-3  btn-gradient  rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
