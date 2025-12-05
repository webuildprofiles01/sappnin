import Image from "next/image"
import { Container } from "@/components/shared/Container"

interface ImageType {
  desktop: string
  mobile: string
}

interface Feature {
  id: number
  image: string | ImageType
  title: string
  alt: string
}

const features: Feature[] = [
  {
    id: 1,
    image: {
      desktop: "/images/features/7.png",
      mobile: "/images/features/romantic-date-mobile.png"
    },
    title: "Find the perfect social meet-up",
    alt: "Couple having romantic dinner with wine"
  },
  {
    id: 2,
    image: {
      desktop: "/images/features/8.png",
      mobile: "/images/features/social-group-mobile.png"
    },
    title: "Bring social groups together to enhance your night out",
    alt: "Group of friends taking selfie"
  },
  {
    id: 3,
    image: "/images/features/app-usage.png",
    title: "See who's online in your area for real time connections",
    alt: "Person using Sappnin app"
  }
]

export function WhySection() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <Container>
        {/* Heading */}
        <h2 className="text-center text-[8.05vw] md:text-[7.41vw] lg:text-[7.41vw] font-extrabold mb-16 sm:mb-20 px-2 leading-none">
          <span className="text-black">WHY </span>
          <span className="text-brand-orange">SAPPNIN </span>
          <span className="text-brand">IS</span>
          <br />
          <span className="text-black">YOUR GO-TO APP</span>
        </h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col justify-start">
              {/* Responsive Image Card */}
              <div className="relative aspect-[4/5] w-full max-w-[400px] mx-auto rounded-3xl overflow-hidden">
                {typeof feature.image === "object" ? 
                (
                  <>
                    <div className="block sm:hidden relative w-full h-full">
                      <Image
                        src={feature.image.desktop}
                        alt={feature.alt}
                        fill
                        className="object-contain block"
                        priority
                        sizes="(min-width: 640px) 45vw, 100vw"
                      />
                    </div>
                    <div className="hidden sm:block relative w-full h-full">
                      <Image
                        src={feature.image.mobile}
                        alt={feature.alt}
                        fill
                        className="object-cover block"
                        priority
                        sizes="(min-width: 640px) 45vw, 100vw"
                      />
                    </div>
                  </>
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      fill
                      className="object-cover block"
                      priority
                      sizes="(min-width: 640px) 45vw, 100vw"
                    />
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-[4.36vw] md:text-[2.08vw] lg:text-[2.08vw] xl:text-[2.08vw] font-semibold text-center px-2 mt-0">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
