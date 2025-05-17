import React from "react";
import BackgroundVideo from "../components/BackgroundVideo";
import heroContent from "../data/heroContent";
import SplashCursor from "../data/SplashCursor";
import Footer from "../components/Footer";
import Carousel from "../data/Carousel";

const ServicesPage = () => {
  return (
    <div >
      <SplashCursor />
      <BackgroundVideo
        title={heroContent.services.title}
        description={heroContent.services.description}
        extraContent={
          <div style={{ height: "400px", position: "relative" }}>
            <Carousel
              baseWidth={400}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
        }
      />
      {/* Your service-specific content here */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
