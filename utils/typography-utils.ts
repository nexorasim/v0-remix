/**
 * Formats a file size in bytes to a human-readable string
 * @param bytes The size in bytes
 * @param decimals The number of decimal places to show
 * @returns Formatted string (e.g., "1.5 MB")
 */
export function formatFileSize(bytes: number, decimals = 2): string {
  if (bytes === 0) return "0 Bytes"

  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i]
}

/**
 * Formats a drive size in bytes to a human-readable string with appropriate unit
 * @param bytes The size in bytes
 * @param decimals The number of decimal places to show
 * @returns Formatted string (e.g., "1.5 GB")
 */
export function formatDriveSize(bytes: number, decimals = 2): string {
  // For drive sizes, we typically want to show in GB or TB
  if (bytes === 0) return "0 GB"

  const k = 1024

  // For drives, we typically start from GB
  if (bytes < Math.pow(k, 3)) {
    // Less than 1GB, show in MB
    return Number.parseFloat((bytes / Math.pow(k, 2)).toFixed(decimals)) + " MB"
  } else if (bytes < Math.pow(k, 4)) {
    // Less than 1TB, show in GB
    return Number.parseFloat((bytes / Math.pow(k, 3)).toFixed(decimals)) + " GB"
  } else {
    // Show in TB
    return Number.parseFloat((bytes / Math.pow(k, 4)).toFixed(decimals)) + " TB"
  }
}

/**
 * Truncates text to a specified length and adds ellipsis
 * @param text The text to truncate
 * @param maxLength The maximum length before truncation
 * @returns Truncated text with ellipsis if needed
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}
