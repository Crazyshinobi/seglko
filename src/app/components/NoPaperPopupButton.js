"use client";

import { useEffect, useState } from "react";

const PopupForm = ()=> {
  const [showForm, setShowForm] = useState(false);
  const widgetId = "c4686ca3db50effadb9f24fc7ca22401";
  const formUrl = `https://widgets.in8.nopaperforms.com/${widgetId}?embed=popup`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const toggleForm = () => setShowForm(!showForm);

  return (
    <>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg w-full max-w-2xl h-[80vh]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold" style={{ color: "#FF0033" }}>
                Enquiry Form
              </h2>
              <button
                onClick={toggleForm}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <iframe
              src={formUrl}
              className="w-full h-full border-0"
              title="Enquiry Form"
              loading="lazy"
            />
          </div>
        </div>
      )}

      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-[10000]">
        <button
          onClick={toggleForm}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-l-lg shadow-lg
                   transition-all duration-300 ease-in-out cursor-pointer"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
          aria-label="Enquire Now"
        >
          Enquire Now
        </button>
      </div>
    </>
  );
}

export default PopupForm;