"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/language-context"
import { ShoppingCart, Volume2, VolumeX, Music } from "lucide-react"

interface ThingyanLoadingScreenProps {
  onComplete?: () => void
}

export default function ThingyanLoadingScreen({ onComplete }: ThingyanLoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const { language } = useLanguage()
  const [isPlaying, setIsPlaying] = useState(false)
  const [showMusicPrompt, setShowMusicPrompt] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [messageIndex, setMessageIndex] = useState(0)

  // Thingyan blessing messages in English and Burmese
  const messages = {
    en: [
      {
        main: "Happy Myanmar New Year!",
        sub: "May this Thingyan bring you joy and prosperity",
      },
      {
        main: "Preparing your eSIM for Thingyan...",
        sub: "Stay connected during the water festival",
      },
      {
        main: "Wishing you a blessed Thingyan!",
        sub: "May all your wishes come true in the New Year",
      },
      {
        main: "Almost ready for celebration...",
        sub: "Your digital connection for the water festival",
      },
    ],
    mm: [
      {
        main: "မြန်မာနှစ်သစ်ကူး မင်္ဂလာပါ!",
        sub: "ဤသင်္ကြန်သည် သင့်အတွက် ပျော်ရွှင်မှုနှင့် ကြွယ်ဝမှုကို ယူဆောင်လာပါစေ",
      },
      {
        main: "သင်္ကြန်အတွက် သင့် eSIM ကို ပြင်ဆင်နေသည်...",
        sub: "ရေပက်ပွဲတော်အတွင်း ဆက်သွယ်မှု မပြတ်စေရန်",
      },
      {
        main: "မင်္ဂလာရှိသော သင်္ကြန်ဖြစ်ပါစေ!",
        sub: "နှစ်သစ်တွင် သင့်ဆန္ဒများ အားလုံး ပြည့်ဝပါစေ",
      },
      {
        main: "ပွဲတော်အတွက် အဆင်သင့်ဖြစ်ခါနီးပြီ...",
        sub: "ရေပက်ပွဲတော်အတွက် သင့်ဒစ်ဂျစ်တယ်ချိတ်ဆက်မှု",
      },
    ],
  }

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thingyanmoe-Szd3pRZ3hDRSHuxNx0AB8FQIz7wkM0.mp3")
    audioRef.current.loop = true
    audioRef.current.volume = 0.5

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  // Handle play/pause
  useEffect(() => {
    if (!audioRef.current) return

    if (isPlaying) {
      const playPromise = audioRef.current.play()

      // Handle play promise to avoid uncaught promise errors
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Playback started successfully
          })
          .catch((error) => {
            // Auto-play was prevented
            console.log("Autoplay prevented:", error)
            setIsPlaying(false)
          })
      }
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  // Hide music prompt after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMusicPrompt(false)
    }, 8000)
    return () => clearTimeout(timer)
  }, [])

  // Progress timer
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

  // Toggle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    setShowMusicPrompt(false)
  }

  const currentMessage = language === "en" ? messages.en[messageIndex] : messages.mm[messageIndex]

  // Generate random positions for water droplets
  const generateRandomPositions = (count: number) => {
    return Array.from({ length: count }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 6,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
    }))
  }

  const waterDroplets = generateRandomPositions(40)
  const floatingFlowers = generateRandomPositions(20)
  const waterRipples = generateRandomPositions(10)

  // Handle Buy eSIM button click
  const handleBuyEsimClick = () => {
    window.open("https://shop.esim.com.mm", "_blank", "noopener,noreferrer")
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#1E2F3C] to-[#162430] flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Enhanced background with layered effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#1E2F3C] to-[#162430]"
          animate={{
            background: [
              "linear-gradient(to bottom right, #1E2F3C, #162430)",
              "linear-gradient(to bottom right, #1a2a36, #142230)",
              "linear-gradient(to bottom right, #1E2F3C, #162430)",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Subtle grid pattern */}
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

        {/* Enhanced water waves with multiple layers */}
        <div className="absolute bottom-0 left-0 right-0 h-60 overflow-hidden">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute bottom-0 left-0 right-0"
              style={{
                height: `${20 + i * 10}px`,
                background: `rgba(0, 255, 255, ${0.05 * i})`,
                borderRadius: "50% 50% 0 0",
                bottom: `${(i - 1) * 15}px`,
              }}
              animate={{
                scaleX: [0.8, 1.2, 0.8],
                scaleY: [0.8, 1, 0.8],
                x: ["-10%", "10%", "-10%"],
              }}
              transition={{
                duration: 7 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Enhanced water droplets with varying sizes and speeds */}
        {waterDroplets.map((droplet, i) => (
          <motion.div
            key={`droplet-${i}`}
            className="absolute rounded-full bg-[#00FFFF]"
            style={{
              width: `${droplet.size}px`,
              height: `${droplet.size * 1.5}px`,
              left: `${droplet.x}%`,
              top: `-20px`,
              opacity: 0.6,
            }}
            animate={{
              y: ["0vh", "100vh"],
              x: [0, Math.random() > 0.5 ? 20 : -20],
              opacity: [0.7, 0],
              rotate: [0, 180], // Add rotation for more dynamic effect
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 10,
              ease: "easeIn",
            }}
          />
        ))}

        {/* Enhanced floating flowers with rotation and scaling */}
        {floatingFlowers.map((flower, i) => (
          <motion.div
            key={`flower-${i}`}
            className="absolute"
            style={{
              left: `${flower.x}%`,
              top: `${flower.y}%`,
            }}
            animate={{
              y: [0, -100],
              x: [0, Math.random() > 0.5 ? 50 : -50],
              rotate: [0, 360],
              scale: [0.8, 1, 0.8],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 10,
              ease: "easeInOut",
            }}
          >
            <div className="w-6 h-6 relative">
              {/* Enhanced flower using CSS with more petals */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <div
                  key={angle}
                  className="absolute w-2 h-3 bg-[#00FFFF]/70 rounded-full"
                  style={{
                    transform: `rotate(${angle}deg) translate(3px, 0)`,
                    transformOrigin: "center",
                  }}
                />
              ))}
              <div className="absolute w-3 h-3 bg-white/70 rounded-full left-1.5 top-1.5" />
            </div>
          </motion.div>
        ))}

        {/* Water ripples */}
        {waterRipples.map((ripple, i) => (
          <motion.div
            key={`ripple-${i}`}
            className="absolute rounded-full border border-[#00FFFF]/20"
            style={{
              width: "150px",
              height: "150px",
              left: `${ripple.x}%`,
              top: `${ripple.y}%`,
              opacity: 0,
            }}
            animate={{
              scale: [0, 3],
              opacity: [0.3, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 10,
              ease: "easeOut",
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
            className="text-2xl font-bold mb-2 text-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {language === "en" ? "Thingyan Festival" : "သင်္ကြန်ပွဲတော်"}
          </motion.div>

          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-transparent via-[#00FFFF] to-transparent"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "4rem", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        {/* Enhanced Thingyan water pot with more detailed animations */}
        <div className="relative w-full h-40 mb-8 flex items-center justify-center">
          <motion.div
            className="w-32 h-32 rounded-full border-4 border-[#00FFFF]/30 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              background: "linear-gradient(to bottom, rgba(0,255,255,0.05), rgba(0,255,255,0.1))",
              boxShadow: "0 0 20px rgba(0,255,255,0.2)",
            }}
          >
            {/* Enhanced water inside pot with waves */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-[#00FFFF]/40"
              style={{ height: "60%" }}
              animate={{
                height: ["60%", "65%", "60%"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {/* Enhanced water ripples with more detail */}
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={`pot-ripple-${i}`}
                  className="absolute top-0 left-1/2 rounded-full border border-white/30"
                  style={{
                    width: `${8 + i}px`,
                    height: `${8 + i}px`,
                    marginLeft: `-${4 + i / 2}px`,
                    marginTop: "-0.5rem",
                  }}
                  initial={{ scale: 0, opacity: 0.7 }}
                  animate={{ scale: 3, opacity: 0 }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.4,
                    ease: "easeOut",
                  }}
                />
              ))}

              {/* Small floating bubbles in the water */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={`bubble-${i}`}
                  className="absolute rounded-full bg-white/50"
                  style={{
                    width: `${2 + i}px`,
                    height: `${2 + i}px`,
                    left: `${20 + i * 20}%`,
                    bottom: "10%",
                  }}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, i % 2 === 0 ? 5 : -5, 0],
                    opacity: [0.7, 0.3, 0.7],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </motion.div>

            {/* Enhanced pot decoration with glowing effect */}
            <div className="absolute top-0 left-0 right-0 h-full">
              <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#00FFFF]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-[#00FFFF]/30 to-transparent" />

              {/* Decorative patterns on the pot */}
              <div className="absolute top-1/4 left-0 right-0 h-1 bg-[#00FFFF]/20" />
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#00FFFF]/20" />
              <div className="absolute top-3/4 left-0 right-0 h-1 bg-[#00FFFF]/20" />
            </div>
          </motion.div>

          {/* Enhanced water splashes with varying sizes and angles */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={`splash-${i}`}
              className="absolute bg-[#00FFFF]/70 rounded-full"
              style={{
                width: `${1 + (i % 3) * 0.5}px`,
                height: `${4 + (i % 3) * 2}px`,
                transformOrigin: "bottom",
                rotate: `${(i - 1) * 60}deg`,
              }}
              animate={{
                scaleY: [0, 1, 0],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Glowing aura around the pot */}
          <motion.div
            className="absolute w-40 h-40 rounded-full bg-[#00FFFF]/5"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="text-center mb-8">
          <h2 className="text-white text-xl font-medium mb-2">
            <span className={language === "mm" ? "mm" : ""}>{currentMessage.main}</span>
          </h2>
          <p className="text-[#00FFFF] text-sm">
            <span className={language === "mm" ? "mm" : ""}>{currentMessage.sub}</span>
          </p>
        </div>

        {/* Enhanced progress bar with glowing effect */}
        <div className="w-full h-2 bg-[#1E2F3C] border border-[#00FFFF]/20 rounded-full overflow-hidden mb-3 relative">
          <motion.div
            className="h-full bg-gradient-to-r from-[#00FFFF]/70 to-[#00FFFF]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />

          {/* Glowing effect on progress bar */}
          <motion.div
            className="absolute top-0 bottom-0 left-0 right-0 bg-[#00FFFF]/10"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <div className="flex justify-between items-center text-white text-sm">
          <span>
            {progress}% {language === "en" ? "Complete" : "ပြီးစီး"}
          </span>
          <span>{language === "en" ? "Please wait..." : "ခဏစောင့်ပါ..."}</span>
        </div>

        {/* Enhanced animated dots with varying sizes */}
        <div className="flex justify-center mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="mx-1 rounded-full bg-[#00FFFF]"
              style={{
                width: `${6 - i}px`,
                height: `${6 - i}px`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
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

      {/* Music control button */}
      <motion.button
        className="fixed top-6 right-6 z-50 bg-[#1E2F3C] border border-[#00FFFF]/30 text-[#00FFFF] rounded-full p-3 shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isPlaying ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
      </motion.button>

      {/* Music prompt */}
      <AnimatePresence>
        {showMusicPrompt && (
          <motion.div
            className="fixed top-6 right-20 z-50 bg-[#1E2F3C]/90 backdrop-blur-sm border border-[#00FFFF]/30 text-white rounded-lg px-3 py-2 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3, delay: 1 }}
          >
            <div className="flex items-center">
              <Music className="h-4 w-4 text-[#00FFFF] mr-2" />
              <p className="text-xs">
                {language === "en" ? "Click to enjoy Thingyan music!" : "သင်္ကြန်ဂီတကို ခံစားရန် နှိပ်ပါ!"}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulsing "Buy eSIM" button in bottom left corner - improved */}
      <motion.button
        className="fixed bottom-6 left-6 z-20 bg-[#00FFFF] text-[#1E2F3C] rounded-full p-3 flex items-center shadow-lg"
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
        onClick={handleBuyEsimClick}
        aria-label={language === "en" ? "Buy eSIM" : "eSIM ဝယ်ယူရန်"}
      >
        <ShoppingCart className="h-5 w-5 mr-2" />
        <span className="font-medium">{language === "en" ? "Buy eSIM" : "eSIM ဝယ်ယူရန်"}</span>

        {/* Add water droplet animation */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`esim-droplet-${i}`}
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
      </motion.button>
    </div>
  )
}
