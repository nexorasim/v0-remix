import { truncateText } from "@/utils/typography-utils"

interface TruncatedTextProps {
  text: string
  maxLength?: number
  lines?: 1 | 2 | 3
  className?: string
}

export function TruncatedText({ text, maxLength, lines = 1, className = "" }: TruncatedTextProps) {
  // If maxLength is provided, truncate the text
  const truncatedContent = maxLength ? truncateText(text, maxLength) : text

  // Determine the appropriate class based on the number of lines
  let lineClass = "truncate-text"
  if (lines === 2) lineClass = "truncate-2-lines"
  if (lines === 3) lineClass = "truncate-3-lines"

  return <span className={`${lineClass} ${className}`}>{truncatedContent}</span>
}
