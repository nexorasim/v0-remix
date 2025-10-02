"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import AnimatedSection from "@/components/animated-section"
import DeviceChecker from "@/components/device-checker"
import { Search, Smartphone } from "lucide-react"
import { ResponsiveText } from "@/components/ui/responsive-text"
import { TruncatedText } from "@/components/ui/truncated-text"

export default function CompatibilityPageClient() {
  const [searchTerm, setSearchTerm] = useState("")

  const deviceBrands = [
    {
      name: "Apple",
      devices: [
        "iPhone 15 Pro Max",
        "iPhone 15 Pro",
        "iPhone 15 Plus",
        "iPhone 15",
        "iPhone 14 Pro Max",
        "iPhone 14 Pro",
        "iPhone 14 Plus",
        "iPhone 14",
        "iPhone 13 Pro Max",
        "iPhone 13 Pro",
        "iPhone 13",
        "iPhone 13 mini",
        "iPhone 12 Pro Max",
        "iPhone 12 Pro",
        "iPhone 12",
        "iPhone 12 mini",
        "iPhone SE (2nd generation)",
        "iPhone 11 Pro Max",
        "iPhone 11 Pro",
        "iPhone 11",
        "iPhone XS Max",
        "iPhone XS",
        "iPhone XR",
        "iPad Pro (11-inch) (3rd generation)",
        "iPad Pro (12.9-inch) (5th generation)",
        "iPad Air (4th generation)",
        "iPad (9th generation)",
      ],
    },
    {
      name: "Samsung",
      devices: [
        "Galaxy S23 Ultra",
        "Galaxy S23+",
        "Galaxy S23",
        "Galaxy S22 Ultra",
        "Galaxy S22+",
        "Galaxy S22",
        "Galaxy S21 Ultra 5G",
        "Galaxy S21+ 5G",
        "Galaxy S21 5G",
        "Galaxy S20 Ultra 5G",
        "Galaxy S20+ 5G",
        "Galaxy S20 5G",
        "Galaxy Note 20 Ultra 5G",
        "Galaxy Note 20 5G",
        "Galaxy Z Fold4",
        "Galaxy Z Fold3 5G",
        "Galaxy Z Flip4",
        "Galaxy Z Flip3 5G",
        "Galaxy A53 5G",
        "Galaxy A33 5G",
      ],
    },
    {
      name: "Google",
      devices: [
        "Pixel 7 Pro",
        "Pixel 7",
        "Pixel 6 Pro",
        "Pixel 6",
        "Pixel 5",
        "Pixel 4a (5G)",
        "Pixel 4a",
        "Pixel 4 XL",
        "Pixel 4",
      ],
    },
    {
      name: "Huawei",
      devices: ["P40 Pro+", "P40 Pro", "P40", "Mate 40 Pro", "Mate 30 Pro", "Mate 30", "P30 Pro"],
    },
  ]

  const filteredBrands = deviceBrands
    .map((brand) => ({
      ...brand,
      devices: brand.devices.filter((device) => device.toLowerCase().includes(searchTerm.toLowerCase())),
    }))
    .filter((brand) => brand.devices.length > 0)

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
            Device <span className="text-[#00FFFF]">Compatibility</span>
          </motion.h1>
          <ResponsiveText size="xl" color="#B0BEC5" className="max-w-3xl mx-auto mb-8" as="p">
            Check if your device supports eSIM technology. Most modern smartphones and tablets are compatible.
          </ResponsiveText>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="mb-16">
          <DeviceChecker />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="py-8">
          <div className="flex items-center justify-center mb-8">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B0BEC5]" />
              <Input
                type="text"
                placeholder="Search for your device..."
                className="pl-10 bg-[#263A49] border-[#00FFFF]/30 focus:border-[#00FFFF] focus:ring-[#00FFFF] rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-8">
            {filteredBrands.map((brand) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-[#263A49] to-[#1E2F3C] p-6 rounded-xl border border-[#00FFFF]/10 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Smartphone className="h-6 w-6 text-[#00FFFF] mr-2" />
                  <ResponsiveText size="2xl" weight="bold" color="#00FFFF" as="h3">
                    {brand.name}
                  </ResponsiveText>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {brand.devices.map((device) => (
                    <motion.div
                      key={device}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(0, 255, 255, 0.05)" }}
                      className="p-3 bg-[#1E2F3C] rounded-lg border border-[#00FFFF]/5 hover:border-[#00FFFF]/20 transition-all"
                    >
                      <TruncatedText text={device} lines={1} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}

            {filteredBrands.length === 0 && (
              <div className="text-center py-12 bg-[#1E2F3C] rounded-xl border border-[#00FFFF]/10 shadow-lg">
                <Search className="h-16 w-16 text-[#B0BEC5] mx-auto mb-4" />
                <ResponsiveText size="xl" weight="bold" as="h3" className="mb-2">
                  No devices found
                </ResponsiveText>
                <ResponsiveText color="#B0BEC5" className="max-w-md mx-auto">
                  No devices found matching "{searchTerm}". Try a different search term or check our compatibility
                  checker above.
                </ResponsiveText>
              </div>
            )}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="py-16">
          <div className="bg-gradient-to-br from-[#263A49] to-[#1E2F3C] p-8 rounded-xl border border-[#00FFFF]/10 shadow-lg">
            <ResponsiveText size="2xl" weight="bold" as="h2" className="mb-6 text-center">
              eSIM <span className="text-[#00FFFF]">Requirements</span>
            </ResponsiveText>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1E2F3C] p-6 rounded-lg border border-[#00FFFF]/10">
                <ResponsiveText size="xl" weight="bold" color="#00FFFF" as="h3" className="mb-4">
                  Device Requirements
                </ResponsiveText>
                <ul className="space-y-3 text-[#B0BEC5]">
                  <li className="flex items-start">
                    <span className="text-[#00FFFF] mr-2">•</span>
                    <span>Compatible smartphone or tablet with eSIM support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFFF] mr-2">•</span>
                    <span>Device must be unlocked or carrier-free</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFFF] mr-2">•</span>
                    <span>Latest operating system recommended (iOS 12.1+ or Android 10+)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFFF] mr-2">•</span>
                    <span>Internet connection for initial setup</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1E2F3C] p-6 rounded-lg border border-[#00FFFF]/10">
                <ResponsiveText size="xl" weight="bold" color="#00FFFF" as="h3" className="mb-4">
                  Carrier Requirements
                </ResponsiveText>
                <ul className="space-y-3 text-[#B0BEC5]">
                  <li className="flex items-start">
                    <span className="text-[#00FFFF] mr-2">•</span>
                    <span>Subscription with an eSIM-supporting carrier</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFFF] mr-2">•</span>
                    <span>QR code or activation code from your carrier</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFFF] mr-2">•</span>
                    <span>Valid identification for registration (as per carrier requirements)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFFF] mr-2">•</span>
                    <span>May require in-person activation at carrier store (varies by carrier)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
