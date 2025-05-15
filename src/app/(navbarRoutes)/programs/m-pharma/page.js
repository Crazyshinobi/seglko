import NavigationPages from "@/app/utils/NavigationPages";
import React from "react";

export const metadata = {
  title: "M.Pharma Program | Saroj Educational Group",
  description:
    "Advance your pharmaceutical expertise with our in-depth master's program, designed for future leaders in the industry.",
};

const page = () => {
  return (
    <>
      <div className=" w-full h-[26vh] md:h-[40vh] lg:h-80 ">
        <img
          src="/MPharmaBanner.PNG"
          alt="M Pharma Banner"
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
            Master of Pharmacy <span className="text-blue-600">(M.Pharm)</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Advance your pharmaceutical expertise with our in-depth master's
            program, designed for future leaders in the industry.
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
            <div className="text-blue-500 text-3xl mb-4">📘</div>
            <h3 className="text-xl font-bold mb-2">2-Year Advanced Program</h3>
            <p className="text-gray-600">
              In-depth coursework spanning two years with a focus on advanced
              research.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-green-500">
            <div className="text-green-500 text-3xl mb-4">🔬</div>
            <h3 className="text-xl font-bold mb-2">Research & Innovation</h3>
            <p className="text-gray-600">
              Engage in innovative research projects under experienced mentors.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-purple-500">
            <div className="text-purple-500 text-3xl mb-4">👩‍🏫</div>
            <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
            <p className="text-gray-600">
              Learn from industry professionals and experienced academicians.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange-500">
            <div className="text-orange-500 text-3xl mb-4">🏥</div>
            <h3 className="text-xl font-bold mb-2">Diverse Career Paths</h3>
            <p className="text-gray-600">
              Explore opportunities in research, clinical practice, and
              pharmaceutical industries.
            </p>
          </div>
        </div>

        {/* Specializations Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-10 bg-gradient-to-r from-green-800 to-green-600 text-white">
            <h2 className="text-3xl font-bold mb-2">M.Pharm Specializations</h2>
            <p className="text-green-100 max-w-2xl">
              Advanced specializations to develop expertise in pharmaceutical
              sciences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
            {/* Pharmaceutics */}
            <div className="flex items-start space-x-4 hover:bg-green-50 p-4 rounded-lg transition-all">
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
                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Pharmaceutics
                </h3>
                <p className="text-gray-600">
                  Advanced drug delivery systems, formulation development and
                  nanotechnology.
                </p>
              </div>
            </div>

            {/* Pharmacology */}
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Pharmacology
                </h3>
                <p className="text-gray-600">
                  Advanced study of drug actions, clinical research and
                  toxicology.
                </p>
              </div>
            </div>

            {/* Pharmaceutical Chemistry */}
            <div className="flex items-start space-x-4 hover:bg-orange-50 p-4 rounded-lg transition-all">
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
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Pharmaceutical Chemistry
                </h3>
                <p className="text-gray-600">
                  Drug design, medicinal chemistry and computational modeling.
                </p>
              </div>
            </div>

            {/* Pharmacognosy */}
            <div className="flex items-start space-x-4 hover:bg-purple-50 p-4 rounded-lg transition-all">
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
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Pharmacognosy
                </h3>
                <p className="text-gray-600">
                  Study of medicinal drugs derived from plants and natural
                  sources.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-blue-900 rounded-2xl text-white overflow-hidden">
          <div className="p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-6">
              Why Choose Our M.Pharm Program?
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
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Advanced Research Facilities
                    </h3>
                    <p className="text-blue-200">
                      State-of-the-art labs for drug development and analysis
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Industry-Expert Faculty
                    </h3>
                    <p className="text-blue-200">
                      Learn from professors with extensive research and industry
                      experience
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
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Thesis Guidance</h3>
                    <p className="text-blue-200">
                      Individualized support for research projects and
                      publications
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
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Pharma Industry Collaborations
                    </h3>
                    <p className="text-blue-200">
                      Partnerships with leading pharmaceutical companies for
                      research and placements
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Paths for M.Pharm */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Your Advanced Pharmacy Career Opportunities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            <div className="bg-white p-4 rounded-lg shadow text-center group hover:bg-blue-600 hover:text-white transition-all">
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <p className="font-medium">Clinical Pharmacist</p>
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <p className="font-medium">Pharmaceutical Researcher</p>
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <p className="font-medium">Formulation Scientist</p>
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <p className="font-medium">Regulatory Affairs</p>
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <p className="font-medium">Pharmacy Lecturer</p>
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <p className="font-medium">Drug Safety Associate</p>
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <p className="font-medium">Pharma Marketing Manager</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Advance Your Career in Pharmacy?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our M. Pharma program and take the next step toward
            specialization and advanced pharmaceutical research.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://seglko.in8.nopaperforms.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-800 hover:bg-gray-100 px-8 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105"
            >
              Apply Now
            </a>
            <a
              href="tel:09555699988"
              className="border-2 border-white text-white hover:bg-green-700 px-8 py-3 rounded-full font-bold transition-all"
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
