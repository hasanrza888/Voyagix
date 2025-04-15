import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Frequent Traveler",
      content:
        "Voyagix has completely transformed how I book my travel. The ability to compare flights, trains, and buses all in one place has saved me so much time and money!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Business Traveler",
      content:
        "As someone who travels frequently for work, I appreciate the simplicity and efficiency of Voyagix. The booking management feature is particularly useful for keeping track of my trips.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Family Vacationer",
      content:
        "Planning family trips used to be stressful, but Voyagix makes it easy to find the best options for all of us. The user interface is intuitive and the customer service is excellent.",
      rating: 4,
    },
  ]

  return (
    <section className="bg-muted py-12 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Users Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don't just take our word for it. Here's what travelers like you think about Voyagix.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-4 text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
