import React from "react";
import { PiPhoneBold } from "react-icons/pi";

const ContactDetail = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center  border-b my-10  px-2 md:px-10  ">
      <div className="flex flex-col md:justify-center p-4 my-4 w-full lg:w-[70vw]">
        <h1 className="text-3xl sm:text-3xl md:text-4xl  font-[400] text-slate-700 dark:text-gray-100 py-5">
          <span className="text-blue-500 font-light pr-3">|</span>
          Contact Details
        </h1>
        <p className="text-base md:text-lg font-normal text-gray-700 dark:text-gray-200 leading-relaxed pl-1">
        Feel free to reach out through any of the following methods. I look forward to connecting with you!
        </p>
      </div>
    </div>
  );
};

export default ContactDetail;
