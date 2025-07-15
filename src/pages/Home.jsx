



import React from 'react';
import eli from '/images/eli.jpg';
import { Link } from 'react-router-dom'; // Use Link for SPA navigation

function Home() {
  return (
    <div className="flex flex-col items-center text-center py-16 px-4 min-h-screen bg-gray-50">
      <img
        src={eli}
        alt="Elisha"
        className="w-40 h-40 rounded-full border-4 border-indigo-500 mb-6 object-cover shadow-md"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to <span className="text-indigo-600">EliBrain AI</span>!
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-8 leading-relaxed">
        Your intelligent study buddy for assignments and learning. 
        Ask questions about any subject—I’m here to simplify your studies.
      </p>
      <Link 
        to="/chat"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg shadow-md transition-colors duration-300 text-lg font-medium"
      >
        Start Studying Now
      </Link>

      {/* Optional Features (Add if needed) */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-semibold text-indigo-600 mb-2">Instant Answers</h3>
          <p className="text-gray-600">24/7 help with homework and concepts.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-semibold text-indigo-600 mb-2">All Subjects</h3>
          <p className="text-gray-600">Math, Science, History, and more.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-semibold text-indigo-600 mb-2">Exam Ready</h3>
          <p className="text-gray-600">Practice questions and study tips.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;