import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Xep700= () => {
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
          <span className="font-medium">XEP 700</span>
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
                    XEP 700




              </h1>
              <div className="rounded-2xl h-1 bg-red-600"></div>
            </div>

            {/* Description */}
 <div className="space-y-4 text-lg text-gray-200 leading-relaxed">
               Hydraulic Pump with Three Phase Electric Motor
 ATEX Certified Version CE Ex li 2 G K T3
 ATEX Zone-2 Class T3 Gas Group IIA<br/>
 • Three Phase Electric Motor 1.1 kW 440V <br/>
 • Axial-piston pump mod<br/>
 • 3/2 solenoid valve 24DC and inversion valve
 Weight
 Kg (Lbs)
 36 (79)<br/>
 • Oil flow 9.4 Litres/min @ 0-70 Bar (2.48 g/min@1015 PSI) and
 0.9 Litres/min @ 700 Bar (0.23 g/min@ 10000 PSI)<br/>
 • Pressure regulator on P Line to set the torque value
 Adjustable Relief Valve on return line
 Pressure Gauge DN 100 range 0-1000 Bar (14500 PSI)<br/>
 • Reservoir Capacity 10 Litres (2.64 Gallon)<br/>
 • Recommended Hydraulic Oil ISO 32 and above Also available 
in Air Operated Type (PAE-ATEX)<br/>
 • The pump includes remote control and electric box

            </div> 
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
                  src="images/Power-Pack/XEP700.png"
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

export default Xep700;
