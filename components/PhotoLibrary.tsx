"use client";

import React, { useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { photos } from "@/data";
import Image from "next/image";

const PhotoLibrary = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const handlePhotoClick = (imgSrc: string) => {
    setSelectedPhoto(imgSrc);
  };

  const handleClose = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="-mt-15 relative " id="library">
      <h1 className="heading py-4 text-3xl md:text-5xl font-bold text-white bg-gradient-to-r from-orange-400 to-pink-600 px-6  rounded-2xl shadow-lg">
        <span className="text-orange-300 font-extrabold">Ciao </span>
        Through The Lens
      </h1>
      <div className="flex flex-col items-center pt-20">
        <InfiniteMovingCards
          items={photos}
          onPhotoClick={handlePhotoClick}
          speed="fast"
        />
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={handleClose}
        >
          <div className="relative h-[60vh] w-[60vw]">
            <Image
              src={selectedPhoto}
              alt="Full photo"
              fill
              className="object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoLibrary;
