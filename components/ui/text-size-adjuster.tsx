"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Plus, Minus, Type } from "lucide-react"

interface TextSizeAdjusterProps {
  defaultSize?: number
  min?: number
  max?: number
  onChange?: (size: number) => void
  className?: string
}

export function TextSizeAdjuster({
  defaultSize = 16,
  min = 12,
  max = 24,
  onChange,
  className = "",
}: TextSizeAdjusterProps) {
  const [textSize, setTextSize] = useState(defaultSize)

  // Apply text size to document root on change
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.style.setProperty("--font-size-base", `${textSize}px`)

      // Scale other sizes proportionally
      const ratio = textSize / 16
      document.documentElement.style.setProperty("--font-size-xs", `${12 * ratio}px`)
      document.documentElement.style.setProperty("--font-size-sm", `${14 * ratio}px`)
      document.documentElement.style.setProperty("--font-size-lg", `${18 * ratio}px`)
      document.documentElement.style.setProperty("--font-size-xl", `${20 * ratio}px`)
      document.documentElement.style.setProperty("--font-size-2xl", `${24 * ratio}px`)
      document.documentElement.style.setProperty("--font-size-3xl", `${30 * ratio}px`)
      document.documentElement.style.setProperty("--font-size-4xl", `${36 * ratio}px`)

      // Call onChange callback if provided
      onChange?.(textSize)
    }
  }, [textSize, onChange])

  const decreaseSize = () => {
    setTextSize((prev) => Math.max(min, prev - 1))
  }

  const increaseSize = () => {
    setTextSize((prev) => Math.min(max, prev + 1))
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Type className="h-4 w-4 text-[#00FFFF]" />
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full"
        onClick={decreaseSize}
        disabled={textSize <= min}
      >
        <Minus className="h-3 w-3" />
      </Button>

      <Slider
        value={[textSize]}
        min={min}
        max={max}
        step={1}
        className="w-24"
        onValueChange={(value) => setTextSize(value[0])}
      />

      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full"
        onClick={increaseSize}
        disabled={textSize >= max}
      >
        <Plus className="h-3 w-3" />
      </Button>

      <span className="text-xs text-[#B0BEC5] min-w-[30px]">{textSize}px</span>
    </div>
  )
}
