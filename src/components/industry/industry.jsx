"use client";
import { useState } from "react";
import { Mail, MapPinned, Phone } from "lucide-react";



export default function IndustryPage() {
   const industries = [
    {
      image: "/oil.png",
      title: "Oil and Gas",
      alt: "Oil and Gas Industry",
    },
    {
      image: "/turbine.png",
      title: "Turbine and Engineering Construction",
      alt: "Turbine and Engineering",
    },
    {
      image: "/power.png",
      title: "Power Plants",
      alt: "Power Plants",
    },
    {
      image: "/petrochemical.png",
      title: "Petrochemical and Fertilizer",
      alt: "Petrochemical and Fertilizer",
    },
  ];
 


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
              className="text-4xl mt-4 sm:text-5xl  mb-6 md:mb-8 text-center md:text-left md:-ml-10"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              "Custom Solutions for <br />Diverse Industries"

            </h3>
            <p
              className="text-base mt-12 sm:text-lg md:text-xl font-base mb-6 md:mb-4 text-center md:text-left md:-ml-10"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              We are the industry heads and produce the 
              most <br /> reliable and trendy solution you are looking for.       
            </p>
           {/* Contact Info */}
            <div className="overfolw-x-hidden ">
            <div className="relative translate-x-10 translate-y-10 md:absolute top-10 md:right-0 bg-gray-900 py-6 rounded-4xl border-2 border-white shadow-[0_0_0_4px_#D01A1A]  md:mx-0 max-w-sm w-140  h-60  overflow-hidden ">
              <div className="space-y-4 text-center  text-xl sm:text-base">
             <p className="text-white text-center text-3xl sm:text-3xl font-semibold leading-relaxed "> Our tools and <br />services cater to a <br /> variety of industrial  <br />needs. 
                </p>
              </div>
            </div>
            </div>
               {/* Contributions Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title with Borders */}
          <div className="flex items-center justify-center mb-4 mt-26" style={{ fontFamily: "Impact, sans-serif" }}>
           
            <h2 className="text-4xl  mx-8"> Industries <span className="text-red-600">We Serve</span> Include:</h2>
           
          </div>

          {/* Subtitle */}
        

          {/* Industry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-10">
            {industries.map((industry, index) => (
              <div key={index} className="text-center">
                <img
                  src={industry.image}
                  alt={industry.alt}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold">{industry.title}</h3>
              </div>
            ))}
          </div>

         
        </div>
      </section>
          </div>
        </div>
      </div>

    
    

   
     
    </div>
  );
}
