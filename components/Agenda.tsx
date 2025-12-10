import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "@/data";

const Agenda = () => {
  return (
    <div className="py-25" id="agenda">
      <h1 className="heading py-4 text-3xl md:text-5xl font-bold text-white bg-gradient-to-r from-orange-400 to-pink-600 px-6  rounded-2xl shadow-lg">
        Our
        <span className="text-orange-300 font-extrabold"> Weekly </span>
        Agenda
      </h1>
      <BentoGrid className="py-25">
        {gridItems.map(({ id, title, description, className, img }) => (
          <BentoGridItem
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Agenda;
