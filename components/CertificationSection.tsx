import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function CertificationSection() {
  return (
    <section className="py-16 bg-muted/50 dark:bg-muted/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8 sm:text-4xl">INTERNATIONAL CERTIFICATION</h2>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground">
            Our curriculum aligns closely with the learning objectives established by prominent international music exam
            boards such as Trinity College London and ABRSM. We offer comprehensive coaching for students interested in
            pursuing both practical and theoretical music examinations, ensuring a well-rounded and structured approach
            to their musical education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardContent className="p-8 flex flex-col items-center justify-center relative z-10">
              <div className="relative h-24 w-64 mb-6">
                <Image
                  src="/TRINITY logo.png"
                  alt="Trinity College London Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">TRINITY COLLEGE LONDON</h3>
              <p className="text-muted-foreground text-center">
                Internationally recognized qualifications in music performance and theory, fostering creativity and
                musical development.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardContent className="p-8 flex flex-col items-center justify-center relative z-10">
              <div className="relative h-24 w-64 mb-6">
                <Image src="/ABRSM logo.png" alt="ABRSM Logo" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-2">ABRSM</h3>
              <p className="text-muted-foreground text-center">
                The Associated Board of the Royal Schools of Music provides graded examinations and assessments to
                inspire musical achievement.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium">
            Prepare for internationally recognized music examinations with our expert guidance
          </p>
        </div>
      </div>
    </section>
  )
}
