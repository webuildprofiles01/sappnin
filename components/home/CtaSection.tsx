import { Container } from "@/components/shared/Container"
import { DownloadButtons } from "@/components/shared/DownloadButtons"

export function CtaSection() {
  return (
    <section className="py-32 bg-white">
      <Container>
        <div className="text-center">
          <h2 className="text-[5.17vw] sm:text-[5.17vw] md:text-[3.71vw] lg:text-[3.71vw] xl:text-[3.71vw] font-normal mb-2 md:mb-4 leading-none">
            What are you waiting for?
          </h2>
          <h3 className="text-[7.90vw] sm:text-[7.90vw] md:text-[5.66vw] lg:text-[5.66vw] xl:text-[5.66vw] font-medium mb-0 md:mb-8 leading-none">
            Download the app
          </h3>
          <div className="overflow-hidden">
            <p className="text-[33.53vw] sm:text-[33.53vw] md:text-[24.04vw] lg:text-[24.04vw] xl:text-[24.04vw] font-extrabold text-brand-orange mb-0 md:mb-16 leading-none">
              Now!
            </p>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <DownloadButtons />
          </div>
        </div>
      </Container>
    </section>
  )
} 