import { Check } from "lucide-react"

const benefits = [
  {
    title: "Experienced Teachers",
    description: "Our instructors have advanced degrees in music and years of teaching experience.",
  },
  {
    title: "Personalized Approach",
    description: "Lessons are tailored to each student's learning style, goals, and pace.",
  },
  {
    title: "Convenient Scheduling",
    description: "Flexible lesson times to accommodate busy schedules, including evenings and weekends.",
  },
  {
    title: "Regular Recitals",
    description: "Opportunities to perform and showcase your progress in a supportive environment.",
  },
  {
    title: "All Ages Welcome",
    description: "Programs for children, teens, and adults at all skill levels from beginner to advanced.",
  },
  {
    title: "Modern Facilities",
    description: "Well-equipped studios with quality instruments and learning resources.",
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Our Music Academy</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex space-x-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-medium">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
