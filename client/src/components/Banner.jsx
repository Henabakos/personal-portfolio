import React from "react";

const Banner = () => {
  return (
    <div className="w-auto bg-cyan-600 py-12 rounded-3xl flex flex-col items-center justify-center text-center text-white mx-6 ">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fadeIn">
        Let's work together!
      </h2>
      <p className="text-sm sm:text-lg md:text-xl mb-6 max-w-2xl px-5">
        Looking for a developer to collaborate on your next big project? I'm
        ready to bring your ideas to life.
      </p>
      <button
        className="btn-gradient font-semibold py-3 px-8 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
        onClick={() => alert("Let's get in touch!")}
      >
        Let's Get In Touch
      </button>
    </div>
  );
};

export default Banner;
