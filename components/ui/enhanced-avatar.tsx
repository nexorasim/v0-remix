"use client"

import { forwardRef } from "react"
import { Avatar, AvatarFallback, AvatarImage, type AvatarProps } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export interface EnhancedAvatarProps extends AvatarProps {
  src?: string
  alt?: string
  fallback?: string
  status?: "online" | "offline" | "away" | "busy" | "none"
  variant?: "circle" | "rounded" | "square"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  withBorder?: boolean
  borderColor?: string
  withAnimation?: boolean
  animationType?: "pulse" | "bounce" | "shake"
}

const EnhancedAvatar = forwardRef<HTMLDivElement, EnhancedAvatarProps>(
  (
    {
      className,
      src,
      alt = "",
      fallback,
      status = "none",
      variant = "circle",
      size = "md",
      withBorder = false,
      borderColor = "border-[#00FFFF]/30",
      withAnimation = false,
      animationType = "pulse",
      ...props
    },
    ref,
  ) => {
    // Define variant classes
    const variantClasses = {
      circle: "rounded-full",
      rounded: "rounded-xl",
      square: "rounded-none",
    }

    // Define size classes
    const sizeClasses = {
      xs: "h-8 w-8 text-xs",
      sm: "h-10 w-10 text-sm",
      md: "h-12 w-12 text-base",
      lg: "h-16 w-16 text-lg",
      xl: "h-20 w-20 text-xl",
    }

    // Define status classes
    const statusClasses = {
      online: "bg-green-500",
      offline: "bg-gray-500",
      away: "bg-amber-500",
      busy: "bg-red-500",
      none: "hidden",
    }

    // Define animation classes
    const animationClasses = {
      pulse: "animate-pulse",
      bounce: "animate-bounce",
      shake: "animate-[shake_0.5s_ease-in-out_infinite]",
    }

    // Border class
    const borderClass = withBorder ? `border-2 ${borderColor}` : ""

    // Animation class
    const animationClass = withAnimation ? animationClasses[animationType] : ""

    // Combine all classes
    const avatarClasses = cn(
      variantClasses[variant],
      sizeClasses[size],
      borderClass,
      animationClass,
      "relative",
      className,
    )

    return (
      <div className="relative inline-block">
        <Avatar ref={ref} className={avatarClasses} {...props}>
          {src && <AvatarImage src={src} alt={alt} />}
          {fallback && <AvatarFallback>{fallback.substring(0, 2).toUpperCase()}</AvatarFallback>}
        </Avatar>

        {status !== "none" && (
          <span
            className={cn(
              "absolute bottom-0 right-0 block rounded-full ring-2 ring-white",
              statusClasses[status],
              size === "xs" ? "h-2 w-2" : "h-3 w-3",
            )}
          />
        )}
      </div>
    )
  },
)

EnhancedAvatar.displayName = "EnhancedAvatar"

export { EnhancedAvatar }
