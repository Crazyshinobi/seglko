"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";

export default function PlacementSection() {
  const planeRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);

    gsap.to(planeRef.current, {
      motionPath: {
        path: [
          { x: -100, y: 20 },
          { x: 300, y: 120 },
          { x: 350, y: 105 },
          { x: 400, y: 95 },
          { x: 450, y: 80 },
          { x: 500, y: 60 },
          { x: 550, y: 50 },
          { x: 670, y: 30 },
        ],
        curviness: 1.2,
        autoRotate: true,
      },
      duration: 5,
      ease: "power2.out",
    });
  }, []);

  const hiringPartners = [
    "/Cognizant-Logo.png",
    "/Accenture-logo.png",
    "/Aon-logo.png",
    "/asian-paints-logo.png",
    "/CMCLogo.png",
    "/Google-logo.png",
    "/HDFC-Bank-logo.png",
    "/Microsoft-Logo.png",
    "/niit-logo.png",
    "/tcs-logo.png",
    "/Wipro-logo.png",
  ];

  return (
    <div className="relative w-full ">
      <div
        style={{
          backgroundImage: `url(/ourRecruitersBg1.png)`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
        className=""
      >
        <div className="ourRecuriters relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl py-7"
            style={{
              WebkitTextStroke: "1px black",
              WebkitTextFillColor: "transparent",
            }}
          >
            Placement & Hiring Partners
          </h1>

          {/* Paper Plane Animation */}
          <div className="w-full h-auto lg:flex hidden">
            <div
              ref={planeRef}
              className="absolute left-0 top-1"
              style={{
                width: "60px",
                height: "60px",
              }}
            >
              <Image
                src="/paper-plane.png"
                alt="Paper Plane"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
        {/* Recuriting partners Slider */}
        <div className="py-4">
          <Marquee gradient={true} gradientWidth={10} direction="right">
            {hiringPartners.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={120}
                height={100}
                alt="Hiring partners logos"
                className="rounded mx-4 sm:mx-6 md:mx-10"
              />
            ))}
          </Marquee>
        </div>
      </div>

      {/* Recent Placements background */}
      <div
        className=" w-full "
        style={{
          backgroundImage: `url(/BG1.svg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Recent Placements  */}
        <div className="max-w-7xl mx-auto py-8  px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl py-4"
            style={{
              WebkitTextStroke: "1px black",
              WebkitTextFillColor: "transparent",
            }}
          >
            Recent Placements
          </h1>

          {/* Recent Placements Images and Companies Places  */}
          <div className="w-full flex flex-col lg:flex-row gap-4">
            {/* Left Section */}
            <div className="left w-full lg:w-4/6 flex flex-col gap-6">
              {/* First Student Placed */}
              <div className="leftbox w-full border flex flex-col md:flex-row">
                {/* Image */}
                <div className="image w-full md:w-2/5 h-72 md:h-auto relative overflow-hidden">
                  <Image
                    src="/FirstStudentPlaced.jpeg"
                    alt="Student placed image1"
                    className="object-cover"
                   fill
                  />
                </div>

                {/* Congratulation */}
                <div className="w-full md:w-3/5 bg-yellow-300 flex flex-col gap-2 shadow-xl drop-shadow-lg p-4">
                  <h1 className="text-2xl sm:text-3xl">Congratulations!</h1>

                  <div className="content flex flex-col">
                    <p className="text-xl sm:text-2xl text-blue-500">
                      Umesh Mishra
                    </p>
                    <p className="text-justify text-sm sm:text-base">
                      We feel immensely proud to announce that our student,
                      Umesh Mishra, from the B.Tech CSE 4th Year batch, has been
                      successfully placed at{" "}
                      <strong className="font-bold text-blue-600">
                        Square IT Solutions Pvt.Ltd
                      </strong>{" "}
                      as a{" "}
                      <strong className="text-blue-600"> Web Developer!</strong>
                    </p>
                  </div>

                  {/* Company Logo */}
                  <div className="bg-blue-800 rounded-md flex gap-4 justify-center items-center py-2 px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-white whitespace-nowrap">
                      10.00LPA
                    </h1>
                    <Image
                      src="/squareit-logo.jpg"
                      height={50}
                      width={130}
                      alt="eclat logo"
                      className="bg-white p-2 rounded"
                    />
                  </div>

                  {/* Best Wishes */}
                  <div>
                    <p> Best Wishes,</p>
                    <p> Saroj Educational Group</p>
                  </div>
                </div>
              </div>

              {/* Second Student Placed */}
              <div className="Secondbox w-full border flex flex-col md:flex-row">
                {/* Congratulation */}
                <div className="w-full md:w-3/5 bg-yellow-300 flex flex-col gap-2 shadow-xl drop-shadow-lg p-4">
                  <h1 className="text-2xl sm:text-3xl">Congratulations!</h1>

                  <div className="content flex flex-col">
                    <p className="text-xl sm:text-2xl text-blue-500">
                      Pramudit Shukla
                    </p>
                    <p className="text-justify text-sm sm:text-base">
                      We are proud to announce that our student, Pramudit
                      Shukla, from{" "}
                      <span className="font-extrabold">Diploma in CSE,</span>{" "}
                      has been successfully placed at{" "}
                      <strong className="text-blue-600">TechMech</strong> as a{" "}
                      <strong className="text-blue-600">
                        {" "}
                        Full Stack Developer!
                      </strong>
                    </p>
                  </div>

                  {/* Company Logo */}
                  <div className="bg-blue-800 rounded-md flex gap-4 justify-center items-center py-2 px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-white whitespace-nowrap">
                      12.00LPA
                    </h1>
                    <Image
                      src="/tender-palm-logo.png"
                      alt="Tender palm logo"
                      className="bg-white p-2 rounded"
                      width={120} // Adjusted width
                      height={40} // Adjusted height
                    />
                  </div>

                  {/* Best Wishes */}
                  <div>
                    <p> Best Wishes,</p>
                    <p> Saroj Educational Group</p>
                  </div>
                </div>
                {/* Image */}
                <div className="image w-full md:w-2/5 h-80  relative overflow-hidden">
                  <Image
                    src="/SecondStudentPlaced.jpeg"
                    alt="Student placed image2"
                    className="object-cover"
                   fill
                  />
                </div>
              </div>
            </div>

            {/* Right Section - Shruti Pandey */}
            <div className="right w-full lg:w-1/3">
              {/* Image and Content Container */}
              <div className="border h-auto flex flex-col md:flex-row lg:flex-col">
                {/* Image */}
                <div className="image w-full md:w-2/5 lg:w-full lg:h-96 bg-red-300 h-80  relative overflow-hidden">
                  <Image
                    src="/ThirdStudentPlace.jpeg"
                    alt="Third student image"
                    className="object-cover"
                   fill
                  />
                </div>

                {/* Congratulation */}
                <div className="w-full md:w-3/5 lg:w-full bg-yellow-300 flex flex-col gap-2 shadow-xl drop-shadow-lg p-4">
                  <h1 className="text-2xl sm:text-3xl">Congratulations!</h1>

                  <div className="content flex flex-col">
                    <p className="text-xl sm:text-2xl text-blue-500">
                      Shaloni Devi
                    </p>
                    <p className="text-justify text-sm sm:text-base">
                      We are proud to announce that our student, Shaloni Devi,
                      from B. Pharma 4th Year, has been successfully placed at{" "}
                      <strong className="text-blue-600">Max Healthcare</strong>{" "}
                      as an{" "}
                      <strong className="text-blue-600"> Executive!</strong>
                    </p>
                  </div>

                  {/* Company Logo and LPA */}
                  <div className="bg-blue-800 rounded-md flex justify-center items-center gap-4 py-2 px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-white whitespace-nowrap">
                      18.00LPA
                    </h1>
                    <Image
                      src="/maxHealthCare.png"
                      width={90}
                      height={90}
                      alt="Wellsun logo"
                      className="bg-white p-2 rounded"
                    />
                  </div>

                  {/* Best Wishes */}
                  <div>
                    <p> Best Wishes,</p>
                    <p> Saroj Educational Group</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* View All Placement Button  */}
          <div className="flex justify-center items-center p-4">
            <Link href="/placements">
              <button
                className="border-none shadow-xl p-2 rounded-md cursor-pointer flex items-center justify-center group space-x-2"
                style={{
                  background: "linear-gradient(145deg, #e6e0da, #ffffff)",
                }}
              >
                <span className="relative text-black uppercase text-sm tracking-widest pb-1 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-black after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                  View all Placements
                </span>
                <span className="transition-transform duration-300 transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
