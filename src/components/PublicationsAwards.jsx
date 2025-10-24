import { BookOpen, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PublicationsAwards() {
  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Publications & Awards</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-50 border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-blue-600" />
                <span>Publication Opportunities</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                All accepted and presented papers will be included in the Conference Proceedings with ISBN.
              </p>
              <p className="text-gray-600 mb-2">
                Selected papers will be considered for publication in Scopus Indexed Journals / Proceedings by any one
                of the following publishers:
              </p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside pl-4 mb-4">
                <li>EAI / Springer – Innovations in Communication and Computing</li>
                <li>Taylor & Francis Group</li>
                <li>Atlantis Press, Springer Nature</li>
              </ul>
              <p className="text-sm text-gray-500">
                Additional charges will be applicable as per publisher’s policy and publication will be subject to
                fulfillment of the respective indexing norms.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-50 to-blue-50 border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-blue-600" />
                <span>Awards</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Best Paper Award per Theme</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Participation Certificate to All Attendees</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Young Researcher Award</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Outstanding Presentation Award</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
