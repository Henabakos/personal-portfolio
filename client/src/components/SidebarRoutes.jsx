import React from "react";
import { Link, useLocation } from "react-router-dom";
// constants/index.js

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
const SidebarRoutes = () => {
  const { pathname } = useLocation();

  return (
    <div className="mx-2">
      <div className="w-full ">
        {sidebarData.map((route) => (
          <div key={route.href}>
            <Link
              to={route.href}
              className={`flex items-center gap-x-2 font-normal px-2 my-3 h-8 ${
                pathname === route.href
                  ? "btn-gradient  rounded-md "
                  : "text-gray-900 dark:text-white"
              }`}
            >
              <p className="flex items-center gap-x-2 text-md text-center">
                {route.icon}
                <span className="">{route.label}</span>
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarRoutes;
