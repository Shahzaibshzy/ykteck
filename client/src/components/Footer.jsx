import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import IconCircle from "../helpers/IconCircle";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setErrorMessage("Something went wrong");
    } else if (!emailPattern.test(email)) {
      setErrorMessage("Wrong email address");
    } else {
      setErrorMessage("");
      // Handle subscription logic here
    }
  };

  return (
    <footer  id="footer" className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div
          className="flex justify-center items-center mb-10"
          data-aos="fade-up"
        >
          <div className="w-full lg:w-2/3">
            <form
              onSubmit={handleSubscribe}
              className="flex items-center w-full"
            >
              <input
                type="email"
                placeholder="Enter your email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-16 p-3 rounded-l-lg text-white
                 bg-gray-800  outline-none"
              />
              <button
                type="submit"
                className="bg-custom-color 
                      text-white px-10 py-2 text-start font-medium rounded-r-sm
                    hover:bg-gray-800 hover:border-[1px] hover:border-custom-blue
                    duration-300 transition-colors h-16 whitespace-nowrap"
              >
                SUBSCRIBE NOW
              </button>
            </form>
            {errorMessage && (
              <div className="mt-2 px-3 text-start text-xl text-white">
                {errorMessage}
              </div>
            )}
          </div>
        </div>
        <div
          className="border-t
         border-gray-700 pt-4 flex flex-col lg:flex-row justify-between items-center text-sm"
        ></div>

        {/* Footer Content */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-28 mb-8 mt-28"
          data-aos="fade-up"
        >
          {/* About Us */}
          <div>
            <h3 className="text-2xl font-semibold mb-7">About Us</h3>
            <p className="mb-4 text-gray-400 text-xl ">
              Driven by a passion for technology and a commitment to excellence,
              we specialize in custom software development, mobile and web
              applications, and end-to-end IT services. Whether you're a startup
              looking to launch your first app or an established enterprise
              aiming to streamline operations, our solutions are tailored to
              meet your unique goals and challenges.
            </p>
            <div className="flex space-x-6 ml-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/yktechsolutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconCircle>
                  <FaFacebookF className="text-xl" />
                </IconCircle>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/yktechsolutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconCircle>
                  <FaInstagram className="text-xl" />
                </IconCircle>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@yktechsolutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconCircle>
                  <FaYoutube className="text-xl" />
                </IconCircle>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/102501800"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconCircle>
                  <FaLinkedinIn className="text-xl" />
                </IconCircle>
              </a>
            </div>
          </div>

          {/* contact us */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-4">
                <IconCircle>
                  <HiLocationMarker className="text-xl" />
                </IconCircle>
                <span>
                  1208 New Territory Blvd, Sugar Land, Texas 77479, USS
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <IconCircle>
                  <FaPhoneAlt className="text-xl" />
                </IconCircle>
                <span>+1 (713) 377-1715</span>
              </li>
              <li className="flex items-center space-x-4">
                <IconCircle>
                  <FaEnvelope className="text-xl" />
                </IconCircle>
                <span>customersuccess@yk-techsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div
          className="border-t
         border-gray-700 pt-4 mt-24 flex flex-col lg:flex-row justify-between items-center text-sm"
        >
          <ul className="flex space-x-4 mt-4 lg:mt-0">
            <li>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
