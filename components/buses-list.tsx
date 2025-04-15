import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bus, Clock, ArrowRight } from "lucide-react"

export function BusesList() {
  // Mock data for popular bus routes
  const popularBuses = [
    {
      id: "b1",
      from: "New York",
      fromTerminal: "Port Authority",
      to: "Boston",
      toTerminal: "South Station",
      price: 39,
      departureTime: "06:30 AM",
      arrivalTime: "11:45 AM",
      duration: "5h 15m",
      provider: "Greyhound",
      busType: "Express",
      stops: 2,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "b2",
      from: "Washington DC",
      fromTerminal: "Union Station",
      to: "New York",
      toTerminal: "Port Authority",
      price: 35,
      departureTime: "07:45 AM",
      arrivalTime: "12:30 PM",
      duration: "4h 45m",
      provider: "Megabus",
      busType: "Express",
      stops: 1,
      image: "/placeholder.svg?height=200&width=400",
      discount: 20,
    },
    {
      id: "b3",
      from: "Philadelphia",
      fromTerminal: "30th Street Station",
      to: "New York",
      toTerminal: "Port Authority",
      price: 25,
      departureTime: "08:15 AM",
      arrivalTime: "10:30 AM",
      duration: "2h 15m",
      provider: "BoltBus",
      busType: "Express",
      stops: 0,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "b4",
      from: "Boston",
      fromTerminal: "South Station",
      to: "New York",
      toTerminal: "Port Authority",
      price: 42,
      departureTime: "09:00 AM",
      arrivalTime: "02:15 PM",
      duration: "5h 15m",
      provider: "Greyhound",
      busType: "Standard",
      stops: 3,
      image: "/placeholder.svg?height=200&width=400",
      discount: 15,
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      {popularBuses.map((bus) => (
        <Card key={bus.id} className="overflow-hidden">
          <div className="relative h-48">
            <Image
              src={bus.image || "/placeholder.svg"}
              alt={`${bus.from} to ${bus.to}`}
              fill
              className="object-cover"
            />
            {bus.discount && (
              <Badge className="absolute right-2 top-2 bg-red-500 hover:bg-red-600">{bus.discount}% OFF</Badge>
            )}
          </div>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Bus className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <span className="font-medium">{bus.provider}</span>
                  <p className="text-xs text-muted-foreground">{bus.busType}</p>
                </div>
              </div>
              <div className="text-xl font-bold">${bus.price}</div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <div>
                <p className="text-lg font-medium">{bus.from}</p>
                <p className="text-xs text-muted-foreground">{bus.fromTerminal}</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{bus.duration}</span>
                </div>
                <div className="relative mt-1 h-0.5 w-full bg-muted">
                  <ArrowRight className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
                </div>
                {bus.stops > 0 && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {bus.stops} {bus.stops === 1 ? "stop" : "stops"}
                  </p>
                )}
              </div>
              <div className="text-right">
                <p className="text-lg font-medium">{bus.to}</p>
                <p className="text-xs text-muted-foreground">{bus.toTerminal}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">
                  {bus.departureTime} - {bus.arrivalTime}
                </p>
              </div>
              <Button asChild size="sm">
                <Link href={`/booking/buses/${bus.id}`}>Book Now</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
