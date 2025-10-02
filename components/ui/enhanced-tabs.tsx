"use client"

import type React from "react"

import { useState, useEffect, forwardRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface EnhancedTabsProps {
  tabs: {
    id: string
    label: React.ReactNode
    content: React.ReactNode
    icon?: React.ReactNode
    disabled?: boolean
  }[]
  defaultTab?: string
  onChange?: (tabId: string) => void
  variant?: "default" | "pills" | "underline" | "enclosed"
  size?: "sm" | "md" | "lg"
  fullWidth?: boolean
  animated?: boolean
  className?: string
  tabsClassName?: string
  contentClassName?: string
}

export const EnhancedTabs = forwardRef<HTMLDivElement, EnhancedTabsProps>(
  (
    {
      tabs,
      defaultTab,
      onChange,
      variant = "default",
      size = "md",
      fullWidth = false,
      animated = true,
      className,
      tabsClassName,
      contentClassName,
    },
    ref,
  ) => {
    const [activeTab, setActiveTab] = useState<string>(defaultTab || (tabs.length > 0 ? tabs[0].id : ""))
    const [isMounted, setIsMounted] = useState(false)

    // Handle client-side rendering
    useEffect(() => {
      setIsMounted(true)
    }, [])

    // Update active tab when defaultTab changes
    useEffect(() => {
      if (defaultTab) {
        setActiveTab(defaultTab)
      }
    }, [defaultTab])

    const handleTabChange = (tabId: string) => {
      setActiveTab(tabId)
      onChange?.(tabId)
    }

    // Define variant classes
    const variantClasses = {
      default: {
        container: "border-b border-[#00FFFF]/10",
        tab: "border-b-2 border-transparent hover:border-[#00FFFF]/30 hover:text-[#00FFFF]/70",
        activeTab: "border-[#00FFFF] text-[#00FFFF]",
      },
      pills: {
        container: "gap-2",
        tab: "rounded-full hover:bg-[#00FFFF]/10 hover:text-[#00FFFF]/70",
        activeTab: "bg-[#00FFFF]/20 text-[#00FFFF]",
      },
      underline: {
        container: "",
        tab: "border-b-2 border-transparent hover:text-[#00FFFF]/70",
        activeTab: "border-[#00FFFF] text-[#00FFFF]",
      },
      enclosed: {
        container: "bg-[#1E2F3C] rounded-lg p-1",
        tab: "rounded-md hover:bg-[#00FFFF]/5 hover:text-[#00FFFF]/70",
        activeTab: "bg-[#263A49] text-[#00FFFF] shadow-sm",
      },
    }

    // Define size classes
    const sizeClasses = {
      sm: "text-sm py-2 px-3",
      md: "py-2 px-4",
      lg: "text-lg py-3 px-6",
    }

    if (!isMounted) {
      return null
    }

    return (
      <div ref={ref} className={cn("w-full", className)}>
        <div className={cn("flex", fullWidth ? "w-full" : "w-fit", variantClasses[variant].container, tabsClassName)}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => !tab.disabled && handleTabChange(tab.id)}
              className={cn(
                "relative flex items-center transition-all duration-200",
                sizeClasses[size],
                variantClasses[variant].tab,
                tab.id === activeTab && variantClasses[variant].activeTab,
                tab.disabled && "opacity-50 cursor-not-allowed",
                fullWidth && "flex-1 justify-center",
              )}
              disabled={tab.disabled}
              aria-selected={tab.id === activeTab}
              role="tab"
            >
              {tab.icon && <span className="mr-2">{tab.icon}</span>}
              {tab.label}

              {variant === "pills" && tab.id === activeTab && animated && (
                <motion.span
                  layoutId="pill-indicator"
                  className="absolute inset-0 rounded-full bg-current -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}

              {variant === "enclosed" && tab.id === activeTab && animated && (
                <motion.span
                  layoutId="enclosed-indicator"
                  className="absolute inset-0 rounded-md bg-current -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className={cn("mt-4", contentClassName)}>
          {animated ? (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {tabs.find((tab) => tab.id === activeTab)?.content}
            </motion.div>
          ) : (
            tabs.find((tab) => tab.id === activeTab)?.content
          )}
        </div>
      </div>
    )
  },
)

EnhancedTabs.displayName = "EnhancedTabs"
