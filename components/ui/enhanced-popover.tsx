"use client"

import type React from "react"

import { useState, useRef, useEffect, forwardRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export interface EnhancedPopoverProps {
  trigger: React.ReactNode
  content: React.ReactNode
  position?: "top" | "bottom" | "left" | "right"
  align?: "start" | "center" | "end"
  openOnHover?: boolean
  closeOnClickOutside?: boolean
  className?: string
  triggerClassName?: string
  contentClassName?: string
}

export const EnhancedPopover = forwardRef<HTMLDivElement, EnhancedPopoverProps>(
  (
    {
      trigger,
      content,
      position = "bottom",
      align = "center",
      openOnHover = false,
      closeOnClickOutside = true,
      className,
      triggerClassName,
      contentClassName,
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)

    // Close popover when clicking outside
    useEffect(() => {
      if (!closeOnClickOutside) return

      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false)
        }
      }

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside)
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [isOpen, closeOnClickOutside])

    // Define position classes
    const positionClasses = {
      top: {
        start: "bottom-full left-0 mb-2",
        center: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        end: "bottom-full right-0 mb-2",
      },
      bottom: {
        start: "top-full left-0 mt-2",
        center: "top-full left-1/2 -translate-x-1/2 mt-2",
        end: "top-full right-0 mt-2",
      },
      left: {
        start: "right-full top-0 mr-2",
        center: "right-full top-1/2 -translate-y-1/2 mr-2",
        end: "right-full bottom-0 mr-2",
      },
      right: {
        start: "left-full top-0 ml-2",
        center: "left-full top-1/2 -translate-y-1/2 ml-2",
        end: "left-full bottom-0 ml-2",
      },
    }

    // Animation variants based on position
    const getAnimationVariants = () => {
      switch (position) {
        case "top":
          return {
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }
        case "bottom":
          return {
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0 },
          }
        case "left":
          return {
            hidden: { opacity: 0, x: 10 },
            visible: { opacity: 1, x: 0 },
          }
        case "right":
          return {
            hidden: { opacity: 0, x: -10 },
            visible: { opacity: 1, x: 0 },
          }
        default:
          return {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }
      }
    }

    const handleTriggerClick = () => {
      if (!openOnHover) {
        setIsOpen(!isOpen)
      }
    }

    const handleMouseEnter = () => {
      if (openOnHover) {
        setIsOpen(true)
      }
    }

    const handleMouseLeave = () => {
      if (openOnHover) {
        setIsOpen(false)
      }
    }

    return (
      <div
        ref={containerRef}
        className={cn("relative inline-block", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={triggerRef}
          onClick={handleTriggerClick}
          className={cn(openOnHover ? "cursor-default" : "cursor-pointer", triggerClassName)}
        >
          {trigger}
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={ref}
              className={cn(
                "absolute z-50 min-w-[10rem] rounded-md shadow-lg py-2 px-3",
                "bg-[#1E2F3C] border border-[#00FFFF]/20",
                positionClasses[position][align],
                contentClassName,
              )}
              variants={getAnimationVariants()}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.15 }}
            >
              {content}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  },
)

EnhancedPopover.displayName = "EnhancedPopover"
