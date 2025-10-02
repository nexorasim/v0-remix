"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import AnimatedSection from "@/components/animated-section"
import { Send, Phone, Mail, MapPin, Check, Clock, Calendar, ArrowRight, X } from "lucide-react"
import { LocalizedText } from "@/components/ui/localized-text"
import { useLanguage } from "@/contexts/language-context"

// Import the server action
import { submitContactForm } from "@/app/actions/contact-form"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { t } = useLanguage()

  // Add state for error message
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  // Update the handleSubmit function to use the server action
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await submitContactForm(formState)

      setIsSubmitting(false)

      if (result.success) {
        setIsSubmitted(true)
        setFormState({ name: "", phone: "", email: "", message: "" })
      } else {
        // Handle error
        setErrorMessage(result.message || "Failed to submit form. Please try again.")
      }
    } catch (error) {
      setIsSubmitting(false)
      setErrorMessage("An unexpected error occurred. Please try again.")
    }
  }

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
            <LocalizedText en="Contact Us" mm="ဆက်သွယ်ရန်" />
          </motion.h1>
          <motion.p
            className="text-xl text-[#B0BEC5] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <LocalizedText
              en="Have questions about eSIM technology? Get in touch with our team and we'll be happy to help."
              mm="eSIM နည်းပညာနှင့်ပတ်သက်၍ မေးခွန်းများရှိပါသလား? ကျွန်ုပ်တို့အဖွဲ့နှင့် ဆက်သွယ်ပါ၊ ကျွန်ုပ်တို့ ဝမ်းမြောက်စွာ ကူညီပေးပါမည်။"
            />
          </motion.p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <h2 className="text-2xl font-bold mb-6">
                <LocalizedText
                  en={
                    <>
                      Send us a <span className="text-[#00FFFF]">Message</span>
                    </>
                  }
                  mm={
                    <>
                      ကျွန်ုပ်တို့ထံ <span className="text-[#00FFFF]">မက်ဆေ့ခ်ျ</span> ပို့ပါ
                    </>
                  }
                />
              </h2>

              {/* Background decoration */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#00FFFF]/5 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00FFFF]/5 rounded-full blur-3xl -z-10" />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-gradient-to-br from-[#263A49] to-[#1E2F3C] p-8 rounded-xl border border-[#00FFFF]/10 shadow-lg text-center"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#00FFFF]/20 to-[#00CCFF]/20 text-[#00FFFF] mb-6">
                    <Check className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#00FFFF]">
                    <LocalizedText en="Message Sent!" mm="မက်ဆေ့ခ်ျ ပို့ပြီးပါပြီ!" />
                  </h3>
                  <p className="text-[#B0BEC5] mb-6">
                    <LocalizedText
                      en="Thank you for contacting us. We'll get back to you as soon as possible."
                      mm="ဆက်သွယ်ပေးသည့်အတွက် ကျေးဇူးတင်ပါသည်။ ကျွန်ုပ်တို့ တတ်နိုင်သမျှ မြန်မြန် ပြန်လည်ဆက်သွယ်ပါမည်။"
                    />
                  </p>
                  <Button
                    className="bg-[#00FFFF] text-[#1E2F3C] hover:bg-[#00CCCC] shadow-lg shadow-[#00FFFF]/20"
                    onClick={() => setIsSubmitted(false)}
                  >
                    <LocalizedText en="Send Another Message" mm="နောက်ထပ်မက်ဆေ့ခ်ျတစ်စောင် ပို့ရန်" />
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-gradient-to-br from-[#263A49] to-[#1E2F3C] p-8 rounded-xl border border-[#00FFFF]/10 shadow-lg"
                >
                  {errorMessage && (
                    <div className="w-full bg-red-900/20 border border-red-500/30 rounded-lg p-3 flex items-center">
                      <X className="h-5 w-5 text-red-500 mr-2" />
                      <p className="text-red-400 text-sm">{errorMessage}</p>
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        <LocalizedText en="Name" mm="အမည်" />
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder={t("Your name", "သင့်အမည်")}
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="bg-[#1E2F3C] border-[#00FFFF]/30 focus:border-[#00FFFF] focus:ring-[#00FFFF] rounded-lg"
                        aria-required="true"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">
                        <LocalizedText en="Phone Number" mm="ဖုန်းနံပါတ်" />
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder={t("Your phone number", "သင့်ဖုန်းနံပါတ်")}
                        value={formState.phone}
                        onChange={handleChange}
                        required
                        className="bg-[#1E2F3C] border-[#00FFFF]/30 focus:border-[#00FFFF] focus:ring-[#00FFFF] rounded-lg"
                        aria-required="true"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        <LocalizedText en="Email (Optional)" mm="အီးမေးလ် (ရွေးချယ်နိုင်)" />
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={t("Your email address", "သင့်အီးမေးလ်လိပ်စာ")}
                        value={formState.email}
                        onChange={handleChange}
                        className="bg-[#1E2F3C] border-[#00FFFF]/30 focus:border-[#00FFFF] focus:ring-[#00FFFF] rounded-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">
                        <LocalizedText en="Message" mm="မက်ဆေ့ခ်ျ" />
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={t("Your message", "သင့်မက်ဆေ့ခ်ျ")}
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="min-h-[120px] bg-[#1E2F3C] border-[#00FFFF]/30 focus:border-[#00FFFF] focus:ring-[#00FFFF] rounded-lg"
                        aria-required="true"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#00FFFF] to-[#00CCFF] text-[#1E2F3C] hover:opacity-90 py-6 rounded-lg shadow-lg shadow-[#00FFFF]/20"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <motion.span
                            className="mr-2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          >
                            <svg
                              className="animate-spin h-5 w-5 text-[#1E2F3C]"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                          </motion.span>
                          <LocalizedText en="Sending..." mm="ပို့နေသည်..." />
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send className="mr-2 h-5 w-5" aria-hidden="true" />
                          <LocalizedText en="Send Message" mm="မက်ဆေ့ခ်ျ ပို့ရန်" />
                        </span>
                      )}
                    </Button>
                  </form>
                </motion.div>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-bold mb-6">
                <LocalizedText
                  en={
                    <>
                      Contact <span className="text-[#00FFFF]">Information</span>
                    </>
                  }
                  mm={
                    <>
                      ဆက်သွယ်ရန် <span className="text-[#00FFFF]">အချက်အလက်</span>
                    </>
                  }
                />
              </h2>

              <div className="bg-gradient-to-br from-[#263A49] to-[#1E2F3C] p-8 rounded-xl border border-[#00FFFF]/10 shadow-lg">
                <div className="space-y-6">
                  {[
                    { icon: Phone, text: "09650000172", label: t("Phone", "ဖုန်း") },
                    { icon: Mail, text: "info@esim.com.mm", label: t("Email", "အီးမေးလ်") },
                    { icon: MapPin, text: "esim.com.mm", label: t("Website", "ဝဘ်ဆိုဒ်") },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-12 h-12 rounded-full bg-[#00FFFF]/10 flex items-center justify-center">
                          <item.icon className="h-5 w-5 text-[#00FFFF]" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-white">{item.label}</h3>
                        <p className="text-[#B0BEC5]">{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-[#00FFFF]/10">
                  <h3 className="font-medium mb-4 text-white flex items-center">
                    <Clock className="h-5 w-5 text-[#00FFFF] mr-2" aria-hidden="true" />
                    <LocalizedText en="Business Hours" mm="လုပ်ငန်းချိန်" />
                  </h3>
                  <div className="space-y-3 text-[#B0BEC5]">
                    <div className="flex justify-between items-center p-2 hover:bg-[#00FFFF]/5 rounded-md transition-colors">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 text-[#00FFFF] mr-2" aria-hidden="true" />
                        <LocalizedText en="Monday - Friday:" mm="တနင်္လာ - သောကြာ:" />
                      </span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-2 hover:bg-[#00FFFF]/5 rounded-md transition-colors">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 text-[#00FFFF] mr-2" aria-hidden="true" />
                        <LocalizedText en="Saturday:" mm="စနေ:" />
                      </span>
                      <span>9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-2 hover:bg-[#00FFFF]/5 rounded-md transition-colors">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 text-[#00FFFF] mr-2" aria-hidden="true" />
                        <LocalizedText en="Sunday:" mm="တနင်္ဂနွေ:" />
                      </span>
                      <span>
                        <LocalizedText en="Closed" mm="ပိတ်" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-[#263A49] to-[#1E2F3C] p-6 rounded-xl border border-[#00FFFF]/10 shadow-lg">
                <h3 className="font-medium mb-4 text-white">
                  <LocalizedText en="Follow Us" mm="ကျွန်ုပ်တို့ကို လိုက်ပါ" />
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: "Facebook", url: "https://facebook.com/esimmyanmar" },
                    { name: "Twitter", url: "https://twitter.com/esimmyanmar" },
                    { name: "Instagram", url: "https://instagram.com/esimmyanmar" },
                    { name: "LinkedIn", url: "https://linkedin.com/company/esimmyanmar" },
                  ].map((platform, index) => (
                    <motion.a
                      key={index}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 rounded-lg bg-[#1E2F3C] flex items-center justify-center text-[#00FFFF] hover:bg-[#00FFFF] hover:text-[#1E2F3C] transition-colors border border-[#00FFFF]/20"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      aria-label={`Follow us on ${platform.name}`}
                    >
                      {platform.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                className="mt-8 bg-gradient-to-br from-[#263A49] to-[#1E2F3C] p-6 rounded-xl border border-[#00FFFF]/10 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="font-medium mb-4 text-white flex items-center">
                  <LocalizedText en="Need Help?" mm="အကူအညီလိုပါသလား?" />
                </h3>
                <p className="text-[#B0BEC5] mb-4">
                  <LocalizedText
                    en="Check our comprehensive FAQ section for quick answers to common questions."
                    mm="အမေးများသော မေးခွန်းများအတွက် အမြန်အဖြေများအတွက် ကျွန်ုပ်တို့၏ ပြည့်စုံသော FAQ အပိုင်းကို စစ်ဆေးပါ။"
                  />
                </p>
                <a href="/faq" className="inline-flex items-center text-[#00FFFF] hover:underline">
                  <LocalizedText en="View FAQ" mm="FAQ ကို ကြည့်ရန်" />
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
