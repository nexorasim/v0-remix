"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center space-x-2 bg-[#1E2F3C] p-1 rounded-full border border-[#00FFFF]/10">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("light")}
        className={`rounded-full w-8 h-8 ${theme === "light" ? "bg-[#00FFFF]/20 text-[#00FFFF]" : "text-[#B0BEC5]"}`}
        aria-label="Light mode"
      >
        <Sun size={16} />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("dark")}
        className={`rounded-full w-8 h-8 ${theme === "dark" ? "bg-[#00FFFF]/20 text-[#00FFFF]" : "text-[#B0BEC5]"}`}
        aria-label="Dark mode"
      >
        <Moon size={16} />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("system")}
        className={`rounded-full w-8 h-8 ${theme === "system" ? "bg-[#00FFFF]/20 text-[#00FFFF]" : "text-[#B0BEC5]"}`}
        aria-label="System theme"
      >
        <Laptop size={16} />
      </Button>
    </div>
  )
}
