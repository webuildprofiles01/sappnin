import Image from "next/image"
import Link from "next/link"

export function DownloadButtons() {
  return (
    <div className="flex flex-row gap-4">
      <Link 
        href="#" 
        className="w-[9.47vw] h-[62px] md:w-[9.47vw] md:h-[60px] relative transition-transform hover:scale-105"
      >
        <Image
          src="/images/logos/app-store.png"
          alt="Download on the App Store"
          fill
          className="object-contain"
          priority
        />
      </Link>
      <Link 
        href="#" 
        className="w-[9.47vw] h-[62px] md:w-[9.47vw] md:h-[60px] relative transition-transform hover:scale-105"
      >
        <Image
          src="/images/logos/google-play.png"
          alt="Get it on Google Play"
          fill
          className="object-contain"
          priority
        />
      </Link>
    </div>
  )
} 