"use client";

import NavigationPages from "@/app/utils/NavigationPages";
import { useState } from "react";

export default function AwardWinningProjects() {
  const [expandedResearcher, setExpandedResearcher] = useState(null);

  const researchers = [
    {
      name: "Prof. (Dr.) S.N. Pandeya",
      projects: [
        "Synthesis and biological activity of fluoroquinolones as Anti-tubercular Agent",
        "Synthesis of Novel Semicarbazones as Anticonvulsant",
        "Potential anti-HIV Agent-Man rich",
        "Novel Anticancer Agents, Isatin derivatives",
      ],
    },
    {
      name: "Dr. D.N. Mishra",
      projects: [
        "Community Based Distribution Project",
        "Update Primary Health Care services in Mohanlal Ganj Block",
        "Study of NHRM (National Rural Health Mission) Asha in Gosaiganj Block",
      ],
    },
    {
      name: "Er. D. K. Singh",
      projects: [
        "Task allocation using B2B e-commerce, under the guidance of Prof. Dr. R.B. Mishra (Dept. of Computer Engg. IT BHU)",
      ],
    },
    {
      name: "Dr. Pramod Kr. Pandey",
      projects: [
        "An investigation into reduced order modeling via ISE minimization technique",
      ],
    },
  ];

  const toggleResearcher = (name) => {
    setExpandedResearcher(expandedResearcher === name ? null : name);
  };

  return (
    <>
      <div className=" w-full h-[26vh] md:h-[40vh] lg:h-80 ">
        <img
          src="/AwardProjectBanner.PNG"
          alt="Award Project Banner"
          className="w-full h-full object-fit"
        />
      </div>

      <div>
        <NavigationPages />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Award-Winning Projects
          </h1>
          <p className="text-gray-600">
            At Saroj Educational Group (SEG), our researchers have successfully
            undertaken numerous prestigious projects.
          </p>
        </div>

        <div className="space-y-6">
          {researchers.map((researcher) => (
            <div
              key={researcher.name}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleResearcher(researcher.name)}
                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <h2 className="text-xl font-semibold text-blue-700">
                  {researcher.name}
                </h2>
                <svg
                  className={`w-5 h-5 text-blue-500 transform transition-transform ${
                    expandedResearcher === researcher.name ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {expandedResearcher === researcher.name && (
                <div className="p-4 bg-white">
                  <h3 className="font-medium text-gray-800 mb-2">
                    Projects under investigation:
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {researcher.projects.map((project, index) => (
                      <li key={index} className="text-gray-700">
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            Research Funding & Collaborations
          </h3>
          <p className="text-gray-700 mb-3">
            Projects funded by Department of Biotechnology, DST (FIST), INSPIRE,
            SERB, DRDO, Council of Science & Technology UP, and Ministry of
            AYUSH, Government of India.
          </p>
          <p className="text-gray-700">
            Global collaborations include Indo-Russian, Indo-Dutch, and
            DAAD-RISE initiatives.
          </p>
        </div>
      </div>
    </>
  );
}
