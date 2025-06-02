"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCourse } from "../redux/courseSlice";
import { motion } from "framer-motion";
import { FaRupeeSign } from "react-icons/fa";
import { TfiTimer } from "react-icons/tfi";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function CoursesOffered() {
  const selectedCourse = useSelector((state) => state.course.selectedCourse);
  const dispatch = useDispatch();

  return (
    <>
    {/* Larger Screen courses  */}
      <div className="h-auto  overflow-hidden lg:block hidden">
        <div className=" h-auto flex flex-row"  >
          {/* Sidebar: Course Selection */}
          <div
            className=" w-[45%] p-6 h-auto flex flex-col gap-1"
            style={{
              backgroundImage: `url(/CoursesBg.png)`,
              backgroundPosition: "top",
              backgroundSize: "cover",
            }}
          >
            {" "}
            {/* Fixed height for parent container */}
            <h1 className="text-3xl mb-4">
              Our Academic <br />
              <strong className="text-5xl"> Programs</strong>
            </h1>
            {/* Scrollable container */}
            <div className="w-[90%] h-full overflow-y-auto text-base">
              <button
                onClick={() => dispatch(setCourse("BCA"))}
                className={`block w-full text-left py-2 px-4 rounded-lg ${
                  selectedCourse === "BCA"
                    ? "bg-white text-black"
                    : "text-white"
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
            <div
              className="xl:w-2/4 w-full  p-6 flex items-start justify-start min-h-[250px]"
              style={{
                backgroundImage: `url(/CoursesBg.png)`,
                backgroundPosition: "top",
                backgroundSize: "cover",
              }}
            >
              <motion.div
                key={selectedCourse}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-justify"
              >
                {selectedCourse === "BCA" && (
                  <div className="flex flex-col gap-6">
                    <h2 className="text-2xl font-bold">
                      BCA (Bachelor of Computer Applications)
                    </h2>
                    <p className="">
                      The Bachelor of Computer Applications (BCA) at SEG,
                      affiliated with Dr. A.P.J. Abdul Kalam Technical
                      University (AKTU), is a three-year undergraduate program
                      designed to develop expertise in software development,
                      database management, networking, AI, and cybersecurity.
                      The curriculum integrates theoretical concepts with
                      hands-on training, including live projects, industry
                      workshops, coding challenges, and internships. With a
                      focus on practical learning and emerging technologies, the
                      program prepares students for dynamic careers in IT,
                      software engineering, cloud computing, and data analytics,
                      equipping them with the skills needed to thrive in the
                      ever-evolving tech industry.
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

                      <Link href="/programs/bachelor-of-computer-application" className="bg-white py-2 px-4 rounded-lg font-extrabold text-lg flex w-fit">
                        View Program Details
                      </Link>
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
                      affiliated with Dr. A.P.J. Abdul Kalam Technical
                      University (AKTU), is a four-year undergraduate program
                      designed to develop technical proficiency in various
                      engineering disciplines. The curriculum covers computer
                      science, mechanical, civil, electrical, and electronics
                      engineering, integrating core theoretical concepts with
                      practical applications, industry projects, and hands-on
                      training. Students gain expertise in software development,
                      automation, IoT, AI, and emerging technologies, preparing
                      them for careers in engineering, R&D, and industrial
                      innovation.
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

                      <Link href="/programs/bachelor-of-technology" className="bg-white py-2 px-4 rounded-lg font-extrabold text-lg flex w-fit">
                        View Program Details
                      </Link>
                    </div>
                  </div>
                )}

                {selectedCourse === "MTech" && (
                  <div className="flex flex-col gap-6">
                    <h2 className="text-2xl font-bold">
                      M.Tech (Master of Technology)
                    </h2>
                    <p className="">
                      The Master of Technology (M.Tech) program at SEG,
                      affiliated with AKTU, is a two-year postgraduate program
                      designed for in-depth research and specialization in
                      various engineering fields. The program emphasizes
                      advanced technical knowledge, research methodologies, and
                      industrial applications, equipping students with expertise
                      in machine learning, robotics, VLSI design, software
                      engineering, and renewable energy technologies. The
                      curriculum includes research projects, industrial
                      training, and hands-on lab experience, enabling students
                      to excel in academia, R&D, and technology leadership
                      roles.
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

                      <Link href="/programs/master-of-technology" className="bg-white py-2 px-4 rounded-lg font-extrabold text-lg flex w-fit">
                        View Program Details
                      </Link>
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
                      focus on practical exposure and real-world
                      problem-solving, the program prepares students for roles
                      in IT development, software architecture, data science,
                      and cybersecurity consulting.
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

                      <Link href="/programs/master-of-computer-application" className="bg-white py-2 px-4 rounded-lg font-extrabold text-lg flex w-fit">
                        View Program Details
                      </Link>
                    </div>
                  </div>
                )}

                {selectedCourse === "MBA" && (
                  <div className="flex flex-col gap-6">
                    <h2 className="text-2xl font-bold">
                      MBA (Master of Business Administration)
                    </h2>
                    <p className="">
                      The Master of Business Administration (MBA) program at
                      SEG, affiliated with AKTU, is a two-year postgraduate
                      course that develops leadership, financial acumen,
                      strategic management, and entrepreneurial skills. The
                      curriculum emphasizes real-world case studies, industry
                      internships, corporate networking, and global business
                      exposure, preparing students for top managerial positions
                      in multinational companies, banking, consultancy, and
                      startups.
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

                      <Link href="/programs/master-of-business-administration" className="bg-white py-2 px-4 rounded-lg font-extrabold text-lg flex w-fit">
                        View Program Details
                      </Link>
                    </div>
                  </div>
                )}

                {selectedCourse === "BBA" && (
                  <div className="flex flex-col gap-6">
                    <h2 className="text-2xl font-bold">
                      BBA (Bachelor of Business Administration)
                    </h2>
                    <p className="">
                      The Bachelor of Business Administration (BBA) program at
                      SEG is a three-year undergraduate course designed to build
                      expertise in business management, marketing, finance,
                      human resources, and entrepreneurship. The curriculum
                      integrates case studies, industry exposure, live projects,
                      and leadership training, equipping students with strategic
                      decision-making skills and analytical abilities required
                      in the corporate world. Graduates can pursue careers in
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

                      <Link href="/programs/bachelor-of-business-administration" className="bg-white py-2 px-4 rounded-lg font-extrabold text-lg flex w-fit">
                        View Program Details
                      </Link>
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
                      civil, electrical, and computer engineering. With a focus
                      on practical skills, hands-on training, and industry
                      collaboration, this program prepares students for direct
                      entry into technical roles in industries, manufacturing,
                      and infrastructure development.
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

                      <Link href="/programs/polytechnic" className="bg-white py-2 px-4 rounded-lg font-extrabold text-lg flex w-fit">
                        View Program Details
                      </Link>
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
                      practice, hospital drug dispensing, and regulatory
                      affairs. Graduates can pursue careers in retail and
                      hospital pharmacies, pharmaceutical marketing, and drug
                      regulatory agencies or continue their studies with
                      B.Pharma for higher opportunities.
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

                      <Link href="/programs/d-pharma" className="bg-white py-2 px-4 rounded-lg font-extrabold text-lg flex w-fit">
                        View Program Details
                      </Link>
                    </div>
                  </div>
                )}

                {selectedCourse === "M.Pharma" && (
                  <div className="flex flex-col gap-6">
                    <h2 className="text-2xl font-bold">
                      M.Pharma (Master of Pharmacy)
                    </h2>
                    <p className="">
                      The Master of Pharmacy (M.Pharma) program at SEG,
                      affiliated with AKTU, is a two-year postgraduate course
                      focusing on advanced pharmaceutical sciences, drug
                      development, biotechnology, and clinical research. The
                      curriculum includes pharmaceutical formulations,
                      regulatory affairs, and industrial training, preparing
                      students for R&D, clinical trials, and drug quality
                      management roles in top pharmaceutical industries.
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

                      <Link href="/programs/m-pharma" className="bg-white py-2 px-4 rounded-lg font-extrabold text-lg flex w-fit">
                        View Program Details
                      </Link>
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

                      <Link href="/programs/b-pharma" className="bg-white py-2 px-4 rounded-lg font-extrabold text-lg flex w-fit">
                        View Program Details
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Image Section */}
            <div className="xl:w-2/4 xl:flex h-full hidden items-start justify-start bg-green-600 ">
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
                      src="/BTechImg.jpg"
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
                      src="/McaImg.jpg"
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
                      src="/MPharmaImg.jpg"
                      alt="M.Pharma Course Image"
                      className=" object-cover"
                    />
                  </div>
                )}
                {selectedCourse === "B.Pharma" && (
                  <div className="w-full">
                    <img
                      src="/BPharmaImg.jpg"
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

      {/* Smaller screen courses  */}
      <div className="lg:hidden flex p-4">
        <Accordion type="single" collapsible className="w-full">
          {/* BCA */}
          <AccordionItem value="bca">
            <AccordionTrigger>
              Bachelor's of Computer Applications (BCA)
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-slate-500 mb-2 text-justify">
                Bachelor of Computer Applications (BCA) is a 3-year program that
                equips students with essential skills in computer science,
                software development, and networking, preparing them for careers
                in the IT industry.
              </p>
              <Link href="/programs/bachelor-of-computer-application" className="bg-yellow-200 px-4 py-1 rounded-md mt-2">
                View program details
              </Link>
            </AccordionContent>
          </AccordionItem>

          {/* B.Tech */}
          <AccordionItem value="btech">
            <AccordionTrigger>Bachelor of Technology (B.Tech)</AccordionTrigger>
            <AccordionContent>
              <p className="text-slate-500 mb-2 text-justify">
                Bachelor of Technology (B.Tech) is a 4-year program focused on
                technical skills and practical knowledge in engineering fields,
                preparing students for innovation and industry roles.
              </p>
              <Link href="/programs/bachelor-of-technology" className="bg-yellow-200 px-4 py-1 rounded-md mt-2">
                View program details
              </Link>
            </AccordionContent>
          </AccordionItem>

          {/* M.Tech */}
          <AccordionItem value="mtech">
            <AccordionTrigger>Master of Technology (M.Tech)</AccordionTrigger>
            <AccordionContent>
              <p className="text-slate-500 mb-2 text-justify">
                Master of Technology (M.Tech) is a 2-year advanced program
                offering specialization in engineering and technology, aimed at
                research and high-level technical careers.
              </p>
              <Link href="/programs/master-of-technology" className="bg-yellow-200 px-4 py-1 rounded-md mt-2">
                View program details
              </Link>
            </AccordionContent>
          </AccordionItem>

          {/* MCA */}
          <AccordionItem value="mca">
            <AccordionTrigger>
              Master of Computer Applications (MCA)
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-slate-500 mb-2 text-justify">
                Master of Computer Applications (MCA) is a 2-year program
                focused on advanced computer science, software development, and
                application management for IT careers.
              </p>
              <Link href="/programs/master-of-computer-application" className="bg-yellow-200 px-4 py-1 rounded-md mt-2">
                View program details
              </Link>
            </AccordionContent>
          </AccordionItem>

          {/* MBA */}
          <AccordionItem value="mba">
            <AccordionTrigger>
              Master of Business Administration (MBA)
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-slate-500 mb-2 text-justify">
                Master of Business Administration (MBA) is a 2-year program
                designed to develop managerial and leadership skills, preparing
                students for corporate roles and entrepreneurship.
              </p>
              <Link href="/programs/master-of-business-administration" className="bg-yellow-200 px-4 py-1 rounded-md mt-2">
                View program details
              </Link>
            </AccordionContent>
          </AccordionItem>

          {/* BBA */}
          <AccordionItem value="bba">
            <AccordionTrigger>
              Bachelor of Business Administration (BBA)
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-slate-500 mb-2 text-justify">
                Bachelor of Business Administration (BBA) is a 3-year program
                offering foundational knowledge in business management, finance,
                and entrepreneurship.
              </p>
              <Link href="/programs/bachelor-of-business-administration" className="bg-yellow-200 px-4 py-1 rounded-md mt-2">
                View program details
              </Link>
            </AccordionContent>
          </AccordionItem>

          {/* M. Pharma */}
          <AccordionItem value="mpharma">
            <AccordionTrigger>Master of Pharmacy (M. Pharma)</AccordionTrigger>
            <AccordionContent>
              <p className="text-slate-500 mb-2 text-justify">
                Master of Pharmacy (M. Pharma) is a 2-year program that focuses
                on advanced pharmaceutical research, drug development, and
                clinical practices.
              </p>
              <Link href="/programs/m-pharma" className="bg-yellow-200 px-4 py-1 rounded-md mt-2">
                View program details
              </Link>
            </AccordionContent>
          </AccordionItem>

          {/* B. Pharma */}
          <AccordionItem value="bpharma">
            <AccordionTrigger>
              Bachelor of Pharmacy (B. Pharma)
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-slate-500 mb-2 text-justify">
                Bachelor of Pharmacy (B. Pharma) is a 4-year program covering
                pharmaceutical science, drug formulation, and healthcare
                practices.
              </p>
              <Link href="/programs/b-pharma" className="bg-yellow-200 px-4 py-1 rounded-md mt-2">
                View program details
              </Link>
            </AccordionContent>
          </AccordionItem>

          {/* D. Pharma */}
          <AccordionItem value="dpharma">
            <AccordionTrigger>Diploma in Pharmacy (D. Pharma)</AccordionTrigger>
            <AccordionContent>
              <p className="text-slate-500 mb-2 text-justify">
                Diploma in Pharmacy (D. Pharma) is a 2-year program focusing on
                basic pharmaceutical knowledge, practical skills, and pharmacy
                operations.
              </p>
              <Link href="/programs/d-pharma" className="bg-yellow-200 px-4 py-1 rounded-md mt-2">
                View program details
              </Link>
            </AccordionContent>
          </AccordionItem>

          {/* Polytechnic */}
          <AccordionItem value="polytechnic">
            <AccordionTrigger>Polytechnic Diploma</AccordionTrigger>
            <AccordionContent>
              <p className="text-slate-500 mb-2 text-justify">
                Polytechnic is a 3-year diploma course offering technical
                education and practical training in various engineering and
                applied sciences.
              </p>
              <Link href="/programs/polytechnic" className="bg-yellow-200 px-4 py-1 rounded-md mt-2">
                View program details
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
