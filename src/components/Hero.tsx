import { useRef } from 'react'
import { m, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react'
import { site } from '../data/site'
import { education } from '../data/experience'
import { GitHubIcon, LinkedInIcon } from './ui/BrandIcons'
import { TextLink } from './ui/TextLink'

const ease = [0.16, 1, 0.3, 1] as const

function MaskLine({ children, delay, still }: { children: string; delay: number; still: boolean }) {
  return (
    <span className="mb-[-0.12em] block overflow-hidden pb-[0.16em]">
      <m.span
        className="block"
        initial={still ? false : { y: '105%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1.2, ease, delay }}
      >
        {children}
      </m.span>
    </span>
  )
}

const iconLink =
  'inline-flex size-11 items-center justify-center rounded-full border border-line text-ink-2 transition-colors duration-300 hover:border-ink hover:text-ink'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion() ?? false
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const ornamentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 180])
  const fadeUp = reduce ? false : { opacity: 0, y: 20 }

  return (
    <section id="top" ref={ref} aria-labelledby="hero-title" className="relative overflow-hidden">
      <m.div
        aria-hidden="true"
        style={{ y: ornamentY }}
        className="pointer-events-none absolute top-16 right-[-0.1em] font-serif text-[clamp(20rem,42vw,40rem)] leading-none text-ink/[0.035] select-none"
      >
        §
      </m.div>

      <div className="container-page relative pt-32 pb-16 sm:pt-40 lg:pt-44 lg:pb-20">
        <m.p
          className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-muted"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease }}
        >
          {site.positioning.map((item, index) => (
            <span key={item} className="inline-flex items-center gap-3">
              {index > 0 && <span aria-hidden="true" className="size-1 rounded-full bg-accent" />}
              {item}
            </span>
          ))}
        </m.p>

        <h1
          id="hero-title"
          className="mt-8 flex flex-col font-serif text-[clamp(4.5rem,17vw,10.5rem)] leading-[0.88] font-[360] tracking-[-0.045em] text-ink lg:flex-row lg:gap-[0.22em]"
        >
          <MaskLine delay={0.1} still={reduce}>
            Ayam
          </MaskLine>
          <MaskLine delay={0.2} still={reduce}>
            Pandey
          </MaskLine>
        </h1>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:items-end">
          <m.p
            className="font-serif text-[clamp(1.65rem,3.4vw,2.6rem)] leading-[1.14] font-[380] tracking-[-0.02em] text-balance text-ink lg:col-span-7"
            initial={fadeUp}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.45 }}
          >
            {site.headline.lead} <em className="text-accent italic">{site.headline.emphasis}</em> {site.headline.tail}
          </m.p>

          <m.div
            className="lg:col-span-4 lg:col-start-9"
            initial={fadeUp}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.6 }}
          >
            <p className="text-[15px] leading-relaxed text-muted">{site.intro}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-ink-2"
              >
                Selected work
                <ArrowDown
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
              <TextLink
                href={site.links.resume}
                external
                className="group inline-flex h-11 items-center gap-1.5 rounded-full border border-line px-5 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink"
              >
                CV
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </TextLink>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <TextLink href={site.links.github} external aria-label="GitHub" className={iconLink}>
                <GitHubIcon className="size-4.5" />
              </TextLink>
              <TextLink href={site.links.linkedin} external aria-label="LinkedIn" className={iconLink}>
                <LinkedInIcon className="size-4.25" />
              </TextLink>
              <a href={`mailto:${site.email}`} aria-label={`Email ${site.email}`} className={iconLink}>
                <Mail className="size-4.5" aria-hidden="true" />
              </a>
              <a href="#contact" className="ml-2 text-sm text-muted underline-offset-4 transition-colors hover:text-ink hover:underline">
                Contact
              </a>
            </div>
          </m.div>
        </div>

        <m.div
          className="mt-20 flex flex-col gap-2 border-t border-line pt-5 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between lg:mt-28"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease, delay: 0.9 }}
        >
          <span>{education.degree}</span>
          <span>
            {education.institution}, Gandhinagar · Graduated 2026
          </span>
        </m.div>
      </div>
    </section>
  )
}
