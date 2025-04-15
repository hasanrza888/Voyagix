"use client"

import { useState } from "react"
import { SearchForm } from "@/components/search-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plane, Train, Bus } from "lucide-react"

export function Hero() {
  const [activeTab, setActiveTab] = useState("flights")

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
      <div className="container relative py-12 md:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Your Gateway to Seamless Travel Booking
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Search, compare, and book tickets for air, rail, and bus travel all in one place.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-5xl rounded-xl bg-white p-4 shadow-lg md:mt-12 md:p-8">
          <Tabs defaultValue="flights" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="flights" className="flex items-center gap-2">
                <Plane className="h-4 w-4" />
                <span>Flights</span>
              </TabsTrigger>
              <TabsTrigger value="trains" className="flex items-center gap-2">
                <Train className="h-4 w-4" />
                <span>Trains</span>
              </TabsTrigger>
              <TabsTrigger value="buses" className="flex items-center gap-2">
                <Bus className="h-4 w-4" />
                <span>Buses</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="flights">
              <SearchForm type="flights" />
            </TabsContent>
            <TabsContent value="trains">
              <SearchForm type="trains" />
            </TabsContent>
            <TabsContent value="buses">
              <SearchForm type="buses" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
