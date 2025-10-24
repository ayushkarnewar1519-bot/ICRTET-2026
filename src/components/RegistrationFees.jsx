import { Button } from "@/components/ui/button";

export default function RegistrationFees() {
  const feeData = [
    {
 category: "UG/PG Students /Academicians",
      earlyBirdINR: "₹3500",
      earlyBirdUSD: "$39.79",
      regularINR: "₹4000",
      regularUSD: "$45.47",
    },
    {
 category: "Industry Delegates",
      earlyBirdINR: "₹4000",
      earlyBirdUSD: "$45.47",
      regularINR: "₹4500",
      regularUSD: "$51.15",
    },
    {
 category: "International Authors",
      earlyBirdINR: "₹5000",
      earlyBirdUSD: "$56.84",
      regularINR: "₹5500",
      regularUSD: "$62.52",
    },
    {
 category: "Attendee",
      earlyBirdINR: "₹500",
      earlyBirdUSD: "$5.68",
      regularINR: "₹800",
      regularUSD: "$9.10",
    },
    {
 category: "Poster Presentation",
      earlyBirdINR: "-",
      earlyBirdUSD: "-",
      regularINR: "₹1000",
      regularUSD: "$11.37",
    },
  ];

  return (
    <section id="registration" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Registration & Fees</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden shadow-lg rounded-lg border border-gray-200">
            <table className="w-full text-left text-gray-700">
              <thead className="bg-gradient-to-r from-blue-600 to-blue-600 text-white">
                <tr className="border-b border-blue-500">
 <th className="px-6 py-4 text-left font-semibold border-r border-blue-500" rowSpan="2">Category</th>
 <th className="px-6 py-4 text-center font-semibold border-r border-blue-500" colSpan="2">Early Bird Registration</th>
 <th className="px-6 py-4 text-center font-semibold" colSpan="2">Regular Registration</th>
 </tr>
                <tr>
 <th className="px-6 py-2 text-left font-semibold border-r border-blue-500">INR</th>
 <th className="px-6 py-2 text-left font-semibold border-r border-blue-500">USD</th>
 <th className="px-6 py-2 text-left font-semibold border-r border-blue-500">INR</th>
 <th className="px-6 py-2 text-left font-semibold">USD</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {feeData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 border-r border-gray-200">{item.category}</td>
 <td className="px-6 py-4 text-gray-600 border-r border-gray-200">{item.earlyBirdINR}</td>
 <td className="px-6 py-4 text-gray-600 border-r border-gray-200">{item.earlyBirdUSD}</td>
 <td className="px-6 py-4 text-gray-600 border-r border-gray-200">{item.regularINR}</td>
 <td className="px-6 py-4 text-gray-600">{item.regularUSD}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
              asChild
            >
              <a href="https://tinyurl.com/y8evdhrb" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
            <img src="/QR.jpg" alt="QR Code" className="mx-auto mt-4 w-32 h-32" /> 
            <p className="text-gray-600 mt-2">Scan QR to Register</p>
          </div>
        </div>
      </div>
    </section>
  );
}