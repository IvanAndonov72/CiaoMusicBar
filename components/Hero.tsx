"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-1 pt-36">
      <div>
        <WavyBackground>
          <TextGenerateEffect
            className="font-extrabold text-center text-[40px] md:text-5xl lg:text-6xl -mt-90 text-4xl "
            words="Ciao! More Than Just Coffee"
          />

          <div className="mt-125 flex justify-center">
            <MagicButton
              title="View Our Photo Gallery"
              icon={<FaLocationArrow />}
              position="right"
              handleClick={() => {
                const section = document.getElementById("library");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />{" "}
          </div>
        </WavyBackground>
      </div>
    </div>
  );
};

export default Hero;
