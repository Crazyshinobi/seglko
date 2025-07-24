import React from "react";
// import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import AnimatedArrow from "./components/AnimatedArrow";
import PlacementSection from "./components/PlacementSection";
import CoursesOffered from "./components/CoursesOffered";
import LatestNews from "./components/LatestNews";
import NewsAndEvents from "./components/NewsAndEvents";
import Happenings from "./components/Happenings";
import OurInstitutions from "./components/OurInstitutions";
import LifeSeg from "./components/LifeSeg";
import WantMoreDetails from "./components/WantMoreDetails";
import ChatBot from "./components/Chatbot";
import CompaniesTieUps from "./components/CompanyTieUps";
import GoogleAdsScript from "./components/GoogleAdsScript";
import EmployeeOfTheMonth from "./components/EmployeeOfMonth";
export const metadata = {
  title: "Saroj Education Group | Best Engineering and Pharmacy College",
  description: "Saroj Education Group is one of the best engineering and pharmacy colleges in Lucknow, India. We offer a wide range of undergraduate and postgraduate courses in engineering, pharmacy, management, and applied sciences. Our mission is to provide quality education and foster innovation among students.",
};

const Home = () => {
  return (
    <>
      {/* <ChatBot/> */}
      <GoogleAdsScript/>
      <AboutSection />
      <LatestNews />
      <CompaniesTieUps/>
      <WantMoreDetails/>
      <PlacementSection />
      <CoursesOffered />
      <NewsAndEvents />
      <EmployeeOfTheMonth/>
      <Happenings />
      <OurInstitutions />
      <LifeSeg />
    </>
  );
};
export default Home;
