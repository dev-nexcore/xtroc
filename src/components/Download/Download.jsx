export default function DownloadSection() {
  return (
    <section className="bg-black text-white py-10 px-6 text-center ">
      {/* Heading */}
      <h2 className="text-6xl font-base mb-4" style={{ fontFamily: "Impact, sans-serif" }}>Downloads</h2>
      <div className="w-80 h-1 bg-red-600 mx-auto mb-8"></div>
      <h3 className="text-4xl font-base mb-14" style={{ fontFamily: "Impact, sans-serif" }}>Download Our Product Catalog</h3>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-14 mb-10">
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition">
          Download Catalog
        </button>
        
      </div>

      {/* Description */}
      <p className="max-w-3xl mx-auto text-sm sm:text-lg leading-relaxed text-gray-200" style={{ fontFamily: "Poppin, sans-serif" }}>
       Get detailed information about our products and services. Download our comprehensive catalog to explore the full range of Xtorc’s industrial tools and services, including specifications, features, and pricing.

      </p>
    </section>
  );
}
