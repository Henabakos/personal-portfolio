// Spinner.jsx
import React from "react";
import { PulseLoader } from "react-spinners"; // Import a spinner from react-spinners

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <PulseLoader color="#08a4a7" size={15} />
    </div>
  );
};

export default Spinner;
