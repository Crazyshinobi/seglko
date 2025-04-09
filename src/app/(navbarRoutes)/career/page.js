'use client';

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import NavigationPages from "@/app/utils/NavigationPages";
import { BeatLoader } from "react-spinners";

// Temporary job data
const tempJobs = [
  {
    _id: '1',
    profile: 'Assistant Professor',
    subject: 'Computer Science',
    createdAt: '2024-04-01T12:00:00Z',
  },
  {
    _id: '2',
    profile: 'Lab Assistant',
    subject: 'Physics',
    createdAt: '2024-03-28T12:00:00Z',
  },
  {
    _id: '3',
    profile: 'Admin Executive',
    subject: 'Administration',
    createdAt: '2024-03-15T12:00:00Z',
  },
];

export default function CareerPage() {
  const router = useRouter();
  const [loading] = useState(false);
  const [error] = useState(null);

  const handleApplyClick = (job) => {
    localStorage.setItem('selectedJob', JSON.stringify(job));
    router.push('/career/application');
  };

  return (
    <>
      <div className="w-full h-[26vh] md:h-[40vh] lg:h-80">
        <img
          src="/PlacementBanner.PNG"
          alt="Placement Banner"
          className="w-full h-full object-fit"
        />
      </div>

      <NavigationPages />

      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Current Job Openings</h1>

        {loading && <BeatLoader color="#3498db" size={15} />}
        {error && <p className="text-red-500">{`Error: ${error}`}</p>}
        {!loading && !error && tempJobs.length === 0 && (
          <p>No job openings at the moment.</p>
        )}

        <ul className="space-y-4">
          {tempJobs.map((job) => (
            <div
              key={job._id}
              className="border p-4 rounded-lg shadow-md flex flex-row items-center"
            >
              <div className="w-5/6">
                <h3 className="text-xl font-semibold">Profile: {job.profile}</h3>
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
