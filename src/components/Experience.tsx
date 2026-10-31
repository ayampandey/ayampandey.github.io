import { certifications, earlierExperience, experience, virtualProgrammes } from '../data/experience'
import { Reveal } from './ui/Reveal'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-line py-28 sm:py-36 lg:py-44">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-muted">Experience</p>
          <h2
            id="experience-title"
            className="mt-6 font-serif text-[clamp(2.5rem,5.6vw,4.75rem)] leading-[1.02] font-[360] tracking-[-0.035em]"
          >
            Law and technology, applied.
          </h2>
        </Reveal>

        <div className="mt-16 lg:mt-24">
          {experience.map((role) => (
            <Reveal key={role.organisation}>
              <article className="grid gap-6 border-t border-line py-12 lg:grid-cols-12 lg:gap-12 lg:py-16">
                <div className="lg:col-span-4">
                  <p className="font-mono text-xs text-muted">{role.period}</p>
                  <h3 className="mt-3 font-serif text-[clamp(1.9rem,3vw,2.5rem)] leading-tight font-[380] tracking-[-0.02em]">
                    {role.organisation}
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    {role.context} · {role.location}
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-lg font-medium tracking-[-0.01em] text-ink">{role.role}</p>
                  <p className="mt-3 max-w-[62ch] text-[17px] leading-relaxed text-ink-2">{role.summary}</p>
                  <ul className="mt-7 grid gap-x-10 gap-y-3 text-[15px] leading-relaxed text-ink-2 md:grid-cols-2">
                    {role.highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[0.6em] size-1 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul aria-label="Focus areas" className="mt-8 flex flex-wrap gap-1.5">
                    {role.tags.map((tag) => (
                      <li key={tag} className="rounded-full bg-paper-2 px-3 py-1 text-xs text-ink-2">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="border-t border-line pt-12 lg:pt-16">
          <h3 className="eyebrow text-muted">Earlier legal experience</h3>
          <ul className="mt-8 grid gap-4 md:grid-cols-3 lg:gap-6">
            {earlierExperience.map((item) => (
              <li key={item.organisation} className="flex flex-col rounded-2xl bg-card p-6 ring-1 ring-line lg:p-7">
                <p className="font-mono text-xs text-muted">
                  {item.period} · {item.location}
                </p>
                <p className="mt-4 text-[17px] leading-snug font-medium tracking-[-0.01em] text-ink">{item.organisation}</p>
                <p className="mt-1 text-sm text-muted">{item.role}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-2">{item.summary}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-16 lg:mt-24">
          <div className="grid gap-10 rounded-[28px] bg-paper-2 p-7 sm:p-12 lg:grid-cols-12 lg:gap-12 lg:p-16">
            <div className="lg:col-span-4">
              <h3 className="font-serif text-[clamp(1.75rem,2.6vw,2.25rem)] leading-tight font-[380] tracking-[-0.02em]">
                Virtual experience &amp; professional development
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                Online virtual job simulations and certifications. They are listed here as professional development, not
                as employment.
              </p>
            </div>
            <div className="lg:col-span-8">
              <ul className="divide-y divide-line border-y border-line">
                {virtualProgrammes.map((item) => (
                  <li key={item.organisation} className="grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:gap-x-8">
                    <div>
                      <p className="text-[17px] font-medium tracking-[-0.01em] text-ink">{item.organisation}</p>
                      <p className="mt-1 text-sm text-muted">{item.programme}</p>
                      <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-ink-2">{item.summary}</p>
                    </div>
                    <p className="order-first font-mono text-xs text-muted sm:order-0 sm:pt-1.5">{item.period}</p>
                  </li>
                ))}
              </ul>
              <h4 className="eyebrow mt-10 text-muted">Certifications</h4>
              <ul className="mt-4 grid gap-x-8 gap-y-2 text-[15px] text-ink-2 sm:grid-cols-2">
                {certifications.map((item) => (
                  <li key={item.name}>
                    {item.name} <span className="text-muted">· {item.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
