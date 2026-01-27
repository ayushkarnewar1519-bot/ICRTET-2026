import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ activeSection, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about-conference", label: "About" },
    { id: "tracks", label: "Tracks" },
    { id: "dates", label: "Dates" },
    { id: "call-for-papers", label: "Call for Papers" },
    { id: "registration", label: "Registration" },
    { id: "committee", label: "Committee" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <nav className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
          {/* ---------- Left Logos Section - All 4 logos always visible ---------- */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 flex-shrink-0">
            <img
              src="College logo.jpg"
              alt="College Logo"
              className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain"
            />
            <img
              src="icrtet2026.png"
              alt="ICRTET 2026 Logo"
              className="h-7 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
            />
            <img
              src="aicte.png"
              alt="AICTE Logo"
              className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain"
            />
            
          </div>

          {/* ---------- Desktop Navigation ---------- */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-5">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs xl:text-sm font-medium transition-colors whitespace-nowrap ${
                  activeSection === item.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* ---------- Mobile Menu Button ---------- */}
          <button
            className="lg:hidden p-1.5 sm:p-2 rounded-md hover:bg-gray-100 transition-colors flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* ---------- Mobile Navigation Dropdown ---------- */}
      <div
        className={`lg:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-3 sm:px-4 py-2 sm:py-3 space-y-0.5 sm:space-y-1">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2 sm:py-2.5 text-sm sm:text-base font-medium rounded-md transition-colors ${
                activeSection === item.id
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
