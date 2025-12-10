import Image from "next/image"
import { Container } from "@/components/shared/Container"

export function LiveContactList() {
  return (
    <section className="bg-brand-orange py-12 overflow-visible">
      <div>
        <div className="relative min-h-[600px] overflow-visible">
          {/* Large W Logo Desktop */}
          <div className="absolute -left-[5vw] -bottom-[20%] hidden sm:block">
            <Image
              src="/images/logos/app-icon.png"
              alt="Sappnin W"
              width={0}
              height={0}
              sizes="100vw"
              className="opacity-100 w-[40.11vw] h-auto"
              priority
            />
          </div>

          {/* Mobile Title - Above Phone */}
          <div className="block lg:hidden text-white text-center mb-8 mt-12 sm:mt-0">
            <h2 className="text-[6.7vw] font-bold leading-none">
              LIVE
              <p className="block text-[13.125vw] sm:text-[13.125vw] text-white leading-none tracking-tight m-0 p-0">
                CONTACT
                <br />
                <span className="text-[28.83vw] sm:text-[28.83vw] p-0 m-0 mt-[-20px]">LIST:</span>
              </p>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-3 lg:gap-0 items-center relative z-10">
            {/* Phone Image */}
            <div className="relative w-full max-w-md lg:max-w-none mx-auto">
              <div className="relative z-10">
                <Image
                  src="/images/features/2.png"
                  alt="Live Contact List"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-contain w-[49.71vw] sm:w-[36.71vw] h-auto mx-auto"
                  priority
                />
              </div>
              
              {/* Large W Logo Mobile - Positioned next to phone */}
              <div className="absolute -bottom-[0%] -left-[10%] block sm:hidden">
                <Image
                  src="/images/logos/app-icon.png"
                  alt="Sappnin W"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="opacity-100 w-[45.11vw] h-auto"
                  priority
                />
              </div>
            </div>

            {/* Text Content - Desktop Only */}
            <div className="text-white text-center lg:text-left hidden lg:block">
              <h2 className="text-[4.22vw] md:text-[4.22vw] font-bold leading-none">
                LIVE
                <p className="block text-[8.25vw] sm:text-[8.25vw] md:text-[8.25vw] lg:text-[8.25vw xl:text-[8.25vw] text-white leading-none ">
                  CONTACT
                  {/* <br /> */}
                  <span className="block text-[14.74vw] leading-none p-0 m-0 sm:-ml-[10px] -mt-[20px]">
                    LIST:
                    </span>
                </p>
              </h2>
              <p className="text-[2.37vw] sm:text-[2.37vw] leading-[2.7rem] font-semibold mt-6">
                Easily access and interact with online
                <br />contacts in real time.
              </p>
            </div>
          </div>

          {/* Mobile Paragraph - Below Phone */}
          <div className="text-white text-center mt-8 block lg:hidden">
            <p className="text-[4.77vw] font-regular">
              Easily access and interact with
              <br />online contacts in real time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 