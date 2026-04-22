"use client"

import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/shared/Container"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"

const navigation = [
  { name: "HOME", href: "/" },
  { name: "FEATURES", href: "/features" },
  { name: "FAQ", href: "#faq" },
]

const legalLinks = [
  { name: "PRIVACY", href: "/privacy" },
  { name: "TERMS", href: "/terms" },
  { name: "DATA DELETION", href: "/data-deletion" },
  { name: "CHILD SAFETY", href: "/child-safety" },
]

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: "ic:baseline-facebook"
  },
  {
    name: "YouTube",
    href: "#",
    icon: "mdi:youtube"
  },
  {
    name: "Twitter",
    href: "#",
    icon: "mdi:twitter"
  },
  {
    name: "Instagram",
    href: "#",
    icon: "mdi:instagram"
  }
]

export function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
  }

  return (
    <footer className="bg-black text-white">
      <Container>
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Logo and Email */}
            <div className="flex flex-col items-center lg:items-start gap-6">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/logos/sappnin-logo.png"
                  alt="Sappnin Logo"
                  width={150}
                  height={150}
                />
              </Link>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-brand-orange hover:opacity-80 transition-opacity"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon 
                      icon={item.icon} 
                      className="w-8 h-8 text-[#FF4525] hover:opacity-80 transition-opacity"
                      // fontSize={25}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Main Navigation */}
            <nav className="flex justify-center">
              <ul className="flex gap-8">
                {legalLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white hover:text-brand-orange transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Newsletter */}
            <div className="lg:justify-self-end">
              <div className="text-center lg:text-right mb-4">
                <h3 className="text-brand-orange text-lg">
                  Subscribe To Our Newsletter
                </h3>
              </div>
              <form className="flex gap-2 max-w-[300px] mx-auto lg:max-w-none lg:mx-0" onSubmit={handleSubmit}>
                <Input
                  type="email"
                  placeholder="Email address"
                  className="bg-white text-black"
                />
                <Button type="submit" className="bg-brand-orange hover:bg-brand-orange/90">
                  <Icon 
                    icon="material-symbols:send" 
                    className="w-5 h-5"
                  />
                </Button>
              </form>
            </div>

            {/* Legal Links - Mobile Only */}
            <div className="flex hidden justify-center col-span-1">
              <div className="flex gap-4 flex-wrap justify-center">
                {legalLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-white hover:text-brand-orange transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Copyright */}
      <div className="text-[1.5vw] bg-brand-orange py-3 text-center">
        <p>© Copyright 2025 Sappnin</p>
      </div>
    </footer>
  )
} 