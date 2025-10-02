"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Music, Play, Pause, Volume, Volume1, Volume2, VolumeX, ChevronUp, ChevronDown } from "lucide-react"
import { useThingyanTheme } from "@/contexts/thingyan-theme-context"
import { useLanguage } from "@/contexts/language-context"

interface BackgroundMusicProps {
  audioUrl: string
}

export default function BackgroundMusic({ audioUrl }: BackgroundMusicProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [showPrompt, setShowPrompt] = useState(true)
  const [volume, setVolume] = useState(0.5)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const { isThingyanTheme } = useThingyanTheme()
  const { language } = useLanguage()

  // Initialize audio element
  useEffect(() => {
    if (!isThingyanTheme) return

    audioRef.current = new Audio(audioUrl)
    audioRef.current.loop = true
    audioRef.current.volume = volume

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [audioUrl, isThingyanTheme])

  // Handle play/pause
  useEffect(() => {
    if (!isThingyanTheme || !audioRef.current) return

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
  }, [isPlaying, isThingyanTheme])

  // Update volume when it changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  // Handle play/pause toggle
  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    setHasInteracted(true)
    setShowPrompt(false)
  }

  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
    if (newVolume > 0 && isMuted) {
      setIsMuted(false)
    }
  }

  // Toggle mute
  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  // Toggle controls visibility
  const toggleControls = () => {
    setShowControls(!showControls)
  }

  // Hide prompt after 10 seconds
  useEffect(() => {
    if (!isThingyanTheme) return

    const timer = setTimeout(() => {
      setShowPrompt(false)
    }, 10000)
    return () => clearTimeout(timer)
  }, [showPrompt, isThingyanTheme])

  // Don't render anything if it's not Thingyan theme
  if (!isThingyanTheme) return null

  // Get the appropriate volume icon based on volume level and mute state
  const getVolumeIcon = () => {
    if (isMuted) return <VolumeX size={16} />
    if (volume < 0.25) return <Volume size={16} />
    if (volume < 0.75) return <Volume1 size={16} />
    return <Volume2 size={16} />
  }

  return (
    <>
      {/* Music control button - now at the bottom of the screen */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Main music player container with enhanced design */}
        <motion.div
          className="bg-[#1E2F3C]/90 backdrop-blur-md border border-[#00FFFF]/30 rounded-lg shadow-lg overflow-hidden"
          animate={{
            boxShadow: isPlaying
              ? [
                  "0 0 0 0 rgba(0, 255, 255, 0.2)",
                  "0 0 15px 2px rgba(0, 255, 255, 0.3)",
                  "0 0 0 0 rgba(0, 255, 255, 0.2)",
                ]
              : "none",
          }}
          transition={{
            duration: 2,
            repeat: isPlaying ? Number.POSITIVE_INFINITY : 0,
            repeatType: "loop",
          }}
        >
          {/* Main control button */}
          <div className="flex items-center p-2">
            <motion.button
              className="bg-[#00FFFF]/10 text-[#00FFFF] rounded-full p-3 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause music" : "Play music"}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </motion.button>

            <div className="ml-3 mr-2">
              <div className="text-[#00FFFF] text-sm font-medium">
                {language === "en" ? "Thingyan Music" : "သင်္ကြန်ဂီတ"}
              </div>
              <div className="text-[#B0BEC5] text-xs">
                {isPlaying ? (language === "en" ? "Now Playing" : "ဖွင့်နေသည်") : language === "en" ? "Paused" : "ရပ်ထားသည်"}
              </div>
            </div>

            {/* Toggle controls button */}
            <motion.button
              className="ml-auto text-[#00FFFF] hover:text-[#00CCFF] p-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleControls}
              aria-label={showControls ? "Hide controls" : "Show controls"}
            >
              {showControls ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
            </motion.button>
          </div>

          {/* Expanded controls */}
          <AnimatePresence>
            {showControls && (
              <motion.div
                className="px-3 pb-3"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Volume controls with improved design */}
                <div className="flex items-center gap-3 bg-[#162430] p-2 rounded-lg">
                  <motion.button
                    onClick={toggleMute}
                    className="text-[#00FFFF] hover:text-[#00CCFF] transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {getVolumeIcon()}
                  </motion.button>

                  {/* Horizontal volume slider with improved styling */}
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-full h-1.5 appearance-none bg-[#00FFFF]/30 rounded-full outline-none"
                    style={{
                      // Custom styling for the volume slider
                      accentColor: "#00FFFF",
                    }}
                    aria-label="Volume control"
                  />

                  <div className="text-[#B0BEC5] text-xs w-8 text-right">{Math.round(volume * 100)}%</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Water droplet animations around the music player - improved */}
        {isPlaying && (
          <>
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={`music-droplet-${i}`}
                className="absolute w-1.5 h-1.5 rounded-full bg-[#00FFFF]/40"
                style={{
                  top: `-${10 + i * 5}px`,
                  left: `${10 + i * 15}px`,
                }}
                animate={{
                  y: [0, -20],
                  opacity: [0.7, 0],
                }}
                transition={{
                  duration: 1 + i * 0.3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.5,
                }}
              />
            ))}

            {/* Add water ripple effect */}
            <motion.div
              className="absolute -z-10 w-full h-full rounded-full"
              style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
              animate={{
                scale: [1, 1.5],
                opacity: [0.2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
          </>
        )}
      </motion.div>

      {/* Initial prompt to play music - now with improved design */}
      <AnimatePresence>
        {showPrompt && !hasInteracted && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 bg-[#1E2F3C]/90 backdrop-blur-sm border border-[#00FFFF]/30 text-white rounded-lg p-3 shadow-lg max-w-xs"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start">
              <Music className="h-5 w-5 text-[#00FFFF] mt-0.5 mr-2 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">
                  {language === "en" ? "Enjoy Thingyan festival music!" : "သင်္ကြန်ပွဲတော်ဂီတကို ခံစားပါ!"}
                </p>
                <p className="text-xs text-[#B0BEC5] mt-1">
                  {language === "en"
                    ? "Click the button to play traditional Myanmar New Year music"
                    : "မြန်မာ့ရိုးရာနှစ်သစ်ကူးဂီတကို ဖွင့်ရန် ခလုတ်ကို နှိပ်ပါ"}
                </p>
              </div>
            </div>
            <div className="mt-2 flex justify-between">
              <motion.button
                className="text-xs bg-[#00FFFF]/10 text-[#00FFFF] px-2 py-1 rounded hover:bg-[#00FFFF]/20 transition-colors"
                onClick={() => {
                  togglePlay()
                  setShowPrompt(false)
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === "en" ? "Play" : "ဖွင့်ရန်"}
              </motion.button>

              <motion.button
                className="text-xs text-[#B0BEC5] hover:text-white px-2 py-1 rounded transition-colors"
                onClick={() => setShowPrompt(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === "en" ? "Dismiss" : "ပယ်ဖျက်ရန်"}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
