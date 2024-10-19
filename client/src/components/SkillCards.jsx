import React from "react";

import { InfiniteMovingCardsDemo } from "./MovingCard";

const SkillCards = ({ items, direction, speed }) => {
  return (
    <div >
      <InfiniteMovingCardsDemo
        items={items}
        direction={direction}
        speed={speed}
      />
    </div>
  );
};

export default SkillCards;
