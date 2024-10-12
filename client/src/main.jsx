import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="dark:bg-[#3b3b3b] dark:text-white">
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>
);
