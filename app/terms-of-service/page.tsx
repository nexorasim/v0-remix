"use client"

import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import { LocalizedText } from "@/components/ui/localized-text"
import { useLanguage } from "@/contexts/language-context"
import { FileText, Scale, ShieldCheck, AlertCircle, Zap, Bookmark, HelpCircle } from "lucide-react"

export default function TermsOfServicePage() {
  const { t } = useLanguage()

  const sections = [
    {
      icon: <FileText className="h-6 w-6 text-[#00FFFF]" />,
      title: t("Acceptance of Terms", "စည်းကမ်းချက်များကို လက်ခံခြင်း"),
      content: t(
        "By accessing or using our Services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our Services.",
        "ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများကို ဝင်ရောက်အသုံးပြုခြင်းဖြင့် ဤဝန်ဆောင်မှုစည်းကမ်းချက်များနှင့် သက်ဆိုင်ရာ ဥပဒေများနှင့် စည်းမျဉ်းများအားလုံးကို လိုက်နာရန် သင် သဘောတူပါသည်။ ဤစည်းကမ်းချက်များထဲမှ တစ်ခုခုကို သင် သဘောမတူပါက ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများကို အသုံးပြုခြင်း သို့မဟုတ် ဝင်ရောက်ခြင်းမှ တားမြစ်ထားပါသည်။",
      ),
    },
    {
      icon: <Scale className="h-6 w-6 text-[#00FFFF]" />,
      title: t("Use License", "အသုံးပြုခွင့်လိုင်စင်"),
      content: t(
        "We grant you a limited, non-exclusive, non-transferable, revocable license to use our Services for your personal, non-commercial use. You may not copy, modify, distribute, sell, or lease any part of our Services or included software, nor may you reverse engineer or attempt to extract the source code of that software, unless laws prohibit those restrictions or you have our written permission.",
        "ကျွန်ုပ်တို့သည် သင့်အား ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများကို သင်၏ကိုယ်ပိုင်၊ စီးပွားဖြစ်မဟုတ်သော အသုံးပြုမှုအတွက် ကန့်သတ်ထားသော၊ တစ်ဦးတည်းမဟုတ်သော၊ လွှဲပြောင်း၍မရသော၊ ပြန်လည်ရုပ်သိမ်းနိုင်သော လိုင်စင်တစ်ခု ပေးအပ်ပါသည်။ ဥပဒေများက ထိုကန့်သတ်ချက်များကို တားမြစ်ထားခြင်း သို့မဟုတ် သင့်တွင် ကျွန်ုပ်တို့၏ စာဖြင့်ရေးသားထားသော ခွင့်ပြုချက်ရှိခြင်း မရှိပါက ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများ သို့မဟုတ် ပါဝင်သော ဆော့ဖ်ဝဲလ်၏ မည်သည့်အစိတ်အပိုင်းကိုမျှ ကူးယူခြင်း၊ ပြင်ဆင်ခြင်း၊ ဖြန့်ဖြူးခြင်း၊ ရောင်းချခြင်း သို့မဟုတ် ငှားရမ်းခြင်း မပြုလုပ်ရ၊ ထို့အပြင် ထိုဆော့ဖ်ဝဲလ်၏ ရင်းမြစ်ကုဒ်ကို ပြန်ပြောင်းအင်ဂျင်နီယာလုပ်ခြင်း သို့မဟုတ် ထုတ်ယူရန် ကြိုးစားခြင်း မပြုလုပ်ရပါ။",
      ),
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-[#00FFFF]" />,
      title: t("User Accounts", "အသုံးပြုသူအကောင့်များ"),
      content: t(
        "When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding the password that you use to access our Services and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.",
        "သင် ကျွန်ုပ်တို့နှင့်အတူ အကောင့်တစ်ခု ဖန်တီးသောအခါ တိကျ၊ ပြည့်စုံပြီး လက်ရှိအချက်အလက်များကို ပေးအပ်ရမည်။ ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများကို ဝင်ရောက်ရန် သင်အသုံးပြုသော စကားဝှက်နှင့် သင့်စကားဝှက်အောက်ရှိ မည်သည့်လုပ်ဆောင်ချက်များ သို့မဟုတ် လုပ်ဆောင်ချက်များအတွက်မဆို သင်တာဝန်ရှိသည်။ သင့်စကားဝှက်ကို မည်သည့်တတိယပါတီကိုမျှ ထုတ်ဖော်ခြင်းမပြုရန် သင် သဘောတူပါသည်။ လုံခြုံရေးချိုးဖောက်မှု သို့မဟုတ် သင့်အကောင့်၏ ခွင့်ပြုချက်မရှိသော အသုံးပြုမှုကို သိရှိလာပါက ချက်ချင်း ကျွန်ုပ်တို့ကို အကြောင်းကြားရမည်။",
      ),
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-[#00FFFF]" />,
      title: t("Prohibited Uses", "တားမြစ်ထားသော အသုံးပြုမှုများ"),
      content: t(
        "You may use our Services only for lawful purposes and in accordance with these Terms of Service. You agree not to use our Services to engage in any illegal or unauthorized activity, to infringe upon any third party's intellectual property rights, to transmit harmful code or malware, or to interfere with the operation of our Services.",
        "ဤဝန်ဆောင်မှုစည်းကမ်းချက်များနှင့်အညီ တရားဝင်ရည်ရွယ်ချက်များအတွက်သာ ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများကို သင် အသုံးပြုနိုင်ပါသည်။ မည်သည့်တရားမဝင် သို့မဟုတ် ခွင့်ပြုချက်မရှိသော လုပ်ဆောင်ချက်တွင်မဆို ပါဝင်ရန်၊ မည်သည့်တတိယပါတီ၏ ဉာဏပစ္စည်းဆိုင်ရာ အခွင့်အရေးများကိုမဆို ချိုးဖောက်ရန်၊ အန္တရာယ်ရှိသော ကုဒ် သို့မဟုတ် မော်လ်ဝဲလ်ကို ထုတ်လွှင့်ရန် သို့မဟုတ် ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများ၏ လုပ်ဆောင်မှုကို ဝင်ရောက်စွက်ဖက်ရန် ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများကို အသုံးမပြုရန် သင် သဘောတူပါသည်။",
      ),
    },
    {
      icon: <Zap className="h-6 w-6 text-[#00FFFF]" />,
      title: t("Service Modifications", "ဝန်ဆောင်မှုပြင်ဆင်မှုများ"),
      content: t(
        "We reserve the right to modify or discontinue, temporarily or permanently, our Services (or any part thereof) with or without notice. We shall not be liable to you or to any third party for any modification, suspension, or discontinuance of our Services.",
        "အသိပေးချက်ဖြင့်ဖြစ်စေ၊ အသိပေးချက်မရှိဘဲဖြစ်စေ ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများ (သို့မဟုတ် ၎င်း၏မည်သည့်အစိတ်အပိုင်းကိုမဆို) ကို ယာယီဖြစ်စေ၊ အမြဲတမ်းဖြစ်စေ ပြင်ဆင်ရန် သို့မဟုတ် ရပ်ဆိုင်းရန် အခွင့်အရေးကို ကျွန်ုပ်တို့ ထိန်းသိမ်းထားပါသည်။ ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများကို ပြင်ဆင်ခြင်း၊ ဆိုင်းငံ့ခြင်း သို့မဟုတ် ရပ်ဆိုင်းခြင်းအတွက် သင့်အပေါ် သို့မဟုတ် မည်သည့်တတိယပါတီအပေါ်မဆို ကျွန်ုပ်တို့တွင် တာဝန်မရှိပါ။",
      ),
    },
    {
      icon: <Bookmark className="h-6 w-6 text-[#00FFFF]" />,
      title: t("Intellectual Property", "ဉာဏပစ္စည်းဆိုင်ရာ"),
      content: t(
        "Our Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by us, our licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.",
        "ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများနှင့် ၎င်းတို့၏ အကြောင်းအရာ၊ အင်္ဂါရပ်များနှင့် လုပ်ဆောင်နိုင်စွမ်းအားလုံး (အချက်အလက်၊ ဆော့ဖ်ဝဲလ်၊ စာသား၊ ပြသမှုများ၊ ပုံရိပ်များ၊ ဗီဒီယိုနှင့် အသံ၊ ထို့အပြင် ၎င်းတို့၏ ဒီဇိုင်း၊ ရွေးချယ်မှုနှင့် စီစဉ်မှုအားလုံး အပါအဝင်သော်လည်း ကန့်သတ်မထားပါ) သည် ကျွန်ုပ်တို့၊ ကျွန်ုပ်တို့၏ လိုင်စင်ပေးသူများ သို့မဟုတ် ထိုကဲ့သို့သော အရာဝတ္ထုများ၏ အခြားပေးသွင်းသူများပိုင်ဆိုင်ပြီး မူပိုင်ခွင့်၊ ကုန်အမှတ်တံဆိပ်၊ ပိုင်ဆိုင်မှုမှတ်ပုံတင်၊ ကုန်သွယ်မှုလျှို့ဝှက်ချက်နှင့် အခြားဉာဏပစ္စည်းဆိုင်ရာ သို့မဟုတ် ပိုင်ဆိုင်မှုအခွင့်အရေးဥပဒေများဖြင့် ကာကွယ်ထားပါသည်။",
      ),
    },
    {
      icon: <HelpCircle className="h-6 w-6 text-[#00FFFF]" />,
      title: t("Disclaimer of Warranties", "အာမခံချက်များကို ငြင်းဆိုခြင်း"),
      content: t(
        "Our Services are provided 'as is' and 'as available' without any representations or warranties, express or implied. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of our Services or the information, products, services, or related graphics contained on our Services for any purpose.",
        "ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများကို မည်သည့်ကိုယ်စားပြုမှုများ သို့မဟုတ် အာမခံချက်များမျှမရှိဘဲ 'ရှိသည့်အတိုင်း' နှင့် 'ရရှိနိုင်သည့်အတိုင်း' ပေးအပ်ထားပါသည်။ မည်သည့်ရည်ရွယ်ချက်အတွက်မဆို ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများ သို့မဟုတ် ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများပေါ်တွင် ပါဝင်သော အချက်အလက်၊ ထုတ်ကုန်များ၊ ဝန်ဆောင်မှုများ သို့မဟုတ် ဆက်စပ်ဂရပ်ဖစ်များ၏ ပြည့်စုံမှု၊ တိကျမှု၊ ယုံကြည်စိတ်ချရမှု၊ သင့်လျော်မှု သို့မဟုတ် ရရှိနိုင်မှုနှင့်ပတ်သက်၍ မည်သည့်ကိုယ်စားပြုမှုများ သို့မဟုတ် အာမခံချက်များကိုမျှ ကျွန်ုပ်တို့ မပြုလုပ်ပါ။",
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
            <LocalizedText en="Terms of Service" mm="ဝန်ဆောင်မှုစည်းကမ်းချက်များ" />
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
          <div className="bg-gradient-to-br from-[#263A49] to-[#1E2F3C] p-8 rounded-xl border border-[#00FFFF]/10 shadow-lg mb-12">
            <p className="text-[#B0BEC5] mb-6">
              <LocalizedText
                en="Please read these Terms of Service ('Terms') carefully before using the eSIM Myanmar website, mobile applications, and services (collectively, the 'Services') operated by eSIM Myanmar ('we', 'our', or 'us')."
                mm="eSIM Myanmar ('ကျွန်ုပ်တို့'၊ 'ကျွန်ုပ်တို့၏' သို့မဟုတ် 'ကျွန်ုပ်တို့ကို') မှ လုပ်ဆောင်သော eSIM Myanmar ဝဘ်ဆိုဒ်၊ မိုဘိုင်းအပ်ပလီကေးရှင်းများနှင့် ဝန်ဆောင်မှုများ (စုပေါင်း၍ 'ဝန်ဆောင်မှုများ') ကို အသုံးမပြုမီ ဤဝန်ဆောင်မှုစည်းကမ်းချက်များ ('စည်းကမ်းချက်များ') ကို သေချာစွာ ဖတ်ရှုပါ။"
              />
            </p>
            <p className="text-[#B0BEC5]">
              <LocalizedText
                en="Your access to and use of the Services is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Services."
                mm="ဝန်ဆောင်မှုများကို သင် ဝင်ရောက်အသုံးပြုခြင်းသည် ဤစည်းကမ်းချက်များကို သင် လက်ခံခြင်းနှင့် လိုက်နာခြင်းအပေါ် မူတည်ပါသည်။ ဤစည်းကမ်းချက်များသည် ဝန်ဆောင်မှုများကို ဝင်ရောက်အသုံးပြုသော ဧည့်သည်များ၊ အသုံးပြုသူများနှင့် အခြားသူများအားလုံးအတွက် သက်ဆိုင်ပါသည်။"
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
                en="If you have any questions about these Terms of Service, please contact us at:"
                mm="ဤဝန်ဆောင်မှုစည်းကမ်းချက်များနှင့်ပတ်သက်၍ မေးခွန်းများရှိပါက ကျွန်ုပ်တို့ကို အောက်ပါလိပ်စာတွင် ဆက်သွယ်ပါ-"
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
