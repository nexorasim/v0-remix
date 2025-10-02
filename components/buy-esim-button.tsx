"use client"

import { motion } from "framer-motion"
import { Gift, Download, Smartphone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useThingyanTheme } from "@/contexts/thingyan-theme-context"

interface BuyEsimButtonProps {
  variant?: "button" | "icon" | "floating"
  className?: string
}

export default function BuyEsimButton({ variant = "button", className = "" }: BuyEsimButtonProps) {
  const { language } = useLanguage()
  const { isThingyanTheme } = useThingyanTheme()

  const handleClick = () => {
    window.open("https://shop.esim.com.mm", "_blank", "noopener,noreferrer")
  }

  // Choose the appropriate icon based on theme
  const RegularIcon = Smartphone // Changed from CreditCard to Smartphone
  const FestivalIcon = Gift

  if (variant === "floating") {
    return (
      <motion.button
        className={`fixed bottom-6 left-6 z-20 ${
          isThingyanTheme ? "bg-gradient-to-r from-[#00FFFF] to-[#00CCFF]" : "bg-[#00FFFF]"
        } text-[#1E2F3C] rounded-full p-3 flex items-center shadow-lg ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(0, 255, 255, 0.7)",
            "0 0 0 10px rgba(0, 255, 255, 0)",
            "0 0 0 0 rgba(0, 255, 255, 0)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
        onClick={handleClick}
        aria-label={language === "en" ? "Buy eSIM" : "eSIM ဝယ်ယူရန်"}
      >
        {isThingyanTheme ? (
          <>
            <FestivalIcon className="h-5 w-5 mr-2" />
            <span className="font-medium">{language === "en" ? "Festival eSIM" : "သင်္ကြန် eSIM"}</span>

            {/* Enhanced animated particles for Thingyan */}
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${3 - i * 0.5}px`,
                  height: `${3 - i * 0.5}px`,
                  top: `-${5 + i * 3}px`,
                  left: `${10 + i * 10}px`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.5,
                }}
              />
            ))}

            {/* Add water ripple effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(0, 255, 255, 0.4)",
                  "0 0 0 8px rgba(0, 255, 255, 0)",
                  "0 0 0 0 rgba(0, 255, 255, 0)",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                delay: 1,
              }}
            />
          </>
        ) : (
          <>
            <RegularIcon className="h-5 w-5 mr-2" />
            <span className="font-medium">{language === "en" ? "Buy eSIM" : "eSIM ဝယ်ယူရန်"}</span>
          </>
        )}
      </motion.button>
    )
  }

  if (variant === "icon") {
    return (
      <motion.button
        className={`${
          isThingyanTheme ? "bg-gradient-to-r from-[#00FFFF] to-[#00CCFF]" : "bg-[#00FFFF]"
        } text-[#1E2F3C] rounded-full p-2 flex items-center justify-center shadow-md ${className} relative`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        aria-label={language === "en" ? "Buy eSIM" : "eSIM ဝယ်ယူရန်"}
      >
        {isThingyanTheme ? <FestivalIcon className="h-5 w-5" /> : <RegularIcon className="h-5 w-5" />}

        {/* Enhanced notification dot for Thingyan */}
        {isThingyanTheme && (
          <motion.span
            className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        )}
      </motion.button>
    )
  }

  return (
    <motion.button
      className={`${
        isThingyanTheme ? "bg-gradient-to-r from-[#00FFFF] to-[#00CCFF]" : "bg-[#00FFFF]"
      } text-[#1E2F3C] rounded-lg px-4 py-2 flex items-center shadow-md ${className} relative overflow-hidden`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      {isThingyanTheme ? (
        <>
          <FestivalIcon className="h-4 w-4 mr-2" />
          <span className="font-medium">{language === "en" ? "Festival eSIM" : "သင်္ကြန် eSIM"}</span>

          {/* Enhanced shimmer effect for Thingyan */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "linear" }}
          />

          {/* Animated water droplets - improved */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`button-droplet-${i}`}
              className="absolute w-1 h-3 bg-white/70 rounded-b-full"
              style={{
                top: "-3px",
                left: `${30 + i * 20}%`,
              }}
              animate={{
                y: [0, 20],
                opacity: [0.7, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
                ease: "easeIn",
              }}
            />
          ))}

          {/* Bounce animation for festival effect */}
          <motion.div
            className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white"
            animate={{
              y: [0, -5, 0],
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
        </>
      ) : (
        <>
          <RegularIcon className="h-4 w-4 mr-2" />
          <span className="font-medium">{language === "en" ? "Buy eSIM" : "eSIM ဝယ်ယူရန်"}</span>
          <Download className="h-3 w-3 ml-1 opacity-70" />
        </>
      )}
    </motion.button>
  )
}
