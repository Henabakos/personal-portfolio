import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// Assuming logo is in src/assets/logo.png


const AllFooter = () => {
  return (
    <footer className="border-t border-cyan-600 border-opacity-30 border-[1px] dark:bg-gradient-to-r text-gray-700 dark:text-gray-200 py-10 mt-10 mb-7 md:mb-0">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img 
            src='/logo.png' 
            alt="Logo" 
            className="h-12 w-auto mb-4 md:h-16" // Adjust height for responsiveness
          />
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
          `` Every bug is an opportunity for growth.``
          </p>
        </div>

        {/* Column 1: Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
            Quick Links
          </h2>
          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="hover:text-cyan-500 transition-colors"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="hover:text-cyan-500 transition-colors"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-cyan-500 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className="hover:text-cyan-500 transition-colors"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-cyan-500 transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-cyan-500 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Contact Information */}
        <div>
          <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
            Contact Info
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-cyan-500" />
              <span>+1 (234) 567-890</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-cyan-500" />
              <span>info@yourwebsite.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-cyan-500" />
              <span>1234 Street, New York, USA</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
            Follow Me
          </h2>
          <ul className="flex space-x-6">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-500 transition-colors"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-500 transition-colors"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-500 transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-500 transition-colors"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-cyan-400 border-opacity-30 pt-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Your Website. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default AllFooter;
