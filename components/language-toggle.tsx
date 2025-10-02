"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "mm" : "en")
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="relative overflow-hidden border-[#00FFFF]/30 text-[#00FFFF] hover:text-[#00FFFF] hover:bg-[#00FFFF]/10 hover:border-[#00FFFF] transition-all duration-300 rounded-full px-4 h-9 group"
      aria-label={language === "en" ? "Switch to Myanmar language" : "Switch to English language"}
    >
      <Globe className="h-4 w-4 mr-2 group-hover:animate-pulse" />
      <div className="relative w-6 h-6 overflow-hidden">
        <motion.div
          initial={false}
          animate={{ y: language === "en" ? 0 : -24 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute inset-0 flex flex-col items-center"
        >
          <span className="h-6 flex items-center font-medium">EN</span>
          <span className="h-6 flex items-center font-medium mm">MM</span>
        </motion.div>
      </div>

      {/* Animated indicator dot */}
      <motion.div
        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-[#00FFFF]"
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* Hover effect */}
      <motion.div
        className="absolute inset-0 bg-[#00FFFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
    </Button>
  )
}
