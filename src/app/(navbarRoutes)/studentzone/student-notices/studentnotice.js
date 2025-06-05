"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NavigationPages from "@/app/utils/NavigationPages";
import { FiDownload, FiEye } from "react-icons/fi";

export default function StudentNotice() {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/notice`
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

  const handleDownload = (imageUrl, title) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `${title.replace(/\s+/g, '_')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="w-full h-[26vh] md:h-[40vh] lg:h-80">
        <img
          src="/StudentNoticeBanner.PNG"
          alt="Student Notice Banner"
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
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-cols-12 bg-gray-100 p-4 font-semibold text-gray-700">
              <div className="col-span-1">#</div>
              <div className="col-span-5">Notice Title</div>
              <div className="col-span-3">Date</div>
              <div className="col-span-3 text-center">Actions</div>
            </div>

            <div className="divide-y divide-gray-200 max-h-[70vh] overflow-y-auto">
              {notices.map((notice, index) => (
                <div key={notice._id} className="grid grid-cols-12 p-4 items-center hover:bg-gray-50">
                  <div className="col-span-1 text-gray-500">{index + 1}</div>
                  <div className="col-span-5 font-medium text-gray-800">
                    {notice.title}
                  </div>
                  <div className="col-span-3 text-sm text-gray-500">
                    {formatDateTime(notice.createdAt)}
                  </div>
                  <div className="col-span-3 flex justify-center space-x-2">
                    <button
                      onClick={() => {
                        setSelectedNotice(notice);
                        setIsModalOpen(true);
                      }}
                      className="flex items-center gap-1 bg-blue-50 text-blue-600 px-3 py-1 rounded text-sm hover:bg-blue-100 transition"
                    >
                      <FiEye size={14} /> View
                    </button>
                    <button
                      onClick={() => handleDownload(notice.image, notice.title)}
                      className="flex items-center gap-1 bg-green-50 text-green-600 px-3 py-1 rounded text-sm hover:bg-green-100 transition"
                    >
                      <FiDownload size={14} /> Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal for viewing notice */}
      {isModalOpen && selectedNotice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[5000]">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {selectedNotice.title}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Posted on: {formatDateTime(selectedNotice.createdAt)}
              </p>
              <div className="flex justify-center">
                <img
                  src={selectedNotice.image || "/placeholder.png"}
                  alt={selectedNotice.title}
                  className="max-w-full max-h-[70vh] object-contain border"
                />
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => handleDownload(selectedNotice.image, selectedNotice.title)}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  <FiDownload size={16} /> Download Notice
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}