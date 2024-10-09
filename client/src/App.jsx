import React, { useState, useEffect } from "react";
import Navabar from "./components/Navabar";
import IconSidebar from "./components/IconSidebar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Portfoliopage from "./pages/Portfoliopage";
import AllFooter from "./components/AllFooter";
import Service from "./pages/Service";
import BlogPage from "./pages/BlogPage";
import Spinner from "./components/Spinner";
import AOSWrapper from "./utils/AosWrapper";

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    // Simulating a small delay to show the loading spinner
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time if needed

    return () => clearTimeout(timer);
  }, [location.pathname]);
  return (
    <AOSWrapper>
      <div className="dark:bg-[#3b3b3b] dark:text-white">
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <Navabar />
            <div className="flex ">
              <IconSidebar />
              <Sidebar />
              <div className="pt-20  px-4 lg:pl-[250px] w-full">
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/portfolio" element={<Portfoliopage />} />
                  <Route path="/services" element={<Service />} />
                  <Route path="/blog" element={<BlogPage />} />
                </Routes>
                <AllFooter />
              </div>
            </div>
            <Footer />
          </div>
        )}
      </div>
    </AOSWrapper>
  );
};

export default App;
