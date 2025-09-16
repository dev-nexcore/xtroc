'use client'
import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // delay for each child
    },
  },
};

function DistributorPage() {
  return (
    <div className="bg-black flex items-start justify-center pt-16 px-8">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        variants={container}
        initial="hidden"
        animate="visible"  // changed from whileInView
      >
        {/* Service Heading */}
        <motion.h1
          variants={fadeInUp}
          className="text-white text-6xl font-bold mb-4"
        >
          Distributor
        </motion.h1>

        {/* Red Border Line */}
        <motion.div
          variants={fadeInUp}
          className="w-96 h-1 mx-auto mb-8 rounded-2xl"
          style={{ backgroundColor: "#D01A1A" }}
        ></motion.div>

        {/* Main Description Text */}
        <motion.h2
          variants={fadeInUp}
          className="text-white text-3xl font-bold mb-8 leading-tight"
        >
          "Expand Your Reach. Become a

        
          <br />
          Distributor."
        </motion.h2>

    

        {/* Bottom Description Text */}
        <motion.p
  variants={fadeInUp}
  className="text-white text-lg leading-relaxed max-w-2xl mx-auto mt-6 text-center font-poppins font-base "
>
  Be part of our journey as we grow. At Xtorc, we’re building strong partnerships with passionate distributors who believe in innovation and long-term impact.  
  <br />
  As an early partner, you’ll gain access to new markets, priority support, and the chance to shape the future of our distribution network right from the start.
</motion.p>
      </motion.div>
    </div>
  );
}

export default DistributorPage;
