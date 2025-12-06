import { ContactForm } from "@/components/contact/ContactForm";
import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="h-[110vh] bg-black">
      <div className="relative h-full flex flex-col lg:justify-center pt-48">
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
          {/* <div className="absolute inset-0 bg-black/0 sm:bg-black/60 sm:hidden" /> */}
        </div>

        {/* Form Container */}
        <div className="hidden sm:flex relative z-10 items-start sm:items-center sm:justify-end max-w-[1440px]">
          <div className="w-full bg-transparent sm:bg-transparent lg:w-1/2 px-6 py-0 sm:px-4 lg:px-12">
            <ContactForm />
          </div>
        </div>

        {/* Form Container Mobile */}
        <div>
          <div className="flex sm:hidden relative z-10 justify-center max-w-[75rem] px-2 mt-24">
              <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
