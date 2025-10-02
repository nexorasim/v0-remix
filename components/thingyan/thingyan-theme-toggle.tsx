"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useThingyanTheme } from "@/contexts/thingyan-theme-context"
import { Droplets, Settings, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ThingyanThemeToggle() {
  const { isThingyanTheme, thingyanIntensity, setThingyanIntensity } = useThingyanTheme()
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()

  if (!isThingyanTheme) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-[#1E2F3C] border border-[#00FFFF]/30 rounded-lg p-4 mb-4 shadow-lg"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-white font-medium flex items-center">
                <Droplets className="w-4 h-4 mr-2 text-[#00FFFF]" />
                {language === "en" ? "Thingyan Effects" : "သင်္ကြန် အထူးပြုလုပ်ချက်များ"}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close settings"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-white/70 mb-2">{language === "en" ? "Animation Intensity" : "အသက်ဝင်မှု အဆင့်"}</p>

              <div className="flex gap-2">
                {(["subtle", "moderate", "immersive"] as const).map((intensity) => (
                  <button
                    key={intensity}
                    onClick={() => setThingyanIntensity(intensity)}
                    className={`px-3 py-1.5 rounded text-sm flex-1 transition-colors ${
                      thingyanIntensity === intensity
                        ? "bg-[#00FFFF]/20 text-[#00FFFF] border border-[#00FFFF]/50"
                        : "bg-[#1E2F3C] text-white/70 border border-[#00FFFF]/10 hover:border-[#00FFFF]/30"
                    }`}
                  >
                    {language === "en"
                      ? intensity.charAt(0).toUpperCase() + intensity.slice(1)
                      : intensity === "subtle"
                        ? "အနည်းငယ်"
                        : intensity === "moderate"
                          ? "အလယ်အလတ်"
                          : "အပြည့်အဝ"}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#1E2F3C] border border-[#00FFFF]/30 hover:border-[#00FFFF]/70 rounded-full p-3 shadow-lg flex items-center justify-center text-[#00FFFF] transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Thingyan theme settings"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Settings className="w-5 h-5" />}
      </motion.button>
    </div>
  )
}
