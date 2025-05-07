import Header from "./components/Header";
import BackgroundVideo from "./components/BackgroundVideo";
import ServicesSection from "./components/services";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true, // only animate once
    });
  }, []);

  return (
    <div className="scroll-smooth">
      <BackgroundVideo />
      <Header />
      <ServicesSection />
      <Footer />
    </ div>
  );
}

export default App;
