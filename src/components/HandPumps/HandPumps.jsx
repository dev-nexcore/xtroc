import React from "react";
import { BsDot } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

const HandPumps = () => {
  return (
    <div className="bg-black text-white">
      {/* Header with white background */}
      <div className="bg-white py-6">
        <div className="flex flex-wrap items-center justify-center gap-4 text-black text-center">
          <span className="font-medium">Specialized Tools</span>
          <FaArrowRightLong className="w-4 h-4 mx-4" />
          <span className="font-medium">Hand Pumps & Hoses</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
          {/* Left Section */}
          <div className="space-y-6 flex flex-col items-center lg:items-start">
            {/* Product Image */}
            <div className="relative w-full flex justify-center">
              <div
                className="bg-white rounded-2xl p-6 border-t-[12px] border-r-[12px] border-red-600 
                  rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none
                  h-[250px] sm:h-[300px] md:h-[400px] w-full max-w-[500px] flex items-center justify-center"
              >
                <img
                  src="images/accesories/handpump.png"
                  alt="Hydraulic Nut Splitter"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Download Catalog Button */}
            <div className="flex justify-center lg:justify-start lg:ml-30">
              <button className="bg-white text-red-600 px-6 sm:px-8 py-2 sm:py-3 text-lg sm:text-2xl rounded-2xl font-bold ">
                Download Catalog
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                Hand Pumps & Hoses
              </h1>
              <div className="w-28 sm:w-40 md:w-60 h-1 bg-red-600 rounded-2xl"></div>
            </div>

            {/* Description */}
            <div className="text-base sm:text-lg md:text-2xl p-2 sm:p-4 font-base text-gray-200 leading-relaxed">
              <p>
                Model No.: XHP-1500 Maximum Working Pressure: 1600 Bar Tanks Size:
                1.8 / 2.4 Ltr. The XTORC Two-Stage Hand Pumps come with Standard
                Pressure Gauge; this gives the user precise and safe control over
                the work carried out. The gauge is directly mounted onto the pump
                and is well protected by the specially designed pump lever. - Return
                connections on all pumps - Robust design - Aluminum Tank - Easy and
                simple maintenance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandPumps;
