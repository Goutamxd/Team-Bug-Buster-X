"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MapPin, Filter } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// Mock data for hospitals
const hospitals = [
  {
    id: 1,
    name: "City General Hospital",
    location: "Downtown, City",
    distance: "2.5 km",
    totalBeds: 120,
    availableBeds: 45,
    types: ["General", "ICU", "Emergency"],
    rating: 4.5,
  },
  {
    id: 2,
    name: "Metro Medical Center",
    location: "Westside, City",
    distance: "4.2 km",
    totalBeds: 200,
    availableBeds: 72,
    types: ["General", "ICU", "Pediatric", "Maternity"],
    rating: 4.8,
  },
  {
    id: 3,
    name: "Sunshine Hospital",
    location: "Eastside, City",
    distance: "5.7 km",
    totalBeds: 80,
    availableBeds: 12,
    types: ["General", "Emergency"],
    rating: 4.2,
  },
]

export default function BedAvailabilitySection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("all")

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Hospital Bed Availability</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Check real-time bed availability in hospitals near you and book them online with just a few clicks.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search hospitals by name"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input placeholder="Enter your location" className="pl-10" />
          </div>

          <div className="w-full md:w-48">
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <div className="flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Bed Type" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="general">General</SelectItem>
                <SelectItem value="icu">ICU</SelectItem>
                <SelectItem value="emergency">Emergency</SelectItem>
                <SelectItem value="pediatric">Pediatric</SelectItem>
                <SelectItem value="maternity">Maternity</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="bg-green-600 hover:bg-green-700">Search</Button>
        </div>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid grid-cols-2 w-48 mb-8">
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="map">Map View</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="space-y-6">
          {hospitals.map((hospital) => (
            <div
              key={hospital.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-semibold mr-2">{hospital.name}</h3>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {hospital.rating} ★
                    </Badge>
                  </div>

                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{hospital.location}</span>
                    <span className="mx-2">•</span>
                    <span>{hospital.distance}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hospital.types.map((type) => (
                      <Badge key={type} variant="secondary">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="text-right mb-2">
                    <span className="text-2xl font-bold text-green-600">{hospital.availableBeds}</span>
                    <span className="text-gray-600 dark:text-gray-400"> / {hospital.totalBeds} beds available</span>
                  </div>

                  <div className="w-full max-w-xs mb-4">
                    <Progress value={(hospital.availableBeds / hospital.totalBeds) * 100} className="h-2 bg-gray-200" />
                  </div>

                  <Button className="bg-green-600 hover:bg-green-700">Book Bed</Button>
                </div>
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="map">
          <div className="bg-gray-100 dark:bg-gray-700 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">
                Map view will display hospitals with available beds near your location
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}

