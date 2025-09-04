"use client";
import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div>
      <section className="py-12 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="border border-red-600 rounded-lg p-8">
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone No"
                      className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message - Provide detailed information about your requirements to help you"
                      rows="4"
                      className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none resize-none"
                    ></textarea>
                  </div>
                  <div className="flex items-center mt-4">
                    <button
                      type="button"
                      className="w-[10rem] bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    >
                      Send Message
                    </button>

                    <h1 className="text-lg font-bold text-white pl-5">
                      Request a Call!
                    </h1>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="font-[var(--font-poppins)]"
            >
              {/* Heading with Impact font */}
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="md:text-5xl text-3xl mb-2 text-white font-[var(--font-impact)] inline-block md:ml-5"
              >
                CONTACT US NOW!
              </motion.h2>

              {/* Red Border */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="h-1 bg-red-600 mb-6 w-115 rounded-lg md:ml-5"
              ></motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-lg mb-8 text-white md:ml-5"
              >
                Need expert advice or tailored solutions? Get in touch with
                Xtorc for unmatched support and personalized service.
              </motion.p>

              {/* Contact Details */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <MapPin className="w-6 h-6 text-red-600 mt-1 flex-shrink-0 mb-2 md:ml-3" />
                  <div>
                    <p className="text-white hover:text-red-600 ml-20">
                      Office Address
                      <br />
                      Your Company Address Here
                      <br />
                      City, State, Pin Code
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <Mail className="w-6 h-6 text-red-600 flex-shrink-0 md:ml-3 " />
                  <a
                    href="mailto:ENQUIRY@XTORCIND.COM"
                    className="text-white hover:text-red-600 transition-colors ml-20"
                  >
                    ENQUIRY@XTORCIND.COM
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <Phone className="w-6 h-6 text-red-600 flex-shrink-0 md:ml-3" />
                  <div className="space-y-1 ml-20">
                    <a
                      href="tel:+919619561695"
                      className="block text-white hover:text-red-600 transition-colors"
                    >
                      +91 9619561695 / 8108810057
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
