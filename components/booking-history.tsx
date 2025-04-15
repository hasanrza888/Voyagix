import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plane, Train, Bus, Calendar, Clock } from "lucide-react"
import Link from "next/link"

interface BookingHistoryProps {
  type: "upcoming" | "past" | "canceled"
}

export function BookingHistory({ type }: BookingHistoryProps) {
  // Mock data for bookings
  const bookings = generateMockBookings(type)

  if (bookings.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No {type} bookings found.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 py-4">
      {bookings.map((booking, index) => (
        <Card key={index}>
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  {booking.type === "flight" ? (
                    <Plane className="h-6 w-6 text-primary" />
                  ) : booking.type === "train" ? (
                    <Train className="h-6 w-6 text-primary" />
                  ) : (
                    <Bus className="h-6 w-6 text-primary" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{booking.provider}</h3>
                    <Badge variant={getBadgeVariant(booking.status)}>{booking.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Booking #: {booking.bookingNumber}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 md:flex-nowrap">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{booking.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{booking.time}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div>
                <p className="text-sm text-muted-foreground">From</p>
                <p className="font-medium">{booking.from}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">To</p>
                <p className="font-medium">{booking.to}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Travelers</p>
                <p className="font-medium">{booking.travelers}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Price</p>
                <p className="font-medium">${booking.price}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {type === "upcoming" && (
                <>
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/booking/${booking.type}s/${booking.id}`}>View Details</Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/booking/${booking.type}s/${booking.id}/modify`}>Modify</Link>
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-500 hover:text-red-600">
                    Cancel
                  </Button>
                </>
              )}

              {type === "past" && (
                <>
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/booking/${booking.type}s/${booking.id}`}>View Details</Link>
                  </Button>
                  <Button size="sm" variant="outline">
                    Book Again
                  </Button>
                </>
              )}

              {type === "canceled" && (
                <Button asChild size="sm" variant="outline">
                  <Link href={`/booking/${booking.type}s/${booking.id}`}>View Details</Link>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

// Helper function to generate mock bookings
function generateMockBookings(type: "upcoming" | "past" | "canceled") {
  const bookings = []

  if (type === "upcoming") {
    bookings.push(
      {
        id: "f123",
        type: "flight",
        provider: "American Express",
        bookingNumber: "VX123456",
        status: "Confirmed",
        date: "April 20, 2025",
        time: "08:30 AM",
        from: "New York (JFK)",
        to: "Los Angeles (LAX)",
        travelers: "1 Adult",
        price: 299,
      },
      {
        id: "t456",
        type: "train",
        provider: "Amtrak",
        bookingNumber: "VX789012",
        status: "Confirmed",
        date: "May 5, 2025",
        time: "10:15 AM",
        from: "Boston (South Station)",
        to: "New York (Penn Station)",
        travelers: "2 Adults",
        price: 158,
      },
    )
  } else if (type === "past") {
    bookings.push(
      {
        id: "b789",
        type: "bus",
        provider: "Greyhound",
        bookingNumber: "VX345678",
        status: "Completed",
        date: "March 15, 2025",
        time: "07:45 AM",
        from: "Washington DC (Union Station)",
        to: "Philadelphia (30th Street Station)",
        travelers: "1 Adult",
        price: 39,
      },
      {
        id: "f012",
        type: "flight",
        provider: "Delta Airlines",
        bookingNumber: "VX901234",
        status: "Completed",
        date: "February 28, 2025",
        time: "06:30 AM",
        from: "Chicago (ORD)",
        to: "Miami (MIA)",
        travelers: "1 Adult, 1 Child",
        price: 498,
      },
    )
  } else if (type === "canceled") {
    bookings.push({
      id: "t345",
      type: "train",
      provider: "Amtrak",
      bookingNumber: "VX567890",
      status: "Canceled",
      date: "January 10, 2025",
      time: "09:00 AM",
      from: "New York (Penn Station)",
      to: "Washington DC (Union Station)",
      travelers: "1 Adult",
      price: 159,
    })
  }

  return bookings
}

// Helper function to get badge variant based on status
function getBadgeVariant(status: string) {
  switch (status) {
    case "Confirmed":
      return "default"
    case "Completed":
      return "outline"
    case "Canceled":
      return "destructive"
    default:
      return "secondary"
  }
}
