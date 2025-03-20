"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCourse } from "../redux/courseSlice";
import { motion } from "framer-motion";
import { FaRupeeSign } from "react-icons/fa";
import { TfiTimer } from "react-icons/tfi";

export default function CoursesOffered() {
  const selectedCourse = useSelector((state) => state.course.selectedCourse);
  const dispatch = useDispatch();

  return (
    <div className="h-86vh  overflow-hidden">
      {/* <div className="flex items-center text-5xl justify-center py-3">
        Courses Offered At SEG
      </div> */}

      <div className=" h-[86vh] flex flex-row"
      >
        {/* Sidebar: Course Selection */}
        <div className=" w-[45%] p-6 h-full flex flex-col gap-1"
       style={{
        backgroundImage: `url(/CoursesBg.png)`,
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}>
          {" "}
          {/* Fixed height for parent container */}
          <h1 className="text-3xl mb-4"   >
            Our Great <br /><strong className="text-5xl"> Programs</strong>
          </h1>
          {/* Scrollable container */}
          <div className="w-[90%] h-full overflow-y-auto text-base">
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
                selectedCourse === "MCA" ? "bg-white text-black" : "text-white"
              }`}
            >
              Master's of Computer Applications
            </button>

            <button
              onClick={() => dispatch(setCourse("MBA"))}
              className={`block w-full text-left py-2 px-4 rounded-lg mt-2 ${
                selectedCourse === "MBA" ? "bg-white text-black" : "text-white"
              }`}
            >
              Master's of Business Administration
            </button>

            <button
              onClick={() => dispatch(setCourse("BBA"))}
              className={`block w-full text-left py-2 px-4 rounded-lg mt-2 ${
                selectedCourse === "BBA" ? "bg-white text-black" : "text-white"
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
                selectedCourse === "Polytechnic"
                  ? "bg-white text-black"
                  : "text-white"
              }`}
            >
              Polytechnic
            </button>
          </div>
        </div>

        <div className="flex flex-row w-full ">
          {/* Course Information Section */}
          <div className="w-2/4  p-6 flex items-start justify-start min-h-[250px]"
            style={{
              backgroundImage: `url(/CoursesBg.png)`,
              backgroundPosition: "top",
              backgroundSize: "cover",
            }}>
            <motion.div
              key={selectedCourse}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-start"
            >
              {selectedCourse === "BCA" && (
                <div className="flex flex-col gap-6">
                  <h2 className="text-2xl font-bold">
                    BCA (Bachelor of Computer Applications)
                  </h2>
                  <p className="">
                    The Bachelor of Computer Applications (BCA) at SEG,
                    affiliated with Dr. A.P.J. Abdul Kalam Technical University
                    (AKTU), is a three-year undergraduate program designed to
                    develop expertise in software development, database
                    management, networking, AI, and cybersecurity. The
                    curriculum integrates theoretical concepts with hands-on
                    training, including live projects, industry workshops,
                    coding challenges, and internships. With a focus on
                    practical learning and emerging technologies, the program
                    prepares students for dynamic careers in IT, software
                    engineering, cloud computing, and data analytics, equipping
                    them with the skills needed to thrive in the ever-evolving
                    tech industry.
                  </p>

                  <div className="flex flex-col gap-2">
                    <div className="bg-white flex flex-row py-2 w-60 ps-4 pe-8 gap-2 items-center rounded-md">
                      <p className="text-slate-500 bg-gray-300 drop-shadow-md shadow-md p-2 rounded-md">
                        <FaRupeeSign />
                      </p>
                      <p className="text-lg font-bold">3,00,000/-</p>
                    </div>

                    <div className="bg-white flex flex-row py-2 ps-4 w-60 gap-2 items-center rounded-md">
                      <p className="text-slate-500 bg-gray-300 drop-shadow-md shadow-md p-2 rounded-md">
                        <TfiTimer />
                      </p>
                      <p className="text-lg font-bold">3 Year</p>
                    </div>

                    <button className="bg-white py-2 px-4 rounded-lg font-extrabold text-lg flex w-fit">
                      View Program Details
                    </button>
                  </div>
                </div>
              )}

              {selectedCourse === "BTech" && (
                <div className="flex flex-col gap-6">
                  <h2 className="text-2xl font-bold">
                    B.Tech (Bachelor of Technology)
                  </h2>
                  <p className="">
                    The Bachelor of Technology (B.Tech) program at SEG,
                    affiliated with Dr. A.P.J. Abdul Kalam Technical University
                    (AKTU), is a four-year undergraduate program designed to
                    develop technical proficiency in various engineering
                    disciplines. The curriculum covers computer science,
                    mechanical, civil, electrical, and electronics engineering,
                    integrating core theoretical concepts with practical
                    applications, industry projects, and hands-on training.
                    Students gain expertise in software development, automation,
                    IoT, AI, and emerging technologies, preparing them for
                    careers in engineering, R&D, and industrial innovation.
                  </p>

                  <div className="flex flex-col gap-2">
                    <div className="bg-white flex flex-row py-2 w-60 ps-4 pe-8 gap-2 items-center rounded-md">
                      <p className="text-slate-500 bg-gray-300 drop-shadow-md shadow-md p-2 rounded-md">
                        <FaRupeeSign />
                      </p>
                      <p className="text-lg font-bold">4,80,000/-</p>
                    </div>

                    <div className="bg-white flex flex-row py-2 ps-4 w-60 gap-2 items-center rounded-md">
                      <p className="text-slate-500 bg-gray-300 drop-shadow-md shadow-md p-2 rounded-md">
                        <TfiTimer />
                      </p>
                      <p className="text-lg font-bold">4 Year</p>
                    </div>

                    <button className="bg-white py-2 px-4 rounded-lg font-extrabold text-lg flex w-fit">
                      View Program Details
                    </button>
                  </div>
                </div>
              )}

              {selectedCourse === "MTech" && (
                <div className="flex flex-col gap-6">
                  <h2 className="text-2xl font-bold">
                    M.Tech (Master of Technology)
                  </h2>
                  <p className="">
                    The Master of Technology (M.Tech) program at SEG, affiliated
                    with AKTU, is a two-year postgraduate program designed for
                    in-depth research and specialization in various engineering
                    fields. The program emphasizes advanced technical knowledge,
                    research methodologies, and industrial applications,
                    equipping students with expertise in machine learning,
                    robotics, VLSI design, software engineering, and renewable
                    energy technologies. The curriculum includes research
                    projects, industrial training, and hands-on lab experience,
                    enabling students to excel in academia, R&D, and technology
                    leadership roles.
                  </p>

                  <div className="flex flex-col gap-2">
                    <div className="bg-white flex flex-row py-2 w-60 ps-4 pe-8 gap-2 items-center rounded-md">
                      <p className="text-slate-500 bg-gray-300 drop-shadow-md shadow-md p-2 rounded-md">
                        <FaRupeeSign />
                      </p>
                      <p className="text-lg font-bold">2,50,000/-</p>
                    </div>

                    <div className="bg-white flex flex-row py-2 ps-4 w-60 gap-2 items-center rounded-md">
                      <p className="text-slate-500 bg-gray-300 drop-shadow-md shadow-md p-2 rounded-md">
                        <TfiTimer />
                      </p>
                      <p className="text-lg font-bold">2 Year</p>
                    </div>

                    <button className="bg-white py-2 px-4 rounded-lg font-extrabold text-lg flex w-fit">
                      View Program Details
                    </button>
                  </div>
                </div>
              )}

              {selectedCourse === "MCA" && (
                <div className="flex flex-col gap-6">
                  <h2 className="text-2xl font-bold">
                    MCA (Master of Computer Applications)
                  </h2>
                  <p className="">
                    The Master of Computer Applications (MCA) program at SEG,
                    affiliated with AKTU, is a two-year postgraduate course
                    designed to enhance proficiency in software development,
                    cloud computing, AI, data analytics, cybersecurity, and
                    blockchain technology. The curriculum integrates coding
                    challenges, live projects, industry case studies, and
                    internships to provide hands-on learning. With a strong
                    focus on practical exposure and real-world problem-solving,
                    the program prepares students for roles in IT development,
                    software architecture, data science, and cybersecurity
                    consulting.
                  </p>

                  <div className="flex flex-col gap-2">
                    <div className="bg-white flex flex-row py-2 w-60 ps-4 pe-8 gap-2 items-center rounded-md">
                      <p className="text-slate-500 bg-gray-300 drop-shadow-md shadow-md p-2 rounded-md">
                        <FaRupeeSign />
                      </p>
                      <p className="text-lg font-bold">2,80,000/-</p>
                    </div>

                    <div className="bg-white flex flex-row py-2 ps-4 w-60 gap-2 items-center rounded-md">
                      <p className="text-slate-500 bg-gray-300 drop-shadow-md shadow-md p-2 rounded-md">
                        <TfiTimer />
                      </p>
                      <p className="text-lg font-bold">2 Year</p>
                    </div>

                    <button className="bg-white py-2 px-4 rounded-lg font-extrabold text-lg flex w-fit">
                      View Program Details
                    </button>
                  </div>
                </div>
              )}

              {selectedCourse === "MBA" && (
                <div className="flex flex-col gap-6">
                  <h2 className="text-2xl font-bold">
                    MBA (Master of Business Administration)
                  </h2>
                  <p className="">
                    The Master of Business Administration (MBA) program at SEG,
                    affiliated with AKTU, is a two-year postgraduate course that
                    develops leadership, financial acumen, strategic management,
                    and entrepreneurial skills. The curriculum emphasizes
                    real-world case studies, industry internships, corporate
                    networking, and global business exposure, preparing students
                    for top managerial positions in multinational companies,
                    banking, consultancy, and startups.
                  </p>

                  <div className="flex flex-col gap-2">
                    <div className="bg-white flex flex-row py-2 w-60 ps-4 pe-8 gap-2 items-center rounded-md">
                      <p className="text-slate-500 bg-gray-300 drop-shadow-md shadow-md p-2 rounded-md">
                        <FaRupeeSign />
                      </p>
                      <p className="text-lg font-bold">3,00,000/-</p>
                    </div>

                    <div className="bg-white flex flex-row py-2 ps-4 w-60 gap-2 items-center rounded-md">
                      <p className="text-slate-500 bg-gray-300 drop-shadow-md shadow-md p-2 rounded-md">
                        <TfiTimer />
                      </p>
                      <p className="text-lg font-bold">2 Year</p>
                    </div>

                    <button className="bg-white py-2 px-4 rounded-lg font-extrabold text-lg flex w-fit">
                      View Program Details
                    </button>
                  </div>
                </div>
              )}

              {selectedCourse === "BBA" && (
                <div className="flex flex-col gap-6">
                  <h2 className="text-2xl font-bold">
                    BBA (Bachelor of Business Administration)
                  </h2>
                  <p className="">
                    The Bachelor of Business Administration (BBA) program at SEG
                    is a three-year undergraduate course designed to build
                    expertise in business management, marketing, finance, human
                    resources, and entrepreneurship. The curriculum integrates
                    case studies, industry exposure, live projects, and
                    leadership training, equipping students with strategic
                    decision-making skills and analytical abilities required in
                    the corporate world. Graduates can pursue careers in
                    corporate management, banking, digital marketing, and
                    business consulting.
                  </p>

                  <div className="flex flex-col gap-2">
                    <div className="bg-white flex flex-row py-2 w-60 ps-4 pe-8 gap-2 items-center rounded-md">
                      <p className="text-slate-500 bg-gray-300 drop-shadow-md shadow-md p-2 rounded-md">
                        <FaRupeeSign />
                      </p>
                      <p className="text-lg font-bold">2,10,000/-</p>
                    </div>

                    <div className="bg-white flex flex-row py-2 ps-4 w-60 gap-2 items-center rounded-md">
                      <p className="text-slate-500 bg-gray-300 drop-shadow-md shadow-md p-2 rounded-md">
                        <TfiTimer />
                      </p>
                      <p className="text-lg font-bold">3 Year</p>
                    </div>

                    <button className="bg-white py-2 px-4 rounded-lg font-extrabold text-lg flex w-fit">
                      View Program Details
                    </button>
                  </div>
                </div>
              )}

              {selectedCourse === "Polytechnic" && (
                <div className="flex flex-col gap-6">
                  <h2 className="text-2xl font-bold">
                    Polytechnic (Diploma in Engineering)
                  </h2>
                  <p className="">
                    The Polytechnic Diploma at SEG is a three-year technical
                    program designed to provide foundational and applied
                    engineering knowledge in disciplines such as mechanical,
                    civil, electrical, and computer engineering. With a focus on
                    practical skills, hands-on training, and industry
                    collaboration, this program prepares students for direct
                    entry into technical roles in industries, manufacturing, and
                    infrastructure development.
                  </p>

                  <div className="flex flex-col gap-2">
                    <div className="bg-white flex flex-row py-2 w-60 ps-4 pe-8 gap-2 items-center rounded-md">
                      <p className="text-slate-500 bg-gray-300 drop-shadow-md shadow-md p-2 rounded-md">
                        <FaRupeeSign />
                      </p>
                      <p className="text-lg font-bold">1,50,000/-</p>
                    </div>

                    <div className="bg-white flex flex-row py-2 ps-4 w-60 gap-2 items-center rounded-md">
                      <p className="text-slate-500 bg-gray-300 drop-shadow-md shadow-md p-2 rounded-md">
                        <TfiTimer />
                      </p>
                      <p className="text-lg font-bold">3 Year</p>
                    </div>

                    <button className="bg-white py-2 px-4 rounded-lg font-extrabold text-lg flex w-fit">
                      View Program Details
                    </button>
                  </div>
                </div>
              )}

              {selectedCourse === "D.Pharma" && (
                <div className="flex flex-col gap-6">
                  <h2 className="text-2xl font-bold">
                    D.Pharma (Diploma in Pharmacy)
                  </h2>
                  <p className="">
                    The Diploma in Pharmacy (D.Pharma) at SEG is a two-year
                    professional course designed to provide fundamental
                    knowledge of pharmaceutical sciences, drug formulation,
                    pharmacology, and clinical practices. The program equips
                    students with the essential skills required for pharmacy
                    practice, hospital drug dispensing, and regulatory affairs.
                    Graduates can pursue careers in retail and hospital
                    pharmacies, pharmaceutical marketing, and drug regulatory
                    agencies or continue their studies with B.Pharma for higher
                    opportunities.
                  </p>

                  <div className="flex flex-col gap-2">
                    <div className="bg-white flex flex-row py-2 w-60 ps-4 pe-8 gap-2 items-center rounded-md">
                      <p className="text-slate-500 bg-gray-300 drop-shadow-md shadow-md p-2 rounded-md">
                        <FaRupeeSign />
                      </p>
                      <p className="text-lg font-bold">1,80,000/-</p>
                    </div>

                    <div className="bg-white flex flex-row py-2 ps-4 w-60 gap-2 items-center rounded-md">
                      <p className="text-slate-500 bg-gray-300 drop-shadow-md shadow-md p-2 rounded-md">
                        <TfiTimer />
                      </p>
                      <p className="text-lg font-bold">2 Year</p>
                    </div>

                    <button className="bg-white py-2 px-4 rounded-lg font-extrabold text-lg flex w-fit">
                      View Program Details
                    </button>
                  </div>
                </div>
              )}

              {selectedCourse === "M.Pharma" && (
                <div className="flex flex-col gap-6">
                  <h2 className="text-2xl font-bold">
                    M.Pharma (Master of Pharmacy)
                  </h2>
                  <p className="">
                    The Master of Pharmacy (M.Pharma) program at SEG, affiliated
                    with AKTU, is a two-year postgraduate course focusing on
                    advanced pharmaceutical sciences, drug development,
                    biotechnology, and clinical research. The curriculum
                    includes pharmaceutical formulations, regulatory affairs,
                    and industrial training, preparing students for R&D,
                    clinical trials, and drug quality management roles in top
                    pharmaceutical industries.
                  </p>

                  <div className="flex flex-col gap-2">
                    <div className="bg-white flex flex-row py-2 w-60 ps-4 pe-8 gap-2 items-center rounded-md">
                      <p className="text-slate-500 bg-gray-300 drop-shadow-md shadow-md p-2 rounded-md">
                        <FaRupeeSign />
                      </p>
                      <p className="text-lg font-bold">2,50,000/-</p>
                    </div>

                    <div className="bg-white flex flex-row py-2 ps-4 w-60 gap-2 items-center rounded-md">
                      <p className="text-slate-500 bg-gray-300 drop-shadow-md shadow-md p-2 rounded-md">
                        <TfiTimer />
                      </p>
                      <p className="text-lg font-bold">2 Year</p>
                    </div>

                    <button className="bg-white py-2 px-4 rounded-lg font-extrabold text-lg flex w-fit">
                      View Program Details
                    </button>
                  </div>
                </div>
              )}

              {selectedCourse === "B.Pharma" && (
                <div className="flex flex-col gap-6">
                  <h2 className="text-2xl font-bold">
                    B.Pharma (Bachelor of Pharmacy)
                  </h2>
                  <p className="">
                    The Bachelor of Pharmacy (B.Pharma) program at SEG,
                    affiliated with AKTU, is a four-year undergraduate course
                    that provides comprehensive knowledge of pharmaceutical
                    sciences, drug formulation, clinical research, and
                    healthcare technology. Students gain expertise in
                    pharmacology, medicinal chemistry, quality control, and
                    pharmaceutical management, along with hands-on training in
                    modern laboratories and research facilities. The program
                    equips graduates for careers in pharmaceutical companies,
                    healthcare industries, research labs, and regulatory
                    affairs.
                  </p>

                  <div className="flex flex-col gap-2">
                    <div className="bg-white flex flex-row py-2 w-60 ps-4 pe-8 gap-2 items-center rounded-md">
                      <p className="text-slate-500 bg-gray-300 drop-shadow-md shadow-md p-2 rounded-md">
                        <FaRupeeSign />
                      </p>
                      <p className="text-lg font-bold">4,20,000/-</p>
                    </div>

                    <div className="bg-white flex flex-row py-2 ps-4 w-60 gap-2 items-center rounded-md">
                      <p className="text-slate-500 bg-gray-300 drop-shadow-md shadow-md p-2 rounded-md">
                        <TfiTimer />
                      </p>
                      <p className="text-lg font-bold">4 Year</p>
                    </div>

                    <button className="bg-white py-2 px-4 rounded-lg font-extrabold text-lg flex w-fit">
                      View Program Details
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="w-2/4 h-full flex items-start justify-start bg-green-600 ">
            <motion.div
              key={selectedCourse}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-start"
            >
              {selectedCourse === "BCA" && (
                <div className="w-full h-full">
                  <img
                    src="/BcaCourseImg.jpg"
                    alt="Bca Course Image"
                    className=" object-cover h-full w-full"
                  />
                </div>
              )}

              {selectedCourse === "BTech" && (
                <div className="w-full">
                  <img
                    src="/MtechCourseImg.jpg"
                    alt="BTech Course Image"
                    className=" object-cover"
                  />
                </div>
              )}

              {selectedCourse === "MTech" && (
                <div className="w-full">
                  <img
                    src="/MtechCourseImg.jpg"
                    alt="MTech Course Image"
                    className=" object-cover"
                  />
                </div>
              )}
              {selectedCourse === "MCA" && (
                <div className="w-full">
                  <img
                    src="/BcaCourseImg.jpg"
                    alt="MCA Course Image"
                    className=" object-cover"
                  />
                </div>
              )}
              {selectedCourse === "MBA" && (
                <div className="w-full">
                  <img
                    src="/MbaCourseImg.jpg"
                    alt="MBA Course Image"
                    className=" object-cover"
                  />
                </div>
              )}
              {selectedCourse === "BBA" && (
                <div className="w-full">
                  <img
                    src="/BbaCourseImg.jpg"
                    alt="Bba Course Image"
                    className=" object-cover"
                  />
                </div>
              )}
              {selectedCourse === "Polytechnic" && (
                <div className="w-full">
                  <img
                    src="/MtechCourseImg.jpg"
                    alt="Polytechnic Course Image"
                    className=" object-cover"
                  />
                </div>
              )}
              {selectedCourse === "D.Pharma" && (
                <div className="w-full">
                  <img
                    src="/MbaCourseImg.jpg"
                    alt="D.Pharma Course Image"
                    className=" object-cover"
                  />
                </div>
              )}
              {selectedCourse === "M.Pharma" && (
                <div className="w-full">
                  <img
                    src="/MtechCourseImg.jpg"
                    alt="M.Pharma Course Image"
                    className=" object-cover"
                  />
                </div>
              )}
              {selectedCourse === "B.Pharma" && (
                <div className="w-full">
                  <img
                    src="/BbaCourseImg.jpg"
                    alt="B.Pharma Course Image"
                    className=" object-cover"
                  />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
