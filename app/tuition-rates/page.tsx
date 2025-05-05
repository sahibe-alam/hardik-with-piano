import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Globe } from "lucide-react"

export default function TuitionRatesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-background to-muted dark:from-background dark:to-background/50 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tight text-center mb-8 sm:text-5xl">Tuition Rates</h1>
            <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              We offer competitive rates for high-quality music instruction. Choose the plan that works best for your
              schedule and location.
            </p>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {/* Indian Standard Time Zone Card */}
              <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <CardDescription>Indian Standard Time Zone</CardDescription>
                  </div>
                  <CardTitle className="text-2xl">Local Sessions</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">₹400-500</span>
                    <span className="text-muted-foreground ml-2">per session</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Available from 10:00 AM to 7:00 PM IST
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Flexible scheduling options
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Personalized instruction
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Regular progress assessments
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Button className="w-full relative overflow-hidden group" asChild>
                    <Link href="/contact">
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/50 to-primary transition-all duration-300 group-hover:opacity-0"></span>
                      <span className="relative">Book a Session</span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* International Time Zones Card */}
              <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center mb-2">
                    <Globe className="h-5 w-5 text-primary mr-2" />
                    <CardDescription>International Time Zones</CardDescription>
                  </div>
                  <CardTitle className="text-2xl">Global Sessions</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">₹800-1000</span>
                    <span className="text-muted-foreground ml-2">per session</span>
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">(Approximately $12-15 USD)</div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Available for USA, UK, Germany, and other countries
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Scheduled according to your local time zone
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Online sessions via Zoom or Skype
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Digital resources and materials provided
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Button className="w-full relative overflow-hidden group" asChild>
                    <Link href="/contact">
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/50 to-primary transition-all duration-300 group-hover:opacity-0"></span>
                      <span className="relative">Book a Session</span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Have questions about our rates or need a customized lesson plan?
              </p>
              <Button size="lg" variant="outline" className="backdrop-blur-sm bg-background/50" asChild>
                <Link href="/contact">Contact Us for More Information</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
