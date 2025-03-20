"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const items = [
  { id: 1, url: "/HappeningsImage1.jpg" },
  { id: 2, url: "/SarojTimesMagazine.JPEG" },
  { id: 3, url: "/HappeningsImage1.jpg" },
  { id: 4, url: "/SarojTimesMagazine.JPEG" },
  { id: 5, url: "/HappeningsImage1.jpg" },
  { id: 6, url: "/SarojTimesMagazine.JPEG" },

];

export default function Happenings() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Calculate total width of all images
    const imageWidth = 256; // w-64 = 16rem = 256px
    const totalWidth = items.length * imageWidth;
    setWidth(totalWidth);
  }, []);

  return (
    <div>
      <div className="py-7 max-w-7xl  mx-auto">
        <h1 className="text-5xl lg:text-6xl font-bold ">
          Happenings
          </h1>
      </div>
        <div className="overflow-hidden w-full relative py-2">
      <motion.div
        className="flex space-x-4"
        initial={{ x: 0 }}
        animate={{ x: ["0%", "-60%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {/* Duplicate Reels for Infinite Scroll */}
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="relative group px-2 h-[300px] lg:h-[500px] md:h-[350px] w-[300px] lg:w-[420px] flex-shrink-0"
          >
            {/* Image */}
            <img
              src={item.url}
              alt={`Instagram Reel ${index + 1}`}
              className="rounded-lg shadow-lg w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
    </div>
   
  );
}
