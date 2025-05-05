import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-background to-muted dark:from-background dark:to-background/50 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tight text-center mb-8 sm:text-5xl">Contact Us</h1>
            <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              Have questions or ready to start your musical journey? Reach out to us using any of the contact methods
              below.
            </p>

            <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
              {/* Phone Card */}
              <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-4 flex flex-col items-center text-center relative z-10">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p className="text-muted-foreground mb-4">Call us directly</p>
                  <a href="tel:+918000119609" className="text-lg font-medium hover:text-primary transition-colors">
                    +91 8000119609
                  </a>
                  <Button variant="outline" className="mt-6 w-full backdrop-blur-sm bg-background/50" asChild>
                    <a href="tel:+918000119609">Call Now</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-4 flex flex-col items-center text-center relative z-10">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-muted-foreground mb-4">Send us a message</p>
                  <a
                    href="mailto:hardikrock.hp@gmail.com"
                    className="text-lg font-medium hover:text-primary transition-colors break-all"
                  >
                    hardikrock.hp@gmail.com
                  </a>
                  <Button variant="outline" className="mt-6 w-full backdrop-blur-sm bg-background/50" asChild>
                    <a href="mailto:hardikrock.hp@gmail.com">Email Us</a>
                  </Button>
                </CardContent>
              </Card>

              {/* WhatsApp Card */}
              <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-4 flex flex-col items-center text-center relative z-10">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M9.5 13.5c.5 1 1.5 1 2 1s1.5 0 2-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground mb-4">Chat with us instantly</p>
                  <p className="text-lg font-medium">+91 8000119609</p>
                  <Button className="mt-6 w-full relative overflow-hidden group" asChild>
                    <a href="https://wa.me/918000119609" target="_blank" rel="noopener noreferrer">
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/50 to-primary transition-all duration-300 group-hover:opacity-0"></span>
                      <span className="relative">WhatsApp Now</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-4">Operating Hours</h2>
              <p className="text-lg text-muted-foreground">Indian Standard Time: 10:00 AM - 7:00 PM</p>
              <p className="text-lg text-muted-foreground mt-2">International sessions available by appointment</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
