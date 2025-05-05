import Link from "next/link"
import Image from "next/image"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const instruments = [
  {
    title: "Piano Lessons",
    description: "Learn to play beautiful melodies on the piano with our expert instructors.",
    image: "/Piano.jpeg",
    link: "/piano-lessons",
  },
  {
    title: "Guitar Lessons",
    description: "Master the guitar with personalized lessons for all skill levels.",
    image: "/guitar.jpeg",
    link: "/guitar-lessons",
  },
  {
    title: "Ukulele Lessons",
    description: "Discover the fun and versatility of the ukulele with our specialized lessons.",
    image: "/Ukulele.jpeg",
    link: "/ukulele-lessons",
  },
]

export default function InstrumentsSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">Our Music Lessons</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {instruments.map((instrument) => (
          <Card key={instrument.title} className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="relative h-48 w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
              <Image
                src={instrument.image || "/placeholder.svg"}
                alt={instrument.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{instrument.title}</CardTitle>
              <CardDescription>{instrument.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild className="w-full relative overflow-hidden group">
                <Link href={instrument.link}>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/50 to-primary transition-all duration-300 group-hover:opacity-0"></span>
                  <span className="relative">Learn More</span>
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
