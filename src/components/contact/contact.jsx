"use client";
import { useState } from "react";
import { Mail, MapPinned, Phone } from "lucide-react";
import ContactSection from "./form";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Your query has been submitted!");
  };

  return (
    <div className="bg-black text-white min-h-screen px-4 sm:px-6 lg:px-12">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto py-12">
        <h2
          className="text-5xl sm:text-6xl lg:text-7xl mb-6"
          style={{ fontFamily: "Impact, sans-serif" }}
        >
          Contact Us
        </h2>
        <div className="h-1.5 mb-6 bg-red-600 rounded-full w-48 sm:w-64 lg:w-80"></div>

        {/* Main Content Row (Text + Info Box) */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left Side - Text */}
          <div className="flex-1">
            <h3
              className="text-2xl sm:text-3xl mb-8"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              Get in Touch with <span className="text-red-600">XTROC</span>
            </h3>
            <p
              className="text-base sm:text-lg lg:text-xl mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Need expert advice or tailored solutions?
              <br />
              We’re here to provide expert advice, tailored solutions, and
              <br />
              unmatched customer support. Contact us today to learn more about
              <br />
              our products and services or to request a personalized quote.
            </p>
          </div>

          {/* Right Side - Contact Info Box */}
          <div className="w-full md:w-96 bg-gray-900 p-6 rounded-2xl border-2 border-white shadow-[0_0_0_4px_#D01A1A]">
            <div className="space-y-4 text-sm sm:text-base">
              <p className="flex items-center gap-3">
                <MapPinned size={40} className="text-red-600" /> B-35, Plot No
                C-39A, TTC Industrial Area, MIDC Industrial Area, Pawne, Navi
                Mumbai, Maharashtra 400710
              </p>
              <p className="flex items-center gap-3">
                <Mail className="text-red-600" /> Enquiry@xtorcind.com
              </p>
              <p className="flex items-center gap-3">
                <Phone className="text-red-600" /> +91-9619561695 / 8108810057
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="flex items-center justify-center gap-6 sm:gap-12 mb-6">
        <div className="w-16 sm:w-20 md:w-24 h-2 bg-red-600 rounded-full"></div>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl"
          style={{ fontFamily: "Impact, sans-serif" }}
        >
          Contact Us
        </h2>
        <div className="w-16 sm:w-20 md:w-24 h-2 bg-red-600 rounded-full"></div>
      </div>

      {/* Contact Form */}
      <ContactSection />

      {/* Map Section */}
      <div className="mt-12 md:mt-20 flex items-center justify-center px-2">
        <div className="w-full md:w-[900px] h-[250px] sm:h-[350px] md:h-[500px] rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7979768111245!2d72.8778437752053!3d19.072617982131263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d250f21f0d%3A0xdb46fbfa10678856!2sNexcore%20Alliance%20LLP!5e0!3m2!1sen!2sin!4v1756550911980!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
