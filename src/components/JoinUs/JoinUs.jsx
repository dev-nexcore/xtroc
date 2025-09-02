export default function CareersSection() {
  return (
    <section className="bg-black text-white py-10 px-6 text-center ">
      {/* Heading */}
      <h2 className="text-6xl font-base mb-4" style={{ fontFamily: "Impact, sans-serif" }}>Join Us</h2>
      <div className="w-80 h-1 bg-red-600 mx-auto mb-8"></div>
      <h3 className="text-4xl font-base mb-14" style={{ fontFamily: "Impact, sans-serif" }}>Be Part of Our Growth Story</h3>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-14 mb-10">
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition">
          View Open Positions
        </button>
        <button className="  bg-red-300 w-50 hover:bg-red-400 text-black font-semibold px-6 py-3 rounded-md transition">
          Apply Now
        </button>
      </div>

      {/* Description */}
      <p className="max-w-3xl mx-auto text-sm sm:text-lg leading-relaxed text-gray-200">
        Xtorc is a growing startup driven by innovation, collaboration, and
        excellence. With strong industry expertise, we’re seeking passionate
        individuals—experienced or fresh—to join us in redefining industrial
        solutions. Explore roles in engineering, sales, and operations, and help
        shape the future of industrial tools and services.
      </p>
    </section>
  );
}
