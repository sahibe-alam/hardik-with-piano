"use client"

import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

// Dynamically import Slider with no SSR
const Slider = dynamic(() => import("react-slick"), { ssr: false })

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Piano Student",
    content:
      "The lessons have been transformative for my piano skills. The teacher's patience and expertise made learning enjoyable and effective.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Michael Chen",
    role: "Guitar Student",
    content:
      "I've tried many guitar teachers before, but none compare to the quality of instruction I receive here. Highly recommended!",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Emma Williams",
    role: "Parent of Student",
    content:
      "My daughter has flourished under the guidance of her music teacher. The personalized approach has made all the difference.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "David Thompson",
    role: "Adult Student",
    content:
      "It's never too late to learn! At 45, I started piano lessons and have made incredible progress thanks to the structured curriculum.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialsSection() {
  const sliderRef = useRef<any>(null)

  const settings: any = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Students Say</h2>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => sliderRef.current?.slickPrev()}
            aria-label="Previous testimonial"
            className="rounded-full backdrop-blur-sm bg-background/50"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => sliderRef.current?.slickNext()}
            aria-label="Next testimonial"
            className="rounded-full backdrop-blur-sm bg-background/50"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="testimonials-slider">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2">
              <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <Quote className="mb-4 h-8 w-8 text-primary opacity-70" />
                  <p className="mb-4 text-muted-foreground">{testimonial.content}</p>
                </CardContent>
                <CardFooter className="flex items-center space-x-4 border-t p-6">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
