import { Container } from "@/components/shared/Container"
import { DownloadButtons } from "@/components/shared/DownloadButtons"

export function CtaSection() {
  return (
    <section className="py-32 bg-white">
      <Container>
        <div className="text-center">
          <h2 className="text-[1.8rem] sm:text-[2rem] md:text-[3rem] lg:text-[3.71vw] xl:text-[3.71vw] font-normal mb-4 leading-none">
            What are you waiting for?
          </h2>
          <h3 className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.66vw] xl:text-[5.66vw] font-medium mb-8 leading-none">
            Download the app
          </h3>
          <div className="overflow-hidden">
            <p className="text-[8rem] sm:text-[16rem] md:text-[20rem] lg:text-[22rem] xl:text-[24.04vw] font-extrabold text-brand-orange mb-16 leading-[0.8] tracking-tighter">
              Now!
            </p>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <DownloadButtons />
          </div>
        </div>
      </Container>
    </section>
  )
} 