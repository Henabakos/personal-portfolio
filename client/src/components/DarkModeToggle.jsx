// DarkModeToggle.jsx
import React, { useState, useEffect } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const storedPreference = localStorage.getItem("dark-mode");
    if (storedPreference) {
      setIsDarkMode(storedPreference === "true");
    } else {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    // Update class based on dark mode state
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark-mode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode", "false");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2  text-white btn-gradient rounded-full transition"
    >
      {isDarkMode ? <CiLight /> : <CiDark />}
    </button>
  );
};

export default DarkModeToggle;
