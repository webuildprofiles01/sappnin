import { ContactForm } from "@/components/contact/ContactForm"
import Image from "next/image"

export default function ContactPage() {
  return (
    <section className="h-[120vh] bg-black">
      <div className="relative h-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* Mobile Image */}
          <div className="relative block sm:hidden w-full aspect-square">
            <Image
              src="/images/contact/happy-couple-mobile.png"
              alt="Happy couple"
              fill
              className="object-cover object-[center_30%]"
              priority
            />
          </div>
          {/* Desktop Image */}
          <div className="relative hidden sm:block h-full">
            <Image
              src="/images/contact/happy-couple.png"
              alt="Happy couple"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Dark overlay for mobile */}
          <div className="absolute inset-0 bg-black/60 sm:hidden" />
        </div>

        {/* Form Container */}
        <div className="relative z-10 flex items-end sm:items-center sm:justify-end pt-24 max-w-[75rem]">
          <div className="w-full bg-transparent sm:bg-transparent lg:w-1/2 px-6 py-12 sm:px-4 lg:px-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
} 