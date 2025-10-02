"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface StepCardProps {
  number: number
  title: string
  description: string
  icon: ReactNode
  delay?: number
}

export default function StepCard({ number, title, description, icon, delay = 0 }: StepCardProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#263A49] to-[#1E2F3C] p-8 rounded-xl border border-[#00FFFF]/10 shadow-lg flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 255, 255, 0.1), 0 10px 10px -5px rgba(0, 255, 255, 0.04)",
        borderColor: "rgba(0, 255, 255, 0.3)",
      }}
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00FFFF]/20 to-[#00FFFF]/5 flex items-center justify-center mb-6 border border-[#00FFFF]/30">
        <span className="text-2xl font-bold text-[#00FFFF]">{number}</span>
      </div>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-[#B0BEC5]">{description}</p>
    </motion.div>
  )
}
