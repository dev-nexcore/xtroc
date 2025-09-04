"use client";
import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-white font-[var(--font-poppins)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4 pl-2 sm:pl-4">
            <div className="w-28 h-12 sm:w-32 sm:h-16 flex items-center">
              <img
                src="/xtorc.png"
                alt="Xtorc Logo"
                className="w-[17rem] h-[6rem] sm:w-[20rem] sm:h-[7rem]"
              />
            </div>
            <p className="text-sm sm:text-base leading-relaxed max-w-xs">
              Xtorc was founded with a vision to provide world-class industrial
              tools and services tailored to modern challenges.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-3 ">
<h3 className="text-2xl font-semibold relative inline-block pb-1 md:ml-7">
  Company
  <span className="absolute left-0 bottom-0 w-full h-[2px] flex">
    {/* White Half */}
    <span className="w-1/2 h-full bg-white"></span>

    {/* Red Half with Animation */}
    <motion.span
      className="w-1/2 h-full bg-red-600"
      initial={{ width: "0%" }}
      whileInView={{ width: "50%" }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    />
  </span>
</h3>
            <div className="space-y-2">
              {["about us", "products", "carrier", "event", "services"].map(
                (item, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <FaAngleDoubleRight className="text-red-500 text-xl  flex-shrink-0 " />
                    <a
                      href="#"
                      className="text-xs sm:text-sm hover:text-gray-300 transition-colors"
                    >
                      {item}
                    </a>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold relative inline-block pb-1 md:ml-10">
  Products
  <span className="absolute left-0 bottom-0 w-full h-[2px] flex">
    {/* White Half */}
    <span className="w-1/2 h-full bg-white"></span>

    {/* Red Half with Animation */}
    <motion.span
      className="w-1/2 h-full bg-red-600"
      initial={{ width: "0%" }}
      whileInView={{ width: "50%" }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    />
  </span>
</h3>
            <div className="space-y-2">
              {[
                "hydraulic torque wrenches",
                "bolt tensioning solutions",
                "hydraulic equipment",
                "pipe cutting & beveling machines",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <FaAngleDoubleRight className="text-red-500 text-xl flex-shrink-0" />
                  <a
                    href="#"
                    className="text-xs sm:text-sm hover:text-gray-300 transition-colors"
                  >
                    {item}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold relative inline-block pb-1 md:ml-18">
  Contact
  <span className="absolute left-0 bottom-0 w-full h-[2px] flex">
    {/* White Half */}
    <span className="w-1/2 h-full bg-white"></span>

    {/* Red Half with Animation */}
    <motion.span
      className="w-1/2 h-full bg-red-600"
      initial={{ width: "0%" }}
      whileInView={{ width: "50%" }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    />
  </span>
</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <p className="text-xs sm:text-sm leading-relaxed">
                  B-35, Plot No C-39A, TTC Industrial Area, MIDC Industrial
                  Area, Pawne, Navi Mumbai, Maharashtra 400710
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                <a
                  href="mailto:enquiry@xtorcind.com"
                  className="text-xs sm:text-sm hover:text-gray-300 transition-colors break-all"
                >
                  enquiry@xtorcind.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                <a
                  href="tel:+919619561695"
                  className="text-xs sm:text-sm hover:text-gray-300 transition-colors"
                >
                  +91-9619561695 / 8108810057
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-white py-2">
        <div className="container mx-auto px-4">
          <p className="text-center text-black text-xs sm:text-sm">
            ©2025 | Developed by{" "}
            <span className="text-red-600 font-medium">Code4Bharat</span> | All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
