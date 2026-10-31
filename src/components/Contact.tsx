import type { ComponentType, SVGProps } from 'react'
import { ArrowUp, ArrowUpRight, FileText, Mail } from 'lucide-react'
import { site } from '../data/site'
import { GitHubIcon, LinkedInIcon } from './ui/BrandIcons'
import { Reveal } from './ui/Reveal'
import { TextLink } from './ui/TextLink'

interface Channel {
  label: string
  detail: string
  href: string
  external: boolean
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}

const channels: Channel[] = [
  { label: 'Email', detail: site.email, href: `mailto:${site.email}`, external: false, Icon: Mail },
  { label: 'LinkedIn', detail: 'Ayam Pandey', href: site.links.linkedin, external: true, Icon: LinkedInIcon },
  { label: 'GitHub', detail: '@ayampandey', href: site.links.github, external: true, Icon: GitHubIcon },
  { label: 'CV', detail: 'PDF', href: site.links.resume, external: true, Icon: FileText },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="on-dark bg-night text-paper">
      <div className="container-page pt-28 pb-20 sm:pt-36 lg:pt-44 lg:pb-24">
        <Reveal>
          <p className="eyebrow text-mist">Contact</p>
          <h2
            id="contact-title"
            className="mt-6 font-serif text-[clamp(4rem,13vw,10rem)] leading-[0.9] font-[340] tracking-[-0.045em]"
          >
            Let’s talk.
          </h2>
          <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-mist">
            For conversations about legal engineering, legal technology or applied AI, email is the best way to reach me.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="group mt-10 inline-flex max-w-full items-center gap-3 font-serif text-[clamp(1.4rem,4vw,3rem)] font-[380] tracking-[-0.02em] break-all text-paper"
          >
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-size-[0%_1px] bg-bottom-left bg-no-repeat pb-1 transition-[background-size] duration-500 ease-out group-hover:bg-size-[100%_1px]">
              {site.email}
            </span>
            <ArrowUpRight
              aria-hidden="true"
              className="size-[0.8em] shrink-0 text-accent-soft transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </Reveal>

        <Reveal className="mt-20 lg:mt-28">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map(({ label, detail, href, external, Icon }) => (
              <li key={label}>
                <TextLink
                  href={href}
                  external={external}
                  className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-night-line p-6 transition-colors duration-300 hover:border-mist/40 hover:bg-night-2"
                >
                  <span>
                    <Icon className="size-5 text-mist" aria-hidden="true" />
                    <span className="mt-8 block text-[17px] font-medium text-paper">{label}</span>
                    <span className="mt-1 block text-sm break-all text-mist">{detail}</span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 shrink-0 text-mist transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-paper"
                  />
                </TextLink>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="on-dark bg-night text-mist">
      <div className="container-page flex flex-col gap-4 border-t border-night-line py-8 text-[13px] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Ayam Pandey</p>
        <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-paper">
          Back to top <ArrowUp className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
