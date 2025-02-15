"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Image from "next/image";
import paperPlane from "../../../public/paper-plane.png";
import RecuritersBg from "../../../public/ourRecruitersBg1.png";
// import PlacementBg from '../../../public/bg-Placement.png'
import PlacementBg from "../../../public/BG1.svg";

// Logos Import
import CognizantLogo from "../../../public/Cognizant-Logo.png";
import AccentureLogo from "../../../public/Accenture-logo.png";
import AonLogo from "../../../public/Aon-logo.png";
import AsianPaintsLogo from "../../../public/asian-paints-logo.png";
import CMCLogo from "../../../public/CMCLogo.png";
import GoogleLogo from "../../../public/Google-logo.png";
import HDFCBankLogo from "../../../public/HDFC-Bank-logo.png";
import MicrosoftLogo from "../../../public/Microsoft-Logo.png";
import NiitLogo from "../../../public/niit-logo.png";
import TcsLogo from "../../../public/tcs-logo.png";
import WiproLogo from "../../../public/Wipro-logo.png";
import EclatLogo from "../../../public/ECLAT-logo.jpg";
import TenderPalm from "../../../public/tender-palm-logo.png";
import WellsunLogo from "../../../public/wellsun-logo.png";

// Student placed Image
import FirstStudentImage from "../../../public/SecondStudentPlaced.jpeg";
import SecondStudentImage from "../../../public/FirstStudentPlaced.jpeg";
import ThirdStudentImage from "../../../public/ThirdStudentPlaced.jpeg";

import Marquee from "react-fast-marquee";

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
    CognizantLogo,
    AccentureLogo,
    AonLogo,
    AsianPaintsLogo,
    CMCLogo,
    GoogleLogo,
    HDFCBankLogo,
    MicrosoftLogo,
    NiitLogo,
    TcsLogo,
    WiproLogo,
  ];

  return (
    <div className="py-9">
      <div className="relative w-full ">
        <div
          style={{
            backgroundImage: `url(${RecuritersBg.src})`,
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
                  src={paperPlane}
                  alt="Paper Plane"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
          {/* Recuriting partners Slider */}
          <div className="py-4">
            <Marquee gradient={true} gradientWidth={10}>
              {hiringPartners.map((images, index) => (
                <Image
                  key={index}
                  src={images.src}
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
            backgroundImage: `url(${PlacementBg.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {/* Recent Placements  */}
          <div className="max-w-7xl mx-auto py-8 mb-4 px-4 sm:px-6 lg:px-8">
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
                <div className="leftbox w-full border h-auto flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="image w-full md:w-2/5 bg-red-300">
                    <Image
                      src={FirstStudentImage}
                      alt="Student placed image1"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Congratulation */}
                  <div className="w-full md:w-3/5 bg-yellow-300 flex flex-col gap-2 shadow-xl drop-shadow-lg p-4">
                    <h1 className="text-2xl sm:text-3xl">Congratulations!</h1>

                    <div className="content flex flex-col">
                      <p className="text-xl sm:text-2xl text-blue-500">
                        Anup Yadav
                      </p>
                      <p className="text-justify text-sm sm:text-base">
                        We feel immensely proud to announce that our student M.
                        Ankit Agrahari from the B. Pharma 2024 batch has been
                        successfully placed at{" "}
                        <strong className="font-bold text-blue-600">
                          Eclat Health Solution!
                        </strong>
                        .
                      </p>
                    </div>

                    {/* Company Logo */}
                    <div className="bg-blue-800 rounded-md flex gap-4 justify-center items-center py-2 px-4">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl text-white whitespace-nowrap">
                        80.00LPA
                      </h1>
                      <Image
                        src={EclatLogo}
                        height={40}
                        width={120}
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
                <div className="Secondbox w-full border h-auto flex flex-col md:flex-row">
                  {/* Congratulation */}
                  <div className="w-full md:w-3/5 bg-yellow-300 flex flex-col gap-2 shadow-xl drop-shadow-lg p-4">
                    <h1 className="text-2xl sm:text-3xl">Congratulations!</h1>

                    <div className="content flex flex-col">
                      <p className="text-xl sm:text-2xl text-blue-500">
                        Vishav Verma
                      </p>
                      <p className="text-justify text-sm sm:text-base">
                        We are proud to announce that our student Vishav Verma
                        from B. Pharma 4th Year has been successfully placed at{" "}
                        <strong className="text-blue-600">
                          Tender Palm Hospital.
                        </strong>{" "}
                      </p>
                    </div>

                    {/* Company Logo */}
                    <div className="bg-blue-800 rounded-md flex gap-4 justify-center items-center py-2 px-4">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl text-white whitespace-nowrap">
                        20.00LPA
                      </h1>
                      <Image
                        src={TenderPalm}
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
                  <div className="image w-full md:w-2/5 bg-red-300">
                    <Image
                      src={SecondStudentImage}
                      alt="Student placed image2"
                      className="w-full h-full"
                    />
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  {" "}
                  <button className="border-none shadow-xl bg-red-500 p-2 rounded-md  bg-transparent cursor-pointer flex items-center justify-center group space-x-2">
                    <span className="relative text-black  uppercase text-sm tracking-widest pb-1 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-black  after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                      View all Placements
                    </span>
                    <span className="transition-transform duration-300 transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Section - Shruti Pandey */}
              <div className="right w-full lg:w-1/3">
                {/* Image and Content Container */}
                <div className="border h-auto flex flex-col md:flex-row lg:flex-col">
                  {/* Image */}
                  <div className="image w-full md:w-2/5 lg:w-full bg-red-300">
                    <Image
                      src={ThirdStudentImage}
                      alt="Third student image"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Congratulation */}
                  <div className="w-full md:w-3/5 lg:w-full bg-yellow-300 flex flex-col gap-2 shadow-xl drop-shadow-lg p-4">
                    <h1 className="text-2xl sm:text-3xl">Congratulations!</h1>

                    <div className="content flex flex-col">
                      <p className="text-xl sm:text-2xl text-blue-500">
                        Shruti Pandey
                      </p>
                      <p className="text-justify text-sm sm:text-base">
                        We are proud to announce that our student Shruti Pandey
                        from B. Pharma 4th Year has been successfully placed at{" "}
                        <strong className="text-blue-600">
                          Wellsun Medicity Hospital
                        </strong>{" "}
                        as a Pharmacist!
                      </p>
                    </div>

                    {/* Company Logo and LPA */}
                    <div className="bg-blue-800 rounded-md flex justify-center items-center gap-4 py-2 px-4">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl text-white whitespace-nowrap">
                        20.00CR
                      </h1>
                      <Image
                        src={WellsunLogo}
                        width={90}
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
          </div>
        </div>
      </div>
    </div>
  );
}
