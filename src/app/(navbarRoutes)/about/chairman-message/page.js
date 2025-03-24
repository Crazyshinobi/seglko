import NavigationPages from '@/app/utils/NavigationPages'
import React from 'react'

const page = () => {
  return (
    <>
      <div className=" w-full h-[26vh] md:h-[40vh] lg:h-80 ">
        <img
          src="/HistoryBanner.PNG"
          alt="History of Seg Banner"
          className="w-full h-full object-fit"
        />
      </div>

      <div>
        <NavigationPages />
      </div>

      <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-8 lg:px-16 xl:px-32">
  <div className="max-w-6xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Chairman's Message</h2>
      <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
    </div>

    {/* Content Container */}
    <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      {/* Chairman's Photo */}
      <div className="w-full lg:w-2/5 relative">
        <div className="aspect-w-3 aspect-h-4 lg:aspect-none h-full">
          <img
            src="/ChairmanImg.jpg"
            alt="Chairman of SEG"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <h3 className="text-2xl font-bold text-white">Mr. Sunil Singh</h3>
          <p className="text-blue-200">Chairman, Saroj Educational Group</p>
        </div>
      </div>

      {/* Message Content */}
      <div className="w-full lg:w-3/5 p-8 md:p-10 lg:p-12 space-y-6 overflow-y-auto max-h-[600px]">
        <div className="flex items-center mb-2 lg:hidden">
          <div className="w-12 h-1 bg-blue-600 rounded-full mr-3"></div>
          <h3 className="text-2xl font-semibold text-blue-800">Mr. Sunil Singh</h3>
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
          <p className="text-lg leading-relaxed">
            <span className="text-blue-600 font-medium">Dear Students, Educators, and Stakeholders,</span>
          </p>
          
          <p className="text-lg leading-relaxed">
            It gives me immense pleasure to welcome you to the Saroj Educational Group (SEG), a beacon of knowledge and a nurturing ground for future leaders. Since our inception, SEG has remained steadfast in its mission to impart quality education, develop practical skills, and instill a sense of responsibility in our students.
          </p>
          
          <p className="text-lg leading-relaxed">
            Education at SEG is not just about obtaining degrees; it is about shaping character, developing critical thinking, and preparing individuals for real-world challenges. Our dedicated faculty, state-of-the-art facilities, and industry-driven curriculum aim to provide a holistic learning experience that prepares students for a successful future.
          </p>
          
          <p className="text-lg leading-relaxed">
            I firmly believe that education is the key to empowerment, and at SEG, we strive to ignite the spark of curiosity, creativity, and courage in every learner. I invite you to be a part of this remarkable journey of knowledge, growth, and transformation.
          </p>
        </div>
        
        <div className="pt-4 border-t border-gray-200">
          <p className="text-lg font-semibold text-blue-800">Warm Regards,</p>
          <p className="text-lg font-semibold text-gray-800">Mr. Sunil Singh</p>
          <p className="text-gray-600">Chairman, Saroj Educational Group</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default page
