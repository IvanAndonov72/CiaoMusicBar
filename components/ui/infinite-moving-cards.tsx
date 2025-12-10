"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  onPhotoClick,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: { imgSrc: string; title: string }[];
  onPhotoClick?: (imgSrc: string) => void;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    getDirection();
    getSpeed();
    setStart(true);
  }, []);

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "18s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {/* Render original + duplicate */}
        {[...items, ...items].map((item, idx) => (
          <li
            key={idx}
            className="group relative w-[95vw] sm:w-[60vw] md:w-[70vw] lg:w-[35vw] shrink-0 rounded-3xl border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900 overflow-hidden cursor-pointer"
            onClick={() => onPhotoClick?.(item.imgSrc)}
          >
            <div className="relative w-full aspect-[16/9]  transition-transform duration-300 group-hover:scale-105">
              <Image
                src={item.imgSrc}
                alt={item.title}
                fill
                className="object-cover "
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center 
  bg-gradient-to-tr from-pink-500/70 via-red-500/70 to-yellow-500/70
  opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <span className="text-2xl font-extrabold  text-white italic">
                  View Photo
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold flex justify-center text-neutral-800 dark:text-gray-100">
                {item.title}
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
