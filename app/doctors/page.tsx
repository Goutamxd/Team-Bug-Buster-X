import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Filter, Calendar, Star, Clock } from "lucide-react"

// Mock data for doctors
const doctors = [
  {
    id: 1,
    name: "Dr. Anil Gupta",
    specialty: "Cardiologist",
    hospital: "City General Hospital",
    experience: "15 years",
    rating: 4.8,
    reviews: 124,
    availability: ["Mon", "Wed", "Fri"],
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    specialty: "Dermatologist",
    hospital: "Metro Medical Center",
    experience: "10 years",
    rating: 4.7,
    reviews: 98,
    availability: ["Tue", "Thu", "Sat"],
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: 3,
    name: "Dr. Rajesh Kumar",
    specialty: "Neurologist",
    hospital: "Sunshine Hospital",
    experience: "20 years",
    rating: 4.9,
    reviews: 156,
    availability: ["Mon", "Tue", "Thu"],
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: 4,
    name: "Dr. Meera Patel",
    specialty: "Pediatrician",
    hospital: "Children's Medical Center",
    experience: "12 years",
    rating: 4.6,
    reviews: 87,
    availability: ["Wed", "Fri", "Sat"],
    image: "/placeholder.svg?height=150&width=150",
  },
]

export default function DoctorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Find Doctors</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Search for doctors by specialty, location, or name and book appointments online.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input placeholder="Search by doctor name" className="pl-10" />
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input placeholder="Location" className="pl-10" />
          </div>

          <Select>
            <SelectTrigger>
              <div className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Specialty" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Specialties</SelectItem>
              <SelectItem value="cardiology">Cardiology</SelectItem>
              <SelectItem value="dermatology">Dermatology</SelectItem>
              <SelectItem value="neurology">Neurology</SelectItem>
              <SelectItem value="pediatrics">Pediatrics</SelectItem>
              <SelectItem value="orthopedics">Orthopedics</SelectItem>
            </SelectContent>
          </Select>

          <Button className="bg-green-600 hover:bg-green-700">Search</Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList className="grid grid-cols-5 w-full max-w-md">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="cardiology">Cardiology</TabsTrigger>
          <TabsTrigger value="dermatology">Dermatology</TabsTrigger>
          <TabsTrigger value="neurology">Neurology</TabsTrigger>
          <TabsTrigger value="pediatrics">Pediatrics</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 gap-6">
        {doctors.map((doctor) => (
          <Card key={doctor.id} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="p-6 flex flex-col items-center md:items-start md:flex-row">
                <img
                  src={doctor.image || "/placeholder.svg"}
                  alt={doctor.name}
                  className="h-32 w-32 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
                />
                <div>
                  <CardHeader className="p-0 pb-2">
                    <div className="flex items-center mb-1">
                      <CardTitle className="text-xl mr-2">{doctor.name}</CardTitle>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        <Star className="h-3 w-3 mr-1 fill-current" />
                        {doctor.rating}
                      </Badge>
                    </div>
                    <p className="text-green-600 font-medium">{doctor.specialty}</p>
                  </CardHeader>
                  <CardContent className="p-0 py-2">
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{doctor.hospital}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{doctor.experience} experience</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Available: {doctor.availability.join(", ")}</span>
                    </div>
                  </CardContent>
                </div>
              </div>

              <div className="border-t md:border-t-0 md:border-l p-6 md:ml-auto flex flex-col justify-center space-y-4">
                <div className="text-center md:text-right">
                  <p className="text-sm text-gray-600 dark:text-gray-400">{doctor.reviews} patient reviews</p>
                </div>
                <Button className="bg-green-600 hover:bg-green-700">Book Appointment</Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  View Profile
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

