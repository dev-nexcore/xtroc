"use client";
import { motion } from "framer-motion";

export default function DownloadSection() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="bg-black text-white py-10 px-6 text-center"
      initial="hidden"
      // whileInView="show"
      // viewport={{ once: true }}
      animate="show"
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.h2
        className="text-6xl font-base mb-4"
        style={{ fontFamily: "Impact, sans-serif" }}
        variants={itemVariants}
      >
        Downloads
      </motion.h2>

      <motion.div
        className="w-80 h-1 bg-red-600 mx-auto mb-8"
        variants={itemVariants}
      ></motion.div>

      <motion.h3
        className="text-4xl font-base mb-14"
        style={{ fontFamily: "Impact, sans-serif" }}
        variants={itemVariants}
      >
        Download Our Product Catalog
      </motion.h3>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-14 mb-10"
        variants={itemVariants}
      >
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition">
          Download Catalog
        </button>
      </motion.div>

      {/* Description */}
      <motion.p
        className="max-w-3xl mx-auto text-sm sm:text-lg leading-relaxed text-gray-200 font-poppins"
        variants={itemVariants}
      >
        Get detailed information about our products and services. Download our
        comprehensive catalog to explore the full range of Xtorc’s industrial
        tools and services, including specifications, features, and pricing.
      </motion.p>
    </motion.section>
  );
}
