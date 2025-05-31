'use client'
import NavigationPages from '@/app/utils/NavigationPages'
import React, { useState } from 'react'


export default function CriteriaContent() {
    const [activeTab, setActiveTab] = useState('undergraduate');
  const [expandedSections, setExpandedSections] = useState([]);

  const toggleSection = (sectionId) => {
    if (expandedSections.includes(sectionId)) {
      setExpandedSections(expandedSections.filter(id => id !== sectionId));
    } else {
      setExpandedSections([...expandedSections, sectionId]);
    }
  };

  const criteriaData = {
    undergraduate: [
      {
        id: 'ug1',
        title: 'Academic Requirements',
        content: 'Minimum 60% marks in 10+2 examination from a recognized board. Science stream required for technical courses.'
      },
      {
        id: 'ug2',
        title: 'Age Limit',
        content: 'Candidates must be between 17-21 years of age at the time of admission.'
      },
     
    ],
    postgraduate: [
      {
        id: 'pg1',
        title: 'Academic Requirements',
        content: 'Bachelor\'s degree with minimum 55% aggregate marks in relevant discipline from a recognized university.'
      },
     
      {
        id: 'pg2',
        title: 'Work Experience',
        content: 'Minimum 1 year work experience required for executive programs (waiver available for exceptional candidates).'
      }
    ],
    diploma: [
      {
        id: 'dp1',
        title: 'Academic Requirements',
        content: 'Minimum 50% marks in 10th standard for foundation diploma programs.'
      },
      {
        id: 'dp2',
        title: 'Skill Assessment',
        content: 'Candidates may need to undergo a skill assessment test for technical diploma programs.'
      }
    ]
  };
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

      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-4 ">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-6 pb-2 border-b-2 border-blue-200">
        Admission Eligibility Criteria
      </h2>
      
      <div className="flex justify-center mb-8 ">
        <div className="inline-flex rounded-md shadow-sm " role="group">
          <button
            onClick={() => setActiveTab('undergraduate')}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${activeTab === 'undergraduate' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:bg-blue-50'}`}
          >
            Undergraduate
          </button>
          <button
            onClick={() => setActiveTab('postgraduate')}
            className={`px-4 py-2 text-sm font-medium ${activeTab === 'postgraduate' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:bg-blue-50'}`}
          >
            Postgraduate
          </button>
          <button
            onClick={() => setActiveTab('diploma')}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${activeTab === 'diploma' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:bg-blue-50'}`}
          >
            Diploma
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {criteriaData[activeTab].map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection(item.id)}
              className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-lg font-semibold text-blue-700">{item.title}</h3>
              <svg
                className={`w-5 h-5 text-blue-600 transform transition-transform ${expandedSections.includes(item.id) ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedSections.includes(item.id) && (
              <div className="p-4 bg-white">
                <p className="text-gray-700">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h3 className="text-xl font-semibold text-blue-800 mb-3">Additional Information</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>All candidates must submit original documents for verification</li>
          <li>International students must have equivalent qualifications</li>
          <li>5% relaxation in marks for reserved category candidates</li>
          <li>Admission subject to availability of seats</li>
        </ul>
        {/* <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Download Full Admission Brochure
        </button> */}
      </div>
    </div>
    </>
  )
}
