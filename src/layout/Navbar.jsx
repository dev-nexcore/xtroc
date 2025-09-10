"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { BsDash } from "react-icons/bs";

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef(null);

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

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsOpen(false);
        setActiveSubmenu(null);
        setHoveredProduct(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-black  text-white lg:px-5 xl:px-25 2xl:px-10  md:py-3  w-full hidden md:flex justify-center">
      <div className=" ">
        <div className="flex items-center  h-12">
          {/* Logo */}
          <div className="flex  items-center">
            <Link href="/" className="flex items-center ">
              <img src="/xtroc.png" alt="Xtroc Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex flex-wrap items-center  md:gap-x-3  lg:gap-x-3 xl:gap-x-6 2xl:px-20  lg:px-10  gap-y-2  ml-4">
            <Link
              href="/aboutus"
              className={`text-white font-bold text-base transition-colors duration-200 
    hover:border-b-2 hover:border-red-500 
    ${pathname === "/aboutus" ? "border-b-2 border-red-500" : ""}`}
            >
              About us
            </Link>

            {/* Products Dropdown */}
            <div className="relative">
              {/* Products Button */}
              <div className="flex items-center">
                {/* Products link (navigates to /product) */}
                <a
                  href="/product"
                  className={`text-white font-bold text-base 
                  transition-colors duration-200 
                  hover:border-b-2 hover:border-red-500 
                  ${
                    pathname === "/product" ? "border-b-2 border-red-500" : ""
                  }`}
                >
                  Products
                </a>

                {/* Chevron button (toggles dropdown only) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    if (isProductsOpen) {
                      // Close karte waqt reset
                      setIsProductsOpen(false);
                      setActiveSubmenu(null);
                      setSelectedProduct(null);
                    } else {
                      // Open karte waqt always reset to stage 1
                      setActiveSubmenu(null);
                      setSelectedProduct(null);
                      setIsProductsOpen(true);
                    }
                  }}
                  className="ml-1"
                >
                  <ChevronDown className="h-4 w-4 text-white" />
                </button>
              </div>

              {/* Dropdown */}
              {isProductsOpen && (
                <div
                  className={`absolute top-full md:ml-[-280] lg:ml-[-360] mt-6 bg-white border border-gray-200 shadow-lg z-100 h-[550px] rounded-md flex transition-all duration-300
    ${
      selectedProduct
        ? "md:w-[800px] lg:w-[1000px] xl:w-[1100]" // stage 3 (image panel open)
        : activeSubmenu
        ? "w-[650px]" // stage 2 (sub categories open)
        : "w-[300px]" // stage 1 (only main categories)
    }`}
                  ref={dropdownRef}
                >
                  {/* Main Categories */}
                  <div className="flex font-bold  flex-col h-full w-[300px]">
                    <button
                      // onMouseEnter={() => setActiveSubmenu("bolt-tensioning")}
                      onClick={() => setActiveSubmenu("bolt-tensioning")}
                      className={`flex items-center  w-full flex-1 px-4 text-base text-gray-800 hover:bg-[#D9D9D9] group text-left
                        ${activeSubmenu === "bolt-tensioning" ? "bg-[#D9D9D9]" : "hover:bg-[#D9D9D9]"}`}
                    >
                      <span className="text-red-500 mr-3 text-lg group-hover:text-red-600">
                        »
                      </span>
                      Bolt Tensioning Solutions
                    </button>

                    <button
                      onClick={() => setActiveSubmenu("torque-wrenches")}
                      className={`flex items-center  w-full flex-1 px-4 text-base text-gray-800 hover:bg-[#D9D9D9] group text-left
                        ${activeSubmenu === "torque-wrenches" ? "bg-[#D9D9D9]" : "hover:bg-[#D9D9D9]"}`}
                    >
                    
                      <span className="text-red-500 mr-3 text-lg group-hover:text-red-600">
                        »
                      </span>
                      Torque Wrenches
                    </button>

                    <button
                      onClick={() => setActiveSubmenu("hydraulic-equipment")}
                     className={`flex items-center  w-full flex-1 px-4 text-base text-gray-800 hover:bg-[#D9D9D9] group text-left
                        ${activeSubmenu === "hydraulic-equipment" ? "bg-[#D9D9D9]" : "hover:bg-[#D9D9D9]"}`}
                    >
                      <span className="text-red-500 mr-3 text-lg group-hover:text-red-600">
                        »
                      </span>
                      Hydraulic Equipment
                    </button>

                    <button
                      onClick={() => setActiveSubmenu("cold-cutting")}
                      className={`flex items-center  w-full flex-1 px-4 text-base text-gray-800 hover:bg-[#D9D9D9] group text-left
                        ${activeSubmenu === "cold-cutting" ? "bg-[#D9D9D9]" : "hover:bg-[#D9D9D9]"}`}
                    >
                      <span className="text-red-500 mr-3 text-lg group-hover:text-red-600">
                        »
                      </span>
                      Cold Cutting and Beveling Tools
                    </button>

                    <button
                      onClick={() => setActiveSubmenu("specialized-tools")}
                      className={`flex items-center  w-full flex-1 px-4 text-base text-gray-800 hover:bg-[#D9D9D9] group text-left
                        ${activeSubmenu === "specialized-tools" ? "bg-[#D9D9D9]" : "hover:bg-[#D9D9D9]"}`}
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
                                link: "/multistagebolt",
                              })
                            }
                            className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left
    ${selectedProduct?.id === "multi-stud" ? "bg-[#D9D9D9]" : "hover:bg-[#D9D9D9]"}`}
>
                            <BsDash className="w-7 text-red-500 h-10" />
                            Multi Stud Bolt Tensioners
                          </button>

                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "hydraulic-tensioner",
                                link: "/hydraulicbolttensioners",
                              })
                            }
                            className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left
    ${selectedProduct?.id === "hydraulic-tensioner" ? "bg-[#D9D9D9]" : "hover:bg-[#D9D9D9]"}`}
