import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function UkuleleLessonsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-background to-muted dark:from-background dark:to-background/50 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tight text-center mb-16 sm:text-5xl text-primary">
              UKULELE LESSONS
            </h1>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Introduction Lesson */}
              <div className="flex flex-col">
                <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-oneinamelody-ukulele-lessons-2025-05-04-12_21_13%201.jpg-PYu0VlmxSqd3yzbVi5EGwjgbqhp0kj.jpeg"
                    alt="Ukulele close-up with sheet music"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-muted/30 dark:bg-muted/10 p-8 rounded-lg flex-1 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold mb-4 text-center">Introduction Lesson</h2>
                  <p className="text-muted-foreground text-center">
                    Join our introductory ukulele lesson, suitable for all ages. Discover the joy of playing this
                    delightful instrument with hands-on guidance. Our inclusive environment ensures a welcoming
                    experience for everyone, from young enthusiasts to seasoned learners. Experience the rhythm of a fun
                    and engaging ukulele lesson. Unlock the magic of music with us!
                  </p>
                </div>
              </div>

              {/* Weekly Lessons */}
              <div className="flex flex-col">
                <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-oneinamelody-ukulele-lessons-2025-05-04-12_21_13%201.jpg-PYu0VlmxSqd3yzbVi5EGwjgbqhp0kj.jpeg"
                    alt="Woman in red dress playing ukulele"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-muted/30 dark:bg-muted/10 p-8 rounded-lg flex-1 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold mb-4 text-center">Weekly Lessons</h2>
                  <p className="text-muted-foreground text-center">
                    Participating in weekly ukulele lessons is the ideal method for maintaining a steady learning pace
                    and honing strumming and fingerpicking techniques. Beginners can expect some finger sensitivity in
                    the early weeks. Commitment to regular practice ensures improved comfort and proficiency in playing
                    the ukulele over time.
                  </p>
                </div>
              </div>

              {/* Group Lessons */}
              <div className="flex flex-col">
                <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-oneinamelody-ukulele-lessons-2025-05-04-12_21_13%201.jpg-PYu0VlmxSqd3yzbVi5EGwjgbqhp0kj.jpeg"
                    alt="Group ukulele lesson with teacher and students"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-muted/30 dark:bg-muted/10 p-8 rounded-lg flex-1 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold mb-4 text-center">Group Lessons</h2>
                  <p className="text-muted-foreground text-center">
                    Learning in a group setting can be more enjoyable and less intimidating for ukulele beginners. The
                    shared experience of learning and playing music together can contribute to a positive and enjoyable
                    learning environment. One in a Melody provides group lessons tailored for up to 4 ukulele students.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" className="relative overflow-hidden group" asChild>
                <Link href="/contact">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/50 to-primary transition-all duration-300 group-hover:opacity-0"></span>
                  <span className="relative">Book a Ukulele Lesson</span>
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
