"use client"

import type React from "react"

import { forwardRef } from "react"
import { Input, type InputProps } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export interface EnhancedInputProps extends InputProps {
  variant?: "primary" | "secondary" | "minimal"
  isError?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const EnhancedInput = forwardRef<HTMLInputElement, EnhancedInputProps>(
  ({ className, variant = "primary", isError = false, leftIcon, rightIcon, ...props }, ref) => {
    // Define variant classes
    const variantClasses = {
      primary: "bg-[#1E2F3C] border-[#00FFFF]/30 focus:border-[#00FFFF] focus:ring-[#00FFFF]",
      secondary: "bg-[#263A49] border-[#00FFFF]/20 focus:border-[#00FFFF] focus:ring-[#00FFFF]",
      minimal: "bg-transparent border-[#00FFFF]/10 focus:border-[#00FFFF] focus:ring-[#00FFFF]",
    }

    // Error state
    const errorClass = isError ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""

    // Icon padding
    const leftPadding = leftIcon ? "pl-10" : ""
    const rightPadding = rightIcon ? "pr-10" : ""

    // Combine all classes
    const inputClasses = cn(
      variantClasses[variant],
      errorClass,
      leftPadding,
      rightPadding,
      "rounded-lg text-white placeholder:text-[#B0BEC5]/70 transition-colors duration-200",
      className,
    )

    // If we have icons, wrap with a div for positioning
    if (leftIcon || rightIcon) {
      return (
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B0BEC5]">{leftIcon}</div>
          )}

          <Input ref={ref} className={inputClasses} {...props} />

          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#B0BEC5]">{rightIcon}</div>
          )}
        </div>
      )
    }

    // Regular input without icons
    return <Input ref={ref} className={inputClasses} {...props} />
  },
)

EnhancedInput.displayName = "EnhancedInput"

export { EnhancedInput }
