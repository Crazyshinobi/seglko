import Image from 'next/image';
import React from 'react';

export const WantMoreDetails = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row h-auto lg:h-[200px]">
      {/* Left Section */}
      <div className="flex w-full lg:w-1/2 h-full bg-yellow-400 justify-center items-center p-4">
        <div className="flex items-center gap-4">
          <div className="flex justify-end">
            <Image
              src="/seglogo.png"
              height={80}
              width={80}
              alt="SEG Logo"
              loading="lazy"
              className="ml-4"
            />
          </div>
          <hr className="h-16 w-[2px] bg-green-400 border-none  sm:block" />
          <div className="text-center">
            <h1 className="text-lg sm:text-2xl font-semibold">Career Development Center</h1>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full lg:w-1/2 flex-col justify-center items-center bg-blue-700 p-4 gap-4">
        <h2 className="text-base sm:text-lg font-bold text-white">Want More Details:</h2>
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <input
            type="text"
            className="border p-2 border-yellow-300 outline-none rounded-md"
            placeholder="Enter your email..."
          />
          <button className="bg-yellow-300 px-4 py-2 rounded-md hover:bg-yellow-400 transition-all">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
