import React from 'react';
import Marquee from 'react-fast-marquee';

export default function LatestNews() {
  return (
    <div className="w-full bg-blue-100 px-2  sm:py-1 flex flex-col sm:flex-row items-center  ">
      
      {/* Label Section */}
      <div className="bg-red-600 text-white text-sm sm:text-base px-4 py-2 font-semibold rounded-md shadow-sm w-full sm:w-auto text-center sm:text-left">
        Latest Updates:
      </div>

      {/* Marquee Section */}
      <div className="flex-1 w-full overflow-hidden rounded-md shadow-sm">
        <Marquee
          className="bg-blue-900 text-white text-sm sm:text-base px-4 py-2"
          speed={50}
          gradient={false}
        >
          <div className="flex items-center gap-x-6 sm:gap-x-10 whitespace-nowrap">
            <span>Saroj Educational Group Launches Its Official Magazine</span>
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block"></span>
            <span>Saroj Educational Group provides various courses</span>
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block"></span>
            <span>Admissions Open for 2025–26 Session</span>
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block"></span>
            <span>New Campus Events Coming Soon</span>
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block"></span>
          </div>
        </Marquee>
      </div>
    </div>
  );
}
