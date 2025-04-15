import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function PopularDestinations() {
  const destinations = [
    {
      name: "New York",
      image: "/placeholder.svg?height=400&width=600",
      description: "The city that never sleeps",
      price: "From $199",
    },
    {
      name: "Paris",
      image: "/placeholder.svg?height=400&width=600",
      description: "The city of love",
      price: "From $299",
    },
    {
      name: "Tokyo",
      image: "/placeholder.svg?height=400&width=600",
      description: "A blend of tradition and innovation",
      price: "From $499",
    },
    {
      name: "London",
      image: "/placeholder.svg?height=400&width=600",
      description: "Where history meets modernity",
      price: "From $249",
    },
  ]

  return (
    <section className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Popular Destinations</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Discover our most popular travel destinations and start planning your next adventure.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map((destination, index) => (
          <Link key={index} href={`/destination/${destination.name.toLowerCase()}`}>
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-medium">{destination.name}</h3>
                <p className="text-sm text-muted-foreground">{destination.description}</p>
                <p className="mt-2 font-medium text-primary">{destination.price}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/destination" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
          View all destinations
        </Link>
      </div>
    </section>
  )
}
