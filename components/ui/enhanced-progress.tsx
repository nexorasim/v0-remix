"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Progress, type ProgressProps } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export interface EnhancedProgressProps extends ProgressProps {
  variant?: "default" | "success" | "warning" | "error" | "gradient"
  showValue?: boolean
  valuePosition?: "inside" | "outside"
  size?: "sm" | "default" | "lg"
  animated?: boolean
  label?: string
}

const EnhancedProgress = forwardRef<HTMLDivElement, EnhancedProgressProps>(
  (
    {
      className,
      value = 0,
      variant = "default",
      showValue = false,
      valuePosition = "outside",
      size = "default",
      animated = false,
      label,
      ...props
    },
    ref,
  ) => {
    // Define variant classes
    const variantClasses = {
      default: "bg-[#00FFFF]",
      success: "bg-green-500",
      warning: "bg-amber-500",
      error: "bg-red-500",
      gradient: "bg-gradient-to-r from-[#00FFFF] to-[#00CCFF]",
    }

    // Define size classes
    const sizeClasses = {
      sm: "h-1",
      default: "h-2",
      lg: "h-3",
    }

    // Animation class
    const animationClass = animated ? "animate-pulse" : ""

    // Combine all classes
    const progressClasses = cn("rounded-full", sizeClasses[size], className)

    // Indicator classes
    const indicatorClasses = cn(variantClasses[variant], animationClass, "rounded-full transition-all")

    return (
      <div className="w-full">
        {(label || (showValue && valuePosition === "outside")) && (
          <div className="flex justify-between items-center mb-1">
            {label && <div className="text-sm font-medium">{label}</div>}
            {showValue && valuePosition === "outside" && (
              <div className="text-sm text-[#B0BEC5]">{Math.round(value)}%</div>
            )}
          </div>
        )}

        <div className="relative">
          <Progress ref={ref} value={value} className={progressClasses} {...props}>
            {animated && (
              <motion.div
                className={indicatorClasses}
                style={{ width: `${value}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${value}%` }}
                transition={{ duration: 0.5 }}
              />
            )}
          </Progress>

          {showValue && valuePosition === "inside" && value >= 20 && (
            <div
              className="absolute inset-y-0 left-0 flex items-center justify-end pr-2 text-xs font-medium text-white"
              style={{ width: `${value}%` }}
            >
              {Math.round(value)}%
            </div>
          )}
        </div>
      </div>
    )
  },
)

EnhancedProgress.displayName = "EnhancedProgress"

export { EnhancedProgress }