>
                            <BsDash className="w-7 text-red-500 h-10" />
                            Hydraulic Bolt Tensioners
                          </button>

                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "pneumatic-powerpack",
                                link: "/pneumotic",
                              })
                            }
                            className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left
    ${selectedProduct?.id === "pneumatic-powerpack" ? "bg-[#D9D9D9]" : "hover:bg-[#D9D9D9]"}`}
>
                            <BsDash className="w-7 text-red-500 h-10" />
                            Pneumatic & Electric Powerpack
                          </button>

                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "electric-torque",
                                link: "ElectricTorque",
                              })
                            }
                            className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left
    ${selectedProduct?.id === "electric-torque" ? "bg-[#D9D9D9]" : "hover:bg-[#D9D9D9]"}`}
>
                            <BsDash className="w-7 text-red-500 h-10" />
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
                                link: "/hydraulictorque",
                              })
                            }
                            className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left
    ${selectedProduct?.id === "hydraulic-wrench" ? "bg-[#D9D9D9]" : "hover:bg-[#D9D9D9]"}`}
>
                            <BsDash className="w-7 text-red-500 h-10" />
                            Hydraulic Torque Wrenches
                          </button>

                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "electric-wrench",
                                link: "ElectricTorque",
                              })
                            }
                            className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left
    ${selectedProduct?.id === "electric-wrench" ? "bg-[#D9D9D9]" : "hover:bg-[#D9D9D9]"}`}
>
                            <BsDash className="w-7 text-red-500 h-10" />
                            Manual Torque Wrenches
                          </button>

                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "pneumatic-wrench",
                                link: "/electrictorquewrenches",
                              })
                            }
                            className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left
    ${selectedProduct?.id === "pneumatic-wrench" ? "bg-[#D9D9D9]" : "hover:bg-[#D9D9D9]"}`}
>
                            <BsDash className="w-7 text-red-500 h-10" />
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
                                link: "/handPumps",
                              })
                            }
                           className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left
    ${selectedProduct?.id === "hydraulic-pump" ? "bg-[#D9D9D9]" : "hover:bg-[#D9D9D9]"}`}
