"use client";
import { easeOut, motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutHome = () => {
  return (
    <>
      <div className="bg-black text-white">
        {/* Polygon background using clip-path */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className="bg-[#1B1B1B] md:py-40 py-70"
            style={{
              clipPath: "polygon(0% 0, 100% 25%, 100% 75%, 0% 100%)",
            }}
          >
            {/* About Us */}
            <motion.h2
              variants={item}
              className="text-6xl font-impact text-center"
            >
              About Us
            </motion.h2>
            <div className="w-40 h-1.5 bg-[#D01A1A] mx-auto my-4 rounded"></div>

            <motion.h3
              variants={item}
              className="text-2xl md:text-3xl font-popins text-center mb-6"
            >
              Engineering Excellence Driven by Experience
            </motion.h3>

            <motion.p
              variants={item}
              className="text-center font-popins max-w-3xl mx-auto text-gray-300 leading-relaxed"
            >
              Xtorc was founded with a vision to provide world-class industrial
              tools and services tailored to modern challenges. As a startup
              with over a decade of experience, we're redefining how industries
              achieve precision, efficiency, and safety. All our products are
              proudly manufactured in India and certified to the highest
              standards, including ISO 9001:15000, CE, and ATEX.
            </motion.p>

            <motion.p
              variants={item}
              className="text-center font-popins max-w-3xl mx-auto text-gray-300 leading-relaxed mt-6 "
            >
              At Xtorc, we believe in creating value that extends beyond
              products. Our WIN-WIN-WIN philosophy ensures that our customers
              win, our employees thrive, and our entrepreneurs succeed.
            </motion.p>

            <motion.div variants={item} className="flex justify-center mt-8">
              <button className="bg-[#D01A1A] text-white px-6 py-3 rounded-2xl font-medium hover:bg-red-700 transition">
                Learn more about us
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Why To Choose Section */}
      <motion.div
        className="px-6 py-16 text-white bg-black"
        // style={{
        //   clipPath: "polygon(0 5%, 100% 0%, 100% 95%, 0% 100%)",
        // }}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Text */}
          <motion.h2
          variants={item} className="2xl:text-7xl xl:text-5xl lg:text-4xl font-extrabold text-center md:text-left md:ml-60 text-white ">
            Why To Choose
          </motion.h2>

          {/* Right Images */}
          <motion.div
          variants={item}
           className="relative mt-8 md:mt-0">
            <img
              src="/xtroc.png"
              alt="Xtorc"
              className="md:w-96 w- 24 h-auto md:mr-60 "
            />
            <img
              src="/build.png"
              alt="Build"
              className="2xl:w-48 xl:40 lg:36  w-30 h-auto absolute 2xl:-bottom-48 -bottom-28  2xl:-right-6 xl:right-7 lg:right-10 -right-8 md:mr-42"
            />
          </motion.div>
        </div>

        {/* Red border */}
        <div className="w-40 h-1.5 bg-[#D01A1A] mx-auto my-6 rounded"></div>

        {/* Tagline */}
        <p className="text-center text-3xl md:text-5xl font-impact text-white">
          "The X Factor in Your Industrial Needs"
        </p>
      </motion.div>
    </>
  );
};
export default AboutHome;
