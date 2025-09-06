"use client";
import { motion } from "framer-motion";

const SplashScreen = () => {
  return (
    <motion.div
      key="splash"
      className="flex items-center justify-center h-screen w-screen bg-black z-50 fixed top-0 left-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src="xtroc_india.png"
        alt="Splash Logo"
        className="w-120 h-120 object-contain"
      />
    </motion.div>
  );
};

export default SplashScreen;
