"use client";
import { motion } from "framer-motion";

export default function IndustryPage() {
  const industries = [
    {
      image: "/oil.png",
      title: "Oil and Gas",
      alt: "Oil and Gas Industry",
    },
    {
      image: "/turbine.png",
      title: "Turbine and Engineering Construction",
      alt: "Turbine and Engineering",
    },
    {
      image: "/power.png",
      title: "Power Plants",
      alt: "Power Plants",
    },
    {
      image: "/petrochemical.png",
      title: "Petrochemical and Fertilizer",
      alt: "Petrochemical and Fertilizer",
    },
  ];

  return (
    <div className="overflow-x-hidden bg-black text-white min-h-screen">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 md:px-6 py-12 text-left"
      >
        <h2
          className="text-4xl sm:text-5xl md:text-7xl mb-2 md:-ml-10 text-center md:text-left"
          style={{ fontFamily: "Impact, sans-serif" }}
        >
          Industries We Serve
        </h2>
        <div className="h-1.5 mb-6 bg-red-600 rounded-full mx-auto md:mx-0 md:-ml-10 w-32 md:w-140"></div>

        <div className="flex flex-col md:flex-row justify-between gap-8 relative">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-1 text-left"
          >
            <h3
              className="text-4xl mt-4 sm:text-5xl mb-6 md:mb-8 text-center md:text-left md:-ml-10"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              "Custom Solutions for <br />Diverse Industries"
            </h3>
            <p
              className="text-base mt-12 sm:text-lg md:text-xl font-base mb-6 md:mb-4 text-center md:text-left md:-ml-10"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              We are the industry heads and produce the most <br />
              reliable and trendy solutions you are looking for.
            </p>
          </motion.div>

          {/* Right Side Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-1 md:flex-none md:w-[360px] relative"
          >
            <div
  className="
    bg-gray-900 py-6 rounded-2xl border-2 border-white shadow-[0_0_0_4px_#D01A1A] 
    md:absolute md:top-[-55] md:right-[-130] md:w-[320px] md:h-auto 
    w-full max-w-md h-auto mx-auto text-center
  "
>
              <div className="space-y-4 text-center text-xl sm:text-base">
                <p className="text-white text-center text-3xl sm:text-3xl font-semibold leading-relaxed">
                  Our tools and <br />services cater to a <br /> variety of industrial <br />needs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Industries List Section */}
        <section className="pt-26 px-4">
          <div className="max-w-6xl mx-auto">
            <div
              className="flex items-center justify-center mt-10"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              <h2 className="text-4xl mx-8">
                Industries <span className="text-red-600">We Serve</span> Include:
              </h2>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
