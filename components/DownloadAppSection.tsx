import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const features = [
  "Book doctor appointments on the go",
  "Set medication reminders with notifications",
  "Track your medical expenses",
  "Access your health records anytime",
  "Emergency SOS with one tap",
  "Multi-language support",
]

export default function DownloadAppSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Get the Chikitsa+ Mobile App</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Download our mobile app to access all Chikitsa+ features on the go. Available for iOS and Android devices.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-green-100 dark:bg-green-900 p-1 rounded-full mr-3">
                    <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-black hover:bg-gray-800 text-white">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5,12.5c0-0.91,0.55-1.73,1.4-2.08c-0.25-0.55-0.58-1.07-0.97-1.54c-0.67,0.26-1.42,0.02-1.94-0.53c-0.52-0.55-0.67-1.3-0.33-1.94c-0.47-0.32-0.99-0.56-1.54-0.73C13.73,6.55,12.91,7.1,12,7.1s-1.73-0.55-2.08-1.4c-0.55,0.17-1.07,0.41-1.54,0.73c0.34,0.64,0.19,1.39-0.33,1.94s-1.27,0.79-1.94,0.53c-0.39,0.47-0.72,0.99-0.97,1.54c0.85,0.35,1.4,1.17,1.4,2.08s-0.55,1.73-1.4,2.08c0.25,0.55,0.58,1.07,0.97,1.54c0.67-0.26,1.42-0.02,1.94,0.53c0.52,0.55,0.67,1.3,0.33,1.94c0.47,0.32,0.99,0.56,1.54,0.73c0.36-0.85,1.17-1.4,2.08-1.4s1.73,0.55,2.08,1.4c0.55-0.17,1.07-0.41,1.54-0.73c-0.34-0.64-0.19-1.39,0.33-1.94c0.52-0.55,1.27-0.79,1.94-0.53c0.39-0.47,0.72-0.99,0.97-1.54C18.05,14.23,17.5,13.41,17.5,12.5M12,16c-1.93,0-3.5-1.57-3.5-3.5S10.07,9,12,9s3.5,1.57,3.5,3.5S13.93,16,12,16" />
                </svg>
                Download on App Store
              </Button>
              <Button className="bg-black hover:bg-gray-800 text-white">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Get it on Google Play
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <img src="/placeholder.svg?height=500&width=300" alt="Chikitsa+ Mobile App" className="max-w-xs" />
          </div>
        </div>
      </div>
    </section>
  )
}

