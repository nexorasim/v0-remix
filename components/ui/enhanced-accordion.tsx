"use client"

import type React from "react"

import { useState, forwardRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export interface EnhancedAccordionItemProps {
  id: string
  title: React.ReactNode
  content: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
}

export interface EnhancedAccordionProps {
  items: EnhancedAccordionItemProps[]
  defaultOpen?: string[]
  multiple?: boolean
  variant?: "default" | "bordered" | "separated" | "minimal"
  iconPosition?: "left" | "right"
  iconType?: "chevron" | "plus" | "none"
  animated?: boolean
  className?: string
  itemClassName?: string
}

export const EnhancedAccordion = forwardRef<HTMLDivElement, EnhancedAccordionProps>(
  (
    {
      items,
      defaultOpen = [],
      multiple = false,
      variant = "default",
      iconPosition = "right",
      iconType = "chevron",
      animated = true,
      className,
      itemClassName,
    },
    ref,
  ) => {
    const [openItems, setOpenItems] = useState<string[]>(defaultOpen)

    const handleToggle = (id: string) => {
      if (multiple) {
        setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
      } else {
        setOpenItems((prev) => (prev.includes(id) ? [] : [id]))
      }
    }

    // Define variant classes
    const variantClasses = {
      default: {
        container: "border rounded-lg border-[#00FFFF]/20 divide-y divide-[#00FFFF]/20",
        item: "px-4 py-3",
      },
      bordered: {
        container: "divide-y divide-[#00FFFF]/20",
        item: "border border-[#00FFFF]/20 rounded-lg px-4 py-3 mb-2",
      },
      separated: {
        container: "space-y-2",
        item: "bg-[#1E2F3C] rounded-lg px-4 py-3",
      },
      minimal: {
        container: "space-y-1",
        item: "px-2 py-2 hover:bg-[#00FFFF]/5 rounded-md",
      },
    }

    // Get icon component based on type and state
    const getIcon = (id: string) => {
      const isOpen = openItems.includes(id)

      switch (iconType) {
        case "chevron":
          return (
            <ChevronDown
              className={cn("h-5 w-5 transition-transform duration-200", isOpen && "transform rotate-180")}
            />
          )
        case "plus":
          return isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />
        case "none":
          return null
        default:
          return null
      }
    }

    return (
      <div ref={ref} className={cn(variant !== "bordered" && variantClasses[variant].container, className)}>
        {items.map((item) => (
          <div key={item.id} className={cn(variant === "bordered" && variantClasses[variant].item, itemClassName)}>
            <button
              onClick={() => !item.disabled && handleToggle(item.id)}
              className={cn(
                "flex items-center justify-between w-full text-left",
                variant !== "bordered" && variantClasses[variant].item,
                item.disabled && "opacity-50 cursor-not-allowed",
              )}
              disabled={item.disabled}
              aria-expanded={openItems.includes(item.id)}
            >
              <div className={cn("flex items-center", iconPosition === "left" && "flex-row-reverse")}>
                {item.icon && <span className={cn(iconPosition === "left" ? "ml-2" : "mr-2")}>{item.icon}</span>}
                <span className="font-medium">{item.title}</span>
              </div>

              {iconType !== "none" && <span className="flex-shrink-0 ml-2">{getIcon(item.id)}</span>}
            </button>

            <AnimatePresence initial={false}>
              {openItems.includes(item.id) && (
                <motion.div
                  initial={animated ? { height: 0, opacity: 0 } : false}
                  animate={animated ? { height: "auto", opacity: 1 } : { opacity: 1 }}
                  exit={animated ? { height: 0, opacity: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className={cn("pt-2 pb-1", variant !== "bordered" && "px-4", variant === "minimal" && "pl-6")}>
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    )
  },
)

EnhancedAccordion.displayName = "EnhancedAccordion"
