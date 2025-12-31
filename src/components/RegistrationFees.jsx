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
    <section id="registration" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Registration & Fees
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Table */}
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden shadow-lg rounded-lg border border-gray-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-700">
                <thead className="bg-blue-600 text-white">
                  <tr className="border-b border-blue-500">
                    <th
                      className="px-6 py-4 font-semibold border-r border-blue-500"
                      rowSpan="2"
                    >
                      Category
                    </th>
                    <th
                      className="px-6 py-4 text-center font-semibold border-r border-blue-500"
                      colSpan="2"
                    >
                      Early Bird Registration
                    </th>
                    <th
                      className="px-6 py-4 text-center font-semibold"
                      colSpan="2"
                    >
                      Regular Registration
                    </th>
                  </tr>
                  <tr>
                    <th className="px-6 py-2 border-r border-blue-500">INR</th>
                    <th className="px-6 py-2 border-r border-blue-500">USD</th>
                    <th className="px-6 py-2 border-r border-blue-500">INR</th>
                    <th className="px-6 py-2">USD</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {feeData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900 border-r border-gray-200">
                        {item.category}
                      </td>
                      <td className="px-6 py-4 border-r border-gray-200">
                        {item.earlyBirdINR}
                      </td>
                      <td className="px-6 py-4 border-r border-gray-200">
                        {item.earlyBirdUSD}
                      </td>
                      <td className="px-6 py-4 border-r border-gray-200">
                        {item.regularINR}
                      </td>
                      <td className="px-6 py-4">
                        {item.regularUSD}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Important Note */}
          <div className="mt-8 max-w-3xl mx-auto bg-red-50 border border-red-200 rounded-lg p-4 text-center">
            <p className="text-red-600 text-sm md:text-base font-medium">
              <strong>Important Note:</strong> Authors are requested to complete
              conference registration only after receiving an official
              notification of acceptance or acceptance with revision from the
              conference team via CMT.
            </p>
          </div>

          {/* Register Card */}
          <div className="mt-10 max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 text-center">
            <img
              src="/QR-form.png"
              alt="QR Code"
              className="mx-auto w-36 h-36 mb-3"
            />

            <p className="text-gray-600 text-sm mb-4">
              Scan QR to Register
            </p>

            <Button
              size="lg"
              className="w-full bg-blue-600 hover:bg-blue-700"
              asChild
            >
              <a
                href="https://me.dypgroup.edu.in/asd_EventPublicUserMaster.htm?eventID=24"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}