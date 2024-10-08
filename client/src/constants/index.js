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

export { sidebarData };
