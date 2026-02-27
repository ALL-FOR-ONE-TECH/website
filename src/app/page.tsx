import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { CTA } from '@/components/sections/CTA'
import { FeatureBanner } from '@/components/sections/FeatureBanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureBanner />
      <Services />
      <About />
      <Projects />
      <CTA />
    </>
  )
}
