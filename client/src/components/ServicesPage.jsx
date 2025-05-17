import React from "react";
import BackgroundVideo from "../components/BackgroundVideo";
import heroContent from "../data/heroContent";
import Footer from "../components/Footer";
import Header from "../components/Header"

const ServicesPage = () => {
  return (
    <>
    <Header/>
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
