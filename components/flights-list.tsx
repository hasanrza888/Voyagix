import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plane, Clock, ArrowRight } from "lucide-react"

export function FlightsList() {
  // Mock data for popular flights
  const popularFlights = [
    {
      id: "f1",
      from: "New York",
      fromCode: "JFK",
      to: "Los Angeles",
      toCode: "LAX",
      price: 299,
      departureTime: "08:30 AM",
      arrivalTime: "11:45 AM",
      duration: "3h 15m",
      airline: "American Express",
      stops: 0,
      image: "/placeholder.svg?height=200&width=400",
      discount: 15,
    },
    {
      id: "f2",
      from: "Chicago",
      fromCode: "ORD",
      to: "Miami",
      toCode: "MIA",
      price: 249,
      departureTime: "10:15 AM",
      arrivalTime: "02:30 PM",
      duration: "3h 15m",
      airline: "Delta Airlines",
      stops: 0,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "f3",
      from: "San Francisco",
      fromCode: "SFO",
      to: "New York",
      toCode: "JFK",
      price: 329,
      departureTime: "07:45 AM",
      arrivalTime: "04:15 PM",
      duration: "5h 30m",
      airline: "United Airlines",
      stops: 1,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "f4",
      from: "Boston",
      fromCode: "BOS",
      to: "Washington DC",
      toCode: "DCA",
      price: 189,
      departureTime: "09:30 AM",
      arrivalTime: "11:00 AM",
      duration: "1h 30m",
      airline: "JetBlue Airways",
      stops: 0,
      image: "/placeholder.svg?height=200&width=400",
      discount: 10,
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      {popularFlights.map((flight) => (
        <Card key={flight.id} className="overflow-hidden">
          <div className="relative h-48">
            <Image
              src={flight.image || "/placeholder.svg"}
              alt={`${flight.from} to ${flight.to}`}
              fill
              className="object-cover"
            />
            {flight.discount && (
              <Badge className="absolute right-2 top-2 bg-red-500 hover:bg-red-600">{flight.discount}% OFF</Badge>
            )}
          </div>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Plane className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">{flight.airline}</span>
              </div>
              <div className="text-xl font-bold">${flight.price}</div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <div>
                <p className="text-lg font-medium">{flight.fromCode}</p>
                <p className="text-sm text-muted-foreground">{flight.from}</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{flight.duration}</span>
                </div>
                <div className="relative mt-1 h-0.5 w-full bg-muted">
                  <ArrowRight className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
                </div>
                {flight.stops > 0 && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {flight.stops} {flight.stops === 1 ? "stop" : "stops"}
                  </p>
                )}
              </div>
              <div className="text-right">
                <p className="text-lg font-medium">{flight.toCode}</p>
                <p className="text-sm text-muted-foreground">{flight.to}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">
                  {flight.departureTime} - {flight.arrivalTime}
                </p>
              </div>
              <Button asChild size="sm">
                <Link href={`/booking/flights/${flight.id}`}>Book Now</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
