"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { LocalizedText } from "@/components/ui/localized-text"
import { useLanguage } from "@/contexts/language-context"

export default function CTASection() {
  const { t } = useLanguage()

  const benefits = [
    t("No physical SIM card needed", "ရုပ်ပိုင်းဆိုင်ရာ SIM ကဒ် မလိုအပ်ပါ"),
    t("Instant activation via QR code", "QR ကုဒ်မှတဆင့် ချက်ချင်းအသုံးပြုနိုင်"),
    t("Store multiple profiles on one device", "စက်တစ်ခုတည်းတွင် ပရိုဖိုင်အများအပြား သိမ်းဆည်းနိုင်"),
    t("Enhanced security features", "အဆင့်မြှင့်တင်ထားသော လုံခြုံရေးအင်္ဂါရပ်များ"),
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-[#1E2F3C] to-[#162430]" aria-labelledby="cta-heading">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-[#263A49] to-[#1E2F3C] rounded-3xl overflow-hidden shadow-2xl relative">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-[#00FFFF]/10 blur-3xl"
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

          <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <motion.h2
                id="cta-heading"
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <LocalizedText
                  en={
                    <>
                      Ready to Experience <span className="text-[#00FFFF]">eSIM</span> Technology?
                    </>
                  }
                  mm={
                    <>
                      <span className="text-[#00FFFF]">eSIM</span> နည်းပညာကို အသုံးပြုရန် အဆင်သင့်ဖြစ်ပြီလား?
                    </>
                  }
                />
              </motion.h2>

              <motion.p
                className="text-lg text-[#B0BEC5] mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <LocalizedText
                  en="Check if your device is compatible and start enjoying the benefits of eSIM technology today."
                  mm="သင့်စက်ပစ္စည်းသည် သဟဇာတဖြစ်မဖြစ် စစ်ဆေးပြီး ယနေ့ပင် eSIM နည်းပညာ၏ အကျိုးကျေးဇူးများကို စတင်ခံစားပါ။"
                />
              </motion.p>

              <motion.ul
                className="space-y-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Check className="h-5 w-5 text-[#00FFFF] mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                    <span className="text-[#B0BEC5]">{benefit}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link href="/compatibility" className="w-full sm:w-auto">
                  <Button className="bg-gradient-to-r from-[#00FFFF] to-[#00CCFF] text-[#1E2F3C] hover:opacity-90 px-8 py-6 text-lg rounded-lg shadow-lg shadow-[#00FFFF]/20 w-full sm:w-auto group relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      <LocalizedText en="Check Compatibility" mm="သဟဇာတဖြစ်မှုစစ်ဆေးရန်" />
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                      >
                        <ArrowRight className="h-5 w-5" aria-hidden="true" />
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
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF]/10 px-8 py-6 text-lg rounded-lg w-full sm:w-auto"
                  >
                    <LocalizedText en="Contact Us" mm="ဆက်သွယ်ရန်" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Decorative element */}
            <motion.div
              className="w-full max-w-xs aspect-square relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/20 to-[#00FFFF]/5 rounded-2xl flex items-center justify-center">
                <div className="w-3/4 h-3/4 border-4 border-dashed border-[#00FFFF]/30 rounded-2xl flex items-center justify-center">
                  <div className="w-1/2 h-1/2 bg-[#00FFFF]/10 rounded-xl flex items-center justify-center">
                    <div className="text-[#00FFFF] font-bold text-xl">eSIM</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
