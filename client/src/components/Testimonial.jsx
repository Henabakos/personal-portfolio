import React from "react";
import TestmonialCard from "./TestmonialCard";
import { FaStar } from "react-icons/fa";

const testimonialData = [
  {
    id: 1,
    name: "Charls Darwin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exdolorem deserunt earum vero aliquam nam iste corporis illo pariatur",
    icon: <FaStar />,
    img: "https://img.freepik.com/free-vector/flat-style-woman-avatar_90220-2876.jpg",
  },
  {
    id: 2,
    name: "Charls Darwin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exdolorem deserunt earum vero aliquam nam iste corporis illo pariatur",

    icon: <FaStar />,
    img: "https://img.freepik.com/free-vector/flat-style-woman-avatar_90220-2876.jpg",
  },
  {
    id: 3,
    name: "Charls Darwin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exdolorem deserunt earum vero aliquam nam iste corporis illo pariatur",

    icon: <FaStar />,
    img: "https://img.freepik.com/free-vector/flat-style-woman-avatar_90220-2876.jpg",
  },

  {
    id: 4,
    name: "Charls Darwin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exdolorem deserunt earum vero aliquam nam iste corporis illo pariatur",

    icon: <FaStar />,
    img: "https://img.freepik.com/free-vector/flat-style-woman-avatar_90220-2876.jpg",
  },
  {
    id: 5,
    name: "Charls Darwin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exdolorem deserunt earum vero aliquam nam iste corporis illo pariatur",

    icon: <FaStar />,
    img: "https://img.freepik.com/free-vector/flat-style-woman-avatar_90220-2876.jpg",
  },
  {
    id: 4,
    name: "Charls Darwin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exdolorem deserunt earum vero aliquam nam iste corporis illo pariatur",

    icon: <FaStar />,
    img: "https://img.freepik.com/free-vector/flat-style-woman-avatar_90220-2876.jpg",
  },
  {
    id: 5,
    name: "Charls Darwin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exdolorem deserunt earum vero aliquam nam iste corporis illo pariatur",

    icon: <FaStar />,
    img: "https://img.freepik.com/free-vector/flat-style-woman-avatar_90220-2876.jpg",
  },
];
const Testimonial = () => {
  return (
    <div className="w-full bg-gray-100 dark:bg-[#636363] py-10 mb-10">
      <div className="w-full flex flex-col pl-2 md:pl-16 border-b mb-10 pb-6 border-gray-300">
        <div className="px-4 md:px-0 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-[400] text-gray-800 dark:text-gray-100 mb-4">
            <span className="text-blue-500  font-light pr-3">|</span>
            What People Say
          </h1>
          <p className="text-base md:text-lg font-normal text-gray-600 dark:text-gray-200 leading-relaxed">
            Our clients love the work we do and the products we build. Here's
            what some of them have to say about their experience with us.
          </p>
        </div>
      </div>

      <div className="flex overflow-x-auto gap-4 px-5 scrollbar-hide py-4 snap-x snap-mandatory">
        {testimonialData.map((data) => (
          <div
            key={data.id}
            className="min-w-[300px] bg-white dark:bg-[#636363] p-6 rounded-lg shadow-md hover:shadow-lg  transform hover:-translate-y-1 transition-all duration-300 ease-in-out snap-center"
          >
            <TestmonialCard data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
