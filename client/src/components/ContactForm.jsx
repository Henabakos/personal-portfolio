import React from "react";
import { FaMailBulk, FaMobile, FaUser } from "react-icons/fa";
import { IoLocateOutline, IoSendOutline } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div className="w-full p-10 bg-white dark:bg-gray-900 border border-cyan-600/15 rounded-xl shadow-lg mb-10">
      <div className="w-full flex flex-col items-center space-y-4">
        {/* Input Fields */}
        <div className="w-full grid md:grid-cols-2 gap-6">
          <div className="flex items-center gap-4 bg-transparent border border-cyan-700/15 rounded-lg px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md focus-within:shadow-md">
            <FaUser className="text-cyan-700" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-0"
            />
          </div>

          <div className="flex items-center gap-4 bg-transparent border border-cyan-700/15 rounded-lg px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md focus-within:shadow-md">
            <FaMailBulk className="text-cyan-700" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-0"
            />
          </div>

          <div className="flex items-center gap-4 bg-transparent border border-cyan-700/15 rounded-lg px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md focus-within:shadow-md">
            <FaMobile className="text-cyan-600" />
            <input
              type="text"
              placeholder="Your Phone"
              className="w-full bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-0"
            />
          </div>

          <div className="flex items-center gap-4 bg-transparent border border-cyan-600/15 rounded-lg px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md focus-within:shadow-md">
            <IoLocateOutline className="text-cyan-600" />
            <input
              type="text"
              placeholder="Your Location"
              className="w-full bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-0"
            />
          </div>
        </div>

        {/* Message Box */}
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full bg-transparent border border-cyan-600/15 rounded-lg p-4 shadow-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:shadow-md transition-all duration-300"
        ></textarea>

        {/* Submit Button */}
        <div className="w-full flex justify-start mt-4">
          <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-700 via-cyan-500 to-cyan-300 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            <IoSendOutline />
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
