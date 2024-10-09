import { FaPaperPlane } from "react-icons/fa";
import Profile from "./profile";
import SidebarRoutes from "./SidebarRoutes";

const Sidebar = () => {
  return (
    <section className="hidden lg:flex flex-col fixed left-12 w-48 h-screen dark:bg-[#636363] bg-gray-100 justify-between  ">
      <div className="flex-1 overflow-y-auto">
        {" "}
        <Profile />
        <div className="w-[80%] border mx-auto my-5" />
        <SidebarRoutes />
      </div>
      <div className="flex items-center justify-center my-6 w-full">
        <button className="flex space-x-1 items-center justify-center btn-gradient px-3 py-1 rounded-md">
          <FaPaperPlane />
          <h1>Let's Talk</h1>
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
