"use client"; // Add this directive at the top for client-side interactivity

import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Images Import
import segLogo from "../../../public/seglko-logo.jpg";
import SegBanner from "../../../public/segBanner.jpeg";


// icons import
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { IoIosStarOutline } from "react-icons/io";
import { BsVectorPen } from "react-icons/bs";
import { GiCheckeredFlag } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";
import { MdSettingsSuggest } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsCapsulePill } from "react-icons/bs";
import { LiaCapsulesSolid } from "react-icons/lia";
import { FaComputer } from "react-icons/fa6";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { BsPersonGear } from "react-icons/bs";
import { CiMedicalCase } from "react-icons/ci";
import { GiDiploma } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FcProcess } from "react-icons/fc";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { GiBookshelf } from "react-icons/gi";
import { FcDocument } from "react-icons/fc";
import { SiRoamresearch } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { FaAward } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";

export const Header = () => {
  // State object to manage the visibility of multiple dropdowns
  const [dropdownStates, setDropdownStates] = useState({
    about: false,
    programs: false,
    admissions: false,
    research: false,
    institutions : false,
    studentZone : false,
  });

  // Toggle function for opening/closing dropdowns
  const toggleDropdown = (dropdown, open) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdown]: open,
    }));
  };

  // Animation variants for the dropdown
  const dropdownVariants = {
    hidden: {
      scaleY: 0, // Start fully closed (like a book closed)
      transformOrigin: "left top", // Transform from the top-left corner
      opacity: 0, // Start invisible
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      scaleY: 1, // Unfold like a book
      opacity: 1, // Fade in
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      scaleY: 0, // Fold back like a book
      opacity: 0, // Fade out
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  // Updated itemVariants for simultaneous animation
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -10, // Start invisible
    },
    visible: {
      opacity: 1,
      y: 0, // Fade in simultaneously
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div className="flex overflow-hidden gap-3 items-center">
        <div className="nav">
          <Link href="/">
            <Image src={segLogo} height={80} width={80} alt="SEG Logo" />
          </Link>
        </div>

        <nav>
          <ul className="flex">
            {/* Home */}
            <li className="group p-3 hover:bg-green-50 rounded-md">
              <Link href="/" className="flex items-center">
                <p className="text-sm ">Home</p>
              </Link>
            </li>

            {/* About Dropdown */}
            <li
              className=" p-3 hover:bg-green-50 rounded-md"
              onMouseEnter={() => toggleDropdown("about", true)}
              onMouseLeave={() => toggleDropdown("about", false)}
            >
              <Link href="/about" className="flex items-center">
                <p className="text-sm ">About SEG </p>
                <MdKeyboardArrowDown />
              </Link>

              <AnimatePresence>
                {dropdownStates.about && (
                  <motion.div
                    className="absolute w-full mt-3 left-0 pb-3 bg-white shadow-md drop-shadow-sm "
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <ul className="ps-14 pt-4 flex ">
                      <div className="left flex flex-col gap-3 lg:w-2/5">
                        {/* History of Seg */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-3 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <HiOutlineBuildingLibrary className="text-5xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              History of SEG
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "Established with a mission to empower students,
                              fostering their growth through knowledge,
                              leadership, and innovation."
                            </p>
                          </div>
                        </motion.li>
                        {/* Mission and Vision */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-3 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <GiCheckeredFlag className="text-5xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              {" "}
                              Mission and Vision
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "Driven by a commitment to excellence, SEG aims to
                              shape the future by empowering students with
                              knowledge, leadership, and innovation."
                            </p>
                          </div>
                        </motion.li>
                        {/* Why Join Seg */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-3 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <IoIosStarOutline className="text-5xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Why Join SEG
                            </h6>
                            <p className="text-gray-400 text-sm">
                              Join SEG to unlock opportunities for personal
                              growth, academic excellence, and a supportive
                              community.
                            </p>
                          </div>
                        </motion.li>

                        {/* Chairman Message */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-3 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <BsVectorPen className="text-5xl " />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Chairman's Message
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "Under the guidance of our Chairman, SEG strives
                              to empower students with knowledge, leadership,
                              and a vision for a brighter future."
                            </p>
                          </div>
                        </motion.li>
                        {/* Student Success */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-3 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <PiStudentFill className="text-5xl " />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Student Success
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "SEG is committed to fostering student success by
                              providing a dynamic learning environment,
                              empowering students to reach their full
                              potential."
                            </p>
                          </div>
                        </motion.li>
                      </div>

                      <div className="right w-2/5">
                        {/* Chairman Message */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-3 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <BsVectorPen className="text-5xl " />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Chairman's Message
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "Under the guidance of our Chairman, SEG strives
                              to empower students with knowledge, leadership,
                              and a vision for a brighter future."
                            </p>
                          </div>
                        </motion.li>
                      </div>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Programs Dropdown */}
            <li
              className="p-3 hover:bg-green-50 rounded-md"
              onMouseEnter={() => toggleDropdown("programs", true)}
              onMouseLeave={() => toggleDropdown("programs", false)}
            >
              <Link href="#" className="flex items-center">
                <p className="text-sm ">Programs </p>
                <MdKeyboardArrowDown />{" "}
              </Link>

              <AnimatePresence>
                {dropdownStates.programs && (
                  <motion.div
                    className="absolute w-full mt-3 left-0 pb-3 bg-white shadow-lg drop-shadow-xl"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <ul className="ps-14 pt-4 flex">
                      <div className="left flex flex-col gap-3 lg:w-2/5">
                        {/* M.Tech */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <BsPersonGear className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Master of Technology
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "Our M.Tech program offers advanced skills in
                              engineering, with opportunities for research and
                              innovation."
                            </p>
                          </div>
                        </motion.li>

                        {/* MBA */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <FaPeopleGroup className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Master of Business Administration
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "We offer an MBA program designed to develop
                              leadership and strategic management skills for
                              global business."
                            </p>
                          </div>
                        </motion.li>

                        {/* MCA */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <FaComputer className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Masters in Computer Applications
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "Our MCA program equips students with expertise in
                              software development, IT, and systems management."
                            </p>
                          </div>
                        </motion.li>

                        {/* M.Pharm */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <LiaCapsulesSolid className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              M.Pharm
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "Our M.Pharm program offers in-depth knowledge in
                              pharmaceutical sciences, preparing students for
                              advanced careers."
                            </p>
                          </div>
                        </motion.li>

                        {/* B.Tech */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <MdSettingsSuggest className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Bachelor of Technology
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "Our B.Tech program provides a solid foundation in
                              engineering, preparing you for a successful career
                              in technology."
                            </p>
                          </div>
                        </motion.li>
                      </div>

                      <div className="right flex flex-col gap-3 w-2/5">
                        {/* BBA */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <MdOutlineEmojiPeople className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Bachelor of Business Administration
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "Our BBA program is designed to equip students
                              with the skills and knowledge needed for
                              leadership in business."
                            </p>
                          </div>
                        </motion.li>

                        {/* BCA */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <RiComputerLine className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Bachelor in Computer Application
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "Our BCA program is focused on programming, system
                              management, and application development in the IT
                              industry."
                            </p>
                          </div>
                        </motion.li>

                        {/* B.Pharm */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <BsCapsulePill className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              B.Pharm
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "Our B.Pharm program offers a comprehensive
                              education in pharmaceutical sciences, preparing
                              students for diverse roles."
                            </p>
                          </div>
                        </motion.li>

                        {/* Diploma in Pharmacy */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <CiMedicalCase className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Diploma in Pharmacy
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "Our Diploma in Pharmacy program prepares students
                              with practical skills to excel in the healthcare
                              and pharmacy sectors."
                            </p>
                          </div>
                        </motion.li>

                        {/* Diploma Programmes */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <GiDiploma className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Diploma Programmes
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "Our diploma programs offer practical training and
                              industry-relevant skills, ensuring career
                              readiness."
                            </p>
                          </div>
                        </motion.li>
                      </div>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Admissions Dropdown */}
            <li
              className="p-3 hover:bg-green-50 rounded-md"
              onMouseEnter={() => toggleDropdown("admissions", true)}
              onMouseLeave={() => toggleDropdown("admissions", false)}
            >
              <Link href="#" className="flex items-center">
                <p className="text-sm ">Admission </p>
                <MdKeyboardArrowDown />{" "}
              </Link>

              <AnimatePresence>
                {dropdownStates.admissions && (
                  <motion.div
                    className="absolute w-full mt-3 left-0 pb-3 bg-white shadow-lg drop-shadow-xl"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <ul className="ps-14 pt-4 flex">
                      <div className="left flex flex-col gap-3 lg:w-2/5">
                        {/* M.Tech */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <FcProcess className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Admission Process
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "Follow our seamless process to secure your seat
                              and begin your academic journey with us."
                            </p>
                          </div>
                        </motion.li>

                        {/* MBA */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <FaPersonCircleCheck className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Eligibility Criteria
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "Our eligibility criteria are designed to help you
                              understand the requirements for a successful
                              application."
                            </p>
                          </div>
                        </motion.li>

                        {/* MCA */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <GiBookshelf className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Our Courses
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "Explore a diverse range of programs designed to
                              shape your future and foster academic excellence."
                            </p>
                          </div>
                        </motion.li>

                        {/* M.Pharm */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <FcDocument className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Fee Structure
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "Get all the information you need about our fee
                              structure to make an informed decision about your
                              studies."
                            </p>
                          </div>
                        </motion.li>
                      </div>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Research and Development Dropdown */}
            <li
              className="p-3 hover:bg-green-50 rounded-md"
              onMouseEnter={() => toggleDropdown("research", true)}
              onMouseLeave={() => toggleDropdown("research", false)}
            >
              <Link href="#" className="flex items-center">
                <p className="text-sm ">R & D</p>
                <MdKeyboardArrowDown />{" "}
              </Link>

              <AnimatePresence>
                {dropdownStates.research && (
                  <motion.div
                    className="absolute w-full mt-3 pb-3 left-0 bg-white shadow-lg drop-shadow-xl"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <ul className="ps-14 pt-4 flex">
                      <div className="left flex flex-col gap-3 lg:w-2/5">
                        {/* M.Tech */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <SiRoamresearch className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              R & D Projects
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "Explore our innovative R&D projects, driving
                              cutting-edge research and technological
                              advancements."
                            </p>
                          </div>
                        </motion.li>

                        {/* MBA */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <GrTechnology className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Technologies Developed
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "We take pride in the technologies we've
                              developed, revolutionizing industries and
                              enhancing everyday life."
                            </p>
                          </div>
                        </motion.li>

                        {/* MCA */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <FaAward className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Award Winning Projects
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "Discover the groundbreaking work behind our
                              award-winning projects, setting new standards in
                              the field."
                            </p>
                          </div>
                        </motion.li>

                        {/* M.Pharm */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <IoBookOutline className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Research & Publications
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "Explore our extensive research and publications,
                              contributing to the advancement of knowledge and
                              industry practices."
                            </p>
                          </div>
                        </motion.li>
                      </div>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Our Institutions Dropdown */}
            <li
              className="p-3 hover:bg-green-50 rounded-md"
              onMouseEnter={() => toggleDropdown("institutions", true)}
              onMouseLeave={() => toggleDropdown("institutions", false)}
            >
              <Link href="#" className="flex items-center">
                <p className="text-sm ">Our Institutions</p>
                <MdKeyboardArrowDown />{" "}
              </Link>

              <AnimatePresence>
                {dropdownStates.institutions && (
                  <motion.div
                    className="absolute w-full mt-3 pb-3 left-0 bg-white shadow-lg drop-shadow-xl h-auto"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <ul className="ps-14 pt-4 flex">
                      <div className="left flex flex-col gap-4 lg:w-1/3  py-2">
                      {/* Shivdan Singh Institute of Technology and Management */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-3 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <HiOutlineBuildingLibrary className="text-5xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Shivdan Singh Institute of Technology and Management
                            </h6>
                            <p className="text-gray-400 text-sm">
                            Approved by AICTE and affiliated to AKTU,Lucknow,College Code : 007
                            </p>
                          </div>
                        </motion.li>

                        {/* Saroj Institute of Technology and Management */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-3 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                          <HiOutlineBuildingLibrary className="text-5xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                            Saroj Institute of Technology and Management
                            </h6>
                            <p className="text-gray-400 text-sm">
                            Approved by AICTE and affiliated to AKTU,Lucknow,College Code : 123
                            </p>
                          </div>
                        </motion.li>

                        {/* Saroj College of Law */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-3 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                          <HiOutlineBuildingLibrary className="text-5xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                             Saroj College of Law
                            </h6>
                            <p className="text-gray-400 text-sm">
                            Approved by Bar Council of India (BCI) and affiliated to AKTU,Lucknow,College Code : 
                            </p>
                            
                          </div>
                        </motion.li>

                     
                      </div>
                      <div className="middle flex flex-col gap-4 py-2 lg:w-1/3">
                         {/*  Saroj College of Pharmacy */}
                         <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <HiOutlineBuildingLibrary className="text-5xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Saroj College of Pharmacy
                            </h6>
                            <p className="text-gray-400 text-sm">
                            Approved by Pharmacy Council of India and affiliated to AKTU,Lucknow,College Code : 2031
                            </p>
                          </div>
                        </motion.li>
                         {/* Saroj College of Engineering and Polytechnic */}
                         <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <HiOutlineBuildingLibrary className="text-5xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                          Saroj College of Engineering and Polytechnic
                            </h6>
                            <p className="text-gray-400 text-sm">
                            Approved by AICTE and affiliated to AKTU,Lucknow,College Code : 
                            </p>
                          </div>
                        </motion.li>
                      </div>
                      <div className="right flex flex-col gap-3 lg:w-1/3 ">
                       <Image src={SegBanner} alt="our institutions banner" height={600} width={600} className="h-full w-auto object-cover" />
                      </div>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Student Zone Dropdown */}
            <li
              className="p-3 hover:bg-green-50 rounded-md"
              onMouseEnter={() => toggleDropdown("studentZone", true)}
              onMouseLeave={() => toggleDropdown("studentZone", false)}
            >
              <Link href="#" className="flex items-center">
                <p className="text-sm ">Student Zone</p>
                <MdKeyboardArrowDown />{" "}
              </Link>

              <AnimatePresence>
                {dropdownStates.studentZone && (
                  <motion.div
                    className="absolute w-full mt-3 pb-3 left-0 bg-white shadow-lg drop-shadow-xl h-auto"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <ul className="ps-14 pt-4 flex">
                      <div className="left flex flex-col gap-4 lg:w-1/3  py-2">
                      {/* Shivdan Singh Institute of Technology and Management */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-3 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <HiOutlineBuildingLibrary className="text-5xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Student Login 
                            </h6>
                            <p className="text-gray-400 text-sm">
                            Approved by AICTE and affiliated to AKTU,Lucknow,College Code : 007
                            </p>
                          </div>
                        </motion.li>

                        {/* Saroj Institute of Technology and Management */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-3 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                          <HiOutlineBuildingLibrary className="text-5xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                            Our Gold Medalist
                            </h6>
                            <p className="text-gray-400 text-sm">
                            Approved by AICTE and affiliated to AKTU,Lucknow,College Code : 123
                            </p>
                          </div>
                        </motion.li>

                        {/* Saroj College of Law */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-3 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                          <HiOutlineBuildingLibrary className="text-5xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                             Saroj College of Law
                            </h6>
                            <p className="text-gray-400 text-sm">
                            Approved by Bar Council of India (BCI) and affiliated to AKTU,Lucknow,College Code : 
                            </p>
                            
                          </div>
                        </motion.li>

                     
                      </div>
                      <div className="middle flex flex-col gap-4 py-2 lg:w-1/3">
                         {/*  Saroj College of Pharmacy */}
                         <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <HiOutlineBuildingLibrary className="text-5xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Saroj College of Pharmacy
                            </h6>
                            <p className="text-gray-400 text-sm">
                            Approved by Pharmacy Council of India and affiliated to AKTU,Lucknow,College Code : 2031
                            </p>
                          </div>
                        </motion.li>
                         {/* Saroj College of Engineering and Polytechnic */}
                         <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <HiOutlineBuildingLibrary className="text-5xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                          <h6 className="font-bold group-hover:text-blue-300 text-sm">
                          Saroj College of Engineering and Polytechnic
                            </h6>
                            <p className="text-gray-400 text-sm">
                            Approved by AICTE and affiliated to AKTU,Lucknow,College Code : 
                            </p>
                          </div>
                        </motion.li>
                      </div>
                      <div className="right flex flex-col gap-3 lg:w-1/3 ">
                       <Image src={SegBanner} alt="our institutions banner" height={600} width={600} className="h-full w-auto object-cover" />
                      </div>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
