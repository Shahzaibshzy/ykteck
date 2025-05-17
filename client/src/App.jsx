import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useEffect } from "react";
import AOS from "aos";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import Header from "./components/Header";

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
      <Header/>
      <Routes>
        <Route
          path="/"
          element={
           <Home/>
          }
        />
        <Route
          path="/services"
          element={
           <ServicesPage/>
          }
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
