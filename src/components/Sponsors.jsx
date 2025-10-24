import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sponsorship Opportunities</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-600 mx-auto"></div>
        </div>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-4xl mx-auto">
          The conference offers an excellent opportunity for organizations to showcase their brand, products, and
          services to a diverse and global audience of academicians, researchers, professionals, and students. We invite
          sponsorships from industries, startups, educational institutions, publishers, and service providers under the
          various categories.
          .
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="flex flex-col bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <CardTitle className="text-yellow-800">Platinum Sponsor</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow text-left px-6 pb-6">
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Prime logo placement on all banners and digital platforms</li>
                <li>Speaking opportunity during the inaugural session</li>
                <li>Stall/booth at the venue</li>
                <li>Five complimentary registrations</li>
                <li>Full-page advertisement in the souvenir</li>
                <li>Acknowledgment in press and media coverage</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <CardTitle className="text-gray-800">Gold Sponsor</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow text-left px-6 pb-6">
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Logo placement on conference materials and website</li>
                <li>Stall/booth at the venue</li>
                <li>Three complimentary registrations</li>
                <li>Half-page advertisement in the souvenir</li>
                <li>Recognition during major sessions</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="flex flex-col bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <CardTitle className="text-orange-800">Silver Sponsor</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow text-left px-6 pb-6">
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Logo inclusion in the brochure and website</li>
                <li>Two complimentary registrations</li>
                <li>Quarter-page advertisement in the souvenir</li>
                <li>Acknowledgment in the valedictory session</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Customized sponsorship packages can also be discussed to suit specific branding goals.
          </p>
          <p className="text-gray-600 mb-6 font-medium">
            For partnership and sponsorship inquiries, please contact:
            <br />
            <span className="font-semibold text-blue-600">Dr. Ajim Sutar: 9834294437</span>
          </p>
          <Button variant="outline" size="lg">
            Become a Sponsor
          </Button>
        </div>
      </div>
    </section>
  )
}
