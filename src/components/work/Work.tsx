import { useRef, type ReactNode } from 'react'
import { m, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { projects, type Project, type ProjectId } from '../../data/projects'
import { site } from '../../data/site'
import { GitHubIcon } from '../ui/BrandIcons'
import { Reveal } from '../ui/Reveal'
import { TextLink } from '../ui/TextLink'
import { ContractAnalyzerVisual, JudgmentPredictionVisual, LegalInsightVisual, ToolkitVisual } from './Visuals'

type Tone = 'dark' | 'light'

const visuals: Record<ProjectId, () => ReactNode> = {
  legalinsight: LegalInsightVisual,
  'legal-ai-toolkit': ToolkitVisual,
  'contract-analyzer': ContractAnalyzerVisual,
  'judgment-prediction': JudgmentPredictionVisual,
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.screenshot) {
    return (
      <figure>
        <img
          src={project.screenshot.src}
          alt={project.screenshot.alt}
          loading="lazy"
          decoding="async"
          className="w-full rounded-2xl ring-1 ring-line"
        />
        <figcaption className="mt-4 text-xs text-muted">Screenshot of {project.title}.</figcaption>
      </figure>
    )
  }
  const Visual = visuals[project.id]
  return <Visual />
}

function Parallax({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [24, -24])
  return (
    <div ref={ref} className={className}>
      <m.div style={{ y }} className="h-full">
        {children}
      </m.div>
    </div>
  )
}

