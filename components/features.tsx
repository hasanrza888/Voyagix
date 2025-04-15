import { Clock, CreditCard, Globe, Shield, Smartphone, Ticket } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Multi-Modal Search",
      description: "Search across air, rail, and bus travel options in one unified experience.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Real-Time Data",
      description: "Get up-to-date availability and pricing from travel service providers.",
    },
    {
      icon: <Ticket className="h-10 w-10 text-primary" />,
      title: "Easy Booking",
      description: "Book your tickets with just a few clicks and receive instant confirmation.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobile Friendly",
      description: "Access your bookings and manage your trips from any device.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure Transactions",
      description: "Your payment and personal information are protected with advanced security.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: "Multiple Payment Options",
      description: "Pay with credit cards, digital wallets, or other payment methods.",
    },
  ]

  return (
    <section className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Voyagix?</h2>
        <p className="mt-4 text-lg text-muted-foreground">We make travel booking simple, efficient, and hassle-free.</p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm">
            <div className="mb-4 rounded-full bg-primary/10 p-3">{feature.icon}</div>
            <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
