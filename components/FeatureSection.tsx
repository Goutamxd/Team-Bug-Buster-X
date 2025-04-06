import { Calendar, Bed, Search, Pill, Bell, DollarSign, AlertCircle, FileText, BookOpen, Globe } from "lucide-react"

const features = [
  {
    icon: <Calendar className="h-10 w-10 text-green-600" />,
    title: "Appointment Booking",
    description:
      "Book doctor appointments online and request consultations with AI assistance when doctors are unavailable.",
  },
  {
    icon: <Bed className="h-10 w-10 text-green-600" />,
    title: "Bed Availability & Booking",
    description: "Check hospital bed availability in real-time and book them online with ease.",
  },
  {
    icon: <Search className="h-10 w-10 text-green-600" />,
    title: "Hospital & Doctor Search",
    description: "Search for hospitals and doctors by name or location using our integrated map feature.",
  },
  {
    icon: <Pill className="h-10 w-10 text-green-600" />,
    title: "Medicine Services",
    description: "Search for medicines, check availability in nearby pharmacies, and order them online.",
  },
  {
    icon: <Bell className="h-10 w-10 text-green-600" />,
    title: "Tablet Reminder",
    description: "Set medication reminders with timely notifications to never miss a dose.",
  },
  {
    icon: <DollarSign className="h-10 w-10 text-green-600" />,
    title: "Medical Expense Tracker",
    description: "Track and manage your medical expenses efficiently with detailed reports.",
  },
  {
    icon: <AlertCircle className="h-10 w-10 text-green-600" />,
    title: "Emergency SOS Button",
    description: "Quick access to emergency contacts and nearby hospitals in critical situations.",
  },
  {
    icon: <FileText className="h-10 w-10 text-green-600" />,
    title: "Electronic Health Records",
    description: "Upload and store your medical reports securely for easy access anytime.",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-green-600" />,
    title: "Health Tips & Blog",
    description: "AI-curated health advice, doctor blogs, and wellness tips for a healthier lifestyle.",
  },
  {
    icon: <Globe className="h-10 w-10 text-green-600" />,
    title: "Multi-Language Support",
    description: "Support for different languages for better accessibility and user experience.",
  },
]

export default function FeatureSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Healthcare Features</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Chikitsa+ offers a wide range of features to make healthcare accessible, convenient, and efficient for
          everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

