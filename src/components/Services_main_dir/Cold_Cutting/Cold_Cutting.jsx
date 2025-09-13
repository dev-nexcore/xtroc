import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ColdCutting = () => {
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
          <span className="font-medium">Cold Cutting & Beveling</span>
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
                Cold Cutting & Beveling
              </h1>
              <div className=" rounded-2xl h-1 bg-red-600"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
               XTORC offers high-precision Pipe Cold Cutting services on-site, providing tailored solutions for a wide range of pipe material grades and thicknesses. Our state-of-the-art cold cutting technology allows us to safely and accurately cut pipes without generating heat, minimizing the risk of damaging sensitive materials or creating hazardous conditions.In Oil and Gas projects, especially during shutdowns, precision is paramount. Pipe Cold Cutting is an essential service for maintenance, repairs, and modifications, where traditional cutting methods may pose safety risks or lead to unwanted thermal effects. Our cold cutting services ensure that pipe integrity is maintained, avoiding warping, thermal expansion, or the potential for compromising the strength and structure of critical piping systems.Whether working with carbon steel, stainless steel, or exotic alloys, XTORC's team is equipped to handle diverse materials and pipe thicknesses. Our on-site cold cutting solutions are fast, efficient, and highly accurate, ensuring minimal disruption to operations while keeping projects on track.Trust XTORC for reliable, safe, and efficient Pipe Cold Cutting services that meet the demanding requirements of Oil and Gas projects, shutdowns, and maintenance operations. Our expertise ensures your pipes are cut to perfection, ensuring project success and long-term operational efficiency.
              </p>
            </div>
          </div>

          {/* Right Section */}
             <div className="space-y-6">
  {/* Product Image */}
  <div className="relative flex justify-center">
    <div
      className="bg-white rounded-2xl p-2 border-t-12 border-r-12 border-red-600 
        rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none 
        w-full md:w-[550px] max-w-[500px] h-[400px] sm:h-[500px] md:h-[500px] flex items-center justify-center"
    >
      <img
        src="pipeCold.jpg"
        alt="Hydraulic Bolt Tensioner"
        className="w-[500px] h-full"
      />
    </div>
  </div>

  {/* Download Catalog Button */}
  <div className="flex justify-center">
    <button
      className="text-red-600 px-6 sm:px-8 py-2 sm:py-3 rounded-2xl text-lg sm:text-2xl font-bold hover:bg-red-700 hover:text-white transition-colors"
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

export default ColdCutting;
