import React from 'react'

type TagProps = Readonly<{
  status: 'done' | 'idle' | 'progress' | 'error' | 'submitted'
  content: string
}>

export const Tag: React.FC<TagProps> = ({ status, content }) => (
  <div className={`furya-praetoria-web-tag-main ${status}`}>
    <span className={`furya-praetoria-web-tag-content ${status}`}>{content}</span>
    <span className={`furya-praetoria-web-tag-icon ${status}`} />
  </div>
)
