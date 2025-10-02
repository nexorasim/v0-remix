"use client"

import { useState, useRef, type KeyboardEvent } from "react"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface EnhancedTagInputProps {
  value: string[]
  onChange: (value: string[]) => void
  placeholder?: string
  disabled?: boolean
  maxTags?: number
  className?: string
  tagClassName?: string
  variant?: "default" | "primary" | "secondary"
  allowDuplicates?: boolean
  validateTag?: (tag: string) => boolean
  onExceedMaxTags?: () => void
}

export function EnhancedTagInput({
  value = [],
  onChange,
  placeholder = "Add tag...",
  disabled = false,
  maxTags,
  className,
  tagClassName,
  variant = "default",
  allowDuplicates = false,
  validateTag,
  onExceedMaxTags,
}: EnhancedTagInputProps) {
  const [inputValue, setInputValue] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  // Define variant classes
  const variantClasses = {
    default: "bg-[#1E2F3C] border-[#00FFFF]/30 focus:border-[#00FFFF] focus:ring-[#00FFFF]",
    primary: "bg-[#263A49] border-[#00FFFF]/20 focus:border-[#00FFFF] focus:ring-[#00FFFF]",
    secondary: "bg-transparent border-[#00FFFF]/10 focus:border-[#00FFFF] focus:ring-[#00FFFF]",
  }

  // Define tag variant classes
  const tagVariantClasses = {
    default: "bg-[#263A49] text-white",
    primary: "bg-[#00FFFF]/10 text-[#00FFFF]",
    secondary: "bg-[#1E2F3C] text-white",
  }

  const addTag = (tag: string) => {
    const trimmedTag = tag.trim()

    if (!trimmedTag) return

    // Check if we've reached the maximum number of tags
    if (maxTags !== undefined && value.length >= maxTags) {
      onExceedMaxTags?.()
      return
    }

    // Check if tag is valid
    if (validateTag && !validateTag(trimmedTag)) {
      return
    }

    // Check if tag already exists
    if (!allowDuplicates && value.includes(trimmedTag)) {
      return
    }

    onChange([...value, trimmedTag])
    setInputValue("")
  }

  const removeTag = (index: number) => {
    const newTags = [...value]
    newTags.splice(index, 1)
    onChange(newTags)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault()
      addTag(inputValue)
    } else if (e.key === "Backspace" && !inputValue && value.length > 0) {
      removeTag(value.length - 1)
    }
  }

  return (
    <div
      className={cn("flex flex-wrap items-center gap-2 p-2 border rounded-lg", variantClasses[variant], className)}
      onClick={() => inputRef.current?.focus()}
    >
      <AnimatePresence>
        {value.map((tag, index) => (
          <motion.span
            key={`${tag}-${index}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "inline-flex items-center px-2 py-1 rounded-md text-sm",
              tagVariantClasses[variant],
              tagClassName,
            )}
          >
            {tag}
            {!disabled && (
              <button
                type="button"
                className="ml-1 rounded-full hover:bg-white/10 p-0.5"
                onClick={(e) => {
                  e.stopPropagation()
                  removeTag(index)
                }}
                aria-label={`Remove ${tag}`}
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </motion.span>
        ))}
      </AnimatePresence>

      <Input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={() => addTag(inputValue)}
        placeholder={value.length === 0 ? placeholder : ""}
        disabled={disabled || (maxTags !== undefined && value.length >= maxTags)}
        className="flex-1 min-w-[120px] border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-8 bg-transparent placeholder:text-[#B0BEC5]/70"
      />
    </div>
  )
}
