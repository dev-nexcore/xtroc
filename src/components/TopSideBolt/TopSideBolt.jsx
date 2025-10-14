// import React from "react";
// import { BsDot } from "react-icons/bs";
// import { FaArrowRightLong } from "react-icons/fa6";

// const TopSideBolt = () => {
//   return (
//     <div className="bg-black text-white">
//       {/* Header with white background */}
//       <div className="bg-white py-6">
//         <div className="flex flex-wrap items-center justify-center gap-4 text-black text-center">
//           <span className="font-medium">Specialized Tools</span>
//           <FaArrowRightLong className="w-4 h-4 mx-4" />
//           <span className="font-medium">Top Side Bolt Tensioner
// </span>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
//           {/* Left Section */}
//           <div className="space-y-6 flex flex-col items-center lg:items-start">
//             {/* Product Image */}
//             <div className="relative w-full flex justify-center">
//               <div
//                 className="bg-white rounded-2xl p-6 border-t-[12px] border-r-[12px] border-red-600 
//                   rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none
//                   h-[250px] sm:h-[300px] md:h-[400px] w-full max-w-[500px] flex items-center justify-center"
//               >
//                 <img
//                   src="product5.png"
//                   alt="Hydraulic Nut Splitter"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             </div>

//             {/* Download Catalog Button */}
//             <div className="flex justify-center lg:justify-start lg:ml-30">
//               <button className="bg-white text-red-600 px-6 sm:px-8 py-2 sm:py-3 text-lg sm:text-2xl rounded-2xl font-bold ">
//                 Download Catalog
//               </button>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="space-y-6">
//             {/* Title */}
//             <div>
//               <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
//                 Top Side Bolt Tensioner

//               </h1>
//               <div className="w-28 sm:w-40 md:w-60 h-1 bg-red-600 rounded-2xl"></div>
//             </div>

//             {/* Description */}
//              <div className="text-base sm:text-lg md:text-2xl p-2 sm:p-4 font-base text-gray-200 leading-relaxed">
//               <p>
//                 A Top Side Bolt Tensioner is a hydraulic tool designed to apply controlled tension to bolts and studs from the top side of the joint. It uses hydraulic pressure to elongate the bolt, allowing the nut to be easily rotated down by hand without frictional losses. This ensures accurate preload, uniform tightening, and minimal risk of bolt fatigue or over-torque.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopSideBolt;



import React from "react";
import { BsDot } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

