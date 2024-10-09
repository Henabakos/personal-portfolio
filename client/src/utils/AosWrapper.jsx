// src/components/AOSWrapper.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing type
      once: true, // Whether animation should happen only once
    });
  }, []);

  return <>{children}</>;
};

export default AOSWrapper;
