"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  AiOutlineBook,
  AiOutlineTeam,
  AiOutlineCheckCircle,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import {
  FaChalkboardTeacher,
  FaTasks,
  FaBriefcase,
  FaQuoteLeft,
} from "react-icons/fa";
import {
  MdForum,
  MdAssessment,
  MdWork,
  MdExpandMore,
  MdExpandLess,
  MdClose,
} from "react-icons/md";
import NavigationPages from "../utils/NavigationPages";

const courseComponents = [
  {
    title: "Digital Self-paced Content",
    desc: "Content enables the learners to access interactive and engaging materials to learn at their own pace and convenience for a flexible learning experience.",
    icon: <AiOutlineBook className="text-blue-600 text-4xl" />,
  },
  {
    title: "Expert Lectures",
    desc: "Multiple lectures delivered by experts from academy and industry, covering theoretical and hands-on implementation of the technology.",
    icon: <FaChalkboardTeacher className="text-blue-600 text-4xl" />,
  },
  {
    title: "Discussion Forum",
    desc: "A community to share and resolve your queries, doubts, and ideas which will be responded to by the academic and industry experts.",
    icon: <MdForum className="text-blue-600 text-4xl" />,
  },
  {
    title: "Industry Assignment",
    desc: "Opportunity to work on industry-related assignments and mini projects created by industry experts to gain real-time industry exposure.",
    icon: <FaTasks className="text-blue-600 text-4xl" />,
  },
  {
    title: "Periodic Formative Assessment",
    desc: "Three formative assessments are conducted in a continuous comprehensive evaluation pattern during the course of learning.",
    icon: <MdAssessment className="text-blue-600 text-4xl" />,
  },
  {
    title: "Summative Assessment",
    desc: "Candidates to appear for summative assessments consisting of two parts – Test of knowledge and Test of application.",
    icon: <AiOutlineTeam className="text-blue-600 text-4xl" />,
  },
  {
    title: "Verifiable Digital Certificate",
    desc: "Successful candidates to receive a digital certificate, verifiable through online platforms.",
    icon: <AiOutlineCheckCircle className="text-blue-600 text-4xl" />,
  },
  {
    title: "Internship Opportunity",
    desc: "Remote internship will be provided to students which will give them an exclusive opportunity to work with industry mentors on projects and document preparation.",
    icon: <MdWork className="text-blue-600 text-4xl" />,
  },
  {
    title: "Job Visibility",
    desc: "Get visibility to job vacancies with leading corporate recruiters that recognize the TCS iON NQT certification, subject to vacancies in corporates and their hiring policies.",
    icon: <FaBriefcase className="text-blue-600 text-4xl" />,
  },
];

