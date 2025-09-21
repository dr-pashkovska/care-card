import type { FC } from 'react'
import ImageGallery from 'react-image-gallery'

import { SectionHeader } from '~/components/section-header'

import { Section } from './section'

import 'react-image-gallery/styles/css/image-gallery.css'

export const Results: FC = () => {
  return (
    <Section>
      <SectionHeader title="Результати моїх пацієнтів" />
      <div className="border p-4 sm:p-6 border-teal-600/40 rounded-md shadow-md bg-white/40">
        <ImageGallery infinite lazyLoad showThumbnails={false} showPlayButton={false} autoPlay items={images} />
      </div>
    </Section>
  )
}

const images = [
  ['1_1', '1_2'],
  ['2'],
  ['3_1', '3_2'],
  ['4_1', '4_2'],
  ['5'],
  ['6'],
  ['7_1', '7_2'],
  ['8_1', '8_2'],
  ['9_1', '9_2'],
  ['10_1', '10_2'],
  ['11_1', '11_2'],
]
  .flat()
  .map((i) => ({ original: `/care-card/result/${i}.webp`, originalAlt: `Result ${i}` }))
