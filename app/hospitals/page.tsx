// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Badge } from "@/components/ui/badge"
// import { Search, MapPin, Filter, Star, Phone, Clock, Bed, Calendar, Building } from "lucide-react"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Progress } from "@/components/ui/progress"

// // Mock data for hospitals
// const hospitals = [
//   {
//     id: 1,
//     name: "City General Hospital",
//     location: "123 Healthcare Avenue, Downtown",
//     distance: "2.5 km",
//     rating: 4.5,
//     reviews: 124,
//     phone: "+91 98765 43210",
//     hours: "24/7",
//     totalBeds: 120,
//     availableBeds: 45,
//     specialties: ["Cardiology", "Neurology", "Orthopedics", "Emergency"],
//     facilities: ["ICU", "Operation Theatre", "Pharmacy", "Laboratory", "Cafeteria"],
//     image: "/placeholder.svg?height=200&width=300",
//   },
//   {
//     id: 2,
//     name: "Metro Medical Center",
//     location: "456 Health Street, Westside",
//     distance: "4.2 km",
//     rating: 4.8,
//     reviews: 156,
//     phone: "+91 98765 12345",
//     hours: "24/7",
//     totalBeds: 200,
//     availableBeds: 72,
//     specialties: ["Cardiology", "Pediatrics", "Gynecology", "Oncology", "Dermatology"],
//     facilities: ["ICU", "NICU", "Operation Theatre", "Pharmacy", "Laboratory", "Cafeteria", "Parking"],
//     image: "/placeholder.svg?height=200&width=300",
//   },
//   {
//     id: 3,
//     name: "Sunshine Hospital",
//     location: "789 Wellness Road, Eastside",
//     distance: "5.7 km",
//     rating: 4.2,
//     reviews: 98,
//     phone: "+91 98765 67890",
//     hours: "8:00 AM - 10:00 PM",
//     totalBeds: 80,
//     availableBeds: 12,
//     specialties: ["General Medicine", "Orthopedics", "ENT", "Ophthalmology"],
//     facilities: ["Operation Theatre", "Pharmacy", "Laboratory", "Parking"],
//     image: "/placeholder.svg?height=200&width=300",
//   },
// ]

// export default function HospitalsPage() {
//   const [searchQuery, setSearchQuery] = useState("")
//   const [selectedSpecialty, setSelectedSpecialty] = useState("all")

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold mb-4">Find Hospitals</h1>
//         <p className="text-gray-600 dark:text-gray-400">
//           Search for hospitals by name, location, or specialty and check bed availability.
//         </p>
//       </div>

//       <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <div className="relative">
//             <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//             <Input
//               placeholder="Search by hospital name"
//               className="pl-10"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>

//           <div className="relative">
//             <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//             <Input placeholder="Location" className="pl-10" />
//           </div>

//           <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
//             <SelectTrigger>
//               <div className="flex items-center">
//                 <Filter className="h-4 w-4 mr-2" />
//                 <SelectValue placeholder="Specialty" />
//               </div>
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All Specialties</SelectItem>
//               <SelectItem value="cardiology">Cardiology</SelectItem>
//               <SelectItem value="neurology">Neurology</SelectItem>
//               <SelectItem value="orthopedics">Orthopedics</SelectItem>
//               <SelectItem value="pediatrics">Pediatrics</SelectItem>
//               <SelectItem value="gynecology">Gynecology</SelectItem>
//             </SelectContent>
//           </Select>

//           <Button className="bg-green-600 hover:bg-green-700">Search</Button>
//         </div>
//       </div>

//       <Tabs defaultValue="list" className="w-full mb-8">
//         <TabsList className="grid grid-cols-2 w-48">
//           <TabsTrigger value="list">List View</TabsTrigger>
//           <TabsTrigger value="map">Map View</TabsTrigger>
//         </TabsList>
//       </Tabs>

