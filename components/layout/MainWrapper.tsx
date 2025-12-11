"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function MainWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isContact = pathname === "/contact";

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1], // smooth cubic-bezier easing (professional feel)
        }}
        className={isHome || isContact ? "" : "pt-24"}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
