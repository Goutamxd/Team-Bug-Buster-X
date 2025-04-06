"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, ShoppingCart, Clock, MapPin, Plus, Minus } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Mock data for medicines
const medicines = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    brand: "MediCorp",
    price: 5.99,
    availability: "In Stock",
    prescription: false,
    image: "https://uniquepharma1.com/wp-content/uploads/2024/04/paracip-500mg-tablet-10-s_a780cf4d-207b-4125-8f0d-ee3b6d6f73db-300x300.jpg",
  },
  {
    id: 2,
    name: "Amoxicillin 250mg",
    brand: "HealthPharm",
    price: 12.5,
    availability: "In Stock",
    prescription: true,
    image: "https://5.imimg.com/data5/SELLER/Default/2022/12/ED/JR/DL/108376694/cipmox-amoxicillin-250mg-capsules.png",
  },
  {
    id: 3,
    name: "Cetirizine 10mg",
    brand: "AllerCare",
    price: 8.75,
    availability: "Low Stock",
    prescription: false,
    image: "https://5.imimg.com/data5/SELLER/Default/2024/2/394651866/XV/CH/GX/39084219/cetirizine-10-mg-tablet.jpg",
  },
  {
    id: 4,
    name: "Omeprazole 20mg",
    brand: "GastroHealth",
    price: 15.25,
    availability: "In Stock",
    prescription: true,
    image: "https://www.adegenpharma.com/wp-content/uploads/2023/02/OMILESS-20-CAPSULE.jpg",
  },
]

export default function MedicineSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [cartItems, setCartItems] = useState<{ id: number; quantity: number }[]>([])

  const addToCart = (id: number) => {
    const existingItem = cartItems.find((item) => item.id === id)
    if (existingItem) {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCartItems([...cartItems, { id, quantity: 1 }])
    }
  }

  const removeFromCart = (id: number) => {
    const existingItem = cartItems.find((item) => item.id === id)
    if (existingItem && existingItem.quantity > 1) {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item)))
    } else {
      setCartItems(cartItems.filter((item) => item.id !== id))
    }
  }

  const getQuantity = (id: number) => {
    const item = cartItems.find((item) => item.id === id)
    return item ? item.quantity : 0
  }

  return (
    <section className="container mx-auto px-4 py-16 bg-gray-50 dark:bg-gray-900 rounded-3xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Medicine Services</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Search for medicines, check availability in nearby pharmacies, and order them online for delivery or pickup.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search medicines by name or category"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input placeholder="Enter your location for nearby pharmacies" className="pl-10" />
          </div>

          <Button className="bg-green-600 hover:bg-green-700">Search</Button>
        </div>
      </div>

      <Tabs defaultValue="medicines" className="w-full">
        <TabsList className="grid grid-cols-3 w-full max-w-md mb-8">
          <TabsTrigger value="medicines">Medicines</TabsTrigger>
          <TabsTrigger value="pharmacies">Pharmacies</TabsTrigger>
          <TabsTrigger value="orders">My Orders</TabsTrigger>
        </TabsList>

        <TabsContent value="medicines" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {medicines.map((medicine) => (
              <Card key={medicine.id} className="overflow-hidden">
                <div className="p-4 flex justify-center bg-gray-50 dark:bg-gray-700">
                  <img
                    src={medicine.image || "/placeholder.svg"}
                    alt={medicine.name}
                    className="h-32 w-32 object-contain"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{medicine.name}</CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{medicine.brand}</p>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-lg">${medicine.price.toFixed(2)}</span>
                    <Badge
                      variant={medicine.availability === "In Stock" ? "outline" : "secondary"}
                      className={medicine.availability === "In Stock" ? "text-green-600 border-green-600" : ""}
                    >
                      {medicine.availability}
                    </Badge>
                  </div>
                  {medicine.prescription && (
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                    >
                      Prescription Required
                    </Badge>
                  )}
                </CardContent>
                <CardFooter>
                  {getQuantity(medicine.id) > 0 ? (
                    <div className="flex items-center justify-between w-full">
                      <Button variant="outline" size="icon" onClick={() => removeFromCart(medicine.id)}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="font-medium">{getQuantity(medicine.id)}</span>
                      <Button variant="outline" size="icon" onClick={() => addToCart(medicine.id)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => addToCart(medicine.id)}>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pharmacies">
          <div className="bg-gray-100 dark:bg-gray-700 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">
                Map view will display pharmacies near your location with medicine availability
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="orders">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
            <Clock className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Recent Orders</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">You haven't placed any medicine orders yet.</p>
            <Button className="bg-green-600 hover:bg-green-700">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Start Shopping
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      {cartItems.length > 0 && (
        <div className="fixed bottom-6 right-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 z-10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Your Cart</h3>
            <Badge variant="secondary">{cartItems.reduce((total, item) => total + item.quantity, 0)} items</Badge>
          </div>
          <Button className="w-full bg-green-600 hover:bg-green-700">Checkout</Button>
        </div>
      )}
    </section>
  )
}

