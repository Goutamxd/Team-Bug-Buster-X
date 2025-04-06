import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "Chikitsa+ has been a lifesaver for my family. The medicine reminder feature ensures my mother never misses her medication, and the doctor appointment booking is so convenient!",
    name: "Priya Sharma",
    role: "Regular User",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    content:
      "As a doctor, I appreciate how Chikitsa+ streamlines the appointment process. The interface is intuitive, and my patients find it easy to use for consultations and follow-ups.",
    name: "Dr. Rajesh Kumar",
    role: "Cardiologist",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    content:
      "The bed availability feature helped me find a hospital bed for my father during an emergency. The real-time updates and booking system are truly revolutionary.",
    name: "Amit Patel",
    role: "Regular User",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="container mx-auto px-4 py-16 bg-gray-50 dark:bg-gray-900 rounded-3xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Hear from our users about how Chikitsa+ has transformed their healthcare experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="bg-white dark:bg-gray-800">
            <CardContent className="pt-6">
              <Quote className="h-8 w-8 text-green-600 mb-4" />
              <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.content}"</p>
            </CardContent>
            <CardFooter className="flex items-center space-x-4 border-t pt-4">
              <Avatar>
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

