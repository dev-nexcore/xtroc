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
  return (
    <div className="overflow-x-hidden bg-black text-white min-h-screen relative">
      {/* ✅ LEFT SIDE CONTENT */}
      <motion.div
        className="max-w-6xl mx-auto px-4 md:px-6 py-12 text-left"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-7xl mb-2 md:-ml-10 text-center md:text-left"
        >
          Industries We Serve
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="h-1.5 mb-6 bg-red-600 rounded-full mx-auto md:mx-0 md:-ml-10 w-32 md:w-140"
        ></motion.div>

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
      </motion.div>

      {/* ✅ RIGHT SIDE CARD RESPONSIVE */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="
          w-full px-2 mt-6
          md:w-[360px] md:absolute md:top-6 md:right-[-33] md:mt-0
          z-50
        "
      >
        <div className="bg-gray-900 py-6 rounded-4xl border-2 border-white shadow-[0_0_0_4px_#D01A1A] w-full h-auto text-center">
          <p className="text-white text-center text-2xl sm:text-3xl font-semibold leading-relaxed">
            Our tools and <br />
            services cater to a <br /> variety of industrial <br />
            needs.
          </p>
        </div>
      </motion.div>

      {/* ✅ INDUSTRIES LIST SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-center mt-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl mx-8 text-center">
          Industries <span className="text-red-600">We Serve</span> Include:
        </h2>
      </motion.div>
    </div>
  );
}
