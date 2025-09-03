import React from "react";
// import { ChevronRight } from 'lucide-react';
import { BsDot } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

const HydraulicNut = () => {
  return (
    <div className="bg-black text-white">
      {/* Header with white background */}
      <div className="bg-white py-4">
        <div className="flex items-center justify-center gap-2 text-black">
          <span className="font-medium">Specialized Tools</span>
          <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
          <span className="font-medium">Hydraulic Nut Splitters</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="relative">
              <div
                className="bg-white rounded-2xl p-6 border-t-8 border-r-8 border-red-600 
                  rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none
                  h-[320px] flex items-center justify-center"
              >
                <img
                  src="light.png"
                  alt="Hydraulic Nut Splitter"
                  className="w-full h-auto object-contain rotate-[-28deg]"
                />
              </div>
            </div>

            {/* Download Catalog Button */}
            <div className="flex justify-center">
              <button className="bg-white text-red-600 px-8 py-3 text-2xl rounded-2xl font-bold transition-colors">
                Download Catalog
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Hydraulic Nut Splitters
              </h1>
              <div className="w-120 rounded-2xl h-1 bg-red-600"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                XTORC's Light Weight Hydraulic Nut Splitters are used in
                applications that involve corrosion; it can be used to remove
                corroded or seized nuts fast and safely. The light weight option
                helps the user to apply the product to lower sized bolts.
              </p>
              <p>
                XTORC's offers Weight Hydraulic Nut Splitters for a range of Hex
                size 0.37" to 2.95". Our product is designed for operator
                comfort that fits tight spaces and it cuts through the hardest
                of nuts.
              </p>
            </div>

            {/* Application Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-red-600">Application:</h2>

              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start gap-2">
                  {/* <span className="text-red-600 mt-2">•</span> */}
                  <span>
                    • The fast, sure and safe method to cut and remove seized
                    nuts
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  {/* <span className="text-red-600 mt-2">•</span> */}
                  <span>• Compact and ergonomic angled head design</span>
                </li>
                <li className="flex items-start gap-2">
                  {/* <span className="text-red-600 mt-2">•</span> */}
                  <span>• Heavy duty cutting tool, can be re-ground</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HydraulicNut;
