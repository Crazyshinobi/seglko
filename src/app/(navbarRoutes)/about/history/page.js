import NavigationPages from "@/app/utils/NavigationPages";
import React from "react";


export const metadata = {
    title : "SEG History | Saroj Educational Group",
    description : "Discover the history of Saroj Educational Group (SEG) and how it has evolved over the years.",
  };

const page = () => {
    
  return (
    <>
      <div className=" w-full h-[26vh] md:h-[40vh] lg:h-80 ">
        <img
          src="/HistoryBanner.PNG"
          alt="History of Seg Banner"
          className="w-full h-full object-fit"
        />
      </div>

      <div>
        <NavigationPages />
      </div>

      <div className=" py-16  px-6 md:px-16 lg:px-32 space-y-16 "
        style={{
            backgroundImage: `url(/HistoryBg.svg)`,
           backgroundPosition: "left",
          }}
      >
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-8">
        The Legacy of Saroj Educational Group (SEG)
      </h1>
      <p className="text-lg md:text-xl text-gray-700 text-center max-w-4xl mx-auto mb-12">
        A journey marked by dedication, growth, and a commitment to educational excellence that has shaped thousands of lives and continues to lead the way for future leaders.
      </p>

      {/* History Sections */}
      <div className="">
        {/* Section 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10 flex flex-col gap-4">
          <h2 className="text-3xl font-semibold text-blue-800">Humble Beginnings — 1997</h2>
          <p className="text-gray-700 text-lg">
            The journey began in 1997 with the foundation of the **Shivdan Singh Institute of Technology & Management (SSITM)** in Aligarh. Driven by a vision to provide quality technical education, this marked the inception of SEG's legacy.
          </p>
          <p className="text-gray-700 text-lg">
            What started as a modest endeavor soon flourished into a dynamic institution, setting a benchmark in technical and management education.
          </p>
        </div>
        {/* ARROW 1  */}
          <div className="py-2 w-1/3 justify-center  flex ">  <img src="/HistoryArrow.png" alt="Arrow " width={180} className=" "/></div>

        {/* Section 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10 flex flex-col gap-4">
          <h2 className="text-3xl font-semibold text-blue-800">Expanding Horizons — 2001</h2>
          <p className="text-gray-700 text-lg">
            In 2001, SEG expanded its influence with the establishment of the **Saroj Institute of Technology & Management (SITM)** in Lucknow. This milestone amplified SEG’s impact, attracting students from various regions seeking quality education.
          </p>
          <p className="text-gray-700 text-lg">
            The institution's growth symbolized its commitment to academic excellence, creating a nurturing environment for students to thrive.
          </p>
        </div>

           {/* ARROW 2  */}

        <div className="py-2 w-full justify-center flex ">  <img src="/HistoryArrow1.png" alt="Arrow 1" width={180} className="  "/></div>


        {/* Section 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10 flex flex-col gap-4">
          <h2 className="text-3xl font-semibold text-blue-800">Recognized Excellence — 2010s</h2>
          <p className="text-gray-700 text-lg">
            As the years progressed, SEG earned numerous accolades and recognitions, including **AICTE approval**, **AKTU affiliation**, and **NBA accreditation**. These achievements were a testament to SEG’s dedication to maintaining high standards in education.
          </p>
          <p className="text-gray-700 text-lg">
            The group diversified its programs, catering to various disciplines like engineering, pharmacy, management, and IT, nurturing versatile professionals.
          </p>
        </div>

           {/* ARROW 3  */}
        <div className="py-2 w-3/5 justify-center  flex ">  <img src="/HistoryArrow2.png" alt="Arrow 2" width={180} className="  "/></div>


        {/* Section 4 */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10 flex flex-col gap-4">
          <h2 className="text-3xl font-semibold text-blue-800">Shaping Futures — Present</h2>
          <p className="text-gray-700 text-lg">
            Today, SEG stands as a distinguished institution, known for its research-driven approach, innovative practices, and commitment to holistic development. The institution continues to foster a culture of excellence, shaping future leaders.
          </p>
          <p className="text-gray-700 text-lg">
            With state-of-the-art facilities, experienced faculty, and a focus on innovation, SEG is committed to shaping a brighter future for its students and the nation.
          </p>
        </div>
      </div>

      {/* Closing Remark */}
      <div className="text-center mt-12">
        <p className="text-gray-800 text-xl font-semibold max-w-3xl mx-auto">
          SEG's legacy is not just a story of growth but a testament to its commitment to transforming lives through education.
        </p>
      </div>
    </div>

    </>
  );
};

export default page;
