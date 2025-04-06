"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Filter, ShoppingCart, Plus, Minus, Clock, Pill, Info } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for medicines
const medicines = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    brand: "MediCorp",
    genericName: "Acetaminophen",
    price: 5.99,
    availability: "In Stock",
    prescription: false,
    category: "Pain Relief",
    dosage: "500mg",
    form: "Tablet",
    packSize: "10 tablets",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: 2,
    name: "Amoxicillin 250mg",
    brand: "HealthPharm",
    genericName: "Amoxicillin",
    price: 12.5,
    availability: "In Stock",
    prescription: true,
    category: "Antibiotics",
    dosage: "250mg",
    form: "Capsule",
    packSize: "15 capsules",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: 3,
    name: "Cetirizine 10mg",
    brand: "AllerCare",
    genericName: "Cetirizine Hydrochloride",
    price: 8.75,
    availability: "Low Stock",
    prescription: false,
    category: "Allergy",
    dosage: "10mg",
    form: "Tablet",
    packSize: "10 tablets",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: 4,
    name: "Omeprazole 20mg",
    brand: "GastroHealth",
    genericName: "Omeprazole",
    price: 15.25,
    availability: "In Stock",
    prescription: true,
    category: "Gastrointestinal",
    dosage: "20mg",
    form: "Capsule",
    packSize: "14 capsules",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: 5,
    name: "Vitamin D3 1000 IU",
    brand: "VitaPlus",
    genericName: "Cholecalciferol",
    price: 9.99,
    availability: "In Stock",
    prescription: false,
    category: "Vitamins & Supplements",
    dosage: "1000 IU",
    form: "Tablet",
    packSize: "30 tablets",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: 6,
    name: "Metformin 500mg",
    brand: "DiaCare",
    genericName: "Metformin Hydrochloride",
    price: 7.5,
    availability: "In Stock",
    prescription: true,
    category: "Diabetes",
    dosage: "500mg",
    form: "Tablet",
    packSize: "30 tablets",
    image: "/placeholder.svg?height=150&width=150",
  },
]

// Mock data for pharmacies
const pharmacies = [
  {
    id: 1,
    name: "MediPlus Pharmacy",
    location: "123 Health Street, Downtown",
    distance: "1.2 km",
    hours: "8:00 AM - 10:00 PM",
    phone: "+91 98765 43210",
    delivery: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: "City Medicals",
    location: "456 Wellness Road, Westside",
    distance: "2.8 km",
    hours: "24/7",
    phone: "+91 98765 12345",
    delivery: true,
    rating: 4.2,
  },
  {
    id: 3,
    name: "HealthMart Pharmacy",
    location: "789 Medical Avenue, Eastside",
    distance: "3.5 km",
    hours: "9:00 AM - 9:00 PM",
    phone: "+91 98765 67890",
    delivery: false,
    rating: 4.7,
  },
]

export default function MedicinesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
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

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const medicine = medicines.find((med) => med.id === item.id)
      return total + (medicine ? medicine.price * item.quantity : 0)
    }, 0)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Medicine Services</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Search for medicines, check availability in nearby pharmacies, and order them online.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search medicines by name"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input placeholder="Your location" className="pl-10" />
          </div>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <div className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="pain">Pain Relief</SelectItem>
              <SelectItem value="antibiotics">Antibiotics</SelectItem>
              <SelectItem value="allergy">Allergy</SelectItem>
              <SelectItem value="gastro">Gastrointestinal</SelectItem>
              <SelectItem value="vitamins">Vitamins & Supplements</SelectItem>
              <SelectItem value="diabetes">Diabetes</SelectItem>
            </SelectContent>
          </Select>

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{medicine.name}</CardTitle>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{medicine.brand}</p>
                    </div>
                    <Badge
                      variant={medicine.availability === "In Stock" ? "outline" : "secondary"}
                      className={medicine.availability === "In Stock" ? "text-green-600 border-green-600" : ""}
                    >
                      {medicine.availability}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-lg">₹{medicine.price.toFixed(2)}</span>
                    {medicine.prescription && (
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                      >
                        Prescription Required
                      </Badge>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant="secondary">{medicine.category}</Badge>
                    <Badge variant="outline">{medicine.form}</Badge>
                    <Badge variant="outline">{medicine.packSize}</Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Generic: {medicine.genericName}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pharmacies.map((pharmacy) => (
              <Card key={pharmacy.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{pharmacy.name}</CardTitle>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {pharmacy.rating} ★
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2 mt-0.5" />
                    <div>
                      <p>{pharmacy.location}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{pharmacy.distance} away</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
                    <p>{pharmacy.hours}</p>
                  </div>
                  {pharmacy.delivery && (
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      Delivery Available
                    </Badge>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Medicines</Button>
                  <Button className="bg-green-600 hover:bg-green-700">Order Now</Button>
                </CardFooter>
              </Card>
            ))}
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
        <div className="fixed bottom-6 right-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 z-10 w-72">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Your Cart</h3>
            <Badge variant="secondary">{getTotalItems()} items</Badge>
          </div>

          <div className="space-y-2 max-h-40 overflow-y-auto mb-4">
            {cartItems.map((item) => {
              const medicine = medicines.find((med) => med.id === item.id)
              return medicine ? (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex-1">
                    <p className="text-sm font-medium truncate">{medicine.name}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {item.quantity} x ₹{medicine.price.toFixed(2)}
                    </p>
                  </div>
                  <span className="font-medium">₹{(medicine.price * item.quantity).toFixed(2)}</span>
                </div>
              ) : null
            })}
          </div>

          <div className="border-t pt-4 mb-4">
            <div className="flex justify-between items-center font-semibold">
              <span>Total</span>
              <span>₹{getTotalPrice().toFixed(2)}</span>
            </div>
          </div>

          <Button className="w-full bg-green-600 hover:bg-green-700">Proceed to Checkout</Button>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800 mt-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-4 md:mb-0 md:mr-6">
            <Pill className="h-12 w-12 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Medicine Information</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Always consult with a healthcare professional before taking any medication. Follow the prescribed dosage
              and read the medication guide carefully.
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:ml-6">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Info className="h-4 w-4 mr-2" />
              Medication Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

