import React from "react";
import AboutComponent1 from "../Components/About/AboutComponent1";
import AboutComponent2 from "../Components/About/AboutComponent2";
import AboutComponent3 from "../Components/About/AboutComponent3";
import HomeComponent1 from "../Components/Home/HomeComponent1";
import HomeComponent2 from "../Components/Home/HomeComponent2";
import FAQComponent from "../Components/FAQ/FAQComponent";
import FeaturesComponent1 from "../Components/Features/FeaturesComponent1";
import JourneyComponent from "../Components/Journey/JourneyComponent";
import EnquiryComponent from "../Components/Enquiry/EnquiryComponent";

const HomePage = () => {
  return (
    <>
      <HomeComponent1 />
      <HomeComponent2 />
      <AboutComponent1 />
      <AboutComponent2 />
      <AboutComponent3 />
      <FAQComponent />
      <FeaturesComponent1 />
      <JourneyComponent />
      <EnquiryComponent />
    </>
  );
};

export default HomePage;
