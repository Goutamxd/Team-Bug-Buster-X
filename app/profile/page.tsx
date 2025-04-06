"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Settings, Bell, Lock, FileText, Calendar, Clock, Pill, Building, CreditCard, LogOut } from "lucide-react"
import { Switch } from "@/components/ui/switch"

// Mock data for user profile
const userProfile = {
  name: "Rahul Sharma",
  email: "rahul.sharma@example.com",
  phone: "+91 98765 43210",
  dob: "1985-06-15",
  bloodGroup: "O+",
  address: "123 Residential Colony, New Delhi",
  emergencyContact: {
    name: "Priya Sharma",
    relation: "Spouse",
    phone: "+91 98765 12345",
  },
  insurance: {
    provider: "Health Secure",
    policyNumber: "HS-12345678",
    validUntil: "2026-03-31",
  },
}

// Mock data for appointments
const appointments = [
  {
    id: 1,
    doctor: "Dr. Anil Gupta",
    specialty: "Cardiology",
    date: "2025-04-15",
    time: "10:30 AM",
    hospital: "City General Hospital",
    status: "Upcoming",
  },
  {
    id: 2,
    doctor: "Dr. Priya Sharma",
    specialty: "Dermatology",
    date: "2025-03-28",
    time: "03:00 PM",
    hospital: "Metro Medical Center",
    status: "Completed",
  },
  {
    id: 3,
    doctor: "Dr. Rajesh Kumar",
    specialty: "Neurology",
    date: "2025-02-15",
    time: "11:00 AM",
    hospital: "Sunshine Hospital",
    status: "Completed",
  },
]

// Mock data for prescriptions
const prescriptions = [
  {
    id: 1,
    doctor: "Dr. Anil Gupta",
    date: "2025-03-28",
    medicines: [
      { name: "Atorvastatin 10mg", dosage: "1 tablet", frequency: "Once daily at night", duration: "30 days" },
      { name: "Aspirin 75mg", dosage: "1 tablet", frequency: "Once daily after breakfast", duration: "30 days" },
    ],
    notes: "Continue regular exercise and low-salt diet.",
  },
  {
    id: 2,
    doctor: "Dr. Priya Sharma",
    date: "2025-03-28",
    medicines: [
      { name: "Cetrizine 10mg", dosage: "1 tablet", frequency: "Once daily at night", duration: "7 days" },
      { name: "Moisturizing Lotion", dosage: "As needed", frequency: "Apply twice daily", duration: "Continuous" },
    ],
    notes: "Avoid hot showers and use mild soap.",
  },
]

