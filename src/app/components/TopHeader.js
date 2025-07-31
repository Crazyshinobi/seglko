import Link from 'next/link'
import React from 'react'
import { FaEnvelope } from 'react-icons/fa6'

export default function TopHeader() {
  return (
    <div className='lg:flex w-full hidden  py-1 flex-row gap-4 items-center  justify-center bg-slate-300 text-gray-600 cursor-pointer'>
        
        <Link href='/about/whyjoin'><p className='hover:text-blue-600'>Why SEG?</p></Link>
        <a href='http://sitmalumni.seglko.org/'
        target="_blank"
         className='hover:text-blue-600'
        >Alumni</a>
        {/* <p>ERP LOGIN</p>  */}
       <Link href='/career'> <p className='hover:text-blue-600'>Career</p></Link>
        <p>Toll Free No: 1800-180-7686</p>
          <a href='mailto:hr@seglko.org'
         className='hover:text-blue-600 flex flex-row justify-center items-center'
        ><FaEnvelope/>{" "}: hr@seglko.org</a>
        <Link href="/fees-payment" className='bg-blue-600 text-white py-1 px-3 rounded-md'>Pay Fee Online</Link>
    </div>
  )
}
