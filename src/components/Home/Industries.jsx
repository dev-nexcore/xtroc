"use client";
import React from "react";

const Industries = () => {
  const industries = [
    {
      image: "/oil.png",
      title: "Oil and Gas",
      alt: "Oil and Gas Industry",
      hoverText:
        "Delivering high-precision tools for high-pressure operations.",
    },
    {
      image: "/turbine.png",
      title: "Turbine and Engineering Construction",
      alt: "Turbine and Engineering",
      hoverText: "Innovative solutions for heavy duty projects.",
    },
    {
      image: "/power.png",
      title: "Power Plants",
      alt: "Power Plants",
      hoverText:
        "Providing reliable maintenance solutions to ensure seamless functionality.",
    },
    {
      image: "/petrochemical.png",
      title: "Petrochemical and Fertilizer",
      alt: "Petrochemical and Fertilizer",
      hoverText: "Offering robust tools for safe and efficient operations.",
    },
  ];
  return (
    <div>
      <section className=" bg-black py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title with Borders */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex-1 h-0.5 bg-red-600"></div>
            <h2 className="text-4xl font-bold mx-8 text-white">Our Contributions</h2>
            <div className="flex-1 h-0.5 bg-red-600"></div>
          </div>

          {/* Subtitle */}
          <p
            className="text-center text-2xl mb-12"
            style={{ color: "#D01A1A" }}
          >
            Industries We Serve!
          </p>

          {/* Industry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {industries.map((industry, index) => (
              <div key={index} className="text-center text-white">
                <div className="relative group overflow-hidden rounded-lg">
                  <img
                    src={industry.image}
                    alt={industry.alt}
                    className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center p-6 group">
                    {/* Background overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-500 bg-[#B40000]" />

                    {/* Text */}
                    <p className="relative text-lg font-semibold text-center leading-relaxed text-transparent group-hover:text-white transition-colors duration-500">
                      {industry.hoverText}
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mt-4">{industry.title}</h3>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <p className="text-center text-2xl mb-8 text-white">
            The only place where you'll get the perfect solution for all your
            industry needs.
          </p>

          {/* Red Border */}
          <div className="w-full h-0.5 bg-red-600 mb-6"></div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
