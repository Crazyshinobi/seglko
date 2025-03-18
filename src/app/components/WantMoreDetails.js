import Image from 'next/image';
import React from 'react';

export const WantMoreDetails = () => {
  return (
    <div className="max-w-7xl flex flex-row mx-auto  h-[200px]">
      {/* Left Section */}
      <div className="w-2/4  h-full   flex flex-row justify-center items-center bg-yellow-400">

        <div  className='w-2/4 flex flex-row justify-center items-center gap-2 '>

        <div className=' w-2/4 flex justify-end'>  <Image
              src="/seglogo.png"
              height={100}
              width={100}
              alt="SEG Logo"
              loading="lazy"
              className="ml-4"
            /></div>
        <hr  className="h-32 w-[2px] bg-green-400 border-none"/> 
        <div className='w-2/5'>
       
            <h1 className='text-2xl'>
            Center for Industrial Growth
            </h1>
        </div>
        </div>

      </div>

      {/* Right Section */}
      <div className="w-2/4 flex flex-col justify-center items-center bg-blue-700 gap-4">
        <h2 className="text-lg font-bold text-white">Want More Details:</h2>
       <div >
       <input
          type="text"
          className="border p-2 border-yellow-300 outline-none"
          placeholder="Enter your email..."
        />
        <button className="bg-yellow-300 px-4 py-2 ">Submit</button> 
       </div>
      </div>
    </div>
  );
};