const TopSideBolt = () => {
  // Data extracted from image_8699dd.jpg for XBT Top Side Bolt Tensioner
  const tableData = {
    headers: [
      "Model", "Bolt Size", "", "Cylinder Area", "", "Dimension", "", "", "", "Weight"
    ],
    // Sub-headers to align with the data columns
    subHeaders: [
      "", "Metric", "Inch", "KN", "Cm2", "A (mm)", "B (mm)", "C (mm)", "D (mm)", "E (mm)", "F (mm)", "Kg"
    ],
    rows: [
      { model: "XBT-20", bolt: ["M16", "M18", "M20"], size: ["3/4\"", "7/8\"", "1\""], cyl: "234.2", area: "15.7", dim: ["32.5", "75", "16", "62", "47-51"], weight: "3" },
      { model: "XBT-27", bolt: ["M22", "M24", "M27", "M30"], size: ["7/8\"", "1\"", "1-1/8\"", "1-1/4\""], cyl: "498.2", area: "33.2", dim: ["47", "106", "187", "60", "65-71"], weight: "5.50" },
      { model: "XBT-5", bolt: ["M33", "M36", "M39"], size: ["1-3/8\"", "1-1/2\"", "1-5/8\""], cyl: "602", area: "40.2", dim: ["56", "125", "215", "62", "73-82"], weight: "7.5" },
      { model: "XBT-9", bolt: ["M42", "M45", "M48"], size: ["1-5/8\"", "1-3/4\"", "1-7/8\""], cyl: "896.8", area: "59.7", dim: ["70", "136", "233", "73", "86-93"], weight: "10.5" },
      { model: "XBT-13", bolt: ["M52", "M56", "M60"], size: ["2\"", "2-1/4\"", "2-1/2\""], cyl: "1245.0", area: "83.0", dim: ["82", "150", "260", "73", "106-114"], weight: "16" },
      { model: "XBT-19", bolt: ["M64", "M68", "M72", "M76"], size: ["2-1/2\"", "2-3/4\"", "3\"", "3\""], cyl: "1843.3", area: "123.0", dim: ["96.5", "180", "304", "62", "129-135"], weight: "22" },
      { model: "XBT-27", bolt: ["M80", "M85", "M90", "M95"], size: ["3-1/4\"", "3-1/2\"", "3-3/4\"", "4\""], cyl: "2640.5", area: "176.0", dim: ["110", "200", "340", "73", "155-167"], weight: "24" },
      { model: "XBT-44", bolt: ["M100", "M110", "M120", "M125"], size: ["4\"", "4-3/4\"", "5\"", "5\""], cyl: "4335.0", area: "289.0", dim: ["135", "240", "410", "73", "210-233"], weight: "85" },
      { model: "XBT-54", bolt: ["M120", "M130", "M140"], size: ["4-3/4\"", "5-1/4\"", "5-1/2\""], cyl: "5404.0", area: "360.0", dim: ["160", "280", "450", "73", "243-275"], weight: "125" },
    ],
  };

  const renderTable = (data) => (
    <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-12 pb-12 overflow-x-auto">
      <div className="inline-block min-w-full">
        <div className="shadow-lg border border-white/50">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-red-700 text-sm sm:text-base font-bold">
                {/* Main Headers with Colspan */}
                <th rowSpan="2" className="py-3 px-2 sm:px-4 text-center border-r border-white/50 bg-gray-700">Model</th>
                <th colSpan="2" className="py-3 px-2 sm:px-4 text-center border-r border-white/50">Bolt Size</th>
                <th colSpan="2" className="py-3 px-2 sm:px-4 text-center border-r border-white/50">Cylinder</th>
                <th colSpan="5" className="py-3 px-2 sm:px-4 text-center border-r border-white/50">Dimension</th>
                <th rowSpan="2" className="py-3 px-2 sm:px-4 text-center bg-gray-700">Weight (Kg)</th>
              </tr>
              {/* Sub Headers (Units) */}
              <tr className="bg-gray-800 text-xs sm:text-sm font-medium">
                <th className="py-2 px-1 sm:px-3 text-center border-r border-white/50">Metric</th>
                <th className="py-2 px-1 sm:px-3 text-center border-r border-white/50">Inch</th>
                <th className="py-2 px-1 sm:px-3 text-center border-r border-white/50">KN</th>
                <th className="py-2 px-1 sm:px-3 text-center border-r border-white/50">Cm²</th>
                <th className="py-2 px-1 sm:px-3 text-center border-r border-white/50">A (mm)</th>
                <th className="py-2 px-1 sm:px-3 text-center border-r border-white/50">B (mm)</th>
                <th className="py-2 px-1 sm:px-3 text-center border-r border-white/50">C (mm)</th>
                <th className="py-2 px-1 sm:px-3 text-center border-r border-white/50">D (mm)</th>
                <th className="py-2 px-1 sm:px-3 text-center border-r border-white/50">E (mm)</th>
                <th className="py-2 px-1 sm:px-3 text-center border-r border-white/50">F (mm)</th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, rowIndex) => (
                // Grouping rows based on model for visual clarity (like the source image)
                <React.Fragment key={rowIndex}>
                  {row.bolt.map((bolt, boltIndex) => (
                    <tr key={`${rowIndex}-${boltIndex}`} className="text-xs sm:text-sm">
                      {/* Model Column (Merged) */}
                      {boltIndex === 0 && (
                        <td 
                          rowSpan={row.bolt.length} 
                          className="py-2 px-2 sm:px-4 text-center border border-white/50 bg-gray-700 font-semibold align-top"
                        >
                          {row.model}
                        </td>
                      )}
                      {/* Bolt Size Columns (Metric & Inch) */}
                      <td className="py-2 px-1 sm:px-3 text-center border-t border-b border-r border-white/50 bg-black/80 whitespace-nowrap">
                        {bolt}
                      </td>
                      <td className="py-2 px-1 sm:px-3 text-center border-t border-b border-r border-white/50 bg-black/80 whitespace-nowrap">
                        {row.size[boltIndex]}
                      </td>
                      
                      {/* Cylinder and Dimension Columns (Merged) */}
                      {boltIndex === 0 && (
                        <>
                          {/* Cylinder Area KN and Cm² */}
                          <td rowSpan={row.bolt.length} className="py-2 px-1 sm:px-3 text-center border-t border-b border-r border-white/50 bg-black/80 font-normal align-top">
                            {row.cyl}
                          </td>
                          <td rowSpan={row.bolt.length} className="py-2 px-1 sm:px-3 text-center border-t border-b border-r border-white/50 bg-black/80 font-normal align-top">
                            {row.area}
                          </td>
                          {/* Dimensions A, B, C, D, E, F */}
                          {row.dim.map((dimValue, dimIndex) => (
                            <td key={dimIndex} rowSpan={row.bolt.length} className="py-2 px-1 sm:px-3 text-center border-t border-b border-r border-white/50 bg-black/80 font-normal align-top">
                              {dimValue}
                            </td>
                          ))}
                          {/* Weight (Kg) */}
                          <td rowSpan={row.bolt.length} className="py-2 px-1 sm:px-3 text-center border-t border-b border-r border-white/50 bg-gray-700 font-semibold align-top">
                            {row.weight}
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-black text-white">
      {/* Header with white background */}
      <div className="bg-white py-6">
        <div className="flex flex-wrap items-center justify-center gap-4 text-black text-center">
          <span className="font-medium">Specialized Tools</span>
          <FaArrowRightLong className="w-4 h-4 mx-4" />
          <span className="font-medium">Top Side Bolt Tensioner</span>
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
                  src="product5.png"
                  alt="Top Side Bolt Tensioner"
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
                Top Side Bolt Tensioner
              </h1>
              <div className="w-28 sm:w-40 md:w-60 h-1 bg-red-600 rounded-2xl"></div>
            </div>

            {/* Description */}
            <div className="text-base sm:text-lg md:text-2xl p-2 sm:p-4 font-base text-gray-200 leading-relaxed">
              <p>
                A **Top Side Bolt Tensioner** is a hydraulic tool designed to apply controlled tension to bolts and studs from the top side of the joint. It uses hydraulic pressure to elongate the bolt, allowing the nut to be easily rotated down by hand without frictional losses. This ensures **accurate preload**, **uniform tightening**, and **minimal risk of bolt fatigue** or over-torque.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* ------------------------------------------------------------- */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-6">
        <h2 className="text-2xl font-bold text-white mb-4">XBT Series Technical Specifications & Dimensions</h2>
      </div>
      
      {/* Data Sheet Table (Same UI) */}
      {renderTable(tableData)}
      
      {/* ------------------------------------------------------------- */}
    </div>
  );
};

export default TopSideBolt;