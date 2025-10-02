"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { EnhancedProgress } from "@/components/ui/enhanced-progress"
import { Upload, X, File, ImageIcon, FileText, Film, Music, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"
import { FileSizeDisplay } from "@/components/ui/file-size-display"
import { TruncatedText } from "@/components/ui/truncated-text"

interface EnhancedFileUploadProps {
  onChange: (files: File[]) => void
  value?: File[]
  multiple?: boolean
  accept?: string
  maxSize?: number // in MB
  maxFiles?: number
  className?: string
  variant?: "default" | "compact" | "minimal"
  showPreview?: boolean
  previewType?: "grid" | "list"
  onError?: (error: string) => void
  uploadProgress?: number // 0-100
  disabled?: boolean
}

export function EnhancedFileUpload({
  onChange,
  value = [],
  multiple = false,
  accept,
  maxSize,
  maxFiles = 5,
  className,
  variant = "default",
  showPreview = true,
  previewType = "grid",
  onError,
  uploadProgress,
  disabled = false,
}: EnhancedFileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Define variant classes
  const variantClasses = {
    default: "border-2 border-dashed border-[#00FFFF]/30 rounded-lg p-6",
    compact: "border border-dashed border-[#00FFFF]/30 rounded-lg p-3",
    minimal: "border border-[#00FFFF]/20 rounded-lg p-2",
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || [])
    validateAndAddFiles(selectedFiles)

    // Reset the input value so the same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const validateAndAddFiles = (files: File[]) => {
    setError(null)

    // Check if adding these files would exceed the max files limit
    if (maxFiles && value.length + files.length > maxFiles) {
      const errorMsg = `You can only upload a maximum of ${maxFiles} files`
      setError(errorMsg)
      onError?.(errorMsg)
      return
    }

    const validFiles = files.filter((file) => {
      // Check file size
      if (maxSize && file.size > maxSize * 1024 * 1024) {
        const errorMsg = `File "${file.name}" exceeds the maximum size of ${maxSize}MB`
        setError(errorMsg)
        onError?.(errorMsg)
        return false
      }

      // Check file type if accept is specified
      if (accept) {
        const acceptedTypes = accept.split(",").map((type) => type.trim())
        const fileType = file.type

        // Check if the file type matches any of the accepted types
        const isAccepted = acceptedTypes.some((type) => {
          if (type.startsWith(".")) {
            // Check file extension
            return file.name.toLowerCase().endsWith(type.toLowerCase())
          } else if (type.includes("*")) {
            // Handle wildcards like "image/*"
            return fileType.startsWith(type.split("*")[0])
          } else {
            // Exact match
            return fileType === type
          }
        })

        if (!isAccepted) {
          const errorMsg = `File "${file.name}" is not an accepted file type`
          setError(errorMsg)
          onError?.(errorMsg)
          return false
        }
      }

      return true
    })

    if (validFiles.length > 0) {
      onChange([...value, ...validFiles])
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const droppedFiles = Array.from(e.dataTransfer.files)
    validateAndAddFiles(droppedFiles)
  }

  const removeFile = (index: number) => {
    const newFiles = [...value]
    newFiles.splice(index, 1)
    onChange(newFiles)
  }

  // Get appropriate icon based on file type
  const getFileIcon = (file: File) => {
    const type = file.type

    if (type.startsWith("image/")) {
      return <ImageIcon className="h-5 w-5 text-[#00FFFF]" />
    } else if (type.startsWith("video/")) {
      return <Film className="h-5 w-5 text-[#00FFFF]" />
    } else if (type.startsWith("audio/")) {
      return <Music className="h-5 w-5 text-[#00FFFF]" />
    } else if (type.startsWith("text/")) {
      return <FileText className="h-5 w-5 text-[#00FFFF]" />
    } else {
      return <File className="h-5 w-5 text-[#00FFFF]" />
    }
  }

  return (
    <div className={className}>
      <div
        className={cn(
          variantClasses[variant],
          isDragging ? "border-[#00FFFF] bg-[#00FFFF]/5" : "hover:border-[#00FFFF]/60 hover:bg-[#00FFFF]/5",
          "transition-colors duration-200",
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        )}
        onDragOver={!disabled ? handleDragOver : undefined}
        onDragLeave={!disabled ? handleDragLeave : undefined}
        onDrop={!disabled ? handleDrop : undefined}
        onClick={() => !disabled && fileInputRef.current?.click()}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <Upload className="h-10 w-10 text-[#00FFFF]/70 mb-2" />
          <p className="text-[#B0BEC5] mb-1">
            {isDragging ? "Drop files here" : "Drag & drop files here or click to browse"}
          </p>
          <p className="text-[#B0BEC5]/70 text-sm">
            {accept && `Accepted file types: ${accept}`}
            {maxSize && `${accept ? " | " : ""}Maximum file size: ${maxSize}MB`}
            {maxFiles && multiple && `${accept || maxSize ? " | " : ""}Maximum files: ${maxFiles}`}
          </p>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
          multiple={multiple}
          accept={accept}
          disabled={disabled}
        />
      </div>

      {error && (
        <div className="mt-2 text-red-400 text-sm flex items-center">
          <AlertTriangle className="h-4 w-4 mr-1" />
          {error}
        </div>
      )}

      {uploadProgress !== undefined && (
        <div className="mt-3">
          <EnhancedProgress value={uploadProgress} variant="gradient" showValue animated size="sm" />
        </div>
      )}

      {showPreview && value.length > 0 && (
        <div className={cn("mt-4", previewType === "grid" ? "grid grid-cols-2 md:grid-cols-3 gap-3" : "space-y-2")}>
          <AnimatePresence>
            {value.map((file, index) => (
              <motion.div
                key={`${file.name}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "bg-[#1E2F3C] rounded-lg border border-[#00FFFF]/10 overflow-hidden group",
                  previewType === "list" ? "flex items-center" : "relative",
                )}
              >
                {file.type.startsWith("image/") && previewType === "grid" ? (
                  <div className="aspect-square w-full relative">
                    <img
                      src={URL.createObjectURL(file) || "/placeholder.svg"}
                      alt={file.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-black/50 text-white hover:bg-black/70"
                        onClick={(e) => {
                          e.stopPropagation()
                          removeFile(index)
                        }}
                        disabled={disabled}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className={cn("flex items-center", previewType === "grid" ? "p-3" : "p-2 flex-1")}>
                    <div className="w-8 h-8 rounded-full bg-[#263A49] flex items-center justify-center mr-3 flex-shrink-0">
                      {getFileIcon(file)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <TruncatedText text={file.name} lines={1} className="text-sm font-medium" />
                      <FileSizeDisplay bytes={file.size} type="file" className="block mt-1" />
                    </div>
                    {!disabled && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full text-[#B0BEC5] hover:text-white hover:bg-[#00FFFF]/10 ml-2 flex-shrink-0"
                        onClick={(e) => {
                          e.stopPropagation()
                          removeFile(index)
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}
