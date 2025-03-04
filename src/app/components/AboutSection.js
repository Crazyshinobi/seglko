"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MorphingText } from "../../components/ui/morphing-text";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
// import AboutBg from "../../../public/AboutUsBg.png";

// Swiper Import
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const morphingText = [
  "Shaping the Future",
  "Unlocking Potential",
  "Building Excellence",
  "Transforming Industries",
  "Creating Impact",
];

const sliderImages = [
  "/PlacementGraphic.JPEG",
  "/SarojTimesMagazine.JPEG",
  "/AboutSliderImage1.jpg",
  "/AboutSliderImage1.jpg",
];

export default function AboutSection() {
  return (
    <>
      <div
        className="w-full mx-auto h-full"
        style={{
          backgroundImage: `url(/AboutUsBg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="heading mx-auto text-center items-center max-w-7xl flex py-4 flex-col lg:flex-row w-full">
          <h1 className="text-4xl lg:text-6xl w-11/12">
            Welcome to Saroj Educational Group
          </h1>

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <Image src="/Target.png" alt="Target" width={80} height={80} />
          </motion.div>
        </div>

        {/* Svg animate */}
        <motion.div
          initial={{ x: 0, rotate: 0, opacity: 0 }}
          whileInView={{ x: 500, y: -25, rotate: 360, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="absolute left-12 lg:flex hidden"
        >
          <Image src="/AboutHeadingImg.png" height={120} width={120} alt="Animated Svg" />
        </motion.div>

        {/* The About us and the Slider  */}
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto items-start">
          {/* LEFT SECTION  */}
          <div
           className="flex flex-col gap-8 items-start min-h-screen w-full lg:w-3/5 p-2 justify-center ">
            <div className="">
              <h1 className="text-2xl lg:text-4xl">Empowering Future Leaders,</h1>
            </div>

            <div className="-mt-5 h-24 w-full lg:w-2/3 overflow-hidden text-end">
              <MorphingText texts={morphingText} className="" />
            </div>

            <div className="content w-full lg:w-3/4 overflow-hidden text-lg  text-justify">
              Welcome to Saroj Educational Group (SEG), established in 1997.
              Over the years, SEG has grown exponentially, earning recognition
              both in the industry and academia for its commitment to
              excellence. At SEG, we pride ourselves on fostering a value-driven
              culture and providing a professional environment where students
              thrive. As a diversified institution, SEG offers cutting-edge
              education across multiple disciplines, including engineering,
              management, law, pharmacy, and more. Our mission is to shape
              future leaders who are equipped to drive change, innovate, and
              create lasting value in their respective fields.
            </div>

            <div className="connect w-full lg:w-3/4 space-y-8">
              <h2>
                Join us at Saroj Educational Group, where the journey towards
                shaping the future begins. 🚀
              </h2>
              <InteractiveHoverButton>Connect now</InteractiveHoverButton>
            </div>
          </div>

          {/* RIGHT SLIDER SECTION  */}
          <div className="w-full lg:w-2/5 bg-blue-100 rounded-lg p-1">
            <div className="glimpse w-full lg:w-2/3 flex mx-auto">
              <div>
                <p className="text-3xl lg:text-5xl ">Here are </p>{" "}
                <p className="text-lg lg:text-xl text-center text-blue-500"> Some College Glimpses </p>
              </div>
              <div className="w-24">
                <Image src="arrow.svg" height={200} width={200} alt="arrow svg"/>
              </div>
            </div>
            <div className="slider ">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={5000}
                loop={true}
                navigation
                modules={[Navigation]}
                className="h-[50vh] lg:h-[86vh] relative lg:right-28"
              >
                {sliderImages.map((images, index) => (
                  <SwiperSlide
                    key={index}
                    className="absolute w-full h-full mr-48"
                  >
                    <Image
                      src={images}
                      alt={`About Slider ${index}`}
                      layout="fill"
                      objectFit="cover"
                      priority={index === 0}
                      
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}