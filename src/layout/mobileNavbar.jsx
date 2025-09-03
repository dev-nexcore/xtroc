    // {/* Mobile Products Menu */}
    //           <div className="py-2">
    //             <button
    //               className="flex items-center justify-between w-full text-white font-bold text-base hover:border-b-2 border-red-500 transition-colors duration-200"
    //               onClick={() => toggleMobileSubmenu('products')}
    //             >
    //               Products
    //               <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${mobileActiveSubmenu === 'products' ? 'rotate-180' : ''}`} />
    //             </button>
                
    //             {mobileActiveSubmenu === 'products' && (
    //               <div className="ml-4 mt-2 space-y-2">
    //                 {/* Bolt Tensioning Solutions */}
    //                 <div>
    //                   <button
    //                     className="flex items-center justify-between w-full text-gray-300 text-sm py-1 hover:text-red-500 transition-colors duration-200"
    //                     onClick={() => toggleMobileSubmenu('bolt-tensioning')}
    //                   >
    //                     <span className="flex items-center">
    //                       <span className="text-red-500 mr-2">»</span>
    //                       Bolt Tensioning Solutions
    //                     </span>
    //                     <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${mobileActiveSubmenu === 'bolt-tensioning' ? 'rotate-180' : ''}`} />
    //                   </button>
    //                   {mobileActiveSubmenu === 'bolt-tensioning' && (
    //                     <div className="ml-6 mt-2 space-y-1">
    //                       <Link href="/products/bolt-tensioning/multi-stud" className="block py-1 text-gray-400 text-sm hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>
    //                         <span className="text-red-500 mr-2">-</span>Multi Stud Bolt Tensioners
    //                       </Link>
    //                       <Link href="/products/bolt-tensioning/hydraulic" className="block py-1 text-gray-400 text-sm hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>
    //                         <span className="text-red-500 mr-2">-</span>Hydraulic Bolt Tensioners
    //                       </Link>
    //                       <Link href="/products/bolt-tensioning/pneumatic" className="block py-1 text-gray-400 text-sm hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>
    //                         <span className="text-red-500 mr-2">-</span>Pneumatic & Electric Powerpack
    //                       </Link>
    //                       <Link href="/products/bolt-tensioning/electric" className="block py-1 text-gray-400 text-sm hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>
    //                         <span className="text-red-500 mr-2">-</span>Electric & Pneumatic Torque Wrenches
    //                       </Link>
    //                     </div>
    //                   )}
    //                 </div>

    //                 {/* Torque Wrenches */}
    //                 <div>
    //                   <button
    //                     className="flex items-center justify-between w-full text-gray-300 text-sm py-1 hover:text-red-500 transition-colors duration-200"
    //                     onClick={() => toggleMobileSubmenu('torque-wrenches')}
    //                   >
    //                     <span className="flex items-center">
    //                       <span className="text-red-500 mr-2">»</span>
    //                       Torque Wrenches
    //                     </span>
    //                     <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${mobileActiveSubmenu === 'torque-wrenches' ? 'rotate-180' : ''}`} />
    //                   </button>
    //                   {mobileActiveSubmenu === 'torque-wrenches' && (
    //                     <div className="ml-6 mt-2 space-y-1">
    //                       <Link href="/products/torque-wrenches/hydraulic" className="block py-1 text-gray-400 text-sm hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>
    //                         <span className="text-red-500 mr-2">-</span>Hydraulic Torque Wrenches
    //                       </Link>
    //                       <Link href="/products/torque-wrenches/electric" className="block py-1 text-gray-400 text-sm hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>
    //                         <span className="text-red-500 mr-2">-</span>Electric Torque Wrenches
    //                       </Link>
    //                       <Link href="/products/torque-wrenches/pneumatic" className="block py-1 text-gray-400 text-sm hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>
    //                         <span className="text-red-500 mr-2">-</span>Pneumatic Torque Wrenches
    //                       </Link>
    //                       <Link href="/products/torque-wrenches/manual" className="block py-1 text-gray-400 text-sm hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>
    //                         <span className="text-red-500 mr-2">-</span>Manual Torque Wrenches
    //                       </Link>
    //                     </div>
    //                   )}
    //                 </div>

    //                 {/* Hydraulic Equipment */}
    //                 <div>
    //                   <button
    //                     className="flex items-center justify-between w-full text-gray-300 text-sm py-1 hover:text-red-500 transition-colors duration-200"
    //                     onClick={() => toggleMobileSubmenu('hydraulic-equipment')}
    //                   >
    //                     <span className="flex items-center">
    //                       <span className="text-red-500 mr-2">»</span>
    //                       Hydraulic Equipment
    //                     </span>
    //                     <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${mobileActiveSubmenu === 'hydraulic-equipment' ? 'rotate-180' : ''}`} />
    //                   </button>
    //                   {mobileActiveSubmenu === 'hydraulic-equipment' && (
    //                     <div className="ml-6 mt-2 space-y-1">
    //                       <Link href="/products/hydraulic/pumps" className="block py-1 text-gray-400 text-sm hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>
    //                         <span className="text-red-500 mr-2">-</span>Hydraulic Pumps
    //                       </Link>
    //                       <Link href="/products/hydraulic/cylinders" className="block py-1 text-gray-400 text-sm hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>
    //                         <span className="text-red-500 mr-2">-</span>Hydraulic Cylinders
    //                       </Link>
    //                       <Link href="/products/hydraulic/hoses" className="block py-1 text-gray-400 text-sm hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>
    //                         <span className="text-red-500 mr-2">-</span>Hydraulic Hoses & Fittings
    //                       </Link>
    //                       <Link href="/products/hydraulic/accessories" className="block py-1 text-gray-400 text-sm hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>
    //                         <span className="text-red-500 mr-2">-</span>Hydraulic Accessories
    //                       </Link>
    //                     </div>
    //                   )}
    //                 </div>

    //                 {/* Cold Cutting and Beveling Tools */}
    //                 <div>
    //                   <button
    //                     className="flex items-center justify-between w-full text-gray-300 text-sm py-1 hover:text-red-500 transition-colors duration-200"
    //                     onClick={() => toggleMobileSubmenu('cold-cutting')}
    //                   >
    //                     <span className="flex items-center">
    //                       <span className="text-red-500 mr-2">»</span>
    //                       Cold Cutting and Beveling Tools
    //                     </span>
    //                     <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${mobileActiveSubmenu === 'cold-cutting' ? 'rotate-180' : ''}`} />
    //                   </button>
    //                   {mobileActiveSubmenu === 'cold-cutting' && (
    //                     <div className="ml-6 mt-2 space-y-1">
    //                       <Link href="/products/cold-cutting/pipe-cutting" className="block py-1 text-gray-400 text-sm hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>
    //                         <span className="text-red-500 mr-2">-</span>Pipe Cutting Machines
    //                       </Link>
    //                       <Link href="/products/cold-cutting/beveling" className="block py-1 text-gray-400 text-sm hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>
    //                         <span className="text-red-500 mr-2">-</span>Beveling Machines
    //                       </Link>
    //                       <Link href="/products/cold-cutting/tube-cutting" className="block py-1 text-gray-400 text-sm hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>
    //                         <span className="text-red-500 mr-2">-</span>Tube Cutting Tools
    //                       </Link>
    //                       <Link href="/products/cold-cutting/accessories" className="block py-1 text-gray-400 text-sm hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>
    //                         <span className="text-red-500 mr-2">-</span>Cutting Accessories
    //                       </Link>
    //                     </div>
    //                   )}
    //                 </div>

    //                 {/* Specialized Tools */}
    //                 <div>
    //                   <button
    //                     className="flex items-center justify-between w-full text-gray-300 text-sm py-1 hover:text-red-500 transition-colors duration-200"
    //                     onClick={() => toggleMobileSubmenu('specialized-tools')}
    //                   >
    //                     <span className="flex items-center">
    //                       <span className="text-red-500 mr-2">»</span>
    //                       Specialized Tools
    //                     </span>
    //                     <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${mobileActiveSubmenu['specialized-tools'] ? 'rotate-180' : ''}`} />
    //                   </button>
    //                   {mobileActiveSubmenu['specialized-tools'] && (
    //                     <div className="ml-6 mt-2 space-y-1">
    //                       <Link href="/products/specialized/flange-tools" className="block py-1 text-gray-400 text-sm hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>
    //                         <span className="text-red-500 mr-2">-</span>Flange Tools
    //                       </Link>
    //                       <Link href="/products/specialized/valve-tools" className="block py-1 text-gray-400 text-sm hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>
    //                         <span className="text-red-500 mr-2">-</span>Valve Maintenance Tools
    //                       </Link>
    //                       <Link href="/products/specialized/lifting" className="block py-1 text-gray-400 text-sm hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>
    //                         <span className="text-red-500 mr-2">-</span>Lifting & Positioning Tools
    //                       </Link>
    //                       <Link href="/products/specialized/custom" className="block py-1 text-gray-400 text-sm hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>
    //                         <span className="text-red-500 mr-2">-</span>Custom Solutions
    //                       </Link>
    //                     </div>
    //                   )}
    //                 </div>
    //               </div>
    //             )}
    //           </div>



