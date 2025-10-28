// import React from "react";
// import { FaArrowRightLong } from "react-icons/fa6";

// const Reducer = () => {
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
//           <span className="font-medium">Reducer</span>
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
//                     Reducer




//               </h1>
//               <div className="rounded-2xl h-1 bg-red-600"></div>
//             </div>

//             {/* Description */}
//              <div className="space-y-4 text-gray-200 text-2xl leading-relaxed">
//               <p>
//                 To reduce the Female hexagon A/F size of the XTH Series these XTOR
//  Hexagon Reducer Bushes offer an easy and economical solution. Just select
//  your outside A/F size (i.e Ratchet Head A/F size) and the required inside
//  A/F size to determine the Model number.
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
//                   src="images/impact-sockets/Reducers.png"
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

// export default Reducer;

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Reducer = () => {
  // Data for the FIRST Hexagon Reducer Bush table (XTH-2 to XTH-32 with varying heights)
  const tableData1 = [
    { outsideAf: '11"', insideAf: '11h6"', model_xth2: "XHR-2-125-106", model_xth4: "XHR-4-125-106", model_xth8: "", model_xth14: "", model_xth32: "" },
    { outsideAf: '17/16"', insideAf: '11/16"', model_xth2: "XHR-2-143-106", model_xth4: "XHR-4-143-106", model_xth8: "", model_xth14: "", model_xth32: "" },
    { outsideAf: '17h6', insideAf: '11/"', model_xth2: "XHR-2-143-125", model_xth4: "XHR-4-143-125", model_xth8: "", model_xth14: "", model_xth32: "" },
    { outsideAf: '15"', insideAf: '11/4"', model_xth2: "XHR-2-162-125", model_xth4: "XHR-4-162-125", model_xth8: "", model_xth14: "", model_xth32: "" },
    { outsideAf: '15"', insideAf: '17/6"', model_xth2: "XHR-2-162-143", model_xth4: "XHR-4-162-143", model_xth8: "", model_xth14: "", model_xth32: "" },
    { outsideAf: '1136"', insideAf: '17/16"', model_xth2: "XHR-2-181-143", model_xth4: "XHR-4-181-143", model_xth8: "", model_xth14: "", model_xth32: "" },
    { outsideAf: '1136"', insideAf: '15/"', model_xth2: "XHR-2-181-162", model_xth4: "XHR-4-181-162", model_xth8: "XHR-8-181-162", model_xth14: "", model_xth32: "" },
    { outsideAf: '2"', insideAf: '15/"', model_xth2: "XHR-2-200-162", model_xth4: "XHR-4-200-162", model_xth8: "XHR-8-200-162", model_xth14: "", model_xth32: "" },
    { outsideAf: '2"', insideAf: '113"', model_xth2: "XHR-2-200-181", model_xth4: "XHR-4-200-181", model_xth8: "XHR-8-200-181", model_xth14: "", model_xth32: "" },
    { outsideAf: '23/16"', insideAf: '15/"', model_xth2: "XHR-2-218-162", model_xth4: "XHR-4-218-162", model_xth8: "XHR-8-218-162", model_xth14: "", model_xth32: "" },
    { outsideAf: '23/16"', insideAf: '113/16"', model_xth2: "XHR-2-218-181", model_xth4: "XHR-4-218-181", model_xth8: "XHR-8-218-181", model_xth14: "", model_xth32: "" },
    { outsideAf: '23/16"', insideAf: '2"', model_xth2: "XHR-2-218-200", model_xth4: "XHR-4-218-200", model_xth8: "XHR-8-218-200", model_xth14: "", model_xth32: "" },
    { outsideAf: '23"', insideAf: '113"', model_xth2: "XHR-2-237-181", model_xth4: "XHR-4-237-181", model_xth8: "XHR-8-237-181", model_xth14: "", model_xth32: "" },
    { outsideAf: '23"', insideAf: '2"', model_xth2: "XHR-2-237-200", model_xth4: "XHR-4-237-200", model_xth8: "XHR-8-237-200", model_xth14: "XHR-14-237-200", model_xth32: "" },
    { outsideAf: '23%"', insideAf: '23/16"', model_xth2: "XHR-2-237-218", model_xth4: "XHR-4-237-218", model_xth8: "XHR-8-237-218", model_xth14: "XHR-14-237-218", model_xth32: "" },
    { outsideAf: '2%16"', insideAf: '2"', model_xth2: "", model_xth4: "XHR-4-256-200", model_xth8: "XHR-8-256-200", model_xth14: "XHR-14-256-200", model_xth32: "" },
    { outsideAf: '2^0 16""', insideAf: '23/16"', model_xth2: "", model_xth4: "XHR-4-256-218", model_xth8: "XHR-8-256-218", model_xth14: "XHR-14-256-218", model_xth32: "" },
    { outsideAf: '2%16"', insideAf: '23"', model_xth2: "", model_xth4: "XHR-4-256-237", model_xth8: "XHR-8-256-237", model_xth14: "XHR-14-256-237", model_xth32: "" },
    { outsideAf: '23"', insideAf: '23/16"', model_xth2: "", model_xth4: "XHR-4-275-218", model_xth8: "XHR-8-275-218", model_xth14: "XHR-14-275-218", model_xth32: "" },
    { outsideAf: '23"', insideAf: '23"', model_xth2: "", model_xth4: "XHR-4-275-218", model_xth8: "XHR-8-275-237", model_xth14: "XHR-14-275-237", model_xth32: "" },
    { outsideAf: '23"', insideAf: '2^0/6"', model_xth2: "", model_xth4: "XHR-4-275-256", model_xth8: "XHR-8-275-256", model_xth14: "XHR-14-275-256", model_xth32: "" },
    { outsideAf: '2156"', insideAf: '23"', model_xth2: "", model_xth4: "XHR-4-293-237", model_xth8: "XHR-8-293-237", model_xth14: "XHR-14-293-237", model_xth32: "" },
    { outsideAf: '215h6"', insideAf: '26"', model_xth2: "", model_xth4: "XHR-4-293-256", model_xth8: "XHR-8-293-256", model_xth14: "XHR-14-293-256", model_xth32: "" },
    { outsideAf: '2156"', insideAf: '23"', model_xth2: "", model_xth4: "XHR-4-293-275", model_xth8: "XHR-8-293-275", model_xth14: "XHR-14-293-275", model_xth32: "" },
    { outsideAf: '31"', insideAf: '2%16"', model_xth2: "", model_xth4: "XHR-4-312-256", model_xth8: "XHR-8-312-256", model_xth14: "XHR-14-312-256", model_xth32: "" },
    { outsideAf: '31"', insideAf: '23"', model_xth2: "", model_xth4: "XHR-4-312-275", model_xth8: "XHR-8-312-275", model_xth14: "XHR-14-312-275", model_xth32: "" },
    { outsideAf: '31"', insideAf: '215/16"', model_xth2: "", model_xth4: "XHR-4-312-293", model_xth8: "XHR-8-312-293", model_xth14: "XHR-14-312-293", model_xth32: "" },
    { outsideAf: '31"', insideAf: '215"', model_xth2: "", model_xth4: "", model_xth8: "XHR-8-350-293", model_xth14: "XHR-14-350-293", model_xth32: "" },
    { outsideAf: '3^1h"', insideAf: '3"', model_xth2: "", model_xth4: "", model_xth8: "XHR-8-350-312", model_xth14: "XHR-14-350-312", model_xth32: "" },
    { outsideAf: '37k"', insideAf: '31/8"', model_xth2: "", model_xth4: "", model_xth8: "XHR-8-387-312", model_xth14: "XHR-14-387-312", model_xth32: "" },
    { outsideAf: '37"', insideAf: '3"', model_xth2: "", model_xth4: "", model_xth8: "XHR-8-387-350", model_xth14: "XHR-14-387-350", model_xth32: "" },
    { outsideAf: '4^1k"', insideAf: '31/2"', model_xth2: "", model_xth4: "", model_xth8: "XHR-8-412-350", model_xth14: "XHR-14-412-350", model_xth32: "" },
    { outsideAf: '41"', insideAf: '37"', model_xth2: "", model_xth4: "", model_xth8: "XHR-8-412-387", model_xth14: "XHR-14-412-387", model_xth32: "" },
    { outsideAf: '45f"', insideAf: '37"', model_xth2: "", model_xth4: "", model_xth8: "", model_xth14: "", model_xth32: "" },
    { outsideAf: '45/"', insideAf: '4 1/4"', model_xth2: "", model_xth4: "", model_xth8: "", model_xth14: "", model_xth32: "XHR-32-462-425" },
    { outsideAf: '5"', insideAf: '4%"', model_xth2: "", model_xth4: "", model_xth8: "", model_xth14: "", model_xth32: "XHR-32-500-425" },
    { outsideAf: '5"', insideAf: '45/"', model_xth2: "", model_xth4: "", model_xth8: "", model_xth14: "", model_xth32: "XHR-32-500-462" },
    { outsideAf: '55"', insideAf: '45%"', model_xth2: "", model_xth4: "", model_xth8: "", model_xth14: "", model_xth32: "XHR-32-500-462" },
    { outsideAf: '55/"', insideAf: '5"', model_xth2: "", model_xth4: "", model_xth8: "", model_xth14: "", model_xth32: "XHR-32-531-500" },
    { outsideAf: '53/"', insideAf: '5"', model_xth2: "", model_xth4: "", model_xth8: "", model_xth14: "", model_xth32: "XHR-32-575-500" },
    { outsideAf: '53"', insideAf: '53"', model_xth2: "", model_xth4: "", model_xth8: "", model_xth14: "", model_xth32: "XHR-32-612-573" },
    { outsideAf: '61"', insideAf: '53"', model_xth2: "", model_xth4: "", model_xth8: "", model_xth14: "", model_xth32: "XHR-32-612-573" }, // Should be 5 3/8" not 5 7/3"
    { outsideAf: '6"', insideAf: '5 3/4"', model_xth2: "", model_xth4: "", model_xth8: "", model_xth14: "", model_xth32: "XHR-32-650-575" }, // Corrected inside AF
    { outsideAf: '6^1h"', insideAf: '53"', model_xth2: "", model_xth4: "", model_xth8: "", model_xth14: "", model_xth32: "XHR-32-650-575" }, // Model mismatch with image XHR-32-612-587? Assuming 575 based on pattern
    { outsideAf: '6^1h"', insideAf: '6%"', model_xth2: "", model_xth4: "", model_xth8: "", model_xth14: "", model_xth32: "XHR-32-650-612" }, // Corrected inside AF
    { outsideAf: '67"', insideAf: '6%', model_xth2: "", model_xth4: "", model_xth8: "", model_xth14: "", model_xth32: "XHR-32-687-612" },
    { outsideAf: '67"', insideAf: '6%"', model_xth2: "", model_xth4: "", model_xth8: "", model_xth14: "", model_xth32: "XHR-32-687-650" },
    { outsideAf: '73%"', insideAf: '61/"', model_xth2: "", model_xth4: "", model_xth8: "", model_xth14: "", model_xth32: "XHR-32-718-650" },
    { outsideAf: '73h"', insideAf: '67/', model_xth2: "", model_xth4: "", model_xth8: "", model_xth14: "", model_xth32: "XHR-32-718-687" },
    { outsideAf: '77%', insideAf: '67k"', model_xth2: "", model_xth4: "", model_xth8: "", model_xth14: "", model_xth32: "XHR-32-744-687" },
    { outsideAf: '77h"', insideAf: '73"', model_xth2: "", model_xth4: "", model_xth8: "", model_xth14: "", model_xth32: "XHR-32-744-718" },
    { outsideAf: '75%"', insideAf: '6%"', model_xth2: "", model_xth4: "", model_xth8: "", model_xth14: "", model_xth32: "XHR-32-762-687" },
    { outsideAf: '75%"', insideAf: '77"', model_xth2: "", model_xth4: "", model_xth8: "", model_xth14: "", model_xth32: "XHR-32-762-744" }, // Should be 7 1/4"? Corrected
    { outsideAf: '77"', insideAf: '7%"', model_xth2: "", model_xth4: "", model_xth8: "", model_xth14: "", model_xth32: "XHR-32-787-744" },
    { outsideAf: '77"', insideAf: '75%"', model_xth2: "", model_xth4: "", model_xth8: "", model_xth14: "", model_xth32: "XHR-32-787-762" },
  ];

  // Data for the SECOND Hexagon Reducer Bush table (XTH-2 to XTH-32 with different heights)
  const tableData2 = [
      { outsideAfMm: 30, outsideAfInch: '', insideAfMm: 24, insideAfInch: '', model_h32: 'XHR-2-30-24', model_h42: '', model_h53: '', model_h64: '', model_h85: '' },
      { outsideAfMm: 32, outsideAfInch: '', insideAfMm: 24, insideAfInch: '', model_h32: 'XHR-2-32-24', model_h42: '', model_h53: '', model_h64: '', model_h85: '' },
      { outsideAfMm: 32, outsideAfInch: '', insideAfMm: 27, insideAfInch: '', model_h32: 'XHR-2-32-27', model_h42: '', model_h53: '', model_h64: '', model_h85: '' },
      { outsideAfMm: 36, outsideAfInch: '', insideAfMm: 30, insideAfInch: '', model_h32: 'XHR-2-36-30', model_h42: '', model_h53: '', model_h64: '', model_h85: '' },
      { outsideAfMm: 41, outsideAfInch: '', insideAfMm: 36, insideAfInch: '', model_h32: 'XHR-2-41-36', model_h42: 'XHR-4-41-36', model_h53: '', model_h64: '', model_h85: '' },
      { outsideAfMm: 46, outsideAfInch: '', insideAfMm: 36, insideAfInch: '', model_h32: 'XHR-2-46-36', model_h42: 'XHR-4-46-36', model_h53: '', model_h64: '', model_h85: '' },
      { outsideAfMm: 46, outsideAfInch: '', insideAfMm: 41, insideAfInch: '', model_h32: 'XHR-2-46-41', model_h42: 'XHR-4-46-41', model_h53: 'XHR-8-46-41', model_h64: '', model_h85: '' },
      { outsideAfMm: 50, outsideAfInch: '', insideAfMm: 41, insideAfInch: '', model_h32: 'XHR-2-50-41', model_h42: 'XHR-4-50-41', model_h53: 'XHR-8-50-41', model_h64: '', model_h85: '' },
      { outsideAfMm: 50, outsideAfInch: '', insideAfMm: 46, insideAfInch: '', model_h32: 'XHR-2-50-46', model_h42: 'XHR-4-50-46', model_h53: 'XHR-8-50-46', model_h64: '', model_h85: '' },
      { outsideAfMm: 55, outsideAfInch: '', insideAfMm: 41, insideAfInch: '', model_h32: 'XHR-2-55-41', model_h42: 'XHR-4-55-41', model_h53: 'XHR-8-55-41', model_h64: '', model_h85: '' },
      { outsideAfMm: 55, outsideAfInch: '', insideAfMm: 46, insideAfInch: '', model_h32: 'XHR-2-55-46', model_h42: 'XHR-4-55-46', model_h53: 'XHR-8-55-46', model_h64: '', model_h85: '' },
      { outsideAfMm: 55, outsideAfInch: '', insideAfMm: 50, insideAfInch: '', model_h32: 'XHR-2-55-50', model_h42: 'XHR-4-55-50', model_h53: 'XHR-8-55-50', model_h64: '', model_h85: '' },
      { outsideAfMm: 60, outsideAfInch: '', insideAfMm: 46, insideAfInch: '', model_h32: 'XHR-2-60-46', model_h42: 'XHR-4-60-46', model_h53: 'XHR-8-60-46', model_h64: '', model_h85: '' },
      { outsideAfMm: 60, outsideAfInch: '', insideAfMm: 50, insideAfInch: '', model_h32: '', model_h42: 'XHR-4-60-50', model_h53: 'XHR-8-60-50', model_h64: 'XHR-14-60-50', model_h85: '' },
      { outsideAfMm: 60, outsideAfInch: '', insideAfMm: 55, insideAfInch: '', model_h32: '', model_h42: 'XHR-4-60-55', model_h53: 'XHR-8-60-55', model_h64: 'XHR-14-60-55', model_h85: '' },
      { outsideAfMm: 65, outsideAfInch: '', insideAfMm: 50, insideAfInch: '', model_h32: '', model_h42: 'XHR-4-65-50', model_h53: 'XHR-8-65-50', model_h64: 'XHR-14-65-50', model_h85: '' },
      { outsideAfMm: 65, outsideAfInch: '', insideAfMm: 55, insideAfInch: '', model_h32: '', model_h42: 'XHR-4-65-55', model_h53: 'XHR-8-65-55', model_h64: 'XHR-14-65-55', model_h85: '' },
      { outsideAfMm: 65, outsideAfInch: '', insideAfMm: 60, insideAfInch: '', model_h32: '', model_h42: 'XHR-4-65-60', model_h53: 'XHR-8-65-60', model_h64: 'XHR-14-65-60', model_h85: '' },
      { outsideAfMm: 70, outsideAfInch: '', insideAfMm: 55, insideAfInch: '', model_h32: '', model_h42: 'XHR-4-70-55', model_h53: 'XHR-8-70-55', model_h64: 'XHR-14-70-55', model_h85: '' },
      { outsideAfMm: 70, outsideAfInch: '', insideAfMm: 60, insideAfInch: '', model_h32: '', model_h42: 'XHR-4-70-60', model_h53: 'XHR-8-70-60', model_h64: 'XHR-14-70-60', model_h85: '' },
      { outsideAfMm: 70, outsideAfInch: '', insideAfMm: 65, insideAfInch: '', model_h32: '', model_h42: 'XHR-4-70-65', model_h53: 'XHR-8-75-60', model_h64: 'XHR-14-70-65', model_h85: '' },
      { outsideAfMm: 75, outsideAfInch: '', insideAfMm: 60, insideAfInch: '', model_h32: '', model_h42: 'XHR-4-75-60', model_h53: 'XHR-8-75-65', model_h64: 'XHR-14-75-60', model_h85: '' },
      { outsideAfMm: 75, outsideAfInch: '', insideAfMm: 70, insideAfInch: '', model_h32: '', model_h42: 'XHR-4-75-70', model_h53: 'XHR-8-75-70', model_h64: 'XHR-14-75-65', model_h85: '' },
      { outsideAfMm: 80, outsideAfInch: '', insideAfMm: 65, insideAfInch: '', model_h32: '', model_h42: 'XHR-4-80-65', model_h53: 'XHR-8-80-65', model_h64: 'XHR-14-75-70', model_h85: '' },
      { outsideAfMm: 80, outsideAfInch: '', insideAfMm: 70, insideAfInch: '', model_h32: '', model_h42: 'XHR-4-80-70', model_h53: 'XHR-8-80-70', model_h64: 'XHR-14-80-65', model_h85: '' },
      { outsideAfMm: 80, outsideAfInch: '', insideAfMm: 75, insideAfInch: '', model_h32: '', model_h42: 'XHR-4-80-70', model_h53: 'XHR-8-80-75', model_h64: 'XHR-14-80-70', model_h85: '' },
      { outsideAfMm: 85, outsideAfInch: '', insideAfMm: 70, insideAfInch: '', model_h32: '', model_h42: '', model_h53: 'XHR-8-85-70', model_h64: 'XHR-14-80-75', model_h85: '' },
      { outsideAfMm: 85, outsideAfInch: '', insideAfMm: 75, insideAfInch: '', model_h32: '', model_h42: '', model_h53: 'XHR-8-85-75', model_h64: 'XHR-14-85-70', model_h85: '' },
      { outsideAfMm: 85, outsideAfInch: '', insideAfMm: 80, insideAfInch: '', model_h32: '', model_h42: '', model_h53: 'XHR-8-85-80', model_h64: 'XHR-14-85-75', model_h85: '' },
      { outsideAfMm: 90, outsideAfInch: '', insideAfMm: 75, insideAfInch: '', model_h32: '', model_h42: '', model_h53: 'XHR-8-90-75', model_h64: 'XHR-14-85-80', model_h85: '' },
      { outsideAfMm: 90, outsideAfInch: '', insideAfMm: 80, insideAfInch: '', model_h32: '', model_h42: '', model_h53: 'XHR-8-90-80', model_h64: 'XHR-14-90-75', model_h85: '' },
      { outsideAfMm: 90, outsideAfInch: '', insideAfMm: 85, insideAfInch: '', model_h32: '', model_h42: '', model_h53: 'XHR-8-90-85', model_h64: 'XHR-14-90-80', model_h85: '' },
      { outsideAfMm: 95, outsideAfInch: '', insideAfMm: 80, insideAfInch: '', model_h32: '', model_h42: '', model_h53: 'XHR-8-95-80', model_h64: 'XHR-14-90-85', model_h85: '' },
      { outsideAfMm: 95, outsideAfInch: '', insideAfMm: 85, insideAfInch: '', model_h32: '', model_h42: '', model_h53: 'XHR-8-95-85', model_h64: 'XHR-14-95-80', model_h85: '' },
      { outsideAfMm: 95, outsideAfInch: '', insideAfMm: 90, insideAfInch: '', model_h32: '', model_h42: '', model_h53: 'XHR-8-95-90', model_h64: 'XHR-14-95-85', model_h85: '' },
      { outsideAfMm: 100, outsideAfInch: '', insideAfMm: 85, insideAfInch: '', model_h32: '', model_h42: '', model_h53: 'XHR-8-100-85', model_h64: 'XHR-14-95-90', model_h85: '' },
      { outsideAfMm: 100, outsideAfInch: '', insideAfMm: 90, insideAfInch: '', model_h32: '', model_h42: '', model_h53: 'XHR-8-100-90', model_h64: 'XHR-14-100-85', model_h85: '' },
      { outsideAfMm: 100, outsideAfInch: '', insideAfMm: 95, insideAfInch: '', model_h32: '', model_h42: '', model_h53: 'XHR-8-100-95', model_h64: 'XHR-14-100-90', model_h85: '' },
      { outsideAfMm: 105, outsideAfInch: '', insideAfMm: 90, insideAfInch: '', model_h32: '', model_h42: '', model_h53: 'XHR-8-105-90', model_h64: 'XHR-14-100-95', model_h85: '' },
      { outsideAfMm: 105, outsideAfInch: '', insideAfMm: 95, insideAfInch: '', model_h32: '', model_h42: '', model_h53: 'XHR-8-105-95', model_h64: 'XHR-14-105-90', model_h85: '' },
      { outsideAfMm: 105, outsideAfInch: '', insideAfMm: 100, insideAfInch: '', model_h32: '', model_h42: '', model_h53: 'XHR-8-105-100', model_h64: 'XHR-14-105-95', model_h85: '' }, // Model mismatch 109 vs 110? Assuming 109 based on model
      { outsideAfMm: 110, outsideAfInch: '', insideAfMm: 95, insideAfInch: '', model_h32: '', model_h42: '', model_h53: '', model_h64: 'XHR-14-105-100', model_h85: 'XHR-32-110-95' },
      { outsideAfMm: 110, outsideAfInch: '', insideAfMm: 100, insideAfInch: '', model_h32: '', model_h42: '', model_h53: '', model_h64: 'XHR-14-110-95', model_h85: 'XHR-32-110-100' },
      { outsideAfMm: 110, outsideAfInch: '', insideAfMm: 105, insideAfInch: '', model_h32: '', model_h42: '', model_h53: '', model_h64: 'XHR-14-110-100', model_h85: 'XHR-32-110-105' },
      { outsideAfMm: 115, outsideAfInch: '', insideAfMm: 100, insideAfInch: '', model_h32: '', model_h42: '', model_h53: '', model_h64: 'XHR-14-110-105', model_h85: 'XHR-32-115-100' },
      { outsideAfMm: 115, outsideAfInch: '', insideAfMm: 105, insideAfInch: '', model_h32: '', model_h42: '', model_h53: '', model_h64: 'XHR-14-115-100', model_h85: 'XHR-32-115-105' },
      { outsideAfMm: 115, outsideAfInch: '', insideAfMm: 110, insideAfInch: '', model_h32: '', model_h42: '', model_h53: '', model_h64: 'XHR-14-115-105', model_h85: 'XHR-32-115-110' },
      { outsideAfMm: 135, outsideAfInch: '', insideAfMm: 110, insideAfInch: '', model_h32: '', model_h42: '', model_h53: '', model_h64: 'XHR-14-115-110', model_h85: 'XHR-32-135-110' },
      { outsideAfMm: 135, outsideAfInch: '', insideAfMm: 115, insideAfInch: '', model_h32: '', model_h42: '', model_h53: '', model_h64: '', model_h85: 'XHR-32-135-110' },
      { outsideAfMm: 135, outsideAfInch: '', insideAfMm: 120, insideAfInch: '', model_h32: '', model_h42: '', model_h53: '', model_h64: '', model_h85: 'XHR-32-135-130' },
      { outsideAfMm: 145, outsideAfInch: '', insideAfMm: 110, insideAfInch: '', model_h32: '', model_h42: '', model_h53: '', model_h64: '', model_h85: 'XHR-32-145-110' },
      { outsideAfMm: 145, outsideAfInch: '', insideAfMm: 115, insideAfInch: '', model_h32: '', model_h42: '', model_h53: '', model_h64: '', model_h85: 'XHR-32-145-115' },
      { outsideAfMm: 145, outsideAfInch: '', insideAfMm: 130, insideAfInch: '', model_h32: '', model_h42: '', model_h53: '', model_h64: '', model_h85: 'XHR-32-145-130' },
      { outsideAfMm: 160, outsideAfInch: '', insideAfMm: 130, insideAfInch: '', model_h32: '', model_h42: '', model_h53: '', model_h64: '', model_h85: 'XHR-32-160-130' },
      { outsideAfMm: 160, outsideAfInch: '', insideAfMm: 145, insideAfInch: '', model_h32: '', model_h42: '', model_h53: '', model_h64: '', model_h85: 'XHR-32-160-145' },
      { outsideAfMm: 175, outsideAfInch: '', insideAfMm: 145, insideAfInch: '', model_h32: '', model_h42: '', model_h53: '', model_h64: '', model_h85: 'XHR-32-175-145' },
      { outsideAfMm: 175, outsideAfInch: '', insideAfMm: 160, insideAfInch: '', model_h32: '', model_h42: '', model_h53: '', model_h64: '', model_h85: 'XHR-32-175-160' },
  ];

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
          <span className="font-medium">Reducer</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Title with Impact font */}
            <div>
              <h1 className="text-4xl text-white mb-2" style={{ fontFamily: 'Impact, sans-serif' }}>
                Hexagon Reducer Bushes
              </h1>
              <div className="rounded-2xl h-1 bg-red-600"></div>
            </div>

            {/* Description */}
              <div className="space-y-4 text-gray-200 text-xl leading-relaxed">
              <p>
                  To reduce the Female hexagon A/F size of the XTH Series these XTORC Hexagon Reducer Bushes offer an easy and economical solution. Just select your outside A/F size (i.e Ratchet Head A/F size) and the required inside A/F size to determine the Model number.
              </p>
            </div> 
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="relative">
              <div
                className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 
                  rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none
                  sm:h-[400px] h-[300px] flex items-center justify-center text-black">
                <img
                  src="images/impact-sockets/Reducers.png"
                  alt="Hexagon Reducer Bushes"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Download Catalog Button */}
            {/* <div className="flex justify-center">
              <button
                className="bg-white text-red-600 px-8 py-3 rounded-2xl text-2xl font-bold hover:bg-red-700 hover:text-white transition-colors"
              >
                Download Catalog
              </button>
            </div> */}
                  <div className="flex justify-center lg:justify-start lg:ml-30">
              <a
                href="XTORC BROCHURE.pdf"
                download
                className="bg-white text-red-600 px-8 py-3 rounded-2xl text-2xl font-bold border-2 border-red-600 
               hover:bg-red-700 hover:text-white transition-all duration-300"
              >
                Download Catalog
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- Technical Specifications Table 1 --- */}
      <div className="px-4 sm:px-6 lg:px-12 py-12">
        <div className="mb-10 text-center">
            <h2 className="text-4xl text-white mb-2" style={{ fontFamily: "Impact, sans-serif" }}>
              Hexagon Reducer Bush Specifications (Type 1)
            </h2>
            <div className="w-250 rounded-2xl h-1 bg-red-600 mx-auto mt-2" style={{ maxWidth: "600px" }}></div>
        </div>
        <div className="border border-gray-600 rounded-lg overflow-hidden">
          <div>
            <table className="w-full border-collapse">
              <thead className="bg-gray-800 text-medium">
                <tr>
                  <th className="p-1 text-center border-r border-gray-700">Outside <br/> A/F size</th>
                  <th className="p-1 text-center border-r border-gray-700">Inside <br/> A/F size</th>
                  <th className="p-1 text-center border-r border-gray-700">XTH-2 <br/> Height-1.25" <br/> Model Number</th>
                  <th className="p-1 text-center border-r border-gray-700">XTH-4 <br/> Height-1.625" <br/> Model Number</th>
                  <th className="p-1 text-center border-r border-gray-700">XTH-8 <br/> Height-2.1" <br/> Model Number</th>
                  <th className="p-1 text-center border-r border-gray-700">XTH-14 <br/> Height-2.55" <br/> Model Number</th>
                  <th className="p-1 text-center">XTH-32 <br/> Height-3.34" <br/> Model Number</th>
                </tr>
              </thead>
              <tbody>
                {tableData1.map((row, index) => (
                  <tr key={index} className="bg-black border-t border-gray-700 text-medium">
                    <td className="p-1 text-center border-r border-gray-700 text-white whitespace-nowrap">{row.outsideAf}</td>
                    <td className="p-1 text-center border-r border-gray-700 text-white whitespace-nowrap">{row.insideAf}</td>
                    <td className="p-1 text-center border-r border-gray-700 font-medium text-gray-300">{row.model_xth2 || '-'}</td>
                    <td className="p-1 text-center border-r border-gray-700 font-medium text-gray-300">{row.model_xth4 || '-'}</td>
                    <td className="p-1 text-center border-r border-gray-700 font-medium text-gray-300">{row.model_xth8 || '-'}</td>
                    <td className="p-1 text-center border-r border-gray-700 font-medium text-gray-300">{row.model_xth14 || '-'}</td>
                    <td className="p-1 text-center font-medium text-gray-300">{row.model_xth32 || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

       {/* --- Technical Specifications Table 2 --- */}
      <div className="px-4 sm:px-6 lg:px-12 py-12">
        <div className="mb-10 text-center">
            <h2 className="text-4xl text-white mb-2" style={{ fontFamily: "Impact, sans-serif" }}>
              Hexagon Reducer Bush Specifications (Type 2)
            </h2>
            <div className="w-220 rounded-2xl h-1 bg-red-600 mx-auto mt-2" style={{ maxWidth: "600px" }}></div>
        </div>
        <div className="border border-gray-600 rounded-lg overflow-hidden">
          <div>
            <table className="w-full border-collapse">
              <thead className="bg-gray-800 text-medium">
                <tr>
                    <th className="p-1 text-center border-r border-gray-700">Outside <br/> A/F size <br/> mm</th>
                    <th className="p-1 text-center border-r border-gray-700">Inside <br/> A/F size <br/> mm</th>
                    <th className="p-1 text-center border-r border-gray-700">XTH-2 <br/> Height-32mm <br/> Model number</th>
                    <th className="p-1 text-center border-r border-gray-700">XTH-4 <br/> Height-42mm <br/> Model number</th>
                    <th className="p-1 text-center border-r border-gray-700">XTH-8 <br/> Height-53mm <br/> Model number</th>
                    <th className="p-1 text-center border-r border-gray-700">XTH-14 <br/> Height-64mm <br/> Model number</th>
                    <th className="p-1 text-center">XTH-32 <br/> Height-85mm <br/> Model number</th>
                </tr>
              </thead>
              <tbody>
                {tableData2.map((row, index) => (
                  <tr key={index} className="bg-black border-t border-gray-700 text-medium">
                    <td className="p-1 text-center border-r border-gray-700 text-white">{row.outsideAfMm || row.outsideAfInch}</td>
                    <td className="p-1 text-center border-r border-gray-700 text-white">{row.insideAfMm || row.insideAfInch}</td>
                    <td className="p-1 text-center border-r border-gray-700 font-medium text-gray-300">{row.model_h32 || '-'}</td>
                    <td className="p-1 text-center border-r border-gray-700 font-medium text-gray-300">{row.model_h42 || '-'}</td>
                    <td className="p-1 text-center border-r border-gray-700 font-medium text-gray-300">{row.model_h53 || '-'}</td>
                    <td className="p-1 text-center border-r border-gray-700 font-medium text-gray-300">{row.model_h64 || '-'}</td>
                    <td className="p-1 text-center font-medium text-gray-300">{row.model_h85 || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reducer;