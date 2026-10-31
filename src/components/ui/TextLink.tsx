import type { AnchorHTMLAttributes, ReactNode } from 'react'

interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
  /** Opens in a new tab with safe rel attributes and an announcement for screen readers. */
  external?: boolean
}

export function TextLink({ href, children, external, ...rest }: TextLinkProps) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a href={href} {...externalProps} {...rest}>
      {children}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  )
}
