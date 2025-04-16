import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingDetails } from "@/components/booking-details"
import { BookingForm } from "@/components/booking-form"

export default function BookingPage({
  params,
}: {
  params: { type: string; id: string }
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <h1 className="text-2xl font-bold md:text-3xl">Complete Your Booking</h1>
          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_400px]">
            <BookingForm type={params.type} id={params.id} />
            <BookingDetails type={params.type} id={params.id} />
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
