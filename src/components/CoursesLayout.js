'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import { AiOutlineBook, AiOutlineTeam, AiOutlineCheckCircle } from "react-icons/ai";
import { FaChalkboardTeacher, FaTasks, FaBriefcase } from "react-icons/fa";
import { MdForum, MdAssessment, MdWork } from "react-icons/md";

// Updated Course Components Data
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

  const toggleSummary = () => {
    setShowFullSummary(!showFullSummary);
  };

  const toggleModule = (index) => {
    setExpandedModules((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Back Link */}
      <div className="mb-6">
        <Link href="/tcs/tcs-ion" className="text-blue-600 hover:text-blue-800 flex items-center">
          ← Back to all courses
        </Link>
      </div>

      {/* Course Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">{course.title}</h1>
        <div className="flex justify-center gap-4 mt-2">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
            {course.degree}
          </span>
          <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
            Semester {course.semester}
          </span>
        </div>
      </div>

      {/* Course Summary with Correct Animation */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Course Summary</h2>
        <motion.div
          initial={{ height: "auto" }}
          animate={{ height: showFullSummary ? "auto" : 80 }}
          exit={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden relative"
        >
          <p className="text-gray-700">
            {course.summary}
          </p>
          {!showFullSummary && (
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
          )}
        </motion.div>
        <button
          onClick={toggleSummary}
          className="mt-2 text-blue-600 hover:text-blue-800 font-semibold"
        >
          {showFullSummary ? "- Read Less" : "+ Read More"}
        </button>
      </section>

      {/* Recommended Prior Knowledge */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recommended Prior Knowledge</h2>
        <p className="text-gray-700">{course.prerequisites}</p>
      </section>

      {/* Syllabus with Animation */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Syllabus</h2>
        <div className="space-y-6">
          {course.syllabus.map((module, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg text-gray-800">
                {index + 1}. {module.title}
              </h3>
              <AnimatePresence>
                {expandedModules[index] && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="list-disc pl-5 space-y-2 mt-2 text-gray-700 overflow-hidden"
                  >
                    {module.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
              <button
                onClick={() => toggleModule(index)}
                className="mt-2 text-blue-600 hover:text-blue-800 font-semibold"
              >
                {expandedModules[index] ? "- Read Less" : "+ Read More"}
              </button>
            </div>
          ))}
        </div>
      </section>
       
      {/* Course Components Section */}
      <section className="mt-10">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">Course Components</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseComponents.map((component, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              {/* Icon */}
              <div className="flex justify-center mb-3">{component.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 text-center">{component.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-2 text-center">{component.desc}</p>
            </div>
          ))}
        </div>
      </section>
    {/* Mentors  */}
      <section className="max-w-6xl mx-auto p-4 mt-12">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
        Meet the Mentor(s)
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {course.mentors.map((mentor, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-2xl mb-3">❝</div>
            <p className="text-gray-700 line-clamp-3">
              {mentor.description.length > 150
                ? `${mentor.description.substring(0, 150)}...`
                : mentor.description}
            </p>
            {mentor.description.length > 150 && (
              <button
                onClick={() => setSelectedMentor(mentor)}
                className="mt-2 text-blue-600 hover:text-blue-800 font-semibold"
              >
                + Read More
              </button>
            )}
            <div className="flex items-center mt-4">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
              />
              <div className="ml-3">
                <h3 className="font-bold text-gray-800">{mentor.name}</h3>
                <p className="text-gray-600 text-sm">{mentor.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mentor Details Popup */}
      <AnimatePresence>
        {selectedMentor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center p-4 z-50 bg-black bg-opacity-30"
            onClick={() => setSelectedMentor(null)} // Close on clicking outside
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg border border-gray-300 relative max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <button
                onClick={() => setSelectedMentor(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
              >
                ❌
              </button>
             
              <p className="text-gray-700">{selectedMentor.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>

    {/* Career Outlook Section */}
{course.careerOutlook && (
  <section className="bg-white p-6 rounded-lg shadow-sm mt-8">
    <h2 className="font-bold text-gray-800 mb-4 text-3xl">Career Outlook</h2>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      {course.careerOutlook.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </section>
)}




    </div>
  );
}
