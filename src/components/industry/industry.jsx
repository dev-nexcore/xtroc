"use client";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Container variant for stagger
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

export default function IndustryPage() {
  const industries = [
    { image: "/oil.png", title: "Oil and Gas", alt: "Oil and Gas Industry" },
    { image: "/turbine.png", title: "Turbine and Engineering Construction", alt: "Turbine and Engineering" },
    { image: "/power.png", title: "Power Plants", alt: "Power Plants" },
    { image: "/petrochemical.png", title: "Petrochemical and Fertilizer", alt: "Petrochemical and Fertilizer" },
  ];

  return (
    <div className="overflow-x-hidden bg-black text-white min-h-screen">
      {/* Header Section */}
      <motion.div
        className="max-w-6xl mx-auto px-4 md:px-6 py-12 text-left"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl mb-2 md:-ml-10 text-center md:text-left">
          Industries We Serve
        </motion.h2>

        <motion.div variants={fadeInUp} className="h-1.5 mb-6 bg-red-600 rounded-full mx-auto md:mx-0 md:-ml-10 w-32 md:w-140"></motion.div>

        <div className="flex flex-col md:flex-row justify-between gap-8 relative">
          {/* Left Side Content */}
          <motion.div variants={fadeInUp} className="flex-1 text-left">
            <h3 className="text-4xl mt-4 sm:text-5xl mb-6 md:mb-8 text-center md:text-left md:-ml-10">
              "Custom Solutions for <br />
              Diverse Industries"
            </h3>
            <p className="text-base mt-12 sm:text-lg md:text-xl font-base mb-6 md:mb-4 text-center md:text-left md:-ml-10">
              We are the industry heads and produce the most <br />
              reliable and trendy solutions you are looking for.
            </p>
          </motion.div>

          {/* Right Side Card (DO NOT TOUCH) */}
          <motion.div variants={fadeInUp} className="flex-1 md:flex-none md:w-[360px] relative">
            <div className="bg-gray-900 py-6 md:ml-60 rounded-4xl border-2 border-white shadow-[0_0_0_4px_#D01A1A] w-full max-w-md h-auto mx-auto text-center md:mt-[-70]">
              <p className="text-white text-center text-3xl sm:text-3xl font-semibold leading-relaxed">
                Our tools and <br />
                services cater to a <br /> variety of industrial <br />
                needs.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Industries List Section - Animate Down to Up */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-center mt-10"
      >
        <h2 className="text-5xl mx-8">
          Industries <span className="text-red-600">We Serve</span> Include:
        </h2>
      </motion.div>
    </div>
  );
}