function Meta({ project, index, tone }: { project: Project; index: number; tone: Tone }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${tone === 'dark' ? 'text-mist' : 'text-muted'}`}>
      <span className="font-mono tracking-normal">{String(index + 1).padStart(2, '0')}</span>
      <span aria-hidden="true" className={`h-px w-6 ${tone === 'dark' ? 'bg-night-line' : 'bg-line'}`} />
      {project.kicker}
    </p>
  )
}

function RepoLink({ project, tone }: { project: Project; tone: Tone }) {
  return (
    <TextLink
      href={project.repo}
      external
      className={`group inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium transition-colors duration-300 ${
        tone === 'dark' ? 'bg-paper text-ink hover:bg-paper-2' : 'bg-ink text-paper hover:bg-ink-2'
      }`}
    >
      <GitHubIcon className="size-4" />
      View repository<span className="sr-only">: {project.title}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </TextLink>
  )
}

function Stack({ items, tone }: { items: string[]; tone: Tone }) {
  return (
    <ul aria-label="Technologies" className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-full border px-2.5 py-1 text-xs ${
            tone === 'dark' ? 'border-night-line text-mist' : 'border-line text-ink-2'
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

function DetailBlock({ title, tone, children }: { title: string; tone: Tone; children: ReactNode }) {
  return (
    <div>
      <h4 className={`eyebrow ${tone === 'dark' ? 'text-mist' : 'text-muted'}`}>{title}</h4>
      <div className={`mt-4 text-[15px] leading-relaxed ${tone === 'dark' ? 'text-paper/85' : 'text-ink-2'}`}>
        {children}
      </div>
    </div>
  )
}

function Features({ items, tone }: { items: string[]; tone: Tone }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className={`mt-[0.6em] size-1 shrink-0 rounded-full ${tone === 'dark' ? 'bg-accent-soft' : 'bg-accent'}`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Note({ text, tone }: { text: string; tone: Tone }) {
  return <p className={`text-xs ${tone === 'dark' ? 'text-mist' : 'text-muted'}`}>{text}</p>
}

/** Full-width, dark showcase used for the lead project. */
function FeatureProject({ project, index }: { project: Project; index: number }) {
  const tone: Tone = 'dark'
  return (
    <article className="on-dark overflow-hidden rounded-[28px] bg-night text-paper">
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col p-7 sm:p-12 lg:p-16">
          <Meta project={project} index={index} tone={tone} />
          <h3 className="mt-8 font-serif text-[clamp(2.75rem,6vw,5rem)] leading-[0.95] font-[360] tracking-[-0.035em]">
            {project.title}
          </h3>
          <p className="mt-6 max-w-[34ch] text-lg leading-relaxed text-paper/80 sm:text-xl">{project.summary}</p>
          <div className="mt-10 lg:mt-auto lg:pt-12">
            <RepoLink project={project} tone={tone} />
          </div>
        </div>
        <Parallax className="border-t border-night-line bg-night-2 p-6 sm:p-10 lg:border-t-0 lg:border-l lg:p-14">
          <ProjectVisual project={project} />
        </Parallax>
      </div>
      <div className="grid gap-10 border-t border-night-line p-7 sm:p-12 lg:grid-cols-3 lg:gap-12 lg:p-16">
        <DetailBlock title="The problem" tone={tone}>
          <p>{project.problem}</p>
        </DetailBlock>
        <DetailBlock title="What it does" tone={tone}>
          <Features items={project.features} tone={tone} />
        </DetailBlock>
        <DetailBlock title="Design decision" tone={tone}>
          <p>{project.decision}</p>
          <div className="mt-6">
            <Stack items={project.stack} tone={tone} />
          </div>
          {project.note && (
            <div className="mt-4">
              <Note text={project.note} tone={tone} />
            </div>
          )}
        </DetailBlock>
      </div>
    </article>
  )
}

/** Wide split layout: large visual beside a narrative column. */
function SplitProject({ project, index }: { project: Project; index: number }) {
  const tone: Tone = 'light'
  return (
    <article className="overflow-clip rounded-[28px] bg-paper-2">
      {/* DOM order (header, visual, details) is the mobile order; the grid rearranges it on large screens. */}
      <div className="grid lg:grid-cols-12 lg:grid-rows-[auto_1fr]">
        <div className="px-7 pt-7 sm:px-12 sm:pt-12 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:pt-14 lg:pr-14 lg:pl-4">
          <Meta project={project} index={index} tone={tone} />
          <h3 className="mt-8 font-serif text-[clamp(2.4rem,4.6vw,3.75rem)] leading-[0.98] font-[360] tracking-[-0.03em]">
            {project.title}
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-ink-2">{project.summary}</p>
        </div>
        <div className="p-6 sm:p-10 lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:p-14">
          <div className="lg:sticky lg:top-28">
            <ProjectVisual project={project} />
          </div>
        </div>
        <div className="px-7 pb-7 sm:px-12 sm:pb-12 lg:col-span-5 lg:col-start-8 lg:row-start-2 lg:pr-14 lg:pb-14 lg:pl-4">
          <div className="space-y-9 lg:mt-10">
            <DetailBlock title="The problem" tone={tone}>
              <p>{project.problem}</p>
            </DetailBlock>
            <DetailBlock title="What it does" tone={tone}>
              <Features items={project.features} tone={tone} />
            </DetailBlock>
            <DetailBlock title="Design decision" tone={tone}>
              <p>{project.decision}</p>
            </DetailBlock>
            <Stack items={project.stack} tone={tone} />
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <RepoLink project={project} tone={tone} />
              {project.note && <Note text={project.note} tone={tone} />}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

/** Compact card used for the remaining projects, shown in pairs on large screens. */
function CardProject({ project, index }: { project: Project; index: number }) {
  const tone: Tone = 'light'
  return (
    <article className="flex h-full flex-col rounded-[28px] bg-card p-6 ring-1 ring-line transition-shadow duration-500 hover:shadow-[0_40px_80px_-50px_rgba(22,21,19,0.35)] sm:p-10">
      <Meta project={project} index={index} tone={tone} />
      <h3 className="mt-6 font-serif text-[clamp(2rem,3.6vw,2.9rem)] leading-none font-[360] tracking-[-0.03em]">
        {project.title}
      </h3>
      <p className="mt-4 text-[17px] leading-relaxed text-ink-2">{project.summary}</p>
      <div className="mt-8">
        <ProjectVisual project={project} />
      </div>
      <div className="mt-10 space-y-8">
        <DetailBlock title="The problem" tone={tone}>
          <p>{project.problem}</p>
        </DetailBlock>
        <DetailBlock title="What it does" tone={tone}>
          <Features items={project.features} tone={tone} />
        </DetailBlock>
        <DetailBlock title="Design decision" tone={tone}>
          <p>{project.decision}</p>
        </DetailBlock>
      </div>
      <div className="mt-auto space-y-6 pt-10">
        <Stack items={project.stack} tone={tone} />
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <RepoLink project={project} tone={tone} />
          {project.note && <Note text={project.note} tone={tone} />}
        </div>
      </div>
    </article>
  )
}

export function Work() {
  const [lead, second, ...rest] = projects
  return (
    <section id="work" aria-labelledby="work-title" className="py-28 sm:py-36 lg:py-44">
      <div className="container-page">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow text-muted">Selected work</p>
            <h2
              id="work-title"
              className="mt-6 font-serif text-[clamp(2.5rem,5.6vw,4.75rem)] leading-[1.02] font-[360] tracking-[-0.035em] text-balance"
            >
              Tools for reading, structuring and reasoning about law.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-[15px] leading-relaxed text-muted">
              Personal and academic projects, each open source. Descriptions are drawn from the code in each repository.
            </p>
            <TextLink
              href={site.links.github}
              external
              className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink underline-offset-4 hover:underline"
            >
              All repositories on GitHub
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </TextLink>
          </div>
        </Reveal>

        <div className="mt-16 space-y-6 lg:mt-24 lg:space-y-8">
          {lead && (
            <Reveal>
              <FeatureProject project={lead} index={0} />
            </Reveal>
          )}
          {second && (
            <Reveal>
              <SplitProject project={second} index={1} />
            </Reveal>
          )}
          {rest.length > 0 && (
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              {rest.map((project, i) => (
                <Reveal key={project.id} delay={i * 0.08} className="h-full">
                  <CardProject project={project} index={i + 2} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
