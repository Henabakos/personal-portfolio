import React, { useState, useEffect } from "react";
import Navabar from "./components/Navabar";

import Navbar from "./components/Sidebar";

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
import BlogDetailPage from "./pages/BlogDetailsPage";

const dummyBlogs = [
  {
    id: 1,
    title: "How to Start with React",
    excerpt:
      "Learn the basics of React and start building your first app today.",
    author: "Jane Doe",
    date: "Jan 7, 2025",
    readingTime: "5 min read",
    image: "https://via.placeholder.com/400x200",
    featuredImage: "https://via.placeholder.com/800x400",
    content: [
      "React is a popular JavaScript library for building user interfaces.",
      "This guide will walk you through the basics of getting started with React.",
    ],
  },
  {
    id: 2,
    title: "Understanding Tailwind CSS",
    excerpt:
      "Building Your Next Project with Tailwind CSS: A Friendly Introduction",
    author: "Henok Assefa",
    date: "Jan 8, 2025",
    readingTime: "7 min read",
    image: "https://via.placeholder.com/400x200",
    featuredImage: "https://via.placeholder.com/800x400",
    content: [
      <span className="text-2xl font-bold py-3">Introduction</span>,
      "Have you ever spent hours styling a website, only to feel overwhelmed by endless CSS rules and file clutter? Don’t worry; you’re not alone! Let me introduce you to Tailwind CSS, a utility-first CSS framework that’s here to simplify your web design process. Whether you’re new to coding or a seasoned developer, Tailwind CSS can make your life so much easier.But what exactly is Tailwind CSS, and why is everyone talking about it?",
      <span className="text-2xl font-bold">What is Tailwind CSS? </span>,
      "Tailwind CSS is a utility-first CSS framework that gives you a set of ready-to-use classes to style your elements directly in your HTML. Unlike traditional CSS frameworks like Bootstrap, where you rely on predefined components, Tailwind empowers you to build custom designs quickly and efficiently using its flexible utility classes.",
      <span className="text-2xl font-bold">What is Tailwind CSS? </span>,
      "Tailwind CSS is a utility-first CSS framework that gives you a set of ready-to-use classes to style your elements directly in your HTML. Unlike traditional CSS frameworks like Bootstrap, where you rely on predefined components, Tailwind empowers you to build custom designs quickly and efficiently using its flexible utility classes.",
      "Discuss how Tailwind helps streamline designs. - Mention the advantages of responsive design and customization.",
    ],
  },
];

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
              <div className="w-full px-4 lg:px-28  custom-scrollbar">
                <Navbar />
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/portfolio" element={<Portfoliopage />} />
                  <Route path="/services" element={<Service />} />
                  <Route
                    path="/blog"
                    element={<BlogPage blogs={dummyBlogs} />}
                  />
                  <Route
                    path="/blog/:id"
                    element={<BlogDetailPage blogs={dummyBlogs} />}
                  />
                  <Route path="/contact" element={<ContacPage />} />
                  <Route path="/resume" element={<ResumeRightSide />} />
                  <Route path="/product-detail" element={<ProductDetail />} />
                  <Route path="/blog-detail" element={<BlogDetail />} />
                </Routes>
                <AllFooter />
              </div>
            </div>
            {/* <Footer /> */}
          </div>
        )}
      </div>
    </AOSWrapper>
  );
};

export default App;
