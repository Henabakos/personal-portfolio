import React, { useState, useEffect, useRef } from "react";
import TestmonialCard from "./TestmonialCard";
import { FaStar } from "react-icons/fa";

const testimonialData = [
  {
    id: 1,
    name: "Eyob Tariku",
    description:
      "Henok Assefa is a highly skilled full-stack developer and UI/UX designer, known for being an exceptionally quick learner. He has incredible adaptability to acquire new skills and adjust to different environments. Additionally, he excels in communication, effectively collaborating with both clients and developers throughout his career",
    icon: <FaStar />,
    img: "/test1.jpg",
    role: "Mobile App Developer",
  },
  {
    id: 2,
    name: "Kiya Kebe",
    description:
      "Henok is a highly skilled full-stack developer with a strong passion for creating impressive projects. Known for being sociable and adaptable, Henok is a fast learner who consistently stays up-to-date with the latest technologies and industry trends.",
    icon: <FaStar />,
    img: "/test2.JPG",
    role: "President Of CSEC ASTU",
  },
  {
    id: 3,
    name: "Feysel Abdella",
    description:
      "Henok Assefa is an exceptional UI/UX designer and full-stack developer with a keen eye for detail and outstanding problem-solving skills. He consistently meets deadlines, delivering high-quality work that exceeds expectations. A fast learner and great communicator, Henok fosters collaboration and ensures project success. I highly recommend him for his technical expertise, creativity, and professionalism.",
    icon: <FaStar />,
    img: "/test3.jpg",
    role: "Top Reated Full-stack Developer",
  },
  {
    id: 4,
    name: "Fasil Hawultie",
    description:
      "Working with Henok Assefa on a project was an absolute privilege. His deep expertise and clear understanding of his craft made every aspect of the collaboration seamless. Henok’s professionalism and skill left a lasting impression, and I’m eager for the opportunity to work with him again in the future.",
    icon: <FaStar />,
    img: "/test4.jpg",
    role: "Full-Stack Developer",
  },
];

const Testimonial = () => {
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let scrollInterval;
    const startScrolling = () => {
      if (!isHovered) {
        scrollInterval = setInterval(() => {
          scrollContainerRef.current.scrollLeft += 1; // Scroll speed
        }, 10);
      }
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    startScrolling();

    return () => stopScrolling(); // Cleanup the interval on unmount
  }, [isHovered]);

  return (
    <div className="w-full dark:bg-gray-900 py-10 mb-10 max-lg:px-4">
      {/* Section Header */}
      <div className="w-full flex flex-col text-left  mb-10 pb-6">
        <div className="px-4 md:px-0 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-[400] text-gray-800 dark:text-gray-100 mb-4">
            <span className="text-blue-500 font-light pr-3">|</span>
            What People Say
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Here’s what my clients have to say about working with me. From
            mobile apps to web development and UI/UX design, their feedback
            reflects my dedication to delivering top-tier solutions that exceed
            expectations.
          </p>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-8 md:gap-10 py-4 snap-x snap-mandatory scroll-smooth scrollbar-hide"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {testimonialData.map((data) => (
          <div
            key={data.id}
            className="min-w-[300px] md:min-w-[350px] bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out snap-center"
          >
            <TestmonialCard data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
