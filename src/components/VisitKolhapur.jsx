import { Plane, Train, Car } from "lucide-react"

export default function VisitKolhapur() {
  const touristAttractions = [
    { name: "Rankala Lake", description: "Scenic beauty and boating", image: "/rankala.jpeg" },
    { name: "Mahalaxmi Temple", description: "Historic religious site", image: "/amba.jpg" },
    { name: "New Palace", description: "Royal architecture", image: "/np.jpeg" },
    { name: "Panhala Fort", description: "Historical fortress", image: "/panhala.jpeg" },
  ]

  const accommodationOptions = [
    { type: "Budget hotels", price: "₹1,500 - ₹3,000 per night" },
    { type: "Mid-range hotels", price: "₹3,000 - ₹6,000 per night" },
    { type: "Luxury resorts", price: "₹6,000+ per night" },
  ]

  const transportOptions = [
    { type: "Nearest Airport", details: "Kolhapur Airport (KLH) - 10 km", icon: <Plane className="h-5 w-5 text-blue-600" /> },
    { type: "Major Airports", details: "Pune Airport (PNQ) - 240 km, Goa Airport (GOI) - 200 km", icon: <Plane className="h-5 w-5 text-blue-600" /> },
    { type: "Railway Station", details: "Kolhapur Railway Station (CSMT) - 5 km", icon: <Train className="h-5 w-5 text-blue-600" /> },
    { type: "Bus & Auto", details: "Central Bus Stand and local auto-rickshaws available", icon: <Car className="h-5 w-5 text-blue-600" /> },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit Kolhapur</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Tourist Attractions */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tourist Attractions</h3>
            <div className="grid grid-cols-2 gap-6">
              {touristAttractions.map((attraction, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-lg shadow-md bg-white transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-50 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800">{attraction.name}</h4>
                    <p className="text-sm text-gray-500">{attraction.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accommodation */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Accommodation</h3>
            <p className="text-gray-600 mb-4">
              Kolhapur offers a range of accommodation options from budget-friendly hotels to luxury resorts. The
              conference organizing committee can assist with booking recommendations. 
            </p>
            <p className="text-sm text-gray-500 italic mb-4">
              Note: Accommodation can be provided on a request basis for an additional charge. Please provide advance
              notice.
            </p>
            <div className="space-y-2 mb-10">
              {accommodationOptions.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">
                    {option.type}: {option.price}
                  </span>
                </div>
              ))}
            </div>

            {/* How to Reach Kolhapur (now directly under Accommodation) */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Reach Kolhapur</h3>
              <p className="text-gray-600 mb-4">
                Kolhapur is well-connected by air, rail, and road. Here are some options to help you plan your travel:
              </p>
              <div className="space-y-4">
                {transportOptions.map((option, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    {option.icon}
                    <div>
                      <h4 className="font-semibold text-gray-900">{option.type}</h4>
                      <p className="text-gray-600">{option.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
