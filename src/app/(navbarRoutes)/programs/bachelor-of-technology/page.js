import NavigationPages from "@/app/utils/NavigationPages";
import React from "react";

export const metadata = {
  title: "B.Tech Program | Saroj Educational Group",
  description:
    "Explore the B.Tech program at Saroj Educational Group (SEG) and discover the specializations, eligibility, career opportunities, and more.",
};

const page = () => {
  return (
    <>
      <div className="w-full h-[26vh] md:h-[40vh] lg:h-80">
        <img
          src="/BtechBanner.PNG"
          alt="B.Tech Banner"
          className="w-full h-full object-fit"
        />
      </div>

      <div>
        <NavigationPages />
      </div>

      <div className="bg-gradient-to-b from-blue-50 to-gray-100 py-16 px-4 sm:px-8 lg:px-16 xl:px-32 space-y-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-blue-900 mb-6 leading-tight">
            Bachelor of Technology{" "}
            <span className="text-blue-600">(B.Tech)</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Launch your engineering career with our industry-focused
            undergraduate program designed to shape future technology leaders
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://seglko.in8.nopaperforms.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all transform hover:scale-105"
            >
              Apply Now
            </a>
          </div>
        </div>

        {/* Program Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-blue-500">
            <div className="text-blue-500 text-3xl mb-4">🎓</div>
            <h3 className="text-xl font-bold mb-2">4-Year Program</h3>
            <p className="text-gray-600">
              Comprehensive 8-semester curriculum with practical focus
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-green-500">
            <div className="text-green-500 text-3xl mb-4">🔧</div>
            <h3 className="text-xl font-bold mb-2">6 Specializations</h3>
            <p className="text-gray-600">
              Industry-relevant engineering disciplines
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-purple-500">
            <div className="text-purple-500 text-3xl mb-4">🏭</div>
            <h3 className="text-xl font-bold mb-2">Modern Labs</h3>
            <p className="text-gray-600">
              Hands-on learning with cutting-edge equipment
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange-500">
            <div className="text-orange-500 text-3xl mb-4">👔</div>
            <h3 className="text-xl font-bold mb-2">Internship Program</h3>
            <p className="text-gray-600">
              Mandatory industry internships for real-world experience
            </p>
          </div>
        </div>

        {/* Specializations Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-10 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
            <h2 className="text-3xl font-bold mb-2">Specializations</h2>
            <p className="text-blue-100 max-w-2xl">
              Choose from our diverse range of engineering disciplines
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
            <div className="flex items-start space-x-4 hover:bg-blue-50 p-4 rounded-lg transition-all">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Computer Science
                </h3>
                <p className="text-gray-600">
                  AI, Machine Learning, Software Development
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 hover:bg-blue-50 p-4 rounded-lg transition-all">
              <div className="bg-green-100 text-green-600 p-3 rounded-full">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Electronics & Communication
                </h3>
                <p className="text-gray-600">
                  IoT, Embedded Systems, 5G Technologies
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 hover:bg-blue-50 p-4 rounded-lg transition-all">
              <div className="bg-orange-100 text-orange-600 p-3 rounded-full">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Mechanical Engineering
                </h3>
                <p className="text-gray-600">
                  Automotive, Robotics, Manufacturing
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 hover:bg-blue-50 p-4 rounded-lg transition-all">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Civil Engineering
                </h3>
                <p className="text-gray-600">
                  Construction, Urban Planning, Infrastructure
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 hover:bg-blue-50 p-4 rounded-lg transition-all">
              <div className="bg-red-100 text-red-600 p-3 rounded-full">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Electrical Engineering
                </h3>
                <p className="text-gray-600">
                  Power Systems, Renewable Energy, Smart Grids
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 hover:bg-blue-50 p-4 rounded-lg transition-all">
              <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Chemical Engineering
                </h3>
                <p className="text-gray-600">
                  Process Engineering, Petrochemicals, Biotechnology
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-blue-900 rounded-2xl text-white overflow-hidden">
          <div className="p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-6">
              Why Choose Our B.Tech Program?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-blue-700 p-2 rounded-full">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Industry-Ready Curriculum
                    </h3>
                    <p className="text-blue-200">
                      Courses designed with input from leading tech companies
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-blue-700 p-2 rounded-full">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Hands-on Learning</h3>
                    <p className="text-blue-200">
                      Practical labs, workshops, and maker spaces
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-blue-700 p-2 rounded-full">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Experienced Faculty
                    </h3>
                    <p className="text-blue-200">
                      Learn from professors with academic and industry expertise
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-blue-700 p-2 rounded-full">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Campus Placement</h3>
                    <p className="text-blue-200">
                      90%+ placement record with top recruiters
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Paths */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Exciting Career Paths After B.Tech
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white p-4 rounded-lg shadow text-center group hover:bg-blue-600 hover:text-white transition-all">
              <div className="bg-blue-100 group-hover:bg-blue-500 mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-3">
                <svg
                  className="w-8 h-8 text-blue-600 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <p className="font-medium">Software Developer</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center group hover:bg-blue-600 hover:text-white transition-all">
              <div className="bg-blue-100 group-hover:bg-blue-500 mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-3">
                <svg
                  className="w-8 h-8 text-blue-600 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <p className="font-medium">Data Analyst</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center group hover:bg-blue-600 hover:text-white transition-all">
              <div className="bg-blue-100 group-hover:bg-blue-500 mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-3">
                <svg
                  className="w-8 h-8 text-blue-600 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <p className="font-medium">System Engineer</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center group hover:bg-blue-600 hover:text-white transition-all">
              <div className="bg-blue-100 group-hover:bg-blue-500 mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-3">
                <svg
                  className="w-8 h-8 text-blue-600 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 5h16M4 9h16M4 13h16M4 17h16" strokeWidth="2" />
                </svg>
              </div>
              <p className="font-medium">Network Engineer</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center group hover:bg-blue-600 hover:text-white transition-all">
              <div className="bg-blue-100 group-hover:bg-blue-500 mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-3">
                <svg
                  className="w-8 h-8 text-blue-600 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <p className="font-medium">IT Consultant</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center group hover:bg-blue-600 hover:text-white transition-all">
              <div className="bg-blue-100 group-hover:bg-blue-500 mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-3">
                <svg
                  className="w-8 h-8 text-blue-600 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 6.253v13M12 6.253C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <p className="font-medium">Academician</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Launch Your Tech Career?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our B.Tech program to become a leader in technology and
            innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://seglko.in8.nopaperforms.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105"
            >
              Apply Now
            </a>
            <a
              href="tel:09555699988"
              className="border-2 border-white text-white hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition-all"
            >
              Contact Admissions
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
