"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function AnimatedSection({ children, delay = 0, className = "" }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
