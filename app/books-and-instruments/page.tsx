import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Instrument Recommendations
const instrumentRecommendations = [
  {
    title: "Adequate",
    image: "https://m.media-amazon.com/images/I/819oylJWefL._AC_SX679_.jpg",
    description:
      "Just getting started? Choose this cost-effective option for beginners. Includes the right features while keeping costs down.",
    link: "#",
  },
  {
    title: "Enhanced",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "More advanced features and better sound quality. Perfect for intermediate students who need more keys and features.",
    link: "#",
  },
  {
    title: "Outstanding",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Our most advanced recommendation with premium sound quality and full-sized keys. Ideal for serious students and performers.",
    link: "#",
  },
  {
    title: "Ukulele",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Choose from 21-inch soprano sized for beginners or students, including case, tuner, and learning materials.",
    link: "#",
  },
  {
    title: "Student Guitar",
    image: "/placeholder.svg?height=200&width=200",
    description:
      'This 36" acoustic guitar is perfect for kids and young beginners. It comes with case, strap, picks, and tuner. Great value.',
    link: "#",
  },
  {
    title: "Acoustic Guitar",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Standard acoustic guitar for older students and adults. Quality construction with solid top for better sound and longevity.",
    link: "#",
  },
]

// Instrument Extras
const instrumentExtras = [
  {
    title: "Keyboard Pedal",
    image: "/placeholder.svg?height=150&width=150",
    description:
      "Universal sustain pedal for electronic keyboards. Essential for proper piano technique and expression.",
    link: "#",
  },
  {
    title: "Keyboard Stand",
    image: "/placeholder.svg?height=150&width=150",
    description:
      "Adjustable X-style keyboard stand with a height-locking design for stability and proper playing posture.",
    link: "#",
  },
  {
    title: "Ukulele Strings",
    image: "/placeholder.svg?height=150&width=150",
    description:
      "Bring new life and brightness to your ukulele. Premium nylon strings with excellent tone and durability for soprano ukuleles.",
    link: "#",
  },
  {
    title: "Guitar Strings",
    image: "/placeholder.svg?height=150&width=150",
    description:
      "Elixir strings are recommended for their balanced sound, durability, and reduced finger noise for beginners.",
    link: "#",
  },
  {
    title: "Metronome",
    image: "/placeholder.svg?height=150&width=150",
    description:
      "Digital and easy-to-use. Helps develop steady rhythm and timing with visual and audio cues and programmable beats.",
    link: "#",
  },
  {
    title: "Music Stand",
    image: "/placeholder.svg?height=150&width=150",
    description:
      "Portable, height-adjustable music stand. Sturdy design with sheet music clips. Perfect for practice and performance.",
    link: "#",
  },
]

// Required Books - My First Piano Series
const myFirstPianoSeries = [
  {
    title: "Lesson and Writing Book A",
    image: "/placeholder.svg?height=150&width=150",
    link: "#",
  },
  {
    title: "Lesson and Writing Book B",
    image: "/placeholder.svg?height=150&width=150",
    link: "#",
  },
  {
    title: "Lesson and Writing Book C",
    image: "/placeholder.svg?height=150&width=150",
    link: "#",
  },
]

// Required Books - Piano Adventures
const pianoAdventures = [
  {
    title: "Primer Level",
    image: "/placeholder.svg?height=150&width=150",
    link: "#",
  },
  {
    title: "Level 1",
    image: "/placeholder.svg?height=150&width=150",
    link: "#",
  },
  {
    title: "Level 2A",
    image: "/placeholder.svg?height=150&width=150",
    link: "#",
  },
  {
    title: "Level 2B",
    image: "/placeholder.svg?height=150&width=150",
    link: "#",
  },
  {
    title: "Level 3A",
    image: "/placeholder.svg?height=150&width=150",
    link: "#",
  },
  {
    title: "Level 3B",
    image: "/placeholder.svg?height=150&width=150",
    link: "#",
  },
  {
    title: "Level 4",
    image: "/placeholder.svg?height=150&width=150",
    link: "#",
  },
  {
    title: "Level 5",
    image: "/placeholder.svg?height=150&width=150",
    link: "#",
  },
  {
    title: "Accelerated Beginner",
    image: "/placeholder.svg?height=150&width=150",
    link: "#",
  },
]

export default function BooksAndInstrumentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          {/* Instrument Recommendations Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center uppercase tracking-wide">Instrument Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {instrumentRecommendations.map((item, index) => (
                <Card key={index} className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="relative h-48 w-full bg-muted/30">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm">{item.description}</p>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href={item.link}>View Recommendation</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Instrument Extras Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center uppercase tracking-wide">Instrument Extras</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {instrumentExtras.map((item, index) => (
                <Card key={index} className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="relative h-40 w-full bg-muted/30">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm">{item.description}</p>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href={item.link}>View Recommendation</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Required Books Section */}
          <section>
            <h2 className="text-2xl font-bold mb-8 text-center uppercase tracking-wide">Required Books</h2>

            {/* My First Piano Series */}
            <div className="mb-12">
              <h3 className="text-xl font-medium mb-6 text-center">My First Piano Series</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {myFirstPianoSeries.map((book, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative h-40 w-40 mb-4">
                      <Image src={book.image || "/placeholder.svg"} alt={book.title} fill className="object-contain" />
                    </div>
                    <h4 className="text-center font-medium mb-2">{book.title}</h4>
                    <Button variant="link" size="sm" asChild>
                      <Link href={book.link}>View Details</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Piano Adventures */}
            <div>
              <h3 className="text-xl font-medium mb-6 text-center">Piano Adventures</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
                {pianoAdventures.map((book, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative h-40 w-40 mb-4">
                      <Image src={book.image || "/placeholder.svg"} alt={book.title} fill className="object-contain" />
                    </div>
                    <h4 className="text-center font-medium mb-2">{book.title}</h4>
                    <Button variant="link" size="sm" asChild>
                      <Link href={book.link}>View Details</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Need help selecting the right books or instruments for your musical journey?
            </p>
            <Button size="lg" className="relative overflow-hidden group" asChild>
              <Link href="/contact">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/50 to-primary transition-all duration-300 group-hover:opacity-0"></span>
                <span className="relative">Contact Us for Recommendations</span>
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
