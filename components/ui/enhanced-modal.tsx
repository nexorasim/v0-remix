"use client"

import type React from "react"

import { useState, useEffect, forwardRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface EnhancedModalProps {
  isOpen: boolean
  onClose: () => void
  title?: React.ReactNode
  description?: React.ReactNode
  children: React.ReactNode
  footer?: React.ReactNode
  size?: "sm" | "md" | "lg" | "xl" | "full"
  position?: "center" | "top" | "bottom"
  closeOnClickOutside?: boolean
  showCloseButton?: boolean
  variant?: "default" | "blur" | "minimal"
  className?: string
  contentClassName?: string
  overlayClassName?: string
}

export const EnhancedModal = forwardRef<HTMLDivElement, EnhancedModalProps>(
  (
    {
      isOpen,
      onClose,
      title,
      description,
      children,
      footer,
      size = "md",
      position = "center",
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
        // Prevent scrolling when modal is open
        document.body.style.overflow = "hidden"
      }

      return () => {
        document.removeEventListener("keydown", handleEscapeKey)
        // Restore scrolling when modal is closed
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

    // Define size classes
    const sizeClasses = {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      full: "max-w-full w-full h-full m-0 rounded-none",
    }

    // Define position classes
    const positionClasses = {
      center: "items-center justify-center",
      top: "items-start justify-center pt-16",
      bottom: "items-end justify-center pb-16",
    }

    // Define variant classes
    const variantClasses = {
      default: "bg-[#1E2F3C] border border-[#00FFFF]/30",
      blur: "bg-[#1E2F3C]/80 backdrop-blur-md border border-[#00FFFF]/20",
      minimal: "bg-[#1E2F3C] border-none shadow-xl",
    }

    // Animation variants
    const overlayVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }

    const modalVariants = {
      hidden: {
        opacity: 0,
        scale: 0.95,
        y: position === "top" ? -20 : position === "bottom" ? 20 : 0,
      },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 25,
          stiffness: 300,
        },
      },
      exit: {
        opacity: 0,
        scale: 0.95,
        transition: {
          duration: 0.2,
        },
      },
    }

    return (
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <motion.div
              className={cn("fixed inset-0 bg-black/50 z-0", overlayClassName)}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={overlayVariants}
              onClick={closeOnClickOutside ? onClose : undefined}
            />

            <div className={cn("min-h-full p-4 flex", positionClasses[position])}>
              <motion.div
                ref={ref}
                className={cn(
                  "relative w-full rounded-lg shadow-lg",
                  sizeClasses[size],
                  variantClasses[variant],
                  className,
                )}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()}
              >
                {showCloseButton && (
                  <button
                    className="absolute top-4 right-4 p-1 rounded-full hover:bg-[#00FFFF]/10 transition-colors"
                    onClick={onClose}
                    aria-label="Close modal"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}

                {(title || description) && (
                  <div className="p-6 pb-0">
                    {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
                    {description && <p className="text-[#B0BEC5]">{description}</p>}
                  </div>
                )}

                <div className={cn("p-6", contentClassName)}>{children}</div>

                {footer && <div className="p-6 pt-0 flex justify-end gap-2">{footer}</div>}
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    )
  },
)

EnhancedModal.displayName = "EnhancedModal"
