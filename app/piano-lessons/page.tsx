import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function PianoLessonsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-background to-muted dark:from-background dark:to-background/50 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tight text-center mb-16 sm:text-5xl text-primary">
              PIANO LESSONS
            </h1>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Introduction Lesson */}
              <div className="flex flex-col">
                <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-oneinamelody-piano-lessons-2025-05-04-12_19_19%201.jpg-G5xZisxMf97dYugdUfn1ZixybhEG1B.jpeg"
                    alt="Digital piano with bench"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-muted/30 dark:bg-muted/10 p-8 rounded-lg flex-1 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold mb-4 text-center">Introduction Lesson</h2>
                  <p className="text-muted-foreground text-center">
                    The introduction lesson allows us to get to know your child and identify their learning style. We
                    will explore the 88 piano keys and learn a new song! This lesson includes a consultation for getting
                    the best instrument to get started with piano lessons. Having a piano is not required for this
                    lesson.
                  </p>
                </div>
              </div>

              {/* Weekly Lessons */}
              <div className="flex flex-col">
                <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-oneinamelody-piano-lessons-2025-05-04-12_19_19%201.jpg-G5xZisxMf97dYugdUfn1ZixybhEG1B.jpeg"
                    alt="Piano Adventures method books"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-muted/30 dark:bg-muted/10 p-8 rounded-lg flex-1 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold mb-4 text-center">Weekly Lessons</h2>
                  <p className="text-muted-foreground text-center">
                    Weekly lessons are for those who are brand new to piano. Consistency is key when learning a new
                    instrument! Students are expected to take one 30-minute weekly lesson and practice 5 days a week at
                    home. In our lessons, we will learn to read music, create songs, and explore a variety of music
                    styles.
                  </p>
                </div>
              </div>

              {/* Advanced Performer Lessons */}
              <div className="flex flex-col">
                <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-oneinamelody-piano-lessons-2025-05-04-12_19_19%201.jpg-G5xZisxMf97dYugdUfn1ZixybhEG1B.jpeg"
                    alt="Woman playing piano performance"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-muted/30 dark:bg-muted/10 p-8 rounded-lg flex-1 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold mb-4 text-center">Advanced Performer Lessons</h2>
                  <p className="text-muted-foreground text-center">
                    Advanced performer lessons are for students who demonstrate exceptional commitment to their progress
                    at the piano. Students are expected to take one 45-minute weekly lesson and practice 6 days a week
                    at home. In our lessons we will study classical repertoire to further develop students' piano
                    technique.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" className="relative overflow-hidden group" asChild>
                <Link href="/contact">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/50 to-primary transition-all duration-300 group-hover:opacity-0"></span>
                  <span className="relative">Book a Piano Lesson</span>
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
