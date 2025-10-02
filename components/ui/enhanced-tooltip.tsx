"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface EnhancedTooltipProps {
  children: React.ReactNode
  content: React.ReactNode
  position?: "top" | "bottom" | "left" | "right"
  variant?: "default" | "info" | "success" | "warning" | "error"
  delay?: number
  className?: string
}

export function EnhancedTooltip({
  children,
  content,
  position = "top",
  variant = "default",
  delay = 0.2,
  className,
}: EnhancedTooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  // Define variant classes
  const variantClasses = {
    default: "bg-[#1E2F3C] text-white border-[#00FFFF]/30",
    info: "bg-[#1E2F3C] text-[#00FFFF] border-[#00FFFF]/50",
    success: "bg-emerald-900/90 text-emerald-100 border-emerald-500/50",
    warning: "bg-amber-900/90 text-amber-100 border-amber-500/50",
    error: "bg-red-900/90 text-red-100 border-red-500/50",
  }

  // Define position styles
  const positionStyles = {
    top: {
      container: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
      arrow: "top-full left-1/2 transform -translate-x-1/2 border-t-current border-x-transparent border-b-transparent",
      animation: { y: 10 },
    },
    bottom: {
      container: "top-full left-1/2 transform -translate-x-1/2 mt-2",
      arrow:
        "bottom-full left-1/2 transform -translate-x-1/2 rotate-180 border-t-current border-x-transparent border-b-transparent",
      animation: { y: -10 },
    },
    left: {
      container: "right-full top-1/2 transform -translate-y-1/2 mr-2",
      arrow:
        "left-full top-1/2 transform -translate-y-1/2 -rotate-90 border-t-current border-x-transparent border-b-transparent",
      animation: { x: 10 },
    },
    right: {
      container: "left-full top-1/2 transform -translate-y-1/2 ml-2",
      arrow:
        "right-full top-1/2 transform -translate-y-1/2 rotate-90 border-t-current border-x-transparent border-b-transparent",
      animation: { x: -10 },
    },
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={cn("absolute z-50 whitespace-nowrap", positionStyles[position].container)}
            initial={{ opacity: 0, ...positionStyles[position].animation }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, ...positionStyles[position].animation }}
            transition={{ duration: 0.2, delay: isVisible ? delay : 0 }}
          >
            <div
              className={cn(
                "relative px-3 py-1.5 rounded-md text-sm shadow-lg backdrop-blur-sm border",
                variantClasses[variant],
                className,
              )}
            >
              {content}
              <div className={cn("absolute w-0 h-0 border-4 text-inherit", positionStyles[position].arrow)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
