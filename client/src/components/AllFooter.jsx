import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const AllFooter = () => {
  return (
    <footer className="border-t rounded-lg sm:mb-10 border-cyan-600 border-opacity-30  bg-gray-50 dark:bg-gray-800  text-gray-700 dark:text-gray-200 pt-12 mt-10 md:mt-20">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-12 w-auto mb-4 md:h-16"
          />
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left italic">
            “Every bug is an opportunity for growth.”
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
            Quick Links
          </h2>
          <ul className="space-y-3">
            {[
              "About Me",
              "Portfolio",
              "Services",
              "Resume",
              // "Products",
              "Contact",
            ].map((link, index) => (
              <li key={index}>
                <Link
                  to={`/${link.toLowerCase().replace(" ", "")}`}
                  className="hover:text-cyan-500 transition-colors"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
            Contact Info
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-cyan-500" />
              <span>+251-945-014-531</span>
            </li>

            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-cyan-500" />
              <span>Addis Ababa Ethiopia</span>
            </li>
          </ul>
        </div>

        {/* Social Media & CTA */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
            Follow Me
          </h2>
          <ul className="flex space-x-6 mb-4">
            {[
              { icon: <FaFacebook />, link: "https://facebook.com" },
              { icon: <FaTwitter />, link: "https://twitter.com" },
              { icon: <FaLinkedin />, link: "https://linkedin.com" },
              { icon: <FaGithub />, link: "https://github.com" },
            ].map(({ icon, link }, index) => (
              <li key={index}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-500 transition-colors text-lg"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full shadow transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="h-[50px] flex justify-center items-center border-t border-cyan-400 border-opacity-30 text-center mt-8">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Henok Assefa. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default AllFooter;
