"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Calendar, Bed, Pill } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="relative bg-gradient-to-r from-green-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Your Health, <span className="text-green-600">Our Priority</span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl">
              Book appointments, find doctors, check bed availability, order medicines, and manage your health records
              all in one place.
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 mt-8">
              <Tabs defaultValue="doctors" className="w-full">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="doctors" className="flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    <span>Find Doctors</span>
                  </TabsTrigger>
                  <TabsTrigger value="appointments" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Appointments</span>
                  </TabsTrigger>
                  <TabsTrigger value="beds" className="flex items-center gap-2">
                    <Bed className="h-4 w-4" />
                    <span>Beds</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="doctors" className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Search doctors by name, specialty, or location"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1"
                    />
                    <Button className="bg-green-600 hover:bg-green-700">Search</Button>
                  </div>
                </TabsContent>

                <TabsContent value="appointments" className="space-y-4">
                  <div className="flex gap-2">
                    <Input placeholder="Doctor name or specialty" className="flex-1" />
                    <Input type="date" className="w-40" />
                    <Button className="bg-green-600 hover:bg-green-700">Book</Button>
                  </div>
                </TabsContent>

                <TabsContent value="beds" className="space-y-4">
                  <div className="flex gap-2">
                    <Input placeholder="Hospital name or location" className="flex-1" />
                    <Button className="bg-green-600 hover:bg-green-700">Check Availability</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                <Pill className="h-4 w-4 mr-2" />
                Order Medicines
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                <Calendar className="h-4 w-4 mr-2" />
                Set Reminders
              </Button>
              <Button className="bg-red-600 hover:bg-red-700">Emergency SOS</Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              src="/heroSection.png?height=500&width=600"
              alt="Healthcare professionals"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

