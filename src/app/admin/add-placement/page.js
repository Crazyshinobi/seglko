"use client";

import { AdminHeader } from "@/components/admin-header";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import axios from "axios";

export default function Page() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    company: "",
    designation: "",
    compensation: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    document.title = "Seglko Admin - Add Placement";
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      setFormData((prev) => ({
        ...prev,
        [name]: file,
      }));
      setImagePreview(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.course) newErrors.course = "Course is required";
    if (!formData.company) newErrors.company = "Company is required";
    if (!formData.designation)
      newErrors.designation = "Designation is required";
    if (!formData.compensation) {
      newErrors.compensation = "Package is required";
    } else if (formData.compensation == 0) {
      newErrors.compensation = "Package can not be zero";
    }
    if (!formData.image) newErrors.image = "Image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!validateForm()) {
      setLoading(false);
      return;
    }
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("course", formData.course);
      formDataToSend.append("company", formData.company);
      formDataToSend.append("designation", formData.designation);
      formDataToSend.append("compensation", formData.compensation);
      formDataToSend.append("image", formData.image);

      const response = await axios.post("/api/placement", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        toast.success("Placement added successfully");
        setFormData({
          name: "",
          course: "",
          company: "",
          designation: "",
          compensation: "",
          image: null,
        });
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) {
          fileInput.value = '';
        }
        setImagePreview(null); // Clear image preview
      } else {
        throw new Error(response.data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response?.data?.error || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AdminHeader heading={"Add Placements"} />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
          <form
            onSubmit={handleSubmit}
            className="grid sm:grid-cols-12 gap-8 p-5 lg:p-10 "
          >
            <div className="lg:col-span-4 flex flex-col gap-1.5">
              <Label htmlFor="name">Name of the Student</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div className="lg:col-span-4 flex flex-col gap-1.5">
              <Label htmlFor="course">Course of the Student</Label>
              <Input
                type="text"
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
              />
              {errors.course && (
                <p className="text-red-500 text-sm">{errors.course}</p>
              )}
            </div>

            <div className="lg:col-span-4 flex flex-col gap-1.5">
              <Label htmlFor="company">Company Name</Label>
              <Input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
              {errors.company && (
                <p className="text-red-500 text-sm">{errors.company}</p>
              )}
            </div>

            <div className="lg:col-span-4 flex flex-col gap-1.5">
              <Label htmlFor="designation">Job Role (Designation) </Label>
              <Input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
              />
              {errors.designation && (
                <p className="text-red-500 text-sm">{errors.designation}</p>
              )}
            </div>

            <div className="lg:col-span-4 flex flex-col gap-1.5">
              <Label htmlFor="compensation">Package (₹ in LPA)</Label>
              <Input
                type="number"
                id="compensation"
                name="compensation"
                value={formData.compensation}
                onChange={handleChange}
                min="0"
              />
              {errors.compensation && (
                <p className="text-red-500 text-sm">{errors.compensation}</p>
              )}
            </div>

            <div className="lg:col-span-4 flex flex-col gap-1.5">
              <Label htmlFor="image">Student Image</Label>
              <Input
                id="image"
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
              />
              {errors.image && (
                <p className="text-red-500 text-sm">{errors.image}</p>
              )}
            </div>
            <div className="lg:col-span-12 flex flex-col gap-1.5">
              {imagePreview && (
                <>
                  <Label>Student Image Preview: </Label>
                  <Image
                    src={imagePreview}
                    height={300}
                    width={300}
                    alt="Student Image"
                  />
                </>
              )}
            </div>

            <div className="lg:col-span-12 flex flex-col gap-1.5">
              <Button disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Please wait
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
