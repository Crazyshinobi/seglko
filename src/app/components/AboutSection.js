"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Target from "../../../public/Target.png";
import { MorphingText } from "../../components/ui/morphing-text";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import AboutSliderImage1 from '../../../public/AboutSliderImage1.jpg'

// Swiper Import 

import "swiper/css"
import "swiper/css/navigation"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

const morphingText = [
  "Shaping the Future",
  "Unlocking Potential",
  "Building Excellence",
  "Transforming Industries",
  "Creating Impact",
];

const sliderImages = [AboutSliderImage1,AboutSliderImage1,AboutSliderImage1,AboutSliderImage1]

export default function AboutSection() {
  return (
    <>
      <div className="w-full mx-auto ">
        <div className="heading bg-orange-300 mx-auto text-center items-center max-w-7xl flex py-4 flex-row w-full">
          <h1 className="text-6xl w-11/12">
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
            <Image src={Target} alt="Target" width={80} height={80} />
          </motion.div>
        </div>

       {/* The About us and the Slider  */}
       <div className="flex flex-row max-w-7xl mx-auto">


         {/* LEFT SECTION  */}
         <div className="flex flex-col items-start  justify-center bg-yellow-300 w-3/5 p-2 py-6">
          <div>
            <h1 className="text-4xl">Empowering Future Leaders,</h1>
          </div>

          <div className="w-full items-center ">
            <MorphingText texts={morphingText} />
          </div>

          <div className="content w-3/4">
            Welcome to Saroj Educational Group (SEG), established in 1997. Over
            the years, SEG has grown exponentially, earning recognition both in
            the industry and academia for its commitment to excellence. At SEG,
            we pride ourselves on fostering a value-driven culture and providing
            a professional environment where students thrive. As a diversified
            institution, SEG offers cutting-edge education across multiple
            disciplines, including engineering, management, law, pharmacy, and
            more. Our mission is to shape future leaders who are equipped to
            drive change, innovate, and create lasting value in their respective
            fields.
          </div>

          <div className="connect bg-red-400 w-3/4">
            <h2>Join us at Saroj Educational Group, where the journey towards shaping the future begins. 🚀</h2>
            <InteractiveHoverButton>Connect now</InteractiveHoverButton>
          </div>
        </div>
 

        {/* RIGHT SLIDER SECTION  */}
        <div className="w-2/5 bg-purple-400 "> 
           <div className="glimpse w-2/3 mx-auto bg-blue-300"><p className="text-5xl ">Here are </p> <p className="text-xl text-center"> Some College Glimpses</p></div>
           <div className="slider ">
           <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={5000}
        loop={true}
        navigation
        modules={[Navigation]}
        // className=" xl:h-[80vh] lg:h-[60vh] md:h-[50vh] h-[30vh] w-full"
        className="h-[80vh] absolute right-28"
        >
        {sliderImages.map((images,index) => (
          <SwiperSlide key={index} className="relative w-full h-full mr-48">
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


