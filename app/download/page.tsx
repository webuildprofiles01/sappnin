import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DownloadButtons } from "@/components/shared/DownloadButtons"

export default function DownloadPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="bg-brand-orange min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-[7rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center max-w-3xl mx-auto">
            {/* Left Side - Content */}
            <div className="flex flex-col items-center justify-center text-white order-2 lg:order-1">
              {/* Logo */}
              <div className="relative w-[19.99vw] h-[19.99vw] sm:w-[12vw] sm:h-[12vw] mb-2 mt-2 sm:mt-0 sm:mb-2">
                <Image
                  src="/images/logos/app-icon.png"
                  alt="Sappnin Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>


              {/* App Name */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 text-center tracking-tight leading-none">
                Sappnin
              </h1>

              {/* Download Button */}
              <Button
                variant="outline"
                className="bg-white text-brand-orange hover:bg-white/90 mb-4 sm:mb-8 px-7 py-[1.2rem] text-[2.68vw] sm:text-[1vw] rounded-full font-bold"
              >
                DOWNLOAD NOW
              </Button>

              {/* Available On Text */}
              <p className="text-[3.03vw] sm:text-[1vw] mb-0 sm:mb-4 text-center">AVAILABLE ON</p>

              {/* Store Buttons */}
                <DownloadButtons />
              <div className="flex items-center gap-0 lg:gap-0">
              </div>
            </div>

            {/* Right Side - Phone Mockup */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative w-full mx-auto max-w-[43.18vw] sm:max-w-[29.44vw] h-auto">
                <div className="relative h-[80.45vw] sm:h-[41vw]">
                  <Image
                    src="/images/download/profile-card.webp"
                    alt="Sappnin App"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 