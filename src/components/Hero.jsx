import { useState, useEffect } from "react";
import { MapPin, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  const slides = ["dypcet.jpg", "dyp2.jpg", "dyp3.jpg", "dyp4.jpg"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  const partnerLogos = [
    { src: "scopus.jpg", alt: "Elsevier" },
    { src: "springer.jpg", alt: "Springer" },
    { src: "Picture3.jpg", alt: "IEEE" },
    { src: "Picture4.jpg", alt: "ACM" },
    { src: "Picture5.jpg", alt: "Wiley" },
  ];
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide-${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative text-center text-white px-3 sm:px-6 z-10 pt-20 sm:pt-24 md:pt-28 pb-8">
        {/* College Name */}
        <h3
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-2"
          style={{ textShadow: "0px 0px 12px black" }}
        >
          D. Y. Patil College of Engineering & Technology, Kolhapur
        </h3>

        {/* Conference Title */}
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 tracking-wide px-2">
          International Conference on Recent Trends in Engineering and Technology
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-300 mb-3 sm:mb-4">
          ICRTET 2026
        </h2>

        {/* Dates */}
        <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 font-bold">
          6th–7th February 2026
        </p>

        {/* Organizer Text */}
        <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-4 sm:mb-6 px-2">
          Organized by D. Y. Patil College of Engineering & Technology, Kolhapur, Maharashtra, India.
          <br />
          <span className="font-semibold">In collaboration with AICTE, New Delhi</span>
        </p>

        {/* Venue */}
        <div className="flex items-start sm:items-center justify-center gap-2 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 px-2">
          <MapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-1 sm:mt-0" />
          <span className="font-semibold italic text-left sm:text-center">
            Hotel Sayaji, 2104/15, E Ward, Old Pune - Bangalore Hwy, Unit of DYP Hospitality Pvt. Ltd., Kolhapur
          </span>
        </div>

        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <a
            href="https://maps.app.goo.gl/p28iStcKeRnkvZ1EA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-100 text-sm sm:text-base md:text-lg font-medium underline flex items-center gap-1"
          >
            View on Google Maps
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-10 px-4">
          <Link to={"https://tinyurl.com/y8evdhrb"} className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white text-sm sm:text-base"
            >
              <Send className="mr-2 h-4 w-4" />
              Paper Submission
            </Button>
          </Link>
          <a href="https://drive.google.com/file/d/1TwDCwzVdOVjkJbUCuifng0Cd94mFk3bj/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white bg-white text-black text-sm sm:text-base"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Brochure
            </Button>
          </a>
        </div>

        {/* Microsoft Marquee */}
        <div className="mx-2 sm:mx-0">
          <marquee
            bgcolor="white"
            className="p-2 rounded-md"
            behavior="scroll"
            direction="left"
          >
            <div className="text-black text-sm sm:text-base md:text-lg">
              <span className="font-bold text-lg sm:text-xl text-blue-600">"</span> The
              Microsoft CMT service was used for managing the peer-reviewing
              process for this conference. This service was provided for free by
              Microsoft and they bore all expenses, including costs for Azure
              cloud services as well as for software development and support.
              <span className="font-bold text-lg sm:text-xl text-blue-600">"</span>
            </div>
          </marquee>
        </div>

        {/* Partner Logos Scrolling */}
        <div className="overflow-hidden relative mt-6 sm:mt-10">
          <div className="flex animate-marquee space-x-6 sm:space-x-12">
            {duplicatedLogos.map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.alt}
                className="h-8 sm:h-10 md:h-12 transition-all duration-300"
              />
            ))}
          </div>
          <div className="absolute top-0 left-0 w-12 sm:w-24 h-full bg-gradient-to-r from-black/60 to-transparent"></div>
          <div className="absolute top-0 right-0 w-12 sm:w-24 h-full bg-gradient-to-l from-black/60 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
