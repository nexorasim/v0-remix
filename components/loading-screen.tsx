"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

interface LoadingScreenProps {
  onComplete?: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const { language } = useLanguage()

  const messages = {
    en: [
      {
        main: "Initializing eSIM environment...",
        sub: "Loading digital profiles and network configurations",
      },
      {
        main: "Processing carrier data...",
        sub: "Analyzing compatibility and connection settings",
      },
      {
        main: "Establishing secure channels...",
        sub: "Setting up encrypted communication protocols",
      },
      {
        main: "Almost ready...",
        sub: "Preparing your eSIM experience",
      },
    ],
    mm: [
      {
        main: "eSIM ပတ်ဝန်းကျင်ကို စတင်နေသည်...",
        sub: "ဒီဂျစ်တယ်ပရိုဖိုင်များနှင့် ကွန်ရက်ပြင်ဆင်မှုများကို ဖွင့်နေသည်",
      },
      {
        main: "ဝန်ဆောင်မှုပေးသူ ဒေတာကို ဆောင်ရွက်နေသည်...",
        sub: "သဟဇာတဖြစ်မှုနှင့် ချိတ်ဆက်မှုဆက်တင်များကို စိစစ်နေသည်",
      },
      {
        main: "လုံခြုံသော လမ်းကြောင်းများ တည်ဆောက်နေသည်...",
        sub: "လျှို့ဝှက်စာဖြင့် ဆက်သွယ်ရေးပရိုတိုကောများ ပြင်ဆင်နေသည်",
      },
      {
        main: "လက်စသတ်ခါနီးပြီ...",
        sub: "သင့် eSIM အတွေ့အကြုံကို ပြင်ဆင်နေသည်",
      },
    ],
  }

  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          onComplete && onComplete()
          return 100
        }

        // Update messages based on progress
        if (prev === 25) {
          setMessageIndex(1)
        } else if (prev === 50) {
          setMessageIndex(2)
        } else if (prev === 75) {
          setMessageIndex(3)
        }

        return prev + 1
      })
    }, 30) // Faster loading

    return () => clearInterval(interval)
  }, [onComplete])

  const currentMessage = language === "en" ? messages.en[messageIndex] : messages.mm[messageIndex]

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#0c1824] to-[#162430] flex flex-col items-center justify-center z-50">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 grid grid-cols-12 gap-4">
            {Array.from({ length: 12 }).map((_, colIndex) => (
              <div key={colIndex} className="h-full w-full border-r border-[#00FFFF]/20"></div>
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-12 gap-4">
            {Array.from({ length: 12 }).map((_, rowIndex) => (
              <div key={rowIndex} className="h-full w-full border-b border-[#00FFFF]/20"></div>
            ))}
          </div>
        </div>

        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00FFFF]/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#00FFFF]/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Floating particles - improved */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#00FFFF]/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, Math.random() > 0.5 ? 10 : -10, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        <div className="flex flex-col items-center mb-12">
          <motion.div
            className="text-4xl font-bold mb-2 flex items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#00FFFF] mr-1">e</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">SIM</span>
            <span className="ml-1 text-[#00FFFF]">Myanmar</span>
          </motion.div>

          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-transparent via-[#00FFFF] to-transparent"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "4rem", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        <div className="relative w-full h-40 mb-8 flex items-center justify-center">
          <motion.div
            className="w-32 h-32 rounded-full border-4 border-[#00FFFF]/20 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-24 h-24 rounded-full border-4 border-[#00FFFF]/30 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-[#00FFFF]/10 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div
                  className="text-[#00FFFF] font-bold text-xl"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  eSIM
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Animated pulse rings */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute w-full h-full rounded-full border border-[#00FFFF]/20"
              style={{ scale: 0.2 * i }}
              animate={{
                scale: [0.2 * i, 0.8 * i],
                opacity: [0.7, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.5 * i,
              }}
            />
          ))}

          {/* Digital particles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#00FFFF]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 1,
              }}
            />
          ))}
        </div>

        <div className="text-center mb-8">
          <h2 className="text-[#00FFFF] text-xl font-medium mb-2">
            <span className={language === "mm" ? "mm" : ""}>{currentMessage.main}</span>
          </h2>
          <p className="text-[#B0BEC5] text-sm">
            <span className={language === "mm" ? "mm" : ""}>{currentMessage.sub}</span>
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 bg-[#263A49] rounded-full overflow-hidden mb-3">
          <motion.div
            className="h-full bg-gradient-to-r from-[#00FFFF]/80 to-[#00FFFF]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <div className="flex justify-between items-center text-[#B0BEC5] text-sm">
          <span>
            {progress}% {language === "en" ? "Complete" : "ပြီးစီး"}
          </span>
          <span>{language === "en" ? "Please wait..." : "ခဏစောင့်ပါ..."}</span>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 mx-1 rounded-full bg-[#00FFFF]"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
                y: [0, -3, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
