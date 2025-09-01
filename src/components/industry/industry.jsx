"use client";
import { useState } from "react";
import { Mail, MapPinned, Phone } from "lucide-react";



export default function IndustryPage() {
 


  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="overflow-x-hidden bg-black text-white min-h-screen">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 text-left">
        <h2
          className="text-4xl sm:text-5xl md:text-7xl mb-6 md:-ml-10 text-center md:text-left"
          style={{ fontFamily: "Impact, sans-serif" }}
        >
          Industries We Serve
        </h2>
        <div className="h-1.5 mb-6 bg-red-600 rounded-full mx-auto md:mx-0 md:-ml-10 w-32 md:w-140"></div>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-1 text-left">
            <h3
              className="text-2xl sm:text-3xl font-semi mb-6 md:mb-8 text-center md:text-left md:-ml-10"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              "Custom Solutions for Diverse Industries"

            </h3>
            <p
              className="text-base sm:text-lg md:text-xl font-base mb-6 md:mb-4 text-center md:text-left md:-ml-10"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              We are the industry heads and produce the 
              most <br /> reliable and trendy solution you are looking for.       
            </p>
           {/* Contact Info */}
            <div className="overfolw-x-hidden ">
            <div className="relative translate-x-10 md:absolute top-10 md:-right-40    bg-gray-900 p-4 rounded-2xl border-2 border-white shadow-[0_0_0_4px_#D01A1A] mx-auto md:mx-0 max-w-md w-full overflow-hidden ">
              <div className="space-y-4  text-md sm:text-base">
             <p> Our tools and services cater to a  variety of industrial  needs. 
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

    
    

   
     
    </div>
  );
}
