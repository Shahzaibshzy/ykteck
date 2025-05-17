import React from "react";
import Header  from "./Header";
import BackgroundVideo from "../components/BackgroundVideo";
import SplashCursor from "../data/SplashCursor"
import heroContent from "../data/heroContent";
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
        <>
        <SplashCursor/>
          <BackgroundVideo
            title={heroContent.about.title}
            description={heroContent.about.description}
          />
          {/* Your service-specific content here */}
          <Footer />
        </>
      );
};

export default AboutPage;
