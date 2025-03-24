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
      <div className="bg-gray-50 py-16 px-6 md:px-16 lg:px-32 space-y-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12">
        Why Join Saroj Educational Group (SEG)?
      </h1>

      <div className="space-y-10">
        {/* Academic Excellence */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Academic Excellence</h2>
          <p className="text-gray-700 text-lg">
            At SEG, we prioritize a robust academic foundation that balances theoretical knowledge with practical application. Our experienced faculty members, many of whom are industry experts and researchers, guide students through a comprehensive curriculum designed to meet global standards. Regular workshops, seminars, and industry interactions ensure that students stay updated with the latest advancements.
          </p>
        </div>

        {/* State-of-the-Art Infrastructure */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">State-of-the-Art Infrastructure</h2>
          <p className="text-gray-700 text-lg">
            SEG is equipped with state-of-the-art infrastructure, including modern classrooms, advanced laboratories, a vast digital library, and high-speed internet access. Our technologically enabled campus creates a conducive environment for learning and research, empowering students to explore and innovate.
          </p>
        </div>

        {/* Holistic Development */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Holistic Development</h2>
          <p className="text-gray-700 text-lg">
            Beyond academics, SEG believes in nurturing well-rounded individuals. We offer a variety of extracurricular activities, clubs, and cultural events that enhance leadership skills, teamwork, and creativity. Our focus on personality development prepares students to face real-world challenges confidently.
          </p>
        </div>

        {/* Strong Industry Connections */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Strong Industry Connections</h2>
          <p className="text-gray-700 text-lg">
            SEG maintains strong ties with reputed industries and organizations, facilitating internships, guest lectures, and placement opportunities. Our dedicated placement cell works tirelessly to connect students with leading companies, ensuring successful career launches.
          </p>
        </div>

        {/* Global Exposure */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Global Exposure</h2>
          <p className="text-gray-700 text-lg">
            SEG collaborates with international universities, enabling student exchange programs, global internships, and exposure to multicultural environments. These experiences broaden perspectives and prepare students for global opportunities.
          </p>
        </div>

        {/* Alumni Network */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Strong Alumni Network</h2>
          <p className="text-gray-700 text-lg">
            Our alumni network spans across the globe, holding significant positions in reputed organizations. They actively participate in mentoring current students, sharing experiences, and guiding them toward successful careers.
          </p>
        </div>

        {/* Safe and Inclusive Campus */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Safe and Inclusive Campus</h2>
          <p className="text-gray-700 text-lg">
            SEG is committed to creating a safe, inclusive, and diverse environment where every student feels valued and respected. Our anti-ragging policies, counseling services, and dedicated staff ensure the well-being of our students.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default page
