"use client"

import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, HelpCircle, Filter } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { LocalizedText } from "@/components/ui/localized-text"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const { language } = useLanguage()

  const categories = [
    { id: "all", name: language === "en" ? "All Questions" : "မေးခွန်းအားလုံး" },
    { id: "basics", name: language === "en" ? "eSIM Basics" : "eSIM အခြေခံ" },
    { id: "compatibility", name: language === "en" ? "Compatibility" : "သဟဇာတဖြစ်မှု" },
    { id: "usage", name: language === "en" ? "Usage & Setup" : "အသုံးပြုမှုနှင့် ပြင်ဆင်မှု" },
    { id: "carriers", name: language === "en" ? "Carriers" : "ဝန်ဆောင်မှုပေးသူများ" },
  ]

  const faqs = [
    {
      category: "basics",
      question: "What is an eSIM?",
      questionMM: "eSIM ဆိုတာ ဘာလဲ?",
      answer:
        "An eSIM (embedded SIM) is a digital SIM that allows you to activate a cellular plan from your carrier without having to use a physical SIM card.",
      answerMM:
        "eSIM (embedded SIM) ဆိုသည်မှာ ဖုန်းထဲတွင် ထည့်သွင်းထားသော digital SIM ဖြစ်ပြီး physical SIM ကဒ် မလိုဘဲ mobile ဝန်ဆောင်မှုကို အသုံးပြုနိုင်ပါသည်။",
    },
    {
      category: "compatibility",
      question: "How do I know if my device supports eSIM?",
      questionMM: "ကျွန်တော့်/ကျွန်မ ဖုန်းက eSIM ကို ထောက်ပံ့ပါသလား?",
      answer:
        "Most modern smartphones and tablets support eSIM. You can check our compatibility page or your device's settings to see if eSIM is supported.",
      answerMM:
        "ခေတ်မီ smartphone နှင့် tablet အများစုသည် eSIM ကို ထောက်ပံ့ပါသည်။ သင့်စက်၏ settings တွင် စစ်ဆေးနိုင်ပါသည် သို့မဟုတ် ကျွန်ုပ်တို့၏ compatibility စာမျက်နှာတွင် ကြည့်ရှုနိုင်ပါသည်။",
    },
    {
      category: "usage",
      question: "Can I use both physical SIM and eSIM at the same time?",
      questionMM: "Physical SIM နှင့် eSIM ကို တစ်ပြိုင်နက် သုံးလို့ရပါသလား?",
      answer:
        "Yes, most eSIM-compatible devices support Dual SIM Dual Standby (DSDS), allowing you to use both a physical SIM and an eSIM simultaneously.",
      answerMM:
        "ရပါသည်။ eSIM ထောက်ပံ့သော စက်အများစုသည် Dual SIM Dual Standby (DSDS) ကို ထောက်ပံ့သဖြင့် physical SIM နှင့် eSIM နှစ်ခုလုံးကို တစ်ပြိုင်နက် အသုံးပြုနိုင်ပါသည်။",
    },
    {
      category: "carriers",
      question: "Which carriers in Myanmar support eSIM?",
      questionMM: "မြန်မာနိုင်ငံမှာ ဘယ် carriers တွေက eSIM ကို ထောက်ပံ့ပါသလဲ?",
      answer:
        "Currently, MPT, ATOM, Ooredoo, and Mytel support eSIM technology in Myanmar. Each carrier has different plans and activation processes.",
      answerMM:
        "လက်ရှိတွင် MPT, ATOM, Ooredoo နှင့် Mytel တို့သည် မြန်မာနိုင်ငံတွင် eSIM နည်းပညာကို ထောက်ပံ့ပါသည်။ ဝန်ဆောင်မှုပေးသူတစ်ခုချင်းစီတွင် မတူညီသော အစီအစဉ်များနှင့် activation လုပ်ငန်းစဉ်များ ရှိပါသည်။",
    },
    {
      category: "usage",
      question: "Can I switch back to a physical SIM after using an eSIM?",
      questionMM: "eSIM သုံးပြီးနောက် physical SIM ကို ပြန်သုံးလို့ရပါသလား?",
      answer:
        "Yes, you can switch back to a physical SIM at any time. Your carrier can help transfer your service back to a physical SIM if needed.",
      answerMM:
        "ရပါသည်။ သင်သည် မည်သည့်အချိန်တွင်မဆို physical SIM သို့ ပြန်လည်ပြောင်းလဲနိုင်ပါသည်။ လိုအပ်ပါက သင့် carrier သည် သင့်ဝန်ဆောင်မှုကို physical SIM သို့ ပြန်လည်ပြောင်းရွှေ့ရန် ကူညီပေးနိုင်ပါသည်။",
    },
    {
      category: "basics",
      question: "Is eSIM more secure than a physical SIM?",
      questionMM: "eSIM က physical SIM ထက် ပိုလုံခြုံပါသလား?",
      answer:
        "Yes, eSIMs are generally considered more secure than physical SIMs as they cannot be physically removed or stolen. They also use advanced encryption methods for data protection.",
      answerMM:
        "ဟုတ်ပါသည်။ eSIM များသည် ရုပ်ပိုင်းဆိုင်ရာအရ ဖယ်ရှားခြင်း သို့မဟုတ် ခိုးယူခြင်း မပြုလုပ်နိုင်သောကြောင့် physical SIM များထက် ပိုမိုလုံခြုံသည်ဟု ယူဆကြပါသည်။ ၎င်းတို့သည် ဒေတာကာကွယ်ရေးအတွက် အဆင့်မြင့် encryption နည်းလမ်းများကိုလည်း အသုံးပြုပါသည်။",
    },
    {
      category: "usage",
      question: "How do I activate an eSIM?",
      questionMM: "eSIM ကို ဘယ်လိုအသုံးပြုရမလဲ?",
      answer:
        "To activate an eSIM, you'll need to scan a QR code provided by your carrier or enter an activation code manually. The exact steps vary by device, but generally involve going to your device's cellular or mobile data settings.",
      answerMM:
        "eSIM ကို အသုံးပြုရန်၊ သင့်ဝန်ဆောင်မှုပေးသူမှ ပေးထားသော QR ကုဒ်ကို စကင်ဖတ်ရန် သို့မဟုတ် activation ကုဒ်ကို လက်ဖြင့်ရိုက်ထည့်ရန် လိုအပ်ပါသည်။ တိကျသော အဆင့်များသည် စက်ပစ္စည်းအလိုက် ကွဲပြားသော်လည်း၊ ယေဘုယျအားဖြင့် သင့်စက်၏ cellular သို့မဟုတ် mobile data ဆက်တင်များသို့ သွားရောက်ခြင်း ပါဝင်ပါသည်။",
    },
    {
      category: "carriers",
      question: "Are there any additional fees for using an eSIM?",
      questionMM: "eSIM သုံးရင် အပိုကုန်ကျစရိတ်တွေ ရှိပါသလား?",
      answer:
        "This depends on your carrier. Some carriers charge a one-time activation fee for eSIMs, while others provide them at no additional cost. The service plans themselves are typically the same price as those for physical SIMs.",
      answerMM:
        "ဤသည်မှာ သင့်ဝန်ဆောင်မှုပေးသူအပေါ် မူတည်ပါသည်။ အချို့ဝန်ဆောင်မှုပေးသူများသည် eSIM များအတွက် တစ်ကြိမ်တည်း activation ကြေးကို ကောက်ခံပြီး အခြားသူများသည် အပိုကုန်ကျစရိတ်မရှိဘဲ ပေးအပ်ပါသည်။ ဝန်ဆောင်မှုအစီအစဉ်များကိုယ်တိုင်သည် ယေဘုယျအားဖြင့် physical SIM များအတွက် ဈေးနှုန်းတူညီပါသည်။",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      (activeCategory === "all" || faq.category === activeCategory) &&
      (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.questionMM.includes(searchTerm) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answerMM.includes(searchTerm)),
  )

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
            <LocalizedText
              en={
                <>
                  Frequently Asked <span className="text-[#00FFFF]">Questions</span>
                </>
              }
              mm={
                <>
                  <span className="text-[#00FFFF]">မေးလေ့ရှိသော</span> မေးခွန်းများ
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
              en="Find answers to common questions about eSIM technology and its usage in Myanmar."
              mm="eSIM နည်းပညာနှင့် မြန်မာနိုင်ငံတွင် ၎င်း၏အသုံးပြုမှုအကြောင်း အမေးများသော မေးခွန်းများအတွက် အဖြေများကို ရှာဖွေပါ။"
            />
          </motion.p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="py-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#263A49] to-[#1E2F3C] p-8 rounded-xl border border-[#00FFFF]/10 shadow-lg mb-8">
            <div className="relative mb-6">
              <label htmlFor="search-faq" className="sr-only">
                <LocalizedText en="Search questions" mm="မေးခွန်းများကို ရှာဖွေပါ" />
              </label>
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B0BEC5]"
                aria-hidden="true"
              />
              <Input
                id="search-faq"
                type="text"
                placeholder={language === "en" ? "Search questions..." : "မေးခွန်းများကို ရှာဖွေပါ..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-[#1E2F3C] border-[#00FFFF]/30 focus:border-[#00FFFF] focus:ring-[#00FFFF] rounded-lg"
              />
            </div>

            <div className="flex items-center mb-4">
              <Filter className="h-5 w-5 text-[#00FFFF] mr-2" aria-hidden="true" />
              <h3 className="text-white font-medium">
                <LocalizedText en="Filter by Category" mm="အမျိုးအစားအလိုက် စစ်ထုတ်ပါ" />
              </h3>
            </div>

            <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="FAQ Categories">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className={
                    activeCategory === category.id
                      ? "bg-[#00FFFF] text-[#1E2F3C] hover:bg-[#00CCCC]"
                      : "border-[#00FFFF]/30 text-[#B0BEC5] hover:bg-[#00FFFF]/10 hover:text-white"
                  }
                  aria-pressed={activeCategory === category.id}
                  role="radio"
                  aria-checked={activeCategory === category.id}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-[#1E2F3C] rounded-xl border border-[#00FFFF]/10 shadow-lg">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <HelpCircle className="h-16 w-16 text-[#B0BEC5] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  <LocalizedText en="No Results Found" mm="ရလဒ်များ မတွေ့ရှိပါ" />
                </h3>
                <p className="text-[#B0BEC5] max-w-md mx-auto">
                  <LocalizedText
                    en="We couldn't find any FAQs matching your search. Try different keywords or browse all questions."
                    mm="သင့်ရှာဖွေမှုနှင့် ကိုက်ညီသော FAQ များကို ကျွန်ုပ်တို့ ရှာမတွေ့ပါ။ မတူညီသော စကားလုံးများဖြင့် ကြိုးစားပါ သို့မဟုတ် မေးခွန်းအားလုံးကို ကြည့်ရှုပါ။"
                  />
                </p>
              </motion.div>
            </div>
          ) : (
            <div className="space-y-4" role="region" aria-label="FAQ List">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Accordion type="single" collapsible>
                    <AccordionItem
                      value={`item-${index}`}
                      className="border border-[#00FFFF]/10 rounded-lg overflow-hidden bg-gradient-to-br from-[#263A49] to-[#1E2F3C] shadow-md"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:bg-[#00FFFF]/5 hover:no-underline group">
                        <div className="text-left">
                          <div className="font-medium group-hover:text-[#00FFFF] transition-colors">{faq.question}</div>
                          <div className="text-sm text-[#B0BEC5] mt-1 mm">{faq.questionMM}</div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 bg-[#1E2F3C] border-t border-[#00FFFF]/10">
                        <div className="space-y-3">
                          <p>{faq.answer}</p>
                          <p className="text-[#B0BEC5] mm">{faq.answerMM}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </motion.div>
              ))}
            </div>
          )}

          <motion.div
            className="mt-12 bg-gradient-to-br from-[#263A49] to-[#1E2F3C] p-6 rounded-xl border border-[#00FFFF]/10 shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-3">
              <LocalizedText en="Still Have Questions?" mm="မေးခွန်းများ ရှိနေဆဲလား?" />
            </h3>
            <p className="text-[#B0BEC5] mb-6 max-w-lg mx-auto">
              <LocalizedText
                en="If you couldn't find the answer you were looking for, feel free to contact our support team."
                mm="သင်ရှာဖွေနေသော အဖြေကို မတွေ့ရှိပါက ကျွန်ုပ်တို့၏ အထောက်အပံ့အဖွဲ့ကို ဆက်သွယ်ရန် မတွန့်ဆုတ်ပါနှင့်။"
              />
            </p>
            <Button
              className="bg-[#00FFFF] text-[#1E2F3C] hover:bg-[#00CCCC] px-8 py-2"
              onClick={() => (window.location.href = "/contact")}
            >
              <LocalizedText en="Contact Support" mm="အထောက်အပံ့ကို ဆက်သွယ်ရန်" />
            </Button>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  )
}
