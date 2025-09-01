"use client"
import React, { useState, useEffect } from 'react';

const CountingNumber = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration]);

  return <span>{count}</span>;
};

const OurValues = () => {
  const [missionVisible, setMissionVisible] = useState(false);
  const [visionVisible, setVisionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const missionElement = document.getElementById('mission-section');
      const visionElement = document.getElementById('vision-section');
      
      if (missionElement) {
        const rect = missionElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setMissionVisible(true);
        }
      }
      
      if (visionElement) {
        const rect = visionElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisionVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* About Us Section */}
        

        {/* Stats Section */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
            {/* 25 Products */}
            <div className="text-center p-8 rounded-lg w-80" style={{backgroundColor: '#1B1B1B'}}>
              <div className="text-6xl font-bold mb-2" style={{color: '#D01A1A'}}>
                <CountingNumber target={25} />
              </div>
              <div className="text-white text-xl">Products</div>
            </div>

            {/* 15 Years */}
            <div className="text-center p-8 rounded-lg w-80" style={{backgroundColor: '#1B1B1B'}}>
              <div className="text-6xl font-bold mb-2" style={{color: '#D01A1A'}}>
                <CountingNumber target={15} />
              </div>
              <div className="text-white text-xl">Years of Combined Sales<br />& Operation Expertise</div>
            </div>
          </div>

          {/* Center White Border */}

        </div>



        {/* Mission and Vision Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16" id="mission-vision-section">
          {/* Our Mission */}
          <div className={`flex-1 transition-all duration-1000 ${missionVisible ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-full opacity-0'}`} id="mission-section">
            <h3 className="text-3xl font-bold mb-4" style={{color: '#D01A1A'}}>Our Mission</h3>
            <div className="w-44 h-0.5 bg-white mb-6"></div>
            <p className="text-white text-lg leading-relaxed">
              To deliver precision-engineered tools and innovative services that empower industries to achieve unparalleled efficiency, safety, and performance while upholding the highest standards of quality and customer satisfaction.
            </p>
          </div>

          {/* Center Divider */}
          <div className="hidden lg:block w-0.5 bg-white self-stretch"></div>

          {/* Our Vision */}
          <div className={`flex-1 transition-all duration-1000 ${visionVisible ? 'transform translate-x-0 opacity-100' : 'transform translate-x-full opacity-0'}`} id="vision-section">
            <h3 className="text-3xl font-bold mb-4" style={{color: '#D01A1A'}}>Our Vision</h3>
            <div className="w-38.5 h-0.5 bg-white mb-6"></div>
            <p className="text-white text-lg leading-relaxed">
              To be a global leader in industrial tools and services, recognized for our commitment to quality, innovation, and creating value for our customers and stakeholders. We believe in the WIN-WIN-WIN philosophy, where our customers win, our employees win, and entrepreneurs win.
            </p>
          </div>
        </div>

        {/* Join Our Mission Button */}
        <div className="flex justify-center mb-16">
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors">
            Join Our Mission
          </button>
        </div>

        {/* Values Section with Cards */}
        <div className="mb-16">
          {/* Values Cards Container */}
          <div className="relative">
            {/* Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Quality Card */}
              <div className="bg-white rounded-2xl p-6 text-center transition-all duration-300 group hover:text-white" 
                   style={{'&:hover': {backgroundColor: '#D01A1A'}}}
                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D01A1A'}
                   onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}>
                <img 
                  src="/quality.png" 
                  alt="Quality" 
                  className="w-16 h-16 mx-auto mb-4"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="hidden w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500">Quality Icon</span>
                </div>
                <h4 className="text-black group-hover:text-white text-xl font-bold mb-3">Quality</h4>
                <p className="text-black group-hover:text-white text-sm">
                  Ensuring every product and service meets the highest standards.
                </p>
              </div>

              {/* Innovation Card */}
              <div className="bg-white rounded-2xl p-6 text-center transition-all duration-300 group hover:text-white"
                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D01A1A'}
                   onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}>
                <img 
                  src="/innovation.png" 
                  alt="Innovation" 
                  className="w-16 h-16 mx-auto mb-4"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="hidden w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500">Innovation Icon</span>
                </div>
                <h4 className="text-black group-hover:text-white text-xl font-bold mb-3">Innovation</h4>
                <p className="text-black group-hover:text-white text-sm">
                  Continuously pushing the boundaries of what's possible.
                </p>
              </div>

              {/* Integrity Card */}
              <div className="bg-white rounded-2xl p-6 text-center transition-all duration-300 group hover:text-white"
                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D01A1A'}
                   onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}>
                <img 
                  src="/verified_user.png" 
                  alt="Integrity" 
                  className="w-16 h-16 mx-auto mb-4"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="hidden w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500">Integrity Icon</span>
                </div>
                <h4 className="text-black group-hover:text-white text-xl font-bold mb-3">Integrity</h4>
                <p className="text-black group-hover:text-white text-sm">
                  Conducting business with honesty and transparency.
                </p>
              </div>

              {/* Customer-Centricity Card */}
              <div className="bg-white rounded-2xl p-6 text-center transition-all duration-300 group hover:text-white"
                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D01A1A'}
                   onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}>
                <img 
                  src="/group.png" 
                  alt="Customer Centricity" 
                  className="w-16 h-16 mx-auto mb-4"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="hidden w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500">Group Icon</span>
                </div>
                <h4 className="text-black group-hover:text-white text-xl font-bold mb-3">Customer-Centricity</h4>
                <p className="text-black group-hover:text-white text-sm">
                  Tailoring solutions to meet and exceed customer expectations.
                </p>
              </div>
            </div>

            {/* Central Our Values Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div 
                className="w-32 h-32 rounded-full flex items-center justify-center"
                style={{backgroundColor: '#D01A1A'}}
              >
                <h4 className="text-white text-lg font-bold text-center leading-tight">
                  Our<br />Values
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;