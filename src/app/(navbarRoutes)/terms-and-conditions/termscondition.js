"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Terms and Conditions
              </h1>
              {/* <p className="mt-2 text-blue-100">
                Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p> */}
            </div>
            <div className="mt-4 md:mt-0">
              <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                Latest Updated
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="prose prose-blue max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
              <p className="text-blue-800 font-medium">Important Notice</p>
              <p className="text-blue-700 mt-1">
                By using our services, you agree to these Terms and Conditions. 
                Please read them carefully before accessing our educational resources.
              </p>
            </div>

            <div className="space-y-10">
              {/* Section 1 */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  1. Acceptance of Terms
                </h2>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Your access to and use of Saroj Educational Group's services constitutes 
                    acceptance of these Terms. If you disagree with any part, you must 
                    discontinue use immediately.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  2. Services Overview
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Online courses and classes",
                    "Educational resources and materials",
                    "Workshops and webinars",
                    "Personalized academic support"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start bg-gray-50 p-3 rounded-lg">
                      <svg className="flex-shrink-0 h-5 w-5 text-blue-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 mt-4">
                  We reserve the right to modify or discontinue any service without notice.
                </p>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  3. User Responsibilities
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requirement</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[
                        ["Account Information", "Provide accurate registration details"],
                        ["Security", "Maintain account confidentiality"],
                        ["Legal Compliance", "Follow all applicable laws"],
                        ["Proper Use", "No disruption of services"],
                        ["Intellectual Property", "Respect copyrights"]
                      ].map(([req, detail], index) => (
                        <tr key={index}>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800">{req}</td>
                          <td className="px-4 py-3 text-sm text-gray-700">{detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  4. Payment and Refunds
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                      <svg className="flex-shrink-0 h-5 w-5 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Payment Policy
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 mt-2 text-sm">
                      <li>Fees must be paid in full at registration</li>
                      <li>We accept major credit cards and online payments</li>
                      <li>Receipts are issued for all transactions</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                      <svg className="flex-shrink-0 h-5 w-5 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      Refund Policy
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 mt-2 text-sm">
                      <li>7-day refund window from enrollment date</li>
                      <li>No refunds after accessing course materials</li>
                      <li>Group programs may have special conditions</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  5. Intellectual Property
                </h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <p className="text-yellow-800 font-medium">Copyright Notice</p>
                  <p className="text-yellow-700 mt-1 text-sm">
                    All content is protected under copyright law. Unauthorized use, 
                    reproduction, or distribution is strictly prohibited.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Course materials are licensed for individual use only. Commercial 
                    use requires written permission from Saroj Educational Group.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  6. Privacy Commitment
                </h2>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    We protect your personal information according to our Privacy Policy. 
                    By using our services, you consent to our data practices as described therein.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  7. Liability Disclaimer
                </h2>
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <p className="text-red-800 font-medium">Important Limitation</p>
                  <p className="text-red-700 mt-1 text-sm">
                    Our liability is limited to the amount you paid for the service. 
                    We are not responsible for indirect or consequential damages.
                  </p>
                </div>
                <p className="text-gray-700 mt-4">
                  Educational outcomes may vary based on individual effort and circumstances. 
                  We make no guarantees regarding specific academic results.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  8. Terms Modifications
                </h2>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    We may update these Terms periodically. Continued use after changes 
                    constitutes acceptance of the modified Terms. Check this page regularly 
                    for updates.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  9. Governing Law
                </h2>
                <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                  <svg className="flex-shrink-0 h-5 w-5 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-gray-700">
                    These Terms are governed by the laws of India. Any disputes shall be 
                    resolved in the courts of Delhi.
                  </span>
                </div>
              </section>

              {/* Contact Section */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  Contact Us
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Saroj Educational Group
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Contact Methods</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="flex-shrink-0 h-5 w-5 text-gray-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="text-gray-700">admission.cell@seglko.org</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="flex-shrink-0 h-5 w-5 text-gray-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="text-gray-700">09555699988, 09810054878</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Physical Address</h4>
                      <div className="flex items-start">
                        <svg className="flex-shrink-0 h-5 w-5 text-gray-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-gray-700">
                          L-5, First Floor, Lajpat Nagar - II,<br />
                          Delhi, India, 110024
                        </span>
                      </div>
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