"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MorphingText } from "../../components/ui/morphing-text";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { IoPlaySkipForwardCircleOutline } from "react-icons/io5";

// import AboutBg from "../../../public/AboutUsBg.png";

// Swiper Import
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

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
  "/AboutSlider3.jpg",
  "/PlacementGraphic2.PNG",
];

export default function AboutSection() {
  return (
    <>
      <div
        className="w-full mx-auto h-full py-4 lg:bg-cover lg:bg-center"
        style={{
          backgroundImage: `url(/AboutUsBgImg.png)`,
        }}
      >
        <div className="heading mx-auto text-center items-center max-w-7xl lg:flex py-4  hidden  lg:flex-row w-full">
          <h1 className="text-4xl  lg:text-6xl  w-11/12">
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
          className="absolute left-12 xl:flex hidden 2xl:hidden"
        >
          <Image
            src="/AboutHeadingImg.png"
            height={120}
            width={120}
            alt="Animated Svg"
          />
        </motion.div>

        {/* The About us and the Slider  */}
        <div className="flex md:flex-row lg:justify-evenly  lg:flex-row flex-col-reverse max-w-full  mx-auto items-center ">
          {/* LEFT SECTION  */}
          <div className="flex flex-col gap-2 items-start text-justify w-full  sm:w-3/5 md:w-2/4 p-3 justify-center 2xl:justify-start">
            <div className="">
              <h1 className="text-2xl lg:text-4xl">
                Empowering Future Leaders,
              </h1>
            </div>

            <div className=" md:h-16   w-full lg:w-2/3 overflow-hidden text-end">
              <MorphingText texts={morphingText} className="" />
            </div>

            <div className="content w-full lg:w-3/4 overflow-hidden lg:text-lg md:text-sm md:p-2  text-justify">
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

            <div className="connect w-full lg:w-3/4 space-y-3 md:p-2">
              <h2>
                Join us at Saroj Educational Group, where the journey towards
                shaping the future begins. 🚀
              </h2>

              <div className="flex items-center gap-3 ">
                <a
                  href="https://seglko.in8.nopaperforms.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InteractiveHoverButton>
                    {" "}
                    Register now{" "}
                  </InteractiveHoverButton>
                </a>

                <div className="flex items-center lg:gap-2  md:gap-2 hover:underline">
                  <a
                    href="https://www.youtube.com/watch?v=dvYzwISIIHI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-light lg:text-lg md:text-lg text-base text-blue-900"
                  >
                    Watch Video{" "}
                  </a>{" "}
                  <p className="text-3xl">
                    <IoPlaySkipForwardCircleOutline />
                  </p>
                </div>
              </div>
            </div>
            <div className="h-auto flex flex-row lg:w-5/6 w-full bg-purple-300 mt-2">
              <div className="flex flex-col bg-blue-900 w-1/3 p-5">
                <p className="lg:text-4xl text-2xl font-extrabold text-white">
                  400+
                </p>
                <p className="text-white">Recruiters on Board</p>
              </div>
              <div className="flex flex-col bg-yellow-500  w-[35%] p-5">
                <p className="lg:text-4xl text-2xl font-extrabold text-black">
                  30.00 LPA
                </p>{" "}
                <p className="text-black text-base">Highest Salary </p>
              </div>
              <div className="flex flex-col bg-yellow-500 w-1/3 p-5 border-l-2 border-dashed border-black">
                <p className="lg:text-4xl text-2xl font-extrabold text-black ">
                  5.50 LPA
                </p>
                <p className="text-black">Average Salary</p>
              </div>
            </div>
          </div>

          {/* RIGHT SLIDER SECTION  */}
          <div className="w-full  md:w-2/4 lg:w-2/5 bg-blue-100 rounded-lg p-1 py-4 ">
            <div className="glimpse w-full lg:w-2/3 flex mx-auto">
              <div>
                <p className="text-3xl xl:text-5xl ">Here are </p>{" "}
                <p className="text-lg lg:text-xl text-center text-blue-500">
                  {" "}
                  Some College Glimpses{" "}
                </p>
              </div>
              <div className="w-24">
                <Image
                  src="/arrow.svg"
                  height={200}
                  width={200}
                  alt="arrow svg"
                />
              </div>
            </div>
            <div className="slider ">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                navigation
                modules={[Navigation, Autoplay]}
                className="md:h-[69vh] h-[80vh] lg:h-[86vh] xl:h-[75vh] 2xl:h-[86vh] sm:h-[69vh] relative lg:w-11/12 md:w-full lg:right-28 right-0"
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
                      objectFit="fill"
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
