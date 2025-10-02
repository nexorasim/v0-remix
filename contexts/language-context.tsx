"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "mm"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (en: string, mm: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  // Load saved language preference from localStorage on client side
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "mm")) {
        setLanguage(savedLanguage)
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error)
    }
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem("language", language)
      // Add language class to body for global styling
      document.body.classList.remove("lang-en", "lang-mm")
      document.body.classList.add(`lang-${language}`)

      // Set HTML lang attribute for accessibility
      document.documentElement.lang = language
    } catch (error) {
      console.error("Error setting localStorage:", error)
    }
  }, [language])

  // Translation helper function
  const t = (en: string, mm: string) => {
    return language === "en" ? en : mm
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
