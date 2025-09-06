"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
      const missionElement = document.getElementById("mission-section");
      const visionElement = document.getElementById("vision-section");

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

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-0 ">
            {/* 25 Products Card */}
            <div
              className="text-center p-10 w-100 relative h-[12.5rem]"
              style={{
                backgroundColor: "#1B1B1B",
                clipPath: "polygon(0 0, 100% 0, 77% 100%, 0 100%)",
              }}
            >
              <div
                className="text-6xl font-bold mb-2"
                style={{ color: "#D01A1A" }}
              >
                <CountingNumber target={25} />
              </div>
              <div className="text-white text-xl">Products</div>
            </div>

            {/* 15 Years Card */}
            <div
              className="text-center p-10 w-100 relative -ml-6 lg:-ml-12"
              style={{
                backgroundColor: "#1B1B1B",
                clipPath: "polygon(25% 0px, 100% 0px, 100% 100%, 0% 100%)",
              }}
            >
              <div
                className="text-6xl font-bold mb-2"
                style={{ color: "#D01A1A" }}
              >
                <CountingNumber target={15} />
              </div>
              <div className="text-white text-xl">
                Years of Combined Sales <br /> & Operation Expertise
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission and Vision Section (unchanged animation) */}
        <div
          className="flex flex-col lg:flex-row gap-12 mb-16"
          id="mission-vision-section"
        >
          <div
            className={`flex-1 transition-all duration-1000 ${
              missionVisible
                ? "transform translate-x-0 opacity-100"
                : "transform -translate-x-full opacity-0"
            }`}
            id="mission-section"
          >
            <h3
              className="text-3xl font-bold mb-4"
              style={{ color: "#D01A1A" }}
            >
              Our Mission
            </h3>
            <div className="w-44 h-0.5 bg-white mb-6"></div>
            <p className="text-white text-lg leading-relaxed">
              To deliver precision-engineered tools and innovative services that
              empower industries to achieve unparalleled efficiency, safety, and
              performance while upholding the highest standards of quality and
              customer satisfaction.
            </p>
          </div>

          <div className="hidden lg:block w-0.5 bg-white self-stretch"></div>

          <div
            className={`flex-1 transition-all duration-1000 ${
              visionVisible
                ? "transform translate-x-0 opacity-100"
                : "transform translate-x-full opacity-0"
            }`}
            id="vision-section"
          >
            <h3
              className="text-3xl font-bold mb-4"
              style={{ color: "#D01A1A" }}
            >
              Our Vision
            </h3>
            <div className="w-38.5 h-0.5 bg-white mb-6"></div>
            <p className="text-white text-lg leading-relaxed">
              To be a global leader in industrial tools and services, recognized
              for our commitment to quality, innovation, and creating value for
              our customers and stakeholders. We believe in the WIN-WIN-WIN
              philosophy, where our customers win, our employees win, and
              entrepreneurs win.
            </p>
          </div>
        </div>

        {/* Join Our Mission Button */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center mb-16"
        >
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors">
            Join Our Mission
          </button>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Quality Card */}
              <div
                className="bg-white rounded-2xl p-6 text-center transition-all duration-300 group hover:text-white"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#D01A1A")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                <img
                  src="/quality.png"
                  alt="Quality"
                  className="w-16 h-16 mx-auto mb-4 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
                <h4 className="text-black group-hover:text-white text-xl font-bold mb-3">
                  Quality
                </h4>
                <p className="text-black group-hover:text-white text-sm">
                  Ensuring every product and service meets the highest
                  standards.
                </p>
              </div>

              {/* Innovation Card */}
              <div
                className="bg-white rounded-2xl p-6 text-center transition-all duration-300 group hover:text-white"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#D01A1A")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                <img
                  src="/innovation.png"
                  alt="Innovation"
                  className="w-16 h-16 mx-auto mb-4 group-hover:brightness-0 group-hover:invert"
                />
                <h4 className="text-black group-hover:text-white text-xl font-bold mb-3">
                  Innovation
                </h4>
                <p className="text-black group-hover:text-white text-sm">
                  Continuously pushing the boundaries of what's possible.
                </p>
              </div>

              {/* Integrity Card */}
              <div
                className="bg-white rounded-2xl p-6 text-center transition-all duration-300 group hover:text-white"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#D01A1A")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                <img
                  src="/verified_user.png"
                  alt="Integrity"
                  className="w-16 h-16 mx-auto mb-4 group-hover:brightness-0 group-hover:invert"
                />
                <h4 className="text-black group-hover:text-white text-xl font-bold mb-3">
                  Integrity
                </h4>
                <p className="text-black group-hover:text-white text-sm">
                  Conducting business with honesty and transparency.
                </p>
              </div>

              {/* Customer-Centricity Card */}
              <div
                className="bg-white rounded-2xl p-6 text-center transition-all duration-300 group hover:text-white"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#D01A1A")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                <img
                  src="/group.png"
                  alt="Customer Centricity"
                  className="w-16 h-16 mx-auto mb-4 group-hover:brightness-0 group-hover:invert"
                />
                <h4 className="text-black group-hover:text-white text-xl font-bold mb-3">
                  Customer-Centricity
                </h4>
                <p className="text-black group-hover:text-white text-sm">
                  Tailoring solutions to meet and exceed customer expectations.
                </p>
              </div>
            </div>

           
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-40 h-40 rounded-full flex items-center justify-center bg-[#D01A1A] text-white hover:bg-white hover:text-[#D01A1A] transition-colors duration-300 shadow-lg">
                <h4 className="text-3xl font-bold text-center leading-tight">
                  Our
                  <br />
                  Values
                </h4>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurValues;
