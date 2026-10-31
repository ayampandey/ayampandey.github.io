import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, m } from 'motion/react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navigation, site } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { GitHubIcon, LinkedInIcon } from './ui/BrandIcons'
import { TextLink } from './ui/TextLink'

const sectionIds = navigation.map((item) => item.id)
const ease = [0.16, 1, 0.3, 1] as const

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!open) return
    const header = headerRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    header?.querySelector<HTMLElement>('#mobile-menu a')?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (event.key !== 'Tab' || !header) return
      const focusable = [toggleRef.current, ...header.querySelectorAll<HTMLElement>('#mobile-menu a')].filter(
        (el): el is HTMLElement => el !== null,
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const barClass = open
    ? 'border-line bg-paper'
    : scrolled
      ? 'border-line/80 bg-paper/80 backdrop-blur-xl backdrop-saturate-150'
      : 'border-transparent bg-transparent'

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      <div
        className={`border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${barClass}`}
      >
        <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between">
          <a href="#top" className="font-serif text-[1.15rem] tracking-[-0.01em] text-ink" onClick={() => setOpen(false)}>
            Ayam Pandey
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    className={`relative rounded-full px-3.5 py-2 text-[13px] transition-colors duration-300 ${
                      isActive ? 'text-ink' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-accent transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
            <li className="ml-3">
              <TextLink
                href={site.links.resume}
                external
                className="group inline-flex items-center gap-1 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-paper transition-colors duration-300 hover:bg-ink-2"
              >
                CV
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </TextLink>
            </li>
          </ul>

          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-paper md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            <div className="container-page flex min-h-full flex-col justify-between pt-8 pb-10">
              <ul className="space-y-1">
                {navigation.map((item, index) => (
                  <m.li
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease, delay: 0.05 + index * 0.05 }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="block py-2 font-serif text-[2.6rem] leading-tight tracking-[-0.02em] text-ink"
                    >
                      {item.label}
                    </a>
                  </m.li>
                ))}
              </ul>
              <div className="mt-12 flex flex-wrap gap-3 border-t border-line pt-6 text-sm">
                <TextLink
                  href={site.links.resume}
                  external
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 font-medium text-paper"
                >
                  CV <ArrowUpRight className="size-4" aria-hidden="true" />
                </TextLink>
                <TextLink
                  href={site.links.github}
                  external
                  className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-ink"
                >
                  <GitHubIcon className="size-4" /> GitHub
                </TextLink>
                <TextLink
                  href={site.links.linkedin}
                  external
                  className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-ink"
                >
                  <LinkedInIcon className="size-4" /> LinkedIn
                </TextLink>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
