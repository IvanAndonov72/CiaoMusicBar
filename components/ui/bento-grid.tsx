"use client";

import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 auto-rows-[200px] gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4",
        className
      )}
      style={{
        backgroundColor: "hsla(0,83%,74%,1)",
        backgroundImage: !img
          ? `radial-gradient(at 40% 20%, hsla(15,94%,65%,1) 0px, transparent 50%),
             radial-gradient(at 80% 0%, hsla(0,85%,65%,1) 0px, transparent 50%),
             radial-gradient(at 0% 50%, hsla(18,76%,49%,1) 0px, transparent 50%),
             radial-gradient(at 80% 38%, hsla(0,88%,61%,1) 0px, transparent 50%),
             radial-gradient(at 0% 100%, hsla(0,49%,50%,1) 0px, transparent 50%),
             radial-gradient(at 86% 91%, hsla(0,64%,47%,1) 0px, transparent 50%),
             radial-gradient(at 0% 0%, hsla(15,83%,49%,1) 0px, transparent 50%)`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Image layer with hover effect */}
      {img && (
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-108 transition-transform duration-500 group-hover:scale-115 group-hover:brightness-75"
          style={{ backgroundImage: `url(${img})` }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 min-h-40 flex flex-col px-5 p-5 lg:p-10 transition duration-200 group-hover:translate-x-2">
        {description && (
          <div className="font-sans font-bold text-white text-sm md:text-xs lg:text-base">
            {description}
          </div>
        )}
        {title && (
          <div className="font-sans font-extrabold text-2xl lg:text-3xl max-w-96 text-white">
            {title}
          </div>
        )}
      </div>
    </div>
  );
};
