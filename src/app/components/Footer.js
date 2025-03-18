import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { PiMailboxDuotone } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className=" mt-auto bg-[#fff9f2]"
    style={{
      backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(/FooterBg.png)`,
      backgroundSize: "contain",
      backgroundPosition: "left",
      backgroundRepeat: "no-repeat",
    }}> 
      <div
        className="h-auto lg:flex lg:flex-row px-16 justify-center py-16"
       
      >
        <div className="w-3/12   flex flex-col gap-6 p-6 ">

          <div className="flex flex-col gap-2">
            <div  className="flex flex-row items-center gap-2 ">
              <p className="bg-yellow-400 rounded-xl p-2 text-xl"><CiLocationOn /></p>
            <p>Our Location</p>
            </div>

            <div  className="flex flex-row items-center gap-2">
            <p className="bg-yellow-400 rounded-xl p-2 text-xl"><PiMailboxDuotone/></p>
            <p>Mail Us</p>
            </div>
          </div>


          <div className="flex flex-col gap-2 font-light">
            <h1 className="font-extrabold">Quick Contact</h1>
            <p className="flex items-center gap-2">
              <LuPhone />
              09555699988
            </p>
            <p className="flex items-center gap-2">
              <LuPhone />
              09810054878
            </p>
            <p className="flex items-center gap-2">
              <CiMail /> admission.cell@seglko.org{" "}
            </p>
          </div>{" "}
        </div>
        <div className="w-2/12   text-gray-500 flex flex-col gap-2 p-6">
          <h3 className="text-black text-lg">Programs</h3>
          <p>MBA</p>
          <p>BBA</p>
          <p>MCA</p>
          <p>M.Tech </p>
          <p>BCA</p>
          <p>B.Tech</p>
          <p>M.Pharma</p>
          <p>D.Pharma</p>
          <p>B.Pharma</p>
          <p>Polytechnic</p>
        </div>

        <div className="w-2/12   flex flex-col gap-20 text-gray-500 p-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-black text-lg">Admissions</h3>
            <p>Admission Process</p>
            <p>Eligibility Criteria</p>
            <p>Our Courses</p>
            <p>Fee Structure</p>
          </div>

         
        </div>

        <div className="w-2/12   flex flex-col gap-2 text-gray-500 p-6">
            <h3 className="text-black text-lg">Campus</h3>
    
            <p>Lecture Halls</p>
            <p>Library</p>
            <p>Gallery</p>
            <p>Computer Lab</p>
            <p>Cafeteria</p>
            <p>Sports</p>
            <p>Campus</p>
            <p>Transport</p>
            <p>Hostel</p>
            <p>Medical</p>
          </div>

        <div className="w-3/12  text-gray-500 flex flex-col justify-between gap-20 py-6">
          <div className="flex flex-col gap-3 ">
            <h3 className="text-black text-lg">Quick Links</h3>
            <p> → Saroj Institute of Technology & Management</p>
            <p>→ Shivdan Singh Institute of Technology & Management</p>
            <p>→ Saroj Institute of Management & Technology</p>
            <p>→ Lucknow Institute Of Pharmacy</p>
            <p>→ Saroj College Of Pharmacy</p>
          </div>
         
          <div className="flex flex-col gap-1">
          <hr  className="w-full h-[1px] bg-green-400 border-none"/> 
            <p>→ Privacy Policy</p>
            <p>→ Terms and Conditions</p>
          </div>
        </div>
      </div>
      <div className="container text-center text-white bg-black py-4">
        <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
