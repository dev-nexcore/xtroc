export default function CareersSection() {
  return (
    <section className="bg-black text-white py-16 px-6 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold mb-2">Join Us</h2>
      <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
      <h3 className="text-2xl font-bold mb-8">Be Part of Our Growth Story</h3>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition">
          View Open Positions
        </button>
        <button className="bg-red-300 hover:bg-red-400 text-black font-semibold px-6 py-3 rounded-md transition">
          Apply Now
        </button>
      </div>

      {/* Description */}
      <p className="max-w-3xl mx-auto text-sm sm:text-base leading-relaxed text-gray-200">
        Xtorc is a growing startup driven by innovation, collaboration, and
        excellence. With strong industry expertise, we’re seeking passionate
        individuals—experienced or fresh—to join us in redefining industrial
        solutions. Explore roles in engineering, sales, and operations, and help
        shape the future of industrial tools and services.
      </p>
    </section>
  );
}
