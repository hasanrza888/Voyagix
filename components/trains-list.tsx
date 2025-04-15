import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Train, Clock, ArrowRight } from "lucide-react"

export function TrainsList() {
  // Mock data for popular train routes
  const popularTrains = [
    {
      id: "t1",
      from: "New York",
      fromStation: "Penn Station",
      to: "Washington DC",
      toStation: "Union Station",
      price: 89,
      departureTime: "07:15 AM",
      arrivalTime: "11:30 AM",
      duration: "4h 15m",
      provider: "Amtrak",
      trainType: "Northeast Regional",
      stops: 3,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "t2",
      from: "Boston",
      fromStation: "South Station",
      to: "New York",
      toStation: "Penn Station",
      price: 79,
      departureTime: "08:30 AM",
      arrivalTime: "12:45 PM",
      duration: "4h 15m",
      provider: "Amtrak",
      trainType: "Northeast Regional",
      stops: 3,
      image: "/placeholder.svg?height=200&width=400",
      discount: 10,
    },
    {
      id: "t3",
      from: "New York",
      fromStation: "Penn Station",
      to: "Washington DC",
      toStation: "Union Station",
      price: 159,
      departureTime: "09:00 AM",
      arrivalTime: "12:30 PM",
      duration: "3h 30m",
      provider: "Amtrak",
      trainType: "Acela Express",
      stops: 1,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "t4",
      from: "Philadelphia",
      fromStation: "30th Street Station",
      to: "New York",
      toStation: "Penn Station",
      price: 59,
      departureTime: "10:15 AM",
      arrivalTime: "12:00 PM",
      duration: "1h 45m",
      provider: "Amtrak",
      trainType: "Northeast Regional",
      stops: 1,
      image: "/placeholder.svg?height=200&width=400",
      discount: 15,
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      {popularTrains.map((train) => (
        <Card key={train.id} className="overflow-hidden">
          <div className="relative h-48">
            <Image
              src={train.image || "/placeholder.svg"}
              alt={`${train.from} to ${train.to}`}
              fill
              className="object-cover"
            />
            {train.discount && (
              <Badge className="absolute right-2 top-2 bg-red-500 hover:bg-red-600">{train.discount}% OFF</Badge>
            )}
          </div>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Train className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <span className="font-medium">{train.provider}</span>
                  <p className="text-xs text-muted-foreground">{train.trainType}</p>
                </div>
              </div>
              <div className="text-xl font-bold">${train.price}</div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <div>
                <p className="text-lg font-medium">{train.from}</p>
                <p className="text-xs text-muted-foreground">{train.fromStation}</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{train.duration}</span>
                </div>
                <div className="relative mt-1 h-0.5 w-full bg-muted">
                  <ArrowRight className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
                </div>
                {train.stops > 0 && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {train.stops} {train.stops === 1 ? "stop" : "stops"}
                  </p>
                )}
              </div>
              <div className="text-right">
                <p className="text-lg font-medium">{train.to}</p>
                <p className="text-xs text-muted-foreground">{train.toStation}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">
                  {train.departureTime} - {train.arrivalTime}
                </p>
              </div>
              <Button asChild size="sm">
                <Link href={`/booking/trains/${train.id}`}>Book Now</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
