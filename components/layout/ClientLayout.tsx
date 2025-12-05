"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { MainWrapper } from "@/components/layout/MainWrapper"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  )
} 