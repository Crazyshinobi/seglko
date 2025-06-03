import NavigationPages from '@/app/utils/NavigationPages'
import React from 'react'


export const metadata = {
  title : "Mission & Vision | Saroj Educational Group",
  description : "Discover the mission and vision of Saroj Educational Group (SEG) and how it shapes the future of education.",
};


const page = () => {
 
  return (
    <>
    {/* <div className=" w-full h-[26vh] md:h-[40vh] lg:h-80 ">
        <img
          src="/PlacementBanner.PNG"
          alt="History of Seg Banner"
          className="w-full h-full object-fit"
        />
      </div> */}
      <div className="relative w-full h-[40vh] bg-blue-900 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Mission & Vision</h1>
      </div>

      <div>
        <NavigationPages/>
      </div>
 

  <div className="bg-gray-100 py-16 px-6 md:px-16 lg:px-32 space-y-16">
  <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12">
    Our <span className="text-blue-600">Mission</span> & <span className="text-blue-600">Vision</span>
  </h1>

  {/* Mission - Image Left, Content Right */}
  <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-500">
    {/* Image Section */}
    <div className="w-full md:w-1/2 h-80 md:h-auto overflow-hidden">
      <img 
        src="/MissionImg.jpg" 
        alt="Mission" 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
      />
    </div>
    
    {/* Content Section */}
    <div className="w-full md:w-1/2 p-8 md:p-10 space-y-6">
      <div className="flex items-center gap-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-3 rounded-full shadow-md">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-blue-800">Our Mission</h2>
      </div>
      <p className="text-gray-700 text-lg leading-relaxed">
      At Saroj Educational Group (SEG), our mission is to impart quality education that fosters innovation, critical thinking, and holistic development. We aim to nurture professionals who are not only industry-ready but also equipped to contribute responsibly to society. By integrating contemporary teaching methodologies with industry standards, we aspire to create leaders who excel in their fields.
      </p>
    
    </div>
  </div>

  {/* Vision - Content Left, Image Right */}
<div className="flex flex-col md:flex-row-reverse items-center gap-8 lg:gap-12 bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-500">
  {/* Image Section */}
  <div className="w-full md:w-1/2 h-80 md:h-auto overflow-hidden">
    <img 
      src="/VisionImg.png" 
      alt="Vision" 
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
    />
  </div>
  
  {/* Content Section */}
  <div className="w-full md:w-1/2 p-8 md:p-10 space-y-6">
    <div className="flex items-center gap-4">
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-3 rounded-full shadow-md">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      </div>
      <h2 className="text-3xl font-bold text-blue-800">Our Vision</h2>
    </div>
    <p className="text-gray-700 text-lg leading-relaxed">
      Our vision is to be a globally recognized institution that molds the next generation of leaders, innovators, and change-makers. We strive to build a community of learners where knowledge meets excellence, and where every individual is empowered to reach their full potential. Through a culture of research, integrity, and inclusivity, we aim to contribute meaningfully to the advancement of education and society.
    </p>
  </div>
</div>

</div>

      
    </>
  )
}

export default page
