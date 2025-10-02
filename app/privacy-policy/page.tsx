"use client"

import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import { LocalizedText } from "@/components/ui/localized-text"
import { useLanguage } from "@/contexts/language-context"
import { Shield, Lock, FileText, Eye, Users, Clock, AlertTriangle } from "lucide-react"

export default function PrivacyPolicyPage() {
  const { t } = useLanguage()

  const sections = [
    {
      icon: <Shield className="h-6 w-6 text-[#00FFFF]" />,
      title: t("Information We Collect", "ကျွန်ုပ်တို့ စုဆောင်းသော အချက်အလက်များ"),
      content: t(
        "We collect personal information that you voluntarily provide to us when you use our services, such as your name, phone number, email address, and device information. We also collect information about how you use our services, including your browsing history, IP address, and device identifiers.",
        "သင် ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများကို အသုံးပြုသောအခါ သင်၏အမည်၊ ဖုန်းနံပါတ်၊ အီးမေးလ်လိပ်စာနှင့် စက်ပစ္စည်းအချက်အလက်များကဲ့သို့ သင်မိမိဆန္ဒအလျောက် ပေးအပ်သော ကိုယ်ရေးအချက်အလက်များကို ကျွန်ုပ်တို့ စုဆောင်းပါသည်။ သင်၏ ရှာဖွေမှုမှတ်တမ်း၊ IP လိပ်စာနှင့် စက်ပစ္စည်း အိုင်ဒီများအပါအဝင် သင် ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများကို မည်သို့အသုံးပြုသည်ဆိုသည့် အချက်အလက်များကိုလည်း ကျွန်ုပ်တို့ စုဆောင်းပါသည်။",
      ),
    },
    {
      icon: <Lock className="h-6 w-6 text-[#00FFFF]" />,
      title: t("How We Use Your Information", "သင့်အချက်အလက်များကို ကျွန်ုပ်တို့ မည်သို့အသုံးပြုသည်"),
      content: t(
        "We use your information to provide, maintain, and improve our services, to communicate with you, to process your transactions, and to comply with legal obligations. We may also use your information to personalize your experience, to develop new features, and to protect our rights and interests.",
        "ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများကို ပေးအပ်ရန်၊ ထိန်းသိမ်းရန်နှင့် တိုးတက်စေရန်၊ သင်နှင့် ဆက်သွယ်ရန်၊ သင်၏ငွေပေးချေမှုများကို ဆောင်ရွက်ရန်နှင့် ဥပဒေဆိုင်ရာ တာဝန်ဝတ္တရားများကို လိုက်နာရန် သင့်အချက်အလက်များကို ကျွန်ုပ်တို့ အသုံးပြုပါသည်။ သင်၏အတွေ့အကြုံကို ကိုယ်ပိုင်ပြုလုပ်ရန်၊ အင်္ဂါရပ်အသစ်များ ဖွံ့ဖြိုးစေရန်နှင့် ကျွန်ုပ်တို့၏ အခွင့်အရေးများနှင့် အကျိုးစီးပွားများကို ကာကွယ်ရန်အတွက်လည်း သင့်အချက်အလက်များကို ကျွန်ုပ်တို့ အသုံးပြုနိုင်ပါသည်။",
      ),
    },
    {
      icon: <FileText className="h-6 w-6 text-[#00FFFF]" />,
      title: t("Information Sharing", "အချက်အလက်မျှဝေခြင်း"),
      content: t(
        "We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, and customer service. We may also share your information with our business partners, with your consent, or as required by law. We do not sell your personal information to third parties.",
        "ငွေပေးချေမှုဆောင်ရွက်ခြင်း၊ ဒေတာခွဲခြမ်းစိတ်ဖြာခြင်းနှင့် ဖောက်သည်ဝန်ဆောင်မှုကဲ့သို့ ကျွန်ုပ်တို့ကိုယ်စား ဝန်ဆောင်မှုများ ဆောင်ရွက်ပေးသော တတိယပါတီ ဝန်ဆောင်မှုပေးသူများနှင့် သင့်အချက်အလက်များကို ကျွန်ုပ်တို့ မျှဝေနိုင်ပါသည်။ သင်၏သဘောတူညီချက်ဖြင့် သို့မဟုတ် ဥပဒေအရ လိုအပ်သည့်အတိုင်း ကျွန်ုပ်တို့၏ စီးပွားရေးမိတ်ဖက်များနှင့်လည်း သင့်အချက်အလက်များကို ကျွန်ုပ်တို့ မျှဝေနိုင်ပါသည်။ သင်၏ကိုယ်ရေးအချက်အလက်များကို တတိယပါတီများထံ ကျွန်ုပ်တို့ ရောင်းချခြင်း မရှိပါ။",
      ),
    },
    {
      icon: <Eye className="h-6 w-6 text-[#00FFFF]" />,
      title: t("Cookies and Tracking Technologies", "ကွတ်ကီးများနှင့် ခြေရာခံနည်းပညာများ"),
      content: t(
        "We use cookies and similar tracking technologies to collect information about your browsing activities and to remember your preferences. You can control cookies through your browser settings, but disabling cookies may limit your ability to use some features of our services.",
        "သင်၏ရှာဖွေမှုလုပ်ဆောင်ချက်များအကြောင်း အချက်အလက်များကို စုဆောင်းရန်နှင့် သင်၏ဦးစားပေးမှုများကို မှတ်ထားရန် ကျွန်ုပ်တို့သည် ကွတ်ကီးများနှင့် အလားတူ ခြေရာခံနည်းပညာများကို အသုံးပြုပါသည်။ သင်၏ဘရောက်ဇာဆက်တင်များမှတဆင့် ကွတ်ကီးများကို ထိန်းချုပ်နိုင်သော်လည်း ကွတ်ကီးများကို ပိတ်ခြင်းသည် ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများ၏ အင်္ဂါရပ်အချို့ကို အသုံးပြုနိုင်မှုကို ကန့်သတ်နိုင်ပါသည်။",
      ),
    },
    {
      icon: <Users className="h-6 w-6 text-[#00FFFF]" />,
      title: t("Children's Privacy", "ကလေးများ၏ ကိုယ်ရေးလုံခြုံမှု"),
      content: t(
        "Our services are not intended for children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete that information as soon as possible.",
        "ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများသည် အသက် ၁၃ နှစ်အောက် ကလေးများအတွက် ရည်ရွယ်ထားခြင်း မဟုတ်ပါ၊ ထို့ပြင် အသက် ၁၃ နှစ်အောက် ကလေးများထံမှ ကိုယ်ရေးအချက်အလက်များကို သိလျက်နှင့် ကျွန်ုပ်တို့ စုဆောင်းခြင်း မရှိပါ။ အသက် ၁၃ နှစ်အောက် ကလေးတစ်ဦးထံမှ ကိုယ်ရေးအချက်အလက်များကို ကျွန်ုပ်တို့ စုဆောင်းထားကြောင်း သိရှိပါက ထိုအချက်အလက်များကို တတ်နိုင်သမျှ မြန်မြန် ဖျက်ပစ်ရန် ကျွန်ုပ်တို့ အဆင့်များ လုပ်ဆောင်ပါမည်။",
      ),
    },
    {
      icon: <Clock className="h-6 w-6 text-[#00FFFF]" />,
      title: t("Data Retention", "ဒေတာထိန်းသိမ်းခြင်း"),
      content: t(
        "We retain your personal information for as long as necessary to fulfill the purposes for which we collected it, including to satisfy legal, accounting, or reporting requirements. When we no longer need your personal information, we will securely delete or anonymize it.",
        "ဥပဒေရေးရာ၊ စာရင်းကိုင် သို့မဟုတ် အစီရင်ခံခြင်းဆိုင်ရာ လိုအပ်ချက်များကို ပြည့်မီစေရန်အပါအဝင် ကျွန်ုပ်တို့ စုဆောင်းခဲ့သည့် ရည်ရွယ်ချက်များကို ဖြည့်ဆည်းရန် လိုအပ်သမျှကာလပတ်လုံး သင်၏ကိုယ်ရေးအချက်အလက်များကို ကျွန်ုပ်တို့ ထိန်းသိမ်းထားပါသည်။ သင်၏ကိုယ်ရေးအချက်အလက်များ မလိုအပ်တော့သောအခါ ၎င်းတို့ကို လုံခြုံစွာ ဖျက်ပစ်ပါမည် သို့မဟုတ် အမည်မဖော်ဘဲ ထားရှိပါမည်။",
      ),
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-[#00FFFF]" />,
      title: t("Changes to This Privacy Policy", "ဤကိုယ်ရေးအချက်အလက်မူဝါဒအပေါ် ပြောင်းလဲမှုများ"),
      content: t(
        "We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date.",
        "ကျွန်ုပ်တို့၏ လုပ်ထုံးလုပ်နည်းများတွင် ပြောင်းလဲမှုများကို ထင်ဟပ်စေရန် သို့မဟုတ် အခြားလုပ်ငန်းလည်ပတ်မှု၊ ဥပဒေရေးရာ သို့မဟုတ် စည်းမျဉ်းစည်းကမ်းဆိုင်ရာ အကြောင်းပြချက်များအတွက် ဤကိုယ်ရေးအချက်အလက်မူဝါဒကို အခါအားလျော်စွာ ကျွန်ုပ်တို့ အပ်ဒိတ်လုပ်နိုင်ပါသည်။ ဤစာမျက်နှာပေါ်တွင် ကိုယ်ရေးအချက်အလက်မူဝါဒအသစ်ကို တင်ခြင်းနှင့် 'နောက်ဆုံးအပ်ဒိတ်' ရက်စွဲကို မွမ်းမံခြင်းဖြင့် အရေးပါသော ပြောင်းလဲမှုများကို ကျွန်ုပ်တို့ အသိပေးပါမည်။",
      ),
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <div className="py-16 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 gradient-text glow-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LocalizedText en="Privacy Policy" mm="ကိုယ်ရေးအချက်အလက်မူဝါဒ" />
          </motion.h1>
          <motion.p
            className="text-xl text-[#B0BEC5] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <LocalizedText en="Last Updated: April 2, 2023" mm="နောက်ဆုံးအပ်ဒိတ်: ဧပြီ ၂၊ ၂၀၂၃" />
          </motion.p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="py-8 max-w-4xl mx-auto">
          <p className="text-[#B0BEC5] mb-6">
            <LocalizedText
              en="This Privacy Policy describes how eSIM Myanmar ('we', 'our', or 'us') collects, uses, and shares your personal information when you use our website, mobile applications, and services (collectively, the 'Services')."
              mm="ဤကိုယ်ရေးအချက်အလက်မူဝါဒသည် သင် ကျွန်ုပ်တို့၏ ဝဘ်ဆိုဒ်၊ မိုဘိုင်းအပ်ပလီကေးရှင်းများနှင့် ဝန်ဆောင်မှုများ (စုပေါင်း၍ 'ဝန်ဆောင်မှုများ') ကို အသုံးပြုသောအခါ eSIM Myanmar ('ကျွန်ုပ်တို့'၊ 'ကျွန်ုပ်တို့၏' သို့မဟုတ် 'ကျွန်ုပ်တို့ကို') သည် သင်၏ကိုယ်ရေးအချက်အလက်များကို မည်သို့စုဆောင်း၊ အသုံးပြု၊ မျှဝေသည်ကို ဖော်ပြပါသည်။"
            />
          </p>

          <div className="bg-gradient-to-br from-[#263A49] to-[#1E2F3C] p-8 rounded-xl border border-[#00FFFF]/10 shadow-lg mb-12">
            <p className="text-[#B0BEC5]">
              <LocalizedText
                en="By using our Services, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our Services."
                mm="ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများကို အသုံးပြုခြင်းဖြင့် ဤကိုယ်ရေးအချက်အလက်မူဝါဒနှင့်အညီ အချက်အလက်များ စုဆောင်းခြင်းနှင့် အသုံးပြုခြင်းကို သင် သဘောတူပါသည်။ ကျွန်ုပ်တို့၏ မူဝါဒများနှင့် လုပ်ထုံးလုပ်နည်းများကို သင် သဘောမတူပါက ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများကို အသုံးမပြုပါနှင့်။"
              />
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#1E2F3C] p-8 rounded-xl border border-[#00FFFF]/10 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#263A49] flex items-center justify-center mr-4">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
                <p className="text-[#B0BEC5]">{section.content}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-[#263A49] to-[#1E2F3C] p-8 rounded-xl border border-[#00FFFF]/10 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              <LocalizedText en="Contact Us" mm="ကျွန်ုပ်တို့ကို ဆက်သွယ်ရန်" />
            </h2>
            <p className="text-[#B0BEC5] mb-4">
              <LocalizedText
                en="If you have any questions about this Privacy Policy, please contact us at:"
                mm="ဤကိုယ်ရေးအချက်အလက်မူဝါဒနှင့်ပတ်သက်၍ မေးခွန်းများရှိပါက ကျွန်ုပ်တို့ကို အောက်ပါလိပ်စာတွင် ဆက်သွယ်ပါ-"
              />
            </p>
            <ul className="text-[#B0BEC5] space-y-2">
              <li>
                <LocalizedText en="Email: info@esim.com.mm" mm="အီးမေးလ်: info@esim.com.mm" />
              </li>
              <li>
                <LocalizedText en="Phone: 09650000172" mm="ဖုန်း: 09650000172" />
              </li>
              <li>
                <LocalizedText en="Website: esim.com.mm" mm="ဝဘ်ဆိုဒ်: esim.com.mm" />
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
