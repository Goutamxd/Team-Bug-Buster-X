"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Video, MessageSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const specialties = [
  "Cardiology",
  "Dermatology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Psychiatry",
  "Gynecology",
  "Ophthalmology",
  "Dentistry",
  "General Medicine",
]

export default function AppointmentSection() {
  const [appointmentType, setAppointmentType] = useState("in-person")

  return (
    <section className="container mx-auto px-4 py-16 bg-gray-50 dark:bg-gray-900 rounded-3xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Appointment</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Schedule appointments with top doctors in your area or consult online. AI assistance available when doctors
          are unavailable.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Schedule an Appointment</CardTitle>
              <CardDescription>Fill in the details to book your appointment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Appointment Type</label>
                  <div className="flex space-x-2">
                    <Button
                      variant={appointmentType === "in-person" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setAppointmentType("in-person")}
                      className={appointmentType === "in-person" ? "bg-green-600 hover:bg-green-700" : ""}
                    >
                      In-Person
                    </Button>
                    <Button
                      variant={appointmentType === "video" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setAppointmentType("video")}
                      className={appointmentType === "video" ? "bg-green-600 hover:bg-green-700" : ""}
                    >
                      <Video className="h-4 w-4 mr-1" />
                      Video
                    </Button>
                    <Button
                      variant={appointmentType === "chat" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setAppointmentType("chat")}
                      className={appointmentType === "chat" ? "bg-green-600 hover:bg-green-700" : ""}
                    >
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Chat
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Specialty</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      {specialties.map((specialty) => (
                        <SelectItem key={specialty} value={specialty.toLowerCase()}>
                          {specialty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Doctor (Optional)</label>
                <Input placeholder="Search for a specific doctor" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Date</label>
                  <div className="relative">
                    <Input type="date" />
                    <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Time</label>
                  <div className="relative">
                    <Input type="time" />
                    <Clock className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Reason for Visit</label>
                <Input placeholder="Brief description of your symptoms or reason" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700">Book Appointment</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Why Choose Our Appointment System?</h3>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-4">
                <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-medium">Instant Booking</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Book appointments instantly with your preferred doctors.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-4">
                <Video className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-medium">Video Consultations</h4>
                <p className="text-gray-600 dark:text-gray-400">Consult with doctors from the comfort of your home.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-4">
                <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-medium">AI Assistance</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Get AI-powered guidance when doctors are unavailable.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl border border-green-100 dark:border-green-800 mt-6">
            <h4 className="font-medium text-lg mb-2">Need Immediate Assistance?</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our AI assistant can provide guidance and answer your health-related questions when doctors are
              unavailable.
            </p>
            <Button className="bg-green-600 hover:bg-green-700">Chat with AI Assistant</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

