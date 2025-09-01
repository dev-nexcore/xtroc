"use client";
import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const OurProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(1); // Default to middle product

  const products = [
    { id: 0, src: "/product1.png", alt: "Product 1" },
    { id: 1, src: "/product2.png", alt: "Product 2" },
    { id: 2, src: "/product3.png", alt: "Product 3" },
    { id: 4, src: "/product4.png", alt: "Product 4" },
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
    </div>
  );
};

export default OurProducts;
