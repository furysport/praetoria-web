import classNames from 'classnames'
import React, { useCallback, useMemo } from 'react'
import type { DragoonProfile } from '../../entity/dragoon'
import { Copy } from '../copy/Copy'

export type ProfileProps = Readonly<{
  dragoonProfile: DragoonProfile
  explorerUrl: string
  onValoperCopied: (valoper: string) => void
}>

type ActionButton = Readonly<{
  label: string
  href: string | null
  disabled?: boolean
}>

export const Profile: React.FC<ProfileProps> = ({ dragoonProfile, explorerUrl, onValoperCopied }) => {
  const actionButtons: ActionButton[] = useMemo(
    () => [
      {
        label: 'website',
        href: dragoonProfile.website,
        disabled: !dragoonProfile.website
      },
      {
        label: 'explorer',
        href: `${explorerUrl}${dragoonProfile.valoper}`,
        disabled: false
      },
      {
        label: 'twitter',
        href: `https://twitter.com/${dragoonProfile.twitter}`,
        disabled: !dragoonProfile.twitter
      }
    ],
    [dragoonProfile.twitter, dragoonProfile.valoper, dragoonProfile.website, explorerUrl]
  )

  const openInNewTab = useCallback(
    (url: string | null) => () => {
      if (url) {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
    },
    []
  )

  return (
    <div className="furya-praetoria-web-profile-main">
      <div
        className="furya-praetoria-web-profile-avatar"
        style={{ backgroundImage: `url(${dragoonProfile.identity.avatar})` }}
      />
      <div className="furya-praetoria-web-profile-identity-container">
        <h2>{dragoonProfile.identity.name}</h2>
        <div className="furya-praetoria-web-profile-identity-address-wrapper">
          <p>Address:</p>
          <p>{dragoonProfile.valoper}</p>
          <Copy item={dragoonProfile.valoper} onCopied={onValoperCopied} />
        </div>
      </div>
      <div className="furya-praetoria-web-profile-actions-container">
        {actionButtons.map(({ disabled, label, href }, index) => (
          <div
            className={classNames(`furya-praetoria-web-profile-action-button ${label}`, {
              disabled
            })}
            key={index}
            onClick={openInNewTab(href)}
            title={href ?? undefined}
          />
        ))}
      </div>
    </div>
  )
}
