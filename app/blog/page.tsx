"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Calendar, Clock, User, Heart, MessageSquare, BookOpen, ArrowRight } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "5 Ways to Boost Your Immune System Naturally",
    excerpt:
      "Discover natural methods to strengthen your immune system and stay healthy year-round. From dietary changes to lifestyle adjustments, these tips can help you maintain optimal health.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    category: "Wellness",
    author: "Dr. Sarah Johnson",
    authorRole: "Nutritionist",
    date: "April 2, 2025",
    readTime: "5 min read",
    likes: 124,
    comments: 18,
    image: "/placeholder.svg?height=300&width=600",
    featured: true,
  },
  {
    id: 2,
    title: "Understanding Blood Pressure: What the Numbers Mean",
    excerpt:
      "Learn how to interpret your blood pressure readings and what actions to take for better heart health. This comprehensive guide explains systolic and diastolic pressure.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    category: "Heart Health",
    author: "Dr. Michael Chen",
    authorRole: "Cardiologist",
    date: "April 1, 2025",
    readTime: "7 min read",
    likes: 98,
    comments: 12,
    image: "/placeholder.svg?height=300&width=600",
    featured: false,
  },
  {
    id: 3,
    title: "The Importance of Mental Health Check-ins",
    excerpt:
      "Regular mental health check-ins can help prevent burnout and improve overall wellbeing. Learn how to incorporate these practices into your daily routine.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    category: "Mental Health",
    author: "Dr. Lisa Patel",
    authorRole: "Psychiatrist",
    date: "March 28, 2025",
    readTime: "6 min read",
    likes: 156,
    comments: 24,
    image: "/placeholder.svg?height=300&width=600",
    featured: true,
  },
  {
    id: 4,
    title: "Diabetes Management: New Approaches",
    excerpt:
      "Explore the latest approaches to diabetes management, including technological advancements and lifestyle modifications that can help control blood sugar levels.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    category: "Diabetes",
    author: "Dr. Rajesh Kumar",
    authorRole: "Endocrinologist",
    date: "March 25, 2025",
    readTime: "8 min read",
    likes: 87,
    comments: 15,
    image: "/placeholder.svg?height=300&width=600",
    featured: false,
  },
  {
    id: 5,
    title: "Pediatric Vaccinations: What Parents Should Know",
    excerpt:
      "A comprehensive guide to pediatric vaccinations, including schedules, potential side effects, and the importance of maintaining immunization records.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    category: "Pediatrics",
    author: "Dr. Meera Patel",
    authorRole: "Pediatrician",
    date: "March 20, 2025",
    readTime: "6 min read",
    likes: 112,
    comments: 32,
    image: "/placeholder.svg?height=300&width=600",
    featured: false,
  },
  {
    id: 6,
    title: "Nutrition Myths Debunked by Science",
    excerpt:
      "Separate fact from fiction as we examine common nutrition myths and provide evidence-based information to help you make healthier food choices.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    category: "Nutrition",
    author: "Dr. Sarah Johnson",
    authorRole: "Nutritionist",
    date: "March 15, 2025",
    readTime: "5 min read",
    likes: 143,
    comments: 19,
    image: "/placeholder.svg?height=300&width=600",
    featured: false,
  },
]

// Categories for filtering
const categories = ["All", "Wellness", "Heart Health", "Mental Health", "Diabetes", "Pediatrics", "Nutrition"]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const featuredPosts = blogPosts.filter((post) => post.featured)

  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Health Tips & Blog</h1>
        <p className="text-gray-600 dark:text-gray-400">
          AI-curated health advice, doctor blogs, and wellness tips for a healthier lifestyle.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative col-span-2">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search articles"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <div className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {featuredPosts.length > 0 && searchQuery === "" && selectedCategory === "All" && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="relative">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-64 object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 hover:bg-green-700 text-white">Featured</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-300">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <User className="h-3 w-3 mr-1" />
                    <span>
                      {post.author}, {post.authorRole}
                    </span>
                    <span className="mx-2">•</span>
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex space-x-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Heart className="h-4 w-4 mr-1" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <Button className="text-green-600 hover:text-green-700 p-0" variant="ghost">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">
          {searchQuery !== "" || selectedCategory !== "All" ? "Search Results" : "Latest Articles"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-300">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt.length > 120 ? post.excerpt.substring(0, 120) + "..." : post.excerpt}
                </CardDescription>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <User className="h-3 w-3 mr-1" />
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{post.date}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-0">
                <div className="flex space-x-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Heart className="h-4 w-4 mr-1" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>{post.comments}</span>
                  </div>
                </div>
                <Button className="text-green-600 hover:text-green-700 p-0" variant="ghost">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
          Load More Articles
        </Button>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-100 dark:border-green-800 mt-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-4 md:mb-0 md:mr-6">
            <BookOpen className="h-12 w-12 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Get the latest health tips, wellness advice, and medical updates delivered straight to your inbox.
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:ml-6 flex w-full md:w-auto">
            <Input placeholder="Your email address" className="mr-2" />
            <Button className="bg-green-600 hover:bg-green-700">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

