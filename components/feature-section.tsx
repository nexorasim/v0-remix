"use client"

import { motion, useInView } from "framer-motion"
import { Smartphone, Zap, Shield, Globe, RefreshCw, Wifi } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { LocalizedText } from "@/components/ui/localized-text"
import { useRef } from "react"

export default function FeatureSection() {
  const { t } = useLanguage()
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" })

  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-[#00FFFF]" />,
      title: t("Multiple Profiles", "ပရိုဖိုင်အများအပြား"),
      description: t(
        "Store and switch between multiple carrier profiles on a single device.",
        "စက်တစ်ခုတည်းတွင် ဝန်ဆောင်မှုပေးသူ ပရိုဖိုင်အများအပြားကို သိမ်းဆည်းပြီး ပြောင်းလဲအသုံးပြုနိုင်သည်။",
      ),
    },
    {
      icon: <Zap className="h-8 w-8 text-[#00FFFF]" />,
      title: t("Instant Activation", "ချက်ချင်းအသုံးပြုနိုင်"),
      description: t(
        "Activate your mobile plan instantly by scanning a QR code.",
        "QR ကုဒ်ကို စကင်ဖတ်ခြင်းဖြင့် သင့်မိုဘိုင်းအစီအစဉ်ကို ချက်ချင်းအသုံးပြုနိုင်သည်။",
      ),
    },
    {
      icon: <Shield className="h-8 w-8 text-[#00FFFF]" />,
      title: t("Enhanced Security", "လုံခြုံမှုပိုမိုကောင်းမွန်"),
      description: t(
        "eSIMs cannot be physically removed or stolen, providing better security.",
        "eSIM များကို ရုပ်ပိုင်းဆိုင်ရာအရ ဖယ်ရှားခြင်း သို့မဟုတ် ခိုးယူခြင်း မပြုလုပ်နိုင်သဖြင့် ပိုမိုလုံခြုံမှုရှိသည်။",
      ),
    },
    {
      icon: <Globe className="h-8 w-8 text-[#00FFFF]" />,
      title: t("Global Compatibility", "ကမ္ဘာလုံးဆိုင်ရာ သဟဇာတဖြစ်မှု"),
      description: t(
        "Use your eSIM with carriers worldwide for seamless international connectivity.",
        "ချောမွေ့သော နိုင်ငံတကာ ချိတ်ဆက်မှုအတွက် သင့် eSIM ကို ကမ္ဘာတစ်ဝှမ်းရှိ ဝန်ဆောင်မှုပေးသူများနှင့် အသုံးပြုပါ။",
      ),
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-[#00FFFF]" />,
      title: t("Easy Switching", "လွယ်ကူစွာ ပြောင်းလဲနိုင်"),
      description: t(
        "Switch between different mobile plans without changing physical SIM cards.",
        "ရုပ်ပိုင်းဆိုင်ရာ SIM ကဒ်များ ပြောင်းလဲစရာမလိုဘဲ မတူညီသော မိုဘိုင်းအစီအစဉ်များကြား ပြောင်းလဲနိုင်သည်။",
      ),
    },
    {
      icon: <Wifi className="h-8 w-8 text-[#00FFFF]" />,
      title: t("Remote Provisioning", "အဝေးမှ ပေးအပ်ခြင်း"),
      description: t(
        "Update your mobile plan remotely without visiting a physical store.",
        "ရုပ်ပိုင်းဆိုင်ရာ ဆိုင်သို့ သွားရောက်စရာမလိုဘဲ သင့်မိုဘိုင်းအစီအစဉ်ကို အဝေးမှ အပ်ဒိတ်လုပ်နိုင်သည်။",
      ),
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#162430] to-[#1E2F3C] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#1E2F3C] opacity-50"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
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

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#00FFFF]/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1 rounded-full bg-[#00FFFF]/10 border border-[#00FFFF]/20 text-[#00FFFF] text-sm font-medium"
          >
            <LocalizedText en="Why Choose eSIM" mm="eSIM ကို ဘာကြောင့်ရွေးချယ်သင့်သလဲ" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <LocalizedText
              en={
                <>
                  Why Choose <span className="text-[#00FFFF]">eSIM</span> Technology?
                </>
              }
              mm={
                <>
                  ဘာကြောင့် <span className="text-[#00FFFF]">eSIM</span> နည်းပညာကို ရွေးချယ်သင့်သလဲ?
                </>
              }
            />
          </h2>
          <p className="text-xl text-[#B0BEC5] max-w-2xl mx-auto">
            <LocalizedText
              en="eSIM technology offers numerous advantages over traditional physical SIM cards."
              mm="eSIM နည်းပညာသည် ရိုးရိုး physical SIM ကဒ်များထက် အားသာချက်များစွာ ပေးစွမ်းပါသည်။"
            />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-[#263A49] to-[#1E2F3C] rounded-2xl overflow-hidden shadow-lg group relative"
            >
              {/* Card content */}
              <div className="p-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#1E2F3C] flex items-center justify-center mb-6 group-hover:bg-[#00FFFF]/10 transition-colors duration-300 relative">
                  {feature.icon}

                  {/* Animated pulse */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border border-[#00FFFF]/30 opacity-0 group-hover:opacity-100"
                    animate={{ scale: [1, 1.2, 1], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#00FFFF] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[#B0BEC5]">{feature.description}</p>
              </div>

              {/* Bottom glow effect */}
              <div className="h-2 w-full bg-gradient-to-r from-transparent via-[#00FFFF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Background pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                <div className="absolute inset-0 grid grid-cols-4 gap-2">
                  {Array.from({ length: 4 }).map((_, colIndex) => (
                    <div key={colIndex} className="h-full w-full border-r border-[#00FFFF]/20"></div>
                  ))}
                </div>
                <div className="absolute inset-0 grid grid-rows-4 gap-2">
                  {Array.from({ length: 4 }).map((_, rowIndex) => (
                    <div key={rowIndex} className="h-full w-full border-b border-[#00FFFF]/20"></div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
