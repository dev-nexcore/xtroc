"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { BsDash } from "react-icons/bs";
import { style } from "framer-motion/client";

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  // Subcategories + images
  const categories = {
    "insitu-machinning": [
      { id: "pipe-cutting", name: "Pipe Cutting Machine XTCB Series", img: "images/Insitumachinning/pipe.png"},
      { id: "id-bevelling", name: "ID Bevelling Machine", img: "images/Insitumachinning/bevelling.png" },
      { id: "flange-facing", name: "Flange Facing Machine", img: null },
    ],
    "bolting-tools": [
      { id: "hydraulic-torque", name: "Hydraulic Torque Wrench", img: null },
      { id: "square-drive", name: "Square Drive - XTS Series", img: "images/BoltingTools/squaredrive.png" },
      { id: "hex-drive", name: "Hex Drive - XTH Series", img: "images/BoltingTools/hexdrive.png" },
    ],
    "bolt-tensioner": [
      { id: "topside-tensioner", name: "Top Side Bolt Tensioner", img: null },
      { id: "multi-stage-tensioner", name: "Multi Stage Bolt Tensioner", img: null },
      { id: "subsea-tensioner", name: "Subsea Bolt Tensioner", img: null },
    ],
    "hydraulic-powerpack": [
      { id: "xep700", name: "XEP700", img: "images/Power-Pack/XEP700.png" },
      { id: "xap700", name: "XAP 700", img: "images/Power-Pack/XAP 700.png" },
      { id: "xep1500", name: "XEP1500", img: null },
      { id: "xap1500", name: "XAP1500", img: "images/Power-Pack/XAP1500.png" },
    ],
    "accesories": [
      { id: "jacks", name: "Jacks / Cylinders", img: "images/accesories/jackscylinders.png" },
      { id: "handpump", name: "Handpump", img: "images/accesories/handpump.png" },
      { id: "flange-spreaders", name: "Flange Spreaders", img: "images/accesories/flangespreaders.png" },
    ],
    "impact-sockets": [
      { id: "nut-splitters", name: "Nut Splitters", img: null },
      { id: "sockets", name: "Sockets", img: "images/impact-sockets/Sockets.png" },
      { id: "reducers", name: "Reducers", img: "images/impact-sockets/Reducers.png" },
    ],
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsOpen(false);
        setActiveSubmenu(null);
        setSelectedProduct(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-black text-white lg:px-5 xl:px-25  2xl:px-10 md:py-3 w-full hidden md:flex md:justify-center">
      <div className="">
        <div className="flex items-center h-12 lg:gap-6 xl:gap-16 2xl:gap-20">
  {/* Logo */}
  <div className="flex items-center">
    <Link href="/" className="flex items-center">
      <img src="/xtroc.png" alt="Xtroc Logo" className="h-10 w-auto" />
    </Link>
  </div>

  {/* Navigation Links */}
  <div className="hidden md:flex flex-wrap items-center md:gap-x-3 lg:gap-x-6 xl:gap-x-8 2xl:gap-x-10 gap-y-2">
            <Link
              href="/aboutus"
              className={`text-white font-bold text-base transition-colors duration-200 hover:border-b-2 hover:border-red-500 ${
                pathname === "/aboutus" ? "border-b-2 border-red-500" : ""
              }`}
            >
              About us
            </Link>

            {/* Products Dropdown */}
            <div className="relative">
              <div className="flex items-center">
                <a
                  href="/product"
                  className={`text-white font-bold text-base transition-colors duration-200 hover:border-b-2 hover:border-red-500 ${
                    pathname === "/product" ? "border-b-2 border-red-500" : ""
                  }`}
                >
                  Products
                </a>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsProductsOpen((prev) => !prev);
                    setActiveSubmenu(null);
                    setSelectedProduct(null);
                  }}
                  className="ml-1"
                >
                  <ChevronDown className="h-4 w-4 text-white" />
                </button>
              </div>

              {isProductsOpen && (
                <div
                  className={`absolute top-full mt-6 bg-white border border-gray-200 shadow-lg z-100 h-[550px] xl:ml-[-300] rounded-bl-2xl rounded-br-2xl flex transition-all duration-300 ${
                    selectedProduct
                      ? "md:w-[800px] lg:w-[1000px] xl:w-[1100]"
                      : activeSubmenu
                      ? "w-[650px]"
                      : "w-[300px]"
                  }`}
                  ref={dropdownRef}
                >
                  {/* Main Categories */}
                  <div className="flex font-bold flex-col h-full w-[300px]">
                    <button
                      onClick={() => setActiveSubmenu("insitu-machinning")}
                      className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left ${
                        activeSubmenu === "insitu-machinning"
                          ? "bg-[#D9D9D9]"
                          : "hover:bg-[#D9D9D9]"
                      }`}
                    >
                      Insitu Machinning
                    </button>

                    <button
                      onClick={() => setActiveSubmenu("bolting-tools")}
                      className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left ${
                        activeSubmenu === "bolting-tools"
                          ? "bg-[#D9D9D9]"
                          : "hover:bg-[#D9D9D9]"
                      }`}
                    >
                      Bolting Tools
                    </button>

                    <button
                      onClick={() => setActiveSubmenu("bolt-tensioner")}
                      className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left ${
                        activeSubmenu === "bolt-tensioner"
                          ? "bg-[#D9D9D9]"
                          : "hover:bg-[#D9D9D9]"
                      }`}
                    >
                      Bolt Tensioner
                    </button>

                    <button
                      onClick={() => setActiveSubmenu("hydraulic-powerpack")}
                      className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left ${
                        activeSubmenu === "hydraulic-powerpack"
                          ? "bg-[#D9D9D9]"
                          : "hover:bg-[#D9D9D9]"
                      }`}
                    >
                      Hydraulic Torquing Power Pack
                    </button>

                    <button
                      onClick={() => setActiveSubmenu("accesories")}
                      className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left ${
                        activeSubmenu === "accesories"
                          ? "bg-[#D9D9D9]"
                          : "hover:bg-[#D9D9D9]"
                      }`}
                    >
                      Accesories
                    </button>

                    <button
                      onClick={() => setActiveSubmenu("impact-sockets")}
                      className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left ${
                        activeSubmenu === "impact-sockets"
                          ? "bg-[#D9D9D9] rounded-bl-2xl"
                          : "hover:bg-[#D9D9D9]"
                      }`}
                    >
                      Impact Sockets
                    </button>
                  </div>

                  {/* Subcategories */}
                  {activeSubmenu && (
                    <div className="w-[350px] h-full font-bold flex flex-col border-l border-gray-200 bg-gray-50">
                      {categories[activeSubmenu].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setSelectedProduct(item)}
                          className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left ${
                            selectedProduct?.id === item.id
                              ? "bg-[#D9D9D9]"
                              : "hover:bg-[#D9D9D9]"
                          }`}
                        >
                          <BsDash className="w-7 text-red-500 h-10" />
                          {item.name}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Image Preview */}
                  {selectedProduct && (
                    <div className="w-[600px] flex items-center justify-center h-full border-l border-gray-200 rounded-br-2xl bg-white">
                      <div className="px-2">
                        {selectedProduct.img ? (
                          <img
                            src={selectedProduct.img}
                            alt={selectedProduct.name}
                            className="w-full h-[400px] object-contain rounded-md cursor-pointer hover:opacity-90 transition"
                          />
                        ) : (
                          <div className="w-full h-[400px] flex items-center justify-center text-gray-500">
                            Image not provided
                          </div>
                        )}
                        <div className="text-red-500 font-bold text-base text-center capitalize mt-2">
                          {selectedProduct.name}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Other nav links */}
            <Link
              href="/services"
              className={`text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-bold ${
                pathname === "/services" ? "border-b-2 border-red-500" : ""
              }`}
            >
              Services
            </Link>
            <Link
              href="/distributor"
              className={`text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-bold ${
                pathname === "/distributor" ? "border-b-2 border-red-500" : ""
              }`}
            >
              Distributor
            </Link>
            <Link
              href="/industry"
              className={`text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-bold ${
                pathname === "/industry" ? "border-b-2 border-red-500" : ""
              }`}
            >
              Industries
            </Link>
            <Link
              href="/contact"
              className={`text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-bold ${
                pathname === "/contact" ? "border-b-2 border-red-500" : ""
              }`}
            >
              Contact us
            </Link>
            <Link
              href="/Joinus"
              className={`text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-bold ${
                pathname === "/Joinus" ? "border-b-2 border-red-500" : ""
              }`}
            >
              Join us
            </Link>
            <Link
              href="/download"
              className={`hidden lg:block text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-bold ${
                pathname === "/download" ? "border-b-2 border-red-500" : ""
              }`}
            >
              Downloads
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
