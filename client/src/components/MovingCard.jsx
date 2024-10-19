import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-card";
import {
  FaBootstrap,
  FaCss3,
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
export function InfiniteMovingCardsDemo({ direction, speed, items }) {
  return (
    <div className="h-full w-full rounded-md flex flex-col antialiased bg-white dark:bg-transparent dark:bg-grid-white/[0.05] items-center justify-center  overflow-hidden ">
      <InfiniteMovingCards  items={items} direction={direction} speed={speed} />
    </div>
  );
}
