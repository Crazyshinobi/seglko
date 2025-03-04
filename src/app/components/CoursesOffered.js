"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCourse } from "../redux/courseSlice";
import { motion } from "framer-motion";

export default function CoursesOffered() {
  const selectedCourse = useSelector((state) => state.course.selectedCourse);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex items-center text-5xl justify-center py-3">
        Courses Offered At SEG
      </div>

      <div className="bg-green-400 h-auto flex flex-row">
        {/* Sidebar: Course Selection */}
        <div className="bg-red-400 w-2/6 p-6 h-full flex flex-col">
          {" "}
          {/* Fixed height for parent container */}
          <h1 className="text-4xl mb-4">
            Our Great <br /> Programs
          </h1>

         
          {/* Scrollable container */}
          <div className="w-[90%] h-full overflow-y-auto ">
            <button
              onClick={() => dispatch(setCourse("BCA"))}
              className={`block w-full text-left py-2 px-4 rounded-lg ${
                selectedCourse === "BCA" ? "bg-white text-black" : "text-white"
              }`}
            >
              Bachelor's of Computer Applications
            </button>

            <button
              onClick={() => dispatch(setCourse("BTech"))}
              className={`block w-full text-left py-2 px-4 rounded-lg mt-2 ${
                selectedCourse === "BTech"
                  ? "bg-white text-black"
                  : "text-white"
              }`}
            >
              Bachelor of Technology
            </button>

            <button
              onClick={() => dispatch(setCourse("MTech"))}
              className={`block w-full text-left py-2 px-4 rounded-lg mt-2 ${
                selectedCourse === "MTech"
                  ? "bg-white text-black"
                  : "text-white"
              }`}
            >
              Master of Technology
            </button>

            <button
              onClick={() => dispatch(setCourse("MCA"))}
              className={`block w-full text-left py-2 px-4 rounded-lg mt-2 ${
                selectedCourse === "MCA"
                  ? "bg-white text-black"
                  : "text-white"
              }`}
            >
              Master's of Computer Applications 
            </button>

            <button
              onClick={() => dispatch(setCourse("MBA"))}
              className={`block w-full text-left py-2 px-4 rounded-lg mt-2 ${
                selectedCourse === "MBA"
                  ? "bg-white text-black"
                  : "text-white"
              }`}
            >
              Master's of Business Administration
            </button>

            <button
              onClick={() => dispatch(setCourse("BBA"))}
              className={`block w-full text-left py-2 px-4 rounded-lg mt-2 ${
                selectedCourse === "BBA"
                  ? "bg-white text-black"
                  : "text-white"
              }`}
            >
              Bachelor's of Business Administration
            </button>

            <button
              onClick={() => dispatch(setCourse("M.Pharma"))}
              className={`block w-full text-left py-2 px-4 rounded-lg mt-2 ${
                selectedCourse === "M.Pharma"
                  ? "bg-white text-black"
                  : "text-white"
              }`}
            >
              M.Pharma
            </button>

            <button
              onClick={() => dispatch(setCourse("B.Pharma"))}
              className={`block w-full text-left py-2 px-4 rounded-lg mt-2 ${
                selectedCourse === "B.Pharma"
                  ? "bg-white text-black"
                  : "text-white"
              }`}
            >
              B.Pharma
            </button>

            <button
              onClick={() => dispatch(setCourse("D.Pharma"))}
              className={`block w-full text-left py-2 px-4 rounded-lg mt-2 ${
                selectedCourse === "D.Pharma"
                  ? "bg-white text-black"
                  : "text-white"
              }`}
            >
              D.Pharma
            </button>

           

            <button
              onClick={() => dispatch(setCourse("Polytechnic"))}
              className={`block w-full text-left py-2 px-4 rounded-lg mt-2 ${
                selectedCourse === "Polytechnic" ? "bg-white text-black" : "text-white"
              }`}
            >
              Polytechnic
            </button>
          </div>
        </div>

        {/* Course Information with Inner Animation */}
        <div className="w-2/6 bg-blue-400 p-6 min-h-[150px] flex items-center justify-start">
          <motion.div
            key={selectedCourse}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-start"
          >
            {selectedCourse === "BCA" && (
              <div>
                <h2 className="text-2xl font-bold">
                  BCA (Bachelor of Computer Applications)
                </h2>
                <p className="mt-2">
                  BCA is a 3-year program at SEG, focusing on computer
                  applications, programming, and software development.
                </p>
              </div>
            )}

            {selectedCourse === "BTech" && (
              <div>
                <h2 className="text-2xl font-bold">
                  BTech (Bachelor of Technology)
                </h2>
                <p className="mt-2">
                  BTech is a 4-year engineering program at SEG, covering various
                  technical disciplines like CSE, ECE, and Mechanical
                  Engineering.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
