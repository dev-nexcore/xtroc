// import React from "react";
// import { FaArrowRightLong } from "react-icons/fa6";

// const SubseaBolt = () => {
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
//           <span className="font-medium">Subsea Bolt Tensioner</span>
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
//                 Subsea Bolt Tensioner
//               </h1>
//               <div className=" rounded-2xl h-1 bg-red-600"></div>
//             </div>

//             {/* Description */}
//              <div className="space-y-4 text-2xl text-gray-200 leading-relaxed">
//               <p>XTORC subsea Bolt tensioners are manufactured to suit the demanding
//  requirements of divers working in harsh subsea environments. We provide a
//  complete range of Subsea Tensioners which incorporate the Split Reaction Nut
//  benefitting divers by saving time and by ensuring the fastest possible reaction
//  nut engagement. </p>
//             </div> 
//           </div>

//           {/* Right Section */}
//           <div className="space-y-6">
//             {/* Product Image */}
//             <div className="relative">
//               <div className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 
//                   rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none 
//                 h-[300px]  sm:h-[400px] flex items-center justify-center">
//                 <img
//                   src="subsea.png"
//                   alt="Hydraulic Bolt Tensioner"
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

// export default SubseaBolt;

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const SubseaBolt = () => {
  // Data for the Subsea Bolt Tensioner table
  const tableData = [
    { imperial: '1ST:1000', metric: '1ST:0024', boltIn: '1"', boltMm: 24, maxLoadTonf: 24.58, maxLoadKn: 245, hydAreaIn: 2.53, hydAreaCm: 16.34, stroke: 30, weight: '3.2 (7.05)', dimA: 3.22, dimB: 0.98, dimC: 8.5, dimD: 4.72, dimE: 5.66, dimF: 2.40 },
    { imperial: '1ST:1125', metric: '1ST:0027', boltIn: '1.1/8"', boltMm: 27, maxLoadTonf: 24.58, maxLoadKn: 245, hydAreaIn: 2.53, hydAreaCm: 16.34, stroke: 30, weight: '3.2 (7.05)', dimA: 3.22, dimB: 0.98, dimC: 8.5, dimD: 4.72, dimE: 5.66, dimF: 2.51 },
    { imperial: '2ST:1250', metric: '2ST:0033', boltIn: '1.1/4"', boltMm: 33, maxLoadTonf: 38.38, maxLoadKn: 379.2, hydAreaIn: 3.92, hydAreaCm: 25.32, stroke: 30, weight: '4.8 (10.58)', dimA: 3.93, dimB: 1.10, dimC: 9.44, dimD: 5.15, dimE: 6.25, dimF: 2.95 },
    { imperial: '2ST:1375', metric: '2ST:0036', boltIn: '1.3/8"', boltMm: 36, maxLoadTonf: 55.4, maxLoadKn: 379.2, hydAreaIn: 3.92, hydAreaCm: 25.32, stroke: 30, weight: '4.8 (10.58)', dimA: 3.93, dimB: 1.10, dimC: 9.44, dimD: 5.15, dimE: 6.25, dimF: 3.07 },
    { imperial: '3ST:1500', metric: '3ST:0039', boltIn: '1.1/2"', boltMm: 39, maxLoadTonf: 55.4, maxLoadKn: 552, hydAreaIn: 5.71, hydAreaCm: 36.88, stroke: 30, weight: '6.2 (13.66)', dimA: 4.40, dimB: 1.37, dimC: 9.80, dimD: 5.23, dimE: 6.53, dimF: 3.30 },
    { imperial: '3ST:1625', metric: '3ST:0042', boltIn: '1.5/8"', boltMm: 42, maxLoadTonf: 75.6, maxLoadKn: 552, hydAreaIn: 5.71, hydAreaCm: 36.88, stroke: 30, weight: '6.2 (13.66)', dimA: 4.40, dimB: 1.37, dimC: 9.80, dimD: 5.23, dimE: 6.537, dimF: 3.42 },
    { imperial: '4ST:1750', metric: '4ST:0045', boltIn: '1.3/4"', boltMm: 45, maxLoadTonf: 75.6, maxLoadKn: 753, hydAreaIn: 7.79, hydAreaCm: 50.27, stroke: 30, weight: '8.5 (18.73)', dimA: 5.03, dimB: 1.61, dimC: 10.66, dimD: 5.51, dimE: 7.00, dimF: 3.75 },
    { imperial: '4ST:1875', metric: '4ST:0048', boltIn: '1.7/8"', boltMm: 48, maxLoadTonf: 108, maxLoadKn: 753, hydAreaIn: 7.79, hydAreaCm: 50.27, stroke: 30, weight: '8.5 (18.73)', dimA: 5.03, dimB: 1.61, dimC: 10.66, dimD: 5.51, dimE: 7.79, dimF: 3.85 },
    { imperial: '5ST:2000', metric: '5ST:0052', boltIn: '2"', boltMm: 52, maxLoadTonf: 108, maxLoadKn: 1076, hydAreaIn: 11.12, hydAreaCm: 71.74, stroke: 30, weight: '12.2 (26.89)', dimA: 5.82, dimB: 1.88, dimC: 11.65, dimD: 5.98, dimE: 7.79, dimF: 4.76 },
    { imperial: '5ST:2250', metric: '5ST:0056', boltIn: '2.1/4"', boltMm: 56, maxLoadTonf: 165, maxLoadKn: 1076, hydAreaIn: 11.12, hydAreaCm: 71.74, stroke: 30, weight: '12.2 (26.89)', dimA: 5.82, dimB: 1.88, dimC: 11.65, dimD: 5.98, dimE: 8.81, dimF: 4.56 },
    { imperial: '6ST:2500', metric: '6ST:0064', boltIn: '2.1/2"', boltMm: 64, maxLoadTonf: 165, maxLoadKn: 1644, hydAreaIn: 17.00, hydAreaCm: 109.68, stroke: 30, weight: '19.2 (42.32)', dimA: 6.92, dimB: 2.28, dimC: 13.18, dimD: 6.61, dimE: 8.81, dimF: 5.31 },
    { imperial: '6ST:2750', metric: '6ST:0072', boltIn: '2.3/4"', boltMm: 72, maxLoadTonf: 253.4, maxLoadKn: 1644, hydAreaIn: 17.00, hydAreaCm: 109.68, stroke: 30, weight: '19.2 (42.32)', dimA: 6.92, dimB: 2.28, dimC: 13.18, dimD: 6.61, dimE: 10.23, dimF: 5.55 },
    { imperial: '7ST:3000', metric: '7ST:0076', boltIn: '3"', boltMm: 76, maxLoadTonf: 253.4, maxLoadKn: 2525, hydAreaIn: 26.10, hydAreaCm: 68.70, stroke: 30, weight: '29.0 (63.93)', dimA: 8.50, dimB: 2.08, dimC: 14.68, dimD: 7.55, dimE: 10.23, dimF: 6.37 },
    { imperial: '7ST:3500', metric: '7ST:0090', boltIn: '3.1/2"', boltMm: 90, maxLoadTonf: 2525, maxLoadKn: 2525, hydAreaIn: 26.10, hydAreaCm: 68.70, stroke: 30, weight: '29.0 (63.93)', dimA: 8.50, dimB: 2.08, dimC: 14.68, dimD: 7.55, dimE: 10.23, dimF: 6.81 },
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
          <span className="font-medium">Subsea Bolt Tensioner</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Title with Impact font */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-2" style={{ fontFamily: 'Impact, sans-serif' }}>
                Subsea Bolt Tensioner
              </h1>
              <div className=" rounded-2xl h-1 bg-red-600"></div>
            </div>

            {/* Description */}
              <div className="space-y-4 text-xl text-gray-200 leading-relaxed">
              <p>XTORC subsea Bolt tensioners are manufactured to suit the demanding
requirements of divers working in harsh subsea environments. We provide a
complete range of Subsea Tensioners which incorporate the Split Reaction Nut
benefitting divers by saving time and by ensuring the fastest possible reaction
nut engagement. </p>
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
                  src="subsea.png"
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

      {/* --- Technical Specifications Section --- */}
      {/* REMOVED max-w-7xl and mx-auto to make it full width */}
      <div className="px-4 sm:px-6 lg:px-12 py-12">
        <div className="mb-10 text-center">
            <h2 className="text-4xl text-white mb-2" style={{ fontFamily: 'Impact, sans-serif' }}>
              SUBSEA BOLT TENSIONER SPECIFICATIONS
            </h2>
            <div className="w-200 rounded-2xl h-1 bg-red-600 mx-auto mt-2" style={{ maxWidth: '600px' }}></div>
        </div>

        <div className="border border-gray-600 rounded-lg overflow-hidden">
          <div>
            <table className="w-full">
              <thead className="bg-gray-800 text-lg">
                <tr>
                  <th colSpan="2" className="p-4 text-center border-r border-gray-700 text-red-500">Model</th>
                  <th colSpan="2" className="p-4 text-center border-r border-gray-700 text-red-500">Bolt Dia.</th>
                  <th colSpan="2" className="p-4 text-center border-r border-gray-700 text-red-500">Max Load</th>
                  <th colSpan="2" className="p-4 text-center border-r border-gray-700 text-red-500">Hydraulic Area</th>
                  <th rowSpan="2" className="p-4 text-center border-r border-gray-700">Stroke</th>
                  <th rowSpan="2" className="p-4 text-center border-r border-gray-700">Tool Weight <br/> kg (lbs)</th>
                  <th colSpan="6" className="p-4 text-center text-red-500">Tool Dimensions inch</th>
                </tr>
                <tr className="font-medium text-gray-300">
                  <th className="p-3 font-medium text-center border-t border-r border-gray-700">Imperial</th>
                  <th className="p-3 font-medium text-center border-t border-r border-gray-700">Metric</th>
                  <th className="p-3 font-medium text-center border-t border-r border-gray-700">in</th>
                  <th className="p-3 font-medium text-center border-t border-r border-gray-700">mm</th>
                  <th className="p-3 font-medium text-center border-t border-r border-gray-700">TONF</th>
                  <th className="p-3 font-medium text-center border-t border-r border-gray-700">KN</th>
                  <th className="p-3 font-medium text-center border-t border-r border-gray-700">in²</th>
                  <th className="p-3 font-medium text-center border-t border-r border-gray-700">cm²</th>
                  <th className="p-3 font-medium text-center border-t border-r border-gray-700">a</th>
                  <th className="p-3 font-medium text-center border-t border-r border-gray-700">b</th>
                  <th className="p-3 font-medium text-center border-t border-r border-gray-700">c</th>
                  <th className="p-3 font-medium text-center border-t border-r border-gray-700">d</th>
                  <th className="p-3 font-medium text-center border-t border-r border-gray-700">e</th>
                  <th className="p-3 font-medium text-center border-t border-r border-gray-700">f</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} className="bg-black text-center text-lg border-t border-gray-700">
                    <td className="p-4 font-medium text-gray-300 border-r border-gray-700">{row.imperial}</td>
                    <td className="p-4 font-medium text-gray-300 border-r border-gray-700">{row.metric}</td>
                    <td className="p-4 text-white border-r border-gray-700">{row.boltIn}</td>
                    <td className="p-4 text-white border-r border-gray-700">{row.boltMm}</td>
                    <td className="p-4 text-white border-r border-gray-700">{row.maxLoadTonf}</td>
                    <td className="p-4 text-white border-r border-gray-700">{row.maxLoadKn}</td>
                    <td className="p-4 text-white border-r border-gray-700">{row.hydAreaIn}</td>
                    <td className="p-4 text-white border-r border-gray-700">{row.hydAreaCm}</td>
                    <td className="p-4 text-white border-r border-gray-700">{row.stroke}</td>
                    <td className="p-4 text-white border-r border-gray-700">{row.weight}</td>
                    <td className="p-4 text-white border-r border-gray-700">{row.dimA}</td>
                    <td className="p-4 text-white border-r border-gray-700">{row.dimB}</td>
                    <td className="p-4 text-white border-r border-gray-700">{row.dimC}</td>
                    <td className="p-4 text-white border-r border-gray-700">{row.dimD}</td>
                    <td className="p-4 text-white border-r border-gray-700">{row.dimE}</td>
                    <td className="p-4 text-white">{row.dimF}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
           <div className="bg-gray-800 p-3 text-center text-gray-400">
             Note: Dimensions are subject to change.
           </div>
        </div>
      </div>
    </div>
  );
};

export default SubseaBolt;