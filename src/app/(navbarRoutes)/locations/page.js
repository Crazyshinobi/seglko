'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';

const colleges = [
  {
    id: 1,
    name: "Saroj Institute of Technology and Management",
    address: "12th KM Stone, Lucknow - Sultanpur Rd, Ahmamau, Uttar Pradesh 226021",
    programs: ["B.Tech", "M.Tech", "B.Pharma", "D.Pharma", "M.Pharma", "MBA", "MCA"],
    image: "/segBanner.jpeg",
    established: 2001,
    mapsUrl: "https://www.google.com/maps/place/Saroj+Institute+of+Technology+and+Management/@26.7986537,81.0082225,17z/data=!3m1!4b1!4m6!3m5!1s0x399ba6ca2a7a514d:0x3d1202273fbf1912!8m2!3d26.7986537!4d81.0107974!16s%2Fg%2F11c5z_rb7v?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D",
    description: "Premier institute offering quality technical and management education with state-of-the-art infrastructure."
  },
  {
    id: 2,
    name: "Shivdan Singh Institute of Technology and Management",
    address: "10th KM Stone, Aligarh – Mathura Road, Aligarh, Uttar Pradesh 202001",
    programs: ["B.Tech", "M.Tech", "B.Pharma", "D.Pharma", "M.Pharma", "MBA", "MCA", "Diploma", "BBA", "BCA", "B.Ed"],
    image: "/SSITM.jpg",
    established: 1997,
    mapsUrl: "https://www.google.com/maps/place/Shivdan+Singh+Institute+of+Technology+and+Management/@27.8092116,78.020294,17z/data=!3m1!4b1!4m6!3m5!1s0x3974a48b1dc2b28f:0x23c4fb820ec1cf4!8m2!3d27.8092116!4d78.0228689!16s%2Fm%2F05zzmnr?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D",
    description: "Leading technical institute known for its excellent placement record and industry-aligned curriculum."
  },
  {
    id: 3,
    name: "Saroj College of Engineering and Polytechnic",
    address: "12th KM Stone, Lucknow - Sultanpur Rd, Ahmamau, Uttar Pradesh 226021",
    programs: ["B.Tech", "MBA", "BBA"],
    image: "/segBanner.jpeg",
    established: 2014,
    mapsUrl: "https://www.google.com/maps/place/Saroj+Institute+of+Technology+and+Management/@26.7986537,81.0082225,17z/data=!3m1!4b1!4m6!3m5!1s0x399ba6ca2a7a514d:0x3d1202273fbf1912!8m2!3d26.7986537!4d81.0107974!16s%2Fg%2F11c5z_rb7v?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D",
    description: "Specialized in engineering and polytechnic education with hands-on training facilities.",
    diplomaCourses: [
      { name: "Diploma in Civil Engineering", duration: "3 Years", seats: 60, fee: "₹28,000" },
      { name: "Diploma in Electrical Engineering", duration: "3 Years", seats: 60, fee: "₹28,000" },
      { name: "Diploma in Mechanical Engineering (Production)", duration: "3 Years", seats: 60, fee: "₹28,000" },
      { name: "Diploma in Mechanical Engineering (Refrigeration & Air Conditioning)", duration: "3 Years", seats: 60, fee: "₹28,000" },
      { name: "Diploma in Mechanical Engineering (Automobile)", duration: "3 Years", seats: 30, fee: "₹28,000" },
      { name: "Diploma in Computer Science & Engineering", duration: "3 Years", seats: 60, fee: "₹28,000" },
      { name: "Diploma in Direction, Screenplay Writing & TV Production", duration: "3 Years", seats: 30, fee: "₹28,000" },
      { name: "Diploma in Film Technology (Animation & Visual Effects)", duration: "3 Years", seats: 30, fee: "₹28,000" },
      { name: "Diploma in Cinematography", duration: "3 Years", seats: 30, fee: "₹28,000" }
    ]
  },
  {
    id: 4,
    name: "Saroj College of Pharmacy",
    address: "Ahmamau, Uttar Pradesh 226002",
    programs: ["B.Pharma", "M.Pharma", "D.Pharma"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    established: 2009,
    mapsUrl: "https://www.google.com/maps/place/Saroj+College+of+Pharmacy/@26.799279,81.0087936,17z/data=!3m1!4b1!4m6!3m5!1s0x399be31cd400bb67:0x2570747e7fb7d24b!8m2!3d26.799279!4d81.0113685!16s%2Fg%2F11hz9lj3p2?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D",
    description: "Center of excellence in pharmaceutical education with modern labs and research facilities."
  }
];

export default function CollegesListPage() {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [filteredColleges, setFilteredColleges] = useState(colleges);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [expandedCollege, setExpandedCollege] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let results = colleges;
    
    if (activeFilter !== 'all') {
      results = results.filter(college =>
        college.programs.some(program =>
          program.toLowerCase().includes(activeFilter)
      ))
    }
    
    setFilteredColleges(results);
  }, [activeFilter]);

  const toggleExpand = (collegeId) => {
    setExpandedCollege(expandedCollege === collegeId ? null : collegeId);
  };

  const programTypes = ['all', 'tech', 'pharma', 'mba', 'bba', 'mca', 'bca'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Saroj Educational Group - Campuses</title>
        <meta name="description" content="Explore our college campuses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-6 md:py-8 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold">Saroj Educational Group</h1>
          <p className="mt-1 md:mt-2 text-sm md:text-lg">Explore our campuses</p>
        </div>
      </header>

      <main className="container mx-auto px-2 sm:px-4 py-6 md:py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-3">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Our College Locations</h2>
          
          <div className="flex flex-wrap gap-1 md:gap-2">
            {programTypes.map((type) => (
              <button
                key={type}
                className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm capitalize transition-all ${
                  activeFilter === type 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setActiveFilter(type)}
              >
                {type === 'all' ? 'All' : type}
              </button>
            ))}
          </div>
        </div>

        {filteredColleges.length === 0 ? (
          <div className="text-center py-8 md:py-10">
            <p className="text-gray-500 text-base md:text-lg">No colleges found matching your search.</p>
            <button 
              className="mt-3 md:mt-4 px-3 py-1 md:px-4 md:py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm md:text-base"
              onClick={() => setActiveFilter('all')}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {isMobile ? (
              // Mobile view - cards
              <div className="divide-y divide-gray-200">
                {filteredColleges.map((college) => (
                  <div key={college.id} className="p-4">
                    <div 
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleExpand(college.id)}
                    >
                      <div className="flex items-center">
                        <img className="h-10 w-10 rounded-full mr-3" src={college.image} alt={college.name} />
                        <div>
                          <h3 className="font-medium text-gray-900">{college.name}</h3>
                          <p className="text-xs text-gray-500">{college.established}</p>
                        </div>
                      </div>
                      <svg
                        className={`h-5 w-5 text-gray-500 transform transition-transform ${
                          expandedCollege === college.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    
                    {expandedCollege === college.id && (
                      <div className="mt-3 pl-13">
                        <p className="text-sm text-gray-700 mb-2">{college.address}</p>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                          {college.programs.slice(0, 3).map((program, index) => (
                            <span
                              key={index}
                              className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded"
                            >
                              {program}
                            </span>
                          ))}
                          {college.programs.length > 3 && (
                            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                              +{college.programs.length - 3}
                            </span>
                          )}
                        </div>
                        
                        {/* Diploma Courses for Mobile */}
                        {college.diplomaCourses && (
                          <div className="mb-3">
                            <h4 className="font-medium text-sm mb-1">Diploma Courses:</h4>
                            <div className="space-y-2">
                              {college.diplomaCourses.map((course, index) => (
                                <div key={index} className="text-xs bg-gray-50 p-2 rounded">
                                  <p className="font-medium">{course.name}</p>
                                  <p>{course.duration} • {course.seats} seats</p>
                                  <p className="font-medium">{course.fee}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="flex gap-2 mt-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCollege(college);
                            }}
                            className="text-xs bg-blue-600 text-white px-3 py-1 rounded"
                          >
                            Details
                          </button>
                          <a
                            href={college.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Map
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              // Desktop view - table
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      College
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Programs
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Established
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredColleges.map((college) => (
                    <>
                      <tr 
                        key={college.id} 
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => toggleExpand(college.id)}
                      >
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full" src={college.image} alt={college.name} />
                            </div>
                            <div className="ml-3">
                              <div className="text-sm font-medium text-gray-900">{college.name}</div>
                              <div className="text-xs text-gray-500">{college.address}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 md:px-6 py-4">
                          <div className="flex flex-wrap gap-1">
                            {college.programs.slice(0, 3).map((program, index) => (
                              <span
                                key={index}
                                className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded"
                              >
                                {program}
                              </span>
                            ))}
                            {college.programs.length > 3 && (
                              <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                                +{college.programs.length - 3}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {college.established}
                        </td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCollege(college);
                            }}
                            className="text-blue-600 hover:text-blue-900 mr-3 text-xs md:text-sm"
                          >
                            Details
                          </button>
                          <a
                            href={college.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-900 text-xs md:text-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Map
                          </a>
                        </td>
                      </tr>
                      {expandedCollege === college.id && (
                        <tr>
                          <td colSpan="4" className="px-4 md:px-6 py-4 bg-gray-50">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="md:col-span-2">
                                <h3 className="font-semibold mb-2 text-sm md:text-base">About</h3>
                                <p className="text-gray-700 text-xs md:text-sm">{college.description}</p>
                                
                                {/* Diploma Courses Table */}
                                {college.diplomaCourses && (
                                  <div className="mt-3 md:mt-4">
                                    <h3 className="font-semibold mb-2 text-sm md:text-base">Diploma Courses</h3>
                                    <div className="overflow-x-auto">
                                      <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-100">
                                          <tr>
                                            <th className="px-2 md:px-4 py-1 md:py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Name</th>
                                            <th className="px-2 md:px-4 py-1 md:py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                                            <th className="px-2 md:px-4 py-1 md:py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seats</th>
                                            <th className="px-2 md:px-4 py-1 md:py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Annual Fee</th>
                                          </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                          {college.diplomaCourses.map((course, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                              <td className="px-2 md:px-4 py-1 md:py-2 whitespace-nowrap text-xs md:text-sm text-gray-900">{course.name}</td>
                                              <td className="px-2 md:px-4 py-1 md:py-2 whitespace-nowrap text-xs md:text-sm text-gray-500">{course.duration}</td>
                                              <td className="px-2 md:px-4 py-1 md:py-2 whitespace-nowrap text-xs md:text-sm text-gray-500">{course.seats}</td>
                                              <td className="px-2 md:px-4 py-1 md:py-2 whitespace-nowrap text-xs md:text-sm text-gray-500">{course.fee}</td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div>
                                <h3 className="font-semibold mb-2 text-sm md:text-base">All Programs</h3>
                                <div className="flex flex-wrap gap-2">
                                  {college.programs.map((program, index) => (
                                    <span
                                      key={index}
                                      className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                                    >
                                      {program}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </main>

      {/* College Detail Modal */}
      {selectedCollege && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 md:p-4 z-[5001]">
          <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedCollege.image}
                alt={selectedCollege.name}
                className="w-full h-48 md:h-64 object-cover"
              />
              <button
                onClick={() => setSelectedCollege(null)}
                className="absolute top-2 md:top-4 right-2 md:right-4 bg-white rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center shadow-md hover:bg-gray-100 transition"
              >
                ✕
              </button>
            </div>
            <div className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 md:mb-2">{selectedCollege.name}</h2>
              <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">{selectedCollege.address}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-1 md:mb-2 text-sm md:text-base">About</h3>
                  <p className="text-gray-600 text-xs md:text-sm">{selectedCollege.description}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-700 mb-1 md:mb-2 text-sm md:text-base">Programs Offered</h3>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {selectedCollege.programs.map((program, index) => (
                      <span
                        key={index}
                        className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Diploma Courses in Modal */}
              {selectedCollege.diplomaCourses && (
                <div className="mb-4 md:mb-6">
                  <h3 className="font-semibold text-gray-700 mb-1 md:mb-2 text-sm md:text-base">Diploma Courses</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-2 md:px-4 py-1 md:py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                          <th className="px-2 md:px-4 py-1 md:py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                          <th className="px-2 md:px-4 py-1 md:py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seats</th>
                          <th className="px-2 md:px-4 py-1 md:py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fee</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {selectedCollege.diplomaCourses.map((course, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-2 md:px-4 py-1 md:py-2 whitespace-nowrap text-xs md:text-sm text-gray-900">{course.name}</td>
                            <td className="px-2 md:px-4 py-1 md:py-2 whitespace-nowrap text-xs md:text-sm text-gray-500">{course.duration}</td>
                            <td className="px-2 md:px-4 py-1 md:py-2 whitespace-nowrap text-xs md:text-sm text-gray-500">{course.seats}</td>
                            <td className="px-2 md:px-4 py-1 md:py-2 whitespace-nowrap text-xs md:text-sm text-gray-500">{course.fee}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              
              {isMapVisible && (
                <div className="mt-3 md:mt-4 h-48 md:h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedCollege.address)}&output=embed`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>
              )}
              
              <div className="mt-4 md:mt-6 flex flex-wrap gap-2 md:gap-3">
                <a
                  href={selectedCollege.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1 md:px-6 md:py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center gap-1 text-xs md:text-sm"
                >
                  📍 Open in Maps
                </a>
                <button
                  onClick={() => setIsMapVisible(!isMapVisible)}
                  className="px-4 py-1 md:px-6 md:py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition text-xs md:text-sm"
                >
                  {isMapVisible ? 'Hide Map' : 'Show Map'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}