"use client";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { FaInstagram } from "react-icons/fa";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import MagicButton from "./ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";

function Socials() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("extrasmk@gmail.com");

    setCopied(true);
  };
  return (
    <div className="pb-15" id="socials">
      <h1 className="heading py-4 text-3xl md:text-5xl font-bold text-white bg-gradient-to-r from-orange-400 to-pink-600 px-6  rounded-2xl shadow-lg">
        Reach Out To
        <span className="text-orange-300 font-extrabold"> Us </span>
      </h1>
      <CardContainer className="inter-var">
        <a
          href="https://www.instagram.com/ciaomusicbar/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            {/* Title + Instagram Logo */}
            <CardItem
              translateZ="50"
              className="flex items-center gap-2 text-xl font-bold text-neutral-600 dark:text-white"
            >
              <FaInstagram className="text-pink-500 text-4xl" />
              Visit Ciao Music Bar 🎶
            </CardItem>

            {/* Subtitle */}
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Check out our Instagram for the latest events, vibes, and music
              nights ✨
            </CardItem>

            {/* Image */}
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <img
                src="/images/instagram.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Ciao Music Bar"
              />
            </CardItem>

            {/* Buttons */}
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="span"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Open Instagram →
              </CardItem>
              <CardItem
                translateZ={20}
                translateX={40}
                as="span"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Follow
              </CardItem>
            </div>
          </CardBody>
        </a>
      </CardContainer>
      <div className="text-center">
        <h3 className="text-3xl md:text-xl  text-gray-700 tracking-wide bg-clip-text font-extrabold">
          For business inquiries, please email us..
        </h3>
        <div>
          <div className="relative inline-block">
            <MagicButton
              title={copied ? "Email copied" : "Copy my email"}
              icon={<IoCopyOutline />}
              position="left"
              otherClasses="!bg-gradient-to-r from-orange-400 to-pink-600"
              handleClick={handleCopy}
            />

            {/* Confetti positioned above the button */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 pointer-events-none">
              <Lottie
                options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                height={250} // adjust size if needed
                width={250}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socials;
