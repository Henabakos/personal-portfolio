import React, { useState, useEffect } from "react";
import Navabar from "./components/Navabar";
import IconSidebar from "./components/IconSidebar";
import Navbar from "./components/Sidebar";
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
import ContacPage from "./pages/ContacPage";
import ResumeRightSide from "./pages/Resume";
import ProductDetail from "./pages/productDetail";
import BlogDetail from "./components/BlogDetail";

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
      <div className="dark:bg-gray-900 dark:text-white">
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <Navabar />
            <div className="flex ">
              {/* <IconSidebar /> */}
              {/* <Navbar /> */}
              <div className="w-full">
                <Navbar />
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/portfolio" element={<Portfoliopage />} />
                  <Route path="/services" element={<Service />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/contact" element={<ContacPage />} />
                  <Route path="/resume" element={<ResumeRightSide />} />
                  <Route path="/product-detail" element={<ProductDetail />} />
                  <Route path="/blog-detail" element={<BlogDetail />} />
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
