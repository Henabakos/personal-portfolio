import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  PiFileCodeThin,
  PiShoppingBagOpenLight,
  PiUserLight,
} from "react-icons/pi";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlineProfile } from "react-icons/ai";
import { GiNewspaper } from "react-icons/gi";
import { LuContact2 } from "react-icons/lu";
import DarkModeToggle from "./DarkModeToggle";

const navbarData = [
  { href: "/", icon: <PiUserLight size={20} />, label: "About Me" },
  {
    href: "/portfolio",
    icon: <PiFileCodeThin size={20} />,
    label: "Portfolio",
  },
  {
    href: "/services",
    icon: <PiShoppingBagOpenLight size={20} />,
    label: "Services",
  },
  { href: "/resume", icon: <IoNewspaperOutline size={20} />, label: "Resume" },
  {
    href: "/products",
    icon: <AiOutlineProfile size={20} />,
    label: "Products",
  },
  { href: "/blog", icon: <GiNewspaper size={20} />, label: "Blog" },
  { href: "/contact", icon: <LuContact2 size={20} />, label: "Contact" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`hidden lg:flex fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/50 dark:bg-gray-900/50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto sm:px-6 lg:px-24 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-col items-center">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto  md:h-16" />
          </div>
          <div className="flex space-x-3">
            {navbarData.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center gap-x-2 px-3 py-2 rounded-md transition ${
                  pathname === item.href
                    ? "text-gradient"
                    : "text-gray-800 dark:text-white hover:text-gradient dark:hover:text-gradient"
                }`}
              >
                <span className="hidden sm:block">{item.label}</span>
              </Link>
            ))}
          </div>
          <div className="flex gap-x-10">
            <button className="btn-gradient px-4 py-2 rounded-md flex items-center">
              <span>Let’s Talk</span>
            </button>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
