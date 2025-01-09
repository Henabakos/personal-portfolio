import React from "react";
import ContactHeader from "../components/ContactHeader";
import ContactDetail from "../components/ContactDetail";
import { PiPhoneBold } from "react-icons/pi";
import { CiMobile1 } from "react-icons/ci";
import { IoLocationOutline, IoMailOpenOutline } from "react-icons/io5";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="w-full px-4 md:px-14">
      <ContactHeader />

      <ContactDetail />

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center mt-10 px-4 md:px-14">
        {/* Phone Number */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="text-blue-500 font-light pr-3 text-5xl">|</span>
            <CiMobile1 size={50} className="text-cyan-600" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Phone Number
            </h1>
            <p className="text-gray-600 dark:text-gray-300">+251-945-014-531</p>
          </div>
        </div>

        {/* Email Address */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="text-blue-500 font-light pr-3 text-5xl">|</span>
            <IoMailOpenOutline size={50} className="text-cyan-600" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Email Address
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              henogato9876@gmail.com
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="text-blue-500 font-light pr-3 text-5xl">|</span>
            <IoLocationOutline size={50} className="text-cyan-600" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Location
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Adama Science and Technology University
            </p>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-full my-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.2820171644894!2d39.291879973693966!3d8.568858391475267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b1fe4c294e6cb%3A0x6b86d6a89f24215c!2sAdama%20Science%20And%20Technology%20University%20-%20ASTU!5e0!3m2!1sen!2set!4v1736430127891!5m2!1sen!2set"
          width="600"
          height="450"
          style={{ border: 0, width: "100%" }}
          className="rounded-2xl"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Get in Touch Section */}
      <div className="w-full flex flex-col md:flex-row items-center border-b mb-10">
        <div className="flex flex-col md:justify-center p-4 my-4 w-full lg:w-[70vw]">
          <h1 className="text-3xl font-semibold text-slate-700 dark:text-gray-100 py-5">
            <span className="text-blue-500 font-light pr-3">|</span>
            Get In Touch
          </h1>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Feel free to reach out with any inquiries or collaboration ideas.
            I'm here to help and open to exploring exciting opportunities!
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default ContactPage;
