"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(/HistoryBg.svg)`,
        backgroundPosition: "left",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
      >
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 px-6 md:px-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Privacy Policy
          </h1>
        </div>

        <div className="p-6 md:p-8">
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              At Saroj Educational Group, we are committed to protecting your
              privacy and ensuring a safe online experience. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you interact with our website, courses, and
              services.
            </p>

            {/* NEW CLAUSE FOR DND/NDNC COMPLIANCE */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <p className="text-yellow-800 text-sm mb-3">
                When you voluntarily send us electronic mail or fill up a form
                on our site, we will keep a record of this information so that
                we can respond to you. We only collect information from you when
                you register on our site or fill out a form. Also, when filling
                out a form on our site, you may be asked to enter your name,
                e-mail address, or phone number. You may, however, visit our
                site anonymously.
              </p>
              <p className="text-yellow-800 text-sm">
                By filling out our enquiry or registration forms, you authorise{" "}
                <strong>Saroj Educational Group</strong> & its representatives
                to contact you with updates and notifications via Email, SMS,
                WhatsApp, or Call. This will override DND/NDNC. We maintain
                records of your consent for compliance purposes, and we may
                contact you about our products and offers even if your number
                has DND activated.
              </p>
            </div>

            <div className="space-y-10">
              {/* Section 1 */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  1. Information We Collect
                </h2>
                <p className="text-gray-700 mb-4">
                  We collect information to provide better services to our
                  users:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-2">
                      Personal Information
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Data you provide when registering, such as name, email,
                      phone number, and billing details.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-2">
                      Non-Personal Information
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Technical data like IP address, browser type, device
                      information, and usage statistics.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  2. How We Use Your Information
                </h2>
                <div className="space-y-4">
                  {[
                    "To process enrollments and provide access to educational services",
                    "To communicate about your account, services, and updates",
                    "To improve our offerings based on user feedback and analytics",
                    "To comply with legal obligations and enforce our policies",
                  ].map((text, index) => (
                    <div className="flex items-start" key={index}>
                      <div className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700">{text}</p>
                    </div>
                  ))}

                  {/* NEW FOR DND CLAUSE */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      To contact you regarding our programs and services,
                      regardless of your DND/NDNC registration, based on your
                      provided consent.
                    </p>
                  </div>
                </div>
              </section>

              {/* Keep the rest of your sections unchanged */}
              {/* ... */}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
