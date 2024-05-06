import React, { useCallback } from 'react'

type CopyProps = Readonly<{
  item: string
  onCopied: (item: string) => void
}>

export const Copy: React.FC<CopyProps> = ({ onCopied, item }) => {
  const handleCopyAddress = useCallback(() => {
    navigator.clipboard.writeText(item)
    onCopied(item)
  }, [item, onCopied])
  return (
    <span
      className="furya-praetoria-web-copy-logo"
      onClick={handleCopyAddress}
      title="Copy on clipboard"
    />
  )
}
