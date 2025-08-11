"use client";
import NavigationPages from "@/app/utils/NavigationPages";
import axios from "axios";
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

export default function ContactPage() {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let newErrors = {};

    if (!data.name) {
      newErrors.name = "Name is required";
    }
    if (!data.email.trim()) newErrors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!data.mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (!/^[0-9]{10}$/.test(data.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }
    if (!data.message) {
      newErrors.message = "Message is required";
    }
    if(!data.consent){
      newErrors.message = "You must Agree before Submitting"
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      try {
        const response = await axios.post(apiUrl, {
          name: data.name,
          email: data.email,
          mobile: data.mobile,
          message: data.message,
           consent: data.consent,
        });

        if (response && response.status) {
          setData({
            name: "",
            email: "",
            mobile: "",
            message: "",
            consent : false,
          });
          setTimeout(() => {
            setLoading(false);
            toast.success("Form submitted successfully");
          });
        } else {
          toast.error("Failed to submit the form.");
          setLoading(false);
        }
      } catch (error) {
        console.log("Error submitting form:", error);
        toast.error("An error occurred while submitting the form.");
        setLoading(false);
      }
    }
  };

  return (
    <>
      <Toaster />
      <div className="w-full  h-[26vh] md:h-[40vh] lg:h-80 ">
        <img
          src="/ContactUsBanner.jpg"
          alt="Contact Us"
          className="w-full h-full object-fit"
        />
      </div>

      <div>
        <NavigationPages />
      </div>

      <div className="flex flex-col md:flex-row items-center  justify-center min-h-screen bg-blue-50 p-6">
        {/* Left Side - Contact Information */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
          <p className="mt-2 text-gray-600">
            Email, call, or complete the form to learn how we can help solve
            your problem.
          </p>
          <div className="mt-4 text-gray-800 font-semibold flex items-center gap-4">
            <FaPhoneAlt />
            <a href="tel:09555699988">09555699988,</a>
            <a href="tel:09810054878">09810054878</a>
          </div>
          <div className="mt-4 text-gray-800 font-semibold flex items-center gap-4">
            <IoMdMailUnread />
            <a href="mailto:admission.cell@seglko.org">
              admission.cell@seglko.org,
            </a>
          </div>
          <div className="mt-4 text-gray-800 font-semibold flex items-center gap-4">
            <IoMdMailUnread />

            <a href="mailto:hr@seglko.org">For Jobs(Send Cv) : hr@seglko.org</a>
          </div>
          <div className="mt-4 text-gray-800 font-semibold flex items-center gap-4">
            <FaPhoneAlt />
            <a href="tel:1800-180-7686">Toll Free No: 1800-180-7686</a>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-gray-800 text-4xl">
              Delhi Head Office{" "}
            </h3>
            <p className="text-gray-600 mt-2">
              L-5, First Floor, Lajpat Nagar - II, Delhi, Delhi, India, 110024
            </p>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-gray-800 text-4xl">
              Our Colleges Locations
            </h3>
            <Link href="/locations" className="text-blue-600 mt-2 text-xl">
              View Locations
            </Link>
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
          <h3 className="text-3xl font-semibold text-gray-800 ">
            Get in Touch
          </h3>
          <p className="text-gray-600 mb-6">You can reach us anytime</p>
          <form
            className="flex flex-col flex-grow gap-2 mt-2"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                placeholder="Your name"
                className="p-2 border rounded w-full"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="Your email"
                className="p-2 border rounded w-full mt-4"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="tel"
                value={data.mobile}
                placeholder="Phone number"
                onChange={(e) => setData({ ...data, mobile: e.target.value })}
                className="p-2 border rounded w-full mt-4"
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm">{errors.mobile}</p>
              )}
            </div>

            <div>
              <textarea
                placeholder="How can we help?"
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
                className="p-2 border rounded w-full mt-4 h-24"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

              {/* ✅ Consent checkbox */}
            <div className="flex items-start gap-2 mt-4">
              <input
                type="checkbox"
                checked={data.consent}
                onChange={(e) => setData({ ...data, consent: e.target.checked })}
              />
              <label className="text-xs text-gray-600">
                I authorise <strong>Saroj Educational Group</strong> and its representatives to contact me
                with updates and notifications via Email/SMS/WhatsApp/Call. This will override DND/NDNC.
              </label>
            </div>
            {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}

            {/* Spacer to push button to bottom */}
            <div className="flex-grow"></div>

            <button
              type="submit"
              disabled={loading}
              className={`bg-blue-600 text-white p-3 rounded w-full mt-4 flex items-center justify-center ${
                loading ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </button>
           
          </form>
        </div>
      </div>
    </>
  );
}
