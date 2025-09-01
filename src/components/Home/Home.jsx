"use client"
import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  const products = [
    { id: 0, src: "/product1.png", alt: "Product 1" },
    { id: 1, src: "/product2.png", alt: "Product 2" },
    { id: 2, src: "/product3.png", alt: "Product 3" },
    { id: 3, src: "/product4.png", alt: "Product 4" },
  ];

  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prevIndex) => 
        (prevIndex + 1) % products.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="bg-black px-4 sm:px-6 md:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left side - Product Image Carousel */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-3/4 sm:w-2/3 md:w-full max-w-md h-auto">
                <img
                  src={products[currentProductIndex].src}
                  alt={products[currentProductIndex].alt}
                  className="w-full h-auto object-contain transition-opacity duration-500"
                  key={currentProductIndex}
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-1 text-center md:text-left md:pl-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="text-red-500">Perfect Product</span>
              </h1>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                Unmatched Quality
              </h2>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
                Unbeatable Prices
              </h2>

              <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
                Welcome to Xtorc, where precision meets innovation. With over 10
                years of expertise, we offer top-tier hydraulic torque wrenches,
                cold cutting machines, and on-site services, all backed by ISO
                9001:15000, CE, and ATEX certifications.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto">
                  Contact Us
                </button>
                <button className="bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                  <FaWhatsapp className="w-6 h-6 text-green-500" />
                  <span>Explore Products</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="relative pt-6 sm:pt-8">
        <div className="bg-[#1B1B1B] bg-opacity-25 px-4 sm:px-8 py-8 relative">
          <div className="max-w-4xl mx-auto text-center relative z-10 pt-4 pb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              About Us
            </h2>

            {/* Red horizontal border */}
            <div className="w-16 sm:w-24 md:w-32 h-1.5 bg-red-500 mx-auto mb-8 rounded-lg"></div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-8">
              Engineering Excellence Driven by Experience
            </h3>

            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
              Xtorc was founded with a vision to provide world-class industrial
              tools and services tailored to modern challenges. As a startup
              with over a decade of experience, we're redefining how industries
              achieve precision, efficiency, and safety. All our products are
              proudly manufactured in India and certified to the highest
              standards, including ISO 9001:15000, CE, and ATEX.
            </p>

            <p className="text-gray-300 text-base sm:text-lg mb-10 leading-relaxed">
              At Xtorc, we believe in creating value that extends beyond
              products. Our WIN-WIN-WIN philosophy ensures that our customers
              win, our employees thrive, and our entrepreneurs succeed.
            </p>

            <button className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn more about us
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-black px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-6">
            {/* Center - Why To Choose Text and Xtorc Image */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
                Why To Choose
              </h2>
              <img
                src="xtroc_india.png"
                alt="Xtorc India"
                className="h-10 sm:h-12 object-contain"
              />
              <img
                src="build.png"
                alt="Build Quality"
                className="h-16 sm:h-20 md:h-24 object-contain"
              />
            </div>
          </div>

          {/* Red horizontal border */}
          <div className="w-16 sm:w-20 h-1 bg-red-500 mx-auto mb-4 rounded-xl"></div>

          {/* Tagline */}
          <div className="text-center px-2">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              "The X Factor in Your Industrial Needs"
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;