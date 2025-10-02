"use client"

import type React from "react"

import { useState, useRef, useEffect, forwardRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export interface EnhancedDropdownItemProps {
  id: string
  label: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
  onClick?: () => void
}

export interface EnhancedDropdownProps {
  trigger: React.ReactNode
  items: EnhancedDropdownItemProps[]
  value?: string
  onChange?: (value: string) => void
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right"
  width?: "auto" | "trigger" | number
  variant?: "default" | "outline" | "ghost"
  showSelectedCheck?: boolean
  closeOnSelect?: boolean
  className?: string
  triggerClassName?: string
  menuClassName?: string
  itemClassName?: string
}

export const EnhancedDropdown = forwardRef<HTMLDivElement, EnhancedDropdownProps>(
  (
    {
      trigger,
      items,
      value,
      onChange,
      position = "bottom-left",
      width = "auto",
      variant = "default",
      showSelectedCheck = true,
      closeOnSelect = true,
      className,
      triggerClassName,
      menuClassName,
      itemClassName,
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false)
        }
      }

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside)
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [isOpen])

    // Handle escape key press
    useEffect(() => {
      const handleEscapeKey = (e: KeyboardEvent) => {
        if (e.key === "Escape" && isOpen) {
          setIsOpen(false)
        }
      }

      if (isOpen) {
        document.addEventListener("keydown", handleEscapeKey)
      }

      return () => {
        document.removeEventListener("keydown", handleEscapeKey)
      }
    }, [isOpen])

    const handleSelect = (item: EnhancedDropdownItemProps) => {
      if (item.disabled) return

      if (onChange) {
        onChange(item.id)
      }

      if (item.onClick) {
        item.onClick()
      }

      if (closeOnSelect) {
        setIsOpen(false)
      }
    }

    // Define variant classes
    const variantClasses = {
      default: "bg-[#1E2F3C] border border-[#00FFFF]/30 hover:bg-[#00FFFF]/10",
      outline: "bg-transparent border border-[#00FFFF]/30 hover:bg-[#00FFFF]/10",
      ghost: "bg-transparent hover:bg-[#00FFFF]/10",
    }

    // Define position classes
    const positionClasses = {
      "bottom-left": "top-full left-0 mt-1",
      "bottom-right": "top-full right-0 mt-1",
      "top-left": "bottom-full left-0 mb-1",
      "top-right": "bottom-full right-0 mb-1",
    }

    // Calculate width style
    const getWidthStyle = () => {
      if (width === "auto") return {}
      if (width === "trigger" && triggerRef.current) {
        return { width: triggerRef.current.offsetWidth }
      }
      if (typeof width === "number") {
        return { width: `${width}px` }
      }
      return {}
    }

    return (
      <div ref={containerRef} className={cn("relative inline-block", className)}>
        <div ref={triggerRef} onClick={() => setIsOpen(!isOpen)} className={cn("cursor-pointer", triggerClassName)}>
          {trigger}
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={ref}
              className={cn(
                "absolute z-50 min-w-[10rem] rounded-md shadow-lg py-1",
                "bg-[#1E2F3C] border border-[#00FFFF]/20",
                positionClasses[position],
                menuClassName,
              )}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.1 }}
              style={getWidthStyle()}
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className={cn(
                    "flex items-center px-4 py-2 text-sm",
                    !item.disabled && "cursor-pointer hover:bg-[#00FFFF]/10",
                    item.disabled && "opacity-50 cursor-not-allowed",
                    value === item.id && "bg-[#00FFFF]/5 text-[#00FFFF]",
                    itemClassName,
                  )}
                >
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  <span>{item.label}</span>

                  {showSelectedCheck && value === item.id && <Check className="ml-auto h-4 w-4" />}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  },
)

EnhancedDropdown.displayName = "EnhancedDropdown"
