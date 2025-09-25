"use client";
import React, { useState, useEffect } from "react";
import ContactUs from "@/components/Home/ContactUs";
import Home from "@/components/Home/Home";
import Industries from "@/components/Home/Industries";

import Footer from "@/layout/footer";
import Navbar from "@/layout/Navbar";
import MobileNavbar from "@/layout/mobileNavbar";
import SplashScreen from "@/components/Home/SplashScreen"; // tumhara splash component
import { motion, AnimatePresence } from "framer-motion";

import AboutHome from "@/components/Home/AboutHome";
import OurProducts from "@/components/Home/OurProducts";
import WhatsappLogo from "@/components/WhatsappLogo/WhatsappLogo";
import ChatBoat from "@/components/ChatBoat/ChatBoat";

export const metadata = {
  title: "XTORC | Hydraulic Torque Wrenches, Bolt Tensioners & Industrial Bolting Tools",
  description:
    "XTORC is a leading supplier of hydraulic torque wrenches, flange facing machines, pipe cutting machines, bolt tensioners, and industrial bolting tools for oil, gas, power, marine, and construction industries in India.",
  keywords: [
    "Hydraulic Torque Wrench",
    "Flange Facing Machine",
    "Pipe Cutting Machine",
    "Bolt Tensioners",
    "Industrial Bolting Tools",
    "Controlled Bolting Equipment",
    "Hydraulic Torque Tools",
    "Flange Facing Equipment",
    "Best hydraulic torque wrench for industrial use",
    "Portable flange facing machine for on-site machining",
    "Pipe cutting machine for heavy-duty applications",
    "Bolt tensioners for high-pressure pipelines",
    "Industrial bolting tools supplier in India",
    "Flange facing equipment for oil & gas industry",
    "Hydraulic torque tools for flange assembly",
    "Flange facing machine rental services",
    "Flange facing services near me",
    "Hydraulic torque wrench calibration services",
    "On-site bolting services for industrial plants",
    "Pipe cutting and beveling services",
    "Flange facing machine rental in India",
    "Hydraulic torque wrench repair services",
    "Oil and Gas bolting tools",
    "Petrochemical flange facing equipment",
    "Power plant pipe cutting machines",
    "Marine industry bolting tools",
    "Industrial bolting tools for construction",
    "Flange facing machines for pharmaceutical plants"
  ],
  openGraph: {
    title: "XTORC | Hydraulic Torque Wrenches & Industrial Bolting Tools",
    description:
      "Explore high-quality hydraulic torque wrenches, flange facing machines, bolt tensioners, and pipe cutting machines at XTORC. Trusted by oil, gas, marine, power, and construction industries.",
    url: "https://xtorcind.com/",
    siteName: "XTORC",
    images: [
      {
        url: "/og-image.jpg", // 👈 put this image inside /public
        width: 1200,
        height: 630,
        alt: "XTORC Hydraulic Torque Tools and Industrial Bolting Equipment",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XTORC | Hydraulic Torque Wrenches & Industrial Bolting Tools",
    description:
      "Buy hydraulic torque wrenches, flange facing machines, pipe cutting machines, and bolt tensioners from XTORC. Trusted supplier for industrial projects in India.",
    images: ["/og-image.jpg"],
  },
};


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
             
            </div>
            <div className="md:hidden">
              <MobileNavbar />
            </div>
            <WhatsappLogo/>
            <ChatBoat/>
            <Home />
            <AboutHome/>
            <OurProducts/>
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