//       {/* <div className="grid grid-cols-1 gap-6">
//         {hospitals.map((hospital) => (
//           <Card key={hospital.id} className="overflow-hidden">
//             <div className="flex flex-col lg:flex-row">
//               <div className="lg:w-1/3 xl:w-1/4">
//                 <img
//                   src={hospital.image || "/placeholder.svg"}
//                   alt={hospital.name}
//                   className="w-full h-48 lg:h-full object-cover"
//                 />
//               </div>

//               <div className="flex-1 p-6">
//                 <CardHeader className="p-0 pb-2">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <CardTitle className="text-2xl">{hospital.name}</CardTitle>
//                       <div className="flex items-center mt-1">
//                         <MapPin className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-1" />
//                         <span className="text-gray-600 dark:text-gray-400">{hospital.location}</span>
//                         <span className="mx-2 text-gray-600 dark:text-gray-400">•</span>
//                         <span className="text-gray-600 dark:text-gray-400">{hospital.distance}</span>
//                       </div>
//                     </div>
//                     <Badge variant="outline" className="text-green-600 border-green-600 flex items-center">
//                       <Star className="h-3 w-3 mr-1 fill-current" />
//                       {hospital.rating} ({hospital.reviews} reviews)
//                     </Badge>
//                   </div>
//                 </CardHeader>

//                 <CardContent className="p-0 py-4">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                     <div>
//                       <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Contact</p>
//                       <div className="flex items-center">
//                         <Phone className="h-4 w-4 mr-1 text-gray-600 dark:text-gray-400" />
//                         <span>{hospital.phone}</span>
//                       </div>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Hours</p>
//                       <div className="flex items-center">
//                         <Clock className="h-4 w-4 mr-1 text-gray-600 dark:text-gray-400" />
//                         <span>{hospital.hours}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mb-4">
//                     <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Specialties</p>
//                     <div className="flex flex-wrap gap-2">
//                       {hospital.specialties.map((specialty, index) => (
//                         <Badge key={index} variant="secondary">
//                           {specialty}
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>

//                   <div>
//                     <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Facilities</p>
//                     <div className="flex flex-wrap gap-2">
//                       {hospital.facilities.map((facility, index) => (
//                         <Badge key={index} variant="outline">
//                           {facility}
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>
//                 </CardContent>
//               </div>

//               <div className="border-t lg:border-t-0 lg:border-l p-6 lg:w-1/4 flex flex-col">
//                 <div className="mb-4">
//                   <h3 className="font-semibold mb-2">Bed Availability</h3>
//                   <div className="text-center mb-2">
//                     <span className="text-2xl font-bold text-green-600">{hospital.availableBeds}</span>
//                     <span className="text-gray-600 dark:text-gray-400"> / {hospital.totalBeds}</span>
//                   </div>
//                   <Progress value={(hospital.availableBeds / hospital.totalBeds) * 100} className="h-2 bg-gray-200" />
//                   <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
//                     {hospital.availableBeds} beds available
//                   </p>
//                 </div>

//                 <div className="space-y-3 mt-auto">
//                   <Button className="w-full bg-green-600 hover:bg-green-700">
//                     <Bed className="h-4 w-4 mr-2" />
//                     Book Bed
//                   </Button>
//                   <Button className="w-full" variant="outline">
//                     <Calendar className="h-4 w-4 mr-2" />
//                     Book Appointment
//                   </Button>
//                   <Button className="w-full" variant="outline">
//                     <Building className="h-4 w-4 mr-2" />
//                     View Hospital
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div> */}

//       <Tabs.Content value="map">
//         <div className="bg-gray-100 dark:bg-gray-700 rounded-xl h-96 flex items-center justify-center">
//           <div className="text-center">
//             <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//             <p className="text-gray-600 dark:text-gray-400">Map view will display hospitals near your location</p>
//           </div>
//         </div>
//       </Tabs.Content>
//     </div>
//   )
// }

