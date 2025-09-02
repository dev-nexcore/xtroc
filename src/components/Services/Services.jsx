import React from 'react';

function Services() {
  return (
    <div className="bg-black flex items-start justify-center pt-16 px-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* Service Heading */}
        <h1 className="text-white text-6xl font-bold mb-4">
          Service
        </h1>
        
        {/* Red Border Line */}
        <div 
          className="w-96 h-1 mx-auto mb-8 rounded-2xl"
          style={{ backgroundColor: '#D01A1A' }}
        ></div>
        
        {/* Main Description Text */}
        <h2 className="text-white text-3xl font-bold mb-8 leading-tight">
          "Comprehensive Industrial Services<br />
          with The Right Tools"
        </h2>
        
        {/* CTA Button */}
        <button 
          className="text-white text-lg font-semibold px-8 py-3 rounded hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#FF0000' }}
        >
          Discover Our Services
        </button>
        
        {/* Bottom Description Text */}
        <p className="text-white text-lg leading-relaxed max-w-lg mx-auto mt-6">
          At Xtorc, we offer end-to-end solutions tailored to industrial requirements.
        </p>
      </div>
    </div>
  );
}
export default Services;