"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Container } from "@/components/shared/Container"

const faqs = [
  {
    id: "item-1",
    question: "What makes Sappnin different from other social networking apps?",
    answer: "Sappnin is built for spontaneity. Unlike other apps that focus on planning or endless feeds, it instantly shows who’s free nearby. With quick invites and real-time meetups, Sappnin turns spare moments into fun, genuine social experiences."
  },
  {
    id: "item-2",
    question: "What kind of meetups can I create with Sapenin?",
    answer: "With Sappnin, you can spark any spontaneous meetup—coffee, workouts, study sessions, sports, dinners, or casual hangouts. The app adapts to whatever vibe you want.."
  },
  {
    id: "item-3",
    question: "How does the matching system work?",
    answer: "Our matching system focuses on real-time availability and mutual interests. When both users are online and show interest in each other, they can instantly connect and start planning meetups, making the experience more spontaneous and authentic."
  },
  {
    id: "item-4",
    question: "Is Sappnin safe to use?",
    answer: "Yes! We prioritize user safety with verified profiles, secure messaging, and location sharing controls. Users can also report inappropriate behavior, and our moderation team is available 24/7."
  },
  {
    id: "item-5",
    question: "How do I get started?",
    answer: "Simply download the app from the App Store or Google Play, create your profile, and start exploring! You can immediately see who's online in your area and begin connecting with people who share your interests."
  }
]

export function FaqSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <h2 className="text-center text-[16.94vw] sm:text-[10.64vw] font-bold text-brand-orange mb-8 sm:mb-16">
          FAQs
        </h2>

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-4 border-brand-orange rounded-2xl mb-4 overflow-hidden"
              >
                <AccordionTrigger 
                  className="text-xl font-semibold hover:no-underline py-6 px-6 data-[state=open]:bg-brand-orange data-[state=open]:text-white w-full"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg pb-6 px-6 pt-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  )
} 