export default function AboutInstitute() {
  return (
    <section id="about-institute" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About DYPCET Kolhapur</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src=" dypcet.jpg" alt="DYPCET Campus" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Established in 1984, D. Y. Patil College of Engineering & Technology, Kolhapur stands as a beacon of
              excellence in technical education, affiliated with Shivaji University and accredited by NAAC/NBA.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">40+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5000+</div>
                <div className="text-sm text-gray-600">Global Alumni</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">NAAC</div>
                <div className="text-sm text-gray-600">Accredited</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">NBA</div>
                <div className="text-sm text-gray-600">Accredited</div>
              </div>
            </div>
            <p className="text-gray-600">
              Known for its state-of-the-art infrastructure, innovative teaching methodologies, and strong industry
              connections, DYPCET has consistently produced engineers who excel globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
