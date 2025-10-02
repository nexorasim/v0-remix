import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ResponsiveTextProps {
  children: ReactNode
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
  className?: string
  weight?: "normal" | "medium" | "semibold" | "bold"
  color?: string
}

export function ResponsiveText({
  children,
  size = "base",
  as: Component = "p",
  className = "",
  weight = "normal",
  color,
}: ResponsiveTextProps) {
  // Map size to appropriate class
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
  }

  // Map weight to appropriate class
  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  }

  // Combine classes
  const combinedClasses = cn(sizeClasses[size], weightClasses[weight], color && `text-[${color}]`, className)

  return <Component className={combinedClasses}>{children}</Component>
}
