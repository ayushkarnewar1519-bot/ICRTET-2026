import { BookOpen, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"

export default function CallForPapers() {
  return (
    <section id="call-for-papers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Call for Papers</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-50 border-0">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <BookOpen className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Submit Your Research</h3>
                <p className="text-lg text-gray-600">
                  Researchers, academicians, industry professionals, and students are invited to submit original,
                  unpublished work that reflects current trends, innovations, and challenges in the field of
                  engineering and technology. The event aims to provide a global platform for knowledge exchange and
                  interdisciplinary collaboration. Submissions may include theoretical advancements, experimental
                  studies, case analyses, or practical implementations across diverse engineering domains.
                </p>
              </div>
              <div className="space-y-8 text-left">
                <h4 className="font-semibold text-gray-900 text-lg">Submission Guidelines:</h4>
                <p className="text-gray-600">
                </p>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  <li>
                    <strong>Publication Ethics:</strong> The submitted paper must be original, unpublished and free
                    from plagiarism with proper citations to all referenced work.
                  </li>
                  <li>
                    <strong>Format & Template:</strong> Papers should be prepared using the official template. The
                    maximum length is 10 pages (A4 size, two-column, Times New Roman, 10 pt). The abstract must be
                    150–250 words in 9 pt italic, followed by 4–5 keywords. Figures must be clear (minimum 300 dpi)
                    with captions in 8 pt. References should follow IEEE style in 9 pt font. 
                  </li>
                </ul>

                <h4 className="font-semibold text-gray-900 text-lg">Submission Process</h4>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  <li>Submit through the CMT portal: Track 1 → Submission → Create.</li>
                  <li>Complete all required metadata: title, authors and affiliations, abstract, keywords.</li>
                  <li>Upload a doc/docx/PDF version of the full paper.</li>
                </ul>

                <h4 className="font-semibold text-gray-900 text-lg">Blind Review Requirements</h4>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  <li>For double-blind review, the main paper should not contain author names or affiliations.</li>
                </ul>
              </div>

              <div className="text-center mt-10">
                <Link to={"https://tinyurl.com/y8evdhrb"}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Submit Your Paper
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
