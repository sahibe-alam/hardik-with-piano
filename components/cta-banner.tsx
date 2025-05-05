import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CtaBanner() {
  return (
    <section className="bg-primary py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-center bg-no-repeat bg-cover"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-between space-y-4 text-center sm:flex-row sm:text-left md:space-y-0">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
              Ready to Start Your Musical Journey?
            </h2>
            <p className="text-primary-foreground/80">Book your first lesson today and discover the joy of music.</p>
          </div>
          <Button size="lg" variant="secondary" className="relative overflow-hidden group" asChild>
      <Link
        href={`https://wa.me/919876543210`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-secondary/50 to-secondary transition-all duration-300 group-hover:opacity-0"></span>
        <span className="relative">Book a Free Trial Lesson</span>
      </Link>
    </Button>
        </div>
      </div>
    </section>
  )
}
