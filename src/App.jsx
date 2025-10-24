import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ICRTETConference from "./pages/ICRTETConference"
import PaperSubmit from "./components/PaperSubmit"
import Navbar from "./components/Navbar"
import AboutConference from "./components/AboutConference"

const App = () => {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">

      

        {/* Navbar */}
        <Navbar scrollToSection={scrollToSection} />

        {/* Page Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<ICRTETConference />} />
            <Route path="about" element={<AboutConference />} />
            <Route path="submit-paper" element={<PaperSubmit />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
