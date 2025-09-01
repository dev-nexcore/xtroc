"use client";
import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const OurProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(1); // Default to middle product

  const products = [
    { id: 0, src: "/product1.png", alt: "Product 1" },
    { id: 1, src: "/product2.png", alt: "Product 2" },
    { id: 2, src: "/product3.png", alt: "Product 3" },
  ];

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

  const handleProductClick = (productId) => {
    setSelectedProduct(productId);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Products Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl font-bold mb-8">Our Products</h2>

          {/* Center Border */}
          <div className="w-32 h-0.5 bg-red-600 mx-auto mb-8"></div>

          {/* Description */}
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            We are the industry heads and produce the most reliable and trendy
            solution you are looking for.
          </p>

          {/* Product Images */}
          <div className="flex justify-center items-center gap-8 mb-8">
            {/* left wali images */}
            {products
              .filter((p) => p.id !== selectedProduct)
              .slice(0, 1) // sirf ek left wali
              .map((product) => (
                <div
                  key={product.id}
                  className="cursor-pointer transition-all duration-300 scale-90 opacity-70 hover:opacity-90"
                  onClick={() => handleProductClick(product.id)}
                >
                  <img
                    src={product.src}
                    alt={product.alt}
                    className="w-48 h-36 object-cover rounded-lg border-2 border-red-600"
                  />
                </div>
              ))}

            {/* center wali image → default badi */}
            <div className="cursor-pointer transition-all duration-300">
              <img
                src={products.find((p) => p.id === selectedProduct).src}
                alt={products.find((p) => p.id === selectedProduct).alt}
                className="w-80 h-60 object-cover rounded-lg border-4 border-red-600"
              />
            </div>

            {/* right wali images */}
            {products
              .filter((p) => p.id !== selectedProduct)
              .slice(1) // baki images right side pe
              .map((product) => (
                <div
                  key={product.id}
                  className="cursor-pointer transition-all duration-300 scale-90 opacity-70 hover:opacity-90"
                  onClick={() => handleProductClick(product.id)}
                >
                  <img
                    src={product.src}
                    alt={product.alt}
                    className="w-48 h-36 object-cover rounded-lg border-2 border-red-600"
                  />
                </div>
              ))}
          </div>

          {/* Product Title */}
          <h3 className="text-2xl font-semibold mb-6">
            Bolt Tensioning Solutions
          </h3>

          {/* View More Button */}
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            View More Products
          </button>
        </div>
      </section>

      {/* Contributions Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title with Borders */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex-1 h-0.5 bg-red-600"></div>
            <h2 className="text-4xl font-bold mx-8">Our Contributions</h2>
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

          {/* Bottom Text */}
          <p className="text-center text-lg mb-8">
            The only place where you'll get the perfect solution for all your
            industry needs.
          </p>

          {/* Red Border */}
          <div className="w-full h-0.5 bg-red-600 mb-12"></div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="border border-red-600 rounded-lg p-8">
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone No"
                      className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message - Provide detailed information about your requirements to help you"
                      rows="4"
                      className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none resize-none"
                    ></textarea>
                  </div>
                  <div className="flex items-center mt-4">
                    <button
                      type="button"
                      className="w-[10rem] bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    >
                      Send Message
                    </button>

                    <h1 className="text-lg font-bold text-white pl-5">
                      Request a Call!
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold mb-6">CONTACT US NOW!</h2>

              {/* Red Border */}
              <div className="w-24 h-0.5 bg-red-600 mb-6"></div>

              <p className="text-lg mb-8">
                Need expert advice or tailored solutions? Get in touch with
                Xtorc for unmatched support and personalized service.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      Office Address
                      <br />
                      Your Company Address Here
                      <br />
                      City, State, Pin Code
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <a
                    href="mailto:ENQUIRY@XTORCIND.COM"
                    className="text-white hover:text-red-600 transition-colors"
                  >
                    ENQUIRY@XTORCIND.COM
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div className="space-y-1">
                    <a
                      href="tel:+919619561695"
                      className="block text-white hover:text-red-600 transition-colors"
                    >
                      +91 9619561695
                    </a>
                    <a
                      href="tel:+918108810057"
                      className="block text-white hover:text-red-600 transition-colors"
                    >
                      +91 8108810057
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProducts;
