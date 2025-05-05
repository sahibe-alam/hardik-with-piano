import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-r from-background to-muted dark:from-background dark:to-background/50">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="flex flex-col space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Discover the Joy of <span className="text-primary">Music</span>
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground">
              Expert music lessons for all ages and skill levels. Start your musical journey today with personalized
              instruction.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="relative overflow-hidden group" asChild>
                <Link   href={`https://wa.me/919876543210`}
        target="_blank"
        rel="noopener noreferrer">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/50 to-primary transition-all duration-300 group-hover:opacity-0"></span>
                  <span className="relative">Book a Free Trial Lesson</span>
                </Link>
              </Button>
             
            </div>
          </div>
          <div className="relative h-[280px] w-full overflow-hidden rounded-lg sm:h-[300px] md:h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg z-10"></div>
            <Image
              src="/banner-img.jpg"
              alt="Piano teacher with student"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
