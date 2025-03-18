import React from 'react'

export default function LifeSeg() {
  return (
    <div  className='w-full bg-[#fff9f2]'>
    <div className='max-w-7xl mx-auto text-center py-4'>
      <h1 className='text-5xl'>Life @ SEG</h1>   

      <div className="flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src="/workshop.jpeg"
            alt="Card Image"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-[#354b87]"> White Soft Info conducted a workshop</h2>
            <p className="text-gray-600 mt-2">
            White Soft Info conducted a career guidance & placement readiness workshop for BTech, MBA, MCA, and Diploma students in the conference hall.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src="/Magazine.jpeg"
            alt="Card Image"
            className="w-full h-64 object-fill"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-[#354b87]">Inauguration of Saroj Times</h2>
            <p className="text-gray-600 mt-2">
            our Honourable Chairman, despite his demanding schedule, officially released the first issue. He highly appreciated its quality and extended his congratulations to all for their invaluable contributions and support.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src="/CarrerCounselling.jpeg"
            alt="Card Image"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-[#354b87]"> A Career counseling session and an expert talk</h2>
            <p className="text-gray-600 mt-2">
            The Expert Talk was delivered by Mr. Satish Anand, CEO of Sikho India Group, providing valuable industry insights and career guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
     
    </div>    

   
    </div>
  )
}
