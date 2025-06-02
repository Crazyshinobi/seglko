"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import NavigationPages from "@/app/utils/NavigationPages";

const FeeStructure = () => {
  const router = useRouter();

  const feeStructures = [
    {
      label: "SITM Fee Structure",
      path: "/admission/fees-structure/sitm", // Route to SITM fee structure page
    },
    {
      label: "SSITM Fee Structure",
      path: "/admission/fees-structure/ssitm", // Route to SSITM fee structure page
    },
  ];

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <>
      <div className="relative w-full h-[30vh] bg-blue-900 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Fees Structures</h1>
      </div>

      <NavigationPages />

      <section className="container max-w-7xl py-12 w-full md:w-[80%] mx-auto">
        <div className="flex flex-col space-y-4">
          {feeStructures.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => handleNavigation(item.path)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-lg text-black uppercase bg-[#ffc107] hover:bg-[#ffca28] text-center py-3 px-6 rounded-lg w-full md:w-1/2 mx-auto transition-colors duration-200"
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeeStructure;