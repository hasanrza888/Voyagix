import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { PopularDestinations } from "@/components/popular-destinations"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        {/* <Features /> */}
        <PopularDestinations />
        {/* <Testimonials /> */}
        {/* <Newsletter /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}
