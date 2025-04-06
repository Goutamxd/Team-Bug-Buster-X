import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, User, ArrowRight } from "lucide-react"

const healthTips = [
  {
    id: 1,
    title: "5 Ways to Boost Your Immune System Naturally",
    excerpt: "Discover natural methods to strengthen your immune system and stay healthy year-round.",
    category: "Wellness",
    author: "Dr. Sarah Johnson",
    date: "April 2, 2025",
    readTime: "5 min read",
    image: "https://www.uclahealth.org/sites/default/files/styles/landscape_16x9_030000_1200x675/public/images/08/boost-immunity-blog.jpg?f=eda12c20&itok=PWxFSp7F",
  },
  {
    id: 2,
    title: "Understanding Blood Pressure: What the Numbers Mean",
    excerpt: "Learn how to interpret your blood pressure readings and what actions to take for better heart health.",
    category: "Heart Health",
    author: "Dr. Michael Chen",
    date: "April 1, 2025",
    readTime: "7 min read",
    image: "https://www.verywellhealth.com/thmb/jzaB3BtqwdfkvaeviYhXLLRIlZo=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/systolic-and-diastolic-blood-pressure-1746075-01-4f002165f49646d08ca287995c2af55e.png",
  },
  {
    id: 3,
    title: "The Importance of Mental Health Check-ins",
    excerpt: "Regular mental health check-ins can help prevent burnout and improve overall wellbeing.",
    category: "Mental Health",
    author: "Dr. Lisa Patel",
    date: "March 28, 2025",
    readTime: "6 min read",
    image: "https://media.licdn.com/dms/image/v2/D4D12AQFJWabkVcaGyA/article-cover_image-shrink_720_1280/B4DZUUpuEdHYAI-/0/1739808236480?e=2147483647&v=beta&t=YOj3HiqS8YPn2AJX3gjM-cG7x-k1RQO765y1MvUhXe4",
  },
]

export default function HealthTipsSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Health Tips & Blogs</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            AI-curated health advice, doctor blogs, and wellness tips for a healthier lifestyle.
          </p>
        </div>
        <Button variant="outline" className="mt-4 md:mt-0">
          View All Articles
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {healthTips.map((tip) => (
          <Card key={tip.id} className="overflow-hidden">
            <img src={tip.image || "/placeholder.svg"} alt={tip.title} className="w-full h-48 object-cover" />
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center mb-2">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-300">
                  {tip.category}
                </Badge>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="h-3 w-3 mr-1" />
                  {tip.readTime}
                </div>
              </div>
              <CardTitle className="text-xl">{tip.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 dark:text-gray-400 mb-4">{tip.excerpt}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between items-center pt-0">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <User className="h-3 w-3 mr-1" />
                {tip.author}
              </div>
              <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 p-0">
                Read More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

