import React from "react";
import { BsDot } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

const FlangeSpreaders = () => {
  return (
    <div className="bg-black text-white">
      {/* Header */}
      <div className="bg-white py-6">
        <div className="flex items-center justify-center gap-4 text-black">
          <span className="font-medium">Specialized Tools</span>
          <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
          <span className="font-medium">Flange Spreaders</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="relative">
              <div
                className="ml-4 bg-white rounded-2xl p-6 border-t-[14px] border-r-[14px] border-red-600 
                rounded-tl-3xl rounded-br-2xl rounded-tr-none rounded-bl-none
                h-[400px] w-[450px] flex items-center justify-center"
              >
                <img
                  src="images/accesories/flangespreaders.png"
                  alt="Hydraulic Flange Spreader"
                  className="w-full h-[350px] object-contain"
                />
              </div>
            </div>

            {/* Download Catalog Button */}
            <div className="-ml-12 flex justify-center">
              <button className="bg-white text-red-600 px-8 py-3 text-2xl rounded-2xl font-bold transition-colors">
                Download Catalog
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-8">
            {/* Title */}
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Flange Spreaders
              </h1>
              <div className="w-40 h-1 bg-red-600 rounded-2xl"></div>
            </div>

            {/* Description */}
            <p className="text-2xl p-4 font-base text-gray-200 leading-relaxed">
          XTORC Hydraulic Vertical Lifting Wedge XVWL has been developed as an easy to use or a cost effective way to find solutions to heavy lifting where minimum clearance is available. It will lift objects vertically where an access gap of 3/8" (9.5mm) or more is available. The HVWL-10 will lift an object fast, with a secure and fast lifting force of 16 Tons per tool.
            </p>

            {/* Two Column Section */}
            <div className="grid grid-cols-1 -ml-150 mt-16 md:grid-cols-2 gap-12">
              {/* Special Features */}
              <div>
                <h2 className="text-2xl font-bold text-red-500 mb-3">
                  Special Features:
                </h2>
                <ul className="space-y-2 text-gray-200 text-lg">
                  <li className="flex items-start"><BsDot className="mt-1" /> Access gap of only 3/8&quot; (9.5mm) needed.</li>
                  <li className="flex items-start"><BsDot className="mt-1" /> 3/4&quot; (19.0mm) of vertical lift</li>
                 
                   <li className="flex items-start"><BsDot className="mt-1" />   available from each step</li>
                  <li className="flex items-start"><BsDot className="mt-1" /> Max. height of 50mm on 4th step</li>
                  <li className="flex items-start"><BsDot className="mt-1" /> Automatic spring return retraction</li>
                  <li className="flex items-start"><BsDot className="mt-1" /> Interlocking first step ensures safe hold</li>
                   <li className="flex items-start"><BsDot className="mt-1" /> hold</li>
                  <li className="flex items-start"><BsDot className="mt-1" /> No slippage due to locking — will lift in a straight <br />vertical place</li>
                </ul>
              </div>

              {/* Kit Options */}
              <div>
                <h2 className="text-2xl  font-bold text-red-500 mb-3">
                  Kit Options:
                </h2>
                <ul className="space-y-2 text-gray-200 text-lg">
                  <li className="flex items-start"><BsDot className="mt-1" /> MINI KIT</li>
                  <li className="flex items-start"><BsDot className="mt-1" /> 1 x Hydraulic Vertical Lifting Wedge Assembly II x</li>
                  <li className="flex items-start"><BsDot className="mt-1" /> Safety Block</li>
                  <li className="flex items-start"><BsDot className="mt-1" /> 1 x Stepped Block</li>
                  <li className="flex items-start"><BsDot className="mt-1" /> 1 x Instruction Manual</li>
                </ul>
              </div>
            </div>

            {/* Standard Kit Full Width */}
            <div>
              <h2 className="text-2xl -ml-150 font-bold text-red-500 mb-3">
                STANDARD KIT
              </h2>
              <p className="-ml-150 text-gray-200 text-lg">l1 x Hydraulic Vertical Lifting Wedge Assembly. <br />
l1 x 10,000 psi (700 Bar) Two Stage Hydraulic Hand Pump. <br /> l1 x 10,000
psi (700 Bar) Hydraulic Hose Length 6 feet. <br />
l1 x Safety Block. <br />
l1 x Stepped Block. <br />
l1 x Instruction Manual l1 x Carry Case</p>
        
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FlangeSpreaders;
