import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DestinationOptions } from "@/components/destination-options"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plane, Train, Bus } from "lucide-react"
import Image from "next/image"

export default function DestinationPage({
  params,
}: {
  params: { location: string }
}) {
  // Format the location name for display (e.g., "new-york" -> "New York")
  const formattedLocation = params.location
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-[300px] md:h-[400px]">
          <Image src="/placeholder.svg?height=800&width=1600" alt={formattedLocation} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold">{formattedLocation}</h1>
              <p className="mt-4 text-lg md:text-xl">Discover travel options to {formattedLocation}</p>
            </div>
          </div>
        </section>

        <section className="container py-8 md:py-12">
          <div className="mx-auto max-w-5xl">
            <Tabs defaultValue="all">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All Options</TabsTrigger>
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
              <TabsContent value="all">
                <DestinationOptions location={formattedLocation} type="all" />
              </TabsContent>
              <TabsContent value="flights">
                <DestinationOptions location={formattedLocation} type="flights" />
              </TabsContent>
              <TabsContent value="trains">
                <DestinationOptions location={formattedLocation} type="trains" />
              </TabsContent>
              <TabsContent value="buses">
                <DestinationOptions location={formattedLocation} type="buses" />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="bg-muted py-8 md:py-12">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold">About {formattedLocation}</h2>
              <p className="mt-4 text-muted-foreground">
                {formattedLocation} is a vibrant destination with a rich cultural heritage, stunning architecture, and
                diverse culinary scene. Whether you're visiting for business or pleasure, there's something for everyone
                in this beautiful city.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold">Best Time to Visit</h3>
                <p className="mt-2 text-muted-foreground">
                  The best time to visit {formattedLocation} is during the spring (April to June) and fall (September to
                  November) when the weather is pleasant and tourist crowds are smaller.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold">Local Transportation</h3>
                <p className="mt-2 text-muted-foreground">
                  {formattedLocation} has an excellent public transportation system, including buses, subways, and
                  taxis. Consider purchasing a travel pass for unlimited rides during your stay.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold">Must-See Attractions</h3>
                <p className="mt-2 text-muted-foreground">
                  Don't miss the iconic landmarks, museums, and parks that make {formattedLocation} famous. Take a
                  guided tour to learn about the city's rich history and culture.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