export default function CourseLayout({ course }) {
  const [showFullSummary, setShowFullSummary] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [expandedModules, setExpandedModules] = useState({});
  const [activeTab, setActiveTab] = useState("overview");

  const toggleSummary = () => setShowFullSummary(!showFullSummary);

  const toggleModule = (index) => {
    setExpandedModules((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleAllModules = () => {
    const allExpanded = Object.values(expandedModules).every(Boolean);
    const newState = {};
    course.syllabus.forEach((_, index) => {
      newState[index] = !allExpanded;
    });
    setExpandedModules(newState);
  };

  // Function to render summary content
  const renderSummary = () => {
    if (Array.isArray(course.summary)) {
      return course.summary.map((paragraph, index) => (
        <p key={index} className="mb-4 last:mb-0">
          {paragraph}
        </p>
      ));
    }
    return <p>{course.summary}</p>;
  };

  // Function to render prerequisites
  const renderPrerequisites = () => {
    if (Array.isArray(course.prerequisites)) {
      return (
        <ul className="space-y-4">
          {course.prerequisites.map((item, index) => (
            <li key={index}>
              {item.title ? (
                <>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  {item.topics && (
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      {item.topics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <p>{item}</p>
              )}
            </li>
          ))}
        </ul>
      );
    }
    return <p>{course.prerequisites}</p>;
  };

  return (
    <>
         <div className=" w-full h-[26vh] md:h-[40vh] lg:h-80 ">
        <img
          src={course.courseBanner}
          alt=" Banner"
          className="w-full h-full object-fit"
        />
      </div>

      <div>
        <NavigationPages/>
      </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Back Link */}
      <div className="mb-4 sm:mb-6">
        <Link
          href="/tcs/tcs-ion"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm sm:text-base"
        >
          <AiOutlineArrowLeft className="mr-1 sm:mr-2" />
          Back to all courses
        </Link>
      </div>

      {/* Course Header */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
          {course.title}
        </h1>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium">
            {course.degree}
          </span>
          <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs sm:text-sm font-medium">
            Semester {course.semester}
          </span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 mb-6 sm:mb-8 overflow-x-auto">
        <nav className="flex space-x-4 sm:space-x-8 min-w-max pb-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={`whitespace-nowrap py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm ${
              activeTab === "overview"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("syllabus")}
            className={`whitespace-nowrap py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm ${
              activeTab === "syllabus"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Syllabus
          </button>
          <button
            onClick={() => setActiveTab("components")}
            className={`whitespace-nowrap py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm ${
              activeTab === "components"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Components
          </button>
          {course.mentors?.length > 0 && (
          <button
            onClick={() => setActiveTab("mentors")}
            className={`whitespace-nowrap py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm ${
              activeTab === "mentors"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Mentors
          </button>
          )}
          <button
            onClick={() => setActiveTab("career")}
            className={`whitespace-nowrap py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm ${
              activeTab === "career"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Career
          </button>
          {course.jobRoles?.length > 0 && (
            <button
              onClick={() => setActiveTab("job")}
              className={`whitespace-nowrap py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm ${
                activeTab === "job"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Job Roles
            </button>
          )}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="space-y-8 sm:space-y-12">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6 sm:space-y-8">
            {/* Course Summary */}
            <section className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Course Summary
              </h2>
              <div className="relative">
                <motion.div
                  initial={{ height: "auto" }}
                  animate={{ height: showFullSummary ? "auto" : "8rem" }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {renderSummary()}
                  </div>
                </motion.div>
                {!showFullSummary && (
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                )}
              </div>
              <button
                onClick={toggleSummary}
                className="mt-3 sm:mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
              >
                {showFullSummary ? (
                  <>
                    <MdExpandLess className="mr-1" />
                    Show Less
                  </>
                ) : (
                  <>
                    <MdExpandMore className="mr-1" />
                    Read More
                  </>
                )}
              </button>
            </section>

            {/* Recommended Prior Knowledge */}
            <section className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Recommended Prior Knowledge
              </h2>
              {renderPrerequisites()}
            </section>
          </div>
        )}

        {/* Syllabus Tab */}
        {activeTab === "syllabus" && (
          <section className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Syllabus
              </h2>
              <button
                onClick={toggleAllModules}
                className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                {Object.values(expandedModules).every(Boolean)
                  ? "Collapse All"
                  : "Expand All"}
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {course.syllabus.map((module, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden transition-all hover:border-blue-200 hover:shadow-sm"
                >
                  <button
                    onClick={() => toggleModule(index)}
                    className="w-full flex justify-between items-center p-3 sm:p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                      <span className="text-blue-600 mr-2">{index + 1}.</span>
                      {module.title}
                    </h3>
                    {expandedModules[index] ? (
                      <MdExpandLess className="text-gray-500 text-lg sm:text-xl" />
                    ) : (
                      <MdExpandMore className="text-gray-500 text-lg sm:text-xl" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedModules[index] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="p-3 sm:p-4 pt-2 border-t border-gray-100">
                          <ul className="space-y-2 pl-5">
                            {module.topics.map((topic, i) => (
                              <li
                                key={i}
                                className="relative before:absolute before:left-[-1rem] before:top-[0.5rem] before:w-2 before:h-2 before:rounded-full before:bg-blue-400 text-sm sm:text-base"
                              >
                                <span className="text-gray-700">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Components Tab */}
        {activeTab === "components" && (
          <section>
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                Course Components
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                Our comprehensive learning approach combines multiple components
                to deliver a holistic educational experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {courseComponents.map((component, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all h-full flex flex-col"
                >
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-blue-50 rounded-full">
                      {component.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 text-center mb-2 sm:mb-3">
                    {component.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm text-center flex-grow">
                    {component.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        )}
        {/* Mentors Tab */}
        {activeTab === "mentors" && course.jobRoles?.length > 0 && (
          <section>
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Meet the Mentor(s)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {course.mentors.map((mentor, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="text-blue-600 text-2xl mb-4">❝</div>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {mentor.description.length > 150
                      ? `${mentor.description.substring(0, 150)}...`
                      : mentor.description}
                  </p>
                  {mentor.description.length > 150 && (
                    <button
                      onClick={() => setSelectedMentor(mentor)}
                      className="mt-2 text-blue-600 hover:text-blue-800 font-semibold flex items-center"
                    >
                      + Read More
                    </button>
                  )}
                  <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
                    <div className="relative">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-gray-900">{mentor.name}</h3>
                      <p className="text-gray-600 text-sm">{mentor.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mentor Details Modal */}
            <AnimatePresence>
              {selectedMentor && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 flex items-center justify-center p-4 z-50 bg-black bg-opacity-30"
                  onClick={() => setSelectedMentor(null)}
                >
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.95 }}
                    className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg max-h-[80vh] overflow-y-auto relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setSelectedMentor(null)}
                      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    >
                      <MdClose className="text-xl" />
                    </button>

                    <div className="flex items-center mb-6">
                      <img
                        src={selectedMentor.image}
                        alt={selectedMentor.name}
                        className="w-16 h-16 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {selectedMentor.name}
                        </h3>
                        <p className="text-blue-600">{selectedMentor.role}</p>
                      </div>
                    </div>

                    <div className="text-gray-700 space-y-4">
                      {selectedMentor.description
                        .split("\n")
                        .map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        )}

        {/* Career Tab */}
        {activeTab === "career" && (
          <div className="space-y-6 sm:space-y-8">
            {course.careerOutlook && (
              <section className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Career Outlook
                </h2>
                <ul className="space-y-3 sm:space-y-4">
                  {course.careerOutlook.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-100 flex items-center justify-center">
                          <div className="w-2 h-2 sm:w-2 sm:h-2 rounded-full bg-blue-600"></div>
                        </div>
                      </div>
                      <p className="ml-2 sm:ml-3 text-gray-700 text-sm sm:text-base">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        )}

        {/* Job roles  */}
        {activeTab === "job" && course.jobRoles?.length > 0 && (
  <section className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm border border-gray-100">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
      Job Roles
    </h2>
    <ul className="space-y-3 sm:space-y-4">
      {course.jobRoles.map((role, index) => (
        <li key={index} className="flex items-start">
          <div className="flex-shrink-0 mt-1">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-100 flex items-center justify-center">
              <div className="w-2 h-2 sm:w-2 sm:h-2 rounded-full bg-blue-600"></div>
            </div>
          </div>
          <p className="ml-2 sm:ml-3 text-gray-700 text-sm sm:text-base">
            {role}
          </p>
        </li>
      ))}
    </ul>
  </section>
)}
      </div>

      {/* Call to Action */}
      <div className="mt-8 sm:mt-12 md:mt-16 text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
          Ready to start your learning journey?
        </h3>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors text-sm sm:text-base"
          >
            <Link href={course.courseurl} target="_blank"
            >
              Enroll Now
              
            </Link>
          </motion.button>
        </div>
      </div>
    </div>
    </>
  );
}
