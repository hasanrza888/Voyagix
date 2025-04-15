import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Download, Plane, Train, Bus } from "lucide-react"

export default function ConfirmationPage({
  params,
}: {
  params: { type: string; id: string }
}) {
  // In a real app, we would fetch the booking details from the API
  const bookingNumber = `VX${Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0")}`

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex flex-col items-center justify-center text-center">
              <div className="mb-4 rounded-full bg-green-100 p-3">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold">Booking Confirmed!</h1>
              <p className="mt-2 text-muted-foreground">
                Your booking has been confirmed and your {params.type} {params.type === "flights" ? "ticket" : "ticket"}{" "}
                is ready.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Booking Details</span>
                  <span className="text-sm font-normal text-muted-foreground">Booking #: {bookingNumber}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    {params.type === "flights" ? (
                      <Plane className="h-6 w-6 text-primary" />
                    ) : params.type === "trains" ? (
                      <Train className="h-6 w-6 text-primary" />
                    ) : (
                      <Bus className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">
                      {params.type === "flights"
                        ? "American Express"
                        : params.type === "trains"
                          ? "Amtrak"
                          : "Greyhound"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {params.type === "flights"
                        ? "AA 1234"
                        : params.type === "trains"
                          ? "Northeast Regional"
                          : "GH 1234"}
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-muted p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">From</p>
                      <p className="font-medium">
                        {params.type === "flights"
                          ? "New York (JFK)"
                          : params.type === "trains"
                            ? "New York (Penn Station)"
                            : "New York (Port Authority)"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">To</p>
                      <p className="font-medium">
                        {params.type === "flights"
                          ? "Los Angeles (LAX)"
                          : params.type === "trains"
                            ? "Washington DC (Union Station)"
                            : "Boston (South Station)"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-medium">April 15, 2025</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Time</p>
                      <p className="font-medium">
                        {params.type === "flights" ? "08:30 AM" : params.type === "trains" ? "07:15 AM" : "06:30 AM"}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 text-sm font-medium">Traveler Information</h4>
                  <div className="rounded-lg border p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Name</p>
                        <p className="font-medium">John Doe</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">john.doe@example.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 text-sm font-medium">Payment Information</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Payment Method</span>
                      <span className="text-sm">Credit Card (****1234)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Amount Paid</span>
                      <span className="text-sm">
                        ${params.type === "flights" ? "299" : params.type === "trains" ? "89" : "39"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Payment Status</span>
                      <span className="text-sm text-green-600">Paid</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="rounded-lg bg-primary/5 p-4">
                  <h4 className="mb-2 text-sm font-medium">Important Information</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      Please arrive at the{" "}
                      {params.type === "flights" ? "airport" : params.type === "trains" ? "station" : "terminal"} at
                      least {params.type === "flights" ? "2 hours" : "30 minutes"} before departure.
                    </li>
                    <li>Don't forget to bring a valid ID for check-in.</li>
                    <li>For any changes or cancellations, please contact our customer service.</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4 sm:flex-row">
                <Button className="w-full sm:w-auto" asChild>
                  <a href={`/booking/${params.type}/${params.id}/download`} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Ticket
                  </a>
                </Button>
                <Button variant="outline" className="w-full sm:w-auto" asChild>
                  <a href={`/booking/${params.type}/${params.id}/print`} target="_blank" rel="noreferrer">
                    Print Ticket
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-xl font-semibold">What's Next?</h2>
              <p className="text-muted-foreground">
                We've sent a confirmation email to your registered email address with all the details of your booking.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button variant="outline" asChild>
                  <Link href="/account/bookings">View All Bookings</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/">Book Another Trip</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
