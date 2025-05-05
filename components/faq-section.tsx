"use client"

import { Fragment } from "react"
import { Disclosure, Transition } from "@headlessui/react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Do online classes really work for learning piano, guitar, and ukulele?",
    answer:
      "Yes! Not only can piano, guitar, and ukulele be taught online, but all major music exam boards worldwide have also embraced online music exams. Students anywhere in the world can now attend exams online and get certified.",
  },
  {
    question: "What is the style of music taught?",
    answer:
      "80% of the syllabus is focused on the Western method, including Bollywood, jazz, and popular styles of music.",
  },
  {
    question: "What will be the appropriate age to start the classes?",
    answer:
      "Children can start learning piano/keyboard and ukulele from the age of 5. For guitar, the recommended starting age is 9 years onwards.",
  },
  {
    question: "Who are the online classes designed for?",
    answer:
      "Music lessons are designed for all age groups—children, adults, and seniors.",
  },
  {
    question: "Which platform are the music classes conducted on, and what is the duration of each class?",
    answer:
      "Classes are conducted via Google Meet. Each session lasts between 40 to 45 minutes.",
  },
  {
    question: "Do you offer late night / early morning classes?",
    answer:
      "Yes, more than 60% of our students are from overseas. We offer late night and early morning sessions to accommodate different time zones. Please note that these sessions follow a different fee structure.",
  },
  {
    question: "How do i get started?",
    answer:
      "Call or text Hardik at +91 8000119609 to schedule your free introduction lesson and reserve your weekly lesson time.",
  }
];

export default function FaqSection() {
  return (
    <section className="bg-muted/50 dark:bg-muted/10 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Disclosure
                key={index}
                as="div"
                className="rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between px-6 py-4 text-left">
                      <span className="text-lg font-medium">{faq.question}</span>
                      <ChevronDown
                        className={`${
                          open ? "transform rotate-180" : ""
                        } h-5 w-5 text-primary transition-transform duration-200`}
                      />
                    </Disclosure.Button>
                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Disclosure.Panel className="px-6 pb-4 text-muted-foreground">{faq.answer}</Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
