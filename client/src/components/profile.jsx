import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { id: 1, icon: <FaGithub size={15} /> },
  { id: 2, icon: <FaFacebook size={15} /> },
  { id: 3, icon: <FaLinkedin size={15} /> },
  { id: 4, icon: <FaInstagram size={15} /> },
];
const Profile = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-10 ">
        <img
          src="https://img.freepik.com/free-vector/flat-style-woman-avatar_90220-2876.jpg"
          alt="profile"
          className="w-16 h-16 rounded-full"
        />
        <h1 className="font-jost font-semibold">Name</h1>
        <p className="font-extralight text-sm">Full-Stack Software Engineer</p>
      </div>
      <div className="flex items-center justify-center space-x-3 mt-3">
        {socialLinks.map((link) => (
          <div
            key={link.id}
            className="flex items-center justify-center bg-white text-blue-600 hover:bg-blue-600 hover:text-white  w-6 h-6 rounded-full border shadow-sm shadow-blue-400"
          >
            {link.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
