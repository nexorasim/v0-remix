"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { LocalizedText } from "@/components/ui/localized-text"
import { ArrowRight, Settings, Search, Heart, Star, Smartphone, Zap, Shield, Globe, RefreshCw } from "lucide-react"

export default function UIKit() {
  const [switchValue, setSwitchValue] = useState(false)
  const [sliderValue, setSliderValue] = useState([50])

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="heading-1 mb-8">eSIM Myanmar UI Kit</h1>

      <Tabs defaultValue="colors" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
          <TabsTrigger value="inputs">Inputs</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
        </TabsList>

        {/* Colors */}
        <TabsContent value="colors" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Primary Colors</CardTitle>
              <CardDescription>The main brand colors for eSIM Myanmar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="w-full h-24 rounded-lg bg-[#00FFFF]"></div>
                  <p className="font-medium">Primary</p>
                  <p className="text-sm text-[#B0BEC5]">#00FFFF</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-24 rounded-lg bg-[#00CCFF]"></div>
                  <p className="font-medium">Primary Variant</p>
                  <p className="text-sm text-[#B0BEC5]">#00CCFF</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-24 rounded-lg bg-[#1E2F3C]"></div>
                  <p className="font-medium">Background</p>
                  <p className="text-sm text-[#B0BEC5]">#1E2F3C</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-24 rounded-lg bg-[#263A49]"></div>
                  <p className="font-medium">Surface</p>
                  <p className="text-sm text-[#B0BEC5]">#263A49</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Text Colors</CardTitle>
              <CardDescription>Colors used for text and content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="w-full h-24 rounded-lg bg-white flex items-center justify-center">
                    <span className="text-[#1E2F3C] font-bold">Aa</span>
                  </div>
                  <p className="font-medium">White</p>
                  <p className="text-sm text-[#B0BEC5]">#FFFFFF</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-24 rounded-lg bg-[#B0BEC5] flex items-center justify-center">
                    <span className="text-[#1E2F3C] font-bold">Aa</span>
                  </div>
                  <p className="font-medium">Muted</p>
                  <p className="text-sm text-[#B0BEC5]">#B0BEC5</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-24 rounded-lg bg-[#00FFFF] flex items-center justify-center">
                    <span className="text-[#1E2F3C] font-bold">Aa</span>
                  </div>
                  <p className="font-medium">Accent</p>
                  <p className="text-sm text-[#B0BEC5]">#00FFFF</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-24 rounded-lg bg-[#FF3B30] flex items-center justify-center">
                    <span className="text-white font-bold">Aa</span>
                  </div>
                  <p className="font-medium">Error</p>
                  <p className="text-sm text-[#B0BEC5]">#FF3B30</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Gradients</CardTitle>
              <CardDescription>Gradient combinations for backgrounds and elements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="w-full h-24 rounded-lg bg-gradient-to-r from-[#00FFFF] to-[#00CCFF]"></div>
                  <p className="font-medium">Primary Gradient</p>
                  <p className="text-sm text-[#B0BEC5]">from-#00FFFF to-#00CCFF</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-24 rounded-lg bg-gradient-to-br from-[#263A49] to-[#1E2F3C]"></div>
                  <p className="font-medium">Background Gradient</p>
                  <p className="text-sm text-[#B0BEC5]">from-#263A49 to-#1E2F3C</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-24 rounded-lg bg-gradient-to-r from-transparent via-[#00FFFF]/30 to-transparent"></div>
                  <p className="font-medium">Divider Gradient</p>
                  <p className="text-sm text-[#B0BEC5]">from-transparent via-#00FFFF/30 to-transparent</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Typography */}
        <TabsContent value="typography" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Headings</CardTitle>
              <CardDescription>Typography styles for headings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h1 className="heading-1">Heading 1</h1>
                <p className="text-sm text-[#B0BEC5] mt-2">text-4xl md:text-6xl font-bold gradient-text glow-text</p>
              </div>
              <div>
                <h2 className="heading-2">Heading 2</h2>
                <p className="text-sm text-[#B0BEC5] mt-2">text-3xl md:text-4xl font-bold</p>
              </div>
              <div>
                <h3 className="heading-3">Heading 3</h3>
                <p className="text-sm text-[#B0BEC5] mt-2">text-2xl font-bold</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Heading 4</h4>
                <p className="text-sm text-[#B0BEC5] mt-2">text-xl font-semibold</p>
              </div>
              <div>
                <h5 className="text-lg font-medium">Heading 5</h5>
                <p className="text-sm text-[#B0BEC5] mt-2">text-lg font-medium</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Body Text</CardTitle>
              <CardDescription>Typography styles for body content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-xl text-[#B0BEC5]">Large Body Text</p>
                <p className="text-sm text-[#B0BEC5] mt-2">text-xl text-[#B0BEC5]</p>
              </div>
              <div>
                <p className="text-body">Regular Body Text</p>
                <p className="text-sm text-[#B0BEC5] mt-2">text-body (text-[#B0BEC5])</p>
              </div>
              <div>
                <p className="text-sm text-[#B0BEC5]">Small Body Text</p>
                <p className="text-sm text-[#B0BEC5] mt-2">text-sm text-[#B0BEC5]</p>
              </div>
              <div>
                <p className="text-highlight">Highlighted Text</p>
                <p className="text-sm text-[#B0BEC5] mt-2">text-highlight (text-[#00FFFF])</p>
              </div>
              <div>
                <p className="gradient-text">Gradient Text</p>
                <p className="text-sm text-[#B0BEC5] mt-2">gradient-text</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Localized Text</CardTitle>
              <CardDescription>Examples of text in both English and Myanmar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <p className="font-medium">English:</p>
                <p>Experience the convenience of digital SIM technology in Myanmar.</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium">Myanmar:</p>
                <p className="mm">မြန်မာနိုင်ငံတွင် ဒီဂျစ်တယ် SIM နည်းပညာ၏ အဆင်ပြေလွယ်ကူမှုကို ခံစားပါ။</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium">LocalizedText Component:</p>
                <p>
                  <LocalizedText
                    en="Check if your device supports eSIM technology."
                    mm="သင့်စက်ပစ္စည်းသည် eSIM နည်းပညာကို ထောက်ပံ့ခြင်း ရှိမရှိ စစ်ဆေးပါ။"
                  />
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Buttons */}
        <TabsContent value="buttons" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Button Styles</CardTitle>
              <CardDescription>Different button styles for various actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Button className="btn-primary w-full">Primary Button</Button>
                    <p className="text-sm text-[#B0BEC5]">btn-primary</p>
                  </div>

                  <div className="space-y-2">
                    <Button className="btn-secondary w-full">Secondary Button</Button>
                    <p className="text-sm text-[#B0BEC5]">btn-secondary</p>
                  </div>

                  <div className="space-y-2">
                    <Button className="btn-tertiary">Tertiary Button</Button>
                    <p className="text-sm text-[#B0BEC5]">btn-tertiary</p>
                  </div>

                  <div className="space-y-2 flex items-center gap-4">
                    <Button className="btn-icon">
                      <Heart size={18} />
                    </Button>
                    <Button className="btn-icon">
                      <Star size={18} />
                    </Button>
                    <Button className="btn-icon">
                      <Settings size={18} />
                    </Button>
                    <p className="text-sm text-[#B0BEC5]">btn-icon</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Button className="btn-primary w-full flex items-center">
                      Check Compatibility
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-sm text-[#B0BEC5]">With icon</p>
                  </div>

                  <div className="space-y-2">
                    <Button className="btn-primary w-full" disabled>
                      Disabled Button
                    </Button>
                    <p className="text-sm text-[#B0BEC5]">Disabled state</p>
                  </div>

                  <div className="space-y-2">
                    <Button className="btn-primary w-full">
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
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
                        Loading...
                      </span>
                    </Button>
                    <p className="text-sm text-[#B0BEC5]">Loading state</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <Button className="btn-primary" size="sm">
                        Small
                      </Button>
                      <Button className="btn-primary">Default</Button>
                      <Button className="btn-primary" size="lg">
                        Large
                      </Button>
                    </div>
                    <p className="text-sm text-[#B0BEC5]">Size variants</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Button Animations</CardTitle>
              <CardDescription>Interactive button animations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <Button className="btn-primary w-full group relative overflow-hidden">
                    <span className="relative z-10">Hover Me</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#00FFFF]/0 via-[#00FFFF]/30 to-[#00FFFF]/0"
                      initial={{ x: "-100%" }}
                      animate={{ x: "200%" }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "linear" }}
                    />
                  </Button>
                  <p className="text-sm text-[#B0BEC5]">Shimmer effect</p>
                </div>

                <div className="space-y-2">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="btn-primary w-full">Scale on Hover</Button>
                  </motion.div>
                  <p className="text-sm text-[#B0BEC5]">Scale animation</p>
                </div>

                <div className="space-y-2">
                  <Button className="btn-secondary w-full group">
                    <span className="flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                    </span>
                  </Button>
                  <p className="text-sm text-[#B0BEC5]">Icon reveal</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Inputs */}
        <TabsContent value="inputs" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Form Controls</CardTitle>
              <CardDescription>Input elements for forms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="default-input">Text Input</Label>
                    <Input id="default-input" placeholder="Enter your name" className="input-primary" />
                    <p className="text-sm text-[#B0BEC5]">input-primary</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="disabled-input">Disabled Input</Label>
                    <Input id="disabled-input" placeholder="Disabled input" disabled className="input-primary" />
                    <p className="text-sm text-[#B0BEC5]">Disabled state</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="textarea">Textarea</Label>
                    <Textarea id="textarea" placeholder="Enter your message" className="input-primary min-h-[120px]" />
                    <p className="text-sm text-[#B0BEC5]">Multiline input</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="search-input">Search Input</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B0BEC5]" size={18} />
                      <Input id="search-input" placeholder="Search..." className="input-primary pl-10" />
                    </div>
                    <p className="text-sm text-[#B0BEC5]">With icon</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="airplane-mode" checked={switchValue} onCheckedChange={setSwitchValue} />
                      <Label htmlFor="airplane-mode">Airplane Mode</Label>
                    </div>
                    <p className="text-sm text-[#B0BEC5]">Switch component</p>
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="slider">Slider: {sliderValue}%</Label>
                    <Slider
                      id="slider"
                      min={0}
                      max={100}
                      step={1}
                      value={sliderValue}
                      onValueChange={setSliderValue}
                      className="w-full"
                    />
                    <p className="text-sm text-[#B0BEC5]">Slider component</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Cards */}
        <TabsContent value="cards" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="card-primary">
                <h3 className="text-xl font-bold mb-3">Primary Card</h3>
                <p className="text-[#B0BEC5]">This is the primary card style with gradient background.</p>
              </div>
              <p className="text-sm text-[#B0BEC5]">card-primary</p>
            </div>

            <div className="space-y-2">
              <div className="card-secondary">
                <h3 className="text-xl font-bold mb-3">Secondary Card</h3>
                <p className="text-[#B0BEC5]">This is the secondary card style with solid background.</p>
              </div>
              <p className="text-sm text-[#B0BEC5]">card-secondary</p>
            </div>

            <div className="space-y-2">
              <div className="card-primary card-hover">
                <h3 className="text-xl font-bold mb-3">Hover Card</h3>
                <p className="text-[#B0BEC5]">This card has hover effects. Try hovering over it!</p>
              </div>
              <p className="text-sm text-[#B0BEC5]">card-primary card-hover</p>
            </div>

            <div className="space-y-2">
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Glass Card</h3>
                <p className="text-[#B0BEC5]">This card has a glassmorphism effect.</p>
              </div>
              <p className="text-sm text-[#B0BEC5]">glass</p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Feature Card</CardTitle>
              <CardDescription>Example of a feature card with icon</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#00FFFF]/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Zap className="h-6 w-6 text-[#00FFFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Instant Activation</h3>
                  <p className="text-[#B0BEC5]">
                    Activate your eSIM instantly by scanning a QR code - no physical SIM card needed.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="text-[#00FFFF] p-0">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Components */}
        <TabsContent value="components" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Badges</CardTitle>
              <CardDescription>Status and category indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <div className="space-y-2">
                  <Badge className="badge-primary">New Feature</Badge>
                  <p className="text-sm text-[#B0BEC5]">badge-primary</p>
                </div>
                <div className="space-y-2">
                  <Badge className="badge-secondary">Coming Soon</Badge>
                  <p className="text-sm text-[#B0BEC5]">badge-secondary</p>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="text-[#00FFFF] border-[#00FFFF]/30">
                    Premium
                  </Badge>
                  <p className="text-sm text-[#B0BEC5]">outline variant</p>
                </div>
                <div className="space-y-2">
                  <Badge variant="destructive">Error</Badge>
                  <p className="text-sm text-[#B0BEC5]">destructive variant</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Feature Icons</CardTitle>
              <CardDescription>Icons used to represent features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {[
                  { icon: <Smartphone className="h-8 w-8 text-[#00FFFF]" />, label: "Multiple Profiles" },
                  { icon: <Zap className="h-8 w-8 text-[#00FFFF]" />, label: "Instant Activation" },
                  { icon: <Shield className="h-8 w-8 text-[#00FFFF]" />, label: "Enhanced Security" },
                  { icon: <Globe className="h-8 w-8 text-[#00FFFF]" />, label: "Global Compatibility" },
                  { icon: <RefreshCw className="h-8 w-8 text-[#00FFFF]" />, label: "Easy Switching" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#00FFFF]/10 flex items-center justify-center mb-3">
                      {item.icon}
                    </div>
                    <p className="font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dividers</CardTitle>
              <CardDescription>Separators for content sections</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-2">
                <div className="divider"></div>
                <p className="text-sm text-[#B0BEC5]">divider</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="flex-grow h-px bg-[#00FFFF]/10"></div>
                  <span className="px-4 text-[#B0BEC5]">OR</span>
                  <div className="flex-grow h-px bg-[#00FFFF]/10"></div>
                </div>
                <p className="text-sm text-[#B0BEC5]">divider with text</p>
              </div>

              <div className="space-y-2">
                <div className="w-16 h-1 bg-gradient-to-r from-[#00FFFF] to-[#00CCFF] rounded-full"></div>
                <p className="text-sm text-[#B0BEC5]">section divider</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
