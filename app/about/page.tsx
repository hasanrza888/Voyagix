import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Users, Shield, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary/5 py-12 md:py-24">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About Voyagix</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Your Gateway to Seamless Travel Booking. We're on a mission to simplify travel planning by providing a
                  unified platform for booking flights, trains, and buses.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center rounded-lg bg-white p-4 text-center shadow-sm">
                    <span className="text-3xl font-bold text-primary">1M+</span>
                    <span className="text-sm text-muted-foreground">Happy Travelers</span>
                  </div>
                  <div className="flex flex-col items-center rounded-lg bg-white p-4 text-center shadow-sm">
                    <span className="text-3xl font-bold text-primary">100+</span>
                    <span className="text-sm text-muted-foreground">Travel Partners</span>
                  </div>
                  <div className="flex flex-col items-center rounded-lg bg-white p-4 text-center shadow-sm">
                    <span className="text-3xl font-bold text-primary">50+</span>
                    <span className="text-sm text-muted-foreground">Countries</span>
                  </div>
                  <div className="flex flex-col items-center rounded-lg bg-white p-4 text-center shadow-sm">
                    <span className="text-3xl font-bold text-primary">24/7</span>
                    <span className="text-sm text-muted-foreground">Customer Support</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image src="/placeholder.svg?height=800&width=600" alt="About Voyagix" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Mission</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                At Voyagix, we believe that travel should be accessible, affordable, and stress-free for everyone. Our
                mission is to revolutionize the way people book travel by providing a comprehensive platform that brings
                together multiple transportation options in one place.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Global Reach</h3>
                  <p className="mt-2 text-muted-foreground">
                    We connect travelers to destinations worldwide through our extensive network of transportation
                    partners.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Customer First</h3>
                  <p className="mt-2 text-muted-foreground">
                    We prioritize our customers' needs and continuously improve our services based on their feedback.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Secure Booking</h3>
                  <p className="mt-2 text-muted-foreground">
                    We ensure that all transactions and personal information are protected with advanced security
                    measures.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Quality Service</h3>
                  <p className="mt-2 text-muted-foreground">
                    We partner only with reliable transportation providers to ensure a high-quality travel experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Story</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Voyagix was founded in 2020 by a group of travel enthusiasts who were frustrated with the fragmented
                nature of travel booking. They envisioned a platform where travelers could compare and book different
                modes of transportation in one place, saving time and money.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                What started as a small startup has now grown into a trusted travel platform serving millions of
                travelers worldwide. We continue to innovate and expand our services to make travel planning as seamless
                as possible.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Team</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We're a diverse team of travel enthusiasts, tech experts, and customer service professionals dedicated
                to making travel booking easier for everyone.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=160&width=160"
                      alt={`Team Member ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-bold">John Doe</h3>
                  <p className="text-muted-foreground">Co-Founder & CEO</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
