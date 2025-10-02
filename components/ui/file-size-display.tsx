import { formatFileSize, formatDriveSize } from "@/utils/typography-utils"

interface FileSizeDisplayProps {
  bytes: number
  type?: "file" | "drive"
  decimals?: number
  className?: string
}

export function FileSizeDisplay({ bytes, type = "file", decimals = 2, className = "" }: FileSizeDisplayProps) {
  const formattedSize = type === "file" ? formatFileSize(bytes, decimals) : formatDriveSize(bytes, decimals)

  const baseClass = type === "file" ? "file-size" : "drive-size"

  return <span className={`${baseClass} ${className}`}>{formattedSize}</span>
}
