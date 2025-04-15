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
    name: "",
    subject: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Seglko Admin - Add Job";
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

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
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
      const response = await axios.post("/api/job", formData);

      if (response.data.success) {
        toast.success("Job added successfully");
        setFormData({
            name: "",
          subject: "",
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
      <AdminHeader heading={"Add Job"} />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
          <form
            onSubmit={handleSubmit}
            className="grid sm:grid-cols-12 gap-8 p-5 lg:p-10 "
          >
            <div className="lg:col-span-6 flex flex-col gap-1.5">
              <Label htmlFor="name">Name</Label>
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

            <div className="lg:col-span-6 flex flex-col gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject}</p>
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
