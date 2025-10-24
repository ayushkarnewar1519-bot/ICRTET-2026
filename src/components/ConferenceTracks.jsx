import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConferenceTracks() {
  const conferenceTrackData = [
    {
      title: "Computer Science /AIML/DS Engineering",
      icon: "💻",
      topics: [
        "Machine Learning, Deep Learning & Generative AI",
        "Cyber security, IoT and Block chain",
        "Big Data Analytics, Mining and Visualization",
        "Edge, Cloud and Fog Computing Technologies",
        "Computer Vision and Adversarial Networks",
        "Robotics and Intelligent Automation",
        "Agile, DevOps & Microservices",
        "High-Performance and Mobile Ubiquitous Computing",
        "Human-Computer Interaction and AR/VR",
      ],
    },
    {
      title: "Electrical/Electronics/Electronics & Telecommunication Engineering",
      icon: "⚡",
      topics: [
        "Wireless & Space Communication Technologies",
        "AI & Machine Learning Applications",
        "Advances in Signal, Image & Speech Processing",
        "Power Electronics & Renewable Energy Systems",
        "Cybersecurity & Blockchain for Communication Systems",
        "Embedded Systems, IoT & VLSI Design",
        "Intelligent Robotics & Automation",
        "Quantum & Nanoelectronics Innovations",
        "Sustainable & Green Communication Networks",
      ],
    },
    {
      title: "Civil/Environmental Engineering/Architecture",
      icon: "🏛️",
      topics: [
        "Environmental Engineering and Sustainable Development",
        "Inclusive Architecture: Designing for Equity, Accessibility and Well-being",
        "Advance Construction and project management techniques",
        "Green and sustainable Construction Practices",
        "Role of Artificial Intelligence and Digital transformations in Civil Engineering and Architecture",
        "Sustainable development in High-Performance Concrete",
        "Parametric and Computational Design for Sustainable Innovation",
        "Building Information Modeling (BIM)",
        "Disaster Management and Resilient Structures",
        "Smart Cities and Smart Buildings: Technology for a Sustainable Future",
      ],
    },
    {
      title: "Chemical Engineering/Applied Science/Food Technology/Biotechnology",
      icon: "⚗️",
      topics: [
        "Sustainable and Green Chemical Processes",
        "Process Intensification and Optimization",
        "Biochemical and Bioprocess Engineering",
        "Nanotechnology and Advanced Materials",
        "Energy Engineering and Renewable Energy",
        "Environmental Engineering and Pollution Control",
        "Polymer Science and Engineering",
        "Computational Chemical Engineering",
        "Food and Pharmaceutical Engineering",
        "Sustainable Wastewater Treatment Technologies",
        "Catalysis and Green Chemistry",
        "Allied Science",
      ],
    },
    
  ]

  return (
    <section id="tracks" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Conference Tracks</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {conferenceTrackData.map((track, index) => (
            <Card
              key={index}
              className="flex flex-col h-full bg-gradient-to-br from-blue-50 to-blue-50 border border-transparent hover:border-blue-300 hover:shadow-2xl transition-all duration-300 rounded-2xl"
            >
              <CardHeader className="flex flex-col items-start">
                <div className="text-4xl mb-3">{track.icon}</div>
                <CardTitle className="text-lg font-bold text-gray-800">{track.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <h4 className="font-semibold text-gray-700 mb-3">Paper Submission Topics:</h4>
                <ul className="space-y-2 text-gray-600 list-disc list-inside overflow-y-auto pr-2 max-h-50 custom-scrollbar">
                  {track.topics.map((topic, topicIndex) => (
                    <li key={topicIndex}>{topic}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
