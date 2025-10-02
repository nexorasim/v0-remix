"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { LocalizedText } from "@/components/ui/localized-text"
import { Star } from "lucide-react"

export default function TestimonialSection() {
  const { t } = useLanguage()

  const testimonials = [
    {
      name: t("Aung Kyaw", "အောင်ကျော်"),
      role: t("Business Traveler", "စီးပွားရေးခရီးသည်"),
      content: t(
        "eSIM has completely changed how I stay connected during my international business trips. No more hunting for local SIM cards at every destination!",
        "eSIM သည် နိုင်ငံတကာ စီးပွားရေးခရီးစဉ်များအတွင်း ကျွန်ုပ် ဆက်သွယ်နေပုံကို လုံးဝပြောင်းလဲပစ်လိုက်ပါပြီ။ ခရီးစဉ်တိုင်းတွင် ပြည်တွင်း SIM ကဒ်များကို ရှာဖွေနေစရာ မလိုတော့ပါ။",
      ),
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: t("Su Myat", "စုမြတ်"),
      role: t("Tech Enthusiast", "နည်းပညာဝါသနာရှင်"),
      content: t(
        "I love how easy it is to switch between different carriers on my phone. The activation process was simple and took less than 5 minutes!",
        "ကျွန်မဖုန်းပေါ်တွင် မတူညီသော ဝန်ဆောင်မှုပေးသူများကြား ပြောင်းလဲရန် မည်မျှလွယ်ကူသည်ကို ကျွန်မ နှစ်သက်ပါသည်။ အသုံးပြုခွင့်ရရှိရန် လုပ်ငန်းစဉ်သည် ရိုးရှင်းပြီး ၅ မိနစ်ထက် မကြာပါ။",
      ),
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: t("Tun Lin Aung", "ထွန်းလင်းအောင်"),
      role: t("Digital Nomad", "ဒီဂျစ်တယ်လှည့်လည်သူ"),
      content: t(
        "As someone who works remotely while traveling, having an eSIM has been a game-changer. I can get connected immediately upon landing in a new country.",
        "ခရီးသွားရင်း အဝေးမှ အလုပ်လုပ်သူတစ်ဦးအနေဖြင့် eSIM ရှိခြင်းသည် ဂိမ်းပြောင်းလဲစေသူတစ်ဦး ဖြစ်ခဲ့ပါသည်။ နိုင်ငံအသစ်တစ်ခုသို့ ဆင်းသက်သည်နှင့် ချက်ချင်း ချိတ်ဆက်နိုင်ပါသည်။",
      ),
      rating: 4,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-24 bg-[#162430]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <LocalizedText
              en={
                <>
                  What Our <span className="text-[#00FFFF]">Users</span> Say
                </>
              }
              mm={
                <>
                  ကျွန်ုပ်တို့၏ <span className="text-[#00FFFF]">အသုံးပြုသူများ</span> ပြောကြားချက်
                </>
              }
            />
          </h2>
          <p className="text-xl text-[#B0BEC5] max-w-2xl mx-auto">
            <LocalizedText
              en="Discover how eSIM technology has transformed connectivity for our users."
              mm="eSIM နည်းပညာသည် ကျွန်ုပ်တို့၏ အသုံးပြုသူများအတွက် ချိတ်ဆက်မှုကို မည်သို့ပြောင်းလဲစေခဲ့သည်ကို လေ့လာပါ။"
            />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-[#263A49] to-[#1E2F3C] rounded-2xl overflow-hidden shadow-lg p-8 relative"
            >
              {/* Quote mark decoration */}
              <div className="absolute top-6 right-6 text-6xl text-[#00FFFF]/10 font-serif">"</div>

              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-[#1E2F3C] overflow-hidden mr-4 flex-shrink-0">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-[#B0BEC5] text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? "text-[#00FFFF] fill-[#00FFFF]" : "text-[#B0BEC5]"}`}
                  />
                ))}
              </div>

              <p className="text-[#B0BEC5] relative z-10">{testimonial.content}</p>

              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00FFFF]/30 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
