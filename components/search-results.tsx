"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plane, Train, Bus, Clock, ArrowRight } from "lucide-react"

interface SearchResultsProps {
  type: string
  from: string
  to: string
  departure: string
  returnDate: string
}

export function SearchResults({ type, from, to, departure, returnDate }: SearchResultsProps) {
  const [sortBy, setSortBy] = useState("price")

  // Mock data for demonstration
  const results = generateMockResults(type, from, to)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{results.length} results found</p>
        <div className="flex items-center gap-2">
          <span className="text-sm">Sort by:</span>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="duration">Duration: Shortest</SelectItem>
              <SelectItem value="departure">Departure: Earliest</SelectItem>
              <SelectItem value="arrival">Arrival: Earliest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        {results.map((result, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto]">
                <div className="p-4 md:p-6">
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
                      <h3 className="font-medium">{result.provider}</h3>
                      <p className="text-sm text-muted-foreground">{result.code}</p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
                    <div>
                      <p className="text-sm font-medium">{result.departureTime}</p>
                      <p className="text-sm text-muted-foreground">{from}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{result.duration}</span>
                      </div>
                      <div className="relative mt-2 h-0.5 w-full bg-muted">
                        <ArrowRight className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
                      </div>
                      {result.stops > 0 && (
                        <p className="mt-1 text-xs text-muted-foreground">
                          {result.stops} {result.stops === 1 ? "stop" : "stops"}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{result.arrivalTime}</p>
                      <p className="text-sm text-muted-foreground">{to}</p>
                    </div>
                  </div>

                  {result.features && result.features.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {result.features.map((feature, i) => (
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
                  <div className="text-center">
                    <p className="text-2xl font-bold">${result.price}</p>
                    <p className="text-xs text-muted-foreground">per person</p>
                  </div>
                  <Button asChild className="mt-4">
                    <Link href={`/booking/${type}/${result.id}`}>Select</Link>
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

// Helper function to generate mock results
function generateMockResults(type: string, from: string, to: string) {
  const results = []

  if (type === "flights") {
    results.push(
      {
        id: "f1",
        provider: "American Express",
        code: "AA 1234",
        departureTime: "08:30 AM",
        arrivalTime: "11:45 AM",
        duration: "3h 15m",
        stops: 0,
        price: 299,
        features: ["Wi-Fi", "In-flight Entertainment", "Power Outlets"],
      },
      {
        id: "f2",
        provider: "Delta Airlines",
        code: "DL 5678",
        departureTime: "10:15 AM",
        arrivalTime: "01:45 PM",
        duration: "3h 30m",
        stops: 0,
        price: 279,
        features: ["Wi-Fi", "In-flight Entertainment"],
      },
      {
        id: "f3",
        provider: "United Airlines",
        code: "UA 9012",
        departureTime: "12:30 PM",
        arrivalTime: "04:15 PM",
        duration: "3h 45m",
        stops: 1,
        price: 249,
        features: ["Wi-Fi", "Power Outlets"],
      },
      {
        id: "f4",
        provider: "JetBlue Airways",
        code: "B6 3456",
        departureTime: "02:45 PM",
        arrivalTime: "06:00 PM",
        duration: "3h 15m",
        stops: 0,
        price: 319,
        features: ["Wi-Fi", "In-flight Entertainment", "Extra Legroom"],
      },
      {
        id: "f5",
        provider: "Southwest Airlines",
        code: "WN 7890",
        departureTime: "04:30 PM",
        arrivalTime: "08:00 PM",
        duration: "3h 30m",
        stops: 0,
        price: 259,
        features: ["Free Checked Bags", "No Change Fees"],
      },
    )
  } else if (type === "trains") {
    results.push(
      {
        id: "t1",
        provider: "Amtrak",
        code: "Northeast Regional",
        departureTime: "07:15 AM",
        arrivalTime: "11:30 AM",
        duration: "4h 15m",
        stops: 3,
        price: 89,
        features: ["Wi-Fi", "Cafe Car"],
      },
      {
        id: "t2",
        provider: "Amtrak",
        code: "Acela Express",
        departureTime: "09:00 AM",
        arrivalTime: "12:30 PM",
        duration: "3h 30m",
        stops: 1,
        price: 159,
        features: ["Wi-Fi", "Dining Car", "Business Class"],
      },
      {
        id: "t3",
        provider: "Amtrak",
        code: "Northeast Regional",
        departureTime: "11:45 AM",
        arrivalTime: "04:00 PM",
        duration: "4h 15m",
        stops: 3,
        price: 79,
        features: ["Wi-Fi", "Cafe Car"],
      },
      {
        id: "t4",
        provider: "Amtrak",
        code: "Acela Express",
        departureTime: "01:30 PM",
        arrivalTime: "05:00 PM",
        duration: "3h 30m",
        stops: 1,
        price: 149,
        features: ["Wi-Fi", "Dining Car", "Business Class"],
      },
    )
  } else if (type === "buses") {
    results.push(
      {
        id: "b1",
        provider: "Greyhound",
        code: "GH 1234",
        departureTime: "06:30 AM",
        arrivalTime: "11:45 AM",
        duration: "5h 15m",
        stops: 2,
        price: 39,
        features: ["Wi-Fi", "Power Outlets"],
      },
      {
        id: "b2",
        provider: "Megabus",
        code: "MB 5678",
        departureTime: "08:15 AM",
        arrivalTime: "01:30 PM",
        duration: "5h 15m",
        stops: 1,
        price: 29,
        features: ["Wi-Fi", "Power Outlets"],
      },
      {
        id: "b3",
        provider: "BoltBus",
        code: "BB 9012",
        departureTime: "10:00 AM",
        arrivalTime: "03:15 PM",
        duration: "5h 15m",
        stops: 1,
        price: 35,
        features: ["Wi-Fi", "Power Outlets", "Extra Legroom"],
      },
      {
        id: "b4",
        provider: "Greyhound",
        code: "GH 3456",
        departureTime: "12:30 PM",
        arrivalTime: "05:45 PM",
        duration: "5h 15m",
        stops: 2,
        price: 45,
        features: ["Wi-Fi", "Power Outlets"],
      },
      {
        id: "b5",
        provider: "Megabus",
        code: "MB 7890",
        departureTime: "02:45 PM",
        arrivalTime: "08:00 PM",
        duration: "5h 15m",
        stops: 1,
        price: 25,
        features: ["Wi-Fi", "Power Outlets"],
      },
    )
  }

  return results
}
