"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      { opacity: 1, filter: filter ? "blur(0px)" : "none" },
      { duration: duration ?? 1, delay: stagger(0.2) }
    );
  }, [scope, animate]);

  const renderWords = () => (
    <motion.div ref={scope} className="flex flex-wrap justify-center">
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className={`${
            idx === 0 ? "text-orange-400" : "text-white"
          } opacity-0`}
          style={{ filter: filter ? "blur(10px)" : "none" }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("font-extrabold text-center", className)}>
      {renderWords()}
    </div>
  );
};
