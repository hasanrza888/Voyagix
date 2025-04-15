"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Plane, Train, Bus, Calendar, Clock } from "lucide-react"

interface BookingDetailsProps {
  type: string
  id: string
}

export function BookingDetails({ type, id }: BookingDetailsProps) {
  const [booking, setBooking] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to fetch booking details
    const fetchBookingDetails = async () => {
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock data based on type and id
      const mockBooking = getMockBookingDetails(type, id)
      setBooking(mockBooking)
      setIsLoading(false)
    }

    fetchBookingDetails()
  }, [type, id])

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Booking Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <p>Loading booking details...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!booking) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Booking Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <p>Booking not found</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            {type === "flights" ? (
              <Plane className="h-6 w-6 text-primary" />
            ) : type === "trains" ? (
              <Train className="h-6 w-6 text-primary" />
            ) : (
              <Bus className="h-6 w-6 text-primary" />
            )}
          </div>
          <div>
            <h3 className="font-medium">{booking.provider}</h3>
            <p className="text-sm text-muted-foreground">{booking.code}</p>
          </div>
        </div>

        <div className="rounded-lg bg-muted p-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{booking.date}</span>
          </div>

          <div className="mt-4 grid grid-cols-[auto_1fr_auto] gap-2">
            <div className="text-right">
              <p className="font-medium">{booking.departureTime}</p>
              <p className="text-xs text-muted-foreground">{booking.from}</p>
            </div>
            <div className="flex flex-col items-center px-2">
              <div className="h-full w-0.5 bg-border" />
            </div>
            <div>
              <p className="font-medium">{booking.arrivalTime}</p>
              <p className="text-xs text-muted-foreground">{booking.to}</p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{booking.duration}</span>
            {booking.stops > 0 && (
              <span className="text-sm text-muted-foreground">
                • {booking.stops} {booking.stops === 1 ? "stop" : "stops"}
              </span>
            )}
          </div>
        </div>

        {booking.features && booking.features.length > 0 && (
          <div>
            <h4 className="mb-2 text-sm font-medium">Features</h4>
            <div className="flex flex-wrap gap-2">
              {booking.features.map((feature: string, i: number) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        <div>
          <h4 className="mb-2 text-sm font-medium">Price Details</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Base Fare</span>
              <span className="text-sm">${booking.baseFare}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Taxes & Fees</span>
              <span className="text-sm">${booking.taxes}</span>
            </div>
            {booking.discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span className="text-sm">Discount</span>
                <span className="text-sm">-${booking.discount}</span>
              </div>
            )}
            <Separator />
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>${booking.price}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <a href={`/booking/${type}/${id}/print`} target="_blank" rel="noreferrer">
            Print Details
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

// Helper function to generate mock booking details
function getMockBookingDetails(type: string, id: string) {
  if (type === "flights") {
    return {
      provider: "American Express",
      code: "AA 1234",
      date: "April 15, 2025",
      departureTime: "08:30 AM",
      arrivalTime: "11:45 AM",
      duration: "3h 15m",
      stops: 0,
      from: "New York (JFK)",
      to: "Los Angeles (LAX)",
      baseFare: 249,
      taxes: 50,
      discount: 0,
      price: 299,
      features: ["Wi-Fi", "In-flight Entertainment", "Power Outlets"],
    }
  } else if (type === "trains") {
    return {
      provider: "Amtrak",
      code: "Northeast Regional",
      date: "April 15, 2025",
      departureTime: "07:15 AM",
      arrivalTime: "11:30 AM",
      duration: "4h 15m",
      stops: 3,
      from: "New York (Penn Station)",
      to: "Washington DC (Union Station)",
      baseFare: 69,
      taxes: 20,
      discount: 0,
      price: 89,
      features: ["Wi-Fi", "Cafe Car"],
    }
  } else {
    return {
      provider: "Greyhound",
      code: "GH 1234",
      date: "April 15, 2025",
      departureTime: "06:30 AM",
      arrivalTime: "11:45 AM",
      duration: "5h 15m",
      stops: 2,
      from: "New York (Port Authority)",
      to: "Boston (South Station)",
      baseFare: 29,
      taxes: 10,
      discount: 0,
      price: 39,
      features: ["Wi-Fi", "Power Outlets"],
    }
  }
}
