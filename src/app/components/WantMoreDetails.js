'use client'

import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WantMoreDetails() {
  return (
    <div className="max-w-8xl mx-auto flex flex-col h-auto">
      {/* Single Section (TCS Info) */}
      <div className="flex flex-col w-full h-full bg-blue-400 justify-center items-center p-4">
        <div className="flex items-center gap-4">
          <div className="flex justify-end">
            <Image
              src="/tcs/tcs-logo.png"
              height={80}
              width={80}
              alt="SEG Logo"
              loading="lazy"
              className="ml-4"
            />
          </div>
          <hr className="h-16 w-[2px] bg-green-400 border-none sm:block" />
          <div className="text-center">
            <h1 className="text-lg sm:text-2xl font-semibold">
              Tata Consultancy Service
            </h1>
          </div>
        </div>

        <Link href="/tcs-ion">
          <div className="flex justify-start items-center text-blue-900 text-xl w-full">
            TCS Courses{" "}
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <IoIosArrowRoundForward className="text-xl sm:text-2xl lg:text-3xl text-blue-800 cursor-pointer" />
            </motion.div>
          </div>
        </Link>
      </div>
    </div>
  );
}
