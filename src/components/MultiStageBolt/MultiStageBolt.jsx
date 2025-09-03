import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const MultiStageBoltTensioners = () => {
  return (
    <div className="bg-black text-white">
      {/* Header with white background */}
      <div className="bg-white py-4">
        <div className="flex items-center justify-center gap-2 text-black">
          <span className="font-medium">Bolt Tensioning Solutions</span>
          <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
          <span className="font-medium">Multi Stage Bolt Tensioners</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Multi Stage Bolt Tensioners
              </h1>
              <div className="w-120 rounded-2xl h-1 bg-red-600"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                Engineered to meet the challenges of critical industrial bolting applications, Multi Stage Hydraulic Bolt Tensioners are ideal for environments requiring higher load capacities or tighter access than conventional tensioners can handle. Our MST series units expand the range of solutions and provide effective tensioning end results.
              </p>
            </div>

            {/* Bullet Points */}
            <div className="space-y-3 text-gray-200">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-white  flex-shrink-0 p-3">•</span>
                  <span>
                    Delivering concentrated hydraulic tension directly along the stud axis, our MST series eliminates the risk of twist-induced thread or galling damage.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white  flex-shrink-0 p-3">•</span>
                  <span>
                    Achieve high repeatability and multi-bolt operations, shortening downtime through rapid tool reset translation which propels the piston back to start position instantly after pressure is released.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white  flex-shrink-0 p-3">•</span>
                  <span>
                    Experience direct pressure-to-load translation and automated piston advancement that tightly regulates bolt elongation, ensuring every cycle yields a reliably uniform clamping force.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white  flex-shrink-0 p-3">•</span>
                  <span>
                    Our high-precision machining and tightly controlled manufacturing tolerances delivers flawless tensioner to stud alignment ensuring pressure-stable and leak-free performance.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white  flex-shrink-0 p-3">•</span>
                  <span>
                    Sealed load cells enclosing enhanced puller bars blocks out dust, moisture, and abrasive conditions ensuring reliable performance in harsh, vibration-prone environments.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white  flex-shrink-0 p-3">•</span>
                  <span>Suitable for Bolt sizing from 30 to 48 mm Dia.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white  flex-shrink-0 p-3">•</span>
                  <span>Max. Tensioning Load up to 1,231 KN.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 border-t-8 border-r-8 border-red-600 
                  rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none
                  h-[320px] flex items-center justify-center">
                <img
                  src="multistagebolt.png"
                  alt="Multi Stage Bolt Tensioner"
                  className="w-full h-[19rem] object-contain"
                />
              </div>
            </div>

            {/* Download Catalog Button */}
            <div className="flex justify-center">
              <button 
                className="text-red-600 px-8 py-3 rounded-2xl text-2xl font-bold hover:bg-red-700 transition-colors"
                style={{ backgroundColor: '#ffffff'}}
              >
                Download Catalog
              </button>
            </div>

            {/* Features Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold" style={{ color: '#D01A1A' }}>
                Features:
              </h2>

              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-white  flex-shrink-0 p-3">•</span>
                  <span>Working Pressure 1500Bar / 21755 psi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white  flex-shrink-0 p-3">•</span>
                  <span>Fast, simple, accurate, reliable and ideal tightening and bolting tool for Wind</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white  flex-shrink-0 p-3">•</span>
                  <span>Turbine Small, compact, can impart large tensioning load</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white  flex-shrink-0 p-3">•</span>
                  <span>Durable composite material seal kit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white  flex-shrink-0 p-3">•</span>
                  <span>Clear over stroke alarming mark</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white  flex-shrink-0 p-3">•</span>
                  <span>Optional gear drive allows the user rotate the nut quickly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStageBoltTensioners;