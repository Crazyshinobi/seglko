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
    title: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    document.title = "Seglko Admin - Add Notice";
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

    if (!formData.title) newErrors.title = "Title is required";
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
      formDataToSend.append("title", formData.title);
      formDataToSend.append("image", formData.image);

      const response = await axios.post("/api/notice", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        toast.success("Notice added successfully");
        setFormData({
          title: "",
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
      <AdminHeader heading={"Add Notice"} />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
          <form
            onSubmit={handleSubmit}
            className="grid sm:grid-cols-12 gap-8 p-5 lg:p-10 "
          >
            <div className="lg:col-span-6 flex flex-col gap-1.5">
              <Label htmlFor="title">Notice Title</Label>
              <Input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title}</p>
              )}
            </div>           
            <div className="lg:col-span-6 flex flex-col gap-1.5">
              <Label htmlFor="image">Notice Image</Label>
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
                  <Label>Notice Image Preview: </Label>
                  <Image
                    src={imagePreview}
                    height={300}
                    width={300}
                    alt="Notice Image"
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
