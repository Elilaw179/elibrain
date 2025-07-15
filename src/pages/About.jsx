export default function About() {
  return (
    <div className="p-6 max-w-4xl mx-auto min-h-[calc(100vh-160px)] flex flex-col justify-center">
      <div className="bg-white rounded-xl shadow-sm p-8 md:p-10 border border-gray-100">
        {/* Header with accent */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            About <span className="text-indigo-600">Sir'Law</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          {/* Personal Bio */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3">
              <img 
                src="/images/eli.jpg" 
                alt="Elisha" 
                className="w-full max-w-xs rounded-lg shadow-md border-4 border-indigo-100"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-3">My Teaching Philosophy</h3>
              <p className="mb-4">
                Education should be <strong>accessible</strong>, <strong>engaging</strong>, and <strong>tailored</strong> 
                to each student's needs. With 5+ years of tutoring experience, I believe in breaking 
                down complex concepts into digestible parts while fostering critical thinking.
              </p>
              <p>
                "The best teachers are those who show you where to look but don't tell you what to see." 
                — Alexandra K. Trenfor
              </p>
            </div>
          </div>

          {/* Tool Mission */}
          <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Why This Tool Exists</h3>
            <p>
              EliBrain AI was created to provide <strong>24/7 academic support</strong> for students who need help 
              outside classroom hours. Whether it's homework struggles or exam preparation, this tool 
              democratizes access to quality explanations across all subjects.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">What Makes It Special</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: '⏱️', title: "Instant Help", desc: "No waiting for office hours" },
                { icon: '📚', title: "Multi-Subject", desc: "Math, Science, Literature & more" },
                { icon: '🎯', title: "Exam Focused", desc: "Tailored practice questions" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-indigo-600">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="mt-10 text-center">
            <a 
              href="/chat" 
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg shadow-md transition-colors font-medium"
            >
              Start Learning Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}