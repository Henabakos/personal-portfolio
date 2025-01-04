import React from "react";
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

const sidebarData = [
  {
    href: "/",
    icon: <PiUserLight size={20} />,
    label: "About Me",
  },
  {
    href: "/portfolio",
    icon: <PiFileCodeThin size={20} />,
    label: "Portfolio",
  },
  {
    href: "/services",
    icon: <PiShoppingBagOpenLight size={20} />,
    label: "Services & Pricing",
  },
  {
    href: "/resume",
    icon: <IoNewspaperOutline size={20} />,
    label: "Resume",
  },
  {
    href: "/products",
    icon: <AiOutlineProfile size={20} />,
    label: "Products",
  },
  {
    href: "/blog",
    icon: <GiNewspaper size={20} />,
    label: "Blog",
  },
  {
    href: "/contact",
    icon: <LuContact2 size={20} />,
    label: "Contact",
  },
];

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer className="block lg:hidden w-full bg-gray-100 dark:bg-gray-900 dark:text-white border-t shadow-sm bottom-0 fixed z-50 px-4">
      <div className="w-full flex items-center justify-between h-12">
        {sidebarData.map((route) => (
          <div key={route.href} className="relative">
            <Link
              to={route.href}
              className={`flex  items-center gap-x-2 font-normal px-2 my-3 h-8 transition-all duration-300 transform ${
                pathname === route.href
                  ? "translate-y-[-5px] scale-110 btn-gradient rounded-full shadow-lg " // Floating effect for active button
                  : "text-gray-900 dark:text-white"
              } hover:scale-110`} // Icon float on hover
            >
              <p className="flex items-center gap-x-2 text-sm text-center">
                <span
                  className={`transition-transform transform duration-300 ${
                    pathname === route.href
                      ? "scale-125" // Slightly enlarge active icon
                      : ""
                  }`}
                >
                  {route.icon}
                </span>
                <span
                  className={`${
                    pathname === route.href
                      ? "block text-[10px]" // Show label on smaller devices if active
                      : "hidden md:flex" // Hide label on small screens, show on medium and larger screens
                  }`}
                >
                  {route.label}
                </span>
              </p>
            </Link>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
