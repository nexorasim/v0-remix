"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { uploadToBlob } from "@/lib/vercel-blob"
import { Upload, Check, X, Loader2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { LocalizedText } from "@/components/ui/localized-text"

interface FileUploaderProps {
  onUploadComplete?: (url: string) => void
  acceptedFileTypes?: string
  maxSizeMB?: number
}

export default function FileUploader({
  onUploadComplete,
  acceptedFileTypes = "image/*",
  maxSizeMB = 5,
}: FileUploaderProps) {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const { t } = useLanguage()

  const maxSizeBytes = maxSizeMB * 1024 * 1024

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) return

    // Validate file size
    if (selectedFile.size > maxSizeBytes) {
      setErrorMessage(
        t(
          `File size exceeds the maximum limit of ${maxSizeMB}MB`,
          `ဖိုင်အရွယ်အစားသည် အများဆုံး ကန့်သတ်ချက် ${maxSizeMB}MB ထက် ကျော်လွန်နေပါသည်`,
        ),
      )
      setUploadStatus("error")
      return
    }

    setFile(selectedFile)
    setUploadStatus("idle")
    setErrorMessage("")
  }

  const handleUpload = async () => {
    if (!file) return

    setIsUploading(true)
    setUploadStatus("idle")

    try {
      const result = await uploadToBlob(file)

      if (result.success && result.url) {
        setUploadStatus("success")
        if (onUploadComplete) {
          onUploadComplete(result.url)
        }
      } else {
        setUploadStatus("error")
        setErrorMessage(t("Failed to upload file. Please try again.", "ဖိုင်တင်ရန် မအောင်မြင်ပါ။ ထပ်မံကြိုးစားပါ။"))
      }
    } catch (error) {
      setUploadStatus("error")
      setErrorMessage(
        t("An error occurred during upload. Please try again.", "အပ်လုဒ်လုပ်နေစဉ် အမှားတစ်ခု ဖြစ်ပွားခဲ့သည်။ ထပ်မံကြိုးစားပါ။"),
      )
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="w-full">
      <div className="bg-[#1E2F3C] border border-[#00FFFF]/20 rounded-lg p-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <label htmlFor="file-upload" className="w-full cursor-pointer">
            <div className="border-2 border-dashed border-[#00FFFF]/30 rounded-lg p-6 flex flex-col items-center justify-center hover:border-[#00FFFF]/60 transition-colors">
              <Upload className="h-10 w-10 text-[#00FFFF]/70 mb-2" />
              <p className="text-center text-[#B0BEC5]">
                <LocalizedText
                  en={`Drag & drop or click to select a file (Max: ${maxSizeMB}MB)`}
                  mm={`ဖိုင်တစ်ခုကို ဆွဲချပြီး ချထားပါ သို့မဟုတ် ရွေးချယ်ရန် နှိပ်ပါ (အများဆုံး: ${maxSizeMB}MB)`}
                />
              </p>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept={acceptedFileTypes}
                onChange={handleFileChange}
              />
            </div>
          </label>

          {file && (
            <div className="w-full bg-[#263A49] rounded-lg p-3 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#00FFFF]/10 flex items-center justify-center mr-3">
                  <Upload className="h-5 w-5 text-[#00FFFF]" />
                </div>
                <div className="truncate">
                  <p className="font-medium truncate">{file.name}</p>
                  <p className="text-sm text-[#B0BEC5]">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>

              <Button
                onClick={handleUpload}
                disabled={isUploading}
                className="bg-[#00FFFF] text-[#1E2F3C] hover:bg-[#00CCCC]"
              >
                {isUploading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    <LocalizedText en="Uploading..." mm="အပ်လုဒ်လုပ်နေသည်..." />
                  </>
                ) : uploadStatus === "success" ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    <LocalizedText en="Uploaded" mm="အပ်လုဒ်လုပ်ပြီး" />
                  </>
                ) : (
                  <>
                    <Upload className="h-4 w-4 mr-2" />
                    <LocalizedText en="Upload" mm="အပ်လုဒ်လုပ်ရန်" />
                  </>
                )}
              </Button>
            </div>
          )}

          {uploadStatus === "error" && (
            <div className="w-full bg-red-900/20 border border-red-500/30 rounded-lg p-3 flex items-center">
              <X className="h-5 w-5 text-red-500 mr-2" />
              <p className="text-red-400 text-sm">{errorMessage}</p>
            </div>
          )}

          {uploadStatus === "success" && (
            <div className="w-full bg-green-900/20 border border-green-500/30 rounded-lg p-3 flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <p className="text-green-400 text-sm">
                <LocalizedText en="File uploaded successfully!" mm="ဖိုင်ကို အောင်မြင်စွာ အပ်လုဒ်လုပ်ပြီးပါပြီ!" />
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
