"use client"

import type React from "react"

import { useState, useEffect, forwardRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface EnhancedDrawerProps {
  isOpen: boolean
  onClose: () => void
  title?: React.ReactNode
  description?: React.ReactNode
  children: React.ReactNode
  footer?: React.ReactNode
  position?: "left" | "right" | "top" | "bottom"
  size?: "sm" | "md" | "lg" | "full"
  closeOnClickOutside?: boolean
  showCloseButton?: boolean
  variant?: "default" | "blur" | "minimal"
  className?: string
  contentClassName?: string
  overlayClassName?: string
}

export const EnhancedDrawer = forwardRef<HTMLDivElement, EnhancedDrawerProps>(
  (
    {
      isOpen,
      onClose,
      title,
      description,
      children,
      footer,
      position = "right",
      size = "md",
      closeOnClickOutside = true,
      showCloseButton = true,
      variant = "default",
      className,
      contentClassName,
      overlayClassName,
    },
    ref,
  ) => {
    const [isMounted, setIsMounted] = useState(false)

    // Handle escape key press
    useEffect(() => {
      const handleEscapeKey = (e: KeyboardEvent) => {
        if (e.key === "Escape" && isOpen) {
          onClose()
        }
      }

      if (isOpen) {
        document.addEventListener("keydown", handleEscapeKey)
        // Prevent scrolling when drawer is open
        document.body.style.overflow = "hidden"
      }

      return () => {
        document.removeEventListener("keydown", handleEscapeKey)
        // Restore scrolling when drawer is closed
        document.body.style.overflow = ""
      }
    }, [isOpen, onClose])

    // Handle client-side rendering
    useEffect(() => {
      setIsMounted(true)
    }, [])

    if (!isMounted) {
      return null
    }

    // Define size classes based on position
    const sizeClasses = {
      left: {
        sm: "w-64",
        md: "w-80",
        lg: "w-96",
        full: "w-full",
      },
      right: {
        sm: "w-64",
        md: "w-80",
        lg: "w-96",
        full: "w-full",
      },
      top: {
        sm: "h-1/4",
        md: "h-1/3",
        lg: "h-1/2",
        full: "h-full",
      },
      bottom: {
        sm: "h-1/4",
        md: "h-1/3",
        lg: "h-1/2",
        full: "h-full",
      },
    }

    // Define position classes
    const positionClasses = {
      left: "inset-y-0 left-0 h-full",
      right: "inset-y-0 right-0 h-full",
      top: "inset-x-0 top-0 w-full",
      bottom: "inset-x-0 bottom-0 w-full",
    }

    // Define variant classes
    const variantClasses = {
      default: "bg-[#1E2F3C] border-[#00FFFF]/30",
      blur: "bg-[#1E2F3C]/80 backdrop-blur-md border-[#00FFFF]/20",
      minimal: "bg-[#1E2F3C] shadow-xl",
    }

    // Define border classes based on position
    const borderClasses = {
      left: "border-r",
      right: "border-l",
      top: "border-b",
      bottom: "border-t",
    }

    // Animation variants based on position
    const drawerVariants = {
      left: {
        hidden: { x: "-100%" },
        visible: { x: 0 },
        exit: { x: "-100%" },
      },
      right: {
        hidden: { x: "100%" },
        visible: { x: 0 },
        exit: { x: "100%" },
      },
      top: {
        hidden: { y: "-100%" },
        visible: { y: 0 },
        exit: { y: "-100%" },
      },
      bottom: {
        hidden: { y: "100%" },
        visible: { y: 0 },
        exit: { y: "100%" },
      },
    }

    return (
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <motion.div
              className={cn("fixed inset-0 bg-black/50 z-0", overlayClassName)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeOnClickOutside ? onClose : undefined}
            />

            <motion.div
              ref={ref}
              className={cn(
                "fixed z-50",
                positionClasses[position],
                sizeClasses[position][size],
                variantClasses[variant],
                borderClasses[position],
                className,
              )}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={drawerVariants[position]}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="h-full flex flex-col">
                {(title || description || showCloseButton) && (
                  <div className="p-4 border-b border-[#00FFFF]/10 flex items-center justify-between">
                    <div>
                      {title && <h2 className="text-xl font-semibold">{title}</h2>}
                      {description && <p className="text-sm text-[#B0BEC5]">{description}</p>}
                    </div>

                    {showCloseButton && (
                      <button
                        className="p-1 rounded-full hover:bg-[#00FFFF]/10 transition-colors"
                        onClick={onClose}
                        aria-label="Close drawer"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                )}

                <div className={cn("flex-1 overflow-auto p-4", contentClassName)}>{children}</div>

                {footer && <div className="p-4 border-t border-[#00FFFF]/10">{footer}</div>}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    )
  },
)

EnhancedDrawer.displayName = "EnhancedDrawer"
