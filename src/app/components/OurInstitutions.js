import React from 'react'
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { MdPersonSearch } from "react-icons/md";


export default function OurInstitutions() {
  return (
   <>
    <div className='max-w-7xl drop-shadow-lg shadow-lg bg-white w-full flex flex-row mx-auto gap-2 py-4 mt-8'>
     {/* OUR institution  */}
     <div className=' h-full w-2/4 flex flex-col items-center '>
      {/* Heading  */}
       <div className=' p-3 flex text-4xl gap-4 text-center justify-center border-b-2 border-blue-600 w-full text-[#354b87]'>
        <HiOutlineBuildingLibrary/> Our Institutions
        
       </div>

       {/* institutions name */}
       <div className='w-4/5 flex flex-col gap-1 pt-3'>
        <p className='font-bold text-[#003963] text-2xl'>Shivdan Singh Institute of Technology and Management</p>
        <p>College Code : 007</p>
        <p> Approved by AICTE and affiliated to AKTU,Lucknow.</p>
         <p className='w-full border border-blue-600'></p>

         <p className='font-bold text-[#003963] text-2xl'>  Saroj Institute of Technology and Management</p>
        <p>College Code : 123</p>
        <p> Approved by AICTE and affiliated to AKTU,Lucknow.</p>
         <p className='w-full border border-blue-600'></p>

         <p className='font-bold text-[#003963] text-2xl'>Saroj College of Law</p>
        <p>College Code : </p>
        <p>   Approved by Bar Council of India (BCI) and affiliated to AKTU,Lucknow.</p>
         <p className='w-full border border-blue-600'></p>

         <p className='font-bold text-[#003963] text-2xl'>  Saroj College of Pharmacy</p>
        <p>College Code : 2031</p>
        <p> Approved by Pharmacy Council of India and affiliated to AKTU,Lucknow.</p>
         <p className='w-full border border-blue-600'></p>

         <p className='font-bold text-[#003963] text-2xl'>Saroj College of Engineering and Polytechnic</p>
        <p>College Code : </p>
        <p> Approved by AICTE and affiliated to AKTU,Lucknow.</p>
         {/* <p className='w-full border border-blue-600'></p> */}



       </div>
     </div>

     {/* Placement Update */}
     <div className=' h-full w-2/4 flex flex-col items-center'>
      <div className=' p-3 flex text-4xl gap-4 text-center justify-center border-b-2 w-full border-blue-600 text-[#354b87]'><MdPersonSearch />Placement Update</div>

      {/* Placement company */}
      <div className='w-4/5 flex flex-col gap-1 pt-3'>
      <p>This is to inform you that <strong className='text-[#354b87] font-bold text-xl'>TNV System Certification Pvt. Ltd.</strong> is visiting the SEG campus for  <strong  className='text-[#354b87] font-bold text-xl'>BTech and MBA</strong> students.</p>
      <p className='w-full border border-blue-600'></p>

      </div>


     </div>


    </div>
   </>
  )
}
