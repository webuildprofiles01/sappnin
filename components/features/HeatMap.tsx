import Image from "next/image"
import { Container } from "@/components/shared/Container"

export function HeatMap() {
  return (
    <section className="bg-brand-orange pt-[10vw] px-2 sm:px-10">
      <Container>
        <div className="grid lg:grid-cols-2 items-top">
          {/* Text Content */}
          <div className="text-white text-center lg:text-left mt-0 sm:mt-20">
            <h2 className="text-[8.26vw] sm:text-[4.40vw] font-bold mb-0 leading-none">
              HEATED SENSE
              <br />
              <p className="block text-[28.83vw] sm:text-[14.37vw] md:text-[14.37vw] lg:text-[14.37vw] xl:text-[14.37vw] text-white leading-none tracking-tight m-0 p-0 ml-0 sm:-ml-[15px]">
                MAP:
              </p>
            </h2>
            <p className="text-[2vw] md:text-[2.2vw] font-semibold hidden sm:block">
              See areas where users are currently
              <br />active for spontaneous connections.
            </p>
          </div>

          {/* Phone Image */}
          <div className="relative w-full max-w-md lg:max-w-[38vw] mx-auto my-5  sm:my-0">
            <div className="relative">
              <Image
                src="/images/features/1.png"
                alt="Sappnin Heat Map"
                sizes="100vw"
                width={0}
                height={0}
                className="object-contain w-[47.98vw] sm:w-[30.98vw] h-auto mx-auto"
                priority
              />
            </div>
          </div>

          <div className="text-white text-center lg:text-left w-full">
            <p className="text-[4.77vw] sm:text-[4.77vw] font-regular block sm:hidden">
              See areas where users are currently
              <br />active for spontaneous connections.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
} 