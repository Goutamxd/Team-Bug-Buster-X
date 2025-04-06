import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Phone, MapPin, Ambulance } from "lucide-react"

export default function EmergencySection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-red-50 dark:bg-red-900/20 rounded-3xl p-8 border border-red-100 dark:border-red-800">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-red-100 dark:bg-red-900 rounded-full mb-4">
            <AlertCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency Services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Quick access to emergency contacts and nearby hospitals in critical situations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <div className="flex items-center mb-2">
                <Phone className="h-5 w-5 text-red-600 mr-2" />
                <CardTitle>Emergency Contacts</CardTitle>
              </div>
              <CardDescription>Important numbers for emergency situations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <p className="font-medium">Ambulance</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Medical Emergency</p>
                </div>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                  102
                </Button>
              </div>

              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <p className="font-medium">Police</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Law Enforcement</p>
                </div>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                  100
                </Button>
              </div>

              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <p className="font-medium">Fire Department</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Fire Emergency</p>
                </div>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                  101
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-red-600 hover:bg-red-700">Add Emergency Contact</Button>
            </CardFooter>
          </Card>

          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <div className="flex items-center mb-2">
                <MapPin className="h-5 w-5 text-red-600 mr-2" />
                <CardTitle>Nearby Hospitals</CardTitle>
              </div>
              <CardDescription>Hospitals close to your current location</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <p className="font-medium">City General Hospital</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2.5 km away</p>
                </div>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Map
                </Button>
              </div>

              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <p className="font-medium">Metro Medical Center</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">4.2 km away</p>
                </div>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Map
                </Button>
              </div>

              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <p className="font-medium">Sunshine Hospital</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">5.7 km away</p>
                </div>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Map
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700">View All Nearby Hospitals</Button>
            </CardFooter>
          </Card>

          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <div className="flex items-center mb-2">
                <Ambulance className="h-5 w-5 text-red-600 mr-2" />
                <CardTitle>Emergency SOS</CardTitle>
              </div>
              <CardDescription>One-tap emergency assistance</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-8">
              <div className="relative mb-6">
                <Button className="h-32 w-32 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center">
                  <AlertCircle className="h-16 w-16" />
                </Button>
                <div className="absolute inset-0 h-32 w-32 rounded-full border-4 border-red-400 animate-ping" />
              </div>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                Press the SOS button to alert emergency services and your emergency contacts
              </p>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Button className="w-full bg-red-600 hover:bg-red-700">Call Ambulance</Button>
              <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
                Configure Emergency Contacts
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

