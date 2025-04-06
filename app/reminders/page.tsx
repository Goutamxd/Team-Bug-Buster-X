"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bell, Clock, Calendar, Plus, Pill, Trash2, Edit } from "lucide-react"
import { Switch } from "@/components/ui/switch"

// Mock data for medication reminders
const reminders = [
  {
    id: 1,
    medication: "Paracetamol 500mg",
    dosage: "1 tablet",
    frequency: "Twice daily",
    times: ["08:00 AM", "08:00 PM"],
    startDate: "2025-04-01",
    endDate: "2025-04-15",
    active: true,
  },
  {
    id: 2,
    medication: "Vitamin D 1000 IU",
    dosage: "1 capsule",
    frequency: "Once daily",
    times: ["09:00 AM"],
    startDate: "2025-03-15",
    endDate: "2025-06-15",
    active: true,
  },
  {
    id: 3,
    medication: "Amoxicillin 250mg",
    dosage: "1 tablet",
    frequency: "Three times daily",
    times: ["07:00 AM", "03:00 PM", "11:00 PM"],
    startDate: "2025-04-05",
    endDate: "2025-04-12",
    active: false,
  },
]

export default function RemindersPage() {
  const [activeReminders, setActiveReminders] = useState(reminders)

  const toggleReminder = (id: number) => {
    setActiveReminders(
      activeReminders.map((reminder) => (reminder.id === id ? { ...reminder, active: !reminder.active } : reminder)),
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Medication Reminders</h1>
        <p className="text-gray-600 dark:text-gray-400">Set up and manage medication reminders to never miss a dose.</p>
      </div>

      <Tabs defaultValue="active" className="w-full mb-8">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="active">Active Reminders</TabsTrigger>
          <TabsTrigger value="all">All Reminders</TabsTrigger>
          <TabsTrigger value="add">Add New</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-6 mt-6">
          {activeReminders
            .filter((r) => r.active)
            .map((reminder) => (
              <Card key={reminder.id}>
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-6">
                    <CardHeader className="p-0 pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{reminder.medication}</CardTitle>
                        <Switch checked={reminder.active} onCheckedChange={() => toggleReminder(reminder.id)} />
                      </div>
                    </CardHeader>
                    <CardContent className="p-0 py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Dosage</p>
                        <p className="font-medium">{reminder.dosage}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Frequency</p>
                        <p className="font-medium">{reminder.frequency}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Time(s)</p>
                        <div className="flex flex-wrap gap-2">
                          {reminder.times.map((time, index) => (
                            <Badge key={index} variant="outline" className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {time}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Duration</p>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-gray-600 dark:text-gray-400" />
                          <span>
                            {reminder.startDate} to {reminder.endDate}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </div>

                  <div className="border-t md:border-t-0 md:border-l p-6 flex flex-row md:flex-col justify-center items-center gap-4">
                    <Button variant="outline" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}

          {activeReminders.filter((r) => r.active).length === 0 && (
            <div className="text-center py-12">
              <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Active Reminders</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">You don't have any active medication reminders.</p>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4 mr-2" />
                Add New Reminder
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="all" className="space-y-6 mt-6">
          {activeReminders.map((reminder) => (
            <Card key={reminder.id} className={!reminder.active ? "opacity-70" : ""}>
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-6">
                  <CardHeader className="p-0 pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CardTitle className="text-xl mr-2">{reminder.medication}</CardTitle>
                        {!reminder.active && (
                          <Badge variant="outline" className="text-gray-500 border-gray-300">
                            Inactive
                          </Badge>
                        )}
                      </div>
                      <Switch checked={reminder.active} onCheckedChange={() => toggleReminder(reminder.id)} />
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Dosage</p>
                      <p className="font-medium">{reminder.dosage}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Frequency</p>
                      <p className="font-medium">{reminder.frequency}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Time(s)</p>
                      <div className="flex flex-wrap gap-2">
                        {reminder.times.map((time, index) => (
                          <Badge key={index} variant="outline" className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {time}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Duration</p>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-gray-600 dark:text-gray-400" />
                        <span>
                          {reminder.startDate} to {reminder.endDate}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </div>

                <div className="border-t md:border-t-0 md:border-l p-6 flex flex-row md:flex-col justify-center items-center gap-4">
                  <Button variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="add" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Add New Medication Reminder</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Medication Name</label>
                  <div className="relative">
                    <Pill className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input placeholder="Enter medication name" className="pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Dosage</label>
                  <Input placeholder="e.g., 1 tablet, 5ml, etc." />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Frequency</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="once">Once daily</SelectItem>
                      <SelectItem value="twice">Twice daily</SelectItem>
                      <SelectItem value="thrice">Three times daily</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input type="time" className="pl-10" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Start Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input type="date" className="pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">End Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input type="date" className="pl-10" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Notes (Optional)</label>
                <Input placeholder="Any special instructions or notes" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-4">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Reminder
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-100 dark:border-green-800 mt-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-4 md:mb-0 md:mr-6">
            <Bell className="h-12 w-12 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Never Miss a Dose</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our medication reminder system sends notifications to your phone and email to ensure you never miss a
              dose. You can also set up reminders for family members.
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:ml-6">
            <Button className="bg-green-600 hover:bg-green-700">Notification Settings</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

