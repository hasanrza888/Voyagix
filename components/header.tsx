"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Menu, Search, User } from "lucide-react"

export function Header() {
  const router = useRouter()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setIsSearchDialogOpen(false)
      router.push(`/destination/${searchQuery.toLowerCase().replace(/\s+/g, "-")}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-semibold">
                  Home
                </Link>
                <Link href="/flights" className="text-lg font-semibold">
                  Flights
                </Link>
                <Link href="/trains" className="text-lg font-semibold">
                  Trains
                </Link>
                <Link href="/buses" className="text-lg font-semibold">
                  Buses
                </Link>
                <Link href="/about" className="text-lg font-semibold">
                  About
                </Link>
                <Link href="/contact" className="text-lg font-semibold">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">Voyagix</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/flights" className="text-sm font-medium hover:underline underline-offset-4">
              Flights
            </Link>
            <Link href="/trains" className="text-sm font-medium hover:underline underline-offset-4">
              Trains
            </Link>
            <Link href="/buses" className="text-sm font-medium hover:underline underline-offset-4">
              Buses
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Dialog open={isSearchDialogOpen} onOpenChange={setIsSearchDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Search Destinations</DialogTitle>
                <DialogDescription>Enter a city or destination to find available travel options.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSearch} className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Input
                    type="text"
                    placeholder="Search destinations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>
                <DialogClose asChild>
                  <Button type="submit" disabled={!searchQuery.trim()}>
                    Search
                  </Button>
                </DialogClose>
              </form>
              <div className="mt-4">
                <h4 className="mb-2 text-sm font-medium">Popular Destinations</h4>
                <div className="flex flex-wrap gap-2">
                  {["New York", "Paris", "London", "Tokyo", "Sydney"].map((city) => (
                    <Button
                      key={city}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSearchQuery(city)
                        setIsSearchDialogOpen(false)
                        router.push(`/destination/${city.toLowerCase().replace(/\s+/g, "-")}`)
                      }}
                    >
                      {city}
                    </Button>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/login">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Link>
          </Button>
          <Button asChild className="hidden md:inline-flex">
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
