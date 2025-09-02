import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ServiceItem = ({ title, description, imageSrc, imageOnLeft = true, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const textVariants = {
    hidden: { 
      opacity: 0, 
      x: imageOnLeft ? 100 : -100 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: imageOnLeft ? -100 : 100,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const borderVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: { 
        duration: 0.6, 
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={ref} className="mb-16">
      <div className={`flex ${imageOnLeft ? 'flex-row' : 'flex-row-reverse'} items-center gap-12 max-w-6xl mx-auto`}>
        {/* Image Section */}
        <motion.div 
          className="flex-1"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <img 
              src={imageSrc} 
              alt={title}
              className="w-full h-auto object-cover rounded"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback placeholder */}
            <div className="hidden w-full h-48 bg-gray-200 rounded items-center justify-center">
              <span className="text-gray-500 text-sm">{title} Image</span>
            </div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div 
          className="flex-1"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="text-white text-2xl font-bold mb-3">
            {title}
          </h3>
          
          <motion.div 
            className="h-1 bg-red-500 mb-4"
            variants={borderVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ backgroundColor: '#FF0000' }}
          ></motion.div>
          
          <p className="text-white text-lg leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

function OurServices() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, threshold: 0.5 });

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      title: "Bolt Torquing & Tensioning",
      description: "Precision bolting solutions for critical applications.",
      imageSrc: "bolt_torquing.png",
      imageOnLeft: false
    },
    {
      title: "Cold Cutting & Beveling", 
      description: "Safe, spark-free cutting in hazardous environments.",
      imageSrc: "cold_cutting.png",
      imageOnLeft: true
    },
    {
      title: "Flange Facing",
      description: "Restoring flange surfaces to exact specifications.", 
      imageSrc: "flange_facing.png",
      imageOnLeft: false
    },
    {
      title: "Water Jet Cutting",
      description: "Safe, spark-free cutting in hazardous environments.",
      imageSrc: "water_jet.png", 
      imageOnLeft: true
    },
    {
      title: "Hot-Tapping & Line Stopple",
      description: "On-line modifications without shutting down operations.",
      imageSrc: "hot_tapping.png",
      imageOnLeft: false
    },
    {
      title: "Re-Tubing of Boilers & Heat Exchangers", 
      description: "On-line modifications without shutting down operations.",
      imageSrc: "re_tubing.png",
      imageOnLeft: true
    }
  ];

  return (
    <div className="bg-black min-h-screen py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          ref={headerRef}
          className="mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
        >
          <h1 className="text-white text-4xl font-bold mb-4">
            Our Services
          </h1>
          
          <motion.div 
            className="w-32 h-1 mb-6"
            style={{ backgroundColor: '#FF0000' }}
            initial={{ width: 0 }}
            animate={isHeaderInView ? { width: "8rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          
          <p className="text-white text-lg max-w-2xl">
            Are designed to maximize efficiency and ensure safety in operations:
          </p>
        </motion.div>

        {/* Services List */}
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            title={service.title}
            description={service.description} 
            imageSrc={service.imageSrc}
            imageOnLeft={service.imageOnLeft}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default OurServices;