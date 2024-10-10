import React from "react";

import { InfiniteMovingCardsDemo } from "./MovingCard";

const SkillCards = ({ items, direction, speed }) => {
  return (
    <div className="h-[30vh] md:h-[40vh] lg:h-[50vh] flex items-center mb-16 mx-0">
      <InfiniteMovingCardsDemo
        items={items}
        direction={direction}
        speed={speed}
      />
    </div>
  );
};

export default SkillCards;
