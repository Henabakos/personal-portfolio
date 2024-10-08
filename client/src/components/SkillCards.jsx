import React from "react";

import Card from "./Card";
import {
  FaBootstrap,
  FaCss3,
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

const Skills = [
  {
    name: "HTML & CSS",
    icon: <FaHtml5 size={24} className="text-orange-600" />,
    icon1: <FaCss3 size={24} />,
    description:
      "Lorem ipsum , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Tailwind & Bootstrap",
    icon1: <FaCss3Alt size={24} className="text-blue-600" />,
    icon: <FaBootstrap size={24} className="text-purple-700" />,
    description:
      "Lorem ipsum , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "React & Next.js",
    icon: <FaReact size={24} className="text-sky-400" />,
    icon1: <FaNodeJs size={24} className="text-green-600" />,
    description:
      "Lorem ipsum , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Mongo & Express",
    icon: <FaNodeJs size={24} className="text-green-500" />,
    description:
      "Lorem ipsum , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Git & Github",
    icon: <FaGit size={24} className="text-red-500" />,
    icon1: <FaGithub size={24} className="text-sky-950" />,
    description:
      "Lorem ipsum , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Antd & Material UI",
    icon: <FaGit size={24} className="text-red-500" />,
    icon1: <FaGithub size={24} className="text-sky-950" />,
    description:
      "Lorem ipsum , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "MySQL & PostgreSQL",
    icon: <FaGit size={24} className="text-red-500" />,
    icon1: <FaGithub size={24} className="text-sky-950" />,
    description:
      "Lorem ipsum , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Shadcn & NextUI",
    icon: <FaGit size={24} className="text-red-500" />,
    icon1: <FaGithub size={24} className="text-sky-950" />,
    description:
      "Lorem ipsum , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const SkillCards = () => {
  return (
    <div className="w-full grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-8 lg:px-16">
      {Skills.map((skill) => (
        <Card
          name={skill.name}
          icon={skill.icon}
          icon1={skill.icon1 || null}
          description={skill.description}
        />
      ))}
    </div>
  );
};

export default SkillCards;
