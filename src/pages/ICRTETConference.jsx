
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AboutConference from "../components/AboutConference"
// import ConferenceLegacy from "../components/ConferenceLegacy"
import AboutInstitute from "../components/AboutInstitute"
import ConferenceTracks from "../components/ConferenceTracks"
import ImportantDates from "../components/ImportantDates"
import CallForPapers from "../components/CallForPapers"
import RegistrationFees from "../components/RegistrationFees"
import PublicationsAwards from "../components/PublicationsAwards"
import OrganizingCommittee from "../components/OrganizingCommittee"
import Sponsors from "../components/Sponsors"
import VisitKolhapur from "../components/VisitKolhapur"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function ICRTETConference() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about-conference",
        "about-institute",
        "tracks",
        "dates",
        "call-for-papers",
        "registration",
        "publications",
        "committee",
        "sponsors",
        "contact",
      ]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero />
      <AboutConference />
      {/* <ConferenceLegacy /> */}
      <AboutInstitute />
      <ConferenceTracks />
      <ImportantDates />
      <CallForPapers />
      <RegistrationFees />
      <PublicationsAwards />
      <OrganizingCommittee />
      <Sponsors />
      <VisitKolhapur />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}
