import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  PiFileCodeThin,
  PiShoppingBagOpenLight,
  PiUserBold,
  PiUserLight,
} from "react-icons/pi";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlineProfile } from "react-icons/ai";
import { GiNewspaper } from "react-icons/gi";
import { LuContact2 } from "react-icons/lu";

const sidebarData = [
  {
    href: "/",
    icon: <PiUserLight size={15} />,
    label: "About Me",
  },
  {
    href: "/portfolio",
    icon: <PiFileCodeThin size={15} />,
    label: "Portfolio",
  },
  {
    href: "/services",
    icon: <PiShoppingBagOpenLight size={15} />,
    label: "Services & Pricing",
  },
  {
    href: "/resume",
    icon: <IoNewspaperOutline size={15} />,
    label: "Resume",
  },
  {
    href: "/products",
    icon: <AiOutlineProfile size={15} />,
    label: "Products",
  },
  {
    href: "/blog",
    icon: <GiNewspaper size={15} />,
    label: "Blog",
  },
  {
    href: "/contact",
    icon: <LuContact2 size={15} />,
    label: "Contact",
  },
];

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer className="block lg:hidden w-full  bg-gray-100 dark:bg-[#3b3b3b] dark:text-white border-t shadow-sm bottom-0 fixed z-50 px-4">
      <div className="w-full flex items-center justify-between h-12">
        {sidebarData.map((route) => (
          <div key={route.href}>
            <Link
              to={route.href}
              className={`flex items-center gap-x-2 font-normal px-2 my-3 h-8 ${
                pathname === route.href
                  ? "btn-gradient rounded-md "
                  : "text-gray-900  dark:text-white"
              }`}
            >
              <p className="flex items-center gap-x-2 text-md text-center">
                {route.icon}
                <span className="hidden md:flex">{route.label}</span>
              </p>
            </Link>
          </div>
        ))}
      </div>
    </footer>
  );
};
export default Footer;
