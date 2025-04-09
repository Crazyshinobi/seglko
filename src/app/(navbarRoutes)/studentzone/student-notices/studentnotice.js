"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NavigationPages from "@/app/utils/NavigationPages";

export default function StudentNotice() {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/notice`
        );
        const sorted = [...(response.data.data || [])].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setNotices(sorted);
        if (sorted.length > 0) setSelectedNotice(sorted[0]);
      } catch (err) {
        setError("Failed to load notices.");
      } finally {
        setLoading(false);
      }
    };
    fetchNotices();
  }, []);

  const formatDateTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
    <div className=" w-full h-[26vh] md:h-[40vh] lg:h-80 ">
      <img
        src="/polytechnic.PNG"
        alt="polytechnic Banner"
        className="w-full h-full object-fit"
      />
    </div>

    <div>
      <NavigationPages />
    </div>
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
        Notices
      </h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading notices...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Side: Full Notice Image */}
          {selectedNotice && (
            <div className="lg:col-span-2 bg-white border rounded shadow-sm gap-3 p-4 flex flex-col justify-center items-center">
              <img
                src={selectedNotice.image || "/placeholder.png"}
                alt={selectedNotice.title}
                className="w-full max-h-[85vh] object-contain border"
              />
              <p className="text-blue-800">Title : {selectedNotice.title}</p>
            </div>
          )}

          {/* Right Side: Other Notices List */}
          <div className="bg-white p-4 border border-gray-200 rounded-sm shadow-sm h-fit">
            <h3 className="font-semibold mb-3 border-b pb-2">Recent Notices</h3>
            <ul className="space-y-4 max-h-[85vh] overflow-y-auto pr-2">
              {notices
                .filter((n) => n._id !== selectedNotice?._id)
                .map((notice) => (
                  <li
                    key={notice._id}
                    onClick={() => setSelectedNotice(notice)}
                    className="flex gap-4 cursor-pointer hover:bg-gray-100 p-2 rounded border-l-4 border-transparent hover:border-blue-500"
                  >
                    <img
                      src={notice.image || "/placeholder.png"}
                      alt={notice.title}
                      className="w-16 h-20 object-cover border rounded"
                    />
                    <div className="flex flex-col justify-between">
                      <p className="text-xs text-gray-500">
                        {formatDateTime(notice.createdAt)}
                      </p>
                      <p className="font-semibold text-sm">{notice.title}</p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
