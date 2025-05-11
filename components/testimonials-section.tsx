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
    name: "Ravi Kishan",
    content: "Learning keyboard from Hardik Sir over the past one year has been an incredible journey. His teaching style is clear, patient, and perfectly paced for both beginners and those with some experience. He doesn't just teach notes, chords and song, he builds a strong foundation in music, finger technique, and expression. What makes him stand out is his genuine passion for music and dedication to each student’s growth. He tailors lessons according to individual pace and makes even complex concepts related to keyboard easy to understand. Thanks to him, I can now play confidently and even experiment with composing a little! If you're looking for a tutor who is skilled, motivating, and truly cares about your progress, I wholeheartedly recommend Hardik Sir.",
    avatar: "/Ravi-Kishan.jpeg",
  },
  {
    name: "Agrim Bansal",
    content: 'Hardik sir, you have been an essential part of my music learning process... While encouraging is the least I can say you have been more like a guiding light all through my journey... I remember the first time I met you, it felt like an immediate connection between us and I knew I was in for a great memory... You never left a stone unturned to get me perfect the skill... Even through covid your immense support and mentorship has been a crucial reason I am still proud of this skill... It was because of you that I scored so well and had even received a distinction in the trinity exams of music... I have won some competitions like Rajatotsav and also was known for my musical skills in my school often leading programs and arrangements and I give all the credit to you... Sir you are an angel in disguise spreading your love through music.',
    avatar: "/Agrim-Bansal.jpeg",
  },
  {
    name: "Vishvajeet raj",
    content: 'Hardik sir was the person who first sparked my interest in music, and learning from him genuinely shaped my journey. His teaching style strikes the perfect balance — he’s approachable and fun, yet firm when it comes to commitment and discipline. What I appreciated most was how clearly he laid out the fundamentals. His focus on building a strong foundation helped me grow with confidence and clarity in my playing.',
    avatar: "/Vishvajeet-raj.jpeg",
  },
  {
    name: "Manan bansal",
    content:
      "Hardik sir, changed my life. I was 16 and eager to learn music but finding a good teacher was a huge huge task that’s when I found him. The way he talked to me and understood my learning style and the way he adapted to it and encouraged me in the right way to do better made it so that I learnt the piano and guitar almost instantly. Looking at my eagerness and talent he also taught me to follow my dreams of singing and helped me become an artist myself. I couldn’t imagine being here without him.",
    avatar: "/Manan-bansal.jpeg",
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
