import { useState, useEffect } from "react";
import { Calendar, MapPin, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  // Background slideshow images
  const slides = [" dypcet.jpg", " dyp2.jpg", " dyp3.jpg", " dyp4.jpg"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  // Countdown state
  const [timeLeft, setTimeLeft] = useState({});
  useEffect(() => {
    const targetDate = new Date("2026-02-06T00:00:00"); // conference start
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff < 0) {
        clearInterval(interval);
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const partnerLogos = [
    { src: " scopus.jpg", alt: "Elsevier" },
    { src: " springer.jpg", alt: "Springer" },
    { src: " Picture3.jpg", alt: "IEEE" },
    { src: " Picture4.jpg", alt: "ACM" },
    { src: " Picture5.jpg", alt: "Wiley" },
  ];
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section id="home" className="relative h-[100vh] flex items-center justify-center bg-red-200">
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

      <div className="relative text-center text-white px-4 z-10">
        {/* College Name */}
        <br /><br />
        <br />
        <h3
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          style={{ textShadow: "0px 0px 12px black" }}
        >
          D. Y. Patil College of Engineering & Technology, Kolhapur
        </h3>

        {/* Conference Title */}
        <h1 className="text-2xl md:text-3xl font-semibold mb-4 tracking-wide">
          International Conference on Recent Trends in Engineering and Technology
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-4">
          ICRTET 2026
        </h2>

        {/* Dates */}
        <p className="text-lg md:text-xl mb-4 font-bold">
          6th–7th February 2026
        </p>

       
        {/* Organizer Text */}
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Organized by D. Y. Patil College of Engineering & Technology, Kolhapur, Maharashtra, India.
          <br />
          <span className="font-semibold">In collaboration with AICTE, New Delhi</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link to={"https://tinyurl.com/y8evdhrb"}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white"
            >
              <Send className="mr-2 h-4 w-4" />
              Paper Submission
            </Button>
          </Link>
          <a href="/DYPCET_ICRTET'26.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-black"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Brochure
            </Button>
          </a>
        </div>
  {/* Microsoft Marquee */}
        <marquee
          bgcolor="white"
          className="p-2 rounded-md"
          behavior="scroll"
          direction="left"
        >
          <div className="text-black text-lg">
            <span className="font-bold text-xl text-blue-600">“</span> The
            Microsoft CMT service was used for managing the peer-reviewing
            process for this conference. This service was provided for free by
            Microsoft and they bore all expenses, including costs for Azure
            cloud services as well as for software development and support.
            <span className="font-bold text-xl text-blue-600">”</span>
          </div>
        </marquee>
        <br /><br />
        <br />
        {/* Partner Logos Scrolling */}
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee space-x-12">
            {duplicatedLogos.map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.alt}
                className="h-12 transition-all duration-300"
              />
            ))}
          </div>
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black/60 to-transparent"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black/60 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
