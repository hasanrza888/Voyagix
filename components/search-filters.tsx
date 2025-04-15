"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface SearchFiltersProps {
  type: string
}

export function SearchFilters({ type }: SearchFiltersProps) {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [departureTime, setDepartureTime] = useState([0, 24])
  const [arrivalTime, setArrivalTime] = useState([0, 24])
  const [duration, setDuration] = useState([0, 24])

  const formatTime = (hours: number) => {
    const h = Math.floor(hours)
    const m = Math.floor((hours - h) * 60)
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`
  }

  const formatDuration = (hours: number) => {
    const h = Math.floor(hours)
    const m = Math.floor((hours - h) * 60)
    return `${h}h ${m}m`
  }

  return (
    <div className="space-y-6 rounded-lg border bg-card p-4 shadow-sm">
      <div>
        <h2 className="text-lg font-medium">Filters</h2>
        <p className="text-sm text-muted-foreground">Refine your {type} search results</p>
      </div>

      <Accordion type="multiple" defaultValue={["price", "times", "stops", "airlines"]}>
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider value={priceRange} min={0} max={2000} step={10} onValueChange={setPriceRange} />
              <div className="flex items-center justify-between">
                <div className="text-sm">${priceRange[0]}</div>
                <div className="text-sm">${priceRange[1]}</div>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
                  className="h-8"
                />
                <span>to</span>
                <Input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                  className="h-8"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="times">
          <AccordionTrigger>Times</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium">Departure Time</Label>
                <Slider
                  value={departureTime}
                  min={0}
                  max={24}
                  step={0.5}
                  onValueChange={setDepartureTime}
                  className="mt-2"
                />
                <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{formatTime(departureTime[0])}</span>
                  <span>{formatTime(departureTime[1])}</span>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium">Arrival Time</Label>
                <Slider
                  value={arrivalTime}
                  min={0}
                  max={24}
                  step={0.5}
                  onValueChange={setArrivalTime}
                  className="mt-2"
                />
                <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{formatTime(arrivalTime[0])}</span>
                  <span>{formatTime(arrivalTime[1])}</span>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium">Duration</Label>
                <Slider value={duration} min={0} max={24} step={0.5} onValueChange={setDuration} className="mt-2" />
                <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{formatDuration(duration[0])}</span>
                  <span>{formatDuration(duration[1])}</span>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {type === "flights" && (
          <AccordionItem value="stops">
            <AccordionTrigger>Stops</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="nonstop" />
                  <Label htmlFor="nonstop" className="text-sm font-normal">
                    Nonstop
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="1stop" />
                  <Label htmlFor="1stop" className="text-sm font-normal">
                    1 Stop
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="2plusstops" />
                  <Label htmlFor="2plusstops" className="text-sm font-normal">
                    2+ Stops
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {type === "flights" && (
          <AccordionItem value="airlines">
            <AccordionTrigger>Airlines</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="airline1" />
                  <Label htmlFor="airline1" className="text-sm font-normal">
                    American Airlines
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="airline2" />
                  <Label htmlFor="airline2" className="text-sm font-normal">
                    Delta Airlines
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="airline3" />
                  <Label htmlFor="airline3" className="text-sm font-normal">
                    United Airlines
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="airline4" />
                  <Label htmlFor="airline4" className="text-sm font-normal">
                    Southwest Airlines
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="airline5" />
                  <Label htmlFor="airline5" className="text-sm font-normal">
                    JetBlue Airways
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {type === "trains" && (
          <AccordionItem value="trainTypes">
            <AccordionTrigger>Train Types</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="express" />
                  <Label htmlFor="express" className="text-sm font-normal">
                    Express
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="regional" />
                  <Label htmlFor="regional" className="text-sm font-normal">
                    Regional
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="highspeed" />
                  <Label htmlFor="highspeed" className="text-sm font-normal">
                    High-Speed
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {type === "buses" && (
          <AccordionItem value="busTypes">
            <AccordionTrigger>Bus Types</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="express" />
                  <Label htmlFor="express" className="text-sm font-normal">
                    Express
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="luxury" />
                  <Label htmlFor="luxury" className="text-sm font-normal">
                    Luxury
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="standard" />
                  <Label htmlFor="standard" className="text-sm font-normal">
                    Standard
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        )}
      </Accordion>

      <Button className="w-full">Apply Filters</Button>
    </div>
  )
}
