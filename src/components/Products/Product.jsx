"use client";
import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 }, // start 40px below
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // delay between child animations
    },
  },
};

const Product = () => {
  return (
    <div className="bg-black">
      <motion.div
        className="max-w-6xl mx-auto px-4 md:px-6 py-12 text-left bg-black"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // triggers when 20% is visible
      >
        {/* Title */}
        <motion.h2
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-7xl mb-6 md:-ml-10 text-center md:text-left text-white"
          style={{ fontFamily: "Impact, sans-serif" }}
        >
          Products
        </motion.h2>

        {/* Red Line */}
        <motion.div
          variants={fadeInUp}
          className="h-1.5 mb-6 bg-red-600 rounded-full mx-auto md:mx-0 md:-ml-10 w-32 md:w-140"
        ></motion.div>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left Content */}
          <motion.div variants={fadeInUp} className="flex-1 text-left">
            <h3
              className="text-2xl sm:text-3xl font-semi mb-6 md:mb-8 text-center md:text-left md:-ml-10 text-white"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              Precision Tools for Your <br /> Toughest Challenges
            </h3>
            <p
              className="text-base sm:text-lg md:text-xl font-base mb-6 md:mb-4 text-center md:text-left md:-ml-10 text-white"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              At XTORC, we provide cutting-edge solutions designed to meet the
              <br />
              demands of modern industries. From bolting systems to cold cutting
              <br />
              tools, our products are engineered for precision, safety, and
              efficiency.
              <br />
              <br />
              Whether you need hydraulic torque wrenches, bolt tensioning
              solutions,
              <br />
              or in-situ machining tools, we are your trusted partner for
              delivering
              <br />
              innovative, industry-ready tools that perform under the most
              <br />
              challenging conditions.
            </p>
          </motion.div>

          {/* Solutions Box */}
          <motion.div
            variants={fadeInUp}
            className="relative translate-x-10 md:absolute top-10 md:-right-16 
             bg-gray-900 p-6 rounded-2xl border-2 border-white 
             shadow-[0_0_0_4px_#D01A1A] mx-auto md:mx-0 max-w-md w-full overflow-hidden"
          >
            <div className="text-center">
              <h4 className="text-xl sm:text-3xl font-semibold mb-2 text-white">
                Optimized &
              </h4>
              <h4 className="text-xl sm:text-3xl font-semibold mb-4 text-white">
                Industry-Ready
              </h4>
              <h4 className="text-xl sm:text-3xl font-semibold text-white">
                Solutions
              </h4>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Product;
