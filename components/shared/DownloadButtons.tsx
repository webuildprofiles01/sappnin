import Image from "next/image"
import Link from "next/link"

export function DownloadButtons() {
  return (
    <div className="flex flex-row items-center justify-center gap-[4vw] sm:gap-[30px] w-[70vw] sm:w-[40vw] h-auto">
      <Link 
        href="#" 
        className="relative transition-transform hover:scale-105"
      >
        <Image
          src="/images/logos/app-store.png"
          alt="Download on the App Store"
          sizes="100vw"
          width={0}
          height={0}
          priority
          className="object-contain w-[125.26px] h-[62px] sm:w-[183.4px] sm:h-[60px]"
        />
      </Link>
      <Link 
        href="#" 
        className="relative transition-transform hover:scale-105"
      >
        <Image
          src="/images/logos/google-play.png"
          alt="Get it on Google Play"
          sizes="100vw"
          width={0}
          height={0}
          className="object-contain w-[125.26px] h-[62px] sm:w-[183.4px] sm:h-[60px]"
        />
      </Link>
    </div>
  )
} 