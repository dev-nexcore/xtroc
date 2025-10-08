"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronDown, Rotate3D } from "lucide-react";
import { usePathname } from "next/navigation";
import { BsDash } from "react-icons/bs";
import { FaAngleDoubleRight } from "react-icons/fa";

const Navbar = () => {
  const [activeChildMenu, setActiveChildMenu] = useState([]);


  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const router = useRouter();
  const pathname = usePathname();
  const serviceRef = useRef(null);
  const productRef = useRef(null);

  const closeProductDropdown = () => {
  setIsProductsOpen(false);
  setActiveSubmenu(null);
  setSelectedProduct(null);
  setActiveChildMenu([]);
};

// Function to close all service dropdowns
const closeServiceDropdown = () => {
  setIsServicesOpen(false);
  setSelectedService(null);
};

  // Subcategories + images
  const categories = {
    "insitu-machinning": [
      {
        id: "pipe-cutting",
        name: "Pipe Cutting Machine XTCB Series",
        img: "product4.png",
        path: "pipeCutting",
        width: 500,
        height: 400
      },
      {
        id: "id-bevelling",
        name: "ID Bevelling Machine",
        img: "images/Insitumachinning/bevelling.png",
        path: "bevellingmachine",
      },
      {
        id: "flange-facing",
        name: "Flange Facing Machine",
        img: "flangefacing.png",
        path: "flangefacing",
      },
    ],
    "bolting-tools": [
  {
    id: "hydraulic-torque",   // 👇 must match child key
    name: "Hydraulic Torque Wrench",
    img: "hydraulictorque.png",
    path: "hydraulictorque",
  },
  {
    id: "bolt-tensioner",     // 👇 must match child key
    name: "Bolt Tensioners",
    img: "hydraulictorque.png",
    path: "hydraulictorque",
  },
],

// ✅ children of hydraulic-torque
"hydraulic-torque": [
  { id: "square-drive", name: "Square Drive" ,img:"images/BoltingTools/squaredrive.png",path:"squaredrive"},
  { id: "hex-drive", name: "Hex Drive",img:"product2.png",path:"hexdrive" }
  
],

// ✅ children of bolt-tensioner
"bolt-tensioner": [
  { id: "topside-tensioner", name: "Top Side Bolt Tensioner", img:"product5.png",path: "topsidebolt" },
  { id: "multi-stage-tensioner", name: "Multi Stage Bolt Tensioner",img:"multistagebolt.png", path: "multistagebolt" },
  { id: "subsea-tensioner", name: "Subsea Bolt Tensioner", img:"subsea.png",path: "subseabolt" },
],

    // "bolt-tensioner": [
    //   {
    //     id: "topside-tensioner",
    //     name: "Top Side Bolt Tensioner",
    //     img: null,
    //     path: "topsidebolt",
    //   },
    //   {
    //     id: "multi-stage-tensioner",
    //     name: "Multi Stage Bolt Tensioner",
    //     img: null,
    //     path: "multistagebolt",
    //   },
    //   {
    //     id: "subsea-tensioner",
    //     name: "Subsea Bolt Tensioner",
    //     img: null,
    //     path: "subseabolt",
    //   },
    // ],
    "hydraulic-powerpack": [
      {
        id: "xep700",
        name: "XEP700",
        img: "images/Power-Pack/XEP700.png",
        path: "xep700",
      },
      {
        id: "xap700",
        name: "XAP 700",
        img: "images/Power-Pack/XAP 700.png",
        path: "xap700",
      },
      { id: "xep1500", name: "XEP1500", img: "images/Power-Pack/xep1500.png", path: "xep1500" },
      {
        id: "xap1500",
        name: "XAP1500",
        img: "images/Power-Pack/XAP1500.png",
        path: "xap1500",
      },
    ],
    accesories: [
      {
        id: "jacks",
        name: "Jacks / Cylinders",
        img: "images/accesories/jackscylinders.png",
        path: "hydraulicjack",
      },
      {
        id: "handpump",
        name: "Handpump",
        img: "images/accesories/handpump.png",
        path: "handPumps",
      },
      {
        id: "flange-spreaders",
        name: "Flange Spreaders",
        img: "images/accesories/flangespreaders.png",
        path: "FlangeSpreaders",
      },
    ],
    "impact-sockets": [
      {
        id: "nut-splitters",
        name: "Nut Splitters",
        img: "nut_spilitter.png",
        path: "hydralicnut",
        
        width: 600,
        height: 400
      },
      {
        id: "sockets",
        name: "Sockets",
        img: "images/impact-sockets/Sockets.png",
        path: "socket",
      },
      {
        id: "reducers",
        name: "Reducers",
        img: "images/impact-sockets/Reducers.png",
        path: "reducer",
      },
    ],
  };

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const servicesList = [
    {
      id: "bolt-torquing",
      name: "Bolt Torquing & Tensioning",
      img: "boltt.jpg",
      path: "bolttorquing",
      width: 400,
      height: 390,
    },
    {
      id: "cold-cutting",
      name: "Cold Cutting & Beveling",
      img: "pipeCold.jpg",
      path: "coldcutting",
      width: 400,
      height: 390,
    },
    {
      id: "flange-facing",
      name: "Flange Facing",
      img: "facing.jpg",
      path: "flangefacingservice",
      width: 400,
      height: 390,
    },
    
    {
      id: "hot-tapping",
      name: "Hot-Tapping & Line Stopple",
      img: "tap.jpg",
      path: "hottapping",
      width: 400,
      height: 391,
    },
    {
      id: "re-tubing",
      name: "Calibration",
      img: "callib.avif",
      path: "retubbing",
      width: 400,
      height: 300,
    },
    {
      id: "water-jet",
      name: "Water Jet Cutting",
      img: "wjet.jpg",
      path: "waterjet",
      width: 400,
      height: 400,      
    },
    
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      // Close Products dropdown if click is outside it
      if (
        productRef.current &&
        !productRef.current.contains(event.target)
      ) {
        setIsProductsOpen(false);
        setActiveSubmenu(null);
        setSelectedProduct(null);
      }

      // Close Services dropdown if click is outside it
      if (
        serviceRef.current &&
        !serviceRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
        setSelectedService(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
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
                  className={`absolute top-full mt-6 bg-white border border-gray-200 shadow-lg z-100 h-[550px] xl:ml-[-300] md:ml-[-200] rounded-bl-2xl rounded-br-2xl flex transition-all duration-300 ${
                    selectedProduct
                      ? "md:w-[800px] lg:w-[1000px] xl:w-[1100]"
                      : activeSubmenu
                      ? "w-[650px]"
                      : "w-[300px]"
                  }`}
                  ref={productRef}
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
                      <FaAngleDoubleRight className="text-red-500 text-xl  flex-shrink-0 md:mr-4" />
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
                      <FaAngleDoubleRight className="text-red-500 text-xl  flex-shrink-0 md:mr-4" />
                      Bolting Tools
                    </button>

                    {/* <button
                      onClick={() => setActiveSubmenu("bolt-tensioner")}
                      className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left ${
                        activeSubmenu === "bolt-tensioner"
                          ? "bg-[#D9D9D9]"
                          : "hover:bg-[#D9D9D9]"
                      }`}
                    >
                      <FaAngleDoubleRight className="text-red-500 text-xl  flex-shrink-0 md:mr-4" />
                      Bolt Tensioner
                    </button> */}

                    <button
                      onClick={() => setActiveSubmenu("hydraulic-powerpack")}
                      className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left ${
                        activeSubmenu === "hydraulic-powerpack"
                          ? "bg-[#D9D9D9]"
                          : "hover:bg-[#D9D9D9]"
                      }`}
                    >
                      <FaAngleDoubleRight className="text-red-500 text-xl  flex-shrink-0 md:mr-4" />
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
                      <FaAngleDoubleRight className="text-red-500 text-xl  flex-shrink-0 md:mr-4" />
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
                      <FaAngleDoubleRight className="text-red-500 text-xl  flex-shrink-0 md:mr-4" />
                      Impact Sockets
                    </button>
                  </div>

                  {/* Subcategories */}
               {/* Subcategories */}
{activeSubmenu && (
  <div className="w-[350px] gap-10 text-gray-800 h-full font-bold flex flex-col border-l border-gray-200 bg-gray-50">
    {categories[activeSubmenu].map((item) => (
      <div key={item.id} className="flex flex-col">
        <button
  onClick={() => {
    if (categories[item.id]) {
      setActiveChildMenu((prev) =>
        prev.includes(item.id)
          ? prev.filter((id) => id !== item.id)
          : [...prev, item.id]
      );
      setSelectedProduct(null);
    } else {
      setSelectedProduct(item);
    }
  }}
  className="flex items-center gap-2 text-left py-2 px-4 hover:bg-gray-100"
>
  <BsDash className="text-red-500 w-5 h-5" />
  <span>{item.name}</span>
</button>


        {/* Child Submenu */}
       {activeChildMenu.includes(item.id) && categories[item.id] && (

          <div className="ml-8  flex flex-col text-gray-500 text-md gap-10 mt-10">
            {categories[item.id].map((child) => (
              <button
                key={child.id}
                onClick={() => setSelectedProduct(child)}
                className={`text-left py-1 px-2 ${
                  selectedProduct?.id === child.id
                    ? "text-red-500 font-semibold"
                    : "hover:text-red-500"
                }`}
              >
                {child.name}
              </button>
            ))}
          </div>
        )}
      </div>
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
                            className="object-cover rounded-md cursor-pointer hover:opacity-90 transition"
                            style={{
                              width: `${selectedProduct.width || 400}px`,
                              height: `${selectedProduct.height || 400}px`,
                            }}
                            onClick={() => {
  closeProductDropdown();
  router.push(selectedProduct.path);
}}
                          />
                        ) : (
                          <div
                            className="flex items-center justify-center text-gray-500"
                            style={{
                              width: `${selectedProduct.width || 400}px`,
                              height: `${selectedProduct.height || 300}px`,
                            }}
                            onClick={() => {
  closeProductDropdown();
  router.push(selectedProduct.path);
}}
                          >
                            Image not provided
                          </div>
                        )}
                        <div
                          className="text-red-500 font-bold text-base text-center capitalize mt-2 cursor-pointer"
                          onClick={() => router.push(selectedProduct.path)}
                        >
                          {selectedProduct.name}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsServicesOpen((prev) => !prev);
                  setSelectedService(null);
                }}
                className="flex items-center text-white font-bold text-base transition-colors duration-200 hover:border-b-2 hover:border-red-500"
              >
                Services
                <ChevronDown className="h-4 w-4 text-white ml-1" />
              </button>

              {isServicesOpen && (
                <div
                  ref={serviceRef}
                  className={`absolute top-full mt-6 bg-white border border-gray-200 shadow-lg z-100 h-[500px] rounded-bl-2xl rounded-br-2xl flex ml-[-300] transition-all duration-300`}
                  style={{
                    width: selectedService ? `${selectedService.width + 400}px` : "300px"
                  }}
                >
                  {/* Service list */}
                  <div className="flex flex-col h-full w-[300px] font-bold">
                    {servicesList.map((svc) => (
                      <button
                        key={svc.id}
                        onClick={() => setSelectedService(svc)}
                        className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left ${
                          selectedService?.id === svc.id
                            ? "bg-[#D9D9D9] rounded-bl-xl"
                            : "hover:bg-[#D9D9D9] rounded-bl-xl"
                        }`}
                      >
                        <BsDash className="w-7 text-red-500 h-10" />
                        {svc.name}
                      </button>
                    ))}
                  </div>

                  {/* Image preview appears only when clicked */}
                  {selectedService && (
                    <div className="w-[500px] flex flex-col items-center justify-center h-full border-l border-gray-200 bg-white rounded-br-2xl">
                      {/* Image Section - Fixed container */}
                      <div className="flex-1 flex items-center justify-center px-4">
                        {selectedService.img ? (
                          <img
                            src={selectedService.img}
                            alt={selectedService.name}
                            className="object-contain cursor-pointer hover:opacity-90 transition rounded-md"
                            style={{
                              width: `${selectedService.width}px`,
                              height: `${selectedService.height}px`,
                            }}
                            onClick={() => {
  closeServiceDropdown();
  router.push(selectedService.path);
}}
                          />
                        ) : (
                          <div
                            className="flex items-center justify-center text-gray-500 cursor-pointer border border-gray-300 rounded-md"
                            style={{
                              width: `${selectedService.width}px`,
                              height: `${selectedService.height}px`,
                            }}
                            onClick={() => {
  closeServiceDropdown();
  router.push(selectedService.path);
}}
                          >
                            Image not provided
                          </div>
                        )}
                      </div>
                      
                      {/* Text Section - Fixed height */}
                      <div className="h-16 flex items-center justify-center px-4 w-full">
                        <div
                          className="text-red-500 font-bold text-lg text-center capitalize cursor-pointer hover:text-red-600 transition"
                          onClick={() => router.push(selectedService.path)}
                        >
                          {selectedService.name}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

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