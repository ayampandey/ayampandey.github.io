import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Approach } from './components/Approach'
import { Work } from './components/work/Work'
import { Experience } from './components/Experience'
import { About } from './components/About'
import { Contact, Footer } from './components/Contact'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">
          <Hero />
          <Approach />
          <Work />
          <Experience />
          <About />
          <Contact />
        </main>
        <Footer />
      </LazyMotion>
    </MotionConfig>
  )
}
