"use client"

import { useCallback, useState, useEffect } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { Container } from "@/components/shared/Container"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Slide {
  id: number;
  image: {
    desktop: string;
    mobile: string;
  };
  alt: string;
  width: number;
  height: number;
}

const slides: Slide[] = [
  {
    id: 1,
    image: {
      desktop: "/images/slides/slide-1.png",
      mobile: "/images/slides/slide-1-mobile.png"
    },
    alt: "Happy couple with flowers",
    width: 800,
    height: 1000
  },
  {
    id: 2,
    image: {
      desktop: "/images/slides/slide-2.png",
      mobile: "/images/slides/slide-2-mobile.png"
    },
    alt: "Group of friends smiling",
    width: 800,
    height: 1000
  },
  {
    id: 3,
    image: {
      desktop: "/images/slides/slide-3.png",
      mobile: "/images/slides/slide-3-mobile.png"
    },
    alt: "Person using phone",
    width: 800,
    height: 1000
  },
  {
    id: 4,
    image: {
      desktop: "/images/slides/slide-4.png",
      mobile: "/images/slides/slide-4-mobile.png"
    },
    alt: "Friends hanging out",
    width: 800,
    height: 1000
  }
]

export function ImageSlider() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
    containScroll: "trimSnaps",
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    
    onSelect()
    emblaApi.on('select', onSelect)
    
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="py-12 sm:pt-60 sm:pb-30 bg-white">
      <Container>
        {/* Heading */}
        <div className="text-center mb-8 mt-8 sm:mb-16 sm:mt-0">
          <h2 className="text-[7.58vw] sm:text-[7.58vw] md:text-[7.8vw] lg:text-[7.8vw] font-extrabold leading-none">
            REAL PEOPLE
          </h2>
          <h2 className="text-[8.5vw] sm:text-[8.5vw] md:text-[7.54vw] lg:text-[7.54vw] font-extrabold leading-none">
            REAL CONNECTIONS
          </h2>
        </div>

                  {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-4 gap-6 max-w-[1400px] mx-auto">
            {slides.map((slide) => (
              <div key={slide.id} className="relative aspect-[4/5] w-[58.86vw] md:w-[23.90vw] rounded-3xl overflow-hidden">
                <Image
                  src={slide.image.desktop}
                  alt={slide.alt}
                  fill
                  className="object-contain object-center"
                  sizes="(min-width: 1024px) 25vw, 100vw"
                />
              </div>
            ))}
          </div>

          {/* Tablet/Mobile Carousel */}
          <div className="lg:hidden relative max-w-[1200px] mx-auto mb-6 sm:mb-0">
            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-10 h-10 sm:w-12 sm:h-12"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-10 h-10 sm:w-12 sm:h-12"
              onClick={scrollNext}
            >
              <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
            </Button>

            {/* Carousel Viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {slides.map((slide) => (
                  <div key={slide.id} className="flex-[0_0_100%] sm:flex-[0_0_45%] px-8 sm:px-4">
                    <div className="relative aspect-[4/5] w-[68.86vw] mx-auto rounded-3xl overflow-hidden">
                      <Image
                        src={slide.image.desktop}
                        alt={slide.alt}
                        fill
                        className="object-cover object-center hidden sm:block"
                        sizes="(min-width: 640px) 45vw, 100vw"
                      />
                      <Image
                        src={slide.image.mobile}
                        alt={slide.alt}
                        fill
                        className="object-cover object-center block sm:hidden"
                        sizes="100vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Dots/Pills */}
          <div className="flex justify-center gap-3 mt-6 sm:hidden sm:mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-8 h-2 rounded-full border border-gray-300 transition-colors
                  ${index === selectedIndex ? 'bg-brand-orange border-brand-orange' : 'bg-transparent'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
      </Container>
    </section>
  )
} 