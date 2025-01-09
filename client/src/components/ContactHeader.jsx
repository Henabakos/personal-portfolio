import React from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { id: 1, icon: <FaGithub size={18} />, url: "https://github.com/" },
  { id: 2, icon: <FaFacebook size={18} />, url: "https://facebook.com/" },
  { id: 3, icon: <FaLinkedin size={18} />, url: "https://linkedin.com/" },
  { id: 4, icon: <FaInstagram size={18} />, url: "https://instagram.com/" },
];

const ContactHeader = () => {
  return (
    <div className="h-full border-b border-cyan-500 shadow-sm w-full flex items-center justify-center py-16 md:py-28 dark:bg-gray-900 transition-colors duration-300">
      <div className="flex flex-col items-center justify-center md:w-[70%] text-center">
        <h1 className="text-3xl md:text-4xl  text-slate-700 dark:text-gray-100 mb-5">
          <span className="text-blue-500 font-light pr-3">|</span>
          Contact Me
        </h1>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Have questions or want to discuss a project? I’m just a message away!
          Reach out for inquiries, collaborations, or to explore how we can work
          together to achieve your goals.
        </p>
        <div className="flex items-center justify-center space-x-4 mt-6">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center btn-gradient  hover:to-cyan-500 text-white w-10 h-10 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110"
              aria-label={`Visit my ${link.url.split(".")[1]} profile`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
