import React from "react";
import ContactHeader from "../components/ContactHeader";

import ContactDetail from "../components/ContactDetail";
import { PiPhoneBold } from "react-icons/pi";
import { CiMobile1 } from "react-icons/ci";
import { IoLocationOutline, IoMailOpenOutline } from "react-icons/io5";
import ContactForm from "../components/ContactForm";
import MapComponents from "../components/Map-Component";

const ContacPage = () => {
  return (
    <div className="w-full px-4 md:px-14">
      <ContactHeader />
      <ContactDetail />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center mt-10 px-4 md:px-14 ">
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            <span className="text-blue-500 font-light pr-3 text-5xl">|</span>
            <CiMobile1 size={50} className="text-cyan-600" />
          </div>
          <div>
            <div>
              <h1>Phone Number</h1>
              <p>+251-945-014-531</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            <span className="text-blue-500 font-light pr-3 text-5xl">|</span>
            <IoMailOpenOutline size={50} className="text-cyan-600" />
          </div>
          <div>
            <div>
              <h1>Email Address</h1>
              <p>henogato9876@gmail.com</p>
            </div>
          </div>
        </div>{" "}
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            <span className="text-blue-500 font-light pr-3 text-5xl">|</span>
            <IoLocationOutline size={50} className="text-cyan-600" />
          </div>
          <div>
            <div>
              <h1>Location</h1>
              <p>Adama Science and Technology University</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full  my-10 ">
        <MapComponents />
      </div>
      <div className="w-full flex flex-col md:flex-row md:items-center  border-b mb-10   ">
        <div className="flex flex-col md:justify-center p-4 my-4 w-full lg:w-[70vw]">
          <h1 className="text-3xl sm:text-3xl md:text-4xl  font-[400] text-slate-700 dark:text-gray-100 py-5">
            <span className="text-blue-500 font-light pr-3">|</span>
            Get In Touch
          </h1>
          <p className="text-base md:text-lg font-normal text-gray-700 dark:text-gray-200 leading-relaxed pl-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex
            dolorem deserunt earum vero aliquam nam iste corporis illo pariatur
            exercitationem, minima est quisquam quibusdam tempore. Eveniet
            quaerat obcaecati minus?
          </p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContacPage;
