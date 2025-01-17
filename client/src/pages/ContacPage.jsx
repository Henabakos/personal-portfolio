import React from "react";
import ContactHeader from "../components/ContactHeader";
import ContactDetail from "../components/ContactDetail";
import { CiMobile1 } from "react-icons/ci";
import { IoLocationOutline, IoMailOpenOutline } from "react-icons/io5";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-14 py-10 bg-gray-50 dark:bg-gray-900">
      {/* Contact Header */}
      <ContactHeader />

      {/* Contact Details Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Phone */}
        <div className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all">
          <div className="flex items-center justify-center bg-blue-100 dark:bg-cyan-800 p-3 rounded-full">
            <CiMobile1 size={30} className="text-blue-500 dark:text-cyan-400" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Phone Number
            </h2>
            <p className="text-gray-600 dark:text-gray-400">+251-945-014-531</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all">
          <div className="flex items-center justify-center bg-blue-100 dark:bg-cyan-800 p-3 rounded-full">
            <IoMailOpenOutline
              size={30}
              className="text-blue-500 dark:text-cyan-400"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Email Address
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              henokassefa9876@gmail.com
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all">
          <div className="flex items-center justify-center bg-blue-100 dark:bg-cyan-800 p-3 rounded-full">
            <IoLocationOutline
              size={30}
              className="text-blue-500 dark:text-cyan-400"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Location
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Adama Science and Technology University
            </p>
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="mt-10 text-center">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
          Get in Touch
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Feel free to reach out with any inquiries or collaboration ideas. I'm
          here to help and open to exploring exciting opportunities!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-10">
        <ContactForm />
      </div>
      {/* Google Map Section */}
      <div className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.2820171644894!2d39.291879973693966!3d8.568858391475267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b1fe4c294e6cb%3A0x6b86d6a89f24215c!2sAdama%20Science%20And%20Technology%20University%20-%20ASTU!5e0!3m2!1sen!2set!4v1736430127891!5m2!1sen!2set"
          className="w-full h-72 rounded-xl border-0 shadow-md"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
