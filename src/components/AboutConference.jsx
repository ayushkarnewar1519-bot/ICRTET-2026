import { Card, CardContent } from "@/components/ui/card";

export default function AboutConference() {
  const keynoteSpeakersData = [
    {
      name: "Michael John Short",
      title: "Professor of Control Engineering and Systems Informatics",
      info: "Acting Associate Dean (Research & Innovation)",
      affiliation: "School of Computing, Engineering and Digital Technologies, Teesside University, UK",
      image: "SPeak_1.png",
    },
    {
      name: "Dr. Kalaivani Chellappan",
      title: "PhD, Associate Professor",
      info: "Faculty of Engineering & Built Environment",
      affiliation: "Universiti Kebangsaan Malaysia (UKM)",
      image: "Speak_.png",
    },
    {
      name: "Nilanjan Dey",
      title: "Professor",
      info: "Department of Computer Science and Engineering",
      affiliation: "Techno International New Town, Kolkata, West Bengal, India",
      image: "Speak_3.png",
    },
    {
      name: "Prof. John Odhiambo Onyango",
      title: "Chair of Architecture",
      info: "Leading expert in sustainable design and energy modeling",
      affiliation: "Howard University, USA",
      image: "Speak_4.jpg",
    },
  ];

  return (
    <section id="about-conference" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---------- About Conference ---------- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About the Conference
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto text-lg text-gray-600 text-center">
          <p>
            The International Conference on Recent Trends in Engineering and Technology aims to provide a dynamic
            platform for academicians, researchers, industry professionals, and students to share their innovative
            ideas, research findings, and technological advancements. This conference will focus on fostering
            interdisciplinary collaboration and showcasing emerging trends across various domains of engineering and
            technology. The event aspires to encourage dialogue between theory and practice, promote applied research,
            and support the creation of sustainable, tech-driven solutions to global challenges. With keynote addresses
            by eminent international and national experts, peer-reviewed paper presentations, and panel discussions, the
            conference is designed to inspire academic excellence and industry relevance. Participants will gain
            insights into cutting-edge technologies, establish meaningful networks, and explore opportunities for
            publication and collaboration on a global scale.
          </p>
        </div>
      </div>

      {/* ---------- Keynote Speakers ---------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Note Speakers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 lg:gap-12">
          {keynoteSpeakersData.map((speaker, index) => (
            <Card
              key={index}
              className="text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-blue-600"
              style={{ animation: `fadeUp 0.6s ease forwards`, animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-3 sm:p-4 md:p-6">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-lg mx-auto mb-3 sm:mb-4 md:mb-6 object-contain"
                />
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900">{speaker.name}</h3>
                <p className="text-xs sm:text-sm md:text-base text-blue-600 font-medium">{speaker.title}</p>
                <p className="text-xs sm:text-sm text-gray-700 font-semibold mt-1 hidden sm:block">{speaker.info}</p>
                <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">{speaker.affiliation}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* ---------- Animation CSS ---------- */}
      <style>
        {`
          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}
