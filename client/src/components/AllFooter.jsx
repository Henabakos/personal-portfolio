import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const AllFooter = () => {
  return (
    <footer className="border-t border-purple-600 border-opacity-30 border-[1px]dark:bg-gradient-to-r text-gray-700 dark:text-gray-200 py-10 mt-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
            Quick Links
          </h2>
          <ul className="space-y-3">
            <li>
              <Link
                to="/about"
                className="hover:text-purple-500 transition-colors"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="hover:text-purple-500 transition-colors"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-purple-500 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className="hover:text-purple-500 transition-colors"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-purple-500 transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-purple-500 transition-colors"
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
              <FaPhoneAlt className="text-purple-500" />
              <span>+1 (234) 567-890</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-purple-500" />
              <span>info@yourwebsite.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-purple-500" />
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
                className="hover:text-purple-500 transition-colors"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500 transition-colors"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500 transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500 transition-colors"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-purple-400 border-opacity-30 pt-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Your Website. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default AllFooter;
