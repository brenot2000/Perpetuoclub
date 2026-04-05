import { StickyBar } from './components/StickyBar'
import { Hero } from './components/Hero'
import { PainSection } from './components/PainSection'
import { ExpertStory } from './components/ExpertStory'
import { SocialProof } from './components/SocialProof'
import { Solution } from './components/Solution'
import { Mechanism } from './components/Mechanism'
import { Logic } from './components/Logic'
import { Deliverables } from './components/Deliverables'
import { CtaMid } from './components/CtaMid'
import { ForWhoNotFor } from './components/ForWhoNotFor'
import { Modules } from './components/Modules'
import { Bonuses } from './components/Bonuses'
import { Pricing } from './components/Pricing'
import { Guarantee } from './components/Guarantee'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-white">
      {/* BLOCO 0 — Sticky countdown bar */}
      <StickyBar />

      {/* BLOCO 1 — Hero section */}
      <Hero />

      {/* BLOCO 2 — Pain / Problem */}
      <PainSection />

      {/* BLOCO 3 — Expert story */}
      <ExpertStory />

      {/* BLOCO 4 — Social proof */}
      <SocialProof />

      {/* BLOCO 5 — The unique solution */}
      <Solution />

      {/* BLOCO 6 — Mechanism */}
      <Mechanism />

      {/* BLOCO 7 — Logic & reason */}
      <Logic />

      {/* BLOCO 8 — Deliverables */}
      <Deliverables />

      {/* BLOCO 9 — Mid CTA */}
      <CtaMid />

      {/* BLOCO 10 — For who / not for */}
      <ForWhoNotFor />

      {/* BLOCO 11 — Modules accordion */}
      <Modules />

      {/* BLOCO 12 — Bonus stack */}
      <Bonuses />

      {/* BLOCO 13 — Pricing */}
      <Pricing />

      {/* BLOCO 14 — Guarantee */}
      <Guarantee />

      {/* BLOCO 15 — FAQ */}
      <FAQ />

      {/* BLOCO 16 — Footer + last CTA */}
      <Footer />
    </div>
  )
}

export default App
