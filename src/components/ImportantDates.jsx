import { Calendar } from "lucide-react";

export default function ImportantDates() {
  const importantDatesData = [
    { event: "Full Paper Submission", date: "15 November 2025", status: "upcoming" },
    { event: "Notification of Acceptance", date: "10 December 2025", status: "upcoming" },
    { event: "Camera Ready Paper Submission", date: "20 December 2025", status: "upcoming" },
    { event: "Early Bird Registration", date: "20 November 2025", status: "upcoming" },
    { event: "Last Date of Registration", date: "30 December 2025", status: "upcoming" }, 
    { event: "Conference Dates", date: "6-7 February 2026", status: "highlight" },
    { event: "Poster Presentation", date: "7 February 2026", status: "highlight" },
  ]

  return (
    <section id="dates" className="py-20 bg-gradient-to-br from-blue-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Important Dates</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden shadow-lg rounded-lg border border-gray-200">
            <table className="w-full text-left text-gray-700">
              <thead className="bg-gray-100 text-gray-800 uppercase text-sm">
                <tr>
                  <th scope="col" className="px-6 py-3 font-bold">Event</th>
                  <th scope="col" className="px-6 py-3 font-bold">Date</th>
                </tr>
              </thead>
              <tbody>
                {importantDatesData.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-gray-200 ${
                      item.status === 'highlight' 
                        ? 'bg-blue-600 text-white font-bold' 
                        : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    <td className="px-6 py-4 flex items-center"><Calendar className="h-5 w-5 mr-3" />{item.event}</td>
                    <td className="px-6 py-4">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
