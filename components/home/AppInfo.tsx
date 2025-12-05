import Image from "next/image"
import { Container } from "@/components/shared/Container"

export function AppInfo() {
  return (
    <section className="bg-brand-orange py-12 sm:pt-20 overflow-visible">
      {/* Text Content - Inside Container */}
      <Container>
        <div className="text-center text-white mb-4 sm:mb-16">
          <h2 className="text-[10.31vw] sm:text-7xl md:text-8xl lg:text-[10.31vw] font-extrabold mb-2 sm:mb-2 text-white leading-tight">
            SPONTANEITY
          </h2>
          <p className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.95vw] font-medium leading-none">
            IS THE BEST TYPE OF ADVENTURE
          </p>
        </div>

        {/* Mobile Layout - Only Phone */}
        {/* <div className="block sm:hidden relative h-[300px]">
          <Image
            src="/images/features/phone-mockup.png"
            alt="Sappnin App"
            fill
            className="object-contain object-center"
            priority
          />
        </div> */}

        {/* Desktop Layout */}
        <div className="hidden sm:block relative h-[300px] sm:min-h-[600px]">
          {/* W Logo - Desktop Only */}
          <div className="hidden sm:block absolute -left-[10%] -bottom-[21%]">
            <Image
              src="/images/logos/app-icon.png"
              alt="Sappnin W"
              width={500}
              height={750}
              style={{ width: '34.339vw', height: 'auto' }}
              className="opacity-100"
            />
          </div>
          
          {/* Phone Mockup */}
          <div className="absolute right-0 -bottom-[30%] w-2/3">
            <div className="relative right[30%]">
              <Image
                src="/images/features/phone-mockup.png"
                alt="Sappnin App"
                className="object-contain object-right-bottom"
                style={{ width: '35.66vw', height: 'auto' }}
                width={300}
                height={100}
                // priority
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout - Only Phone */}
        <div className="block sm:hidden relative h-[500px]">
          <div className="absolute -left-[20%] -bottom-[21%]">
            <Image
              src="/images/logos/app-icon.png"
              alt="Sappnin W"
              width={250}
              height={250}
              className="opacity-100"
            />
          </div>
          
          {/* Phone Mockup */}
          <div className="absolute right-0 -bottom-[20%] w-3/4">
            <div className="relative h-[500px]">
              <Image
                src="/images/features/phone-mockup.png"
                alt="Sappnin App"
                fill
                className="object-contain object-right-bottom"
                priority
              />
            </div>
          </div>



        </div>


        
      </Container>
    </section>
  )
} 