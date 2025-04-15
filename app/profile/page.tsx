"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProfileInfo } from "@/components/profile-info"
import { BookingHistory } from "@/components/booking-history"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

export default function ProfilePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Simulate checking authentication status
  useEffect(() => {
    const checkAuth = async () => {
      // In a real app, this would check if the user is logged in
      // For demo purposes, we'll simulate a logged-in user
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simulate authenticated user
      setIsAuthenticated(true)
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please log in to access your profile.",
        variant: "destructive",
      })
      router.push("/login")
    }
  }, [isLoading, isAuthenticated, router])

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p>Loading profile...</p>
        </main>
        <Footer />
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // Will redirect to login
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary/5 py-8 md:py-12">
          <div className="container">
            <h1 className="text-3xl font-bold">My Profile</h1>
            <p className="mt-2 text-muted-foreground">Manage your account and view your booking history</p>
          </div>
        </section>

        <section className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-[300px_1fr]">
            <Card>
              <CardContent className="p-6">
                <ProfileInfo />
                <div className="mt-6">
                  <Button variant="outline" className="w-full" onClick={() => router.push("/")}>
                    Logout
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div>
              <Tabs defaultValue="upcoming">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="upcoming">Upcoming Trips</TabsTrigger>
                  <TabsTrigger value="past">Past Trips</TabsTrigger>
                  <TabsTrigger value="canceled">Canceled</TabsTrigger>
                </TabsList>
                <TabsContent value="upcoming">
                  <BookingHistory type="upcoming" />
                </TabsContent>
                <TabsContent value="past">
                  <BookingHistory type="past" />
                </TabsContent>
                <TabsContent value="canceled">
                  <BookingHistory type="canceled" />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
