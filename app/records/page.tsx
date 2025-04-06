"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FileText, Upload, Calendar, Download, Eye, Lock, Plus, FileUp, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for health records
const records = [
  {
    id: 1,
    name: "Blood Test Report",
    date: "2025-04-01",
    doctor: "Dr. Anil Gupta",
    hospital: "City General Hospital",
    category: "Lab Report",
    size: "2.4 MB",
    shared: false,
  },
  {
    id: 2,
    name: "Chest X-Ray",
    date: "2025-03-15",
    doctor: "Dr. Rajesh Kumar",
    hospital: "Metro Medical Center",
    category: "Radiology",
    size: "5.8 MB",
    shared: true,
  },
  {
    id: 3,
    name: "Prescription - Cardiology",
    date: "2025-03-10",
    doctor: "Dr. Anil Gupta",
    hospital: "City General Hospital",
    category: "Prescription",
    size: "1.2 MB",
    shared: false,
  },
  {
    id: 4,
    name: "Vaccination Certificate",
    date: "2025-02-20",
    doctor: "Dr. Meera Patel",
    hospital: "Community Health Center",
    category: "Certificate",
    size: "0.8 MB",
    shared: true,
  },
]

export default function RecordsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Electronic Health Records (EHR)</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Securely upload, store, and manage your medical reports and health records.
        </p>
      </div>

      <Tabs defaultValue="records" className="w-full">
        <TabsList className="grid grid-cols-3 w-full max-w-md mb-8">
          <TabsTrigger value="records">My Records</TabsTrigger>
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="shared">Shared Records</TabsTrigger>
        </TabsList>

        <TabsContent value="records" className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <div className="flex items-center">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Select Category" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="lab">Lab Reports</SelectItem>
                    <SelectItem value="radiology">Radiology</SelectItem>
                    <SelectItem value="prescription">Prescriptions</SelectItem>
                    <SelectItem value="certificate">Certificates</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Date Range</label>
                <div className="flex space-x-2">
                  <div className="relative flex-1">
                    <Input type="date" placeholder="From" />
                  </div>
                  <div className="relative flex-1">
                    <Input type="date" placeholder="To" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Search</label>
                <div className="relative">
                  <Input
                    placeholder="Search records"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {records.map((record) => (
              <Card key={record.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-6">
                    <CardHeader className="p-0 pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-green-600 mr-2" />
                          <CardTitle className="text-xl">{record.name}</CardTitle>
                        </div>
                        <Badge
                          variant="outline"
                          className={
                            record.shared
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : "bg-gray-50 text-gray-700 border-gray-200"
                          }
                        >
                          {record.shared ? "Shared" : "Private"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0 py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Date</p>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-gray-600 dark:text-gray-400" />
                          <span>{record.date}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Doctor</p>
                        <p className="font-medium">{record.doctor}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Hospital</p>
                        <p className="font-medium">{record.hospital}</p>
                      </div>
                    </CardContent>
                    <div className="pt-2 flex items-center">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-300 mr-2">
                        {record.category}
                      </Badge>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{record.size}</span>
                    </div>
                  </div>

                  <div className="border-t md:border-t-0 md:border-l p-6 flex flex-row md:flex-col justify-center items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="text-blue-600 border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="text-green-600 border-green-200 hover:bg-green-50 hover:text-green-700"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className={
                        record.shared
                          ? "text-gray-600 border-gray-200 hover:bg-gray-50"
                          : "text-blue-600 border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                      }
                    >
                      {record.shared ? <Lock className="h-4 w-4" /> : <Upload className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upload">
          <Card>
            <CardHeader>
              <CardTitle>Upload Health Record</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                <div className="mx-auto flex flex-col items-center justify-center">
                  <FileUp className="h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Drag and drop your files here</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Supported formats: PDF, JPG, PNG, DICOM</p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Browse Files
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Record Name</label>
                  <Input placeholder="e.g., Blood Test Report" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lab">Lab Report</SelectItem>
                      <SelectItem value="radiology">Radiology</SelectItem>
                      <SelectItem value="prescription">Prescription</SelectItem>
                      <SelectItem value="certificate">Certificate</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input type="date" className="pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Doctor (Optional)</label>
                  <Input placeholder="Doctor's name" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Hospital/Clinic (Optional)</label>
                  <Input placeholder="Hospital or clinic name" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Share with</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Privacy setting" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="private">Private (Only me)</SelectItem>
                      <SelectItem value="doctor">My Doctor</SelectItem>
                      <SelectItem value="family">Family Members</SelectItem>
                      <SelectItem value="all">All Healthcare Providers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Notes (Optional)</label>
                <Input placeholder="Any additional information about this record" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-4">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-green-600 hover:bg-green-700">Upload Record</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="shared">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
            <Lock className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Shared Records</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              View records that have been shared with you by family members or patients.
            </p>
            <Button className="bg-green-600 hover:bg-green-700">Manage Sharing Permissions</Button>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800 mt-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-4 md:mb-0 md:mr-6">
            <Lock className="h-12 w-12 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Your Records Are Secure</h3>
            <p className="text-gray-600 dark:text-gray-400">
              All your health records are encrypted and stored securely. You have complete control over who can access
              your information. We comply with all healthcare privacy regulations.
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:ml-6">
            <Button className="bg-blue-600 hover:bg-blue-700">Privacy Settings</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

