import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function GuitarLessonsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-background to-muted dark:from-background dark:to-background/50 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tight text-center mb-16 sm:text-5xl text-primary">
              GUITAR LESSONS
            </h1>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Introduction Lesson */}
              <div className="flex flex-col">
                <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-oneinamelody-guitar-lessons-2025-05-04-12_20_48%201.jpg-Ee3PqVsbXBA1JWuZlTXTmQAc50odQ4.jpeg"
                    alt="Close-up of guitar strings being played"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-muted/30 dark:bg-muted/10 p-8 rounded-lg flex-1 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold mb-4 text-center">Introduction Lesson</h2>
                  <p className="text-muted-foreground text-center">
                    At the first guitar lesson, new students will get the chance to experiment with various guitar sizes
                    and discover the enchanting sounds produced by the six strings. Instruments will be supplied, so
                    come prepared to embark on your musical journey and learn your first song.
                  </p>
                </div>
              </div>

              {/* Weekly Lessons */}
              <div className="flex flex-col">
                <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-oneinamelody-guitar-lessons-2025-05-04-12_20_48%201.jpg-Ee3PqVsbXBA1JWuZlTXTmQAc50odQ4.jpeg"
                    alt="Young girl practicing guitar with sheet music"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-muted/30 dark:bg-muted/10 p-8 rounded-lg flex-1 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold mb-4 text-center">Weekly Lessons</h2>
                  <p className="text-muted-foreground text-center">
                    Engaging in weekly guitar lessons is the optimal approach to ensuring consistent learning and the
                    development of strumming and fingerpicking techniques. New students should anticipate having tender
                    fingers during the initial weeks. Dedication to regular practice will lead to greater ease in
                    playing.
                  </p>
                </div>
              </div>

              {/* Group Lessons */}
              <div className="flex flex-col">
                <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-oneinamelody-guitar-lessons-2025-05-04-12_20_48%201.jpg-Ee3PqVsbXBA1JWuZlTXTmQAc50odQ4.jpeg"
                    alt="Two students in a group guitar lesson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-muted/30 dark:bg-muted/10 p-8 rounded-lg flex-1 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold mb-4 text-center">Group Lessons</h2>
                  <p className="text-muted-foreground text-center">
                    Learning in a group setting can be more enjoyable and less intimidating for beginners. The shared
                    experience of learning and playing music together can contribute to a positive and fun learning
                    environment. One in a Melody offers group lessons for up to 4 students.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" className="relative overflow-hidden group" asChild>
                <Link href="/contact">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/50 to-primary transition-all duration-300 group-hover:opacity-0"></span>
                  <span className="relative">Book a Guitar Lesson</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
