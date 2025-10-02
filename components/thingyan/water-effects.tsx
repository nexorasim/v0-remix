"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useThingyanTheme } from "@/contexts/thingyan-theme-context"

export function WaterDroplets({ count = 20, className = "" }: { count?: number; className?: string }) {
  const { thingyanIntensity } = useThingyanTheme()

  // Adjust count based on intensity
  const adjustedCount = {
    subtle: Math.floor(count * 0.5),
    moderate: count,
    immersive: Math.floor(count * 1.5),
  }[thingyanIntensity]

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {Array.from({ length: adjustedCount }).map((_, i) => (
        <motion.div
          key={`droplet-${i}`}
          className="absolute bg-[#00FFFF]/30"
          style={{
            width: `${1 + Math.random()}px`,
            height: `${3 + Math.random() * 3}px`,
            borderRadius: "0 0 50% 50%",
            left: `${Math.random() * 100}%`,
            top: `-20px`,
          }}
          animate={{
            y: ["0vh", "100vh"],
            x: [0, Math.random() > 0.5 ? 50 : -50],
            opacity: [0.7, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 15,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 20,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  )
}

export function WaterRipples({ count = 5, className = "" }: { count?: number; className?: string }) {
  const { thingyanIntensity } = useThingyanTheme()

  // Adjust count based on intensity
  const adjustedCount = {
    subtle: Math.floor(count * 0.5),
    moderate: count,
    immersive: Math.floor(count * 1.5),
  }[thingyanIntensity]

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {Array.from({ length: adjustedCount }).map((_, i) => (
        <motion.div
          key={`ripple-${i}`}
          className="absolute rounded-full border border-[#00FFFF]/20"
          style={{
            width: "150px",
            height: "150px",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
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
  )
}

export function FloatingFlowers({ count = 10, className = "" }: { count?: number; className?: string }) {
  const { thingyanIntensity } = useThingyanTheme()

  // Adjust count based on intensity
  const adjustedCount = {
    subtle: Math.floor(count * 0.5),
    moderate: count,
    immersive: Math.floor(count * 1.5),
  }[thingyanIntensity]

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {Array.from({ length: adjustedCount }).map((_, i) => (
        <motion.div
          key={`flower-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-20px`,
          }}
          animate={{
            y: ["0vh", "100vh"],
            rotate: [0, 360],
            x: [0, Math.random() > 0.5 ? 100 : -100],
          }}
          transition={{
            duration: 15 + Math.random() * 20,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 30,
            ease: "linear",
          }}
        >
          <div className="w-3 h-3 relative">
            {/* Improved flower with more petals */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <div
                key={angle}
                className="absolute w-1.5 h-1.5 bg-[#00FFFF]/70 rounded-full"
                style={{
                  transform: `rotate(${angle}deg) translate(1.5px, 0)`,
                  transformOrigin: "center",
                }}
              />
            ))}
            <div className="absolute w-1.5 h-1.5 bg-white/70 rounded-full left-0.75 top-0.75" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export function WaterWaves({ className = "" }: { className?: string }) {
  const { thingyanIntensity } = useThingyanTheme()

  // Adjust opacity based on intensity
  const opacity = {
    subtle: 0.1,
    moderate: 0.2,
    immersive: 0.3,
  }[thingyanIntensity]

  return (
    <div className={`absolute bottom-0 left-0 right-0 h-40 overflow-hidden pointer-events-none ${className}`}>
      {[1, 2, 3].map((i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: `rgba(0, 255, 255, ${opacity * i})`,
            borderRadius: "50% 50% 0 0",
            bottom: `${(i - 1) * 10}px`,
          }}
          animate={{
            scaleX: [0.8, 1.2, 0.8],
            scaleY: [0.8, 1, 0.8],
            x: ["-10%", "10%", "-10%"],
          }}
          transition={{
            duration: 7 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export function ThingyanBackground({ children }: { children: React.ReactNode }) {
  const { thingyanIntensity } = useThingyanTheme()

  return (
    <div className="relative overflow-hidden">
      {/* Background elements based on intensity */}
      {thingyanIntensity !== "subtle" && <WaterRipples />}
      <WaterDroplets count={thingyanIntensity === "subtle" ? 10 : thingyanIntensity === "moderate" ? 20 : 30} />
      {thingyanIntensity === "immersive" && <FloatingFlowers />}

      {/* Add subtle glow effect for immersive mode */}
      {thingyanIntensity === "immersive" && (
        <motion.div
          className="absolute inset-0 bg-[#00FFFF]/5 pointer-events-none"
          animate={{
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "mirror",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Bottom waves */}
      {thingyanIntensity !== "subtle" && <WaterWaves />}
    </div>
  )
}
