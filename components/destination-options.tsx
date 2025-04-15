import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plane, Train, Bus, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

interface DestinationOptionsProps {
  location: string
  type: "all" | "flights" | "trains" | "buses"
}

export function DestinationOptions({ location, type }: DestinationOptionsProps) {
  // Mock data for travel options
  const options = generateMockOptions(location, type)

  if (options.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-muted-foreground">No travel options found for {location}.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6 py-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Travel Options to {location}</h2>
        <p className="text-sm text-muted-foreground">{options.length} options found</p>
      </div>

      <div className="space-y-4">
        {options.map((option, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto]">
                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      {option.type === "flight" ? (
                        <Plane className="h-6 w-6 text-primary" />
                      ) : option.type === "train" ? (
                        <Train className="h-6 w-6 text-primary" />
                      ) : (
                        <Bus className="h-6 w-6 text-primary" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">{option.provider}</h3>
                      <p className="text-sm text-muted-foreground">{option.code}</p>
                    </div>
                    {option.type === "flight" && (
                      <Badge variant="outline" className="ml-auto md:hidden">
                        Flight
                      </Badge>
                    )}
                    {option.type === "train" && (
                      <Badge variant="outline" className="ml-auto md:hidden">
                        Train
                      </Badge>
                    )}
                    {option.type === "bus" && (
                      <Badge variant="outline" className="ml-auto md:hidden">
                        Bus
                      </Badge>
                    )}
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
                    <div>
                      <p className="text-sm font-medium">{option.departureTime}</p>
                      <p className="text-sm text-muted-foreground">{option.from}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{option.duration}</span>
                      </div>
                      <div className="relative mt-2 h-0.5 w-full bg-muted">
                        <ArrowRight className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
                      </div>
                      {option.stops > 0 && (
                        <p className="mt-1 text-xs text-muted-foreground">
                          {option.stops} {option.stops === 1 ? "stop" : "stops"}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{option.arrivalTime}</p>
                      <p className="text-sm text-muted-foreground">{option.to}</p>
                    </div>
                  </div>

                  {option.features && option.features.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {option.features.map((feature, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-between border-t bg-muted/50 p-4 md:border-l md:border-t-0">
                  {option.type === "flight" && (
                    <Badge variant="outline" className="hidden self-end md:inline-flex">
                      Flight
                    </Badge>
                  )}
                  {option.type === "train" && (
                    <Badge variant="outline" className="hidden self-end md:inline-flex">
                      Train
                    </Badge>
                  )}
                  {option.type === "bus" && (
                    <Badge variant="outline" className="hidden self-end md:inline-flex">
                      Bus
                    </Badge>
                  )}
                  <div className="text-center mt-4 md:mt-0">
                    <p className="text-2xl font-bold">${option.price}</p>
                    <p className="text-xs text-muted-foreground">per person</p>
                  </div>
                  <Button asChild className="mt-4">
                    <Link href={`/booking/${option.type}s/${option.id}`}>Select</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Helper function to generate mock options
function generateMockOptions(location: string, type: "all" | "flights" | "trains" | "buses") {
  const options = []

  // Generate flights
  if (type === "all" || type === "flights") {
    options.push(
      {
        id: "f1",
        type: "flight",
        provider: "American Express",
        code: "AA 1234",
        from: "New York (JFK)",
        to: location,
        departureTime: "08:30 AM",
        arrivalTime: "11:45 AM",
        duration: "3h 15m",
        stops: 0,
        price: 299,
        features: ["Wi-Fi", "In-flight Entertainment", "Power Outlets"],
      },
      {
        id: "f2",
        type: "flight",
        provider: "Delta Airlines",
        code: "DL 5678",
        from: "Chicago (ORD)",
        to: location,
        departureTime: "10:15 AM",
        arrivalTime: "01:45 PM",
        duration: "3h 30m",
        stops: 0,
        price: 279,
        features: ["Wi-Fi", "In-flight Entertainment"],
      },
    )
  }

  // Generate trains
  if (type === "all" || type === "trains") {
    options.push(
      {
        id: "t1",
        type: "train",
        provider: "Amtrak",
        code: "Northeast Regional",
        from: "Boston (South Station)",
        to: location,
        departureTime: "07:15 AM",
        arrivalTime: "11:30 AM",
        duration: "4h 15m",
        stops: 3,
        price: 89,
        features: ["Wi-Fi", "Cafe Car"],
      },
      {
        id: "t2",
        type: "train",
        provider: "Amtrak",
        code: "Acela Express",
        from: "Washington DC (Union Station)",
        to: location,
        departureTime: "09:00 AM",
        arrivalTime: "12:30 PM",
        duration: "3h 30m",
        stops: 1,
        price: 159,
        features: ["Wi-Fi", "Dining Car", "Business Class"],
      },
    )
  }

  // Generate buses
  if (type === "all" || type === "buses") {
    options.push(
      {
        id: "b1",
        type: "bus",
        provider: "Greyhound",
        code: "GH 1234",
        from: "Philadelphia (30th Street Station)",
        to: location,
        departureTime: "06:30 AM",
        arrivalTime: "11:45 AM",
        duration: "5h 15m",
        stops: 2,
        price: 39,
        features: ["Wi-Fi", "Power Outlets"],
      },
      {
        id: "b2",
        type: "bus",
        provider: "Megabus",
        code: "MB 5678",
        from: "Baltimore (Downtown)",
        to: location,
        departureTime: "08:15 AM",
        arrivalTime: "01:30 PM",
        duration: "5h 15m",
        stops: 1,
        price: 29,
        features: ["Wi-Fi", "Power Outlets"],
      },
    )
  }

  return options
}
