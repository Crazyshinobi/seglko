'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NavigationPages from "@/app/utils/NavigationPages";
import { BeatLoader } from "react-spinners";

export default function CareerPage() {
  const router = useRouter();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchJobs() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/job`); 
        if (!res.ok) {
          throw new Error(`Failed to fetch jobs: ${res.status}`);
        }
        const data = await res.json();
        console.log("Jobs API response:", data);
        setJobs(data.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  const handleApplyClick = (job) => {
    localStorage.setItem("selectedJob", JSON.stringify(job));
    router.push("/career/application");
  };

  return (
    <>
      {/* <div className="w-full h-[26vh] md:h-[40vh] lg:h-80">
        <img
          src="/PlacementBanner.PNG"
          alt="Placement Banner"
          className="w-full h-full object-fit"
        />
      </div> */}
      <div className="relative w-full h-[40vh] bg-blue-900 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">CAREER</h1>
      </div>

      <NavigationPages />

      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Current Job Openings</h1>

        {loading && <BeatLoader color="#3498db" size={15} />}
        {error && <p className="text-red-500">{`Error: ${error}`}</p>}
        {!loading && !error && jobs.length === 0 && (
          <p>No job openings at the moment.</p>
        )}

        <ul className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="border p-4 rounded-lg shadow-md flex flex-row items-center"
            >
              <div className="w-5/6">
                <h3 className="text-xl font-semibold">Profile: {job.name}</h3>
                <p className="text-black font-bold">Subject: {job.subject}</p>
                <p className="text-gray-500">
                  Posted on:{" "}
                  {new Date(job.createdAt).toLocaleDateString("en-GB")}
                </p>
              </div>

              <div className="w-2/12 flex justify-end">
                <button
                  onClick={() => handleApplyClick(job)}
                  className="text-blue-500 hover:underline"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
