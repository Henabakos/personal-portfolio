import React from "react";

import HeroSection from "../components/HeroSection";
import WhatIdo from "../components/WhatIdo";
import Progress from "../components/Progress";
import SkillCards from "../components/SkillCards";
import Banner from "../components/Banner";
import FeaturedProjects from "../components/FeaturedProjects";

const LandingPage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <div className="mb-2">
        <Progress />
      </div>
      <WhatIdo />
      <SkillCards />
      <Banner />
      <FeaturedProjects />
    </div>
  );
};

export default LandingPage;
