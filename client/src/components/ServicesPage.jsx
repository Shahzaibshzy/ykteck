import React from "react";
import BackgroundVideo from "../components/BackgroundVideo";
import heroContent from "../data/heroContent";
import SplashCursor from "../data/SplashCursor"
import Footer from "../components/Footer";



const ServicesPage = () => {
  return (
    <>
    <SplashCursor/>
      <BackgroundVideo
        title={heroContent.services.title}
        description={heroContent.services.description}
      />
      {/* Your service-specific content here */}
      <Footer />
    </>
  );
};

export default ServicesPage;
