import NavigationPages from "@/app/utils/NavigationPages";
import React from "react";

export const metadata = {
  title: "BBA Program | Saroj Educational Group",
  description:
    "Unlock your potential with our comprehensive BBA program designed to build future business leaders.",
};

const page = () => {
  return (
    <>
      <div className="w-full h-[26vh] md:h-[40vh] lg:h-80">
        <img
          src="/BbaBanner.PNG"
          alt="BBA Banner"
          className="w-full h-full object-fit"
        />
      </div>

      <div>
        <NavigationPages />
      </div>

      <div className="bg-gradient-to-b from-blue-50 to-gray-100 py-16 px-4 sm:px-8 lg:px-16 xl:px-32 space-y-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-6 leading-tight">
            Bachelor of Business Administration{" "}
            <span className="text-blue-600">(BBA)</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Unlock your potential with our comprehensive BBA program designed to
            build future business leaders.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all transform hover:scale-105">
              Apply Now
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-all">
              Download Brochure
            </button>
          </div>
        </div>

        {/* Program Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-blue-500">
            <div className="text-blue-500 text-3xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-2">3-Year Program</h3>
            <p className="text-gray-600">
              A structured curriculum with practical learning experiences.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-green-500">
            <div className="text-green-500 text-3xl mb-4">💼</div>
            <h3 className="text-xl font-bold mb-2">Industry Insights</h3>
            <p className="text-gray-600">
              Workshops, internships, and corporate connections.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-purple-500">
            <div className="text-purple-500 text-3xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-2">Global Perspective</h3>
            <p className="text-gray-600">
              Exposure to international business practices.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange-500">
            <div className="text-orange-500 text-3xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-2">Leadership Development</h3>
            <p className="text-gray-600">
              Focus on communication, decision-making, and leadership skills.
            </p>
          </div>
        </div>

        {/* Specializations Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-10 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
            <h2 className="text-3xl font-bold mb-2">Specializations</h2>
            <p className="text-blue-100 max-w-2xl">
              Focus on key business areas to tailor your expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
            <div className="flex items-start space-x-4 hover:bg-blue-50 p-4 rounded-lg transition-all">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                📊
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Marketing
                </h3>
                <p className="text-gray-600">
                  Branding, digital marketing, and market research.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 hover:bg-blue-50 p-4 rounded-lg transition-all">
              <div className="bg-green-100 text-green-600 p-3 rounded-full">
                💼
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Human Resources
                </h3>
                <p className="text-gray-600">
                  Talent management and organizational behavior.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 hover:bg-blue-50 p-4 rounded-lg transition-all">
              <div className="bg-orange-100 text-orange-600 p-3 rounded-full">
                💰
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Finance</h3>
                <p className="text-gray-600">
                  Financial analysis, investment management, and accounting.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 hover:bg-blue-50 p-4 rounded-lg transition-all">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
                🌍
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  International Business
                </h3>
                <p className="text-gray-600">
                  Global trade, economics, and cross-cultural management.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-blue-900 rounded-2xl text-white overflow-hidden">
          <div className="p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-6">Why Choose SEG for BBA?</h2>
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
                      Industry-Relevant Curriculum
                    </h3>
                    <p className="text-blue-200">
                      Courses designed with insights from business leaders and
                      experts.
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
                    <h3 className="text-xl font-semibold">
                      Practical Learning Approach
                    </h3>
                    <p className="text-blue-200">
                      Case studies, simulations, and real-world projects.
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Experienced Faculty
                    </h3>
                    <p className="text-blue-200">
                      Learn from educators with strong industry backgrounds.
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
                        d="M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Career Placement Support
                    </h3>
                    <p className="text-blue-200">
                      Dedicated placement cell for internships and jobs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Paths for BBA */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Your Future Career Paths
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {[
              {
                title: "Marketing Manager",
                iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
              },
              {
                title: "Financial Analyst",
                iconPath:
                  "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
              },
              {
                title: "Business Consultant",
                iconPath:
                  "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
              },
              {
                title: "HR Manager",
                iconPath:
                  "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
              },
              {
                title: "Operations Manager",
                iconPath:
                  "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
              },
              {
                title: "Entrepreneur",
                iconPath:
                  "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "Digital Marketing Specialist",
                iconPath:
                  "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
              },
            ].map((career, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow text-center group hover:bg-blue-600 hover:text-white transition-all"
              >
                <div className="bg-blue-100 group-hover:bg-blue-500 mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-3">
                  <svg
                    className="w-8 h-8 text-blue-600 group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={career.iconPath}
                    ></path>
                  </svg>
                </div>
                <p className="font-medium">{career.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join our BBA program and become part of the next generation of business leaders.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105">
              Apply Now
            </button>
            <button className="border-2 border-white text-white hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition-all">
              Contact Admissions
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
