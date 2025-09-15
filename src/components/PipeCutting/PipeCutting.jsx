import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const PipeCutting = () => {
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
          <span className="font-medium">Pipe Cutting & Beveling Machines</span>
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
                Pipe Cutting Machine XTCB Series
              </h1>
              <div className=" rounded-2xl h-1 bg-red-600"></div>
            </div>

            {/* Description */}
             <div className="space-y-4 text-2xl text-gray-200 leading-relaxed">
              <p>The Split Frame Machine is ideal for all types of pipe cutting, beveling and end preparation
 operations.The split frame design allows the machine to split in half at the frame and mount around the
 OD of the in-line pipe or fittings for strong, stable clamping.</p>
            </div> 
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 
                  rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none 
                h-[300px]  sm:h-[400px] flex items-center justify-center">
                <img
                  src="/images/insitumachinning/pipe.png"
                  alt="Hydraulic Bolt Tensioner"
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

export default PipeCutting;
