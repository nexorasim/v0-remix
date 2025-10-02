"use client"

import { forwardRef } from "react"
import { Skeleton, type SkeletonProps } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

export interface EnhancedSkeletonProps extends SkeletonProps {
  variant?: "default" | "card" | "text" | "avatar" | "button" | "input"
  lines?: number
  animated?: boolean
}

const EnhancedSkeleton = forwardRef<HTMLDivElement, EnhancedSkeletonProps>(
  ({ className, variant = "default", lines = 1, animated = true, ...props }, ref) => {
    // Define variant classes
    const variantClasses = {
      default: "",
      card: "w-full h-[200px] rounded-xl",
      text: "h-4 w-full",
      avatar: "h-12 w-12 rounded-full",
      button: "h-10 w-24 rounded-lg",
      input: "h-10 w-full rounded-lg",
    }

    // Animation class
    const animationClass = animated ? "animate-pulse" : ""

    // Combine all classes
    const skeletonClasses = cn(variantClasses[variant], animationClass, "bg-[#263A49]", className)

    // If it's a text variant with multiple lines
    if (variant === "text" && lines > 1) {
      return (
        <div className="space-y-2">
          {Array.from({ length: lines }).map((_, i) => (
            <Skeleton
              key={i}
              ref={i === 0 ? ref : undefined}
              className={cn(
                skeletonClasses,
                // Make some lines shorter for a more realistic text effect
                i === lines - 1 ? "w-4/5" : i % 2 === 0 ? "w-full" : "w-11/12",
              )}
              {...props}
            />
          ))}
        </div>
      )
    }

    // Regular skeleton
    return <Skeleton ref={ref} className={skeletonClasses} {...props} />
  },
)

EnhancedSkeleton.displayName = "EnhancedSkeleton"

export { EnhancedSkeleton }
