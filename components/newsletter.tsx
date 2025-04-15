"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    })

    setEmail("")
    setIsLoading(false)
  }

  return (
    <section className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl rounded-xl bg-primary/5 p-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Stay Updated with Travel Deals</h2>
        <p className="mt-4 text-muted-foreground">
          Subscribe to our newsletter and be the first to know about exclusive travel deals and promotions.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            required
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        <p className="mt-4 text-xs text-muted-foreground">
          By subscribing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </section>
  )
}
