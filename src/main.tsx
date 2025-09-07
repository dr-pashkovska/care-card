import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { AboutMe, ConsultationTypes, Differences, Footer, Hero, OurProcess, Results, WhyOnline } from '~/layout'

import './index.css'

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <div className="min-h-dvh family-roboto">
        <Hero />
        <main>
          <AboutMe />
          <Differences />
          <ConsultationTypes />
          <OurProcess />
          <WhyOnline />
          <Results />
        </main>
        <Footer />
      </div>
    </StrictMode>
  )
}
