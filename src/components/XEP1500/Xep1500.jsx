import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Xep1500= () => {
  return (
    <div
      className="bg-black text-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Header with white background */}
      <div className="bg-white py-6">
        <div className="flex items-center justify-center gap-2 text-black">
          <span className="font-medium px-2">Bolt Tensioning Solutions</span>
          <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
          <span className="font-medium">XEP 1500</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Title with Impact font */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl px-10 text-center font-base text-white mb-2" style={{ fontFamily: 'Impact, sans-serif' }}>
                    XEP 1500




              </h1>
              <div className="rounded-2xl h-1 bg-red-600"></div>
            </div>

            {/* Description */}
            {/* <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                A hydraulic torque wrench is a power tool designed to exert torque on a fastener to achieve proper tightening or loosening of a connection through the use of hydraulics. A torque wrench is applied to the nut either directly or in conjunction with an impact socket. Hydraulic torque wrenches apply a predetermined, controlled amount of torque to a properly lubricated fastener.
              </p>
              <p>
                The hydraulic torque wrench was invented in early 1970s. The concept of a hydraulic powered torque wrench was first introduced on the market sometime in the early 1960s in a primitive form, and several key advances have been developed by manufacturers since that time which provided major advancements in the technology and usability of the tools far beyond the original concept tool.
              </p>
              <p>
                Newer tools offer benefits such as lighter weights, smaller nose radius dimensions for fitting into tight spaces, use of exotic alloys, actuation triggers on the tool itself, multi-position reaction members, 360° × 360° hose swivels, and the ability to run multiple tools simultaneously from a single power pack.
              </p>
              <p>
                There are two types of hydraulic torque wrenches: square drive and low profile. Depending on the application, one or the other will be the best tool to use.
              </p>
              <p>
                The main characteristics of a hydraulic torque wrench which set it apart from other powered wrenches of similar function are that (1) it must generate torque using only hydraulic means (2) it must be self ratcheting, and (3) it must include an accurate method of determining the amount of torque applied.
              </p>
            </div> */}
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="relative">
              <div
                className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 
                  rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none
                  sm:h-[400px] h-[200px] flex items-center justify-center text-black">
                <img
                  src="images/Power-Pack/XEP1500.png"
                  alt=" image Not provided"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Download Catalog Button */}
            <div className="flex justify-center">
              <button
                className="text-red-600 px-8 py-3 rounded-2xl text-2xl font-bold hover:bg-red-700 hover:text-white transition-colors"
                style={{ backgroundColor: "#ffffff" }}
              >
                Download Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Xep1500;
