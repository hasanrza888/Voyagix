import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FlightsList } from "@/components/flights-list"
import { SearchForm } from "@/components/search-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plane } from "lucide-react"

export default function FlightsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary/5 py-8 md:py-12">
          <div className="container">
            <div className="mx-auto max-w-5xl rounded-xl bg-white p-4 shadow-lg md:p-8">
              <Tabs defaultValue="flights">
                <TabsList className="grid w-full grid-cols-1">
                  <TabsTrigger value="flights" className="flex items-center gap-2">
                    <Plane className="h-4 w-4" />
                    <span>Flights</span>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="flights">
                  <SearchForm type="flights" />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="container py-8 md:py-12">
          <h1 className="mb-8 text-2xl font-bold md:text-3xl">Popular Flight Destinations</h1>
          <FlightsList />
        </section>
      </main>
      <Footer />
    </div>
  )
}
