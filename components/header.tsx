"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import LanguageToggle from "@/components/language-toggle"
import ThemeToggle from "@/components/theme-toggle"
import { Menu, X, ChevronDown, Globe, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { LocalizedText } from "@/components/ui/localized-text"
import { useThingyanTheme } from "@/contexts/thingyan-theme-context"
import BuyEsimButton from "@/components/buy-esim-button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const pathname = usePathname()
  const { t, language } = useLanguage()
  const { isThingyanTheme } = useThingyanTheme()

  // isMobileMenuOpen state ၏ အောက်တွင် ထည့်သွင်းရန်
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: t("Home", "ပင်မစာမျက်နှာ") },
    { href: "/about", label: t("About", "အကြောင်း") },
    { href: "/compatibility", label: t("Compatibility", "သဟဇာတဖြစ်မှု") },
    { href: "/how-it-works", label: t("How it Works", "မည်သို့အလုပ်လုပ်သည်") },
    { href: "/faq", label: t("FAQ", "မေးလေ့ရှိသောမေးခွန်းများ") },
    { href: "/contact", label: t("Contact", "ဆက်သွယ်ရန်") },
  ]

  const legalLinks = [
    { href: "/privacy-policy", label: t("Privacy Policy", "ကိုယ်ရေးအချက်အလက်မူဝါဒ") },
    { href: "/terms-of-service", label: t("Terms of Service", "ဝန်ဆောင်မှုစည်းကမ်းချက်များ") },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#1E2F3C]/90 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      {isThingyanTheme && (
        <div className="bg-[#1E2F3C] border-b border-[#00FFFF]/20 text-white text-center py-1 px-4 text-sm relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            {/* Animated water droplets in the banner */}
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={`banner-droplet-${i}`}
                className="absolute w-1 h-1 rounded-full bg-[#00FFFF]/40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-5px`,
                }}
                animate={{
                  y: [0, 30],
                  opacity: [0.7, 0],
                }}
                transition={{
                  duration: 1 + Math.random(),
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 5,
                  ease: "easeIn",
                }}
              />
            ))}
          </div>
          <motion.div
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Droplets size={16} className="text-[#00FFFF]" />
            {language === "en"
              ? "Happy Thingyan Water Festival! Special eSIM offers available now"
              : "သင်္ကြန်ပွဲတော် မင်္ဂလာပါ! အထူး eSIM ကမ်းလှမ်းမှုများ ယခုရရှိနိုင်ပါပြီ"}
            <Droplets size={16} className="text-[#00FFFF]" />
          </motion.div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-10 group">
            <motion.div
              className="text-2xl font-bold flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-[#00FFFF] mr-1 group-hover:animate-pulse">e</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">SIM</span>
              <span className="ml-1 text-[#00FFFF] group-hover:animate-pulse">Myanmar</span>
              {isThingyanTheme && (
                <motion.span
                  className="ml-2 text-sm bg-[#00FFFF]/20 text-[#00FFFF] px-2 py-0.5 rounded-full border border-[#00FFFF]/30"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {language === "en" ? "Thingyan" : "သင်္ကြန်"}
                </motion.span>
              )}
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-md transition-colors ${
                  pathname === link.href ? "text-[#00FFFF]" : "text-white hover:text-[#00FFFF]"
                }`}
              >
                {pathname === link.href && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-md bg-[#00FFFF]/10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
                {isThingyanTheme && pathname === link.href && (
                  <motion.span
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#00FFFF] rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                )}
              </Link>
            ))}

            {/* Legal dropdown */}
            <div className="relative">
              <button
                className="flex items-center px-4 py-2 rounded-md text-white hover:text-[#00FFFF] transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <LocalizedText en="Legal" mm="ဥပဒေရေးရာ" />
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-1 bg-[#1E2F3C]/90 backdrop-blur-md border border-[#00FFFF]/20 rounded-md shadow-lg overflow-hidden z-50"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <div className="py-1">
                      {legalLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-[#00FFFF]/10 hover:text-[#00FFFF] whitespace-nowrap transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center space-x-3 ml-2">
              <BuyEsimButton />
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <BuyEsimButton variant="icon" className="mr-2" />
            <LanguageToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-2 text-white hover:bg-[#00FFFF]/10 transition-colors duration-200"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1E2F3C]/95 backdrop-blur-md border-t border-[#00FFFF]/20"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-3 px-4 rounded-md ${
                      pathname === link.href
                        ? "bg-[#00FFFF]/10 text-[#00FFFF]"
                        : "hover:bg-[#00FFFF]/5 transition-colors duration-200"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                    {isThingyanTheme && pathname === link.href && (
                      <motion.span
                        className="ml-2 inline-block w-2 h-2 bg-[#00FFFF] rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}

              {/* Legal links in mobile menu - improved with dropdown */}
              <div className="pt-2 mt-2 border-t border-[#00FFFF]/10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <button
                    className="flex items-center justify-between w-full px-4 py-3 rounded-md hover:bg-[#00FFFF]/5 transition-colors duration-200"
                    onClick={() => setActiveDropdown(activeDropdown === "legal" ? null : "legal")}
                  >
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-2 text-[#00FFFF]/70" />
                      <LocalizedText en="Legal" mm="ဥပဒေရေးရာ" />
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        activeDropdown === "legal" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === "legal" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-8 space-y-2 mt-1 mb-2"
                      >
                        {legalLinks.map((link, index) => (
                          <motion.div
                            key={link.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Link
                              href={link.href}
                              className="block py-2 px-4 rounded-md text-sm hover:bg-[#00FFFF]/5 transition-colors duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {link.label}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              <div className="pt-2 mt-2 border-t border-[#00FFFF]/10 flex justify-center">
                <ThemeToggle />
              </div>

              <div className="pt-2 mt-2 border-t border-[#00FFFF]/10">
                <BuyEsimButton className="w-full" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
