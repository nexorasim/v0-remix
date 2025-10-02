"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Button as BaseButton, type ButtonProps } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export interface EnhancedButtonProps extends ButtonProps {
  isLoading?: boolean
  loadingText?: string
  withShimmer?: boolean
  withScale?: boolean
  withGlow?: boolean
  size?: "sm" | "default" | "lg" | "xl"
  variant?: "primary" | "secondary" | "tertiary" | "outline" | "ghost" | "link" | "icon"
}

const EnhancedButton = forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  (
    {
      className,
      children,
      isLoading,
      loadingText,
      withShimmer = false,
      withScale = false,
      withGlow = false,
      variant = "primary",
      size = "default",
      ...props
    },
    ref,
  ) => {
    // Define variant classes
    const variantClasses = {
      primary:
        "bg-gradient-to-r from-[#00FFFF] to-[#00CCFF] text-[#1E2F3C] hover:opacity-90 shadow-lg shadow-[#00FFFF]/20",
      secondary: "border border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF]/10 bg-transparent",
      tertiary: "text-[#00FFFF] hover:text-[#00CCFF] bg-transparent",
      outline: "border border-[#00FFFF]/30 text-[#00FFFF] hover:border-[#00FFFF] hover:bg-[#00FFFF]/5 bg-transparent",
      ghost: "text-white hover:bg-[#00FFFF]/10 hover:text-[#00FFFF] bg-transparent",
      link: "text-[#00FFFF] hover:text-[#00CCFF] underline-offset-4 hover:underline bg-transparent p-0 h-auto",
      icon: "w-10 h-10 rounded-full flex items-center justify-center bg-[#263A49] text-[#00FFFF] hover:bg-[#00FFFF]/20 p-0",
    }

    // Define size classes
    const sizeClasses = {
      sm: "px-3 py-1 text-sm rounded-md",
      default: "px-6 py-3 rounded-lg",
      lg: "px-8 py-4 text-lg rounded-lg",
      xl: "px-10 py-5 text-xl rounded-xl",
    }

    // Add glow effect if requested
    const glowClass = withGlow ? "hover:shadow-[0_0_15px_rgba(0,255,255,0.5)]" : ""

    // Combine all classes
    const buttonClasses = cn(
      variantClasses[variant],
      sizeClasses[size],
      glowClass,
      "font-medium transition-all duration-300",
      className,
    )

    // If withScale is true, wrap with motion.div
    if (withScale) {
      return (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <BaseButton ref={ref} className={buttonClasses} disabled={isLoading || props.disabled} {...props}>
            {isLoading ? (
              <span className="flex items-center justify-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {loadingText || "Loading..."}
              </span>
            ) : (
              <span className="relative z-10 flex items-center justify-center">
                {children}
                {withShimmer && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#00FFFF]/0 via-[#00FFFF]/30 to-[#00FFFF]/0"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "linear" }}
                  />
                )}
              </span>
            )}
          </BaseButton>
        </motion.div>
      )
    }

    // Regular button without scale animation
    return (
      <BaseButton ref={ref} className={buttonClasses} disabled={isLoading || props.disabled} {...props}>
        {isLoading ? (
          <span className="flex items-center justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {loadingText || "Loading..."}
          </span>
        ) : (
          <span className="relative z-10 flex items-center justify-center">
            {children}
            {withShimmer && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00FFFF]/0 via-[#00FFFF]/30 to-[#00FFFF]/0"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "linear" }}
              />
            )}
          </span>
        )}
      </BaseButton>
    )
  },
)

EnhancedButton.displayName = "EnhancedButton"

export { EnhancedButton }
