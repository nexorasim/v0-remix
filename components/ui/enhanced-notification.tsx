"use client"

import type React from "react"

import { forwardRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle, AlertTriangle, AlertCircle, Info, Bell } from "lucide-react"
import { cn } from "@/lib/utils"

export interface EnhancedNotificationProps {
  open?: boolean
  onClose?: () => void
  title: string
  description?: string
  variant?: "default" | "info" | "success" | "warning" | "error"
  icon?: React.ReactNode
  action?: React.ReactNode
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center"
  duration?: number
  className?: string
}

const EnhancedNotification = forwardRef<HTMLDivElement, EnhancedNotificationProps>(
  (
    {
      open = true,
      onClose,
      title,
      description,
      variant = "default",
      icon,
      action,
      position = "top-right",
      duration = 5000,
      className,
    },
    ref,
  ) => {
    // Define variant classes
    const variantClasses = {
      default: "bg-[#1E2F3C] border-[#00FFFF]/30",
      info: "bg-blue-900/90 border-blue-500/50",
      success: "bg-green-900/90 border-green-500/50",
      warning: "bg-amber-900/90 border-amber-500/50",
      error: "bg-red-900/90 border-red-500/50",
    }

    // Define variant icons
    const variantIcons = {
      default: <Bell className="h-5 w-5 text-[#00FFFF]" />,
      info: <Info className="h-5 w-5 text-blue-400" />,
      success: <CheckCircle className="h-5 w-5 text-green-400" />,
      warning: <AlertTriangle className="h-5 w-5 text-amber-400" />,
      error: <AlertCircle className="h-5 w-5 text-red-400" />,
    }

    // Define position classes
    const positionClasses = {
      "top-right": "top-4 right-4",
      "top-left": "top-4 left-4",
      "bottom-right": "bottom-4 right-4",
      "bottom-left": "bottom-4 left-4",
      "top-center": "top-4 left-1/2 -translate-x-1/2",
      "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
    }

    // Auto close after duration
    if (open && duration > 0 && onClose) {
      setTimeout(() => {
        onClose()
      }, duration)
    }

    return (
      <AnimatePresence>
        {open && (
          <motion.div
            ref={ref}
            className={cn(
              "fixed z-50 max-w-sm w-full shadow-lg rounded-lg border backdrop-blur-sm",
              positionClasses[position],
              variantClasses[variant],
              className,
            )}
            initial={{ opacity: 0, y: position.startsWith("top") ? -20 : 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">{icon || variantIcons[variant]}</div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium">{title}</p>
                  {description && <p className="mt-1 text-sm opacity-90">{description}</p>}
                  {action && <div className="mt-3">{action}</div>}
                </div>
                {onClose && (
                  <button
                    type="button"
                    className="flex-shrink-0 ml-3 h-5 w-5 rounded-full inline-flex items-center justify-center text-white/70 hover:text-white focus:outline-none"
                    onClick={onClose}
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Auto-close progress bar */}
            {duration > 0 && (
              <motion.div
                className="h-1 bg-white/20 rounded-b-lg overflow-hidden"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: duration / 1000, ease: "linear" }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    )
  },
)

EnhancedNotification.displayName = "EnhancedNotification"

export { EnhancedNotification }
