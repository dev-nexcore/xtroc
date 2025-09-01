'use client'
import React from 'react';

const Innovations = () => {
  return (
    <div className="bg-black min-h-screen p-8">
      {/* Header Section */}
      <div className="mb-12">
        <div className="flex items-center mb-4">
          <h1 className="text-white text-4xl font-bold mr-4">Our Innovations</h1>
          <div className="h-1 bg-red-600 w-20"></div>
        </div>
        <h2 className="text-2xl font-semibold" style={{ color: '#D01A1A' }}>
          Industry Focused Products!
        </h2>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        
        {/* Product 1: Hydraulic Torque Wrenches */}
        <div className="flex flex-col lg:flex-row items-start gap-6 transform transition-all duration-1000 hover:translate-x-2 translate-x-0 opacity-100" id="product1">
          <div className="relative">
            <img 
              src="product1.png" 
              alt="Hydraulic Torque Wrenches"
              className="w-48 h-48 object-cover bg-gray-200 rounded"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-48 h-48 bg-gray-200 rounded flex items-center justify-center hidden">
              <span className="text-gray-500">Product 1</span>
            </div>
            <div className="absolute top-0 right-0 w-8 h-full bg-red-600 flex items-center justify-center transition-all duration-300 hover:w-12">
              <span className="text-white text-xs font-bold transform -rotate-90 whitespace-nowrap">
                Hydraulic Torque Wrenches
              </span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#D01A1A' }}>Hydraulic Torque Wrenches</h3>
            <p className="text-white text-sm leading-relaxed">
              Designed for precision and durability, our hydraulic torque wrenches are ideal for 
              heavy-duty applications across multiple industries, ensuring accurate and efficient 
              tightening or loosening of bolts.
            </p>
          </div>
        </div>

        {/* Product 2: Pipe Cutting & Beveling Machines */}
        <div className="flex flex-col lg:flex-row items-start gap-6 transform transition-all duration-1000 hover:-translate-x-2 translate-x-0 opacity-100" id="product2">
          <div className="relative">
            <img 
              src="product4.png" 
              alt="Pipe Cutting & Beveling Machines"
              className="w-48 h-48 object-cover bg-gray-200 rounded"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-48 h-48 bg-gray-200 rounded flex items-center justify-center hidden">
              <span className="text-gray-500">Product 2</span>
            </div>
            <div className="absolute top-0 right-0 w-8 h-full bg-red-600 flex items-center justify-center transition-all duration-300 hover:w-12">
              <span className="text-white text-xs font-bold transform -rotate-90 whitespace-nowrap">
                Pipe Cutting & Beveling
              </span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2" style={{ color: '#D01A1A' }}>Pipe Cutting & Beveling Machines</h3>
            <p className="text-white text-sm leading-relaxed">
              Engineered for precision and safety, our cold cutting and beveling tools are perfect 
              for on-site machining tasks, delivering clean and accurate results without heat 
              distortion.
            </p>
          </div>
        </div>

        {/* Product 3: Bolt Tensioning Solutions */}
        <div className="flex flex-col lg:flex-row items-start gap-6 transform transition-all duration-1000 hover:translate-x-2 translate-x-0 opacity-100" id="product3">
          <div className="relative">
            <img 
              src="product2.png" 
              alt="Bolt Tensioning Solutions"
              className="w-48 h-48 object-cover bg-gray-200 rounded"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-48 h-48 bg-gray-200 rounded flex items-center justify-center hidden">
              <span className="text-gray-500">Product 3</span>
            </div>
            <div className="absolute top-0 right-0 w-8 h-full bg-red-600 flex items-center justify-center transition-all duration-300 hover:w-12">
              <span className="text-white text-xs font-bold transform -rotate-90 whitespace-nowrap">
                Bolt Tensioning Solutions
              </span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2" style={{ color: '#D01A1A' }}>Bolt Tensioning Solutions</h3>
            <p className="text-white text-sm leading-relaxed">
              Experience unmatched reliability with our advanced multi-stud and hydraulic bolt 
              tensioners, paired with electric and pneumatic powerpacks for superior performance 
              under demanding conditions.
            </p>
          </div>
        </div>

        {/* Product 4: Hydraulic Equipment */}
        <div className="flex flex-col lg:flex-row items-start gap-6 transform transition-all duration-1000 hover:-translate-x-2 translate-x-0 opacity-100" id="product4">
          <div className="relative">
            <img 
              src="product3.png" 
              alt="Hydraulic Equipment"
              className="w-48 h-48 object-cover bg-gray-200 rounded"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-48 h-48 bg-gray-200 rounded flex items-center justify-center hidden">
              <span className="text-gray-500">Product 4</span>
            </div>
            <div className="absolute top-0 right-0 w-8 h-full bg-red-600 flex items-center justify-center transition-all duration-300 hover:w-12">
              <span className="text-white text-xs font-bold transform -rotate-90 whitespace-nowrap">
                Hydraulic Equipment
              </span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2" style={{ color: '#D01A1A' }}>Hydraulic Equipment</h3>
            <p className="text-white text-sm leading-relaxed">
              From hydrotest pumps to hydraulic jacks, our robust equipment offers versatility 
              and reliability to support a range of industrial applications.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Innovations;
