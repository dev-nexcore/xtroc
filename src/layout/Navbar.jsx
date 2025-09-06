"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  // format: { id: 'electric-wrench', link: '/products/torque-wrenches/electric' }

  // Define this at the top of your component
  const productImages = {
    "multi-stud": "/images/bolt-tensioning/multi-stud.png",
    "hydraulic-tensioner": "/images/bolt-tensioning/hydraulic.png",
    "pneumatic-powerpack": "/images/bolt-tensioning/pneumatic.png",
    "electric-torque": "/images/bolt-tensioning/electric.png",
    "hydraulic-wrench": "/images/torque-wrenches/hydraulic.png",
    "electric-wrench": "/images/torque-wrenches/electric.png",
    "pneumatic-wrench": "/images/torque-wrenches/pneumatic.png",
    "hydraulic-pump": "/images/hydraulic/pump.png",
    "hydraulic-cylinder": "/images/hydraulic/cylinder.png",
    "hydraulic-hose": "/images/hydraulic/hoses.png",
    "pipe-cutting": "/images/cold-cutting/pipe.png",
    "beveling-machine": "/images/cold-cutting/beveling.png",
    "tube-cutting": "/images/cold-cutting/tube.png",
    "flange-tool": "/images/specialized/flange.png",
    "valve-tool": "/images/specialized/valve.png",
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
              href="/aboutus"
              className="text-white font-bold  text-base  hover:border-b-2 border-red-500 transition-colors duration-200  "
            >
              About us
            </Link>

            {/* Products Dropdown */}
            <div className="relative">
               <Link
        href="/product"
        className="flex items-center text-white hover:text-red-500 transition-colors duration-200 text-base font-bold"
        onMouseEnter={() => setIsProductsOpen(true)}
        onMouseLeave={() => setIsProductsOpen(false)}
      >
        Products
        <ChevronDown className="ml-1 h-4 w-4" />
      </Link>

              {isProductsOpen && (
                <div
                  className="absolute top-full -left-85 mt-6 bg-white border border-gray-200 shadow-lg z-50 w-[1100px] h-[550px] rounded-md flex"
                  onMouseLeave={() => {
                    setIsProductsOpen(false);
                    setActiveSubmenu(null);
                    setHoveredProduct(null);
                  }}
                >
                  {/* Main Categories */}
                  <div className="flex font-bold  flex-col h-full w-[300px]">
                    <button
                      onMouseEnter={() => setActiveSubmenu("bolt-tensioning")}
                      className="flex items-center  w-full flex-1 px-4 text-base text-gray-800 hover:bg-gray-100 group text-left"
                    >
                      <span className="text-red-500 mr-3 text-lg group-hover:text-red-600">
                        »
                      </span>
                      Bolt Tensioning Solutions
                    </button>

                    <button
                      onMouseEnter={() => setActiveSubmenu("torque-wrenches")}
                      className="flex items-center w-full flex-1 px-4 text-base text-gray-800 hover:bg-gray-100 group text-left"
                    >
                      <span className="text-red-500 mr-3 text-lg group-hover:text-red-600">
                        »
                      </span>
                      Torque Wrenches
                    </button>

                    <button
                      onMouseEnter={() =>
                        setActiveSubmenu("hydraulic-equipment")
                      }
                      className="flex items-center w-full flex-1 px-4 text-base text-gray-800 hover:bg-gray-100 group text-left"
                    >
                      <span className="text-red-500 mr-3 text-lg group-hover:text-red-600">
                        »
                      </span>
                      Hydraulic Equipment
                    </button>

                    <button
                      onMouseEnter={() => setActiveSubmenu("cold-cutting")}
                      className="flex items-center w-full flex-1 px-4 text-base text-gray-800 hover:bg-gray-100 group text-left"
                    >
                      <span className="text-red-500 mr-3 text-lg group-hover:text-red-600">
                        »
                      </span>
                      Cold Cutting and Beveling Tools
                    </button>

                    <button
                      onMouseEnter={() => setActiveSubmenu("specialized-tools")}
                      className="flex items-center w-full flex-1 px-4 text-base text-gray-800 hover:bg-gray-100 group text-left"
                    >
                      <span className="text-red-500 mr-3 text-lg group-hover:text-red-600">
                        »
                      </span>
                      Specialized Tools
                    </button>
                  </div>

                  {/* Secondary Menu */}
                  {activeSubmenu && (
                    <div className="w-[350px] h-full font-bold flex flex-col border-l border-gray-200 bg-gray-50">
                      {activeSubmenu === "bolt-tensioning" && (
                        <>
                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "multi-stud",
                                link: "/products/bolt-tensioning/multi-stud",
                              })
                            }
                            className="flex items-center w-full flex-1 px-4 text-base text-gray-800 hover:bg-gray-100 text-left"
                          >
                            Multi Stud Bolt Tensioners
                          </button>

                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "hydraulic-tensioner",
                                link: "/products/bolt-tensioning/hydraulic",
                              })
                            }
                            className="flex items-center w-full flex-1 px-4 text-base text-gray-800 hover:bg-gray-100 text-left"
                          >
                            Hydraulic Bolt Tensioners
                          </button>

                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "pneumatic-powerpack",
                                link: "/products/bolt-tensioning/pneumatic",
                              })
                            }
                            className="flex items-center w-full flex-1 px-4 text-base text-gray-800 hover:bg-gray-100 text-left"
                          >
                            Pneumatic & Electric Powerpack
                          </button>

                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "electric-torque",
                                link: "/products/bolt-tensioning/electric",
                              })
                            }
                            className="flex items-center w-full flex-1 px-4 text-base text-gray-800 hover:bg-gray-100 text-left"
                          >
                            Electric & Pneumatic Torque Wrenches
                          </button>
                        </>
                      )}

                      {activeSubmenu === "torque-wrenches" && (
                        <>
                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "hydraulic-wrench",
                                link: "/products/torque-wrenches/hydraulic-wrench",
                              })
                            }
                            className="flex items-center w-full flex-1 px-4 text-base text-gray-800 hover:bg-gray-100 text-left"
                          >
                            Hydraulic Torque Wrenches
                          </button>

                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "electric-wrench",
                                link: "/products/torque-wrenches/electric",
                              })
                            }
                            className="flex items-center w-full flex-1 px-4 text-base text-gray-800 hover:bg-gray-100 text-left"
                          >
                            Manual Torque Wrenches
                          </button>

                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "pneumatic-wrench",
                                link: "/products/torque-wrenches/pneumatic",
                              })
                            }
                            className="flex items-center w-full flex-1 px-4 text-base text-gray-800 hover:bg-gray-100 text-left"
                          >
                            Electric Torque Wrenches
                          </button>
                        </>
                      )}

                      {activeSubmenu === "hydraulic-equipment" && (
                        <>
                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "hydraulic-pump",
                                link: "/products/hydraulic/pumps",
                              })
                            }
                            className="flex items-center w-full flex-1 px-4 text-base text-gray-800 hover:bg-gray-100 text-left"
                          >
                            Hydraulic Pumps and Hoses
                          </button>

                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "hydraulic-cylinder",
                                link: "/products/hydraulic/cylinders",
                              })
                            }
                            className="flex items-center w-full flex-1 px-4 text-base text-gray-800 hover:bg-gray-100 text-left"
                          >
                            Hydrotest Pump
                          </button>

                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "hydraulic-hose",
                                link: "/products/hydraulic/hoses-and-fittings",
                              })
                            }
                            className="flex items-center w-full flex-1 px-4 text-base text-gray-800 hover:bg-gray-100 text-left"
                          >
                            Hydraulic Jacks
                          </button>
                        </>
                      )}

                      {activeSubmenu === "cold-cutting" && (
                        <>
                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "pipe-cutting",
                                link: "/products/cold-cutting/pipe-cutting",
                              })
                            }
                            className="flex items-center w-full flex-1 px-4 text-base text-gray-800 hover:bg-gray-100 text-left"
                          >
                            Pipe Cutting and Beveling Machines
                          </button>

                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "beveling-machine",
                                link: "/products/cold-cutting/beveling-machines",
                              })
                            }
                            className="flex items-center w-full flex-1 px-4 text-base text-gray-800 hover:bg-gray-100 text-left"
                          >
                            Flange Machines
                          </button>

                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "tube-cutting",
                                link: "/products/cold-cutting/tube-cutting",
                              })
                            }
                            className="flex items-center w-full flex-1 px-4 text-base text-gray-800 hover:bg-gray-100 text-left"
                          >
                            Casing Cutter
                          </button>
                        </>
                      )}

                      {activeSubmenu === "specialized-tools" && (
                        <>
                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "flange-tool",
                                link: "/products/specialized/flange-tools",
                              })
                            }
                            className="flex items-center w-full flex-1 px-4 text-base text-gray-800 hover:bg-gray-100 text-left"
                          >
                            Hydraulic Nut Splitter
                          </button>

                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "valve-tool",
                                link: "/products/specialized/valve-maintenance-tools",
                              })
                            }
                            className="flex items-center w-full flex-1 px-4 text-base text-gray-800 hover:bg-gray-100 text-left"
                          >
                            Flange Spreader
                          </button>
                        </>
                      )}
                    </div>
                  )}

                  {/* Image Display Panel */}
                  {selectedProduct && (
                    <div className="w-[600px]  flex items-center justify-center h-full  border-l border-gray-200 bg-white">
                      <div className="px-2 ">
                        <Link href={selectedProduct.link}>
                          <img
                            src={
                              productImages[selectedProduct.id] ||
                              "/images/placeholder-product.jpg"
                            }
                            alt={selectedProduct.id}
                            className="w-full h-[400px]   px-2 py-2 object-contain rounded-md cursor-pointer hover:opacity-90 transition"
                          />
                        </Link>
                        <div className="text-red-500 font-bold text-base justify-center  text-center capitalize mt-2">
                          {selectedProduct.id.replace("-", " ")}
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
              href="/industry"
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
              href="/Joinus"
              className="text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-bold "
            >
              Join us
            </Link>

            <Link
              href="/download"
              className="text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-bold "
            >
              Downloads
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:border-b-2 border-red-500">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
