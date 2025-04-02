import NavigationPages from '@/app/utils/NavigationPages';
import React from 'react'

export const metadata = {
    title: 'Admission Process - Saroj Educational Group',
    description: 'Learn about the admission process at Saroj Educational Group (SEG) and take the first step towards a successful career.',
  };

export default function page() {
  return (
    <>
      <div className=" w-full h-[26vh] md:h-[40vh] lg:h-80 ">
        <img
          src="/PlacementBanner.PNG"
          alt="History of Seg Banner"
          className="w-full h-full object-fit"
        />
      </div>

      <div>
        <NavigationPages/>
      </div>

    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 py-6">
  {/* Header */}
  <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-6 text-white">
    <h2 className="text-2xl font-bold">SEG Online Admission Process</h2>
    <p className="text-blue-100 mt-1">Follow these steps to complete your application</p>
  </div>

  {/* Steps Container */}
  <div className="divide-y divide-gray-200">
    {/* STEP 1 */}
    <div className="p-6 hover:bg-blue-50 transition-colors">
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
          1
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-800">Registration</h3>
          <p className="text-gray-600 mt-1">Go to the registration link – Online Registration</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a href="#" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              Visit Registration Portal
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* STEP 2 */}
    <div className="p-6 hover:bg-blue-50 transition-colors">
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
          2
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-800">Fill Registration Form</h3>
          <p className="text-gray-600 mt-1">Fill in all required details and click "Submit"</p>
          <div className="mt-3 bg-gray-50 p-4 rounded-md border border-gray-200">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>Full Name</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>Email Address</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>Mobile Number</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* STEP 3 */}
    <div className="p-6 hover:bg-blue-50 transition-colors">
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
          3
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-800">Payment</h3>
          <p className="text-gray-600 mt-1">Pay registration fee</p>
          <div className="mt-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-medium">Payment Methods:</span>
              <div className="flex gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="UPI" className="h-6" />
                <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="Paytm" className="h-6" />
                <img src="https://cdn-icons-png.flaticon.com/512/196/196566.png" alt="Visa" className="h-6" />
              </div>
            </div>
            {/* <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              Proceed to Payment
            </button> */}
          </div>
        </div>
      </div>
    </div>

    {/* STEP 4 */}
    <div className="p-6 hover:bg-blue-50 transition-colors">
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
          4
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-800">Receive Login Credentials</h3>
          <p className="text-gray-600 mt-1">Temporary ID/password sent to your email</p>
          <div className="mt-3 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r">
            <div className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <p className="text-yellow-700 text-sm">Check spam folder if email doesn't arrive within 15 minutes</p>
                <button className="text-blue-600 text-xs mt-1 hover:underline">Resend credentials</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* STEP 5 */}
    <div className="p-6 hover:bg-blue-50 transition-colors">
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
          5
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-800">Complete Admission Form</h3>
          <p className="text-gray-600 mt-1">Log in and fill the detailed form</p>
          <div className="mt-3 bg-gray-50 p-4 rounded-md border border-gray-200">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Personal Details</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Academic History</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Contact Information</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Document Upload</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* STEP 6 */}
    <div className="p-6 hover:bg-blue-50 transition-colors">
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
          6
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-800">Final Submission</h3>
          {/* <p className="text-gray-600 mt-1">Receive permanent login credentials via email</p> */}
          <div className="mt-4 space-y-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Application Copy
            </button>
            <p className="text-xs text-gray-500">Keep this copy for your records and future reference</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Help Section
  <div className="bg-gray-50 p-6 border-t border-gray-200">
    <h3 className="font-medium text-gray-800 mb-3">Need assistance?</h3>
    <div className="flex flex-wrap gap-4">
      <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        +91 12345 67890
      </a>
      <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        admissions@seg.edu
      </a>
      <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Visit Admission Office
      </a>
    </div>
  </div> */}
</div>
    </>
  )
}
