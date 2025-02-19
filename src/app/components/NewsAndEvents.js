"use client";
import Image from "next/image";
import React from "react";
import HeadingBg from "../../../public/NewsSectionHeading.png";
import ViewAllNewsBg from "../../../public/ViewAllNewsBg.png";
import { GoArrowUpRight } from "react-icons/go";
import NoticesImage from '../../../public/NoticesImage.png'

const StudentNotices = [
  {
    id : 1,
    image : NoticesImage,
    date : "12/02/2025",
    notice : "Notice",
    title : "Saroj Education Group"
  },
  {
    id : 2,
    image : NoticesImage,
    date : "12/02/2025",
    notice : "Notice",
    title : "Saroj Education Group"
  },
  {
    id : 3,
    image : NoticesImage,
    date : "12/02/2025",
    notice : "Notice",
    title : "Saroj Education Group"
  },
  {
    id : 4,
    image : NoticesImage,
    date : "12/02/2025",
    notice : "Notice",
    title : "Saroj Education Group"
  },

  
]

export default function NewsAndEvents() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto flex flex-col gap-5 py-2">
        {/* Heading Section */}
        <div className="relative text-5xl  py-4  flex items-center justify-start">
          {/*Background Image */}
          <div className="absolute inset-0 flex ml-28 justify-center items-center">
            <Image
              src={HeadingBg}
              width={380}
              height={20}
              alt="bg"
              className="opacity-50" // Adjust opacity if needed
            />
          </div>

          {/* Heading Text */}
          <div className="relative font-bold text-black">
            Updates & Announcements
          </div>
        </div>

        {/* News Section */}
        <div className="p-2 flex flex-row gap-2 border border-red-400  w-full justify-start">
          {/* Left News Section  */}
          <div className=" w-1/4 h-auto flex flex-col py-4 ">
            <div className="w-full flex flex-col gap-10 items-center justify-center">
              {/* Latest News Heading  */}
              <div className="w-4/5 ">
                <h1 className="text-5xl">
                  <p>Latest</p>
                  <p className="ml-8">News</p>
                </h1>
              </div>

              {/* Latest News Description  */}
              <div className="text-justify w-4/5 text-gray-500 text-xl">
                Stay updated with the latest happenings at Saroj Educational
                Group! From academic updates to campus developments, we bring
                you all the important news in one place.
              </div>

              {/* View All News Button  */}
              <div className="relative flex items-center justify-center py-2  w-3/5">
                <div className="absolute flex inset-0 justify-start items-center ">
                  <Image
                    src={ViewAllNewsBg}
                    height={120}
                    width={120}
                    alt="News button background"
                    className="opacity-50"
                  />
                </div>
                <div className="relative font-bold text-black text-xl ">
                  <button className="border-none shadow-xl px-4 py-2 rounded-md bg-red-600 text-white cursor-pointer flex items-center justify-center group gap-2 transition-all duration-300 hover:bg-white">
                    <span className="relative uppercase text-sm tracking-widest transition-all duration-300 group-hover:text-red-600 flex items-center">
                      View all news
                      {/* Underline Animation */}
                      <span className="absolute w-full h-0.5 bg-white bottom-0 left-0 scale-x-0 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:bg-red-600 group-hover:origin-bottom-left"></span>
                    </span>

                    {/* Arrow Animation (Centered) */}
                    <span className="transition-transform duration-300 transform group-hover:translate-x-1 group-hover:text-red-500 flex items-center">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Middle  News Section  */}
          <div className=" w-2/5 flex justify-center items-center ">
            <div className="w-11/12 flex flex-col gap-6 ">
              <div className="bg-black p-2 flex flex-col gap-2 rounded-md">
                {/* Category and Date Div  */}
                <div className="flex gap-2 items-center">
                  <h1 className="text-white">Sports Meet</h1>
                  <h1 className="w-2 h-2 rounded-full bg-red-500"></h1>
                  <h1 className="text-red-400">12th February 2025</h1>
                </div>

                {/* News Div  */}
                <div className="flex flex-row ">
                  {/* News Description  */}
                  <div>
                    <p className="text-white">
                      The **Annual Sports Meet 2025** was filled with thrilling
                      competitions, showcasing students' athletic talent and
                      teamwork.
                    </p>
                  </div>

                  {/* Icon of news  */}
                  <div className="text-white">
                    <GoArrowUpRight className="text-3xl text-white" />
                  </div>
                </div>
              </div>

              <div className="bg-black p-2 flex flex-col gap-2 rounded-md">
                {/* Category and Date Div  */}
                <div className="flex gap-2 items-center">
                  <h1 className="text-white">Sports Meet</h1>
                  <h1 className="w-2 h-2 rounded-full bg-red-500"></h1>
                  <h1 className="text-red-400">12th February 2025</h1>
                </div>

                {/* News Div  */}
                <div className="flex flex-row ">
                  {/* News Description  */}
                  <div>
                    <p className="text-white">
                      The **Annual Sports Meet 2025** was filled with thrilling
                      competitions, showcasing students' athletic talent and
                      teamwork.
                    </p>
                  </div>

                  {/* Icon of news  */}
                  <div className="text-white">
                    <GoArrowUpRight className="text-3xl text-white" />
                  </div>
                </div>
              </div>

              <div className="bg-black p-2 flex flex-col gap-2 rounded-md">
                {/* Category and Date Div  */}
                <div className="flex gap-2 items-center">
                  <h1 className="text-white">Sports Meet</h1>
                  <h1 className="w-2 h-2 rounded-full bg-red-500"></h1>
                  <h1 className="text-red-400">12th February 2025</h1>
                </div>

                {/* News Div  */}
                <div className="flex flex-row ">
                  {/* News Description  */}
                  <div>
                    <p className="text-white">
                      The **Annual Sports Meet 2025** was filled with thrilling
                      competitions, showcasing students' athletic talent and
                      teamwork.
                    </p>
                  </div>

                  {/* Icon of news  */}
                  <div className="text-white">
                    <GoArrowUpRight className="text-3xl text-white" />
                  </div>
                </div>
              </div>
              
              <div className="bg-black p-2 flex flex-col gap-2 rounded-md">
                {/* Category and Date Div  */}
                <div className="flex gap-2 items-center">
                  <h1 className="text-white">Sports Meet</h1>
                  <h1 className="w-2 h-2 rounded-full bg-red-500"></h1>
                  <h1 className="text-red-400">12th February 2025</h1>
                </div>

                {/* News Div  */}
                <div className="flex flex-row ">
                  {/* News Description  */}
                  <div>
                    <p className="text-white">
                      The **Annual Sports Meet 2025** was filled with thrilling
                      competitions, showcasing students' athletic talent and
                      teamwork.
                    </p>
                  </div>

                  {/* Icon of news  */}
                  <div className="text-white">
                    <GoArrowUpRight className="text-3xl text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Section Student Notices  */}
          <div className=" w-1/3 h-auto flex flex-col gap-4 bg-white drop-shadow-lg shadow-lg rounded-md">
            <div className="rounded-md text-3xl text-center font-bold text-white bg-blue-800 py-2">
              Student Notice Board
            </div>
            <div className="flex justify-center items-center text-green-600 flex-row mx-auto  w-11/12 ">
            <span className="before:content-[''] before:block before:w-56 before:h-[1px] before:bg-green-600 before:mr-2">
            </span>
             <button>Read all Notices</button>
            </div>

            {/* all noticed div  */}
            <div className="flex flex-col justify-center h-auto items-center gap-6 w-full">
               {StudentNotices.map((notices)=>(
                <div key={notices.id} className="flex gap-4  w-[96%]">
                  
                  {/* Notice Image */}
                  <div className=" w-[30%] h-32 ">
                    <Image src={notices.image} className="h-full" alt="Notices Images "/>
                  </div>
                  {/* Notices description  */}
                  <div className="w-[70%] flex flex-col gap-2  justify-center">
                    {/* Date and Time And Notice  */}
                    <div className="flex flex-row gap-2 text-gray-500"><h1>{notices.date}</h1>
                    <h1>-</h1>
                     <h1>{notices.notice}</h1>
                    </div>

                     {/* Notice title  */}
                    <div >
                      <h1 className="text-xl">Saroj Educational Group Student Notice list shown </h1>
                    </div>
                  </div>

                </div>
               ))}
            </div>
          </div>
        </div>


        {/* Events Section  */}
       <div>Events at Saroj educational group</div>
      </div>
    </div>
  );
}
