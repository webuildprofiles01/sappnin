import Image from "next/image"
import { Container } from "@/components/shared/Container"
import { DownloadButtons } from "@/components/shared/DownloadButtons"

export function Hero() {
  return (
    <section className="relative min-h-full sm:min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <Image
          src="/images/hero/couple.png"
          alt="Happy couple"
          fill
          className="hidden sm:block object-cover object-[center_15%]"
          priority
          sizes="100vw"
        />
        {/* Mobile Image */}
        <Image
          src="/images/hero/couple-mobile.png"
          alt="Happy couple"
          fill
          className="block sm:hidden object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <Container className="relative z-10 h-[115vh] flex flex-col justify-end pb-12">
        <div className="flex flex-col items-center justify-end w-full">
          {/* Main Title */}
          <h1 className="font-extrabold leading-none text-[19.31vw] sm:text-[16.49vw] md:text-[16.49vw] lg:text-[16.49vw] xl:text-[16.49vw] pt-0 text-brand-orange text-center">
            SAPPNIN
          </h1>

          {/* Subtitle */}
          <p className="text-[3.14vw] sm:text-[3.14vw] md:text-[2.18vw] lg:text-[2.18vw] font-medium sm:mb-5 text-white tracking-wide max-w-[95%] text-center">
            CREATING SPONTANEOUS MEETUPS WITH INDIVIDUALS AND SOCIAL GROUPS
          </p>

          {/* Download Buttons */}
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-6">
            <DownloadButtons />
          </div>
        </div>
      </Container>
    </section>
  )
} 