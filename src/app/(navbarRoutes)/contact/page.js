import NavigationPages from '@/app/utils/NavigationPages';
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";

export default function ContactPage() {
  return ( 
  <>
   <div >
    <img src="/ContactUsBanner.jpg" alt="Contact Us"
     className="md:h-[40vh] lg:h-80 w-full h-[26vh] object-cover"    
     />
  
   </div>
   
  <div>
      <NavigationPages/>
    </div>

    <div className="flex flex-col md:flex-row items-center  justify-center min-h-screen bg-blue-50 p-6">
      {/* Left Side - Contact Information */}
      <div className="md:w-1/2 p-6">
        <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
        <p className="mt-2 text-gray-600">
          Email, call, or complete the form to learn how we can help solve your problem.
        </p>
        <div className="mt-4 text-gray-800 font-semibold flex items-center gap-4"><FaPhoneAlt/><a href='tel:09555699988'>09555699988,</a><a href='tel:09810054878'>09810054878</a></div>
        <div className="mt-4 text-gray-800 font-semibold flex items-center gap-4"><IoMdMailUnread/><a href='mailto:admission.cell@seglko.org'>admission.cell@seglko.org</a></div>
        <div className="mt-4 text-gray-800 font-semibold flex items-center gap-4"><FaPhoneAlt/><a href='tel:1800-180-7686'>Toll Free No: 1800-180-7686</a></div>


        <div className="mt-8">
          <h3 className="font-semibold text-gray-800 text-4xl">Location</h3>
          <p className="text-gray-600 mt-2">
          L-5, First Floor, Lajpat Nagar - II, Delhi, Delhi, India, 110024
          </p>
        </div>

        <div className="mt-6 rounded-lg overflow-hidden shadow-lg border border-gray-300">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0546279364817!2d77.24402707528662!3d28.568122275699928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd309eebed77%3A0x5d235d9023c29428!2sSaroj%20Educational%20Group!5e0!3m2!1sen!2sin!4v1742368000342!5m2!1sen!2sin"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>

        
      </div>

      {/* Right Side - Contact Form */}
      <div className="md:w-1/2 flex flex-col bg-white p-6 py-12 rounded-lg shadow-lg max-w-md w-full ">
        <h3 className="text-3xl font-semibold text-gray-800 ">Get in Touch</h3>
        <p className="text-gray-600 mb-6">You can reach us anytime</p>
        <form className="flex flex-col flex-grow gap-2 mt-2">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First name" className="p-2 border rounded w-full" />
            <input type="text" placeholder="Last name" className="p-2 border rounded w-full" />
          </div>
          <input type="email" placeholder="Your email" className="p-2 border rounded w-full mt-4" />
          <input type="tel" placeholder="Phone number" className="p-2 border rounded w-full mt-4" />
          <textarea placeholder="How can we help?" className="p-2 border rounded w-full mt-4 h-24"></textarea>
          
          {/* Spacer to push button to bottom */}
          <div className="flex-grow"></div> 

          <button type="submit" className="bg-blue-600 text-white p-3 rounded w-full mt-4">Submit</button>
          <p className="text-xs text-gray-600 mt-2 text-center">
            By contacting us, you agree to our <span className="text-blue-600">Terms of Service</span> and <span className="text-blue-600">Privacy Policy</span>.
          </p>
        </form>
      </div>
    </div>
  </>
  )}
