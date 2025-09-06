"use client";
import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const Product = () => {
  return (
    <div className="bg-black">
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-6 py-12 text-left bg-black"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col md:flex-row justify-between gap-8 relative">
          {/* Left Content */}
          <motion.div variants={fadeInUp} className="flex-1 text-left">
            <h2
              className="text-4xl sm:text-5xl md:text-7xl mb-6 md:-ml-0 text-center md:text-left text-white"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              Products
            </h2>

            <div className="h-1.5 mb-6 bg-red-600 rounded-full mx-auto md:mx-0 md:w-90"></div>

            <h3
              className="text-3xl sm:text-4xl font-semi mb-6 md:mb-8 text-center md:text-left text-white"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              Precision Tools for Your <br /> Toughest Challenges
            </h3>

            <p
              className="text-base sm:text-lg md:text-2xl font-base mb-6 md:mb-4 text-center md:text-left text-white leading-relaxed md:mt-10"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              At XTORC, we provide cutting-edge solutions designed to meet the demands of modern
              industries. From bolting systems to cold cutting tools, our products are engineered
              for precision, safety, and efficiency.
              <br />
              <br />
              Whether you need hydraulic torque wrenches, bolt tensioning solutions, or in-situ
              machining tools, we are your trusted partner for delivering innovative, industry-ready
              tools that perform under the most challenging conditions.
            </p>
          </motion.div>

          {/* Right Side Card */}
          <motion.div
            variants={fadeInUp}
            className="relative md:absolute top-[-5] md:-right-60 bg-gray-900 p-6 rounded-4xl border-2 border-white shadow-[0_0_0_4px_#D01A1A] w-full max-w-sm md:max-w-lg overflow-hidden "
          >
            <div className="text-center">
              <h4 className="text-xl sm:text-3xl font-semibold mb-2 text-white">Optimized &</h4>
              <h4 className="text-xl sm:text-3xl font-semibold mb-4 text-white">Industry-Ready</h4>
              <h4 className="text-xl sm:text-3xl font-semibold text-white">Solutions</h4>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Product;
