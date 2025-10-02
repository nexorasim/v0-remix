"use client"

import type { ReactNode } from "react"
import { useLanguage } from "@/contexts/language-context"

interface LocalizedTextProps {
  en: ReactNode
  mm: ReactNode
  className?: string
}

export function LocalizedText({ en, mm, className = "" }: LocalizedTextProps) {
  const { language } = useLanguage()

  return <span className={className}>{language === "en" ? en : <span className="mm">{mm}</span>}</span>
}
