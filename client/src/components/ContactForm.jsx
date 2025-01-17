import React, { useState } from "react";
import { FaMailBulk, FaMobile, FaUser } from "react-icons/fa";
import { IoLocateOutline, IoSendOutline } from "react-icons/io5";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setResponseMessage("Message sent successfully!");
          setIsSubmitting(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            location: "",
            message: "",
          });
        },
        (error) => {
          setResponseMessage("Failed to send message. Please try again later.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <form
          className="w-full p-10 bg-white dark:bg-gray-900 border border-cyan-600/15 rounded-xl shadow-lg mb-10"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex flex-col items-center space-y-4">
            <div className="w-full grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 bg-transparent border border-cyan-700/15 rounded-lg px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md focus-within:shadow-md">
                <FaUser className="text-cyan-700" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-0"
                />
              </div>

              <div className="flex items-center gap-4 bg-transparent border border-cyan-700/15 rounded-lg px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md focus-within:shadow-md">
                <FaMailBulk className="text-cyan-700" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-0"
                />
              </div>

              <div className="flex items-center gap-4 bg-transparent border border-cyan-700/15 rounded-lg px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md focus-within:shadow-md">
                <FaMobile className="text-cyan-600" />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  required
                  className="w-full bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-0"
                />
              </div>

              <div className="flex items-center gap-4 bg-transparent border border-cyan-700/15 rounded-lg px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md focus-within:shadow-md">
                <IoLocateOutline className="text-cyan-600" />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Your Location"
                  className="w-full bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-0"
                />
              </div>
            </div>

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full bg-transparent border border-cyan-700/15 rounded-lg p-4 shadow-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:shadow-md transition-all duration-300"
            ></textarea>

            <div className="w-full flex justify-start mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-700 via-cyan-500 to-cyan-300 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <IoSendOutline />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
            {responseMessage && (
              <p className="text-sm mt-3 text-gray-600 dark:text-gray-400">
                {responseMessage}
              </p>
            )}
          </div>
        </form>

        <div className="hidden lg:flex flex-col items-center text-center space-y-6">
          <img
            src="/contact.svg"
            alt="Contact Illustration"
            className="w-full max-w-md"
          />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Let’s Get in Touch!
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Feel free to reach out with any questions, collaborations, or
            feedback. I'm here to help!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
