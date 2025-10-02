"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Card, type CardProps } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export interface EnhancedCardProps extends CardProps {
  variant?: "primary" | "secondary" | "glass" | "glassDark"
  withHover?: boolean
  withAnimation?: boolean
  animationDelay?: number
}

const EnhancedCard = forwardRef<HTMLDivElement, EnhancedCardProps>(
  (
    {
      className,
      children,
      variant = "primary",
      withHover = false,
      withAnimation = false,
      animationDelay = 0,
      ...props
    },
    ref,
  ) => {
    // Define variant classes
    const variantClasses = {
      primary: "bg-gradient-to-br from-[#263A49] to-[#1E2F3C] border-[#00FFFF]/10",
      secondary: "bg-[#1E2F3C] border-[#00FFFF]/10",
      glass: "glass border-[#00FFFF]/10",
      glassDark: "glass-dark border-[#00FFFF]/5",
    }

    // Add hover effect if requested
    const hoverClass = withHover
      ? "transition-all duration-300 hover:border-[#00FFFF]/30 hover:shadow-lg hover:shadow-[#00FFFF]/10"
      : ""

    // Combine all classes
    const cardClasses = cn(variantClasses[variant], hoverClass, "shadow-lg", className)

    // If withAnimation is true, wrap with motion.div
    if (withAnimation) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: animationDelay }}
          viewport={{ once: true }}
        >
          <Card ref={ref} className={cardClasses} {...props}>
            {children}
          </Card>
        </motion.div>
      )
    }

    // Regular card without animation
    return (
      <Card ref={ref} className={cardClasses} {...props}>
        {children}
      </Card>
    )
  },
)

EnhancedCard.displayName = "EnhancedCard"

export { EnhancedCard }
