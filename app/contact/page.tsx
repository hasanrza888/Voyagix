import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary/5 py-12 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Have questions or need assistance? We're here to help. Reach out to our team and we'll get back to you
                as soon as possible.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-3 lg:gap-16">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <p className="mt-2 text-muted-foreground">
                  Our customer support team is available to assist you with any questions or concerns.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">support@voyagix.com</p>
                      <p className="text-muted-foreground">info@voyagix.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+1 (800) 123-4567</p>
                      <p className="text-muted-foreground">+1 (800) 987-6543</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground">123 Travel Street</p>
                      <p className="text-muted-foreground">New York, NY 10001</p>
                      <p className="text-muted-foreground">United States</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9am - 8pm EST</p>
                      <p className="text-muted-foreground">Saturday: 10am - 6pm EST</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold">Send Us a Message</h2>
                    <p className="mt-2 text-muted-foreground">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
              <p className="mt-2 text-muted-foreground">Find quick answers to common questions about our services.</p>
              <div className="mt-8 text-left">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium">How do I cancel or modify my booking?</h3>
                    <p className="mt-1 text-muted-foreground">
                      You can cancel or modify your booking by logging into your account and navigating to the "My
                      Bookings" section. From there, select the booking you wish to modify and follow the instructions.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">What payment methods do you accept?</h3>
                    <p className="mt-1 text-muted-foreground">
                      We accept all major credit cards, PayPal, and various digital wallets. For certain routes, we also
                      offer bank transfer options.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">How can I get a refund for a canceled trip?</h3>
                    <p className="mt-1 text-muted-foreground">
                      Refund policies vary depending on the transportation provider and the type of ticket purchased.
                      Please refer to the terms and conditions of your specific booking for details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
