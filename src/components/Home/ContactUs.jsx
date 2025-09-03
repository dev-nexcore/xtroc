import React from 'react'
import { MapPin, Mail, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <div><section className="py-12 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
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
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">CONTACT US NOW!</h2>

              {/* Red Border */}
              <div className="w-24 h-0.5 bg-red-600 mb-6"></div>

              <p className="text-lg mb-8 text-white">
                Need expert advice or tailored solutions? Get in touch with
                Xtorc for unmatched support and personalized service.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white hover:text-red-600 ml-20">
                      Office Address
                      <br />
                      Your Company Address Here
                      <br />
                      City, State, Pin Code
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-red-600 flex-shrink-0 " />
                  <a
                    href="mailto:ENQUIRY@XTORCIND.COM"
                    className="text-white hover:text-red-600 transition-colors ml-20"
                  >
                    ENQUIRY@XTORCIND.COM
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-red-600 flex-shrink-0 " />
                  <div className="space-y-1 ml-20">
                    <a
                      href="tel:+919619561695"
                      className="block text-white hover:text-red-600 transition-colors"
                    >
                      +91 9619561695 / 8108810057
                    </a>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></div>
  )
}
export default ContactUs
