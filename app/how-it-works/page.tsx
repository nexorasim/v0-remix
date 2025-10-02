"use client"

import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import StepCard from "@/components/step-card"
import { Smartphone, QrCode, Check, ArrowRight } from "lucide-react"

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      title: "Choose Carrier",
      description: "Select your preferred mobile carrier that supports eSIM technology in Myanmar.",
      icon: <Smartphone className="h-12 w-12 text-[#00FFFF]" />,
    },
    {
      number: 2,
      title: "Get LPA Code",
      description: "Receive a QR code or activation code from your carrier to set up your eSIM.",
      icon: <QrCode className="h-12 w-12 text-[#00FFFF]" />,
    },
    {
      number: 3,
      title: "Scan with Phone",
      description: "Scan the QR code with your phone's camera or enter the activation code manually.",
      icon: <Check className="h-12 w-12 text-[#00FFFF]" />,
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
            How eSIM <span className="text-[#00FFFF]">Works</span>
          </motion.h1>
          <motion.p
            className="text-xl text-[#B0BEC5] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Setting up an eSIM is quick and easy. Follow these simple steps to get started with your digital SIM card.
          </motion.p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="py-12 relative">
          {/* Connecting line between steps */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00FFFF]/30 to-transparent hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <StepCard
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  delay={index * 0.2}
                />

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2 z-20">
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    >
                      <ArrowRight className="h-8 w-8 text-[#00FFFF]" />
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="py-16">
          <div className="bg-gradient-to-br from-[#263A49] to-[#1E2F3C] p-8 md:p-12 rounded-xl border border-[#00FFFF]/10 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Detailed <span className="text-[#00FFFF]">Activation Process</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#1E2F3C] p-6 rounded-lg border border-[#00FFFF]/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#00FFFF]/10 flex items-center justify-center mr-3">
                    <Smartphone className="h-5 w-5 text-[#00FFFF]" />
                  </div>
                  <h3 className="text-xl font-bold">For iPhone Users</h3>
                </div>
                <ol className="list-decimal pl-5 space-y-4 text-[#B0BEC5]">
                  <li className="pl-2">
                    <span className="font-medium text-white">Go to Settings</span>
                    <p>Navigate to Settings &gt; Cellular/Mobile Data</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium text-white">Add Cellular Plan</span>
                    <p>Tap "Add Cellular/Mobile Plan"</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium text-white">Scan QR Code</span>
                    <p>Scan the QR code provided by your carrier</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium text-white">Follow Instructions</span>
                    <p>Follow the on-screen instructions to complete setup</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium text-white">Set Preferences</span>
                    <p>Select your default line for calls, messages, and data</p>
                  </li>
                </ol>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#1E2F3C] p-6 rounded-lg border border-[#00FFFF]/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#00FFFF]/10 flex items-center justify-center mr-3">
                    <Smartphone className="h-5 w-5 text-[#00FFFF]" />
                  </div>
                  <h3 className="text-xl font-bold">For Android Users</h3>
                </div>
                <ol className="list-decimal pl-5 space-y-4 text-[#B0BEC5]">
                  <li className="pl-2">
                    <span className="font-medium text-white">Access SIM Settings</span>
                    <p>Go to Settings &gt; Connections &gt; SIM Manager</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium text-white">Add eSIM</span>
                    <p>Tap "Add mobile plan" or "+ Add eSIM"</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium text-white">Scan QR Code</span>
                    <p>Select "Scan carrier QR code"</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium text-white">Scan and Confirm</span>
                    <p>Scan the QR code provided by your carrier</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium text-white">Complete Setup</span>
                    <p>Follow the on-screen instructions to complete setup</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium text-white">Set Preferences</span>
                    <p>Set your preferences for calls, messages, and data</p>
                  </li>
                </ol>
              </motion.div>
            </div>

            <div className="mt-12 p-6 bg-[#1E2F3C] rounded-lg border border-[#00FFFF]/10">
              <h3 className="text-xl font-bold mb-4 text-[#00FFFF]">Important Notes</h3>
              <ul className="space-y-3 text-[#B0BEC5]">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#00FFFF] mt-0.5 mr-2 flex-shrink-0" />
                  <span>
                    Make sure your device is connected to Wi-Fi or has mobile data enabled during the activation
                    process.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#00FFFF] mt-0.5 mr-2 flex-shrink-0" />
                  <span>If you encounter any issues, contact your carrier's customer support for assistance.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#00FFFF] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Some older devices may require a restart after eSIM activation.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#00FFFF] mt-0.5 mr-2 flex-shrink-0" />
                  <span>
                    You can store multiple eSIM profiles but can only use one at a time unless your device supports Dual
                    SIM Dual Standby (DSDS).
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
