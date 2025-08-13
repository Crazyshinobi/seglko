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
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-8 px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Privacy Policy
              </h1>
             
            </div>
           
          </div>
        </div>

        <div className="p-6 md:p-10">
          <div className="prose prose-lg max-w-none">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Saroj Educational Group, we are committed to protecting your privacy and ensuring
                a safe online experience. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you interact with our website, courses, and services.
              </p>
              
              {/* Important Notice Box */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Important Notice</h3>
                <p className="text-blue-700 mb-3">
                  By using our services, you consent to our collection, use, and sharing of your personal
                  information as described in this Privacy Policy. Please read this policy carefully.
                </p>
                <p className="text-blue-700">
                  This policy applies to all visitors, users, and others who access our services
                  ("Users"). By accessing or using our services, you agree to this Privacy Policy.
                </p>
              </div>
            </div>

            {/* DND/NDNC Compliance Section */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-10 rounded-r-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">DND/NDNC Compliance Notice</h3>
              <p className="text-yellow-800 mb-3">
                When you voluntarily send us electronic mail or fill up a form on our site, we will
                keep a record of this information so that we can respond to you. We only collect
                information from you when you register on our site or fill out a form.
              </p>
              <p className="text-yellow-800 mb-3">
                By filling out our enquiry or registration forms, you authorize <strong>Saroj Educational Group</strong> & its
                representatives to contact you with updates and notifications via Email, SMS,
                WhatsApp, or Call. This will override DND/NDNC.
              </p>
              <p className="text-yellow-800">
                We maintain records of your consent for compliance purposes, and we may contact you
                about our products and offers even if your number has DND activated.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Table of Contents</h3>
              <ol className="list-decimal pl-5 space-y-2">
                {[
                  "Information We Collect",
                  "How We Use Your Information",
                  "Information Sharing and Disclosure",
                  "Data Security",
                  "Your Privacy Rights",
                  "Cookies and Tracking Technologies",
                  "Third-Party Services",
                  "Children's Privacy",
                  "Changes to This Policy",
                  "Contact Us"
                ].map((item, index) => (
                  <li key={index} className="text-blue-600 hover:text-blue-800">
                    <a href={`#section-${index + 1}`} className="hover:underline">{item}</a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Main Content Sections */}
            <div className="space-y-16">
              {/* Section 1 - Information We Collect */}
              <section id="section-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                  1. Information We Collect
                </h2>
                <p className="text-gray-700 mb-6">
                  We collect several types of information from and about users of our services:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-lg text-gray-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Personal Information
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {[
                        "Full name and contact details (email, phone number, address)",
                        "Demographic information (age, gender, educational background)",
                        "Payment and billing information",
                        "Government identification numbers when required",
                        "Academic records and qualifications"
                      ].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-lg text-gray-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Non-Personal Information
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {[
                        "Browser type and version",
                        "IP address and approximate location",
                        "Device information (type, operating system)",
                        "Usage data (pages visited, time spent)",
                        "Cookies and tracking data"
                      ].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-3">How We Collect Information</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { icon: "📝", title: "Directly from you", desc: "Through forms, registrations, and communications" },
                      { icon: "🌐", title: "Automatically", desc: "Via cookies and tracking technologies" },
                      { icon: "🤝", title: "Third parties", desc: "Partners, affiliates, and service providers" }
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <h5 className="font-medium text-gray-800">{item.title}</h5>
                        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 2 - How We Use Your Information */}
              <section id="section-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                  2. How We Use Your Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-600 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Service Provision</h3>
                      <p className="text-gray-700 mt-1">
                        To process enrollments, provide educational services, and maintain your account.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-600 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Communication</h3>
                      <p className="text-gray-700 mt-1">
                        To contact you about your account, services, updates, and promotional offers.
                        This includes communications via email, SMS, WhatsApp, or phone calls,
                        regardless of DND/NDNC registration status when you've provided consent.
                      </p>
                    </div>
                  </div>
                  
                  {/* Additional use cases */}
                  {[
                    "To improve our services based on user feedback and analytics",
                    "To personalize your experience and content recommendations",
                    "To process payments and prevent fraudulent transactions",
                    "To comply with legal obligations and enforce our policies",
                    "To conduct research and analysis for educational improvement"
                  ].map((item, index) => (
                    <div className="flex items-start" key={index}>
                      <div className="flex-shrink-0 h-6 w-6 text-blue-600 mr-4 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-3">Legal Basis for Processing</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Contractual Necessity</h4>
                      <p className="text-green-700 text-sm">
                        We process your data when necessary to fulfill our contractual obligations to you.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Legitimate Interests</h4>
                      <p className="text-green-700 text-sm">
                        We process data when necessary for our legitimate interests, balanced against your rights.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Consent</h4>
                      <p className="text-green-700 text-sm">
                        Where required by law, we obtain your consent for specific processing activities.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Legal Compliance</h4>
                      <p className="text-green-700 text-sm">
                        We may process data to comply with applicable laws and regulations.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 - Information Sharing */}
              <section id="section-3">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                  3. Information Sharing and Disclosure
                </h2>
                
                <div className="space-y-6">
                  <p className="text-gray-700">
                    We may share your information in the following circumstances:
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">With Whom</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Shared</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {[
                          {
                            with: "Service Providers",
                            purpose: "To facilitate our services (payment processors, hosting, analytics)",
                            data: "Necessary personal and usage data"
                          },
                          {
                            with: "Educational Partners",
                            purpose: "For certification, accreditation, and academic purposes",
                            data: "Academic records, identification"
                          },
                          {
                            with: "Legal Authorities",
                            purpose: "When required by law or to protect our rights",
                            data: "As specifically requested"
                          },
                          {
                            with: "Business Transfers",
                            purpose: "In case of merger, acquisition, or asset sale",
                            data: "All relevant information"
                          },
                          {
                            with: "Marketing Partners",
                            purpose: "With your consent for promotional offers",
                            data: "Contact information, preferences"
                          }
                        ].map((row, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{row.with}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.purpose}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.data}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-3">International Data Transfers</h3>
                    <p className="text-purple-700">
                      Your information may be transferred to and maintained on computers located outside
                      of your state, province, country, or other governmental jurisdiction where the
                      data protection laws may differ. We ensure appropriate safeguards are in place.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 - Data Security */}
              <section id="section-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                  4. Data Security
                </h2>
                
                <div className="space-y-6">
                  <p className="text-gray-700">
                    We implement appropriate technical and organizational measures to protect your
                    personal data:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        icon: "🔒",
                        title: "Encryption",
                        desc: "Data in transit and at rest using industry-standard protocols"
                      },
                      {
                        icon: "🛡️",
                        title: "Access Controls",
                        desc: "Strict access limitations to authorized personnel only"
                      },
                      {
                        icon: "🔍",
                        title: "Auditing",
                        desc: "Regular security assessments and vulnerability testing"
                      },
                      {
                        icon: "📋",
                        title: "Policies",
                        desc: "Comprehensive information security policies and training"
                      },
                      {
                        icon: "🔄",
                        title: "Backups",
                        desc: "Regular data backups and disaster recovery plans"
                      },
                      {
                        icon: "🤝",
                        title: "Vendor Security",
                        desc: "Due diligence for third-party service providers"
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                        <div className="text-2xl mb-3">{item.icon}</div>
                        <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                    <h3 className="font-semibold text-red-800 mb-3">Data Breach Notification</h3>
                    <p className="text-red-700">
                      In the event of a data breach that affects your personal information, we will
                      notify you and the appropriate authorities as required by applicable law.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5 - Your Privacy Rights */}
              <section id="section-5">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                  5. Your Privacy Rights
                </h2>
                
                <div className="space-y-6">
                  <p className="text-gray-700">
                    Depending on your jurisdiction, you may have the following rights regarding your
                    personal data:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Access",
                        desc: "Request a copy of your personal data we hold"
                      },
                      {
                        title: "Rectification",
                        desc: "Correct inaccurate or incomplete data"
                      },
                      {
                        title: "Erasure",
                        desc: "Request deletion of your personal data"
                      },
                      {
                        title: "Restriction",
                        desc: "Limit processing of your data in certain circumstances"
                      },
                      {
                        title: "Portability",
                        desc: "Receive your data in a structured, commonly used format"
                      },
                      {
                        title: "Objection",
                        desc: "Object to certain processing activities"
                      },
                      {
                        title: "Withdraw Consent",
                        desc: "Withdraw previously given consent at any time"
                      },
                      {
                        title: "Complaint",
                        desc: "Lodge a complaint with a supervisory authority"
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-yellow-800 mb-3">Exercising Your Rights</h3>
                    <p className="text-yellow-700 mb-3">
                      To exercise any of these rights, please contact us using the information in the
                      "Contact Us" section below. We may need to verify your identity before processing
                      your request.
                    </p>
                    <p className="text-yellow-700">
                      We will respond to your request within 30 days, though this period may be extended
                      where necessary.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6 - Cookies */}
              <section id="section-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                  6. Cookies and Tracking Technologies
                </h2>
                
                <div className="space-y-6">
                  <p className="text-gray-700">
                    We use cookies and similar tracking technologies to enhance your experience:
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Examples</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {[
                          {
                            type: "Essential",
                            purpose: "Necessary for website functionality",
                            examples: "Login sessions, security"
                          },
                          {
                            type: "Performance",
                            purpose: "Improve site performance and user experience",
                            examples: "Analytics, error tracking"
                          },
                          {
                            type: "Functional",
                            purpose: "Remember preferences and settings",
                            examples: "Language selection, font size"
                          },
                          {
                            type: "Targeting",
                            purpose: "Deliver relevant content and ads",
                            examples: "Social media integration, remarketing"
                          }
                        ].map((row, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{row.type}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.purpose}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.examples}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-3">Cookie Management</h3>
                    <p className="text-blue-700 mb-3">
                      You can control or delete cookies through your browser settings. However, disabling
                      essential cookies may affect website functionality.
                    </p>
                    <p className="text-blue-700">
                      For more information about the cookies we use, please see our{" "}
                      <a href="/cookie-policy" className="text-blue-600 underline">Cookie Policy</a>.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7 - Third-Party Services */}
              <section id="section-7">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                  7. Third-Party Services
                </h2>
                
                <div className="space-y-6">
                  <p className="text-gray-700">
                    Our services may contain links to or integrations with third-party websites and
                    services. This Privacy Policy does not apply to these third parties:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      "Payment processors (Razorpay, PayPal)",
                      "Learning management systems",
                      "Analytics providers (Google Analytics)",
                      "Marketing platforms",
                      "Social media platforms",
                      "Cloud service providers"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-3">Third-Party Policies</h3>
                    <p className="text-purple-700">
                      We recommend reviewing the privacy policies of any third-party services you
                      interact with through our platform.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8 - Children's Privacy */}
              <section id="section-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                  8. Children's Privacy
                </h2>
                
                <div className="space-y-6">
                  <p className="text-gray-700">
                    Our services are not directed to children under the age of 13 (or 16 in some
                    jurisdictions). We do not knowingly collect personal information from children:
                  </p>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-3">Parental Controls</h3>
                    <p className="text-green-700">
                      If you believe we have collected information from a child without parental
                      consent, please contact us immediately. We will take steps to remove such
                      information and terminate the child's account if applicable.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                      <h3 className="font-semibold text-gray-800 mb-2">Age Verification</h3>
                      <p className="text-gray-600 text-sm">
                        For certain programs or services that may be appropriate for minors, we
                        implement age verification mechanisms and obtain parental consent where
                        required by law.
                      </p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                      <h3 className="font-semibold text-gray-800 mb-2">Educational Programs</h3>
                      <p className="text-gray-600 text-sm">
                        For educational programs involving minors, we collect only necessary
                        information and implement additional safeguards to protect children's privacy.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9 - Policy Changes */}
              <section id="section-9">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                  9. Changes to This Policy
                </h2>
                
                <div className="space-y-6">
                  <p className="text-gray-700">
                    We may update this Privacy Policy from time to time. We will notify you of any
                    material changes:
                  </p>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-yellow-800 mb-3">Notification Methods</h3>
                    <ul className="list-disc pl-5 space-y-2 text-yellow-700">
                      <li>Through our website </li>
                      <li>Via email to registered users</li>
                      <li>Through prominent notices within our services</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-3">Policy Review</h3>
                    <p className="text-blue-700">
                      We encourage you to periodically review this Privacy Policy to stay informed
                      about how we are protecting your information.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10 - Contact Us */}
              <section id="section-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                  10. Contact Us
                </h2>
                
                <div className="space-y-6">
                  <p className="text-gray-700">
                    If you have any questions about this Privacy Policy or our privacy practices:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h3 className="font-semibold text-gray-800 mb-3">Mailing Address</h3>
                      <p className="text-gray-600">
                        Saroj Educational Group<br />
                        L-5, First Floor, Lajpat Nagar - II<br />
                        Delhi, Delhi, India, 110024
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h3 className="font-semibold text-gray-800 mb-3">Contact Information</h3>
                      <p className="text-gray-600">
                        <strong>Email:</strong> info@seglko.org<br />
                        <strong>Phone:</strong> +91 9555699988<br />
                        <strong>Hours:</strong> Mon-Sat, 9AM-6PM IST
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-3">Data Protection Officer</h3>
                    <p className="text-green-700">
                      For specific privacy concerns or to exercise your rights, you may contact our
                      Data Protection Officer directly at <strong>dpo@seglko.org</strong>.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Policy Acceptance */}
            <div className="mt-16 bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Acceptance of This Privacy Policy
              </h3>
              <p className="text-gray-700 text-center">
                By using our services, you signify your acceptance of this Privacy Policy. If you do
                not agree to this policy, please do not use our services. Your continued use of the
                services following the posting of changes to this policy will be deemed your
                acceptance of those changes.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}