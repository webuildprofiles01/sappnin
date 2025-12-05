import Image from "next/image"
import { Container } from "@/components/shared/Container"

export function ChatFeatures() {
  return (
    <section className="bg-brand-orange pt-12 lg:pt-20 w-screen overflow-visible mt-[-120px] gap-0">
      <Container >
        {/* Real-time Chat */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-0 items-center mb-20 lg:mb-32 px-20">
          {/* Text Content */}
          <div className="text-white w-full text-center lg:text-left">
            <h2 className="text-5xl md:text-[4.98vw] font-bold">
              REAL-TIME
              <br />
              <p className="block text-[11.71vw] sm:text-[11.71vw] md:text-[11.71vw] lg:text-[11.71vw] xl:text-[11.71vw] text-white leading-none">
                CHAT:
              </p>
            </h2>
            <p className="text-[2.37vw] md:text-[2.37vw] leading-[2.7rem] font-semibold hidden sm:block mt-6">
              Engage in live conversations with
              <br />others who are online looking for
              <br />similar connections.
            </p>
          </div>

          {/* Phone Image */}
          <div className="flex justify-center w-full">
            <div className="relative w-full max-w-md lg:max-w-none mx-auto">
              <div className="relative h-[600px] lg:h-[800px]">
                <Image
                  src="/images/features/real-time-chat.png"
                  alt="Real-time Chat"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="text-white text-center lg:text-left">
            <p className="text-2xl md:text-3xl font-regular block sm:hidden">
              Engage in live conversations with
              <br />others who are online looking for
              <br />similar connections.
            </p>
          </div>
        </div>
      </Container>

      <Container >
        {/* Disappearing Chat */}
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-center mt-[-180px]">
          {/* Mobile Title */}
          <div className="text-white text-center lg:text-left block sm:hidden order-1">            
            <h2 className="text-[4.58vw] md:text-[4.58vw] font-bold">
              DISAPPEARING
              <br />
              <span className="block text-[11.71vw] sm:text-[11.71vw] md:text-[11.71vw] lg:text-[11.71vw] xl:text-[11.71vw] text-white leading-none">
                CHAT:
              </span>
            </h2>
          </div>

          {/* Phone Image - Left Side */}
          <div className="flex justify-center w-full order-2 lg:order-1">
            <div className="relative w-full max-w-md lg:max-w-none mx-auto">
              <div className="relative h-[700px] lg:h-[800px]">
                <Image
                  src="/images/features/disappearing-chat.png"
                  alt="Disappearing Chat"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="text-white text-center lg:text-left order-3 lg:order-2">
            <h2 className="text-[4.58vw] md:text-[4.58vw] font-bold hidden sm:block leading-none">
              DISAPPEARING
              <br />
              <span className="block text-[11.71vw] sm:text-[11.71vw] md:text-[11.71vw] lg:text-[11.71vw] xl:text-[11.71vw] text-white leading-none">
                CHAT:
              </span>
            </h2>
            <p className="text-[2.37vw] md:text-[2.37vw] leading-[2.7rem] font-semibold hidden sm:block mt-6">
              Conversations vanish when you go offline, ensuring timely and private interactions.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
} 