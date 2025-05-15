import NavigationPages from "@/app/utils/NavigationPages";
import React from "react";

export const metadata = {
  title: "B.Pharma Program | Saroj Educational Group",
  description:
    "Explore the B.Pharma program at Saroj Educational Group (SEG) and discover the specializations, eligibility, career opportunities, and more.",
};

const page = () => {
  return (
    <>
      <div className=" w-full h-[26vh] md:h-[40vh] lg:h-80 ">
        <img
          src="/BPharmaBanner.png"
          alt="B.Pharma Banner"
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
            Bachelor of Pharmacy{" "}
            <span className="text-blue-600">(B. Pharma)</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Embark on a journey towards becoming a healthcare professional with
            our comprehensive B. Pharma program.
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
            <div className="text-blue-500 text-3xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-2">4-Year Program</h3>
            <p className="text-gray-600">
              Comprehensive 8-semester curriculum with hands-on training
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-green-500">
            <div className="text-green-500 text-3xl mb-4">🧪</div>
            <h3 className="text-xl font-bold mb-2">State-of-the-Art Labs</h3>
            <p className="text-gray-600">
              Well-equipped labs for practical exposure and research
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-purple-500">
            <div className="text-purple-500 text-3xl mb-4">🏥</div>
            <h3 className="text-xl font-bold mb-2">Industry Tie-ups</h3>
            <p className="text-gray-600">
              Collaborations with leading pharmaceutical companies
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange-500">
            <div className="text-orange-500 text-3xl mb-4">💼</div>
            <h3 className="text-xl font-bold mb-2">Career Opportunities</h3>
            <p className="text-gray-600">
              Guidance for placements, higher studies, and entrepreneurship
            </p>
          </div>
        </div>

        {/* Specializations Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-10 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
            <h2 className="text-3xl font-bold mb-2">Specializations</h2>
            <p className="text-blue-100 max-w-2xl">
              Focus on specialized fields to enhance your expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
            <div className="flex items-start space-x-4 hover:bg-blue-50 p-4 rounded-lg transition-all">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                💊
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Pharmaceutical Chemistry
                </h3>
                <p className="text-gray-600">
                  Drug design, synthesis, and analysis
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 hover:bg-blue-50 p-4 rounded-lg transition-all">
              <div className="bg-green-100 text-green-600 p-3 rounded-full">
                🧫
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Pharmacology
                </h3>
                <p className="text-gray-600">
                  Drug action, therapeutic uses, and side effects
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 hover:bg-blue-50 p-4 rounded-lg transition-all">
              <div className="bg-orange-100 text-orange-600 p-3 rounded-full">
                🧬
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Pharmaceutics
                </h3>
                <p className="text-gray-600">
                  Formulation, manufacturing, and dispensing
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 hover:bg-blue-50 p-4 rounded-lg transition-all">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
                🏭
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Pharmaceutical Analysis
                </h3>
                <p className="text-gray-600">
                  Quality control and assurance techniques
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-blue-900 rounded-2xl text-white overflow-hidden">
          <div className="p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-6">
              Why Choose SEG for B. Pharma?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {/* Extensive Practical Exposure */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-blue-700 p-2 rounded-full">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Extensive Practical Exposure
                    </h3>
                    <p className="text-blue-200">
                      Gain hands-on experience through advanced pharmaceutical
                      laboratories.
                    </p>
                  </div>
                </div>

                {/* Industry-Relevant Curriculum */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-blue-700 p-2 rounded-full">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 5h16v2H4V5zm0 4h16v2H4V9zm0 4h10v2H4v-2zm0 4h16v2H4v-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Industry-Relevant Curriculum
                    </h3>
                    <p className="text-blue-200">
                      Stay updated with a curriculum designed by industry
                      experts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Placement Support */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-blue-700 p-2 rounded-full">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-7h2v2h-2zm0-8h2v6h-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Placement Support</h3>
                    <p className="text-blue-200">
                      Get guidance from a dedicated placement cell for a
                      successful career.
                    </p>
                  </div>
                </div>

                {/* Extensive Knowledge Resources */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-blue-700 p-2 rounded-full">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18L18.44 7 12 10.82 5.56 7 12 4.18zm7 8.09l-7 3.5-7-3.5V9.91l7 3.5 7-3.5v4.36z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Extensive Knowledge Resources
                    </h3>
                    <p className="text-blue-200">
                      Access a vast repository of pharmaceutical literature and
                      research materials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Paths */}
        <div className="max-w-6xl mx-auto mt-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Your Future Career Paths
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "Clinical Researcher", icon: "🧪" },
              { title: "Drug Inspector", icon: "🔍" },
              { title: "Pharmacovigilance Associate", icon: "💊" },
              { title: "Pharmaceutical Marketing", icon: "📊" },
              { title: "Hospital Pharmacist", icon: "🏥" },
              { title: "Regulatory Affairs Specialist", icon: "📄" },
            ].map(({ title, icon }) => (
              <div
                key={title}
                className="bg-white p-4 rounded-lg shadow text-center group hover:bg-blue-600 hover:text-white transition-all"
              >
                <div className="bg-blue-100 group-hover:bg-blue-500 mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl group-hover:text-white">
                    {icon}
                  </span>
                </div>
                <p className="font-medium">{title}</p>
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
            Join our B.Pharma program and become part of the next generation of
            healthcare leaders, shaping the future of pharmaceutical sciences!
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
            <a href="tel:09555699988" className="border-2 border-white text-white hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition-all">
              Contact Admissions
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
