import React, { useState, useEffect } from "react";
import { FaHome, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { IoMenuOutline } from "react-icons/io5";

const Navabar = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`block lg:hidden fixed top-0 px-8 w-full bg-gray-50 dark:bg-gray-900 dark:text-white z-50 ${
          isScrolled
            ? "bg-white/50 dark:bg-gray-900/50 backdrop-blur-md shadow-md"
            : "bg-transparent"
        } `}
      >
        <div className="flex justify-between items-center h-12 ">
          <button onClick={toggleSidebar}>
            <IoMenuOutline size={24} className="text-cyan-400" />
          </button>
          <DarkModeToggle />
        </div>
      </nav>

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg z-50 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <img src="/logo.png" alt="logo" className="w-[80%] h-10" />
          <button onClick={toggleSidebar}>
            <FaTimes size={24} className="text-cyan-400" />
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
          {/* <li>
            <Link
              to="/products"
              className="block text-gray-700 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700 py-2 px-4 transition-colors rounded"
              onClick={toggleSidebar}
            >
              Products
            </Link>
          </li> */}
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
