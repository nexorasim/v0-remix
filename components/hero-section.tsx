"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Zap } from "lucide-react"
import Link from "next/link"
import { LocalizedText } from "@/components/ui/localized-text"
import { useLanguage } from "@/contexts/language-context"

export default function HeroSection() {
  const { t } = useLanguage()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#1E2F3C] opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1E2F3C]"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 grid grid-cols-12 gap-4">
            {Array.from({ length: 12 }).map((_, colIndex) => (
              <div key={colIndex} className="h-full w-full border-r border-[#00FFFF]/20"></div>
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-12 gap-4">
            {Array.from({ length: 12 }).map((_, rowIndex) => (
              <div key={rowIndex} className="h-full w-full border-b border-[#00FFFF]/20"></div>
            ))}
          </div>
        </div>

        {/* Animated background circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#00FFFF]/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#00FFFF]/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#00FFFF]/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div className="max-w-2xl" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <LocalizedText
                en={
                  <>
                    The Future of{" "}
                    <span className="text-[#00FFFF] relative inline-block">
                      Mobile Connectivity
                      <motion.span
                        className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#00FFFF]/0 via-[#00FFFF]/80 to-[#00FFFF]/0"
                        initial={{ width: 0, left: "50%" }}
                        animate={{ width: "100%", left: 0 }}
                        transition={{ delay: 1, duration: 1.5 }}
                      />
                    </span>
                  </>
                }
                mm={
                  <>
                    မိုဘိုင်းချိတ်ဆက်မှု၏{" "}
                    <span className="text-[#00FFFF] relative inline-block">
                      အနာဂတ်
                      <motion.span
                        className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#00FFFF]/0 via-[#00FFFF]/80 to-[#00FFFF]/0"
                        initial={{ width: 0, left: "50%" }}
                        animate={{ width: "100%", left: 0 }}
                        transition={{ delay: 1, duration: 1.5 }}
                      />
                    </span>
                  </>
                }
              />
            </h1>
          </motion.div>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-[#B0BEC5] mb-10 leading-relaxed">
            <LocalizedText
              en="Experience the convenience of digital SIM technology in Myanmar with instant activation and seamless connectivity."
              mm="မြန်မာနိုင်ငံတွင် ချက်ချင်းအသုံးပြုနိုင်သော digital SIM နည်းပညာ၏ အဆင်ပြေလွယ်ကူမှုကို ခံစားပါ။"
            />
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/compatibility" className="w-full sm:w-auto">
              <Button className="bg-gradient-to-r from-[#00FFFF] to-[#00CCFF] text-[#1E2F3C] hover:opacity-90 px-8 py-7 text-lg rounded-lg shadow-lg shadow-[#00FFFF]/20 w-full sm:w-auto group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <LocalizedText en="Check Compatibility" mm="သဟဇာတဖြစ်မှုစစ်ဆေးရန်" />
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00FFFF]/0 via-[#00FFFF]/30 to-[#00FFFF]/0"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "linear" }}
                />
              </Button>
            </Link>
            <Link href="/how-it-works" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF]/10 px-8 py-7 text-lg rounded-lg w-full sm:w-auto group transition-all duration-300"
              >
                <span className="flex items-center">
                  <LocalizedText en="Learn How It Works" mm="မည်သို့အလုပ်လုပ်သည်ကို လေ့လာရန်" />
                  <Zap className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                </span>
              </Button>
            </Link>
          </motion.div>

          {/* Feature highlights */}
          <motion.div variants={itemVariants} className="mt-12 grid grid-cols-2 gap-4 max-w-md">
            {[
              { text: t("Instant Activation", "ချက်ချင်းအသုံးပြုနိုင်") },
              { text: t("Multiple Profiles", "ပရိုဖိုင်အများအပြား") },
              { text: t("Enhanced Security", "လုံခြုံမှုပိုမိုကောင်းမွန်") },
              { text: t("No Physical Card", "ရုပ်ပိုင်းဆိုင်ရာကဒ်မလို") },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 text-sm text-[#B0BEC5]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#00FFFF]"></div>
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* 3D Phone Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative w-full max-w-md aspect-square hidden md:block"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative w-64 h-[500px] bg-gradient-to-br from-[#263A49] to-[#1E2F3C] rounded-[40px] border-8 border-[#1E2F3C] shadow-2xl overflow-hidden"
              animate={{
                rotateY: [0, 5, 0, -5, 0],
                rotateX: [0, 3, 0, -3, 0],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {/* Phone screen */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/5 to-[#00FFFF]/10 flex flex-col items-center justify-center p-6">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Smartphone className="w-20 h-20 text-[#00FFFF] mb-4" />
                </motion.div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">eSIM Myanmar</h3>
                  <p className="text-[#B0BEC5] text-sm">
                    <LocalizedText en="Digital SIM Technology" mm="ဒီဂျစ်တယ် SIM နည်းပညာ" />
                  </p>
                </div>

                {/* Animated signal waves */}
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-full h-full rounded-full border border-[#00FFFF]/20"
                    style={{ scale: 0.2 * i }}
                    animate={{
                      scale: [0.2 * i, 0.8 * i],
                      opacity: [0.7, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: 0.5 * i,
                    }}
                  />
                ))}

                {/* Digital particles */}
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-[#00FFFF]"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-[#1E2F3C] rounded-b-2xl" />

              {/* Reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <ArrowRight className="h-8 w-8 text-[#00FFFF] transform rotate-90" />
      </motion.div>
    </section>
  )
}
