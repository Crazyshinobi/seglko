import Link from "next/link";
import Head from "next/head";

export default function FeeStructure() {
  return (
    <div className=" bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>College Fee Structure</title>
        <meta
          name="description"
          content="Compare fee structures of different colleges"
        />
      </Head>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          College Fee Structure
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Saroj Institute Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
          
              <a className="block"
                href="/pdfs/SITM-Fee-Structure.pdf#toolbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Saroj Institute of Technology and Management
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Click to view detailed fee structure
                  </p>
                  <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    View Fees
                  </div>
                </div>
              </a>
          </div>

          {/* Shivdan Singh Institute Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
          
              <a className="block"
              href="/pdfs/SSITM-Fee-Structure.pdf#toolbar=0"
              target="_blank"
              rel="noopener noreferrer"
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Shivdan Singh Institute of Technology and Management
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Click to view detailed fee structure
                  </p>
                  <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    View Fees
                  </div>
                </div>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}
