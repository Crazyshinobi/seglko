"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaQrcode,
  FaLink,
  FaSearch,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";
import NavigationPages from "@/app/utils/NavigationPages";

export default function FeesPayment() {
  const institutes = [
    {
      name: "SAROJ INSTITUTE OF TECHNOLOGY & MANAGEMENT",
      location: "LUCKNOW",
      code: "123",
      paymentLink: "https://smartpay.easebuzz.in/75636/Application",
      qrCode: "/SITMQR.jpg",
      logo: "/segBanner.jpeg",
      themeColor: "bg-blue-600",
    },
    {
      name: "SHIVDAN SINGH INSTITUTE OF TECHNOLOGY & MANAGEMENT",
      location: "ALIGARH",
      code: "007",
      paymentLink: "https://smartpay.easebuzz.in/75653/Application",
      qrCode: "/SSITMQR.png",
      logo: "/SSITM.jpg",
      themeColor: "bg-green-600",
    },
    // {
    //   name: "SAROJ INSTITUTE OF MANAGEMENT & TECHNOLOGY",
    //   location: "LUCKNOW",
    //   code: "529",
    //   paymentLink: "https://smartpay.easebuzz.in/75671/Application",
    //   qrCode: "/SIMTQR.png",
    //   logo: "/SIMT.jpg",
    //   themeColor: "bg-purple-600",
    // },
    // {
    //   name: "LUCKNOW INSTITUTE OF PHARMACY",
    //   location: "LUCKNOW",
    //   code: "572",
    //   paymentLink: "https://smartpay.easebuzz.in/75672/Application#",
    //   qrCode: "/LIPQR.jpg",
    //   logo: "/LIP.jpeg",
    //   themeColor: "bg-red-600",
    // },
  ];

  const [selectedQrCode, setSelectedQrCode] = useState(null);

  const openQrModal = (qrCode) => {
    setSelectedQrCode(qrCode);
  };

  const closeQrModal = () => {
    setSelectedQrCode(null);
  };

  return (
   <>
    <div className=" w-full h-[26vh] md:h-[40vh] lg:h-80 ">
    <img
      src="/FeesBanner.PNG"
      alt="Fees Banner Image"
      className="w-full h-full object-fit"
    />
  </div>

  <div>
    <NavigationPages />
  </div>
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Colleges Fee Payment Portal
          </h1>
          <p className="text-lg text-gray-600">
            Secure online payment for all affiliated institutions
          </p>
        </div>

     

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {institutes.map((institute, index) => (
            <motion.div
              key={institute.code}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className={`${institute.themeColor} h-2 w-full`}></div>
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-16 w-16 rounded-full bg-white border-4 border-white shadow-md overflow-hidden">
                    <img
                      src={institute.logo}
                      alt={`${institute.name} logo`}
                      className="h-full w-full object-contain p-1"
                      onError={(e) => {
                        e.currentTarget.src = "/default-college-logo.png";
                        e.currentTarget.alt = "Default college logo";
                      }}
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {institute.name}
                    </h2>
                    <div className="flex items-center mt-1 text-gray-600">
                      <span>{institute.location}</span>
                      <span className="mx-2">•</span>
                      <span className="font-medium">
                        Code: {institute.code}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col items-center">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">
                      Payment QR Code
                    </h3>
                    <div 
                      className="bg-white p-2 border border-gray-200 rounded-lg cursor-pointer"
                      onClick={() => openQrModal(institute.qrCode)}
                    >
                      <img
                        src={institute.qrCode}
                        alt="Payment QR Code"
                        className="h-32 w-32 object-contain"
                        onError={(e) => {
                          e.currentTarget.src = "/default-qr-code.png";
                          e.currentTarget.alt = "Default QR code";
                        }}
                      />
                    </div>
                    <a
                      href={institute.qrCode}
                      download
                      className="mt-2 text-xs text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      Download QR Code{" "}
                      <FaExternalLinkAlt className="ml-1" size={10} />
                    </a>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-2">
                        Payment Options
                      </h3>
                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        href={institute.paymentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-3"
                      >
                        <FaLink className="mr-2" />
                        Online Payment Portal
                      </motion.a>
                    </div>
                    <div className="text-xs text-gray-500 mt-4">
                      <p>For payment issues, contact:</p>
                      <p className="font-medium">
                        {/* accounts@{institute.name.split(" ")[0].toLowerCase()}
                        .edu.in */}
                        admission.cell@seglko.org
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* QR Code Modal */}
        {selectedQrCode && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[5001] p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg p-6 max-w-md w-full relative"
            >
              <button
                onClick={closeQrModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={24} />
              </button>
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-medium mb-4">Payment QR Code</h3>
                <div className="bg-white p-4 border border-gray-200 rounded-lg">
                  <img
                    src={selectedQrCode}
                    alt="Payment QR Code"
                    className="w-full max-w-xs object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "/default-qr-code.png";
                      e.currentTarget.alt = "Default QR code";
                    }}
                  />
                </div>
                <a
                  href={selectedQrCode}
                  download
                  className="mt-4 text-sm text-blue-600 hover:text-blue-800 flex items-center"
                >
                  Download QR Code{" "}
                  <FaExternalLinkAlt className="ml-1" size={12} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
    </>
  );
}