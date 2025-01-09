import React, { useEffect, useState, useRef } from "react";

const useCountUp = (end, duration, startCounting) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return; // Only start counting when startCounting is true

    let start = 0;
    const increment = end / (duration / 10); // Control speed by adjusting duration

    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.ceil(start));
        requestAnimationFrame(step);
      } else {
        setCount(end); // Ensure it ends exactly at the target value
      }
    };

    requestAnimationFrame(step);
  }, [end, duration, startCounting]);

  return count;
};

const Progress = () => {
  const [startCounting, setStartCounting] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setStartCounting(true); // Start counting when the component is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  const experienceCount = useCountUp(2, 1000, startCounting); // 2 years of experience
  const projectsCount = useCountUp(50, 1000, startCounting); // 50 completed projects
  const clientsCount = useCountUp(10, 1000, startCounting); // 10 happy clients

  return (
    <div
      className="w-full gap-8 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 md:gap-10 lg:gap-36 md:my-10"
      ref={progressRef}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <h1 className="text-gradient text-4xl sm:text-5xl font-bold pl-4">
          {experienceCount} +{" "}
          <span className="text-5xl sm:text-7xl font-light pr-3">|</span>
        </h1>
        <p className="text-center">Years of experience</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <h1 className="text-gradient text-4xl sm:text-5xl font-bold">
          {projectsCount} +{" "}
          <span className="text-5xl sm:text-7xl font-light pr-3">|</span>
        </h1>
        <p className="text-center">Completed Projects</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <h1 className="text-gradient text-4xl sm:text-5xl font-bold">
          {clientsCount} +{" "}
          <span className="text-5xl sm:text-7xl font-light pr-3">|</span>
        </h1>
        <p className="text-center">Happy Clients</p>
      </div>
    </div>
  );
};

export default Progress;
