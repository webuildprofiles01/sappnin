import Image from "next/image"
import { Container } from "@/components/shared/Container"

export function AppInfo() {
  return (
    <section className="bg-brand-orange py-12 sm:pt-20 overflow-visible">
      {/* Text Content - Inside Container */}
      <Container>
        <div className="text-center text-white mb-4 sm:mb-16">
          <h2 className="text-[11.89vw] sm:text-[11.89vw] md:text-[10.31vw] lg:text-[10.31vw] font-extrabold mb-2 sm:mb-2 text-white leading-none">
            SPONTANEITY
          </h2>
          <p className="text-[4.55vw] sm:text-[4.55vw] md:text-[3.95vw] lg:text-[3.95vw] font-medium leading-none">
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
              width={0}
              height={0}
              sizes="34.339vw"
              style={{ width: '34.339vw', height: 'auto' }}
              className="opacity-100"
            />
          </div>
          
          {/* Phone Mockup */}
          <div className="absolute right-0 -bottom-[45%] w-2/3">
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
        <div className="block sm:hidden relative h-[400px]">
          <div className="absolute -left-[20%] -bottom-[21%] w-[48.47vw] aspect-[1.94/3]">
            <Image
              src="/images/logos/app-icon.png"
              alt="Sappnin W"
              fill
              className="opacity-100"
            />
          </div>
          
          {/* Phone Mockup */}
          <div className="absolute right-[5%] -bottom-[25%] w-3/4">
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