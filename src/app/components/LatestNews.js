import React from "react";
import Marquee from "react-fast-marquee";

export default function LatestNews() {
  return (
    <div className="w-full fixed bottom-0 z-[6000]  flex flex-col sm:flex-row items-center  ">
      {/* Label Section */}
      {/* <div className="bg-red-600 text-white text-sm sm:text-base px-4 py-2 font-semibold rounded-md shadow-sm w-full sm:w-auto text-center sm:text-left">
        Latest Updates:
      </div> */}

      {/* Marquee Section */}
      <div className="flex-1 w-full overflow-hidden rounded-t-xl shadow-sm">
        <Marquee
          className="bg-red-700 text-white text-sm sm:text-base px-4 py-2"
          speed={50}
          gradient={false}
          pauseOnHover
        >
          <div className="flex items-center whitespace-nowrap">
            <span className="mr-6 sm:mr-10">
              Saroj Educational Group Launches Its Official Magazine
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 mr-6 sm:mr-10"></span>
            <span className="mr-6 sm:mr-10">
              Saroj Educational Group provides various courses
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 mr-6 sm:mr-10"></span>
            <span className="mr-6 sm:mr-10">
              Admissions Open for 2025-26 Session
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 mr-6 sm:mr-10"></span>
            <span className="mr-6 sm:mr-10">New Campus Events Coming Soon</span>
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 mr-6 sm:mr-10"></span>
          </div>
        </Marquee>
      </div>
    </div>
  );
}
