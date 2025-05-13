// import NavigationPages from '@/app/utils/NavigationPages';
// import React from 'react'

// export const metadata = {
//     title: 'Admission Process - Saroj Educational Group',
//     description: 'Learn about the admission process at Saroj Educational Group (SEG) and take the first step towards a successful career.',
//   };

// export default function page() {
//   return (
//     <>
//       <div className=" w-full h-[26vh] md:h-[40vh] lg:h-80 ">
//         <img
//           src="/AdmissionProcessBanner.PNG"
//           alt="History of Seg Banner"
//           className="w-full h-full object-fit"
//         />
//       </div>

//       <div>
//         <NavigationPages/>
//       </div>

//     <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 py-6">
//   {/* Header */}
//   <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-6 text-white">
//     <h2 className="text-2xl font-bold">SEG Online Admission Process</h2>
//     <p className="text-blue-100 mt-1">Follow these steps to complete your application</p>
//   </div>

//   {/* Steps Container */}
//   <div className="divide-y divide-gray-200">
//     {/* STEP 1 */}
//     <div className="p-6 hover:bg-blue-50 transition-colors">
//       <div className="flex items-start gap-4">
//         <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
//           1
//         </div>
//         <div>
//           <h3 className="font-semibold text-lg text-gray-800">Registration</h3>
//           <p className="text-gray-600 mt-1">Go to the registration link – Online Registration</p>
//           <div className="mt-3 flex flex-wrap gap-2">
//             <a href="#" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
//               </svg>
//               Visit Registration Portal
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* STEP 2 */}
//     <div className="p-6 hover:bg-blue-50 transition-colors">
//       <div className="flex items-start gap-4">
//         <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
//           2
//         </div>
//         <div>
//           <h3 className="font-semibold text-lg text-gray-800">Fill Registration Form</h3>
//           <p className="text-gray-600 mt-1">Fill in all required details and click "Submit"</p>
//           <div className="mt-3 bg-gray-50 p-4 rounded-md border border-gray-200">
//             <div className="space-y-2">
//               <div className="flex items-center gap-2 text-sm">
//                 <div className="w-3 h-3 rounded-full bg-blue-500"></div>
//                 <span>Full Name</span>
//               </div>
//               <div className="flex items-center gap-2 text-sm">
//                 <div className="w-3 h-3 rounded-full bg-blue-500"></div>
//                 <span>Email Address</span>
//               </div>
//               <div className="flex items-center gap-2 text-sm">
//                 <div className="w-3 h-3 rounded-full bg-blue-500"></div>
//                 <span>Mobile Number</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* STEP 3 */}
//     <div className="p-6 hover:bg-blue-50 transition-colors">
//       <div className="flex items-start gap-4">
//         <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
//           4
//         </div>
//         <div>
//           <h3 className="font-semibold text-lg text-gray-800">Receive Login Credentials</h3>
//           <p className="text-gray-600 mt-1">Temporary ID/password sent to your email</p>
//           <div className="mt-3 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r">
//             <div className="flex items-start gap-2">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//               </svg>
//               <div>
//                 <p className="text-yellow-700 text-sm">Check spam folder if email doesn't arrive within 15 minutes</p>
//                 <button className="text-blue-600 text-xs mt-1 hover:underline">Resend credentials</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* STEP 4 */}
//     <div className="p-6 hover:bg-blue-50 transition-colors">
//       <div className="flex items-start gap-4">
//         <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
//           5
//         </div>
//         <div>
//           <h3 className="font-semibold text-lg text-gray-800">Complete Admission Form</h3>
//           <p className="text-gray-600 mt-1">Log in and fill the detailed form</p>
//           <div className="mt-3 bg-gray-50 p-4 rounded-md border border-gray-200">
//             <div className="grid grid-cols-2 gap-3 text-sm">
//               <div className="flex items-center gap-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//                 <span>Personal Details</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//                 <span>Academic History</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//                 <span>Contact Information</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//                 <span>Document Upload</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* STEP 5 */}
//     <div className="p-6 hover:bg-blue-50 transition-colors">
//       <div className="flex items-start gap-4">
//         <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
//           3
//         </div>
//         <div>
//           <h3 className="font-semibold text-lg text-gray-800">Payment</h3>
//           <p className="text-gray-600 mt-1">Pay registration fee</p>
//           <div className="mt-3">
//             <div className="flex items-center gap-3 mb-2">
//               <span className="font-medium">Payment Methods:</span>
//               <div className="flex gap-2">
//                 <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="UPI" className="h-6" />
//                 <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="Paytm" className="h-6" />
//                 <img src="https://cdn-icons-png.flaticon.com/512/196/196566.png" alt="Visa" className="h-6" />
//               </div>
//             </div>
//             {/* <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
//               </svg>
//               Proceed to Payment
//             </button> */}
//           </div>
//         </div>
//       </div>
//     </div>

    

    

