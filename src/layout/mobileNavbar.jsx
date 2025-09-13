"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

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

// NEW services list
const servicesList = [
  {
    id: "bolt-torquing",
    name: "Bolt Torquing & Tensioning",
    img: "boltt.jpg",
    width: 400,
    height: 390,
  },
  {
    id: "cold-cutting",
    name: "Cold Cutting & Beveling",
    img: "pipeCold.jpg",
    width: 400,
    height: 390,
  },
  {
    id: "flange-facing",
    name: "Flange Facing",
    img: "facing.jpg",
    width: 400,
    height: 390,
  },
  {
    id: "hot-tapping",
    name: "Hot-Tapping & Line Stopple",
    img: "tap.jpg",
    width: 400,
    height: 390,
  },
  {
    id: "re-tubing",
    name: "Re-Tubing of Boilers & Heat Exchangers",
    img: "callib.avif",
    width: 400,
    height: 300,
  },
  {
    id: "water-jet",
    name: "Water Jet Cutting",
    img: "jet.png",
    width: 400,
    height: 400,
  },
];

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSub, setActiveSub] = useState(null);
  const [activeService, setActiveService] = useState(false); // NEW state for Services
  const pathname = usePathname();

  return (
    <nav className="md:hidden bg-black text-white w-full p-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <Link href="/">
          <img src="/xtroc.png" alt="Xtroc Logo" className="h-8" />
        </Link>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 space-y-1">
          <Link
            href="/aboutus"
            className={`block py-1 ${pathname === "/aboutus" ? "text-red-500 font-bold" : ""}`}
          >
            About Us
          </Link>

          {/* Products Dropdown */}
          <div>
            <div className="flex justify-between items-center w-full">
              <Link href="/product" className="py-2 font-semibold">
                Products
              </Link>
              <button
                onClick={() =>
                  setActiveCategory(activeCategory === "products" ? null : "products")
                }
              >
                {activeCategory === "products" ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
            </div>

            {activeCategory === "products" && (
              <div className="ml-4 mt-2 space-y-2">
                {Object.keys(categories).map((cat) => (
                  <div key={cat}>
                    <button
                      onClick={() =>
                        setActiveSub(activeSub === cat ? null : cat)
                      }
                      className="flex justify-between w-full text-left py-2"
                    >
                      {cat.replace("-", " ")}
                      {activeSub === cat ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>

                    {activeSub === cat && (
                      <div className="ml-4 mt-1 space-y-2">
                        {categories[cat].map((item) => (
                          <div key={item.id} className="flex items-center gap-2 py-1">
                            {item.img && (
                              <img
                                src={`/${item.img}`}
                                alt={item.name}
                                className="w-10 h-10 object-contain"
                              />
                            )}
                            <span>{item.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown (NEW) */}
          <div>
            <div className="flex justify-between items-center w-full">
              <Link href="/services" className="py-2 font-semibold">
                Services
              </Link>
              <button
                onClick={() => setActiveService(!activeService)}
              >
                {activeService ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
            </div>

            {activeService && (
              <div className="ml-4 mt-2 space-y-2">
                {servicesList.map((svc) => (
                  <div
                    key={svc.id}
                    className="flex items-center gap-3 py-2"
                  >
                    {svc.img && (
                      <img
                        src={`/${svc.img}`}
                        alt={svc.name}
                        // use the service's own width/height but limit with max-w
                        style={{
                          width: `${svc.width / 8}px`,
                          height: `${svc.height / 8}px`,
                        }}
                        className="object-contain rounded"
                      />
                    )}
                    <span>{svc.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Other Links */}
          <Link
            href="/distributor"
            className={`block py-1 ${pathname === "/distributor" ? "text-red-500 font-bold" : ""}`}
          >
            Distributor
          </Link>
          <Link
            href="/industry"
            className={`block py-1 ${pathname === "/industry" ? "text-red-500 font-bold" : ""}`}
          >
            Industries
          </Link>
          <Link
            href="/contact"
            className={`block py-1 ${pathname === "/contact" ? "text-red-500 font-bold" : ""}`}
          >
            Contact Us
          </Link>
          <Link
            href="/joinus"
            className={`block py-1 ${pathname === "/joinus" ? "text-red-500 font-bold" : ""}`}
          >
            Join Us
          </Link>
          <Link
            href="/download"
            className={`block py-1 ${pathname === "/download" ? "text-red-500 font-bold" : ""}`}
          >
            Downloads
          </Link>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
