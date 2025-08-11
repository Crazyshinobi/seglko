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
              <p className="text-yellow-800 text-sm">
                By filling out our enquiry or registration forms, you authorise{" "}
                <strong>Saroj Educational Group</strong> and its representatives
                to contact you with updates and notifications via Email, SMS,
                WhatsApp, or Call. This consent overrides any registration you
                may have with the DND/NDNC registry. We maintain records of your
                consent for compliance purposes.
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

              {/* Section 3 */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  3. Data Security Measures
                </h2>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                  <p className="text-blue-800 font-medium">
                    Our Security Commitment
                  </p>
                  <p className="text-blue-700 mt-1 text-sm">
                    We implement industry-standard measures including
                    encryption, secure servers, and regular security audits to
                    protect your data.
                  </p>
                </div>
                <p className="text-gray-700">
                  While we employ robust security measures, no internet
                  transmission is 100% secure. We cannot guarantee absolute
                  security but we continuously work to protect your information.
                </p>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  4. Information Sharing
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Situation
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800">
                          Service Providers
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          Trusted partners who assist in delivering our services
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800">
                          Legal Requirements
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          When required by law or to protect rights and safety
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800">
                          With Consent
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          Only with your explicit permission for specific
                          purposes
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  5. Cookies and Tracking
                </h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800 mb-2">
                      What We Use
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                      <li>Essential cookies for website functionality</li>
                      <li>Analytics cookies to understand usage patterns</li>
                      <li>Preference cookies to remember your settings</li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800 mb-2">
                      Your Control
                    </h3>
                    <p className="text-gray-700 text-sm">
                      You can manage cookies through your browser settings.
                      Disabling cookies may affect certain features.
                    </p>
                    <button className="mt-2 inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                      Learn About Cookie Settings
                    </button>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  6. Your Rights
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { title: "Access", desc: "Request a copy of your data" },
                    {
                      title: "Correction",
                      desc: "Update inaccurate information",
                    },
                    {
                      title: "Deletion",
                      desc: "Request data erasure where applicable",
                    },
                    {
                      title: "Opt-out",
                      desc: "Unsubscribe from marketing communications",
                    },
                  ].map((right, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                    >
                      <h3 className="font-medium text-blue-600">
                        {right.title}
                      </h3>
                      <p className="text-gray-700 text-sm mt-1">{right.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 mt-4 text-sm">
                  To exercise these rights, please contact us using the
                  information below.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  7. Policy Updates
                </h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-yellow-800 font-medium">
                    Notice of Changes
                  </p>
                  <p className="text-yellow-700 mt-1 text-sm">
                    We may update this policy periodically. We
                    encourage you to review this policy regularly.
                  </p>
                </div>
              </section>

              {/* Contact Section */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  Contact Us
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">
                    Saroj Educational Group
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-gray-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-gray-700">
                        admin@seglko.org
                      </span>
                    </div>
                    <div className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-gray-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="text-gray-700">
                        09555699988, 09810054878
                      </span>
                    </div>
                    <div className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-gray-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-gray-700">
                        L-5, First Floor, Lajpat Nagar - II, Delhi, India,
                        110024
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
