"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
      setCurrentProductIndex(
        (prevIndex) => (prevIndex + 1) % products.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [products.length]);

  // Parent container for staggered animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.4, // delay between child animations
      },
    },
  };

  // Each child item animation
  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="bg-black px-4 sm:px-6 md:px-8 py-8">
        <div className="max-w-7xl mx-auto md:max-w-screen md:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left side - Product Image */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative w-3/4 sm:w-2/3 md:w-full max-w-md h-auto">
                <img
                  src={products[currentProductIndex].src}
                  alt={products[currentProductIndex].alt}
                  className="w-full h-auto object-contain transition-opacity duration-500"
                  key={currentProductIndex}
                />
              </div>
            </motion.div>

            {/* Right side - staggered text */}
            <motion.div
              className="flex-1 text-center md:text-right md:pl-12"
              variants={container}
              initial="hidden"
              animate="show" // animate immediately on page load
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-7xl font-impact mb-4"
                variants={item}
              >
                <span className="text-red-500 md:ml-30">Perfect Product</span>
              </motion.h1>

              <motion.h2
                className="text-2xl sm:text-4xl md:text-7xl font-impact text-white mb-2 "
                variants={item}
              >
                Unmatched Quality
              </motion.h2>

              <motion.h2
                className="text-2xl sm:text-4xl md:text-7xl font-impact text-white mb-8 "
                variants={item}
              >
                Unbeatable Prices
              </motion.h2>

              <motion.p
                className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed md:text-xl"
                variants={item}
              >
                Welcome to Xtorc, where precision meets innovation. With over 10
                years of expertise, we offer top-tier hydraulic torque wrenches,
                cold cutting machines, and on-site services, all backed by ISO
                9001:15000, CE, and ATEX certifications.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
                variants={item}
              >
                <button className="relative bg-red-500  hover:bg-red-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto md:ml-70 ">
                  Contact Us
                </button>
                <button className=" bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto ">
                  <span>Explore Products</span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
