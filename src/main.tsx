import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  AboutMe,
  ConsultationTypes,
  Differences,
  Feedback,
  Footer,
  Hero,
  OurProcess,
  Results,
  WhyOnline,
} from '~/layout'

import './index.css'

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <div className="min-h-dvh family-roboto">
        <Hero />
        <main>
          <AboutMe />
          <WhyOnline />
          <OurProcess />
          <ConsultationTypes />
          <Results />
          <Differences />
          <Feedback />
        </main>
        <Footer />
      </div>
    </StrictMode>
  )
}
