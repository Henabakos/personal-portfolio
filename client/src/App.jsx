import React from "react";
import Navabar from "./components/Navabar";
import IconSidebar from "./components/IconSidebar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Portfoliopage from "./pages/Portfoliopage";
const App = () => {
  return (
    <div>
      <Navabar />
      <div className="flex ">
        <IconSidebar />
        <Sidebar />
        <div className="py-16 px-10 lg:pl-[250px] w-full">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfoliopage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
