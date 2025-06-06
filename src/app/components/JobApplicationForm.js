"use client";

import { useState, useEffect, useRef } from "react";
import { toast, Toaster } from "react-hot-toast";
import NavigationPages from "../utils/NavigationPages";

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    profile: "",
    name: "",
    email: "",
    phone: "",
    qualification: "",
    expected_salary: "",
    last_organization: "",
    last_salary: "",
    experience: "",
    address: "",
    image: null,
    resume: null,
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const imageInputRef = useRef(null);
  const resumeInputRef = useRef(null);

  useEffect(() => {
    const storedJob = localStorage.getItem("selectedJob");
    if (storedJob) {
      try {
        const job = JSON.parse(storedJob);
        if (job && job.name) {
          setFormData((prev) => ({
            ...prev,
            profile: job.name,
          }));
        }
      } catch (e) {
        console.error("Failed to parse job", e);
      }
    }
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.phone) errors.phone = "Contact is required.";
    if (!formData.qualification)
      errors.qualification = "Qualification is required.";
    if (!formData.expected_salary)
      errors.expected_salary = "Expected Salary is required.";
    if (!formData.last_organization)
      errors.last_organization = "Last Organization is required.";
    if (!formData.last_salary) errors.last_salary = "Last Salary is required.";
    if (!formData.experience) errors.experience = "Experience is required.";
    if (!formData.address) errors.address = "Address is required.";
    if (!formData.image) errors.image = "Profile photo is required.";
    if (!formData.resume) errors.resume = "Resume is required.";

    return errors;
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      if (name === "image") {
        if (file && file.size > 5 * 1024 * 1024) {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            image: "Profile photo must be under 5 MB",
          }));
          return;
        }
        setFormData((prev) => ({ ...prev, image: file }));
        setFormErrors((prevErrors) => ({ ...prevErrors, image: null }));
      } else if (name === "resume") {
        if (file && file.type !== "application/pdf") {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            resume: "Only PDF resumes are accepted",
          }));
          setFormData((prev) => ({ ...prev, resume: null }));
          return;
        }
        setFormData((prev) => ({ ...prev, resume: file }));
        setFormErrors((prevErrors) => ({ ...prevErrors, resume: null }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const formDataToSend = new FormData();
      // Append all form data including files
      Object.entries(formData).forEach(([key, value]) => {
        if (value) {
          formDataToSend.append(key, value);
        }
      });

      setIsSubmitting(true);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/job-application`,
          {
            method: "POST",
            body: formDataToSend,
          }
        );

        const data = await response.json();

        if (response.ok && data.success) {
          toast.success("Application submitted successfully!");
          setFormData({
            profile: formData.profile || "", // keep profile if you want
            name: "",
            email: "",
            phone: "",
            qualification: "",
            expected_salary: "",
            last_organization: "",
            last_salary: "",
            experience: "",
            address: "",
            image: null,
            resume: null,
          });
          if (imageInputRef.current) imageInputRef.current.value = "";
          if (resumeInputRef.current) resumeInputRef.current.value = "";
        } else {
          toast.error(data.error || "Failed to submit application.");
        }
      } catch (error) {
        console.error("Submission error:", error);
        toast.error("An error occurred. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <Toaster />

      <div className="relative w-full h-[36vh] bg-blue-900 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">APPLICATION FORM</h1>
      </div>

      <NavigationPages />

      <div className="py-6">
        <form
          onSubmit={handleSubmit}
          className="max-w-6xl mx-auto p-6 space-y-6 bg-blue-200 shadow-lg rounded-md"
          encType="multipart/form-data"
        >
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Job Application
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-gray-600">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full px-4 py-2 border ${
                  formErrors.name ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400`}
                placeholder="Enter Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && (
                <span className="text-red-500 text-sm">{formErrors.name}</span>
              )}
            </div>
            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-gray-600">
                Your Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full px-4 py-2 border ${
                  formErrors.name ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400`}
                placeholder="Enter Your Email Address"
                required
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && (
                <span className="text-red-500 text-sm">{formErrors.email}</span>
              )}
            </div>
            {/* Phone */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-gray-600">
                Your Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className={`w-full px-4 py-2 border ${
                  formErrors.name ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400`}
                placeholder="Enter Your Contact number"
                required
                value={formData.phone}
                onChange={handleChange}
              />
              {formErrors.name && (
                <span className="text-red-500 text-sm">{formErrors.phone}</span>
              )}
            </div>
            {/* Job Profile */}
            <div className="space-y-2">
              <label htmlFor="applyFor" className="block text-gray-600">
                Job Profile <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="applyFor"
                name="profile"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-200 text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400"
                value={formData.profile}
                disabled
              />
            </div>
          </div>

          {/* Qualification & Salary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="qualification" className="block text-gray-600">
                Your Qualification <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                className={`w-full px-4 py-2 border ${
                  formErrors.qualification
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400`}
                placeholder="Your Qualification"
                required
                value={formData.qualification}
                onChange={handleChange}
              />
              {formErrors.qualification && (
                <span className="text-red-500 text-sm">
                  {formErrors.qualification}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="expected_salary" className="block text-gray-600">
                Expected Salary <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="expected_salary"
                name="expected_salary"
                className={`w-full px-4 py-2 border ${
                  formErrors.expected_salary
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400`}
                placeholder="Your Expected Salary"
                required
                value={formData.expected_salary}
                onChange={handleChange}
              />
              {formErrors.expected_salary && (
                <span className="text-red-500 text-sm">
                  {formErrors.expected_salary}
                </span>
              )}
            </div>
          </div>

          {/* Last Organization, Last Salary, Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="last_organization"
                className="block text-gray-600"
              >
                Last Organization <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="last_organization"
                name="last_organization"
                className={`w-full px-4 py-2 border ${
                  formErrors.last_organization
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400`}
                placeholder="Your Last Organization"
                required
                value={formData.last_organization}
                onChange={handleChange}
              />
              {formErrors.last_organization && (
                <span className="text-red-500 text-sm">
                  {formErrors.last_organization}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="last_salary" className="block text-gray-600">
                Last Salary <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="last_salary"
                name="last_salary"
                className={`w-full px-4 py-2 border ${
                  formErrors.last_salary ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400`}
                placeholder="Your Last Salary"
                required
                value={formData.last_salary}
                onChange={handleChange}
              />
              {formErrors.last_salary && (
                <span className="text-red-500 text-sm">
                  {formErrors.last_salary}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="experience" className="block text-gray-600">
              Experience (in years) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="experience"
              name="experience"
              className={`w-full px-4 py-2 border ${
                formErrors.experience ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400`}
              placeholder="Your Experience"
              required
              value={formData.experience}
              onChange={handleChange}
            />
            {formErrors.experience && (
              <span className="text-red-500 text-sm">
                {formErrors.experience}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="address" className="block text-gray-600">
              Address <span className="text-red-500">*</span>
            </label>
            <textarea
              id="address"
              name="address"
              className={`w-full px-4 py-2 border ${
                formErrors.address ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400`}
              placeholder="Your address"
              required
              value={formData.address}
              onChange={handleChange}
              rows={3}
            />
            {formErrors.address && (
              <span className="text-red-500 text-sm">{formErrors.address}</span>
            )}
          </div>

          {/* Profile Photo Upload */}
          <div className="space-y-2">
            <label htmlFor="image" className="block text-gray-600">
              Profile Photo <span className="text-red-500">*</span>
            </label>
            <input
              ref={imageInputRef}
              type="file"
              id="image"
              name="image"
              className={`w-full px-4 py-2 border ${
                formErrors.image ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400`}
              onChange={handleChange}
              accept="image/*"
              required
            />
            {formErrors.image && (
              <span className="text-red-500 text-sm">{formErrors.image}</span>
            )}
          </div>

          {/* CV Upload */}
          <div className="space-y-2">
            <label htmlFor="resume" className="block text-gray-600">
              Upload Resume <span className="text-red-500">*</span>{" "}
              <span>(Only Pdf's are accepted)</span>
            </label>
            <input
              ref={resumeInputRef}
              type="file"
              id="resume"
              name="resume"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              required
              accept=".pdf"
              onChange={handleChange}
            />
            {formErrors.resume && (
              <span className="text-red-500 text-sm">{formErrors.resume}</span>
            )}
          </div>

          {/* Submit Button */}
          {/* <button
              name="Submit"
              type="submit"
              disabled={
                isSubmitting ||
                !formData.name ||
                !formData.email ||
                !formData.phone ||
                !formData.qualification ||
                !formData.expected_salary ||
                !formData.last_organization ||
                !formData.last_salary ||
                !formData.experience ||
                !formData.address ||
                !formData.image ||
                !formData.resume
              }
              loading={loading}
            /> */}

          <button
            type="submit"
            className={`w-full py-3 rounded-md transition-colors text-white ${
              isSubmitting
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
            disabled={
              isSubmitting ||
              !formData.name ||
              !formData.email ||
              !formData.phone ||
              !formData.qualification ||
              !formData.expected_salary ||
              !formData.last_organization ||
              !formData.last_salary ||
              !formData.experience ||
              !formData.address ||
              !formData.image ||
              !formData.resume
            }
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}
