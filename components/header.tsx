"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Camelia Qasemi
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#intro" className="text-sm font-medium hover:text-primary transition-colors">
            About Me
          </Link>
          <Link href="#works" className="text-sm font-medium hover:text-primary transition-colors">
            My Works
          </Link>
          <Link href="#contact">
            <Button size="sm" className="rounded-full">
              Contact Me
            </Button>
          </Link>

        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden rounded-full"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-in slide-in-from-top">
          <nav className="flex flex-col items-center gap-4">
            <Link
              href="#intro"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Me
            </Link>
            <Link
              href="#works"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              My Works
            </Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button size="sm" className="rounded-full">
                Contact Me
              </Button>
            </Link>

          </nav>
        </div>
      )}
    </header>
  )
}
