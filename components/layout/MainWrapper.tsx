"use client"

import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export function MainWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const isContact = pathname === "/contact"

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={isHome || isContact ? "" : "pt-24"}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
} 