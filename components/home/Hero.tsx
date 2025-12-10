import Image from "next/image"
import { DownloadButtons } from "@/components/shared/DownloadButtons"

export function Hero() {
  return (
    <section className="relative min-h-full sm:min-h-[calc(100vh-4rem)]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <Image
          src="/images/hero/couple.webp"
          alt="Happy couple"
          fill
          className="hidden sm:block object-cover object-[center_15%]"
          priority
          sizes="100vw"
        />
        {/* Mobile Image */}
        <Image
          src="/images/hero/couple-mobile.webp"
          alt="Happy couple"
          fill
          className="block sm:hidden object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 h-[100vh] sm:h-[115vh] flex flex-col justify-end pb-[8vh] w-full">
        <div className="flex flex-col items-center justify-end w-full">
          {/* Main Title */}
          <h1 className="font-extrabold leading-none text-[19.31vw] sm:text-[16.49vw] pt-0 text-brand-orange text-center">
            SAPPNIN
          </h1>

          {/* Subtitle */}
          <p className="text-[3.14vw] sm:text-[2.14vw] font-medium sm:mb-5 text-white tracking-wide max-w-full text-center">
            CREATING SPONTANEOUS MEETUPS WITH INDIVIDUALS AND SOCIAL GROUPS
          </p>

          {/* Download Buttons */}
            <DownloadButtons />
          {/* <div className="flex justify-around border-2 border-white/70 rounded-full gap-0">
          </div> */}
        </div>
      </div>
    </section>
  )
} 