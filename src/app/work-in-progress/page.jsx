export default function WorkInProgress() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Work in Progress</h1>
        <p className="text-lg text-gray-600 mb-8">
          This page is currently under construction. Please check back later.
        </p>
        <a 
          href="/"
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
}