'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
   const [activeSubmenu, setActiveSubmenu] = useState(null);
   const [hoveredProduct, setHoveredProduct] = useState(null);
   // Define this at the top of your component
const productImages = {
  'multi-stud': '/images/bolt-tensioning/multi-stud.png',
  'hydraulic-tensioner': '/images/bolt-tensioning/hydraulic.png',
  'pneumatic-powerpack': '/images/bolt-tensioning/pneumatic.png',
  'electric-torque': '/images/bolt-tensioning/electric.png',
  'hydraulic-wrench': '/images/torque-wrenches/hydraulic.png',
  'electric-wrench': '/images/torque-wrenches/electric.png',
  'pneumatic-wrench': '/images/torque-wrenches/pneumatic.png',
  'hydraulic-pump': '/images/hydraulic/pump.png',
  'hydraulic-cylinder': '/images/hydraulic/cylinder.png',
  'hydraulic-hose': '/images/hydraulic/hoses.png',
  'pipe-cutting': '/images/cold-cutting/pipe.png',
  'beveling-machine': '/images/cold-cutting/beveling.png',
  'tube-cutting': '/images/cold-cutting/tube.png',
  'flange-tool': '/images/specialized/flange.png',
  'valve-tool': '/images/specialized/valve.png',
};


  return (
    <nav className="bg-black  text-white">
      <div className="max-w-7xl mx-auto ">
       <div className="flex items-center justify-evenly h-12">
          {/* Logo */}
          <div className="flex  items-center">
            <Link href="/" className="flex items-center ">
              <img src="/xtroc.png" alt="Xtroc Logo" className="h-10 w-auto" />   
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center ml-20 space-x-20">
            <Link 
              href="/about" 
              className="text-white font-bold  text-base  hover:border-b-2 border-red-500 transition-colors duration-200  "
            >
              About us
            </Link>
            
            {/* Products Dropdown */}
       <div className="relative">
              <button
                className="flex items-center text-white hover:text-red-500 transition-colors duration-200 text-sm font-medium"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                onMouseEnter={() => setIsProductsOpen(true)}
              >
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isProductsOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 bg-white border border-gray-200 shadow-lg z-50 rounded-md flex"
                  onMouseLeave={() => {
                    setIsProductsOpen(false);
                    setActiveSubmenu(null);
                    setHoveredProduct(null);
                  }}
                >
                  {/* Main Categories */}
                  <div className="w-72 py-2">
                    <button 
                      onMouseEnter={() => setActiveSubmenu('bolt-tensioning')}
                      className="flex items-center w-full px-4 py-3 text-sm text-gray-800 hover:bg-gray-100 group text-left"
                    >
                      <span className="text-red-500 mr-3 text-lg group-hover:text-red-600">»</span>
                      Bolt Tensioning Solutions
                    </button>
                    <button 
                      onMouseEnter={() => setActiveSubmenu('torque-wrenches')}
                      className="flex items-center w-full px-4 py-3 text-sm text-gray-800 hover:bg-gray-100 group text-left"
                    >
                      <span className="text-red-500 mr-3 text-lg group-hover:text-red-600">»</span>
                      Torque Wrenches
                    </button>
                    <button 
                     onMouseEnter={() => setActiveSubmenu('hydraulic-equipment')}
                      className="flex items-center w-full px-4 py-3 text-sm text-gray-800 hover:bg-gray-100 group text-left"
                    >
                      <span className="text-red-500 mr-3 text-lg group-hover:text-red-600">»</span>
                      Hydraulic Equipment
                    </button>
                    <button 
                      onMouseEnter={() => setActiveSubmenu('cold-cutting')}
                      className="flex items-center w-full px-4 py-3 text-sm text-gray-800 hover:bg-gray-100 group text-left"
                    >
                      <span className="text-red-500 mr-3 text-lg group-hover:text-red-600">»</span>
                      Cold Cutting and Beveling Tools
                    </button>
                    <button 
                      onMouseEnter={() => setActiveSubmenu('specialized-tools')}
                      className="flex items-center w-full px-4 py-3 text-sm text-gray-800 hover:bg-gray-100 group text-left"
                    >
                      <span className="text-red-500 mr-3 text-lg group-hover:text-red-600">»</span>
                      Specialized Tools
                    </button>
                  </div>

                  {/* Secondary Menu */}
                  {activeSubmenu && (
                    <div className="w-80 py-2 border-l border-gray-200 bg-gray-50">
                      {activeSubmenu === 'bolt-tensioning' && (
                        <>
                        
                          <Link 
                          
                            href="/products/bolt-tensioning/multi-stud" 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onMouseEnter={() => setHoveredProduct('multi-stud')}
                            onMouseLeave={() => setHoveredProduct(null)}
                          >
                             <span className=" w-20 text-red-500 mr-3 text-lg group-hover:text-red-600">-</span>
                            Multi Stud Bolt Tensioners
                          </Link>
                          <Link 
                            href="/products/bolt-tensioning/hydraulic" 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onMouseEnter={() => setHoveredProduct('hydraulic-tensioner')}
                            onMouseLeave={() => setHoveredProduct(null)}
                          >
                            Hydraulic Bolt Tensioners
                          </Link>
                          <Link 
                            href="/products/bolt-tensioning/pneumatic" 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onMouseEnter={() => setHoveredProduct('pneumatic-powerpack')}
                            onMouseLeave={() => setHoveredProduct(null)}
                          >
                            Pneumatic & Electric Powerpack
                          </Link>
                          <Link 
                            href="/products/bolt-tensioning/electric" 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onMouseEnter={() => setHoveredProduct('electric-torque')}
                            onMouseLeave={() => setHoveredProduct(null)}
                          >
                            Electric & Pneumatic Torque Wrenches
                          </Link>
                        </>
                      )}
                      
                      {activeSubmenu === 'torque-wrenches' && (
                        <>
                          <Link 
                            href="/products/torque-wrenches/hydraulic" 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onMouseEnter={() => setHoveredProduct('hydraulic-wrench')}
                            onMouseLeave={() => setHoveredProduct(null)}
                          >
                            Hydraulic Torque Wrenches
                          </Link>
                          <Link 
                            href="/products/torque-wrenches/electric" 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onMouseEnter={() => setHoveredProduct('electric-wrench')}
                            onMouseLeave={() => setHoveredProduct(null)}
                          >
                            Electric Torque Wrenches
                          </Link>
                          <Link 
                            href="/products/torque-wrenches/pneumatic" 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onMouseEnter={() => setHoveredProduct('pneumatic-wrench')}
                            onMouseLeave={() => setHoveredProduct(null)}
                          >
                            Pneumatic Torque Wrenches
                          </Link>
                          <Link 
                            href="/products/torque-wrenches/manual" 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onMouseEnter={() => setHoveredProduct('manual-wrench')}
                            onMouseLeave={() => setHoveredProduct(null)}
                          >
                            Manual Torque Wrenches
                          </Link>
                        </>
                      )}
                      
                      {activeSubmenu === 'hydraulic-equipment' && (
                        <>
                          <Link 
                            href="/products/hydraulic/pumps" 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onMouseEnter={() => setHoveredProduct('hydraulic-pump')}
                            onMouseLeave={() => setHoveredProduct(null)}
                          >
                            Hydraulic Pumps
                          </Link>
                          <Link 
                            href="/products/hydraulic/cylinders" 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onMouseEnter={() => setHoveredProduct('hydraulic-cylinder')}
                            onMouseLeave={() => setHoveredProduct(null)}
                          >
                            Hydraulic Cylinders
                          </Link>
                          <Link 
                            href="/products/hydraulic/hoses" 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onMouseEnter={() => setHoveredProduct('hydraulic-hose')}
                            onMouseLeave={() => setHoveredProduct(null)}
                          >
                            Hydraulic Hoses & Fittings
                          </Link>
                          <Link 
                            href="/products/hydraulic/accessories" 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onMouseEnter={() => setHoveredProduct('hydraulic-accessory')}
                            onMouseLeave={() => setHoveredProduct(null)}
                          >
                            Hydraulic Accessories
                          </Link>
                        </>
                      )}
                      
                      {activeSubmenu === 'cold-cutting' && (
                        <>
                          <Link 
                            href="/products/cold-cutting/pipe-cutting" 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onMouseEnter={() => setHoveredProduct('pipe-cutting')}
                            onMouseLeave={() => setHoveredProduct(null)}
                          >
                            Pipe Cutting Machines
                          </Link>
                          <Link 
                            href="/products/cold-cutting/beveling" 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onMouseEnter={() => setHoveredProduct('beveling-machine')}
                            onMouseLeave={() => setHoveredProduct(null)}
                          >
                            Beveling Machines
                          </Link>
                          <Link 
                            href="/products/cold-cutting/tube-cutting" 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onMouseEnter={() => setHoveredProduct('tube-cutting')}
                            onMouseLeave={() => setHoveredProduct(null)}
                          >
                            Tube Cutting Tools
                          </Link>
                          <Link 
                            href="/products/cold-cutting/accessories" 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onMouseEnter={() => setHoveredProduct('cutting-accessory')}
                            onMouseLeave={() => setHoveredProduct(null)}
                          >
                            Cutting Accessories
                          </Link>
                        </>
                      )}
                      
                      {activeSubmenu === 'specialized-tools' && (
                        <>
                          <Link 
                            href="/products/specialized/flange-tools" 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onMouseEnter={() => setHoveredProduct('flange-tool')}
                            onMouseLeave={() => setHoveredProduct(null)}
                          >
                            Flange Tools
                          </Link>
                          <Link 
                            href="/products/specialized/valve-tools" 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onMouseEnter={() => setHoveredProduct('valve-tool')}
                            onMouseLeave={() => setHoveredProduct(null)}
                          >
                            Valve Maintenance Tools
                          </Link>
                          <Link 
                            href="/products/specialized/lifting" 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onMouseEnter={() => setHoveredProduct('lifting-tool')}
                            onMouseLeave={() => setHoveredProduct(null)}
                          >
                            Lifting & Positioning Tools
                          </Link>
                          <Link 
                            href="/products/specialized/custom" 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onMouseEnter={() => setHoveredProduct('custom-solution')}
                            onMouseLeave={() => setHoveredProduct(null)}
                          >
                            Custom Solutions
                          </Link>
                        </>
                      )}
                    </div>
                  )}

                  {/* Image Display Panel */}
                  {hoveredProduct && (
                    <div className="w-50 h-full mt-10 border-l border-gray-200 bg-white">
                      <div className="px-4 py-2">
                      <img 
  src={productImages[hoveredProduct] || '/images/placeholder-product.jpg'}
  alt={hoveredProduct}
  className="w-full h-40 object-cover rounded-md"
/>
                        <div className=" text-xs text-gray-600 capitalize">
                          {hoveredProduct.replace('-', ' ')}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>




            <Link 
              href="/services" 
              className="text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-bold "
            >
              Services
            </Link>
            
            <Link 
              href="/industries" 
              className="text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-bold "
            >
              Industries
            </Link>
            
            <Link 
              href="/contact" 
              className="text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-bold "
            >
              Contact us
            </Link>
            
            <Link 
              href="/join" 
              className="text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-bold "
            >
              Join us
            </Link>
            
            <Link 
              href="/downloads" 
              className="text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-bold "
            >
              Downloads
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:border-b-2 border-red-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;