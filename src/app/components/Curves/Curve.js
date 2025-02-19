"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation"; // Updated imports
import { text, curve, translate } from "./anim"; // Importing animations
import './style.css'

const routes = {
  "/": "Home",
  
};

const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

export default function Curve({ children, backgroundColor }) {
  const [isMounted, setIsMounted] = useState(false); // Track if component is mounted
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  const router = useRouter(); // useRouter for navigation
  const routerPath = usePathname(); // Get the current path

  // Set mounted state after component has mounted
  useEffect(() => {
    setIsMounted(true); // Set mounted to true when the component has mounted
  }, []); // This will run only once when the component mounts

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    resize(); // Set initial dimensions
    window.addEventListener("resize", resize); // Add resize listener
    return () => {
      window.removeEventListener("resize", resize); // Cleanup on unmount
    };
  }, []);

  if (!isMounted) {
    return null; // Prevent rendering while SSR
  }

  return (
    <div className="page curve " style={{ backgroundColor }}>
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className="background"
      />
      <motion.p className="route z-[1001]" {...anim(text)}>
        {routes[routerPath]} {/* Use routerPath directly */}
      </motion.p>
      {dimensions.width != null && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

const SVG = ({ height, width }) => {
  const initialPath = 
    `M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0`;

  const targetPath = 
    `M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0`;

  return (
    <motion.svg className="curve-svg" {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};