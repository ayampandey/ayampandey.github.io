import { m, useReducedMotion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1] as const

function Caption({ children, dark }: { children: string; dark?: boolean }) {
  return <figcaption className={`mt-4 text-xs ${dark ? 'text-mist' : 'text-muted'}`}>{children}</figcaption>
}

const schemaFields = [
  { name: 'court', type: 'STRING', hint: 'Full name of the court' },
  { name: 'judgment_date', type: 'STRING', hint: 'DD/MM/YYYY' },
  { name: 'parties', type: 'STRING', hint: 'Petitioners, respondents, bench' },
  { name: 'summary', type: 'STRING', hint: '100–150 words' },
  { name: 'arguments', type: 'ARRAY', hint: '3–5 key arguments' },
]

const insightSteps = ['PDF / DOCX', 'Clean', 'Gemini', 'SQLite', 'Search & trends']

export function LegalInsightVisual() {
  const reduce = useReducedMotion()
  return (
    <figure className="flex h-full flex-col justify-center">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[11px] font-medium tracking-wide text-mist uppercase">
        {insightSteps.map((step, index) => (
          <li key={step} className="flex items-center gap-2">
            <span
              className={`rounded-full border px-2.5 py-1 ${index === 2 ? 'border-accent-soft/60 text-paper' : 'border-night-line'}`}
            >
              {step}
            </span>
            {index < insightSteps.length - 1 && <ArrowRight aria-hidden="true" className="size-3 opacity-60" />}
          </li>
        ))}
      </ol>

      <div className="mt-6 overflow-hidden rounded-2xl border border-night-line bg-night shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
        <div className="flex items-center justify-between border-b border-night-line px-5 py-3">
          <span className="font-mono text-[11px] text-mist">app.py · responseSchema</span>
          <span className="font-mono text-[11px] text-mist">application/json</span>
        </div>
        <ul className="divide-y divide-night-line/70 px-5 font-mono text-[12.5px] sm:text-[13px]">
          {schemaFields.map((field, index) => (
            <m.li
              key={field.name}
              className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 py-3.5 sm:grid-cols-[9.5rem_4.5rem_1fr]"
              initial={reduce ? false : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease, delay: 0.15 + index * 0.08 }}
            >
              <span className="text-paper">{field.name}</span>
              <span className="text-accent-soft">{field.type}</span>
              <span className="col-span-2 font-sans text-xs text-mist sm:col-span-1 sm:text-right">{field.hint}</span>
            </m.li>
          ))}
        </ul>
        <div className="border-t border-night-line px-5 py-3 font-mono text-[11px] text-mist">required: all five fields</div>
      </div>
      <Caption dark>The structured-output schema LegalInsight requests for every judgment, as defined in its source code.</Caption>
    </figure>
  )
}

const skeleton = 'block h-2 rounded-full bg-ink/[0.08]'

