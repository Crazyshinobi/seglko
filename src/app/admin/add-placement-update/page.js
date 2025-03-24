"use client";

import { AdminHeader } from "@/components/admin-header";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

export default function Page() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    course: "",
    company: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Seglko Admin - Add Placement Update";
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.course) newErrors.course = "Course is required";
    if (!formData.company) newErrors.company = "Company is required";
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
      const response = await axios.post("/api/placement-update", formData);

      if (response.data.success) {
        toast.success("Placement Update added successfully");
        setFormData({
          course: "",
          company: "",
        });
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
      <AdminHeader heading={"Add Placements Update"} />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
          <form
            onSubmit={handleSubmit}
            className="grid sm:grid-cols-12 gap-8 p-5 lg:p-10 "
          >
            <div className="lg:col-span-6 flex flex-col gap-1.5">
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

            <div className="lg:col-span-6 flex flex-col gap-1.5">
              <Label htmlFor="course">Course</Label>
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
