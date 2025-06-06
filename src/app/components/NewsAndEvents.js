"use client";
import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const StudentNotices = [
  {
    id: 1,
    image: "/Notice2.jpeg",
    date: "06/06/2025",
    notice: "Notice",
    title: "Second Sessional Examination Notice",
  },
  {
    id: 2,
    image: "/Notice1.jpeg",
    date: "17/03/2025",
    notice: "Notice",
    title: "Schedule & Instructions for 1st Sessional Exam (Even Semester 2024-25)",
  },
];

const EventsSlider = [
  "/HappeningsImage1.jpg",
  "/HappeningsImage1.jpg",
  "/HappeningsImage1.jpg",
  "/HappeningsImage1.jpg",
  "/HappeningsImage1.jpg",
  "/HappeningsImage1.jpg",
];

export default function NewsAndEvents() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className='w-full bg-[#fff9f2] '>
      <div className="max-w-7xl mx-auto flex flex-col gap-5 py-2 pt-10">
        {/* Heading Section */}
        <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-4 flex items-center justify-start">
          {/* Background Image */}
          <div className="absolute inset-0 flex ml-10 sm:ml-20 md:ml-28 justify-center items-center">
            <Image
              src="/NewsSectionHeading.png"
              width={300}
              height={20}
              alt="bg"
              className="opacity-50 w-[200px] sm:w-[200px] md:w-[280px] "
            />
          </div>

          {/* Heading Text */}
          <div className="relative font-bold text-black">
            Updates & Announcements
          </div>
        </div>

        {/* News Section */}
        <div className="p-2 flex flex-col lg:flex-row gap-4   w-full justify-start">
          {/* Left News Section */}
          <div className="w-full lg:w-1/4 h-auto flex flex-col py-4">
            <div className="w-full flex flex-col gap-6 sm:gap-8 md:gap-10 items-center justify-center">
              {/* Latest News Heading */}
              <div className="w-4/5">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  <p>Latest</p>
                  <p className="ml-4 sm:ml-6 md:ml-8">News</p>
                </h1>
              </div>

              {/* Latest News Description */}
              <div className="text-justify w-4/5 text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl">
                Stay updated with the latest happenings at Saroj Educational
                Group! From academic updates to campus developments, we bring
                you all the important news in one place.
              </div>

              {/* View All News Button */}
              <div className="relative flex items-center justify-center py-2 w-3/5">
                <div className="absolute flex inset-0 justify-start items-center">
                  <Image
                    src="/ViewAllNewsBg.png"
                    height={100}
                    width={100}
                    alt="News button background"
                    className="opacity-50 w-[80px] sm:w-[100px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Middle News Section */}
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <div className="w-11/12 flex flex-col gap-4 sm:gap-6">

                {/* IoT Workshop News */}
                <div className="bg-black p-2 flex flex-col gap-2 rounded-md">
                {/* Category and Date Div */}
                <div className="flex gap-2 items-center">
                  <h1 className="text-white text-sm sm:text-base md:text-lg">
                    Workshop
                  </h1>
                  <h1 className="w-2 h-2 rounded-full bg-red-500"></h1>
                  <h1 className="text-red-400 text-sm sm:text-base md:text-lg">
                    27th May 2025
                  </h1>
                </div>

                {/* News Div */}
                <div className="flex flex-row">
                  {/* News Description */}
                  <div>
                    <p className="text-white text-sm sm:text-base md:text-lg">
                      We are thrilled to share the highlights of the recently conducted 
                      <strong> IoT Workshop</strong> organized by Digipodium for 1st and 
                      2nd year B.Tech and MBA students. The workshop featured interactive 
                      sessions with industry experts and practical implementation of 
                      smart technologies.
                    </p>
                  </div>

                  {/* Icon of news */}
                  <div className="text-white">
                    <GoArrowUpRight className="text-2xl sm:text-3xl text-white" />
                  </div>
                </div>
              </div>
              {/* Sports Meet News */}
              <div className="bg-black p-2 flex flex-col gap-2 rounded-md">
                {/* Category and Date Div */}
                <div className="flex gap-2 items-center">
                  <h1 className="text-white text-sm sm:text-base md:text-lg">
                    Sports Meet
                  </h1>
                  <h1 className="w-2 h-2 rounded-full bg-red-500"></h1>
                  <h1 className="text-red-400 text-sm sm:text-base md:text-lg">
                    12th February 2025
                  </h1>
                </div>

                {/* News Div */}
                <div className="flex flex-row">
                  {/* News Description */}
                  <div>
                    <p className="text-white text-sm sm:text-base md:text-lg">
                      The **Annual Sports Meet 2025** was filled with thrilling
                      competitions, showcasing students' athletic talent and
                      teamwork.
                    </p>
                  </div>

                  {/* Icon of news */}
                  <div className="text-white">
                    <GoArrowUpRight className="text-2xl sm:text-3xl text-white" />
                  </div>
                </div>
              </div>

            
            </div>
          </div>

          {/* Third Section Student Notices */}
          <div className="w-full lg:w-1/3 h-auto flex flex-col gap-4 bg-white drop-shadow-lg shadow-lg rounded-md">
            <div className="rounded-md text-xl sm:text-2xl md:text-3xl text-center font-bold text-white bg-blue-800 py-2">
              Student Notice Board
            </div>
            <div className="flex justify-center items-center text-green-600 flex-row mx-auto w-11/12">
              <span className="before:content-[''] before:block before:w-32 sm:before:w-40 md:before:w-56 before:h-[1px] before:bg-green-600 before:mr-2"></span>
              <Link href="/studentzone/student-notices" className="flex items-center justify-center text-sm sm:text-base md:text-base">Read all Notices<IoIosArrowRoundForward/></Link>
            </div>

            {/* Notices List */}
            <div className="flex flex-col justify-center h-auto  gap-4 sm:gap-6 w-full">
              {StudentNotices.map((notice) => (
                <div key={notice.id} className="flex gap-4 w-[96%]">
                  {/* Notice Image (Click to Open Modal) */}
                  <div className="w-[30%] h-24 sm:h-32 cursor-pointer" onClick={() => setSelectedImage(notice.image)}>
                    <Image
                      src={notice.image}
                      className="h-full w-full object-fill rounded-md"
                      alt="Notice Image"
                      width={400}
                      height={400}
                    />
                  </div>

                  {/* Notices Description */}
                  <div className="w-[70%] flex flex-col gap-2 justify-center">
                    {/* Date, Time, and Notice Type */}
                    <div className="flex flex-row gap-2 text-gray-500 text-xs sm:text-sm md:text-base">
                      <h1>{notice.date}</h1>
                      <h1>-</h1>
                      <h1>{notice.notice}</h1>
                    </div>

                    {/* Notice Title */}
                    <div>
                      <h1 className="text-sm sm:text-base md:text-lg">
                        {notice.title}
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notice Image Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[5001]">
              <div className="relative bg-white p-4 rounded-lg shadow-lg">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-lg font-bold hover:bg-red-700"
                >
                  ✕
                </button>

                {/* Enlarged Image */}
                <Image
                  src={selectedImage}
                  width={500}
                  height={500}
                  alt="Enlarged Notice"
                  className="rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}