export function ToolkitVisual() {
  return (
    <figure className="flex h-full flex-col justify-center">
      <div aria-hidden="true" className="rounded-2xl bg-card p-5 shadow-[0_40px_80px_-40px_rgba(22,21,19,0.35)] ring-1 ring-line sm:p-7">
        <div className="inline-flex rounded-full bg-paper-2 p-1 text-[11px] font-medium sm:text-xs">
          {['Clauses', 'Compare', 'Draft'].map((tab) => (
            <span
              key={tab}
              className={`rounded-full px-3 py-1.5 sm:px-4 ${tab === 'Compare' ? 'bg-card text-ink shadow-sm' : 'text-muted'}`}
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 text-[10px] font-medium tracking-wide text-muted uppercase">
          <span>Draft A</span>
          <ArrowRight className="size-3" />
          <span>Draft B</span>
        </div>
        <div className="mt-3 space-y-2.5">
          <span className={`${skeleton} w-11/12`} />
          <span className={`${skeleton} w-9/12`} />
        </div>

        <div className="mt-5 space-y-2 font-serif text-[13px] leading-snug sm:text-[15px]">
          <p className="text-ink-2">14.1 This Agreement shall be governed by the laws of</p>
          <p className="rounded-md bg-[#f6e4dc] px-2 py-1 text-[#8c3a17]">
            <span className="mr-2 font-mono text-xs">−</span>
            <span className="line-through decoration-[#8c3a17]/50">England and Wales.</span>
          </p>
          <p className="rounded-md bg-[#e4ede1] px-2 py-1 text-[#2e5a31]">
            <span className="mr-2 font-mono text-xs">+</span>India.
          </p>
        </div>

        <div className="mt-5 space-y-2.5">
          <span className={`${skeleton} w-10/12`} />
          <span className={`${skeleton} w-7/12`} />
          <span className={`${skeleton} w-9/12`} />
        </div>
      </div>
      <Caption>Illustration of the version-comparison concept, not a screenshot of the application.</Caption>
    </figure>
  )
}

const patterns = [
  { clause: 'confidentiality', terms: ['confidentiality', 'non-disclosure', 'nda'] },
  { clause: 'indemnification', terms: ['indemnify', 'hold harmless'] },
  { clause: 'termination', terms: ['terminate', 'termination'] },
]

export function ContractAnalyzerVisual() {
  const reduce = useReducedMotion()
  return (
    <figure>
      <div className="rounded-2xl bg-paper-2 p-5 sm:p-6">
        <p className="font-mono text-[11px] text-muted">app.py · clause_patterns</p>
        <ul className="mt-4 space-y-3">
          {patterns.map((pattern, index) => (
            <m.li
              key={pattern.clause}
              className="rounded-xl bg-card p-4 ring-1 ring-line"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease, delay: index * 0.08 }}
            >
              <p className="font-mono text-[13px] text-accent">{pattern.clause}</p>
              <p className="mt-2 flex flex-wrap gap-1.5">
                {pattern.terms.map((term) => (
                  <span key={term} className="rounded-md bg-paper-2 px-2 py-0.5 font-mono text-xs text-ink-2">
                    {term}
                  </span>
                ))}
              </p>
            </m.li>
          ))}
        </ul>
      </div>
      <Caption>The three clause rules defined in the project's source, matched case-insensitively.</Caption>
    </figure>
  )
}

const predictionSteps = [
  { label: 'Judgment PDFs', detail: 'Indian Supreme Court judgments' },
  { label: 'Text extraction', detail: 'PyMuPDF · empty and scanned files logged' },
  { label: 'TF-IDF features', detail: 'max_features = 5000' },
  { label: 'Random Forest', detail: 'n_estimators = 100' },
]

export function JudgmentPredictionVisual() {
  const reduce = useReducedMotion()
  return (
    <figure>
      <div className="rounded-2xl bg-paper-2 p-5 sm:p-6">
        <ol className="relative space-y-5 pl-7">
          <m.span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-1.25 w-px origin-top bg-ink/20"
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.4, ease }}
          />
          {predictionSteps.map((step) => (
            <li key={step.label} className="relative">
              <span aria-hidden="true" className="absolute top-1.5 -left-7 size-2.75 rounded-full border-2 border-paper-2 bg-ink" />
              <p className="text-sm font-medium text-ink">{step.label}</p>
              <p className="mt-0.5 font-mono text-xs text-muted">{step.detail}</p>
            </li>
          ))}
          <li className="relative">
            <span aria-hidden="true" className="absolute top-1.5 -left-7 size-2.75 rounded-full border-2 border-paper-2 bg-accent" />
            <p className="text-sm font-medium text-ink">Predicted outcome</p>
            <p className="mt-2 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-card px-3 py-1 text-ink-2 ring-1 ring-line">Plaintiff</span>
              <span className="rounded-full bg-card px-3 py-1 text-ink-2 ring-1 ring-line">Defendant</span>
            </p>
          </li>
        </ol>
      </div>
      <Caption>Pipeline and parameters as implemented in the project's training script.</Caption>
    </figure>
  )
}
