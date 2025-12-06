"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/shared/Container"
import { Icon } from "@iconify/react"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "HOME", href: "/" },
  { name: "FEATURES", href: "/features" },
  { name: "CONTACT US", href: "/contact" },
  { name: "DOWNLOAD", href: "/download" },
]

export function Header() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"
  const isContact = pathname === "/contact"

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <header className={`absolute top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        // (isHome || isContact) && !isScrolled ? "bg-transparent" : "bg-white"
        (isHome || isContact) ? "bg-transparent" : "bg-white"
      }`}>
        <Container>
          <div className="flex items-center justify-around transition-all duration-300">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logos/sappnin-logo.png"
                alt="Sappnin"
                width={150}
                height={150}
                className="hidden sm:block w-[120px] sm:w-[160px]"
              />
              <Image
                src="/images/logos/logo-mobile.png"
                alt="Sappnin"
                width={200}
                height={200}
                className="block sm:hidden w-[120px]"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-1 justify-start ml-20">
              <ul className="flex items-start gap-16">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`text-[2.03vw] font-medium hover:text-brand-orange transition-colors ${
                        item.href === pathname 
                          ? "text-brand-orange border-b-2 border-brand-orange pb-1" 
                          : (isHome || isContact) ? "text-white" : "text-black"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2"
              aria-label="Open menu"
            >
              <Icon 
                icon="heroicons:bars-3" 
                className={`${(isHome || isContact) && !isScrolled ? "text-white" : "text-brand-orange"} w-10 h-10`}
              />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex justify-between items-center p-4 border-b">
                  <Image
                    src="/images/logos/sappnin-logo.png"
                    alt="Sappnin"
                    width={150}
                    height={150}
                  />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2"
                    aria-label="Close menu"
                  >
                    <Icon icon="heroicons:x-mark" className="w-6 h-6" />
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 overflow-y-auto">
                  <ul className="flex flex-col p-4">
                    {navigation.map((item) => (
                      <li key={item.name} className="border-b border-gray-100">
                        <Link
                          href={item.href}
                          className={`block py-4 text-lg font-medium ${
                            item.href === pathname 
                              ? "text-brand-orange" 
                              : "text-black"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-brand-orange text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-brand-orange/90 z-50 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <Icon icon="mdi:arrow-up" className="w-6 h-6" />
      </button>
    </>
  )
} 