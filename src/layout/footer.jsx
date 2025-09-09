"use client";
import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { path } from "framer-motion/client";

const Footer = () => {
  return (
    <footer className="bg-black text-white font-[var(--font-poppins)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4 pl-2 sm:pl-4">
            <div className="w-60 h-20 sm:w-72 sm:h-24 flex items-center">
              <img
                src="/xtorc.png"
                alt="Xtorc Logo"
                className="w-[24rem] h-[8rem] sm:w-[26rem] sm:h-[9rem] object-contain"
              />
            </div>

            <p className="text-sm sm:text-base leading-relaxed max-w-xs">
              Xtorc was founded with a vision to provide world-class industrial
              tools and services tailored to modern challenges.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center md:ml-8 ">
              <div className="flex space-x-6">
              {/* Facebook */}
              <a
                href="#"
                className="w-8 h-8  sm:w-10 sm:h-10 rounded flex items-center justify-center transition-transform hover:scale-110"
                aria-label="Facebook"
              >
                <img
                  src="/facebook.png"
                  alt="Facebook"
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded flex items-center justify-center transition-transform hover:scale-110"
                aria-label="Instagram"
              >
                <img
                  src="/instagram.png"
                  alt="Instagram"
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded flex items-center justify-center transition-transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <img
                  src="/linkedin.png"
                  alt="LinkedIn"
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </a>
            </div>

            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4 pl-5 md:pt-10 md:pl-20">
            <h3 className="text-2xl font-semibold relative inline-block pb-1 md:ml-7">
              Company
              <span className="absolute left-0 bottom-0 w-full h-[2px] flex">
                <span className="w-1/2 h-full bg-white"></span>
                <motion.span
                  className="w-1/2 h-full bg-red-600"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "50%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </span>
            </h3>
            <div className="space-y-3.5 ">
              {[
                { name: "about us", path: "/aboutus" },
                { name: "products", path: "/product" },
                { name: "carrier", path: "#" },
                { name: "event", path: "#" },
                { name: "services", path: "/services" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <FaAngleDoubleRight className="text-red-500 text-xl  flex-shrink-0 md:mr-4" />
                  <a
                    href={item.path}
                    className="text-xs sm:text-sm hover:text-gray-300 transition-colors"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-6 md:pt-10">
            <h3 className="text-2xl font-semibold relative inline-block pb-1 md:ml-10">
              Products
              <span className="absolute left-0 bottom-0 w-full h-[2px] flex">
                <span className="w-1/2 h-full bg-white"></span>
                <motion.span
                  className="w-1/2 h-full bg-red-600"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "50%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </span>
            </h3>
            <div className=" space-y-6">
              {[
                {name:"hydraulic torque wrenches", path:"/hydraulictorque"},
                {name:"bolt tensioning solutions", path:"/multistagebolt"},
                {name:"hydraulic equipment", path:"/handPumps"},
                {name:"pipe cutting & beveling machines", path:"/pipeCutting"}
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2  ">
                  <FaAngleDoubleRight className="text-red-500 text-xl flex-shrink-0 md:mr-4" />
                  <a
                    href={item.path}
                    className="text-xs sm:text-sm hover:text-gray-300 transition-colors"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-7 md:pt-10">
            <h3 className="text-2xl font-semibold relative inline-block pb-1 md:ml-18">
              Contact
              <span className="absolute left-0 bottom-0 w-full h-[2px] flex">
                <span className="w-1/2 h-full bg-white"></span>
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
                <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0 md:mr-4" />
                <p className="text-xs sm:text-sm leading-relaxed">
                  B-35, Plot No C-39A, TTC Industrial Area, MIDC Industrial
                  Area, Pawne, Navi Mumbai, Maharashtra 400710
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-red-600 flex-shrink-0 md:mr-4" />
                <a
                  href="mailto:enquiry@xtorcind.com"
                  className="text-xs sm:text-sm hover:text-gray-300 transition-colors break-all"
                >
                  enquiry@xtorcind.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-red-600 flex-shrink-0 md:mr-4" />
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