'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (category) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  const productMenu = {
    'Bolt Tensioning Solutions': [
      { label: 'Multi Stud Bolt Tensioners', href: '/products/bolt-tensioning/multi-stud' },
      { label: 'Hydraulic Bolt Tensioners', href: '/products/bolt-tensioning/hydraulic' },
      { label: 'Pneumatic & Electric Powerpack', href: '/products/bolt-tensioning/pneumatic' },
      { label: 'Electric & Pneumatic Torque Wrenches', href: '/products/bolt-tensioning/electric' },
    ],
    'Torque Wrenches': [
      { label: 'Hydraulic Torque Wrenches', href: '/products/torque-wrenches/hydraulic' },
      { label: 'Electric Torque Wrenches', href: '/products/torque-wrenches/electric' },
      { label: 'Pneumatic Torque Wrenches', href: '/products/torque-wrenches/pneumatic' },
      { label: 'Manual Torque Wrenches', href: '/products/torque-wrenches/manual' },
    ],
    'Hydraulic Equipment': [
      { label: 'Hydraulic Pumps', href: '/products/hydraulic/pumps' },
      { label: 'Hydraulic Cylinders', href: '/products/hydraulic/cylinders' },
      { label: 'Hydraulic Hoses & Fittings', href: '/products/hydraulic/hoses' },
      { label: 'Hydraulic Accessories', href: '/products/hydraulic/accessories' },
    ],
    'Cold Cutting and Beveling Tools': [
      { label: 'Pipe Cutting Machines', href: '/products/cold-cutting/pipe-cutting' },
      { label: 'Beveling Machines', href: '/products/cold-cutting/beveling' },
      { label: 'Tube Cutting Tools', href: '/products/cold-cutting/tube-cutting' },
      { label: 'Cutting Accessories', href: '/products/cold-cutting/accessories' },
    ],
    'Specialized Tools': [
      { label: 'Flange Tools', href: '/products/specialized/flange-tools' },
      { label: 'Valve Maintenance Tools', href: '/products/specialized/valve-tools' },
      { label: 'Lifting & Positioning Tools', href: '/products/specialized/lifting' },
      { label: 'Custom Solutions', href: '/products/specialized/custom' },
    ],
  };

  return (
    <nav className="bg-black text-white md:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/xtroc.png" alt="Xtroc Logo" className="h-10 w-auto" />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="px-4 pb-4">
          <Link href="/about" className="block py-2 text-sm font-semibold hover:text-red-500">
            About us
          </Link>

          {/* Products Dropdown */}
          <button
            onClick={() => setProductsOpen(!productsOpen)}
            className="flex items-center justify-between w-full py-2 text-sm font-semibold hover:text-red-500"
          >
            Products
            {productsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {productsOpen && (
            <div className="pl-4">
              {Object.entries(productMenu).map(([category, items]) => (
                <div key={category}>
                  <button
                    onClick={() => toggleCategory(category)}
                    className="flex items-center justify-between w-full py-2 text-sm text-gray-300 hover:text-white"
                  >
                    {category}
                    {activeCategory === category ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    )}
                  </button>
                  {activeCategory === category && (
                    <div className="pl-4 pb-2">
                      {items.map(({ label, href }) => (
                        <Link
                          key={href}
                          href={href}
                          className="block py-1 text-sm text-gray-400 hover:text-red-500"
                          onClick={() => setIsOpen(false)}
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <Link href="/services" className="block py-2 text-sm font-semibold hover:text-red-500">
            Services
          </Link>
          <Link href="/industries" className="block py-2 text-sm font-semibold hover:text-red-500">
            Industries
          </Link>
          <Link href="/contact" className="block py-2 text-sm font-semibold hover:text-red-500">
            Contact us
          </Link>
          <Link href="/join" className="block py-2 text-sm font-semibold hover:text-red-500">
            Join us
          </Link>
          <Link href="/downloads" className="block py-2 text-sm font-semibold hover:text-red-500">
            Downloads
          </Link>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;

