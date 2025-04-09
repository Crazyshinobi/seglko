export const metadata = {
    title: "Technologies Developed - Saroj Educational Group",
    description: "Showcasing groundbreaking innovations and cutting-edge advancements developed through research and expertise at Saroj Institute of Technology & Management.",
  }

export default function TechnologyTransferTable() {
  const technologyTransfers = [
    { srNo: 1, details: "Generation of Concave Surfaces with GUI", faculty: "Dr. Sunil Singh", department: "Mathematics" },
    { srNo: 2, details: "Graphs Theoretic Algorithms for Equations", faculty: "Dr. Sunil Singh", department: "Mathematics" },
    { srNo: 3, details: "Energy Efficient Design of a Milk Processing Plant", faculty: "Dr. Dhirendra Thakural", department: "Mechanical" },
    { srNo: 4, details: "R & D aspect Design concept of 3 – wheeler Vikram", faculty: "Dr. O. P. Tiwari", department: "Mechanical" },
    { srNo: 5, details: "Fubeceh Agenct Anti Technology", faculty: "Prof. (Dr.) S.N Pandyaa", department: "Pharmacy" },
    { srNo: 6, details: "Potential anti HIV Agent-Man rich", faculty: "Prof. (Dr.) S.N. Pandyaa", department: "Pharmacy" },
    { srNo: 7, details: "Laser displacement transducer for accurate displacement measurements", faculty: "Prof. M.U. Khan", department: "Electrical Engineering" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Introductory Text Section */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Innovation & Technology Transfer</h1>
        
        <div className="prose prose-lg text-gray-600 max-w-4xl mx-auto">
          <p className="mb-4">
            Technology plays a transformative role in shaping economies, enhancing global connectivity, 
            and improving quality of life. However, it also presents challenges such as environmental impact, 
            resource depletion, and ethical considerations, particularly in areas like efficiency and bioethics.
          </p>
          <p>
            Saroj Institute of Technology & Management is committed to fostering innovation through dedicated 
            Research and Development (R&D) initiatives. With a strong emphasis on technological advancements, 
            the institute aims to address national and societal needs while striving for global leadership in 
            cutting-edge research. Below are some of the recent innovations and technologies developed or ready 
            for transfer at Saroj Institute of Technology & Management, Lucknow.
          </p>
        </div>
      </div>

      {/* Technology Transfer Table */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full py-2 align-middle">
          <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5 rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-blue-600">
                <tr>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                    Sr. No
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                    Technology Transfer Details
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                    Faculty Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                    Department
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {technologyTransfers.map((item) => (
                  <tr key={item.srNo} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                      {item.srNo}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-700 max-w-xs">
                      {item.details}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                      {item.faculty}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                      {item.department}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}