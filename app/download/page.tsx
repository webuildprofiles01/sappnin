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
            <div className="flex flex-col items-center justify-center text-white">
              {/* Logo */}
              <div className="relative w-[12vw] h-[12vw] mb-6 sm:mb-2">
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
                className="bg-white text-brand-orange hover:bg-white/90 mb-8 px-7 py-[1.2rem] text-[1vw] lg:text-[1vw] rounded-full font-bold"
              >
                DOWNLOAD NOW
              </Button>

              {/* Available On Text */}
              <p className="text-[1vw] lg:text-[1vw] mb-4 lg:mb-0 text-center">AVAILABLE ON</p>

              {/* Store Buttons */}
              <div className="flex items-center gap-4 lg:gap-6">
                <DownloadButtons />
              </div>
            </div>

            {/* Right Side - Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative w-full mx-auto lg:max-w-[29.44vw] h-auto">
                <div className="relative h-[41vw]">
                  <Image
                    src="/images/download/profile-card.png"
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