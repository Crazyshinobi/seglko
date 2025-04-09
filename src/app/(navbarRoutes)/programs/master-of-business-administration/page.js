import NavigationPages from "@/app/utils/NavigationPages";
import React from "react";

export const metadata = {
  title: "MBA Program | Saroj Educational Group",
  description:
    "Pursue your Master of Business Administration (MBA) at Saroj Educational Group and become a business leader. Apply now!",
};

const page = () => {
  return (
    <>
      <div className="w-full h-[26vh] md:h-[40vh] lg:h-80">
        <img
          src="/MbaBanner.PNG"
          alt="Mba Banner"
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
            Master of Business Administration{" "}
            <span className="text-blue-600">(MBA)</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Accelerate your career growth with our dynamic MBA program designed
            for future business leaders.
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
            <h3 className="text-xl font-bold mb-2">2-Year Program</h3>
            <p className="text-gray-600">
              An intensive curriculum combining theory with practical business
              applications.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-green-500">
            <div className="text-green-500 text-3xl mb-4">💼</div>
            <h3 className="text-xl font-bold mb-2">Industry Connections</h3>
            <p className="text-gray-600">
              Collaborations with top companies for internships and placements.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-purple-500">
            <div className="text-purple-500 text-3xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-2">Global Perspective</h3>
            <p className="text-gray-600">
              International exposure and global business case studies.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange-500">
            <div className="text-orange-500 text-3xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-2">Leadership Focus</h3>
            <p className="text-gray-600">
              Enhance decision-making, strategic thinking, and leadership
              abilities.
            </p>
          </div>
        </div>

        {/* Specializations Section for MBA */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-10 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
            <h2 className="text-3xl font-bold mb-2">MBA Specializations</h2>
            <p className="text-blue-100 max-w-2xl">
              Choose your focus area to develop advanced business expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
            <div className="flex items-start space-x-4 hover:bg-blue-50 p-4 rounded-lg transition-all">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                📈
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Finance Management
                </h3>
                <p className="text-gray-600">
                  Corporate finance, investment banking, and financial markets.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 hover:bg-blue-50 p-4 rounded-lg transition-all">
              <div className="bg-green-100 text-green-600 p-3 rounded-full">
                🛒
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Marketing Management
                </h3>
                <p className="text-gray-600">
                  Digital marketing, brand strategy, and consumer behavior.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 hover:bg-blue-50 p-4 rounded-lg transition-all">
              <div className="bg-orange-100 text-orange-600 p-3 rounded-full">
                👥
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Human Resources
                </h3>
                <p className="text-gray-600">
                  Talent development, organizational leadership, and HR
                  analytics.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 hover:bg-blue-50 p-4 rounded-lg transition-all">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
                ⚙️
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Operations Management
                </h3>
                <p className="text-gray-600">
                  Supply chain, logistics, and business process optimization.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us for MBA */}
        <div className="bg-blue-900 rounded-2xl text-white overflow-hidden">
          <div className="p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-6">
              Why Choose Our MBA Program?
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
                      Leadership Development
                    </h3>
                    <p className="text-blue-200">
                    Executive coaching for leadership skills.
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
                      Industry Immersion
                    </h3>
                    <p className="text-blue-200">
                      Live projects with corporate partners and case
                      competitions.
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
                      Global Perspective
                    </h3>
                    <p className="text-blue-200">
                      International business modules and study abroad
                      opportunities.
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
                    <h3 className="text-xl font-semibold">Executive Network</h3>
                    <p className="text-blue-200">
                      Access to alumni network and corporate mentorship
                      programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Paths for MBA */}
<div className="max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
    Your Executive Career Paths
  </h2>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
    {[
      {
        title: "Senior Consultant",
        iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      },
      {
        title: "Finance Director",
        iconPath: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      },
      {
        title: "Marketing Director",
        iconPath: "M15 12a3 3 0 11-6 0 3 3 0 016 0zm-3 7a7 7 0 100-14 7 7 0 000 14zm0-16a9 9 0 100 18 9 9 0 000-18z"
      },
      {
        title: "Operations Director",
        iconPath: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
      },
      {
        title: "Chief Strategy Officer",
        iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      },
      {
        title: "Business Development Manager",
        iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6M7 8a2 2 0 100-4 2 2 0 000 4z"
      },
      {
        title: "Chief Executive Officer",
        iconPath: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      }
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
            Ready to Elevate Your Business Acumen?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our MBA program and take a strategic step toward leadership and
            career excellence.
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
