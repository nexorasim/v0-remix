"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThingyanThemeProvider } from "@/contexts/thingyan-theme-context"
import ThingyanThemeToggle from "@/components/thingyan/thingyan-theme-toggle"
import { useThingyanTheme } from "@/contexts/thingyan-theme-context"
import { WaterDroplets, FloatingFlowers, WaterRipples } from "@/components/thingyan/water-effects"
import BuyEsimButton from "@/components/buy-esim-button"
import BackgroundMusic from "@/components/thingyan/background-music"
import ThingyanBanner from "@/components/thingyan/thingyan-banner"
import { TextSizeAdjuster } from "@/components/ui/text-size-adjuster"

function ThingyanEffects() {
  const { isThingyanTheme, thingyanIntensity } = useThingyanTheme()

  if (!isThingyanTheme) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Water droplets */}
      <WaterDroplets count={thingyanIntensity === "subtle" ? 10 : thingyanIntensity === "moderate" ? 20 : 30} />

      {/* Floating flowers - only in moderate and immersive modes */}
      {thingyanIntensity !== "subtle" && <FloatingFlowers count={thingyanIntensity === "moderate" ? 10 : 20} />}

      {/* Water ripples - only in immersive mode */}
      {thingyanIntensity === "immersive" && <WaterRipples />}
    </div>
  )
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const { isThingyanTheme } = useThingyanTheme()
  const audioUrl =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thingyanmoe-xwqr9uv6N1glDZyARJ4LYqdyx7iWaX.mp3"

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <LanguageProvider>
        <ThingyanThemeProvider>
          <div className="min-h-screen flex flex-col">
            {isThingyanTheme && <ThingyanBanner audioUrl={audioUrl} />}
            <Header />
            <ThingyanEffects />
            <div className="fixed top-20 right-6 z-40">
              <TextSizeAdjuster />
            </div>
            <main className="flex-grow">{children}</main>
            <Footer />
            <ThingyanThemeToggle />
            <BuyEsimButton variant="floating" />
            <BackgroundMusic audioUrl={audioUrl} />
          </div>
        </ThingyanThemeProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}
