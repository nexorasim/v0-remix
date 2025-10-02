"use client"

import type React from "react"

import { useState, useRef, useEffect, forwardRef } from "react"
import { motion, AnimatePresence, type PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface EnhancedCarouselProps {
  items: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  showArrows?: boolean
  showDots?: boolean
  infinite?: boolean
  effect?: "slide" | "fade" | "zoom"
  className?: string
  slideClassName?: string
  dotsClassName?: string
  arrowClassName?: string
}

export const EnhancedCarousel = forwardRef<HTMLDivElement, EnhancedCarouselProps>(
  (
    {
      items,
      autoPlay = false,
      interval = 5000,
      showArrows = true,
      showDots = true,
      infinite = true,
      effect = "slide",
      className,
      slideClassName,
      dotsClassName,
      arrowClassName,
    },
    ref,
  ) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    // Auto play functionality
    useEffect(() => {
      if (!autoPlay || isPaused || items.length <= 1) return

      const timer = setInterval(() => {
        handleNext()
      }, interval)

      return () => clearInterval(timer)
    }, [autoPlay, interval, currentIndex, isPaused, items.length])

    const handlePrevious = () => {
      setDirection(-1)
      setCurrentIndex((prev) => {
        if (prev === 0) {
          return infinite ? items.length - 1 : 0
        }
        return prev - 1
      })
    }

    const handleNext = () => {
      setDirection(1)
      setCurrentIndex((prev) => {
        if (prev === items.length - 1) {
          return infinite ? 0 : items.length - 1
        }
        return prev + 1
      })
    }

    const handleDotClick = (index: number) => {
      setDirection(index > currentIndex ? 1 : -1)
      setCurrentIndex(index)
    }

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const threshold = 50

      if (info.offset.x > threshold) {
        handlePrevious()
      } else if (info.offset.x < -threshold) {
        handleNext()
      }
    }

    // Define animation variants based on effect
    const slideVariants = {
      slide: {
        enter: (direction: number) => ({
          x: direction > 0 ? "100%" : "-100%",
          opacity: 1,
        }),
        center: {
          x: 0,
          opacity: 1,
        },
        exit: (direction: number) => ({
          x: direction > 0 ? "-100%" : "100%",
          opacity: 1,
        }),
      },
      fade: {
        enter: {
          opacity: 0,
        },
        center: {
          opacity: 1,
        },
        exit: {
          opacity: 0,
        },
      },
      zoom: {
        enter: {
          opacity: 0,
          scale: 0.8,
        },
        center: {
          opacity: 1,
          scale: 1,
        },
        exit: {
          opacity: 0,
          scale: 1.2,
        },
      },
    }

    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden rounded-lg", className)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div ref={containerRef} className="relative w-full h-full">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants[effect]}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
              }}
              drag={effect === "slide" ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              className={cn("absolute inset-0 w-full h-full", slideClassName)}
            >
              {items[currentIndex]}
            </motion.div>
          </AnimatePresence>

          {showArrows && items.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className={cn(
                  "absolute top-1/2 left-2 transform -translate-y-1/2 z-10",
                  "w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center",
                  "text-white hover:bg-black/50 transition-colors",
                  !infinite && currentIndex === 0 && "opacity-50 cursor-not-allowed",
                  arrowClassName,
                )}
                disabled={!infinite && currentIndex === 0}
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={handleNext}
                className={cn(
                  "absolute top-1/2 right-2 transform -translate-y-1/2 z-10",
                  "w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center",
                  "text-white hover:bg-black/50 transition-colors",
                  !infinite && currentIndex === items.length - 1 && "opacity-50 cursor-not-allowed",
                  arrowClassName,
                )}
                disabled={!infinite && currentIndex === items.length - 1}
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {showDots && items.length > 1 && (
            <div
              className={cn(
                "absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10",
                "flex items-center space-x-2",
                dotsClassName,
              )}
            >
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === currentIndex ? "bg-white w-3 h-3" : "bg-white/50 hover:bg-white/80",
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  },
)

EnhancedCarousel.displayName = "EnhancedCarousel"
