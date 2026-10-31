import { GraduationCap } from 'lucide-react'
import { education, skills } from '../data/experience'
import { Reveal } from './ui/Reveal'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-28 sm:py-36 lg:py-44">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <Reveal className="lg:sticky lg:top-28">
            <p className="eyebrow text-muted">About</p>
            <h2
              id="about-title"
              className="mt-6 font-serif text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.02] font-[360] tracking-[-0.035em]"
            >
              Two disciplines, <em className="text-accent italic">one</em> practice.
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal>
            <p className="font-serif text-[clamp(1.5rem,2.6vw,2.1rem)] leading-tight font-[380] tracking-[-0.015em] text-ink">
              I studied law and data science together in a single integrated degree, and the problems I find most
              interesting sit where the two meet.
            </p>
            <div className="mt-8 max-w-[62ch] space-y-5 text-[17px] leading-relaxed text-ink-2">
              <p>
                My legal education gave me a foundation in understanding legal principles, interpreting statutes and
                judicial decisions, evaluating rights and obligations, and approaching commercial, regulatory and
                dispute-related questions. Studying data science alongside law introduced a different set of tools: ways
                to structure information, test assumptions and build practical solutions. I am particularly interested in
                where these disciplines complement each other.
              </p>
              <p>
                Much of my work sits between lawyers and technical teams. I design workflows, write and evaluate prompts,
                and turn legal requirements into rules a system can follow. I have done this in law-firm innovation work,
                freelance legal AI engagements and legal technology implementation, as well as in my own projects
                analysing judgments and contracts.
              </p>
              <p>
                I care about legal AI that is careful: grounded in the source text, honest about its limits, and checked
                by someone who understands the law.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-16">
            <div className="on-dark relative overflow-hidden rounded-[28px] bg-night p-8 text-paper sm:p-12">
              <div className="flex items-center gap-3 text-mist">
                <GraduationCap className="size-5" aria-hidden="true" />
                <h3 className="eyebrow">Education</h3>
              </div>
              <p className="mt-8 font-serif text-[clamp(1.75rem,3.2vw,2.6rem)] leading-[1.08] font-[380] tracking-[-0.02em]">
                {education.degree}
              </p>
              <p className="mt-4 text-lg text-paper/85">{education.institution}</p>
              <p className="mt-1 text-sm text-mist">
                {education.location} · {education.period}
              </p>
              <p className="mt-8 max-w-[52ch] border-t border-night-line pt-6 text-[15px] leading-relaxed text-mist">
                {education.detail}
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-16">
            <h3 className="eyebrow text-muted">Skills, as used in my work</h3>
            <div className="mt-8 grid gap-10 sm:grid-cols-3">
              {skills.map((group) => (
                <div key={group.group}>
                  <h4 className="border-b border-line pb-3 text-sm font-medium text-ink">{group.group}</h4>
                  <ul className="mt-4 space-y-2 text-[15px] text-ink-2">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
