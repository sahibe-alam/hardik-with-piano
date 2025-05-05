"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Tuition Rates", href: "/tuition-rates" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact", href: "/contact" },
  { name: "FAQs", href: "/faqs" },
  { name: "Books and Instruments", href: "/books-and-instruments" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex py-2 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" className="rounded" alt="Logo" width={140} height={120} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium transition-colors hover:text-primary">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container mx-auto px-4 md:hidden">
          <div className="flex flex-col space-y-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
