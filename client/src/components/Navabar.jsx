import React, { useState } from "react";
import { FaHome, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { IoMenuOutline } from "react-icons/io5";

const Navabar = () => {
  // State to toggle the sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to handle opening and closing the sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="block lg:hidden border-b shadow-md fixed top-0 px-8 w-full bg-gray-50 dark:bg-[#3b3b3b] dark:text-white z-50 ">
        <div className="flex justify-between items-center h-12 ">
          <button onClick={toggleSidebar}>
            <IoMenuOutline size={24} className="text-blue-500" />
          </button>
          <DarkModeToggle />
        </div>
      </nav>

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white dark:bg-[#3b3b3b] shadow-lg z-50 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h2 className="text-lg font-bold text-blue-500">Logo</h2>
          <button onClick={toggleSidebar}>
            <FaTimes size={24} className="text-blue-500" />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="mt-4 space-y-4">
          <li>
            <Link
              to="/"
              className="block text-gray-700 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700 py-2 px-4 transition-colors rounded"
              onClick={toggleSidebar}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="block text-gray-700 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700 py-2 px-4 transition-colors rounded"
              onClick={toggleSidebar}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className="block text-gray-700 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700 py-2 px-4 transition-colors rounded"
              onClick={toggleSidebar}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="block text-gray-700 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700 py-2 px-4 transition-colors rounded"
              onClick={toggleSidebar}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="block text-gray-700 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700 py-2 px-4 transition-colors rounded"
              onClick={toggleSidebar}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block text-gray-700 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700 py-2 px-4 transition-colors rounded"
              onClick={toggleSidebar}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Navabar;
