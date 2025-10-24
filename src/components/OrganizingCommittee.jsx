import { Card, CardContent } from "@/components/ui/card"

export default function OrganizingCommittee() {
  const chiefPatrons = [
    {
      name: "Hon'ble Dr. D. Y. Patil",
      title: "Founder President, D. Y. Patil Education Society",
      image: "/dyp.png",
    },
    {
      name: "Hon'ble Dr. Sanjay D. Patil",
      title: "President, D. Y. Patil Pratishthan",
      image: "/sp.jpg",
    },
    {
      name: "Hon'ble Satej D. Patil",
      title: "Vice-President, D. Y. Patil Pratishthan",
      image: "/sp2.jpg",
    },
    {
      name: "Hon'ble Ruturaj S. Patil",
      title: "Trustee, D. Y. Patil Pratishthan",
      image: "/rp.jpeg",
    },
    {
      name: "Hon'ble Prithviraj S. Patil",
      title: "Trustee, D. Y. Patil Pratishthan",
      image: "/pp.jpeg",
    },
  ]

  const chairpersons = [
    {
      name: "Dr. A. K. Gupta",
      title: "Executive Director, D. Y. Patil Group, Kolhapur",
      image: "/ak.jpeg",
    },
    {
      name: "Prof. Dr. S. D. Chede",
      title: "Principal, DYPCET, Kolhapur",
      image: "/chede.png",
    },
    {
      name: "Prof. Dr. L. V. Malade",
      title: "Registrar, DYPCET, Kolhapur",
      image: "/lm.jpg",
    },
  ]

  const convenorCoordinator = [
    {
      name: "Dr. Mrs. Manisha Bhanuse",
      title: "Conference Convenor & Coordinator",
      image: "/mb.jpg",
    },
  ]

  const organizingTeamMembers = [
    {
      name: "Dr. A. N. Jadhav",
      department: "Computer Science & Engineering",
      image: "/amol.jpg",
    },
    {
      name: "Dr. S. B. Mohite",
      department: "International Affairs",
      image: "/if.jpg",
    },
    {
      name: "Dr. B. D. Vhanmore",
      department: "General Engineering",
      image: "/ge.jpg",
    },
    {
      name: "Dr. P. S. Gavali",
      department: "Computer Science & Engineering",
      image: "/cse.jpg",
    },
    {
      name: "Dr. Y. A. Donolikar",
      department: "Chemical Engineering",
      image: "/chem.jpg",
    },
    {
      name: "Dr. A. S. Sutar",
      department: "Civil Engineering",
      image: "/civ.jpg",
    },
    {
      name: "Ms. R. B. Patil",
      department: "CSE (AIML)",
      image: "/aiml.jpg",
    },
    {
      name: "Mrs. T. V. Deokar",
      department: "CSE (DS)",
      image: "/ds.jpg",
    },
    {
      name: "Mrs. Supriya S. Patil",
      department: "Architecture",
      image: "/arch.jpg",
    },
  ]

  const advisoryCommitteeMembers = [
    { name: "Dr. A. L. Jadhav", affiliation: "Dean (R & D)", image: "/deanrnd.jpg" },
    { name: "Dr. T. B. MohitePatil", affiliation: "HoD, E & TC", image: "/hodentc.jpg" },
    { name: "Dr. K. T. Jadhav", affiliation: "HoD, Chemical", image: "/hodchem.jpg" },
    { name: "Dr. K. A. Mane", affiliation: "HoD, Civil", image: "/hodciv.png" },
    { name: "Ms. R. J. Dhanal", affiliation: "HoD, CSE", image: "/hodcse.jpg" },
    { name: "Mr. I. S. Jadhav", affiliation: "HoD, Arch.", image: "/hodarch.jpg" },
    { name: "Dr. S. V. Patil", affiliation: "HoD, AIML", image: "/hodaiml.jpg" },
    { name: "Dr. G. V. Patil", affiliation: "HoD, DS", image: "/hodds.jpg" },
    { name: "Dr. N. D. Sangale", affiliation: "HoD, GE", image: "/hodfy.jpg" },
  ]

  const studentCommittee = [
    { name: "Mr. Ayush Karnewar", phone: "+91 9960670950", image: "ak.jpg" },
    { name: "Mr. Tufailahamad Sayyad", phone: "+91 8421120445", image: "/ts.jpg" },
    { name: "Ms. Mukta Tamhankar", phone: "+91 9405488622", image: "/mt.jpg" },
    { name: "Mr. Ritwik Kanojia", phone: "+91 7777086457", image: "/rk.jpg" },
    { name: "Mr. Prathamesh Sargar", phone: "+91 8010618424", image: "/ps.jpg" },
    { name: "Mr. Sahil Chavan", phone: "+91 9307480797", image: "/sc.jpg" },
  ]

  return (
    <section id="committee" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Organizing Committee</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-600 mx-auto"></div>
        </div>

        {/* Chief Patrons */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Chief Patrons</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {chiefPatrons.map((person, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover object-top" />
                  <h4 className="font-bold text-lg text-gray-900">{person.name}</h4>
                  <p className="text-blue-600">{person.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Chairpersons */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Chairpersons</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chairpersons.map((person, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover object-top" />
                  <h4 className="font-bold text-lg text-gray-900">{person.name}</h4>
                  <p className="text-blue-600">{person.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Convenor & Coordinator */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Convenor & Coordinator</h3>
          <div className="max-w-md mx-auto">
            {convenorCoordinator.map((person, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover object-top" />
                  <h4 className="font-bold text-lg text-gray-900">{person.name}</h4>
                  <p className="text-blue-600">{person.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Organizing Team */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Organizing Team</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4">
            {organizingTeamMembers.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover object-top" />
                  <h4 className="font-semibold text-gray-900 text-base">{member.name}</h4>
                  <p className="text-sm text-blue-600">{member.department}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advisory Committee */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Departmental Advisory Committee
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {advisoryCommitteeMembers.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover object-top" />
                  <h4 className="font-semibold text-gray-900">{member.name}</h4>
                  <p className="text-sm text-blue-600">{member.affiliation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Student Committee */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Student Committee</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {studentCommittee.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover object-top" />
                  <h4 className="font-semibold text-gray-900 text-base">{member.name}</h4>
                  <p className="text-sm text-blue-600">{member.phone}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
