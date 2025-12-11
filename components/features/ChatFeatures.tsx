import Image from "next/image"
import { Container } from "@/components/shared/Container"

export function ChatFeatures() {
  return (
    <section className="bg-brand-orange pt-12 lg:pt-20 w-screen overflow-visible mt-[0px] sm:mt-[-10vw] gap-0">
      <div >
        {/* Real-time Chat */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-0 items-center mb-5 sm:mb-20 px-2 sm:px-20">
          {/* Text Content */}
          <div className="hidden sm:block text-white w-full text-center lg:text-left">
            <h2 className="text-[4.98vw] md:text-[4.98vw] font-bold leading-none">
              REAL-TIME
              <br />
              <p className="block text-[28.83vw] sm:text-[11.71vw] md:text-[11.71vw] lg:text-[11.71vw] xl:text-[11.71vw] text-white leading-none">
                CHAT:
              </p>
            </h2>
            <p className="text-[2.37vw] md:text-[2.37vw] leading-[3.37vw] font-semibold hidden sm:block mt-6">
              Engage in live conversations with
              <br />others who are online looking for
              <br />similar connections.
            </p>
          </div>

          {/* Mobile Title - Above Phone */}
          <div className="block sm:hidden text-white text-center mb-0">
            <h2 className="text-[6.7vw] font-bold leading-none">
              REAL-TIME
              <p className="block text-[28.83vw] sm:text-[13.125vw] text-white leading-none tracking-tight m-0 p-0">
                <span className="text-[28.83
                vw] sm:text-[28.83vw] p-0 m-0 mt-[-20px]">CHAT:</span>
              </p>
            </h2>
          </div>

          {/* Phone Image */}
          <div className="flex justify-center w-full">
            <div className="relative w-full max-w-md lg:max-w-none mx-auto">
              <div className="relative">
                <Image
                  src="/images/features/real-time-chat.png"
                  alt="Real-time Chat"
                  sizes="100vw"
                  className="object-contain object-center w-[49.71vw] sm:w-[26.71vw] h-auto mx-auto"
                  priority
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>

          <div className="text-white text-center lg:text-left">
            <p className="text-[4.77vw] sm:text-[4.77vw] font-regular block sm:hidden">
              Engage in live conversations with
              <br />others who are online looking for
              <br />similar connections.
            </p>
          </div>
        </div>
      </div>

      <div className="px-5">
        {/* Disappearing Chat */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-4 items-center mt-20 sm:mt-[-10vw]">
          {/* Mobile Title */}
          <div className="text-white text-center lg:text-left block sm:hidden order-1">            
            <h2 className="text-[8.26vw] sm:text-[4.58vw] font-bold leading-none mb-0">
              DISAPPEARING
              <br />
              <span className="block text-[28.83vw] sm:text-[11.71vw] md:text-[11.71vw] lg:text-[11.71vw] xl:text-[11.71vw] text-white leading-none">
                CHAT:
              </span>
            </h2>
          </div>

          {/* Phone Image - Left Side */}
          <div className="flex justify-center w-full order-2 lg:order-1">
            <div className="relative w-full max-w-md lg:max-w-none mx-auto">
              <div className="relative">
                <Image
                  src="/images/features/disappearing-chat.png"
                  alt="Disappearing Chat"
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="object-contain object-center w-[69.71vw] sm:w-[39.71vw] h-auto mx-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="text-white text-center lg:text-left order-3 lg:order-2 mb-20 sm:mb-0">
            <h2 className="text-[4.58vw] md:text-[4.58vw] font-bold hidden sm:block leading-none">
              DISAPPEARING
              <br />
              <span className="block text-[28.83vw] sm:text-[11.71vw] md:text-[11.71vw] lg:text-[11.71vw] xl:text-[11.71vw] text-white leading-none">
                CHAT:
              </span>
            </h2>
            <p className="text-[4.77vw] md:text-[2.37vw] font-normal sm:font-semibold sm:block mt-6">
              Conversations vanish when you go 
              <br />
              offline, ensuring timely and private
              <br />
               interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 