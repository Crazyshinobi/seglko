import NavigationPages from '@/app/utils/NavigationPages'
import React from 'react'

const page = () => {
  return (
    <>
    <div className=" w-full h-[26vh] md:h-[40vh] lg:h-80 ">
        <img
          src="/PlacementBanner.PNG"
          alt="History of Seg Banner"
          className="w-full h-full object-fit"
        />
      </div>

      <div>
        <NavigationPages/>
      </div>

      <div className="bg-gray-100 py-16 px-6 md:px-16 lg:px-32 space-y-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12">
        Our Mission & Vision
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Mission */}
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-4">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            At Saroj Educational Group (SEG), our mission is to impart quality education that fosters innovation, critical thinking, and holistic development. We aim to nurture professionals who are not only industry-ready but also equipped to contribute responsibly to society. By integrating contemporary teaching methodologies with industry standards, we aspire to create leaders who excel in their fields.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-4">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Our Vision</h2>
          <p className="text-gray-700 text-lg">
            Our vision is to be a globally recognized institution that molds the next generation of leaders, innovators, and change-makers. We strive to build a community of learners where knowledge meets excellence, and where every individual is empowered to reach their full potential. Through a culture of research, integrity, and inclusivity, we aim to contribute meaningfully to the advancement of education and society.
          </p>
        </div>
      </div>
    </div>

      
    </>
  )
}

export default page
