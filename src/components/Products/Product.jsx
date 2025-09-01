import React from 'react'

const Product = () => {
  return (
    <div>
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 text-left">
  <h2
    className="text-4xl sm:text-5xl md:text-7xl mb-6 md:-ml-10 text-center md:text-left"
    style={{ fontFamily: "Impact, sans-serif" }}
  >
    Products
  </h2>
  <div className="h-1.5 mb-6 bg-red-600 rounded-full mx-auto md:mx-0 md:-ml-10 w-32 md:w-140"></div>
  <div className="flex flex-col md:flex-row justify-between gap-8">
    <div className="flex-1 text-left">
      <h3
        className="text-2xl sm:text-3xl font-semi mb-6 md:mb-8 text-center md:text-left md:-ml-10"
        style={{ fontFamily: "Impact, sans-serif" }}
      >
        Precision Tools for Your <br />Toughest Challenges
      </h3>
      <p
        className="text-base sm:text-lg md:text-xl font-base mb-6 md:mb-4 text-center md:text-left md:-ml-10"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        At XTORC, we provide cutting-edge solutions designed to meet the
        <br />
        demands of modern industries. From bolting systems to cold cutting
        <br />
        tools, our products are engineered for precision, safety, and efficiency.
        <br />
        <br />
        Whether you need hydraulic torque wrenches, bolt tensioning solutions,
        <br />
        or in-situ machining tools, we are your trusted partner for delivering
        <br />
        innovative, industry-ready tools that perform under the most
        <br />
        challenging conditions.
      </p>
    </div>
    {/* Solutions Box */}
    <div className="overflow-x-hidden">
      <div className="relative translate-x-10 md:absolute top-10 md:-right-16 bg-gray-900 p-6 rounded-2xl border-2 border-white shadow-[0_0_0_4px_#D01A1A] mx-auto md:mx-0 max-w-md w-full overflow-hidden">
        <div className="text-center">
          <h4 
            className="text-xl sm:text-2xl font-bold mb-2 text-white"
            style={{ fontFamily: "Impact, sans-serif" }}
          >
            Optimized &
          </h4>
          <h4 
            className="text-xl sm:text-2xl font-bold mb-4 text-white"
            style={{ fontFamily: "Impact, sans-serif" }}
          >
            Industry-Ready
          </h4>
          <h4 
            className="text-xl sm:text-2xl font-bold text-red-600"
            style={{ fontFamily: "Impact, sans-serif" }}
          >
            Solutions
          </h4>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Product;