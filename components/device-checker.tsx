"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Smartphone, Search, Loader2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { LocalizedText } from "@/components/ui/localized-text"

export default function DeviceChecker() {
  const [isCompatible, setIsCompatible] = useState<boolean | null>(null)
  const [deviceInfo, setDeviceInfo] = useState<string>("")
  const [isChecking, setIsChecking] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    // Get basic device info
    const userAgent = navigator.userAgent
    let deviceName = "your device"

    if (/iPhone/.test(userAgent)) {
      deviceName = "iPhone"
    } else if (/iPad/.test(userAgent)) {
      deviceName = "iPad"
    } else if (/Android/.test(userAgent)) {
      deviceName = "Android device"
    } else if (/Windows/.test(userAgent)) {
      deviceName = "Windows device"
    } else if (/Mac/.test(userAgent)) {
      deviceName = "Mac"
    }

    setDeviceInfo(deviceName)
  }, [])

  const checkCompatibility = () => {
    setIsChecking(true)

    // Simulate checking process
    setTimeout(() => {
      // This is a simplified check - in a real app, you'd have a more comprehensive database
      const userAgent = navigator.userAgent.toLowerCase()

      // Most iPhones from XR/XS and newer support eSIM
      const isNeweriPhone =
        /iphone/.test(userAgent) && (/iphone1[1-9]/.test(userAgent) || /iphone2[0-9]/.test(userAgent))

      // Most flagship Android phones from 2019 and newer support eSIM
      const isNewerAndroid =
        /android/.test(userAgent) && (/android 9/.test(userAgent) || /android 1[0-9]/.test(userAgent))

      setIsCompatible(isNeweriPhone || isNewerAndroid)
      setIsChecking(false)
    }, 2000)
  }

  return (
    <div className="bg-gradient-to-br from-[#263A49] to-[#1E2F3C] p-8 rounded-xl border border-[#00FFFF]/10 shadow-lg text-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
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
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#00FFFF]/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[#00FFFF]/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="relative z-10">
        <div className="flex justify-center mb-6">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="relative"
          >
            <Smartphone className="h-16 w-16 text-[#00FFFF]" />

            {/* Animated pulse */}
            <motion.div
              className="absolute inset-0 rounded-full border border-[#00FFFF]/30"
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">
            <LocalizedText
              en={`Is ${deviceInfo} compatible with eSIM?`}
              mm={`${deviceInfo} သည် eSIM နှင့် သဟဇာတဖြစ်ပါသလား?`}
            />
          </h2>
          <p className="text-[#B0BEC5] mb-8 max-w-lg mx-auto">
            <LocalizedText
              en="Click the button below to check if your current device supports eSIM technology."
              mm="သင့်လက်ရှိစက်ပစ္စည်းသည် eSIM နည်းပညာကို ထောက်ပံ့ခြင်း ရှိမရှိ စစ်ဆေးရန် အောက်ပါခလုတ်ကို နှိပ်ပါ။"
            />
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isCompatible === null ? (
            <motion.div key="check-button" initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative">
              <Button
                onClick={checkCompatibility}
                disabled={isChecking}
                className="bg-gradient-to-r from-[#00FFFF] to-[#00CCFF] text-[#1E2F3C] hover:opacity-90 px-8 py-6 text-lg rounded-lg shadow-lg shadow-[#00FFFF]/20 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  {isChecking ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="mr-2"
                      >
                        <Loader2 className="h-5 w-5" />
                      </motion.div>
                      <LocalizedText en="Checking..." mm="စစ်ဆေးနေသည်..." />
                    </>
                  ) : (
                    <>
                      <Search className="h-5 w-5 mr-2" />
                      <LocalizedText en="Check My Device" mm="ကျွန်ုပ်၏စက်ကို စစ်ဆေးပါ" />
                    </>
                  )}
                </span>

                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00FFFF]/0 via-[#00FFFF]/30 to-[#00FFFF]/0"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "linear" }}
                />
              </Button>

              {/* Decorative dots */}
              <div className="absolute -z-10 -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-1 rounded-full bg-[#00FFFF]/50"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1E2F3C] p-8 rounded-xl border border-[#00FFFF]/20 relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 grid grid-cols-8 gap-2">
                  {Array.from({ length: 8 }).map((_, colIndex) => (
                    <div key={colIndex} className="h-full w-full border-r border-[#00FFFF]/20"></div>
                  ))}
                </div>
                <div className="absolute inset-0 grid grid-rows-8 gap-2">
                  {Array.from({ length: 8 }).map((_, rowIndex) => (
                    <div key={rowIndex} className="h-full w-full border-b border-[#00FFFF]/20"></div>
                  ))}
                </div>
              </div>

              <div className="relative z-10">
                {isCompatible ? (
                  <div className="flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      <div className="relative">
                        <CheckCircle className="h-20 w-20 text-green-500 mb-4" />

                        {/* Success particles */}
                        {Array.from({ length: 8 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-green-400"
                            style={{
                              top: "50%",
                              left: "50%",
                            }}
                            animate={{
                              x: [0, (Math.random() - 0.5) * 60],
                              y: [0, (Math.random() - 0.5) * 60],
                              opacity: [1, 0],
                              scale: [1, 0],
                            }}
                            transition={{
                              duration: 1 + Math.random(),
                              repeat: Number.POSITIVE_INFINITY,
                              delay: Math.random() * 0.5,
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2 text-green-400">
                      <LocalizedText en="Good News!" mm="သတင်းကောင်းပါ!" />
                    </h3>
                    <p className="text-[#B0BEC5] mb-6">
                      <LocalizedText
                        en={`Based on our detection, ${deviceInfo} appears to support eSIM technology.`}
                        mm={`ကျွန်ုပ်တို့၏ စစ်ဆေးတွေ့ရှိချက်အရ ${deviceInfo} သည် eSIM နည်းပညာကို ထောက်ပံ့ပုံရပါသည်။`}
                      />
                    </p>
                    <Button
                      onClick={() => setIsCompatible(null)}
                      variant="outline"
                      className="border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF]/10 group relative overflow-hidden"
                    >
                      <span className="relative z-10">
                        <LocalizedText en="Check Again" mm="ထပ်မံစစ်ဆေးပါ" />
                      </span>

                      {/* Hover effect */}
                      <motion.div
                        className="absolute inset-0 bg-[#00FFFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      <div className="relative">
                        <XCircle className="h-20 w-20 text-red-500 mb-4" />

                        {/* Warning particles */}
                        {Array.from({ length: 5 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-red-400"
                            style={{
                              top: "50%",
                              left: "50%",
                            }}
                            animate={{
                              x: [0, (Math.random() - 0.5) * 40],
                              y: [0, (Math.random() - 0.5) * 40],
                              opacity: [1, 0],
                            }}
                            transition={{
                              duration: 1 + Math.random(),
                              repeat: Number.POSITIVE_INFINITY,
                              delay: Math.random() * 0.5,
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2 text-red-400">
                      <LocalizedText en="We're Not Sure" mm="ကျွန်ုပ်တို့ မသေချာပါ" />
                    </h3>
                    <p className="text-[#B0BEC5] mb-6">
                      <LocalizedText
                        en={`We couldn't confirm if ${deviceInfo} supports eSIM. Please check your device settings or contact your manufacturer.`}
                        mm={`${deviceInfo} သည် eSIM ကို ထောက်ပံ့ခြင်း ရှိမရှိ ကျွန်ုပ်တို့ အတည်မပြုနိုင်ပါ။ သင့်စက်ပစ္စည်း ဆက်တင်များကို စစ်ဆေးပါ သို့မဟုတ် သင့်ထုတ်လုပ်သူကို ဆက်သွယ်ပါ။`}
                      />
                    </p>
                    <Button
                      onClick={() => setIsCompatible(null)}
                      variant="outline"
                      className="border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF]/10 group relative overflow-hidden"
                    >
                      <span className="relative z-10">
                        <LocalizedText en="Check Again" mm="ထပ်မံစစ်ဆေးပါ" />
                      </span>

                      {/* Hover effect */}
                      <motion.div
                        className="absolute inset-0 bg-[#00FFFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
