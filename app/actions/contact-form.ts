"use server"

import { setKVData } from "@/lib/vercel-kv"

interface ContactFormData {
  name: string
  phone: string
  email?: string
  message: string
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate the form data
    if (!formData.name || !formData.phone || !formData.message) {
      return {
        success: false,
        message: "Please fill in all required fields",
      }
    }

    // Generate a unique ID for this submission
    const submissionId = `contact_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`

    // Add timestamp
    const submission = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: submissionId,
    }

    // Store in Vercel KV
    const result = await setKVData(`contact:${submissionId}`, submission)

    if (!result.success) {
      throw new Error("Failed to store contact form data")
    }

    // Also store in a list of all submissions for easy retrieval
    const listKey = "contact:submissions:list"
    const existingList = await setKVData(listKey, [submissionId], 60 * 60 * 24 * 30) // 30 days expiration

    return {
      success: true,
      message: "Your message has been received. We will contact you soon.",
      submissionId,
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      message: "An error occurred while submitting your message. Please try again.",
    }
  }
}