>
                            <BsDash className="w-7 text-red-500 h-10" />
                            Hydraulic Pumps and Hoses
                          </button>

                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "hydraulic-cylinder",
                                link: "/hydrotest",
                              })
                            }
                            className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left
    ${selectedProduct?.id === "hydraulic-cylinder" ? "bg-[#D9D9D9]" : "hover:bg-[#D9D9D9]"}`}
>
                            <BsDash className="w-7 text-red-500 h-10" />
                            Hydrotest Pump
                          </button>

                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "hydraulic-hose",
                                link: "/hydraulicjack",
                              })
                            }
                           className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left
    ${selectedProduct?.id === "hydraulic-hose" ? "bg-[#D9D9D9]" : "hover:bg-[#D9D9D9]"}`}
>
                            <BsDash className="w-7 text-red-500 h-10" />
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
                                link: "/pipeCutting",
                              })
                            }
                           className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left
    ${selectedProduct?.id === "pipe-cutting" ? "bg-[#D9D9D9]" : "hover:bg-[#D9D9D9]"}`}
>
                            <BsDash className="w-7 text-red-500 h-10" />
                            Pipe Cutting and Beveling Machines
                          </button>

                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "beveling-machine",
                                link: "/flangefacing",
                              })
                            }
                            className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left
    ${selectedProduct?.id === "beveling-machine" ? "bg-[#D9D9D9]" : "hover:bg-[#D9D9D9]"}`}
>
                            <BsDash className="w-7 text-red-500 h-10" />
                            Flange Machines
                          </button>

                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "tube-cutting",
                                link: "/casingcutter",
                              })
                            }
                            className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left
    ${selectedProduct?.id === "tube-cutting" ? "bg-[#D9D9D9]" : "hover:bg-[#D9D9D9]"}`}
>
                            <BsDash className="w-7 text-red-500 h-10" />
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
                                link: "/hydralicnut",
                              })
                            }
                            className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left
    ${selectedProduct?.id === "flange-tool" ? "bg-[#D9D9D9]" : "hover:bg-[#D9D9D9]"}`}
>
                            <BsDash className="w-7 text-red-500 h-10" />
                            Hydraulic Nut Splitter
                          </button>

                          <button
                            onClick={() =>
                              setSelectedProduct({
                                id: "valve-tool",
                                link: "/FlangeSpreaders",
                              })
                            }
                           className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left
    ${selectedProduct?.id === "valve-tool" ? "bg-[#D9D9D9]" : "hover:bg-[#D9D9D9]"}`}
>
                            <BsDash className="w-7 text-red-500 h-10" />
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
              className={`text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-bold
                ${pathname === "/services" ? "border-b-2 border-red-500" : ""}`}
            >
              Services
            </Link>
            <Link
              href="/distributor"
              className={`text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-bold
    ${pathname === "/distributor" ? "border-b-2 border-red-500" : ""}`}
            >
              Distributor
            </Link>

            <Link
              href="/industry"
              className={`text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-bold 
              ${pathname === "/industry" ? "border-b-2 border-red-500" : ""}`}
            >
              Industries
            </Link>

            <Link
              href="/contact"
              className={`text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-bold 
              ${pathname === "/contact" ? "border-b-2 border-red-500" : ""}`}
            >
              Contact us
            </Link>

            <Link
              href="/Joinus"
              className={`text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-bold 
              ${pathname === "/Joinus" ? "border-b-2 border-red-500" : ""}`}
            >
              Join us
            </Link>

            <Link
              href="/download"
              className={`text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-bold 
              ${pathname === "/download" ? "border-b-2 border-red-500" : ""}`}
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
