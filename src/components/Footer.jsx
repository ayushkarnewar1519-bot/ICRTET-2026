"use client"

export default function Footer({ scrollToSection }) {
  return (
    <footer className="bg-blue-100 text-gray-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* ---------- Logo Section ---------- */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* Replace IC square with actual logo */}
              <img
                src="/icrtet2026.png" // path to your ICRTET logo
                alt="ICRTET Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="font-bold text-xl text-black">ICRTET 2026</span>
            </div>
            <p className="text-sm">
              International Conference on Recent Trends in Engineering and Technology
            </p>
          </div>

          {/* ---------- Quick Links ---------- */}
          <div>
            <h4 className="font-semibold text-black mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection("about-conference")} className="hover:text-black">
                  About Conference
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("tracks")} className="hover:text-black">
                  Tracks
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("dates")} className="hover:text-black">
                  Important Dates
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("registration")} className="hover:text-black">
                  Registration
                </button>
              </li>
            </ul>
          </div>

          {/* ---------- Information ---------- */}
          <div>
            <h4 className="font-semibold text-black mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection("call-for-papers")} className="hover:text-black">
                  Call for Papers
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("publications")} className="hover:text-black">
                  Publications
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("committee")} className="hover:text-black">
                  Committee
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("sponsors")} className="hover:text-black">
                  Sponsors
                </button>
              </li>
            </ul>
          </div>

          {/* ---------- Contact ---------- */}
          <div>
            <h4 className="font-semibold text-black mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>dypcet.icrtet25@gmail.com</p>
              <p>02312601431</p>
              <p>DYPCET, Kolhapur</p>
            </div>
          </div>
        </div>

        {/* ---------- Footer Bottom ---------- */}
        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p className="text-sm">
            © 2026 ICRTET. All rights reserved. | Organized by D. Y. Patil College of Engineering & Technology, Kolhapur
          </p>
        </div>
      </div>
    </footer>
  )
}
