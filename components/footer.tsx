"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Facebook,
  Twitter,
  Instagram,
  Smartphone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  Droplets,
} from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { LocalizedText } from "@/components/ui/localized-text"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { useThingyanTheme } from "@/contexts/thingyan-theme-context"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, margin: "-100px 0px" })
  const { isThingyanTheme } = useThingyanTheme()

  const renderThingyanEffects = () => {
    if (!isThingyanTheme) return null

    return (
      <>
        {/* Water ripples at the bottom */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`footer-ripple-${i}`}
            className="absolute rounded-full border border-[#00FFFF]/20"
            style={{
              width: "150px",
              height: "150px",
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 20}%`,
              opacity: 0,
            }}
            animate={{
              scale: [0, 3],
              opacity: [0.3, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 10,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Floating flowers */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`footer-flower-${i}`}
            className="absolute"
            style={{
              left: `${20 + i * 30}%`,
              bottom: `-20px`,
            }}
            animate={{
              y: [0, -100],
              rotate: [0, 360],
              x: [0, Math.random() > 0.5 ? 50 : -50],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            <div className="w-3 h-3 relative">
              {[0, 72, 144, 216, 288].map((angle) => (
                <div
                  key={angle}
                  className="absolute w-1.5 h-1.5 bg-[#00FFFF]/70 rounded-full"
                  style={{
                    transform: `rotate(${angle}deg) translate(1.5px, 0)`,
                    transformOrigin: "center",
                  }}
                />
              ))}
              <div className="absolute w-1.5 h-1.5 bg-white/70 rounded-full left-0.75 top-0.75" />
            </div>
          </motion.div>
        ))}
      </>
    )
  }

  return (
    <footer ref={footerRef} className="mt-20 border-t border-[#00FFFF]/20 bg-[#162430] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {renderThingyanEffects()}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#00FFFF]/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute -left-20 -bottom-20 w-60 h-60 rounded-full bg-[#00FFFF]/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -45, 0],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-[#00FFFF] mr-1">e</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">SIM</span>
              <span className="ml-1 text-[#00FFFF]">Myanmar</span>
            </motion.div>
            <p className="text-[#B0BEC5] text-sm">
              <LocalizedText
                en="Bringing the future of mobile connectivity to Myanmar with digital SIM technology."
                mm="ဒီဂျစ်တယ် SIM နည်းပညာဖြင့် မြန်မာနိုင်ငံသို့ မိုဘိုင်းချိတ်ဆက်မှု၏ အနာဂတ်ကို ယူဆောင်လာခြင်း။"
              />
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: "Facebook", url: "https://facebook.com/esimmyanmar" },
                { icon: Twitter, label: "Twitter", url: "https://twitter.com/esimmyanmar" },
                { icon: Instagram, label: "Instagram", url: "https://instagram.com/esimmyanmar" },
              ].map(({ icon: Icon, label, url }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#263A49] flex items-center justify-center text-[#00FFFF] hover:bg-[#00FFFF] hover:text-[#1E2F3C] transition-colors relative group overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  aria-label={label}
                >
                  <Icon size={20} className="relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-[#00FFFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FFFF] mr-2"></span>
              <LocalizedText en="Quick Links" mm="အမြန်လင့်ခ်များ" />
            </h3>
            <ul className="space-y-2">
              {[
                { en: "Home", mm: "ပင်မစာမျက်နှာ", path: "/" },
                { en: "About", mm: "အကြောင်း", path: "/about" },
                { en: "Compatibility", mm: "သဟဇာတဖြစ်မှု", path: "/compatibility" },
                { en: "How it Works", mm: "မည်သို့အလုပ်လုပ်သည်", path: "/how-it-works" },
                { en: "FAQ", mm: "မေးလေ့ရှိသောမေးခွန်းများ", path: "/faq" },
                { en: "Contact", mm: "ဆက်သွယ်ရန်", path: "/contact" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={item.path}
                    className="text-[#B0BEC5] hover:text-[#00FFFF] transition-colors flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -translate-x-2 group-hover:translate-x-0 transition-transform duration-200" />
                    <LocalizedText en={item.en} mm={item.mm} />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FFFF] mr-2"></span>
              <LocalizedText en="Supported Carriers" mm="ထောက်ပံ့သော ဝန်ဆောင်မှုပေးသူများ" />
            </h3>
            <ul className="space-y-2">
              {["MPT", "ATOM", "Ooredoo", "Mytel"].map((carrier, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href="#"
                    className="text-[#B0BEC5] hover:text-[#00FFFF] transition-colors flex items-center group"
                  >
                    <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {carrier}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FFFF] mr-2"></span>
              <LocalizedText en="Contact Us" mm="ဆက်သွယ်ရန်" />
            </h3>
            <ul className="space-y-4">
              {[
                { icon: Smartphone, text: "09650000172", label: t("Phone", "ဖုန်း") },
                { icon: Mail, text: "info@esim.com.mm", label: t("Email", "အီးမေးလ်") },
                { icon: MapPin, text: "esim.com.mm", label: t("Website", "ဝဘ်ဆိုဒ်") },
              ].map((item, index) => (
                <li key={index} className="flex items-start group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-[#00FFFF]/10 flex items-center justify-center group-hover:bg-[#00FFFF]/20 transition-colors duration-300">
                      <item.icon className="h-4 w-4 text-[#00FFFF]" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-white text-sm">{item.label}</h3>
                    <p className="text-[#B0BEC5] text-sm">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 pt-6 border-t border-[#00FFFF]/10 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-[#B0BEC5] text-sm">
            <LocalizedText
              en={`© ${currentYear} eSIM Myanmar. All rights reserved.`}
              mm={`© ${currentYear} eSIM Myanmar. မူပိုင်ခွင့်အားလုံး လက်ဝယ်ထားရှိသည်။`}
            />
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy-policy" className="text-[#B0BEC5] text-sm hover:text-[#00FFFF] transition-colors">
              <LocalizedText en="Privacy Policy" mm="ကိုယ်ရေးအချက်အလက်မူဝါဒ" />
            </Link>
            <Link href="/terms-of-service" className="text-[#B0BEC5] text-sm hover:text-[#00FFFF] transition-colors">
              <LocalizedText en="Terms of Service" mm="ဝန်ဆောင်မှုစည်းကမ်းချက်များ" />
            </Link>
            {isThingyanTheme && (
              <motion.div
                className="text-[#00FFFF] text-sm flex items-center"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Droplets className="h-3 w-3 mr-1" />
                <LocalizedText en="Happy Thingyan" mm="သင်္ကြန်မင်္ဂလာပါ" />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
