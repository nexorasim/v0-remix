"use client"

import AnimatedSection from "@/components/animated-section"
import { motion } from "framer-motion"
import { CheckCircle, Users, Target, Award, TrendingUp, Globe } from "lucide-react"
import { LocalizedText } from "@/components/ui/localized-text"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  const benefits = [
    {
      title: t("Space Saving", "နေရာချွေတာခြင်း"),
      traditional: t("Physical card takes up space", "ရုပ်ပိုင်းဆိုင်ရာကဒ်သည် နေရာယူသည်"),
      esim: t("Built into your device's hardware", "သင့်စက်ပစ္စည်း၏ ဟာ့ဒ်ဝဲထဲတွင် ထည့်သွင်းထားသည်"),
    },
    {
      title: t("Activation", "အသုံးပြုခွင့်ရရှိခြင်း"),
      traditional: t("Visit store, wait for physical card", "ဆိုင်သို့သွားရောက်ပြီး ရုပ်ပိုင်းဆိုင်ရာကဒ်ကို စောင့်ဆိုင်းရသည်"),
      esim: t("Instant activation via QR code", "QR ကုဒ်မှတဆင့် ချက်ချင်းအသုံးပြုနိုင်"),
    },
    {
      title: t("Multiple Profiles", "ပရိုဖိုင်အများအပြား"),
      traditional: t("Need to swap physical cards", "ရုပ်ပိုင်းဆိုင်ရာကဒ်များကို လဲလှယ်ရန် လိုအပ်သည်"),
      esim: t("Store multiple profiles on one device", "စက်တစ်ခုတည်းတွင် ပရိုဖိုင်အများအပြား သိမ်းဆည်းနိုင်"),
    },
    {
      title: t("Durability", "ခံနိုင်ရည်ရှိမှု"),
      traditional: t("Can be damaged or lost", "ပျက်စီးနိုင် သို့မဟုတ် ပျောက်ဆုံးနိုင်"),
      esim: t("Cannot be physically damaged", "ရုပ်ပိုင်းဆိုင်ရာအရ ပျက်စီးနိုင်ခြင်း မရှိပါ"),
    },
    {
      title: t("Eco-friendly", "သဘာဝပတ်ဝန်းကျင်နှင့် သဟဇာတဖြစ်မှု"),
      traditional: t("Plastic waste", "ပလတ်စတစ်စွန့်ပစ်ပစ္စည်း"),
      esim: t("No physical materials needed", "ရုပ်ပိုင်းဆိုင်ရာပစ္စည်းများ မလိုအပ်ပါ"),
    },
  ]

  return (
    <>
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="py-16 text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 gradient-text glow-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LocalizedText
                en={
                  <>
                    About <span className="text-[#00FFFF]">eSIM Myanmar</span>
                  </>
                }
                mm={
                  <>
                    <span className="text-[#00FFFF]">eSIM Myanmar</span> အကြောင်း
                  </>
                }
              />
            </motion.h1>
            <motion.p
              className="text-xl text-[#B0BEC5] max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <LocalizedText
                en="Our mission is to bring the latest eSIM technology to Myanmar, making mobile connectivity simpler, faster, and more accessible for everyone."
                mm="ကျွန်ုပ်တို့၏ ရည်မှန်းချက်မှာ နောက်ဆုံးပေါ် eSIM နည်းပညာကို မြန်မာနိုင်ငံသို့ ယူဆောင်လာပြီး မိုဘိုင်းချိတ်ဆက်မှုကို လူတိုင်းအတွက် ပိုမိုလွယ်ကူ၊ မြန်ဆန်၊ လက်လှမ်းမီစေရန် ဖြစ်ပါသည်။"
              />
            </motion.p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="py-12" aria-labelledby="vision-mission-heading">
            <h2 id="vision-mission-heading" className="text-3xl font-bold mb-12 text-center">
              <LocalizedText
                en={
                  <>
                    Our <span className="text-[#00FFFF]">Vision & Mission</span>
                  </>
                }
                mm={
                  <>
                    ကျွန်ုပ်တို့၏ <span className="text-[#00FFFF]">မျှော်မှန်းချက်နှင့် ရည်မှန်းချက်</span>
                  </>
                }
              />
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                className="bg-gradient-to-br from-[#263A49] to-[#1E2F3C] p-8 rounded-xl border border-[#00FFFF]/10 shadow-lg relative overflow-hidden group"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  boxShadow: "0 20px 25px -5px rgba(0, 255, 255, 0.1), 0 10px 10px -5px rgba(0, 255, 255, 0.04)",
                  borderColor: "rgba(0, 255, 255, 0.3)",
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FFFF]/5 rounded-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-[#00FFFF]/10" />

                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#00FFFF]/10 flex items-center justify-center mr-4">
                      <Target className="h-6 w-6 text-[#00FFFF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#00FFFF]">
                      <LocalizedText en="Vision" mm="မျှော်မှန်းချက်" />
                    </h3>
                  </div>
                  <p className="text-[#B0BEC5]">
                    <LocalizedText
                      en="To transform the mobile connectivity landscape in Myanmar by making eSIM technology the standard, eliminating the need for physical SIM cards and simplifying the way people connect."
                      mm="eSIM နည်းပညာကို စံအဖြစ်သတ်မှတ်ခြင်းဖြင့် မြန်မာနိုင်ငံရှိ မိုဘိုင်းချိတ်ဆက်မှုနယ်ပယ်ကို ပြောင်းလဲရန်၊ ရုပ်ပိုင်းဆိုင်ရာ SIM ကဒ်များ လိုအပ်ချက်ကို ဖယ်ရှားရန်နှင့် လူများ ချိတ်ဆက်သည့်နည်းလမ်းကို ရိုးရှင်းစေရန်။"
                    />
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00FFFF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-[#263A49] to-[#1E2F3C] p-8 rounded-xl border border-[#00FFFF]/10 shadow-lg relative overflow-hidden group"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  boxShadow: "0 20px 25px -5px rgba(0, 255, 255, 0.1), 0 10px 10px -5px rgba(0, 255, 255, 0.04)",
                  borderColor: "rgba(0, 255, 255, 0.3)",
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FFFF]/5 rounded-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-[#00FFFF]/10" />

                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#00FFFF]/10 flex items-center justify-center mr-4">
                      <Award className="h-6 w-6 text-[#00FFFF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#00FFFF]">
                      <LocalizedText en="Mission" mm="ရည်မှန်းချက်" />
                    </h3>
                  </div>
                  <p className="text-[#B0BEC5]">
                    <LocalizedText
                      en="To educate and empower Myanmar citizens about eSIM technology, provide comprehensive compatibility information, and facilitate the adoption of eSIMs across all major carriers in the country."
                      mm="မြန်မာနိုင်ငံသားများအား eSIM နည်းပညာအကြောင်း ပညာပေးရန်နှင့် စွမ်းဆောင်ရည်မြှင့်တင်ရန်၊ ပြည့်စုံသော သဟဇာတဖြစ်မှုအချက်အလက်များ ပေးအပ်ရန်နှင့် နိုင်ငံရှိ အဓိကဝန်ဆောင်မှုပေးသူများအားလုံးတွင် eSIM များ အသုံးပြုမှုကို အထောက်အကူပြုရန်။"
                    />
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00FFFF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="py-16" aria-labelledby="comparison-heading">
            <h2 id="comparison-heading" className="text-3xl font-bold mb-12 text-center">
              <LocalizedText
                en={
                  <>
                    eSIM vs <span className="text-[#00FFFF]">Traditional SIM</span>
                  </>
                }
                mm={
                  <>
                    eSIM နှင့် <span className="text-[#00FFFF]">ရိုးရိုး SIM</span> နှိုင်းယှဉ်ချက်
                  </>
                }
              />
            </h2>

            <div className="bg-gradient-to-br from-[#263A49] to-[#1E2F3C] rounded-xl border border-[#00FFFF]/10 shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-[#1E2F3C] p-4 border-b border-[#00FFFF]/20">
                <div className="font-bold text-lg">
                  <LocalizedText en="Feature" mm="လုပ်ဆောင်ချက်" />
                </div>
                <div className="font-bold text-lg">
                  <LocalizedText en="Traditional SIM" mm="ရိုးရိုး SIM" />
                </div>
                <div className="font-bold text-lg text-[#00FFFF]">eSIM</div>
              </div>

              <div className="divide-y divide-[#00FFFF]/10">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="grid grid-cols-3 p-4 hover:bg-[#00FFFF]/5 transition-colors"
                  >
                    <div className="font-medium">{benefit.title}</div>
                    <div className="text-[#B0BEC5] flex items-center">
                      <span>{benefit.traditional}</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#00FFFF] mr-2 flex-shrink-0" />
                      <span>{benefit.esim}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="py-16" aria-labelledby="why-choose-heading">
            <div className="bg-gradient-to-br from-[#263A49] to-[#1E2F3C] p-12 rounded-xl border border-[#00FFFF]/10 shadow-lg text-center relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-[#00FFFF]/5 blur-3xl"
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

              <div className="relative z-10">
                <h2 id="why-choose-heading" className="text-3xl font-bold mb-6">
                  <LocalizedText
                    en={
                      <>
                        Why Choose <span className="text-[#00FFFF]">eSIM Myanmar</span>?
                      </>
                    }
                    mm={
                      <>
                        ဘာကြောင့် <span className="text-[#00FFFF]">eSIM Myanmar</span> ကို ရွေးချယ်သင့်သလဲ?
                      </>
                    }
                  />
                </h2>
                <p className="text-[#B0BEC5] max-w-3xl mx-auto mb-12">
                  <LocalizedText
                    en="We are dedicated to providing comprehensive information and support for eSIM technology in Myanmar. Our team stays up-to-date with the latest developments to ensure you have access to accurate and helpful resources."
                    mm="ကျွန်ုပ်တို့သည် မြန်မာနိုင်ငံတွင် eSIM နည်းပညာအတွက် ပြည့်စုံသော အချက်အလက်နှင့် အထောက်အပံ့ပေးရန် အာရုံစိုက်ထားပါသည်။ သင့်အနေဖြင့် တိကျပြီး အသုံးဝင်သော အရင်းအမြစ်များကို လက်လှမ်းမီနိုင်စေရန် ကျွန်ုပ်တို့အဖွဲ့သည် နောက်ဆုံးပေါ် ဖွံ့ဖြိုးတိုးတက်မှုများနှင့် အမြဲအညီဖြစ်အောင် ထားရှိပါသည်။"
                  />
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  {[
                    {
                      icon: <Users className="h-6 w-6 text-[#00FFFF]" />,
                      title: t("Expert Knowledge", "ကျွမ်းကျင်သော အသိပညာ"),
                      description: t(
                        "Our team specializes in eSIM technology and stays current with the latest developments.",
                        "ကျွန်ုပ်တို့အဖွဲ့သည် eSIM နည်းပညာတွင် အထူးပြုပြီး နောက်ဆုံးပေါ် ဖွံ့ဖြိုးတိုးတက်မှုများနှင့် အမြဲအညီဖြစ်အောင် ထားရှိပါသည်။",
                      ),
                    },
                    {
                      icon: <Globe className="h-6 w-6 text-[#00FFFF]" />,
                      title: t("Local Support", "ပြည်တွင်းအထောက်အပံ့"),
                      description: t(
                        "We provide information specific to the Myanmar market and local carriers.",
                        "ကျွန်ုပ်တို့သည် မြန်မာဈေးကွက်နှင့် ပြည်တွင်းဝန်ဆောင်မှုပေးသူများအတွက် သီးသန့်အချက်အလက်များ ပေးအပ်ပါသည်။",
                      ),
                    },
                    {
                      icon: <TrendingUp className="h-6 w-6 text-[#00FFFF]" />,
                      title: t("Comprehensive Resources", "ပြည့်စုံသော အရင်းအမြစ်များ"),
                      description: t(
                        "Access detailed guides, compatibility information, and troubleshooting tips.",
                        "အသေးစိတ်လမ်းညွှန်ချက်များ၊ သဟဇာတဖြစ်မှုအချက်အလက်များနှင့် ပြဿနာဖြေရှင်းရေးအကြံပြုချက်များကို လက်လှမ်းမီပါ။",
                      ),
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="bg-[#1E2F3C] p-6 rounded-lg border border-[#00FFFF]/10 group hover:border-[#00FFFF]/30 transition-colors duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="w-14 h-14 rounded-full bg-[#263A49] flex items-center justify-center mb-4 group-hover:bg-[#00FFFF]/10 transition-colors duration-300">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-[#00FFFF]">{item.title}</h3>
                      <p className="text-[#B0BEC5]">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  )
}
