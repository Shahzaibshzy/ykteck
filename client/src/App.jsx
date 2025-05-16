import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BackgroundVideo from "./components/BackgroundVideo";
import ServicesSection from "./components/services";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true, // only animate once
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BackgroundVideo />
              <Header />
              <ServicesSection />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
