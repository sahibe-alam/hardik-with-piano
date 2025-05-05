import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Music, Award, BookOpen, Clock, Users, Globe } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* About Us Section */}
        <section className="bg-gradient-to-r from-background to-muted dark:from-background dark:to-background/50 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tight text-center mb-16 sm:text-5xl">About Us</h1>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg z-10"></div>
                  <Image
                    src="/hardik-1.jpeg"
                    alt="Piano Teacher with Student"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg z-10"></div>
                  <Image
                    src="/hardik-4.png"
                    alt="Piano Recital Performance"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 w-full overflow-hidden rounded-lg col-span-2">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg z-10"></div>
                  <Image
                    src="/hardik-2.jpeg"
                    alt="Music Academy Studio"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-6">
                <h2 className="text-3xl font-bold">Hi I'm Hardik Pandya!</h2>

                <div className="prose prose-lg dark:prose-invert">
                  <p>
                    I believe every student is a vessel of music; music is the universal language and I give my students
                    the opportunity to share their music with the world. I create life-long musicians who can pass on
                    their knowledge to others or develop their talent in their own personal space.
                  </p>

                  <p>
                    Whether they become performing artists, teachers, or keep music as a personal passion, I enable my
                    students to have confidence in their ability at every level of learning. My role as a teacher is to
                    empower my students with the technical skills needed to create music in a way that is beneficial to
                    them.
                  </p>

                  <p>
                    I place heavy emphasis on being able to read music, but take special care to incorporate songs into
                    their learning even if they can't yet read the notes. There is a healthy balance of being able to
                    play music you hear and performing music you see.
                  </p>

                  <p>
                    I encourage my students to seek out songs of their own while simultaneously teaching through
                    traditional method books. I desire for students to be able to use the skills we learn in lessons and
                    apply that to teaching themselves new music.
                  </p>

                  <p>
                    My purpose as a teacher is to motivate my students to be perpetual pianists; learning doesn't end
                    when lessons end.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Founder Section */}
        <section className="bg-muted/50 dark:bg-muted/10 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12 sm:text-4xl">Meet the Founder</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg z-10"></div>
                <Image
                  src="/hardik-3.jpeg"
                  alt="Hardik Pandya - Founder"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col space-y-6">
                <p className="text-lg text-muted-foreground">
                  Hardik Pandya is a qualified Western piano teacher in Gujarat, India with more than 10 years of
                  experience in music and the founder of Piano with Hardik academy. He holds dual certifications in
                  Piano and Guitar from Trinity College London. His vision is to share the relatively unfamiliar
                  treasure trove of Bollywood, Rock and Pop and western classical music with individuals so that more
                  people can experience the value it adds to their lives.
                </p>

                <p className="text-lg text-muted-foreground">
                  His journey in music started in 2008, when he picked up the keyboard to learn his favourite songs.
                  During his grad years, he was part of the college band and regularly performed and won college and
                  inter-college competitions. Over the years, his interests transcended from Bollywood, rock and
                  eventually to western classical.
                </p>

                <p className="text-lg text-muted-foreground">
                  After finishing with his Graduation he started working as a Pianist in different music institutes as a
                  teacher and performer with different artists. He has composed and arranged jingles for Music projects.
                  He has worked as a Western Music teacher with reputed schools of Surat like AMNS and Tapti Valley
                  international schools and prepared more than 250 students for School Bands and Trinity College London
                  Music exams.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Trinity College London Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>10+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>250+ Students Taught</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Piano with Hardik Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12 sm:text-4xl">
              Why Choose Piano with Hardik?
            </h2>

            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-muted-foreground">
                We emphasis on piano pedagogy, meticulously adapted for online learning. Our commitment to excellence is
                reflected in our dynamic curriculum and innovative teaching methods, which are in a constant state of
                evolution. We consistently explore new approaches to ensure that our program remains relevant to the
                changing times.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-8 flex flex-col items-center text-center relative z-10">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                    <Music className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Personalized Approach</h3>
                  <p className="text-muted-foreground">
                    Our teaching methods are tailored to each student's unique learning style, ensuring optimal progress
                    and enjoyment.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-8 flex flex-col items-center text-center relative z-10">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Comprehensive Curriculum</h3>
                  <p className="text-muted-foreground">
                    Our dynamic curriculum covers everything from music theory to performance techniques, providing a
                    well-rounded musical education.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-8 flex flex-col items-center text-center relative z-10">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Online Excellence</h3>
                  <p className="text-muted-foreground">
                    Our online lessons are meticulously designed to provide the same quality and engagement as in-person
                    instruction, with added convenience.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" className="relative overflow-hidden group" asChild>
                <Link href="/contact">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/50 to-primary transition-all duration-300 group-hover:opacity-0"></span>
                  <span className="relative">Start Your Musical Journey Today</span>
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
