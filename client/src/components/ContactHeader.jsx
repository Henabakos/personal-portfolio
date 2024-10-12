import React from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { id: 1, icon: <FaGithub size={15} /> },
  { id: 2, icon: <FaFacebook size={15} /> },
  { id: 3, icon: <FaLinkedin size={15} /> },
  { id: 4, icon: <FaInstagram size={15} /> },
];

const ContactHeader = () => {
  return (
    <div className="h-full border-b shadow-sm w-full flex items-center justify-center py-5 md:py-10 ">
      <div className=" flex flex-col items-center justify-center mt-10 md:w-[70%]">
        <h1 className="text-3xl sm:text-3xl md:text-4xl  font-[400] text-slate-700 dark:text-gray-100 py-5">
          <span className="text-blue-500 font-light pr-3">|</span>
          Contact Me
        </h1>
        <div>
          <p className="text-center mx-auto text-base md:text-lg font-regular text-gray-700 dark:text-gray-200 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            sed repudiandae eos soluta iure, voluptas laudantium vitae expedita
            dolores quibusdam
          </p>
        </div>
        <div className="flex items-center justify-center space-x-3 mt-3">
          {socialLinks.map((link) => (
            <div
              key={link.id}
              className="flex items-center justify-center btn-gradient hover:bg-blue-600 hover:text-white  w-8 h-8 rounded-full shadow-sm "
            >
              {link.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
