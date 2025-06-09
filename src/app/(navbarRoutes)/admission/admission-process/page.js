
import GoogleAdsScript from '@/app/components/GoogleAdsScript';
import NavigationPages from '@/app/utils/NavigationPages';
import React from 'react'

export const metadata = {
    title: 'Admission Process - Saroj Educational Group',
    description: 'Learn about the admission process at Saroj Educational Group (SEG) and take the first step towards a successful career.',
};

export default function page() {
  return (
    <>
    <GoogleAdsScript/>
      <div className="relative w-full h-[40vh] bg-blue-900">
        <img
          src="/AdmissionProcessBanner.PNG"
          alt="Admission Process Banner"
          className="w-full h-full object-cover"
        />
      
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
                    target="_blank"
                    rel="noopener noreferrer"
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
