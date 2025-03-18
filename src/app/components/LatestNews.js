import React from 'react';
import Marquee from 'react-fast-marquee';

export default function LatestNews() {
  return (
    <div className="flex items-center bg-gray-100 p-2 w-full">
      <p className="bg-red-600 text-white px-4 py-1 w-[11%] font-semibold">
        Latest Updates:
      </p>
      <Marquee className="bg-blue-900 text-white w-3/4 px-4 py-1" speed={50}>
        <div className="flex items-center gap-x-4 text-white">
          <span>Saroj Educational Group Launches Its Official Magazine</span>
          <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
          <span>Saroj Educational Group provides various courses</span>
        </div>
      </Marquee>
    </div>
  );
}
