"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { CalendarIcon, ArrowRightLeft } from "lucide-react"
import { format } from "date-fns"

interface SearchFormProps {
  type: "flights" | "trains" | "buses"
}

export function SearchForm({ type }: SearchFormProps) {
  const router = useRouter()
  const [isRoundTrip, setIsRoundTrip] = useState(true)
  const [departureDate, setDepartureDate] = useState<Date | undefined>(new Date())
  const [returnDate, setReturnDate] = useState<Date | undefined>(new Date(new Date().setDate(new Date().getDate() + 7)))
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")

  const handleSwapLocations = () => {
    const temp = from
    setFrom(to)
    setTo(temp)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, we would validate the form and then navigate to the search results page
    router.push(
      `/search?type=${type}&from=${from}&to=${to}&departure=${departureDate?.toISOString()}&return=${returnDate?.toISOString()}`,
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Switch id="trip-type" checked={isRoundTrip} onCheckedChange={setIsRoundTrip} />
          <label htmlFor="trip-type" className="text-sm font-medium">
            Round Trip
          </label>
        </div>
        {type === "flights" && (
          <Select defaultValue="economy">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="economy">Economy</SelectItem>
              <SelectItem value="premium">Premium Economy</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="first">First Class</SelectItem>
            </SelectContent>
          </Select>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-9">
        <div className="relative md:col-span-4">
          <Input
            placeholder={`From (City or ${type === "flights" ? "Airport" : type === "trains" ? "Station" : "Terminal"})`}
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex items-center justify-center md:col-span-1">
          <Button type="button" variant="outline" size="icon" onClick={handleSwapLocations} className="rounded-full">
            <ArrowRightLeft className="h-4 w-4" />
            <span className="sr-only">Swap locations</span>
          </Button>
        </div>
        <div className="md:col-span-4">
          <Input
            placeholder={`To (City or ${type === "flights" ? "Airport" : type === "trains" ? "Station" : "Terminal"})`}
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {departureDate ? format(departureDate, "PPP") : "Departure Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={departureDate} onSelect={setDepartureDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
        {isRoundTrip && (
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {returnDate ? format(returnDate, "PPP") : "Return Date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Select defaultValue="1">
            <SelectTrigger>
              <SelectValue placeholder="Passengers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Passenger</SelectItem>
              <SelectItem value="2">2 Passengers</SelectItem>
              <SelectItem value="3">3 Passengers</SelectItem>
              <SelectItem value="4">4 Passengers</SelectItem>
              <SelectItem value="5">5+ Passengers</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" className="w-full md:w-auto md:px-8 md:justify-self-end">
          Search {type === "flights" ? "Flights" : type === "trains" ? "Trains" : "Buses"}
        </Button>
      </div>
    </form>
  )
}
