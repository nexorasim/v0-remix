"use client"

import { useState } from "react"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { EnhancedCard } from "@/components/ui/enhanced-card"
import { EnhancedInput } from "@/components/ui/enhanced-input"
import { EnhancedTooltip } from "@/components/ui/enhanced-tooltip"
import { EnhancedAlert } from "@/components/ui/enhanced-alert"
import { EnhancedProgress } from "@/components/ui/enhanced-progress"
import { EnhancedAvatar } from "@/components/ui/enhanced-avatar"
import { EnhancedSkeleton } from "@/components/ui/enhanced-skeleton"
import { EnhancedTagInput } from "@/components/ui/enhanced-tag-input"
import { EnhancedFileUpload } from "@/components/ui/enhanced-file-upload"
import { EnhancedNotification } from "@/components/ui/enhanced-notification"
import { EnhancedModal } from "@/components/ui/enhanced-modal"
import { EnhancedDrawer } from "@/components/ui/enhanced-drawer"
import { EnhancedTabs } from "@/components/ui/enhanced-tabs"
import { EnhancedAccordion } from "@/components/ui/enhanced-accordion"
import { EnhancedDropdown } from "@/components/ui/enhanced-dropdown"
import { EnhancedCarousel } from "@/components/ui/enhanced-carousel"
import { EnhancedPopover } from "@/components/ui/enhanced-popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Search,
  Heart,
  Star,
  Settings,
  Smartphone,
  Zap,
  User,
  Info,
  AlertTriangle,
  Bell,
  MessageSquare,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

