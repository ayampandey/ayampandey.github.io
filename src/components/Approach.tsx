import { useRef } from 'react'
import { m, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { approach } from '../data/site'
import { Reveal } from './ui/Reveal'

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.16, 1])
  return <m.span style={{ opacity }}>{word}</m.span>
}

function ScrollLitText({ text, className }: { text: string; className: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.5'] })
  const words = text.split(' ')

  if (reduce) return <p className={className}>{text}</p>

  return (
    <p ref={ref} className={className}>
      {words.map((word, index) => (
        <span key={index}>
          <Word word={word} progress={scrollYProgress} range={[index / words.length, (index + 1) / words.length]} />
          {index < words.length - 1 && ' '}
        </span>
      ))}
    </p>
  )
}

export function Approach() {
  return (
    <section aria-labelledby="approach-title" className="on-dark bg-night text-paper">
      <div className="container-page py-28 sm:py-36 lg:py-44">
        <h2 id="approach-title" className="eyebrow text-mist">
          Approach
        </h2>
        <ScrollLitText
          text={approach.statement}
          className="mt-10 max-w-[19em] font-serif text-[clamp(1.9rem,4.6vw,4rem)] leading-[1.1] font-[360] tracking-tight"
        />

        <div className="mt-20 grid border-t border-night-line sm:grid-cols-3 lg:mt-28">
          {approach.pillars.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              delay={index * 0.08}
              className="border-b border-night-line py-8 sm:border-b-0 sm:py-10 sm:pr-8 sm:not-first:border-l sm:not-first:pl-8"
            >
              <p className="font-mono text-xs text-mist">0{index + 1}</p>
              <h3 className="mt-6 text-lg font-medium tracking-[-0.01em] text-paper">{pillar.title}</h3>
              <p className="mt-3 max-w-[32ch] text-[15px] leading-relaxed text-mist">{pillar.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
