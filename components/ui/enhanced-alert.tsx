"use client"

import type React from "react"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Alert, type AlertProps } from "@/components/ui/alert"
import { AlertCircle, CheckCircle, AlertTriangle, Info, X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface EnhancedAlertProps extends AlertProps {
  variant?: "default" | "info" | "success" | "warning" | "error"
  title?: string
  description?: string
  icon?: React.ReactNode
  withAnimation?: boolean
  animationDelay?: number
  onClose?: () => void
}

const EnhancedAlert = forwardRef<HTMLDivElement, EnhancedAlertProps>(
  (
    {
      className,
      children,
      variant = "default",
      title,
      description,
      icon,
      withAnimation = false,
      animationDelay = 0,
      onClose,
      ...props
    },
    ref,
  ) => {
    // Define variant classes
    const variantClasses = {
      default: "bg-[#1E2F3C] border-[#00FFFF]/30",
      info: "bg-blue-900/20 border-blue-500/30 text-blue-100",
      success: "bg-green-900/20 border-green-500/30 text-green-100",
      warning: "bg-amber-900/20 border-amber-500/30 text-amber-100",
      error: "bg-red-900/20 border-red-500/30 text-red-100",
    }

    // Define variant icons
    const variantIcons = {
      default: <AlertCircle className="h-5 w-5 text-[#00FFFF]" />,
      info: <Info className="h-5 w-5 text-blue-400" />,
      success: <CheckCircle className="h-5 w-5 text-green-400" />,
      warning: <AlertTriangle className="h-5 w-5 text-amber-400" />,
      error: <AlertCircle className="h-5 w-5 text-red-400" />,
    }

    // Combine all classes
    const alertClasses = cn(variantClasses[variant], "relative", className)

    const alertContent = (
      <Alert ref={ref} className={alertClasses} {...props}>
        <div className="flex">
          {icon || variantIcons[variant]}
          <div className="ml-3 flex-1">
            {title && <div className="font-medium">{title}</div>}
            {description && <div className="text-sm opacity-90">{description}</div>}
            {children}
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="ml-auto -mr-1 flex-shrink-0 p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </Alert>
    )

    // If withAnimation is true, wrap with motion.div
    if (withAnimation) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, delay: animationDelay }}
        >
          {alertContent}
        </motion.div>
      )
    }

    // Regular alert without animation
    return alertContent
  },
)

EnhancedAlert.displayName = "EnhancedAlert"

export { EnhancedAlert }
