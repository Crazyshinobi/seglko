import NavigationPages from '@/app/utils/NavigationPages'
import React from 'react'
import { degreePrograms, coursesData } from '@/data/coursesData';
import Link from 'next/link';


export const metadata = {
  title: 'TCS ION Courses - Saroj Educational Group',
  description: 'Explore the courses offered by TCS ION at Saroj Educational Group. Enhance your skills and knowledge with our specialized programs.',
};


export default function page() {
  
  return (
   <>
    <div className="w-full h-[26vh] md:h-[40vh] lg:h-80">
    <img
      src="/TcsBanner.PNG"
      alt="Tcs & Seg Collab Banner"
      className="w-full h-full object-fit"
    />
  </div>
  <div>
    <NavigationPages/>
  </div>

  <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">Courses Provided by TCS</h1>
      
      <div className="space-y-10">
      {degreePrograms.map((program, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 px-6 py-4">
              <h3 className="text-xl font-bold text-white">{program.degree}</h3>
              <p className="text-blue-100">{program.type}</p>
            </div>
            
            <div className="px-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {program.courses.map((courseId) => {
                  const course = coursesData[courseId];
                  
                  return (
                   <Link
                   key={courseId}
                   href={`/tcs-ion/${courseId}`}
                   className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                   
                      <h4 className="font-medium text-gray-800 mb-1">{course.title}</h4>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        Semester {course.semester}
                      </span>
                      <span className="inline-block bg-yellow-100 text-blue-800 text-xs px-2 py-1 ml-4 rounded-full">
                        View Details
                      </span>
                      </Link>
                    
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   </>
  )
}
