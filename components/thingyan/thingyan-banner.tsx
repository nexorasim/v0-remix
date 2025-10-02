"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, Droplets, Gift, Volume2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

interface ThingyanBannerProps {
  audioUrl: string
}

export default function ThingyanBanner({ audioUrl }: ThingyanBannerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasAttemptedAutoplay, setHasAttemptedAutoplay] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)
  const [showMusicTooltip, setShowMusicTooltip] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [showVolumeControl, setShowVolumeControl] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const { language } = useLanguage()

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio(audioUrl)
    audioRef.current.loop = true
    audioRef.current.volume = volume

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [audioUrl])

  // Attempt autoplay once when component mounts
  useEffect(() => {
    if (!hasAttemptedAutoplay && audioRef.current) {
      const attemptAutoplay = async () => {
        try {
          // Try to play audio
          await audioRef.current?.play()
          setIsPlaying(true)
          console.log("Autoplay successful")
        } catch (error) {
          // Autoplay was prevented by browser policy
          console.log("Autoplay prevented:", error)
          setIsPlaying(false)
        }
        setHasAttemptedAutoplay(true)
      }

      attemptAutoplay()
    }
  }, [hasAttemptedAutoplay])

  // Handle play/pause
  useEffect(() => {
    if (!audioRef.current) return

    if (isPlaying) {
      const playPromise = audioRef.current.play()

      // Handle play promise to avoid uncaught promise errors
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Play prevented:", error)
          setIsPlaying(false)
        })
      }
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  // Update volume when it changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  // Toggle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    setUserInteracted(true)
  }

  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
  }

  // Show music tooltip for 5 seconds if not interacted
  useEffect(() => {
    if (!userInteracted) {
      setShowMusicTooltip(true)
      const timer = setTimeout(() => {
        setShowMusicTooltip(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [userInteracted])

  return (
    <div className="bg-[#1E2F3C] border-b border-[#00FFFF]/20 text-white py-2 px-4 text-sm relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated water droplets in the banner */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`banner-droplet-${i}`}
            className="absolute w-1 h-1 rounded-full bg-[#00FFFF]/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-5px`,
            }}
            animate={{
              y: [0, 30],
              opacity: [0.7, 0],
            }}
            transition={{
              duration: 1 + Math.random(),
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "easeIn",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto flex items-center justify-between">
        {/* Left section with music control - now with improved design */}
        <div className="flex items-center relative">
          <div className="flex items-center space-x-2">
            <motion.button
              className="flex items-center justify-center bg-[#00FFFF]/10 text-[#00FFFF] p-2 rounded-full hover:bg-[#00FFFF]/20 transition-colors border border-[#00FFFF]/30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                boxShadow: isPlaying
                  ? ["0 0 0 0 rgba(0, 255, 255, 0.4)", "0 0 0 8px rgba(0, 255, 255, 0)", "0 0 0 0 rgba(0, 255, 255, 0)"]
                  : "none",
              }}
              transition={{
                duration: 2,
                repeat: isPlaying ? Number.POSITIVE_INFINITY : 0,
                repeatType: "loop",
              }}
              onClick={togglePlay}
              onMouseEnter={() => setShowMusicTooltip(true)}
              onMouseLeave={() => !userInteracted && setShowMusicTooltip(false)}
              aria-label={isPlaying ? "Pause Thingyan music" : "Play Thingyan music"}
            >
              {isPlaying ? (
                <Pause size={18} className="text-[#00FFFF]" />
              ) : (
                <Play size={18} className="text-[#00FFFF]" />
              )}
            </motion.button>

            {/* Volume control button */}
            {isPlaying && (
              <div className="relative">
                <motion.button
                  className="flex items-center justify-center bg-[#00FFFF]/10 text-[#00FFFF] p-2 rounded-full hover:bg-[#00FFFF]/20 transition-colors border border-[#00FFFF]/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowVolumeControl(!showVolumeControl)}
                  aria-label="Volume control"
                >
                  <Volume2 size={16} className="text-[#00FFFF]" />
                </motion.button>

                {/* Volume slider popup */}
                <AnimatePresence>
                  {showVolumeControl && (
                    <motion.div
                      className="absolute left-0 top-full mt-2 bg-[#1E2F3C]/90 backdrop-blur-sm border border-[#00FFFF]/30 rounded-lg p-2 z-50"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-24 h-1.5 appearance-none bg-[#00FFFF]/30 rounded-full outline-none"
                        style={{ accentColor: "#00FFFF" }}
                        aria-label="Volume control"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Music status text */}
            {isPlaying && (
              <span className="hidden sm:inline-block text-[#00FFFF] text-xs">
                {language === "en" ? "Now Playing" : "ဖွင့်နေသည်"}
              </span>
            )}
          </div>

          {/* Music tooltip */}
          <AnimatePresence>
            {showMusicTooltip && (
              <motion.div
                className="absolute left-0 top-full mt-2 bg-[#1E2F3C]/90 backdrop-blur-sm border border-[#00FFFF]/30 rounded-md px-3 py-1.5 z-50 whitespace-nowrap"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-xs">
                  {isPlaying
                    ? language === "en"
                      ? "Now playing Thingyan music"
                      : "သင်္ကြန်သီချင်း ဖွင့်နေသည်"
                    : language === "en"
                      ? "Click to play festival music"
                      : "သင်္ကြန်သီချင်း ဖွင့်ရန် နှိပ်ပါ"}
                </div>
                <div className="absolute w-0 h-0 border-4 text-inherit border-t-transparent border-r-transparent border-b-[#1E2F3C]/90 border-l-transparent -top-2 left-4 transform rotate-180" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Center section with festival message - now with improved animation */}
        <div className="flex-grow text-center mx-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <motion.div
              animate={{
                y: [0, -3, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            >
              <Droplets size={16} className="text-[#00FFFF] mr-2" />
            </motion.div>
            <span>
              {language === "en"
                ? "Happy Thingyan Water Festival! Special eSIM offers available now"
                : "သင်္ကြန်ပွဲတော် မင်္ဂလာပါ! အထူး eSIM ကမ်းလှမ်းမှုများ ယခုရရှိနိုင်ပါပြီ"}
            </span>
            <motion.div
              animate={{
                y: [0, -3, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                delay: 1,
              }}
            >
              <Droplets size={16} className="text-[#00FFFF] ml-2" />
            </motion.div>
          </motion.div>
        </div>

        {/* Right section with Buy eSIM button - now with improved animation */}
        <div>
          <Link href="https://shop.esim.com.mm" target="_blank" rel="noopener noreferrer">
            <motion.button
              className="flex items-center justify-center bg-gradient-to-r from-[#00FFFF] to-[#00CCFF] text-[#1E2F3C] px-3 py-1.5 rounded-full font-medium text-xs shadow-lg relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            >
              <Gift size={14} className="mr-1.5" />
              {language === "en" ? "Festival eSIM" : "သင်္ကြန် eSIM"}

              {/* Enhanced shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "linear" }}
              />

              {/* Add water droplet */}
              <motion.div
                className="absolute -top-1 left-1/2 w-1 h-3 bg-white/70 rounded-b-full"
                animate={{
                  y: [0, 10],
                  opacity: [0.7, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 1,
                  ease: "easeIn",
                }}
              />
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  )
}
