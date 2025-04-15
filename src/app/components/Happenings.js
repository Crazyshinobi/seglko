"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

const items = [
  { id: 1, url: "/HappeningsImage1.jpg" },
  { id: 2, url: "/SarojTimesMagazine.JPEG" },
  { id: 3, url: "/HappeningsImage1.jpg" },
  { id: 4, url: "/SarojTimesMagazine.JPEG" },
  { id: 5, url: "/HappeningsImage1.jpg" },
  { id: 6, url: "/SarojTimesMagazine.JPEG" },
];

export default function Happenings() {
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  useAnimationFrame((t, delta) => {
    if (!isPaused) {
      const velocity = 50; // pixels per second
      const moveBy = (velocity * delta) / 1000; // delta is in ms
      x.set(x.get() - moveBy);

      const containerWidth = containerRef.current?.offsetWidth || 0;
      const contentWidth = items.length * 300 * 2; // since doubled (items x 2), each image ~300px

      if (Math.abs(x.get()) >= contentWidth / 2) {
        x.set(0); // loop seamlessly
      }
    }
  });

  return (
    <div>
      <div className="py-7 max-w-7xl mx-auto">
        <h1 className="text-5xl lg:text-6xl font-bold">Happenings</h1>
      </div>

      <div
        className="overflow-hidden w-full relative py-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        ref={containerRef}
      >
        <motion.div
          className="flex space-x-4 will-change-transform"
          style={{ x }}
        >
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="relative group px-2 h-[300px] lg:h-[400px] md:h-[350px] w-[300px] lg:w-[380px] flex-shrink-0"
            >
              <img
                src={item.url}
                alt={`Instagram Reel ${index + 1}`}
                className="rounded-lg shadow-lg w-full h-full object-fill transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
