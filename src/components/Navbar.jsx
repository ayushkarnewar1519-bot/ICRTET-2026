import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-19">
          {/* ---------- Left Logos Section ---------- */}
          <div className="flex items-center space-x-15">
            <img
              src=" College logo.jpg"
              alt="College Logo"
              className="h-12 w-auto object-contain"
            />
            <img
              src=" icrtet2026.png"
              alt="ICRTET 2026 Logo"
              className="h-14 w-auto object-contain"
            />
            <img
              src=" aicte.png"
              alt="AICTE Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* ---------- Right Navigation ---------- */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors ${
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
            className="md:hidden ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* ---------- Mobile Navigation Dropdown ---------- */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md w-full text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
