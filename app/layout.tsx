import "@/styles/globals.css"
import { Open_Sans } from "next/font/google"
import type { Metadata } from "next"
import { ClientLayout } from "@/components/layout/ClientLayout"

const openSans = Open_Sans({ 
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sappnin",
  description: "Creating spontaneous meetups with individuals and social groups",
  icons: {
    icon: [
      { url: "/images/logos/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logos/icon.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/images/logos/icon.png",
    apple: [
      { url: "/images/logos/icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { rel: "mask-icon", url: "/images/logos/icon.png" }
    ]
  },
  manifest: "/manifest.json"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans?.className ?? ""}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