export default function ProfilePage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(true)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">My Profile</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your personal information, appointments, and health records.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt={userProfile.name} />
                  <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">{userProfile.name}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{userProfile.email}</p>
                <Button variant="outline" className="w-full mb-2">
                  <User className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
                <Button
                  variant="outline"
                  className="w-full text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <nav className="flex flex-col">
              <a
                href="#personal"
                className="flex items-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-l-4 border-green-600"
              >
                <User className="h-5 w-5 mr-3 text-gray-600 dark:text-gray-400" />
                <span>Personal Information</span>
              </a>
              <a
                href="#appointments"
                className="flex items-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-l-4 border-transparent"
              >
                <Calendar className="h-5 w-5 mr-3 text-gray-600 dark:text-gray-400" />
                <span>Appointments</span>
              </a>
              <a
                href="#prescriptions"
                className="flex items-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-l-4 border-transparent"
              >
                <FileText className="h-5 w-5 mr-3 text-gray-600 dark:text-gray-400" />
                <span>Prescriptions</span>
              </a>
              <a
                href="#reminders"
                className="flex items-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-l-4 border-transparent"
              >
                <Bell className="h-5 w-5 mr-3 text-gray-600 dark:text-gray-400" />
                <span>Medication Reminders</span>
              </a>
              <a
                href="#settings"
                className="flex items-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-l-4 border-transparent"
              >
                <Settings className="h-5 w-5 mr-3 text-gray-600 dark:text-gray-400" />
                <span>Settings</span>
              </a>
            </nav>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-8">
          <Card id="personal">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2 text-green-600" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Full Name</label>
                  <Input value={userProfile.name} className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Email</label>
                  <Input value={userProfile.email} className="mt-1" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Phone Number</label>
                  <Input value={userProfile.phone} className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Date of Birth</label>
                  <Input type="date" value={userProfile.dob} className="mt-1" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Blood Group</label>
                  <Input value={userProfile.bloodGroup} className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Address</label>
                  <Input value={userProfile.address} className="mt-1" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Emergency Contact</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Name</label>
                    <Input value={userProfile.emergencyContact.name} className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Relation</label>
                    <Input value={userProfile.emergencyContact.relation} className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Phone</label>
                    <Input value={userProfile.emergencyContact.phone} className="mt-1" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Insurance Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Provider</label>
                    <Input value={userProfile.insurance.provider} className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Policy Number</label>
                    <Input value={userProfile.insurance.policyNumber} className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Valid Until</label>
                    <Input type="date" value={userProfile.insurance.validUntil} className="mt-1" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-4">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-green-600 hover:bg-green-700">Save Changes</Button>
            </CardFooter>
          </Card>

          <Card id="appointments">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-green-600" />
                My Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="upcoming">
                <TabsList className="grid grid-cols-3 w-full max-w-md mb-6">
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="past">Past</TabsTrigger>
                  <TabsTrigger value="all">All</TabsTrigger>
                </TabsList>

                <TabsContent value="upcoming">
                  {appointments
                    .filter((app) => app.status === "Upcoming")
                    .map((appointment) => (
                      <div key={appointment.id} className="mb-4 p-4 border rounded-lg">
                        <div className="flex flex-col md:flex-row justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">{appointment.doctor}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{appointment.specialty}</p>
                            <div className="flex items-center mt-2">
                              <Building className="h-4 w-4 mr-1 text-gray-600 dark:text-gray-400" />
                              <span>{appointment.hospital}</span>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0 text-right">
                            <div className="flex items-center justify-end mb-2">
                              <Calendar className="h-4 w-4 mr-1 text-gray-600 dark:text-gray-400" />
                              <span>{appointment.date}</span>
                            </div>
                            <div className="flex items-center justify-end mb-2">
                              <Clock className="h-4 w-4 mr-1 text-gray-600 dark:text-gray-400" />
                              <span>{appointment.time}</span>
                            </div>
                            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                              {appointment.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex justify-end mt-4 space-x-2">
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ))}

                  {appointments.filter((app) => app.status === "Upcoming").length === 0 && (
                    <div className="text-center py-8">
                      <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No Upcoming Appointments</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        You don't have any upcoming appointments scheduled.
                      </p>
                      <Button className="bg-green-600 hover:bg-green-700">Book New Appointment</Button>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="past">
                  {appointments
                    .filter((app) => app.status === "Completed")
                    .map((appointment) => (
                      <div key={appointment.id} className="mb-4 p-4 border rounded-lg">
                        <div className="flex flex-col md:flex-row justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">{appointment.doctor}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{appointment.specialty}</p>
                            <div className="flex items-center mt-2">
                              <Building className="h-4 w-4 mr-1 text-gray-600 dark:text-gray-400" />
                              <span>{appointment.hospital}</span>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0 text-right">
                            <div className="flex items-center justify-end mb-2">
                              <Calendar className="h-4 w-4 mr-1 text-gray-600 dark:text-gray-400" />
                              <span>{appointment.date}</span>
                            </div>
                            <div className="flex items-center justify-end mb-2">
                              <Clock className="h-4 w-4 mr-1 text-gray-600 dark:text-gray-400" />
                              <span>{appointment.time}</span>
                            </div>
                            <Badge variant="outline" className="text-gray-600 border-gray-300">
                              {appointment.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex justify-end mt-4 space-x-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button variant="outline" size="sm">
                            Book Follow-up
                          </Button>
                        </div>
                      </div>
                    ))}
                </TabsContent>

                <TabsContent value="all">
                  {appointments.map((appointment) => (
                    <div key={appointment.id} className="mb-4 p-4 border rounded-lg">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{appointment.doctor}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{appointment.specialty}</p>
                          <div className="flex items-center mt-2">
                            <Building className="h-4 w-4 mr-1 text-gray-600 dark:text-gray-400" />
                            <span>{appointment.hospital}</span>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0 text-right">
                          <div className="flex items-center justify-end mb-2">
                            <Calendar className="h-4 w-4 mr-1 text-gray-600 dark:text-gray-400" />
                            <span>{appointment.date}</span>
                          </div>
                          <div className="flex items-center justify-end mb-2">
                            <Clock className="h-4 w-4 mr-1 text-gray-600 dark:text-gray-400" />
                            <span>{appointment.time}</span>
                          </div>
                          <Badge
                            className={
                              appointment.status === "Upcoming"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                            }
                          >
                            {appointment.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex justify-end mt-4 space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {appointment.status === "Upcoming" ? (
                          <>
                            <Button variant="outline" size="sm">
                              Reschedule
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                            >
                              Cancel
                            </Button>
                          </>
                        ) : (
                          <Button variant="outline" size="sm">
                            Book Follow-up
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700">Book New Appointment</Button>
            </CardFooter>
          </Card>

          <Card id="prescriptions">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-green-600" />
                My Prescriptions
              </CardTitle>
            </CardHeader>
            <CardContent>
              {prescriptions.map((prescription) => (
                <div key={prescription.id} className="mb-6 p-4 border rounded-lg">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{prescription.doctor}</h3>
                      <div className="flex items-center mt-1">
                        <Calendar className="h-4 w-4 mr-1 text-gray-600 dark:text-gray-400" />
                        <span>{prescription.date}</span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Button variant="outline" size="sm" className="mr-2">
                        <FileText className="h-4 w-4 mr-1" />
                        View PDF
                      </Button>
                      <Button variant="outline" size="sm">
                        <Pill className="h-4 w-4 mr-1" />
                        Order Medicines
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Medications</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-50 dark:bg-gray-700">
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                              Medicine
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                              Dosage
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                              Frequency
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                              Duration
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                          {prescription.medicines.map((medicine, index) => (
                            <tr key={index}>
                              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                                {medicine.name}
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                                {medicine.dosage}
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                                {medicine.frequency}
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                                {medicine.duration}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {prescription.notes && (
                      <div>
                        <h4 className="font-medium">Notes</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">{prescription.notes}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card id="settings">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2 text-green-600" />
                Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Enable Notifications</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Receive notifications for appointments, reminders, and updates
                      </p>
                    </div>
                    <Switch checked={notificationsEnabled} onCheckedChange={setNotificationsEnabled} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Receive notifications via email</p>
                    </div>
                    <Switch
                      checked={emailNotifications}
                      onCheckedChange={setEmailNotifications}
                      disabled={!notificationsEnabled}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">SMS Notifications</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Receive notifications via SMS</p>
                    </div>
                    <Switch
                      checked={smsNotifications}
                      onCheckedChange={setSmsNotifications}
                      disabled={!notificationsEnabled}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="text-lg font-medium mb-4">Privacy & Security</h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Lock className="h-4 w-4 mr-2" />
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Manage Payment Methods
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Privacy Settings
                  </Button>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="text-lg font-medium mb-4">Language & Accessibility</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    <label className="text-sm font-medium">Language</label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="en">English</option>
                      <option value="hi">Hindi</option>
                      <option value="bn">Bengali</option>
                      <option value="te">Telugu</option>
                      <option value="ta">Tamil</option>
                      <option value="mr">Marathi</option>
                    </select>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-4">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-green-600 hover:bg-green-700">Save Changes</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

