import { Hero } from "@/components/home/Hero"
import { AppInfo } from "@/components/home/AppInfo"
import { ImageSlider } from "@/components/home/ImageSlider"
import { WhySection } from "@/components/home/WhySection"
import { FaqSection } from "@/components/home/FaqSection"
import { CtaSection } from "@/components/home/CtaSection"

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <AppInfo />
      <ImageSlider />
      <WhySection />
      <FaqSection />
      <CtaSection />
      {/* Other sections will go here */}
    </main>
  )
}
