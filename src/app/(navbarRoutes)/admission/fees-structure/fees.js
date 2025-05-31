"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import NavigationPages from "@/app/utils/NavigationPages";

const FeeStructure = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const iframeRef = useRef(null);

  const handlePdfSelect = (pdf) => {
    setSelectedPdf(pdf);
  };

  return (
    <>
      <div className="relative w-full h-[30vh] bg-blue-900 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Fees Structures</h1>
      </div>

      <NavigationPages />

      <section className="container max-w-7xl py-12 w-full md:w-[80%] mx-auto gap-4 flex flex-col lg:flex-row">
        {/* PDF Names Section - Aligned to the Start */}
        <div className="lg:w-2/5 mb-4 lg:mb-0 text-left">
          {[
            {
              label: "SITM Fee Structure",
              link: "/pdfs/SITM-Fee-Structure.pdf",
            },
            {
              label: "SSITM Fee Structure",
              link: "/pdfs/SSITM-Fee-Structure.pdf",
            },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handlePdfSelect(item.link)}
              className="text-lg text-black uppercase bg-[#ffc107] border-[#ffc107] text-left py-2 px-4 rounded-lg mb-2 w-full"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* PDF Viewer Section */}
        <div className="lg:w-3/5">
          {selectedPdf ? (
            <div className="relative w-full h-[80vh]">
              <iframe
                ref={iframeRef}
                src={`${selectedPdf}#toolbar=0&navpanes=0`}
                title="Selected PDF"
                className="w-full h-full"
                frameBorder="0"
                style={{
                  pointerEvents: "auto",
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  msUserSelect: "none",
                }}
              ></iframe>
              <div
                className="absolute inset-0 pointer-events-none"
                onContextMenu={(e) => e.preventDefault()}
              ></div>
            </div>
          ) : (
            <p className="text-center text-gray-500">
              Select a document to view the PDF.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default FeeStructure;