export default function UIKitPage() {
  const [tags, setTags] = useState<string[]>(["eSIM", "Digital"])
  const [files, setFiles] = useState<File[]>([])
  const [uploadProgress, setUploadProgress] = useState(0)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationType, setNotificationType] = useState<"default" | "info" | "success" | "warning" | "error">(
    "default",
  )

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalSize, setModalSize] = useState<"sm" | "md" | "lg" | "xl" | "full">("md")
  const [modalPosition, setModalPosition] = useState<"center" | "top" | "bottom">("center")

  // Drawer states
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [drawerPosition, setDrawerPosition] = useState<"left" | "right" | "top" | "bottom">("right")

  // Dropdown state
  const [selectedItem, setSelectedItem] = useState("item1")

  // Simulate upload progress
  const simulateUpload = () => {
    setUploadProgress(0)
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 300)
  }

  // Show notification with type
  const showNotificationWithType = (type: "default" | "info" | "success" | "warning" | "error") => {
    setNotificationType(type)
    setShowNotification(true)
  }

  // Sample tabs data
  const tabsData = [
    {
      id: "tab1",
      label: "Profile",
      icon: <User size={16} />,
      content: (
        <div className="p-4 bg-[#1E2F3C] rounded-lg">
          <h3 className="text-lg font-medium mb-2">Profile Content</h3>
          <p className="text-[#B0BEC5]">This is the profile tab content.</p>
        </div>
      ),
    },
    {
      id: "tab2",
      label: "Settings",
      icon: <Settings size={16} />,
      content: (
        <div className="p-4 bg-[#1E2F3C] rounded-lg">
          <h3 className="text-lg font-medium mb-2">Settings Content</h3>
          <p className="text-[#B0BEC5]">This is the settings tab content.</p>
        </div>
      ),
    },
    {
      id: "tab3",
      label: "Messages",
      icon: <MessageSquare size={16} />,
      content: (
        <div className="p-4 bg-[#1E2F3C] rounded-lg">
          <h3 className="text-lg font-medium mb-2">Messages Content</h3>
          <p className="text-[#B0BEC5]">This is the messages tab content.</p>
        </div>
      ),
    },
  ]

  // Sample accordion data
  const accordionData = [
    {
      id: "item1",
      title: "What is an eSIM?",
      content: (
        <p className="text-[#B0BEC5]">
          An eSIM (embedded SIM) is a digital SIM that allows you to activate a cellular plan from your carrier without
          having to use a physical SIM card.
        </p>
      ),
      icon: <Info size={16} className="text-[#00FFFF]" />,
    },
    {
      id: "item2",
      title: "How do I activate an eSIM?",
      content: (
        <p className="text-[#B0BEC5]">
          To activate an eSIM, you'll need to scan a QR code provided by your carrier or enter an activation code
          manually. The exact steps vary by device.
        </p>
      ),
      icon: <Zap size={16} className="text-[#00FFFF]" />,
    },
    {
      id: "item3",
      title: "Which devices support eSIM?",
      content: (
        <p className="text-[#B0BEC5]">
          Most modern smartphones and tablets support eSIM, including iPhone XS and newer, Google Pixel 3 and newer, and
          Samsung Galaxy S20 and newer.
        </p>
      ),
      icon: <Smartphone size={16} className="text-[#00FFFF]" />,
    },
  ]

  // Sample dropdown items
  const dropdownItems = [
    {
      id: "item1",
      label: "Option 1",
      icon: <User size={16} />,
    },
    {
      id: "item2",
      label: "Option 2",
      icon: <Settings size={16} />,
    },
    {
      id: "item3",
      label: "Option 3",
      icon: <Bell size={16} />,
    },
    {
      id: "item4",
      label: "Disabled Option",
      icon: <AlertTriangle size={16} />,
      disabled: true,
    },
  ]

  // Sample carousel items
  const carouselItems = [
    <div
      key="slide1"
      className="w-full h-64 bg-gradient-to-r from-[#00FFFF]/20 to-[#00CCFF]/20 flex items-center justify-center"
    >
      <h3 className="text-2xl font-bold">Slide 1</h3>
    </div>,
    <div
      key="slide2"
      className="w-full h-64 bg-gradient-to-r from-[#00FFFF]/30 to-[#00CCFF]/30 flex items-center justify-center"
    >
      <h3 className="text-2xl font-bold">Slide 2</h3>
    </div>,
    <div
      key="slide3"
      className="w-full h-64 bg-gradient-to-r from-[#00FFFF]/40 to-[#00CCFF]/40 flex items-center justify-center"
    >
      <h3 className="text-2xl font-bold">Slide 3</h3>
    </div>,
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="heading-1 mb-8">eSIM Myanmar UI Kit</h1>
      <p className="text-xl text-[#B0BEC5] max-w-3xl mb-12">
        A comprehensive collection of UI components and design patterns for the eSIM Myanmar application.
      </p>

      <Tabs defaultValue="dialogs" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="dialogs">Dialogs & Overlays</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
          <TabsTrigger value="data-display">Data Display</TabsTrigger>
          <TabsTrigger value="inputs">Inputs & Forms</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
        </TabsList>

        {/* Dialogs & Overlays */}
        <TabsContent value="dialogs" className="space-y-8">
          <EnhancedCard>
            <CardHeader>
              <CardTitle>Modal</CardTitle>
              <CardDescription>Dialog windows for important interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <EnhancedButton
                    variant="primary"
                    onClick={() => {
                      setModalSize("md")
                      setModalPosition("center")
                      setIsModalOpen(true)
                    }}
                  >
                    Open Default Modal
                  </EnhancedButton>

                  <EnhancedButton
                    variant="secondary"
                    onClick={() => {
                      setModalSize("sm")
                      setModalPosition("center")
                      setIsModalOpen(true)
                    }}
                  >
                    Open Small Modal
                  </EnhancedButton>

                  <EnhancedButton
                    variant="secondary"
                    onClick={() => {
                      setModalSize("lg")
                      setModalPosition("center")
                      setIsModalOpen(true)
                    }}
                  >
                    Open Large Modal
                  </EnhancedButton>

                  <EnhancedButton
                    variant="secondary"
                    onClick={() => {
                      setModalSize("md")
                      setModalPosition("top")
                      setIsModalOpen(true)
                    }}
                  >
                    Open Top Modal
                  </EnhancedButton>

                  <EnhancedButton
                    variant="secondary"
                    onClick={() => {
                      setModalSize("md")
                      setModalPosition("bottom")
                      setIsModalOpen(true)
                    }}
                  >
                    Open Bottom Modal
                  </EnhancedButton>

                  <EnhancedButton
                    variant="secondary"
                    onClick={() => {
                      setModalSize("full")
                      setModalPosition("center")
                      setIsModalOpen(true)
                    }}
                  >
                    Open Full Screen Modal
                  </EnhancedButton>
                </div>

                <EnhancedModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  title="Modal Title"
                  description="This is a description of the modal content."
                  size={modalSize}
                  position={modalPosition}
                  footer={
                    <>
                      <EnhancedButton variant="secondary" onClick={() => setIsModalOpen(false)}>
                        Cancel
                      </EnhancedButton>
                      <EnhancedButton variant="primary" onClick={() => setIsModalOpen(false)}>
                        Confirm
                      </EnhancedButton>
                    </>
                  }
                >
                  <div className="space-y-4">
                    <p className="text-[#B0BEC5]">
                      This is the content of the modal. You can put any components or text here.
                    </p>
                    <div className="p-4 bg-[#263A49] rounded-lg">
                      <p className="text-sm">Modal size: {modalSize}</p>
                      <p className="text-sm">Modal position: {modalPosition}</p>
                    </div>
                  </div>
                </EnhancedModal>
              </div>
            </CardContent>
          </EnhancedCard>

          <EnhancedCard>
            <CardHeader>
              <CardTitle>Drawer</CardTitle>
              <CardDescription>Slide-in panels for side content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <EnhancedButton
                    variant="primary"
                    onClick={() => {
                      setDrawerPosition("right")
                      setIsDrawerOpen(true)
                    }}
                  >
                    Open Right Drawer
                  </EnhancedButton>

                  <EnhancedButton
                    variant="secondary"
                    onClick={() => {
                      setDrawerPosition("left")
                      setIsDrawerOpen(true)
                    }}
                  >
                    Open Left Drawer
                  </EnhancedButton>

                  <EnhancedButton
                    variant="secondary"
                    onClick={() => {
                      setDrawerPosition("top")
                      setIsDrawerOpen(true)
                    }}
                  >
                    Open Top Drawer
                  </EnhancedButton>

                  <EnhancedButton
                    variant="secondary"
                    onClick={() => {
                      setDrawerPosition("bottom")
                      setIsDrawerOpen(true)
                    }}
                  >
                    Open Bottom Drawer
                  </EnhancedButton>
                </div>

                <EnhancedDrawer
                  isOpen={isDrawerOpen}
                  onClose={() => setIsDrawerOpen(false)}
                  title="Drawer Title"
                  description="This is a description of the drawer content."
                  position={drawerPosition}
                  footer={
                    <div className="flex justify-end">
                      <EnhancedButton variant="primary" onClick={() => setIsDrawerOpen(false)}>
                        Close Drawer
                      </EnhancedButton>
                    </div>
                  }
                >
                  <div className="space-y-4">
                    <p className="text-[#B0BEC5]">
                      This is the content of the drawer. You can put any components or text here.
                    </p>
                    <div className="p-4 bg-[#263A49] rounded-lg">
                      <p className="text-sm">Drawer position: {drawerPosition}</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="drawer-input">Sample Input</Label>
                      <EnhancedInput id="drawer-input" placeholder="Enter some text..." />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="drawer-textarea">Sample Textarea</Label>
                      <Textarea
                        id="drawer-textarea"
                        placeholder="Enter a longer message..."
                        className="min-h-[100px] bg-[#1E2F3C] border-[#00FFFF]/30 focus:border-[#00FFFF]"
                      />
                    </div>
                  </div>
                </EnhancedDrawer>
              </div>
            </CardContent>
          </EnhancedCard>

          <EnhancedCard>
            <CardHeader>
              <CardTitle>Popover</CardTitle>
              <CardDescription>Small floating content panels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Click Trigger</h3>
                  <div className="flex justify-center">
                    <EnhancedPopover
                      trigger={<EnhancedButton variant="secondary">Click Me</EnhancedButton>}
                      content={
                        <div className="w-64">
                          <h4 className="font-medium mb-2">Popover Title</h4>
                          <p className="text-sm text-[#B0BEC5]">
                            This is a popover with content that appears when you click the trigger.
                          </p>
                        </div>
                      }
                    />
                  </div>
                  <p className="text-sm text-[#B0BEC5] text-center">Default popover (click to toggle)</p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Hover Trigger</h3>
                  <div className="flex justify-center">
                    <EnhancedPopover
                      trigger={<EnhancedButton variant="secondary">Hover Me</EnhancedButton>}
                      content={
                        <div className="w-64">
                          <h4 className="font-medium mb-2">Hover Popover</h4>
                          <p className="text-sm text-[#B0BEC5]">
                            This popover appears when you hover over the trigger.
                          </p>
                        </div>
                      }
                      openOnHover
                    />
                  </div>
                  <p className="text-sm text-[#B0BEC5] text-center">openOnHover</p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-center">
                    <EnhancedPopover
                      trigger={<EnhancedButton variant="secondary">Top Position</EnhancedButton>}
                      content={
                        <div className="w-48">
                          <p className="text-sm">Top position popover</p>
                        </div>
                      }
                      position="top"
                    />
                  </div>
                  <p className="text-sm text-[#B0BEC5] text-center">position="top"</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-center">
                    <EnhancedPopover
                      trigger={<EnhancedButton variant="secondary">Bottom Position</EnhancedButton>}
                      content={
                        <div className="w-48">
                          <p className="text-sm">Bottom position popover</p>
                        </div>
                      }
                      position="bottom"
                    />
                  </div>
                  <p className="text-sm text-[#B0BEC5] text-center">position="bottom"</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-center">
                    <EnhancedPopover
                      trigger={<EnhancedButton variant="secondary">Left Position</EnhancedButton>}
                      content={
                        <div className="w-48">
                          <p className="text-sm">Left position popover</p>
                        </div>
                      }
                      position="left"
                    />
                  </div>
                  <p className="text-sm text-[#B0BEC5] text-center">position="left"</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-center">
                    <EnhancedPopover
                      trigger={<EnhancedButton variant="secondary">Right Position</EnhancedButton>}
                      content={
                        <div className="w-48">
                          <p className="text-sm">Right position popover</p>
                        </div>
                      }
                      position="right"
                    />
                  </div>
                  <p className="text-sm text-[#B0BEC5] text-center">position="right"</p>
                </div>
              </div>
            </CardContent>
          </EnhancedCard>
        </TabsContent>

        {/* Navigation */}
        <TabsContent value="navigation" className="space-y-8">
          <EnhancedCard>
            <CardHeader>
              <CardTitle>Tabs</CardTitle>
              <CardDescription>Tabbed interface for organizing content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Default Tabs</h3>
                  <EnhancedTabs tabs={tabsData} />
                  <p className="text-sm text-[#B0BEC5] mt-2">variant="default"</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Pills Variant</h3>
                  <EnhancedTabs tabs={tabsData} variant="pills" />
                  <p className="text-sm text-[#B0BEC5] mt-2">variant="pills"</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Underline Variant</h3>
                  <EnhancedTabs tabs={tabsData} variant="underline" />
                  <p className="text-sm text-[#B0BEC5] mt-2">variant="underline"</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Enclosed Variant</h3>
                  <EnhancedTabs tabs={tabsData} variant="enclosed" />
                  <p className="text-sm text-[#B0BEC5] mt-2">variant="enclosed"</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Full Width Tabs</h3>
                  <EnhancedTabs tabs={tabsData} variant="enclosed" fullWidth />
                  <p className="text-sm text-[#B0BEC5] mt-2">fullWidth</p>
                </div>
              </div>
            </CardContent>
          </EnhancedCard>

          <EnhancedCard>
            <CardHeader>
              <CardTitle>Accordion</CardTitle>
              <CardDescription>Collapsible content panels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Default Accordion</h3>
                  <EnhancedAccordion items={accordionData} />
                  <p className="text-sm text-[#B0BEC5] mt-2">variant="default"</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Bordered Variant</h3>
                  <EnhancedAccordion items={accordionData} variant="bordered" />
                  <p className="text-sm text-[#B0BEC5] mt-2">variant="bordered"</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Separated Variant</h3>
                  <EnhancedAccordion items={accordionData} variant="separated" />
                  <p className="text-sm text-[#B0BEC5] mt-2">variant="separated"</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Minimal Variant</h3>
                  <EnhancedAccordion items={accordionData} variant="minimal" />
                  <p className="text-sm text-[#B0BEC5] mt-2">variant="minimal"</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Multiple Open Items</h3>
                  <EnhancedAccordion
                    items={accordionData}
                    variant="bordered"
                    multiple
                    defaultOpen={["item1", "item2"]}
                  />
                  <p className="text-sm text-[#B0BEC5] mt-2">multiple defaultOpen={["item1", "item2"]}</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Plus/Minus Icons</h3>
                  <EnhancedAccordion items={accordionData} variant="bordered" iconType="plus" />
                  <p className="text-sm text-[#B0BEC5] mt-2">iconType="plus"</p>
                </div>
              </div>
            </CardContent>
          </EnhancedCard>

          <EnhancedCard>
            <CardHeader>
              <CardTitle>Dropdown</CardTitle>
              <CardDescription>Dropdown menus for navigation and selection</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Default Dropdown</h3>
                    <div className="flex justify-center">
                      <EnhancedDropdown
                        trigger={
                          <EnhancedButton variant="secondary">
                            Select Option <ChevronDown className="ml-2 h-4 w-4" />
                          </EnhancedButton>
                        }
                        items={dropdownItems}
                        value={selectedItem}
                        onChange={setSelectedItem}
                      />
                    </div>
                    <p className="text-sm text-[#B0BEC5] text-center">Default dropdown</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Position Variants</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                      <EnhancedDropdown
                        trigger={
                          <EnhancedButton variant="secondary" size="sm">
                            Bottom Left <ChevronDown className="ml-1 h-3 w-3" />
                          </EnhancedButton>
                        }
                        items={dropdownItems}
                        position="bottom-left"
                      />

                      <EnhancedDropdown
                        trigger={
                          <EnhancedButton variant="secondary" size="sm">
                            Bottom Right <ChevronDown className="ml-1 h-3 w-3" />
                          </EnhancedButton>
                        }
                        items={dropdownItems}
                        position="bottom-right"
                      />

                      <EnhancedDropdown
                        trigger={
                          <EnhancedButton variant="secondary" size="sm">
                            Top Left <ChevronDown className="ml-1 h-3 w-3" />
                          </EnhancedButton>
                        }
                        items={dropdownItems}
                        position="top-left"
                      />

                      <EnhancedDropdown
                        trigger={
                          <EnhancedButton variant="secondary" size="sm">
                            Top Right <ChevronDown className="ml-1 h-3 w-3" />
                          </EnhancedButton>
                        }
                        items={dropdownItems}
                        position="top-right"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Width Variants</h3>
                    <div className="flex flex-col items-center gap-4">
                      <EnhancedDropdown
                        trigger={
                          <EnhancedButton variant="secondary">
                            Auto Width <ChevronDown className="ml-2 h-4 w-4" />
                          </EnhancedButton>
                        }
                        items={dropdownItems}
                        width="auto"
                      />

                      <EnhancedDropdown
                        trigger={
                          <EnhancedButton variant="secondary">
                            Match Trigger Width <ChevronDown className="ml-2 h-4 w-4" />
                          </EnhancedButton>
                        }
                        items={dropdownItems}
                        width="trigger"
                      />

                      <EnhancedDropdown
                        trigger={
                          <EnhancedButton variant="secondary">
                            Fixed Width (200px) <ChevronDown className="ml-2 h-4 w-4" />
                          </EnhancedButton>
                        }
                        items={dropdownItems}
                        width={200}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Custom Trigger</h3>
                    <div className="flex justify-center">
                      <EnhancedDropdown
                        trigger={
                          <div className="flex items-center gap-2 p-2 rounded-lg bg-[#263A49] hover:bg-[#00FFFF]/10 cursor-pointer">
                            <EnhancedAvatar size="sm" fallback="JD" />
                            <div>
                              <div className="font-medium">John Doe</div>
                              <div className="text-xs text-[#B0BEC5]">john@example.com</div>
                            </div>
                            <ChevronDown className="ml-2 h-4 w-4" />
                          </div>
                        }
                        items={[
                          { id: "profile", label: "View Profile", icon: <User size={16} /> },
                          { id: "settings", label: "Settings", icon: <Settings size={16} /> },
                          { id: "logout", label: "Logout", icon: <ArrowRight size={16} /> },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </EnhancedCard>
        </TabsContent>

        {/* Data Display */}
        <TabsContent value="data-display" className="space-y-8">
          <EnhancedCard>
            <CardHeader>
              <CardTitle>Carousel</CardTitle>
              <CardDescription>Slideshow component for cycling through elements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Default Carousel</h3>
                  <EnhancedCarousel items={carouselItems} />
                  <p className="text-sm text-[#B0BEC5] mt-2">Default carousel with slide effect</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Fade Effect</h3>
                    <EnhancedCarousel items={carouselItems} effect="fade" />
                    <p className="text-sm text-[#B0BEC5] mt-2">effect="fade"</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Zoom Effect</h3>
                    <EnhancedCarousel items={carouselItems} effect="zoom" />
                    <p className="text-sm text-[#B0BEC5] mt-2">effect="zoom"</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Auto Play Carousel</h3>
                  <EnhancedCarousel items={carouselItems} autoPlay interval={3000} />
                  <p className="text-sm text-[#B0BEC5] mt-2">autoPlay interval={3000}</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Customized Carousel</h3>
                  <EnhancedCarousel
                    items={carouselItems}
                    showArrows={true}
                    showDots={true}
                    infinite={true}
                    effect="slide"
                    arrowClassName="bg-[#00FFFF]/20 hover:bg-[#00FFFF]/40 text-white"
                  />
                  <p className="text-sm text-[#B0BEC5] mt-2">Custom styling with all controls</p>
                </div>
              </div>
            </CardContent>
          </EnhancedCard>

          <EnhancedCard>
            <CardHeader>
              <CardTitle>Avatars</CardTitle>
              <CardDescription>User avatars with various styles and states</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Avatar Sizes</h3>
                  <div className="flex flex-wrap gap-4 items-end">
                    <div className="space-y-2">
                      <EnhancedAvatar size="xs" fallback="XS" />
                      <p className="text-sm text-[#B0BEC5] text-center">size="xs"</p>
                    </div>

                    <div className="space-y-2">
                      <EnhancedAvatar size="sm" fallback="SM" />
                      <p className="text-sm text-[#B0BEC5] text-center">size="sm"</p>
                    </div>

                    <div className="space-y-2">
                      <EnhancedAvatar size="md" fallback="MD" />
                      <p className="text-sm text-[#B0BEC5] text-center">size="md"</p>
                    </div>

                    <div className="space-y-2">
                      <EnhancedAvatar size="lg" fallback="LG" />
                      <p className="text-sm text-[#B0BEC5] text-center">size="lg"</p>
                    </div>

                    <div className="space-y-2">
                      <EnhancedAvatar size="xl" fallback="XL" />
                      <p className="text-sm text-[#B0BEC5] text-center">size="xl"</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-medium">Avatar Variants</h3>
                  <div className="flex flex-wrap gap-4">
                    <div className="space-y-2">
                      <EnhancedAvatar variant="circle" fallback="CI" />
                      <p className="text-sm text-[#B0BEC5] text-center">variant="circle"</p>
                    </div>

                    <div className="space-y-2">
                      <EnhancedAvatar variant="rounded" fallback="RO" />
                      <p className="text-sm text-[#B0BEC5] text-center">variant="rounded"</p>
                    </div>

                    <div className="space-y-2">
                      <EnhancedAvatar variant="square" fallback="SQ" />
                      <p className="text-sm text-[#B0BEC5] text-center">variant="square"</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Avatar with Status</h3>
                  <div className="flex flex-wrap gap-4">
                    <div className="space-y-2">
                      <EnhancedAvatar status="online" fallback="ON" />
                      <p className="text-sm text-[#B0BEC5] text-center">status="online"</p>
                    </div>

                    <div className="space-y-2">
                      <EnhancedAvatar status="offline" fallback="OF" />
                      <p className="text-sm text-[#B0BEC5] text-center">status="offline"</p>
                    </div>

                    <div className="space-y-2">
                      <EnhancedAvatar status="away" fallback="AW" />
                      <p className="text-sm text-[#B0BEC5] text-center">status="away"</p>
                    </div>

                    <div className="space-y-2">
                      <EnhancedAvatar status="busy" fallback="BU" />
                      <p className="text-sm text-[#B0BEC5] text-center">status="busy"</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-medium">Avatar with Border</h3>
                  <div className="flex flex-wrap gap-4">
                    <div className="space-y-2">
                      <EnhancedAvatar withBorder fallback="BO" />
                      <p className="text-sm text-[#B0BEC5] text-center">withBorder</p>
                    </div>

                    <div className="space-y-2">
                      <EnhancedAvatar withBorder borderColor="border-green-500" fallback="GR" />
                      <p className="text-sm text-[#B0BEC5] text-center">borderColor="border-green-500"</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-medium">Animated Avatar</h3>
                  <div className="flex flex-wrap gap-4">
                    <div className="space-y-2">
                      <EnhancedAvatar withAnimation animationType="pulse" fallback="PU" />
                      <p className="text-sm text-[#B0BEC5] text-center">animationType="pulse"</p>
                    </div>

                    <div className="space-y-2">
                      <EnhancedAvatar withAnimation animationType="bounce" fallback="BO" />
                      <p className="text-sm text-[#B0BEC5] text-center">animationType="bounce"</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </EnhancedCard>

          <EnhancedCard>
            <CardHeader>
              <CardTitle>Skeletons</CardTitle>
              <CardDescription>Loading state placeholders for various components</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Skeleton Variants</h3>
                  <div className="space-y-4">
                    <div>
                      <EnhancedSkeleton variant="text" lines={3} />
                      <p className="text-sm text-[#B0BEC5] mt-2">variant="text" lines={3}</p>
                    </div>

                    <div>
                      <EnhancedSkeleton variant="avatar" />
                      <p className="text-sm text-[#B0BEC5] mt-2">variant="avatar"</p>
                    </div>

                    <div>
                      <EnhancedSkeleton variant="button" />
                      <p className="text-sm text-[#B0BEC5] mt-2">variant="button"</p>
                    </div>

                    <div>
                      <EnhancedSkeleton variant="input" />
                      <p className="text-sm text-[#B0BEC5] mt-2">variant="input"</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Skeleton Card Example</h3>
                  <div className="space-y-4">
                    <EnhancedCard>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <EnhancedSkeleton variant="avatar" />
                          <div className="space-y-2 flex-1">
                            <EnhancedSkeleton className="h-4 w-1/2" />
                            <EnhancedSkeleton className="h-3 w-1/3" />
                          </div>
                        </div>
                        <EnhancedSkeleton variant="text" lines={3} />
                        <div className="mt-4 flex justify-end">
                          <EnhancedSkeleton variant="button" />
                        </div>
                      </CardContent>
                    </EnhancedCard>
                    <p className="text-sm text-[#B0BEC5]">Card loading state example</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </EnhancedCard>
        </TabsContent>

        {/* Inputs & Forms */}
        <TabsContent value="inputs" className="space-y-8">
          <EnhancedCard>
            <CardHeader>
              <CardTitle>Enhanced Inputs</CardTitle>
              <CardDescription>Improved input components with various styles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="primary-input">Primary Input</Label>
                    <EnhancedInput id="primary-input" variant="primary" placeholder="Enter your name" />
                    <p className="text-sm text-[#B0BEC5]">variant="primary"</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="secondary-input">Secondary Input</Label>
                    <EnhancedInput id="secondary-input" variant="secondary" placeholder="Enter your email" />
                    <p className="text-sm text-[#B0BEC5]">variant="secondary"</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="minimal-input">Minimal Input</Label>
                    <EnhancedInput id="minimal-input" variant="minimal" placeholder="Enter your phone number" />
                    <p className="text-sm text-[#B0BEC5]">variant="minimal"</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="left-icon-input">Input with Left Icon</Label>
                    <EnhancedInput
                      id="left-icon-input"
                      variant="primary"
                      placeholder="Search..."
                      leftIcon={<Search size={18} />}
                    />
                    <p className="text-sm text-[#B0BEC5]">leftIcon</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="right-icon-input">Input with Right Icon</Label>
                    <EnhancedInput
                      id="right-icon-input"
                      variant="primary"
                      placeholder="Enter your username"
                      rightIcon={<User size={18} />}
                    />
                    <p className="text-sm text-[#B0BEC5]">rightIcon</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="error-input">Input with Error</Label>
                    <EnhancedInput id="error-input" variant="primary" placeholder="Enter your password" isError />
                    <p className="text-sm text-red-400">This field is required</p>
                    <p className="text-sm text-[#B0BEC5]">isError</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </EnhancedCard>

          <EnhancedCard>
            <CardHeader>
              <CardTitle>Tag Input</CardTitle>
              <CardDescription>Input for multiple tags or keywords</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="tag-input">Tags</Label>
                  <EnhancedTagInput value={tags} onChange={setTags} placeholder="Add a tag..." maxTags={5} />
                  <p className="text-sm text-[#B0BEC5]">Type and press Enter to add tags</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tag-input-variant">Tag Input Variants</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <EnhancedTagInput
                        value={["Default", "Variant"]}
                        onChange={() => {}}
                        placeholder="Default variant..."
                        variant="default"
                      />
                      <p className="text-sm text-[#B0BEC5] mt-1">variant="default"</p>
                    </div>
                    <div>
                      <EnhancedTagInput
                        value={["Primary", "Variant"]}
                        onChange={() => {}}
                        placeholder="Primary variant..."
                        variant="primary"
                      />
                      <p className="text-sm text-[#B0BEC5] mt-1">variant="primary"</p>
                    </div>
                    <div>
                      <EnhancedTagInput
                        value={["Secondary", "Variant"]}
                        onChange={() => {}}
                        placeholder="Secondary variant..."
                        variant="secondary"
                      />
                      <p className="text-sm text-[#B0BEC5] mt-1">variant="secondary"</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </EnhancedCard>

          <EnhancedCard>
            <CardHeader>
              <CardTitle>File Upload</CardTitle>
              <CardDescription>Enhanced file upload component with drag and drop support</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <EnhancedFileUpload
                  onChange={(files) => {
                    setFiles(files)
                    simulateUpload()
                  }}
                  value={files}
                  multiple
                  accept="image/*,.pdf"
                  maxSize={5}
                  uploadProgress={uploadProgress}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Compact Variant</h3>
                    <EnhancedFileUpload onChange={() => {}} variant="compact" showPreview={false} />
                    <p className="text-sm text-[#B0BEC5] mt-1">variant="compact"</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Minimal Variant</h3>
                    <EnhancedFileUpload onChange={() => {}} variant="minimal" showPreview={false} />
                    <p className="text-sm text-[#B0BEC5] mt-1">variant="minimal"</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </EnhancedCard>

          <EnhancedCard>
            <CardHeader>
              <CardTitle>Form Example</CardTitle>
              <CardDescription>Complete form with various input components</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="form-name">Full Name</Label>
                      <EnhancedInput id="form-name" placeholder="Enter your full name" leftIcon={<User size={18} />} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="form-email">Email Address</Label>
                      <EnhancedInput
                        id="form-email"
                        type="email"
                        placeholder="Enter your email address"
                        leftIcon={<Mail size={18} />}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="form-phone">Phone Number</Label>
                      <EnhancedInput
                        id="form-phone"
                        placeholder="Enter your phone number"
                        leftIcon={<Phone size={18} />}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="form-address">Address</Label>
                      <EnhancedInput
                        id="form-address"
                        placeholder="Enter your address"
                        leftIcon={<MapPin size={18} />}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="form-tags">Interests</Label>
                      <EnhancedTagInput
                        value={["Technology", "Mobile"]}
                        onChange={() => {}}
                        placeholder="Add interests..."
                        maxTags={5}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="form-message">Message</Label>
                      <Textarea
                        id="form-message"
                        placeholder="Enter your message"
                        className="min-h-[100px] bg-[#1E2F3C] border-[#00FFFF]/30 focus:border-[#00FFFF]"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#00FFFF]/10 flex justify-end">
                  <EnhancedButton variant="primary">Submit Form</EnhancedButton>
                </div>
              </div>
            </CardContent>
          </EnhancedCard>
        </TabsContent>

        {/* Feedback */}
        <TabsContent value="feedback" className="space-y-8">
          <EnhancedCard>
            <CardHeader>
              <CardTitle>Tooltips</CardTitle>
              <CardDescription>Informational tooltips with various positions and styles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-center">
                      <EnhancedTooltip content="This is a top tooltip" position="top">
                        <EnhancedButton variant="secondary">Hover Me (Top)</EnhancedButton>
                      </EnhancedTooltip>
                    </div>
                    <p className="text-sm text-[#B0BEC5] text-center">position="top"</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-center">
                      <EnhancedTooltip content="This is a bottom tooltip" position="bottom">
                        <EnhancedButton variant="secondary">Hover Me (Bottom)</EnhancedButton>
                      </EnhancedTooltip>
                    </div>
                    <p className="text-sm text-[#B0BEC5] text-center">position="bottom"</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-center">
                        <EnhancedTooltip content="This is a left tooltip" position="left">
                          <EnhancedButton variant="secondary">Hover Me (Left)</EnhancedButton>
                        </EnhancedTooltip>
                      </div>
                      <p className="text-sm text-[#B0BEC5] text-center">position="left"</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-center">
                        <EnhancedTooltip content="This is a right tooltip" position="right">
                          <EnhancedButton variant="secondary">Hover Me (Right)</EnhancedButton>
                        </EnhancedTooltip>
                      </div>
                      <p className="text-sm text-[#B0BEC5] text-center">position="right"</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-center">
                      <EnhancedTooltip content="Default tooltip style" variant="default">
                        <EnhancedButton variant="secondary">Default Style</EnhancedButton>
                      </EnhancedTooltip>
                    </div>
                    <p className="text-sm text-[#B0BEC5] text-center">variant="default"</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-center">
                      <EnhancedTooltip content="Information tooltip style" variant="info">
                        <EnhancedButton variant="secondary">Info Style</EnhancedButton>
                      </EnhancedTooltip>
                    </div>
                    <p className="text-sm text-[#B0BEC5] text-center">variant="info"</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-center">
                        <EnhancedTooltip content="Success tooltip style" variant="success">
                          <EnhancedButton variant="secondary">Success Style</EnhancedButton>
                        </EnhancedTooltip>
                      </div>
                      <p className="text-sm text-[#B0BEC5] text-center">variant="success"</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-center">
                        <EnhancedTooltip content="Warning tooltip style" variant="warning">
                          <EnhancedButton variant="secondary">Warning Style</EnhancedButton>
                        </EnhancedTooltip>
                      </div>
                      <p className="text-sm text-[#B0BEC5] text-center">variant="warning"</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </EnhancedCard>

          <EnhancedCard>
            <CardHeader>
              <CardTitle>Alerts</CardTitle>
              <CardDescription>Alert components for various types of messages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <EnhancedAlert
                  variant="default"
                  title="Default Alert"
                  description="This is a default alert with standard styling."
                />

                <EnhancedAlert
                  variant="info"
                  title="Information"
                  description="This is an informational alert with blue styling."
                />

                <EnhancedAlert
                  variant="success"
                  title="Success"
                  description="This is a success alert with green styling."
                />

                <EnhancedAlert
                  variant="warning"
                  title="Warning"
                  description="This is a warning alert with amber styling."
                />

                <EnhancedAlert variant="error" title="Error" description="This is an error alert with red styling." />

                <EnhancedAlert
                  variant="info"
                  title="Dismissible Alert"
                  description="This alert can be dismissed by clicking the X button."
                  onClose={() => {}}
                />

                <EnhancedAlert
                  variant="success"
                  title="Animated Alert"
                  description="This alert animates when it appears."
                  withAnimation
                />
              </div>
            </CardContent>
          </EnhancedCard>

          <EnhancedCard>
            <CardHeader>
              <CardTitle>Progress</CardTitle>
              <CardDescription>Progress indicators for various states</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Progress Variants</h3>
                  <div className="space-y-4">
                    <div>
                      <EnhancedProgress value={75} variant="default" />
                      <p className="text-sm text-[#B0BEC5] mt-1">variant="default"</p>
                    </div>

                    <div>
                      <EnhancedProgress value={75} variant="success" />
                      <p className="text-sm text-[#B0BEC5] mt-1">variant="success"</p>
                    </div>

                    <div>
                      <EnhancedProgress value={75} variant="warning" />
                      <p className="text-sm text-[#B0BEC5] mt-1">variant="warning"</p>
                    </div>

                    <div>
                      <EnhancedProgress value={75} variant="error" />
                      <p className="text-sm text-[#B0BEC5] mt-1">variant="error"</p>
                    </div>

                    <div>
                      <EnhancedProgress value={75} variant="gradient" />
                      <p className="text-sm text-[#B0BEC5] mt-1">variant="gradient"</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Progress with Value</h3>
                  <div className="space-y-4">
                    <div>
                      <EnhancedProgress value={65} variant="default" showValue valuePosition="outside" />
                      <p className="text-sm text-[#B0BEC5] mt-1">showValue valuePosition="outside"</p>
                    </div>

                    <div>
                      <EnhancedProgress value={65} variant="gradient" showValue valuePosition="inside" />
                      <p className="text-sm text-[#B0BEC5] mt-1">showValue valuePosition="inside"</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Progress Sizes</h3>
                  <div className="space-y-4">
                    <div>
                      <EnhancedProgress value={75} variant="gradient" size="sm" />
                      <p className="text-sm text-[#B0BEC5] mt-1">size="sm"</p>
                    </div>

                    <div>
                      <EnhancedProgress value={75} variant="gradient" size="default" />
                      <p className="text-sm text-[#B0BEC5] mt-1">size="default"</p>
                    </div>

                    <div>
                      <EnhancedProgress value={75} variant="gradient" size="lg" />
                      <p className="text-sm text-[#B0BEC5] mt-1">size="lg"</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Animated Progress</h3>
                  <div>
                    <EnhancedProgress value={75} variant="gradient" animated label="Downloading..." />
                    <p className="text-sm text-[#B0BEC5] mt-1">animated label="Downloading..."</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </EnhancedCard>

          <EnhancedCard>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Toast notifications for various types of messages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <EnhancedButton variant="secondary" onClick={() => showNotificationWithType("default")}>
                    Show Default Notification
                  </EnhancedButton>

                  <EnhancedButton variant="secondary" onClick={() => showNotificationWithType("info")}>
                    Show Info Notification
                  </EnhancedButton>

                  <EnhancedButton variant="secondary" onClick={() => showNotificationWithType("success")}>
                    Show Success Notification
                  </EnhancedButton>

                  <EnhancedButton variant="secondary" onClick={() => showNotificationWithType("warning")}>
                    Show Warning Notification
                  </EnhancedButton>

                  <EnhancedButton variant="secondary" onClick={() => showNotificationWithType("error")}>
                    Show Error Notification
                  </EnhancedButton>
                </div>

                <EnhancedNotification
                  open={showNotification}
                  onClose={() => setShowNotification(false)}
                  title={`${notificationType.charAt(0).toUpperCase() + notificationType.slice(1)} Notification`}
                  description="This is an example notification that will automatically dismiss after 5 seconds."
                  variant={notificationType}
                  position="top-right"
                  duration={5000}
                  action={
                    <EnhancedButton
                      variant="secondary"
                      size="sm"
                      className="mt-2"
                      onClick={() => setShowNotification(false)}
                    >
                      Dismiss
                    </EnhancedButton>
                  }
                />

                <div className="p-4 bg-[#1E2F3C] rounded-lg">
                  <p className="text-[#B0BEC5]">
                    Notifications appear in the corner of the screen. Click any of the buttons above to see a
                    demonstration.
                  </p>
                </div>
              </div>
            </CardContent>
          </EnhancedCard>
        </TabsContent>

        {/* Buttons */}
        <TabsContent value="buttons" className="space-y-8">
          <EnhancedCard>
            <CardHeader>
              <CardTitle>Enhanced Buttons</CardTitle>
              <CardDescription>Improved button components with various styles and animations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <EnhancedButton variant="primary" className="w-full">
                      Primary Button
                    </EnhancedButton>
                    <p className="text-sm text-[#B0BEC5]">variant="primary"</p>
                  </div>

                  <div className="space-y-2">
                    <EnhancedButton variant="secondary" className="w-full">
                      Secondary Button
                    </EnhancedButton>
                    <p className="text-sm text-[#B0BEC5]">variant="secondary"</p>
                  </div>

                  <div className="space-y-2">
                    <EnhancedButton variant="tertiary">Tertiary Button</EnhancedButton>
                    <p className="text-sm text-[#B0BEC5]">variant="tertiary"</p>
                  </div>

                  <div className="space-y-2 flex items-center gap-4">
                    <EnhancedButton variant="icon">
                      <Heart size={18} />
                    </EnhancedButton>
                    <EnhancedButton variant="icon">
                      <Star size={18} />
                    </EnhancedButton>
                    <EnhancedButton variant="icon">
                      <Settings size={18} />
                    </EnhancedButton>
                    <p className="text-sm text-[#B0BEC5]">variant="icon"</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <EnhancedButton variant="primary" withShimmer className="w-full">
                      With Shimmer Effect
                    </EnhancedButton>
                    <p className="text-sm text-[#B0BEC5]">withShimmer</p>
                  </div>

                  <div className="space-y-2">
                    <EnhancedButton variant="primary" withScale className="w-full">
                      With Scale Animation
                    </EnhancedButton>
                    <p className="text-sm text-[#B0BEC5]">withScale</p>
                  </div>

                  <div className="space-y-2">
                    <EnhancedButton variant="primary" withGlow className="w-full">
                      With Glow Effect
                    </EnhancedButton>
                    <p className="text-sm text-[#B0BEC5]">withGlow</p>
                  </div>

                  <div className="space-y-2">
                    <EnhancedButton variant="primary" isLoading className="w-full">
                      Loading Button
                    </EnhancedButton>
                    <p className="text-sm text-[#B0BEC5]">isLoading</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </EnhancedCard>

          <EnhancedCard>
            <CardHeader>
              <CardTitle>Button Sizes</CardTitle>
              <CardDescription>Different size variants for buttons</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <div className="space-y-2">
                  <EnhancedButton variant="primary" size="sm">
                    Small
                  </EnhancedButton>
                  <p className="text-sm text-[#B0BEC5]">size="sm"</p>
                </div>
                <div className="space-y-2">
                  <EnhancedButton variant="primary" size="default">
                    Default
                  </EnhancedButton>
                  <p className="text-sm text-[#B0BEC5]">size="default"</p>
                </div>
                <div className="space-y-2">
                  <EnhancedButton variant="primary" size="lg">
                    Large
                  </EnhancedButton>
                  <p className="text-sm text-[#B0BEC5]">size="lg"</p>
                </div>
                <div className="space-y-2">
                  <EnhancedButton variant="primary" size="xl">
                    Extra Large
                  </EnhancedButton>
                  <p className="text-sm text-[#B0BEC5]">size="xl"</p>
                </div>
              </div>
            </CardContent>
          </EnhancedCard>

          <EnhancedCard>
            <CardHeader>
              <CardTitle>Button with Icons</CardTitle>
              <CardDescription>Buttons with various icon placements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <EnhancedButton variant="primary">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Icon Left
                </EnhancedButton>

                <EnhancedButton variant="primary">
                  Icon Right
                  <ArrowRight className="ml-2 h-4 w-4" />
                </EnhancedButton>

                <EnhancedButton variant="secondary" className="group">
                  <span className="flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                  </span>
                </EnhancedButton>
              </div>
            </CardContent>
          </EnhancedCard>
        </TabsContent>
      </Tabs>
    </div>
  )
}
