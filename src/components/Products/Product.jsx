"use client";
import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Container variant for stagger
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Product = () => {
  return (
    <div className="bg-black relative overflow-hidden">
      <motion.div
        className="w-full mx-auto px-4 md:px-0 py-12 bg-black relative"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row gap-10 relative md:px-30 pl-5">
          
          {/* Left Side Content (Heading + Tagline + Paragraph) */}
          <motion.div variants={fadeInUp} className="flex-1 text-left">
            <h2
              className="text-4xl sm:text-5xl md:text-7xl mb-6 text-white"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              Products
            </h2>

            <div className="h-1.5 mb-5 bg-red-600 rounded-full md:w-70"></div>

            <h3
              className="text-3xl sm:text-4xl font-semi mb-6 text-white"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              Precision Tools for Your <br /> Toughest Challenges
            </h3>

            {/* Paragraph niche aur center aligned */}
            <p
              className="text-base sm:text-lg md:text-2xl font-base text-white leading-relaxed text-center md:text-left mt-8"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              At XTORC, we provide cutting-edge solutions designed to meet the
              demands of modern industries. From bolting systems to cold cutting
              tools, our products are engineered for precision, safety, and
              efficiency.
              <br />
              <br />
              Whether you need hydraulic torque wrenches, bolt tensioning
              solutions, or in-situ machining tools, we are your trusted partner
              for delivering innovative, industry-ready tools that perform under
              the most challenging conditions.
            </p>
          </motion.div>

          {/* Right Side Card - Absolute Positioned */}
<motion.div
  variants={fadeInUp}
  className="
    w-full px-2 mt-6
    md:w-[360px] md:absolute md:top-[50] md:-translate-y-1/2
    md:right-40 md:translate-x-50
    z-50
  "
>
  <div className="bg-gray-900 py-6 rounded-4xl border-2 border-white shadow-[0_0_0_4px_#D01A1A] w-full h-auto text-center">
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
