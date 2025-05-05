import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-medium">Music Academy</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Providing quality music education for students of all ages and skill levels since 2005.
            </p>
            <div className="flex space-x-4">
              {/* <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link> */}
              <Link href="https://www.instagram.com/pianowithhardik/?igsh=YXQwa2hhbWVvNmUz&utm_source=qr" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.youtube.com/@hardikpandya583" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
            
              <li>
                <Link href="/tuition-rates" className="text-muted-foreground hover:text-primary transition-colors">
                  Tuition Rates
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              {/* <li className="flex items-start space-x-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span className="text-muted-foreground">123 Music Street, Harmony City, HC 12345</span>
              </li> */}
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+918000119609 " className="text-muted-foreground hover:text-primary transition-colors">
                +918000119609 
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:info@musicacademy.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                 hardikrock.hp@gmail.com 
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Get in Touch</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Have questions or ready to enroll? Contact us directly.
            </p>
            <div className="space-y-3">
              <Button className="w-full relative overflow-hidden group" asChild>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/50 to-primary transition-all duration-300 group-hover:opacity-0"></span>
                  <span className="relative">WhatsApp Us</span>
                </a>
              </Button>
              <Button variant="outline" className="w-full backdrop-blur-sm bg-background/50" asChild>
                <a href="tel:+918000119609">Call Us</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Music Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