//     {/* STEP 6 */}
//     <div className="p-6 hover:bg-blue-50 transition-colors">
//       <div className="flex items-start gap-4">
//         <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
//           6
//         </div>
//         <div>
//           <h3 className="font-semibold text-lg text-gray-800">Final Submission</h3>
//           {/* <p className="text-gray-600 mt-1">Receive permanent login credentials via email</p> */}
//           <div className="mt-4 space-y-3">
//             <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
//               </svg>
//               Download Application Copy
//             </button>
//             <p className="text-xs text-gray-500">Keep this copy for your records and future reference</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

  
// </div>
//     </>
//   )
// }
import NavigationPages from '@/app/utils/NavigationPages';
import React from 'react'

export const metadata = {
    title: 'Admission Process - Saroj Educational Group',
    description: 'Learn about the admission process at Saroj Educational Group (SEG) and take the first step towards a successful career.',
};

export default function page() {
  return (
    <>
      <div className="relative w-full h-[40vh] bg-blue-900">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img
          src="/AdmissionProcessBanner.PNG"
          alt="Admission Process Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Admission Process</h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Simple 5-step process to join our institution
            </p>
          </div>
        </div>
      </div>

      <div>
        <NavigationPages/>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our 5-Step Admission Procedure
          </h2>
          <div className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Follow these simple steps to complete your application
          </div>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-blue-200 transform -translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-12">
            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-xl font-bold shadow-lg z-10 mb-4 md:mb-0">
                1
              </div>
              <div className="md:ml-8 md:mr-8 w-full md:w-1/2 md:odd:ml-auto md:odd:mr-8 md:even:ml-8 md:even:mr-auto">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Register Yourself</h3>
                  <p className="text-gray-600 mb-4">
                    Create your account using your email address and basic personal information.
                  </p>
                  <a 
                    href="https://seglko.in8.nopaperforms.com/" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Start Registration
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-xl font-bold shadow-lg z-10 mb-4 md:mb-0">
                2
              </div>
              <div className="md:ml-8 md:mr-8 w-full md:w-1/2 md:odd:ml-auto md:odd:mr-8 md:even:ml-8 md:even:mr-auto">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Verify Email</h3>
                  <p className="text-gray-600 mb-4">
                    Check your email for a verification link to activate your account.
                  </p>
                  <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span className="text-sm text-yellow-700">If you don't see the email, please check your spam folder</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-xl font-bold shadow-lg z-10 mb-4 md:mb-0">
                3
              </div>
              <div className="md:ml-8 md:mr-8 w-full md:w-1/2 md:odd:ml-auto md:odd:mr-8 md:even:ml-8 md:even:mr-auto">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Fill Application Form Online</h3>
                  <p className="text-gray-600 mb-4">
                    Complete the detailed application form with your academic and personal information.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Personal Details
                    </div>
                    <div className="flex items-center">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Academic History
                    </div>
                    <div className="flex items-center">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Contact Information
                    </div>
                    <div className="flex items-center">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Document Upload
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-xl font-bold shadow-lg z-10 mb-4 md:mb-0">
                4
              </div>
              <div className="md:ml-8 md:mr-8 w-full md:w-1/2 md:odd:ml-auto md:odd:mr-8 md:even:ml-8 md:even:mr-auto">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Pay Application Fee</h3>
                  <p className="text-gray-600 mb-4">
                    Secure your application by paying the non-refundable processing fee.
                  </p>
                  <div className="flex flex-wrap gap-3 items-center mb-3">
                    <span className="text-sm font-medium">Payment Options:</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="UPI" className="h-6" />
                    <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="Paytm" className="h-6" />
                    <img src="https://cdn-icons-png.flaticon.com/512/196/196566.png" alt="Visa" className="h-6" />
                  </div>
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                    Proceed to Payment
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-xl font-bold shadow-lg z-10 mb-4 md:mb-0">
                5
              </div>
              <div className="md:ml-8 md:mr-8 w-full md:w-1/2 md:odd:ml-auto md:odd:mr-8 md:even:ml-8 md:even:mr-auto">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Submit Application</h3>
                  <p className="text-gray-600 mb-4">
                    Review and submit your completed application for processing.
                  </p>
                  <div className="space-y-3">
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                      Submit Application
                      <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <p className="text-xs text-gray-500">You'll receive a confirmation email with your application details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 bg-blue-50 rounded-lg p-8 border border-blue-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Admission Support</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Our admission team is available to assist you at every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:admissions@yourinstitution.edu" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Admissions
              </a>
              <a href="tel:+1234567890" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Admission Office
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}
