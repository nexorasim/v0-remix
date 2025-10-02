"use client"

import { useState, useEffect } from "react"
import LoadingScreen from "@/components/loading-screen"
import ThingyanLoadingScreen from "@/components/thingyan-loading-screen"
import HeroSection from "@/components/hero-section"
import FeatureSection from "@/components/feature-section"
import TestimonialSection from "@/components/testimonial-section"
import CTASection from "@/components/cta-section"
import AnimatedSection from "@/components/animated-section"
import { motion } from "framer-motion"
import { LocalizedText } from "@/components/ui/localized-text"
import { useLanguage } from "@/contexts/language-context"
import { Smartphone, Zap, Shield, Globe } from "lucide-react"
import { useThingyanTheme } from "@/contexts/thingyan-theme-context"

// Home page ကို ပြုပြင်ခြင်း - သင်္ကြန်ကာလအတွက် ပိုမိုကောင်းမွန်စေရန်

// generateRandomPositions function ကို ပြင်ဆင်ရန်
// generateRandomPositions function ကို ပိုမိုကောင်းမွန်စေရန် ပြင်ဆင်ပါ
const generateRandomPositions = (count: number) => {
  return Array.from({ length: count }).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 6,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 3,
    rotation: Math.random() * 360, // Add rotation for more dynamic effects
  }))
}

