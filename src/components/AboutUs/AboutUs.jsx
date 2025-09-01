"use client";
import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-black text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* First Section */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Left Side Content */}
          <div className="flex-1">
            {/* About Us Header */}
            <div className="mb-6 lg:mb-8 mt-4 lg:mt-8">
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">About Us</h2>
              <div
                className="w-72 sm:w-24 lg:w-[400px] h-1.5 bg-red-600 rounded-lg"
                style={{ backgroundColor: "#D01A1A" }}
              ></div>
            </div>

            {/* Engineering Excellence Title */}
            <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-tight">
              Engineering Excellence,
              <br />
              Driven by Experience
            </h3>

            {/* First Paragraph */}
            <p className="text-white text-base sm:text-lg leading-relaxed">
              At Xtorc, we believe in creating value that extends beyond
              products. Our WIN-WIN-WIN philosophy ensures that our customers
              win, our employees thrive, and our entrepreneurs succeed.
            </p>
          </div>

          {/* Right Side Image + Paragraph */}
          <div className="flex-1 flex flex-col items-center">
            <div className="flex justify-center mb-4 lg:mb-6">
              <img
                src="xtroc_india.png"
                alt="Xtorc India"
                className="max-w-full h-auto w-full max-w-sm lg:max-w-md"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />

              <div className="hidden w-64 sm:w-80 h-48 sm:h-60 bg-gray-800 border-2 border-gray-600 rounded-lg items-center justify-center">
                <span className="text-gray-400 text-sm sm:text-base">Image: /xtorc_india.png</span>
              </div>
            </div>

            {/* Second Paragraph now under the image */}
            <p className="text-white text-base sm:text-lg leading-relaxed max-w-lg text-center px-2">
              was founded with a vision to provide world-class industrial tools
              and services tailored to modern challenges. With over a decade of
              industry expertise, we're redefining how industries achieve
              precision, efficiency, and safety. Our journey has been fueled by
              a commitment to quality and innovation, backed by ISO 9001:15000,
              CE, and ATEX certifications.
            </p>
          </div>
        </div>

        {/* Cool Facts Section */}
        <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-12">
          {/* Left Side - Some Cool Facts */}
          <div className="flex-1 flex flex-col items-start gap-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full">
              <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold whitespace-nowrap">Some Cool Facts</h3>
              <div
                className="w-full sm:w-40 lg:w-80 h-1.5 rounded-lg mt-2 sm:mt-0"
                style={{ backgroundColor: "#D01A1A" }}
              ></div>
            </div>

            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2" style={{ color: "#D01A1A" }}>
              Numbers Speak For Themselves
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;