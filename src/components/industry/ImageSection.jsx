"use client";
import React from "react";
import { motion } from "framer-motion";

const ImageSection = () => {
  const industries = [
    {
      image: "/oil.png",
      title: "Oil and Gas",
      alt: "Oil and Gas Industry",
      hoverText:
        "Delivering high-precision tools for high-pressure operations.",
    },
    {
      image: "/turbine.png",
      title: "Turbine and Engineering Construction",
      alt: "Turbine and Engineering",
      hoverText: "Innovative solutions for heavy duty projects.",
    },
    {
      image: "/power.png",
      title: "Power Plants",
      alt: "Power Plants",
      hoverText:
        "Providing reliable maintenance solutions to ensure seamless functionality.",
    },
    {
      image: "/petrochemical.png",
      title: "Petrochemical and Fertilizer",
      alt: "Petrochemical and Fertilizer",
      hoverText: "Offering robust tools for safe and efficient operations.",
    },
  ];

  // Card animation with delay groups
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: i < 2 ? 0 : 0.8, // first 2 together, then next 2 together
      },
    }),
  };

  return (
    <div>
      <section className="bg-black py-1 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Industry Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={cardVariants}
                custom={index} // pass index to variants
              >
                <div className="relative group overflow-hidden ">
                  <img
                    src={industry.image}
                    alt={industry.alt}
                    className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center p-6 group">
                    {/* Background overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-500 bg-[#B40000]" />

                    {/* Text */}
                    <p className="relative text-lg font-semibold text-center leading-relaxed text-transparent group-hover:text-white transition-colors duration-500">
                      {industry.hoverText}
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mt-4">
                  {industry.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ImageSection;