export default function Home() {
  const [loading, setLoading] = useState(true)
  const { t } = useLanguage()
  const { isThingyanTheme } = useThingyanTheme()

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const carriers = [
    { name: "MPT", logo: "/placeholder.svg?height=80&width=80" },
    { name: "ATOM", logo: "/placeholder.svg?height=80&width=80" },
    { name: "Ooredoo", logo: "/placeholder.svg?height=80&width=80" },
    { name: "Mytel", logo: "/placeholder.svg?height=80&width=80" },
  ]

  // ThingyanLoadingScreen component ကို ပြင်ဆင်ရန်
  // if (loading) block ကို အောက်ပါအတိုင်း ပြင်ဆင်ပါ
  if (loading) {
    // Use the Thingyan loading screen if it's festival time, otherwise use the regular loading screen
    return isThingyanTheme ? (
      <ThingyanLoadingScreen onComplete={() => setLoading(false)} />
    ) : (
      <LoadingScreen onComplete={() => setLoading(false)} />
    )
  }

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        <LocalizedText en="Skip to content" mm="အကြောင်းအရာသို့ ကျော်သွားရန်" />
      </a>

      <div id="main-content">
        <HeroSection />

        <AnimatedSection>
          <section className="py-20" id="what-is-esim" aria-labelledby="what-is-esim-heading">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <motion.h2
                  id="what-is-esim-heading"
                  className="text-3xl md:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <LocalizedText
                    en={
                      <>
                        What is an <span className="text-[#00FFFF]">eSIM</span>?
                      </>
                    }
                    mm={
                      <>
                        <span className="text-[#00FFFF]">eSIM</span> ဆိုတာ ဘာလဲ?
                      </>
                    }
                  />
                </motion.h2>
                <motion.p
                  className="text-xl text-[#B0BEC5] max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <LocalizedText
                    en="An eSIM (embedded SIM) is a digital SIM that allows you to activate a cellular plan without using a physical SIM card."
                    mm="eSIM (embedded SIM) ဆိုသည်မှာ ဖုန်းထဲတွင် ထည့်သွင်းထားသော digital SIM ဖြစ်ပြီး physical SIM ကဒ် မလိုဘဲ mobile ဝန်ဆောင်မှုကို အသုံးပြုနိုင်ပါသည်။"
                  />
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    number: "01",
                    title: t("Digital SIM Card", "ဒီဂျစ်တယ် SIM ကဒ်"),
                    description: t(
                      "An eSIM is a digital SIM that allows you to activate a cellular plan without using a physical SIM card.",
                      "eSIM သည် ဒီဂျစ်တယ် SIM ဖြစ်ပြီး ရုပ်ပိုင်းဆိုင်ရာ SIM ကဒ် မသုံးဘဲ မိုဘိုင်းဝန်ဆောင်မှုကို အသုံးပြုနိုင်စေသည်။",
                    ),
                    icon: <Smartphone className="h-6 w-6 text-[#00FFFF]" />,
                  },
                  {
                    number: "02",
                    title: t("Built Into Device", "စက်ထဲတွင် ထည့်သွင်းထားသည်"),
                    description: t(
                      "eSIMs are built directly into your device, saving space and allowing for multiple profiles.",
                      "eSIM များကို သင့်စက်ထဲတွင် တိုက်ရိုက်ထည့်သွင်းထားသဖြင့် နေရာကို ချွေတာပြီး ပရိုဖိုင်အများအပြားကို ခွင့်ပြုပါသည်။",
                    ),
                    icon: <Shield className="h-6 w-6 text-[#00FFFF]" />,
                  },
                  {
                    number: "03",
                    title: t("Quick Activation", "အမြန်အသုံးပြုနိုင်"),
                    description: t(
                      "Activate your eSIM instantly by scanning a QR code - no physical SIM card needed.",
                      "QR ကုဒ်ကို စကင်ဖတ်ခြင်းဖြင့် သင့် eSIM ကို ချက်ချင်းအသုံးပြုနိုင်သည် - ရုပ်ပိုင်းဆိုင်ရာ SIM ကဒ် မလိုအပ်ပါ။",
                    ),
                    icon: <Zap className="h-6 w-6 text-[#00FFFF]" />,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-[#263A49] to-[#1E2F3C] p-8 rounded-xl shadow-lg border border-[#00FFFF]/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 20px 25px -5px rgba(0, 255, 255, 0.1), 0 10px 10px -5px rgba(0, 255, 255, 0.04)",
                      borderColor: "rgba(0, 255, 255, 0.3)",
                    }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#00FFFF]/10 flex items-center justify-center mr-3">
                        {item.icon}
                      </div>
                      <div className="text-[#00FFFF] text-2xl font-bold">{item.number}</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-[#B0BEC5]">{item.description}</p>

                    {isThingyanTheme && (
                      <motion.div
                        className="absolute -bottom-1 right-4 w-2 h-2 bg-[#00FFFF] rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <FeatureSection />

        <TestimonialSection />

        <AnimatedSection>
          <section className="py-20" aria-labelledby="carriers-heading">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <motion.h2
                  id="carriers-heading"
                  className="text-3xl md:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <LocalizedText
                    en={
                      <>
                        Supported by <span className="text-[#00FFFF]">Local Carriers</span>
                      </>
                    }
                    mm={
                      <>
                        <span className="text-[#00FFFF]">ပြည်တွင်းဝန်ဆောင်မှုပေးသူများ</span>မှ ထောက်ပံ့ထားသည်
                      </>
                    }
                  />
                </motion.h2>
                <motion.p
                  className="text-xl text-[#B0BEC5] max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <LocalizedText
                    en="eSIM technology is supported by major mobile carriers in Myanmar."
                    mm="eSIM နည်းပညာကို မြန်မာနိုင်ငံရှိ အဓိက မိုဘိုင်းဝန်ဆောင်မှုပေးသူများမှ ထောက်ပံ့ထားပါသည်။"
                  />
                </motion.p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {carriers.map((carrier, index) => (
                  <motion.div
                    key={carrier.name}
                    className="bg-gradient-to-br from-[#263A49] to-[#1E2F3C] p-8 rounded-xl flex flex-col items-center justify-center h-40 border border-[#00FFFF]/10 relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 25px -5px rgba(0, 255, 255, 0.1), 0 10px 10px -5px rgba(0, 255, 255, 0.04)",
                      borderColor: "rgba(0, 255, 255, 0.3)",
                    }}
                  >
                    <div className="flex items-center justify-center mb-3">
                      <Globe className="h-8 w-8 text-[#00FFFF]/70 mr-2" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#00FFFF]">{carrier.name}</h3>

                    {isThingyanTheme && (
                      <>
                        {/* Thingyan water ripple effect */}
                        <motion.div
                          className="absolute inset-0 rounded-xl border-2 border-[#00FFFF]/20"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.1, 0.3, 0.1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: index * 0.5,
                          }}
                        />

                        {/* Water droplet animations - improved */}
                        {Array.from({ length: 3 }).map((_, i) => (
                          <motion.div
                            key={`carrier-droplet-${index}-${i}`}
                            className="absolute w-1 h-4 bg-[#00FFFF]/30 rounded-b-full"
                            style={{
                              left: `${20 + i * 20}%`,
                              top: `-5px`,
                            }}
                            animate={{
                              y: [0, 50],
                              opacity: [0.7, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: i * 0.7 + index * 0.3,
                              ease: "easeIn",
                            }}
                          />
                        ))}

                        {/* Subtle glow effect */}
                        <motion.div
                          className="absolute inset-0 bg-[#00FFFF]/5 rounded-xl"
                          animate={{
                            opacity: [0.1, 0.3, 0.1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: index * 0.2,
                          }}
                        />
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <CTASection />
      </div>
    </>
  )
}
