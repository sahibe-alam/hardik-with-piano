import Image from "next/image"

export default function WelcomeSection() {
  return (
    <section className="bg-muted/50 dark:bg-muted/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg sm:h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg z-10"></div>
            <Image src="/hardik.jpeg" alt="Music teacher" fill className="object-cover" />
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Welcome to Our Music Academy</h2>
            <p className="text-lg text-muted-foreground">
              With over 15 years of teaching experience, we provide high-quality music education in a supportive and
              inspiring environment. Our personalized approach ensures that each student develops their musical skills
              at their own pace.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're a beginner or looking to advance your skills, our dedicated teachers will guide you through
              your musical journey with patience and expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
