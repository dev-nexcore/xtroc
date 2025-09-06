"use client";
import React, { useState, useEffect } from "react";
import ContactUs from "@/components/Home/ContactUs";
import Home from "@/components/Home/Home";
import Industries from "@/components/Home/Industries";
import OurProducts from "@/components/Home/OurProducts";
import Footer from "@/layout/footer";
import Navbar from "@/layout/Navbar";
import MobileNavbar from "@/layout/mobileNavbar";
import SplashScreen from "@/components/Home/SplashScreen"; // tumhara splash component
import { motion, AnimatePresence } from "framer-motion";

const Page = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000); // 2 sec
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <AnimatePresence>
        {showSplash ? (
          <SplashScreen key="splash" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="hidden md:block">
              <Navbar />
            </div>
            <div className="md:hidden">
              <MobileNavbar />
            </div>

            <Home />
            <OurProducts />
            <Industries />
            <ContactUs />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Page;
