import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Sans_Myanmar } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const notoSansMyanmar = Noto_Sans_Myanmar({
  subsets: ["myanmar"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-myanmar",
  display: "swap",
})

export const metadata: Metadata = {
  title: "eSIM Myanmar | Digital SIM Technology",
  description:
    "Experience the convenience of digital SIM technology in Myanmar with instant activation and seamless connectivity.",
  keywords: "eSIM, digital SIM, Myanmar, mobile connectivity, SIM card, telecommunications",
  authors: [{ name: "eSIM Myanmar" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#00FFFF",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}
