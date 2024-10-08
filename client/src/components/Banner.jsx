import React from "react";

const Banner = () => {
  return (
    <div className="w-full bg-blue-500 py-12 flex flex-col items-center justify-center text-center text-white px-4">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fadeIn">
        Let's work together!
      </h2>
      <p className="text-sm sm:text-lg md:text-xl mb-6 max-w-2xl">
        Looking for a developer to collaborate on your next big project? I'm
        ready to bring your ideas to life.
      </p>
      <button
        className="bg-white text-blue-500 font-semibold py-3 px-8 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
        onClick={() => alert("Let's get in touch!")}
      >
        Let's Get In Touch
      </button>
    </div>
  );
};

export default Banner;
