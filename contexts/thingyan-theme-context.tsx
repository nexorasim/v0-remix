"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { isThingyanFestivalTime } from "@/utils/date-utils"

type ThingyanThemeContextType = {
  isThingyanTheme: boolean
  thingyanIntensity: "subtle" | "moderate" | "immersive"
  setThingyanIntensity: (intensity: "subtle" | "moderate" | "immersive") => void
}

const ThingyanThemeContext = createContext<ThingyanThemeContextType>({
  isThingyanTheme: false,
  thingyanIntensity: "moderate",
  setThingyanIntensity: () => {},
})

export const useThingyanTheme = () => useContext(ThingyanThemeContext)

export function ThingyanThemeProvider({ children }: { children: React.ReactNode }) {
  const [isThingyanTheme, setIsThingyanTheme] = useState(false)
  const [thingyanIntensity, setThingyanIntensity] = useState<"subtle" | "moderate" | "immersive">("moderate")

  useEffect(() => {
    // Check if it's Thingyan festival time
    const isThingyan = isThingyanFestivalTime()
    setIsThingyanTheme(isThingyan)

    // Get user preference for animation intensity from localStorage if available
    const savedIntensity = localStorage.getItem("thingyanIntensity")
    if (savedIntensity && ["subtle", "moderate", "immersive"].includes(savedIntensity)) {
      setThingyanIntensity(savedIntensity as "subtle" | "moderate" | "immersive")
    }

    // Set up a daily check to disable the theme on May 1st
    const checkDate = () => {
      const isStillThingyan = isThingyanFestivalTime()
      setIsThingyanTheme(isStillThingyan)
    }

    // Check once a day
    const interval = setInterval(checkDate, 24 * 60 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const handleSetIntensity = (intensity: "subtle" | "moderate" | "immersive") => {
    setThingyanIntensity(intensity)
    localStorage.setItem("thingyanIntensity", intensity)
  }

  return (
    <ThingyanThemeContext.Provider
      value={{
        isThingyanTheme,
        thingyanIntensity,
        setThingyanIntensity: handleSetIntensity,
      }}
    >
      {children}
    </ThingyanThemeContext.Provider>
  )
}
