// import React from "react";
// import { FaArrowRightLong } from "react-icons/fa6";

// const Xep1500= () => {
//   return (
//     <div
//       className="bg-black text-white"
//       style={{ fontFamily: "Poppins, sans-serif" }}
//     >
//       {/* Header with white background */}
//       <div className="bg-white py-6">
//         <div className="flex items-center justify-center gap-2 text-black">
//           <span className="font-medium px-2">Bolt Tensioning Solutions</span>
//           <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
//           <span className="font-medium">XEP 1500</span>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="max-w-6xl mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           {/* Left Section */}
//           <div className="space-y-6">
//             {/* Title with Impact font */}
//             <div>
//               <h1 className="text-2xl sm:text-3xl lg:text-4xl px-10 text-center font-base text-white mb-2" style={{ fontFamily: 'Impact, sans-serif' }}>
//                     XEP 1500




//               </h1>
//               <div className="rounded-2xl h-1 bg-red-600"></div>
//             </div>

//             {/* Description */}
//      <div className="space-y-4 text-2xl text-gray-200 leading-relaxed">
//               <p>
//                 HYDRAULIC BOLT TENSIONERS<br/>
//  • XEP1500/XAP1500 HYDRAULIC<br/>
//  • POWER PACK FOR BOLT
//   TENSIONERS  <br/>
// • ACCESORIES<br/>

//               </p>
//             </div> 
//           </div>

//           {/* Right Section */}
//           <div className="space-y-6">
//             {/* Product Image */}
//             <div className="relative">
//               <div
//                 className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 
//                   rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none
//                   sm:h-[400px] h-[200px] flex items-center justify-center text-black">
//                 <img
//                   src="images/Power-Pack/XEP1500.png"
//                   alt=" image Not provided"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             </div>

//             {/* Download Catalog Button */}
//             <div className="flex justify-center">
//               <button
//                 className="text-red-600 px-8 py-3 rounded-2xl text-2xl font-bold hover:bg-red-700 hover:text-white transition-colors"
//                 style={{ backgroundColor: "#ffffff" }}
//               >
//                 Download Catalog
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Xep1500;

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Xep1500 = () => {
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
          <div className="space-y-6 text-left">
            {/* Title */}
            <div>
              <h1
                className="text-2xl sm:text-3xl lg:text-4xl font-base text-white mb-2"
                style={{ fontFamily: "Impact, sans-serif" }}
              >
                XEP 1500
              </h1>
              <div className="rounded-2xl h-1 bg-red-600 w-24"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-2xl text-gray-200 leading-relaxed">
              <p>
                HYDRAULIC BOLT TENSIONERS
                <br />• XEP1500/XAP1500 HYDRAULIC
                <br />• POWER PACK FOR BOLT TENSIONERS
                <br />• ACCESSORIES
              </p>
            </div>

            {/* Sub Heading */}
            <div>
              <h1
                className="text-4xl text-white mb-2"
                style={{ fontFamily: "Impact, sans-serif" }}
              >
                ULTRA HIGH PRESSURE ELECTRIC PUMP
              </h1>
              <p
                className="text-xl text-red-500 font-semibold"
                style={{ fontFamily: "Impact, sans-serif" }}
              >
                FOR TENSIONING APPLICATIONS
              </p>
              <div className="rounded-2xl h-1 bg-red-600 mt-2 w-32"></div>
            </div>

            {/* Features */}
            <div className="space-y-4 text-gray-200 text-xl leading-relaxed pt-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold pt-1">•</span>
                  <span>Two Stage piston pump, compact, robust and reliable.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold pt-1">•</span>
                  <span>1.1 kW electric motor, powerful, big flow.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold pt-1">•</span>
                  <span>Safety and easy operating control line.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold pt-1">•</span>
                  <span>
                    When pressure is under the set pressure (1 Bar / 14.5 psi),
                    pressure switch starts automatically and raises it to the set value.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold pt-1">•</span>
                  <span>
                    Single and double acting available — suitable for various operations.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold pt-1">•</span>
                  <span>High performance radiator ensures continuous operation.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="relative">
              <div
                className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 
                rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none
                sm:h-[400px] h-[200px] flex items-center justify-center text-black"
              >
                <img
                  src="images/Power-Pack/XEP1500.png"
                  alt="XEP 1500 Power Pack"
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
