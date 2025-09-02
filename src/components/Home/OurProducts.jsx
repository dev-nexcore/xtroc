"use client";
import React, { useState, useEffect } from "react";

const OurProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    { id: 0, src: "/product1.png", alt: "Product 1", title: "Hydraulic Torque Wrenches" },
    { id: 1, src: "/product2.png", alt: "Product 2", title: "Bolt Tensioning Solutions" },
    { id: 2, src: "/product3.png", alt: "Product 3", title: "Hydraulic Equipment" },
    { id: 3, src: "/product4.png", alt: "Product 4", title: "Pipe Cutting & Beveling Machines" },
  ];

  // Auto rotate every 1.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Get 3 images (center + left + right)
  const getVisibleImages = () => {
    const left = (currentIndex - 1 + products.length) % products.length;
    const center = currentIndex;
    const right = (currentIndex + 1) % products.length;
    return [products[left], products[center], products[right]];
  };

  const visibleImages = getVisibleImages();

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
          <div className="flex justify-center items-center gap-8 mb-8 transition-all duration-500">
            {visibleImages.map((product, index) => (
              <div
                key={product.id}
                className={`transition-all duration-500 ${
                  index === 1
                    ? "scale-110 opacity-100" // center wali badi
                    : "scale-90 opacity-70" // side wali chhoti
                }`}
              >
                <img
                  src={product.src}
                  alt={product.alt}
                  className={`object-cover rounded-lg border-red-600 ${
                    index === 1
                      ? "w-80 h-60 border-4"
                      : "w-48 h-36 border-2"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Dynamic Product Title */}
          <h3 className="inline-block bg-white text-black px-6 py-3 rounded-2xl text-2xl font-semibold mb-6 transition-all duration-500 shadow-md">
            {products[currentIndex].title}
          </h3>

          {/* View More Button */}
          <div className="mt-6">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md">
              View More Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProducts;
