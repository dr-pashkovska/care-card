import type { FC } from 'react'

import { SectionHeader } from '~/components/section-header'

import { Section } from './section'

export const Feedback: FC = () => {
  return (
    <Section>
      <SectionHeader title="Що кажуть мої пацієнти" />

      <div className="border p-4 sm:p-6 border-teal-600/40 rounded-md shadow-md bg-white/40">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {[1, 2, 5, 4, 6, 3, 8, 9, 10, 7].map((name) => (
            <Block key={name} src={`/care-card/feedback/${name}.jpg`} />
          ))}
        </div>
      </div>
    </Section>
  )
}

const Block: FC<{ src: string }> = ({ src }) => {
  return (
    <div className="flex justify-center items-start">
      <img
        src={src}
        alt="Відгук"
        className="w-full max-w-96 h-auto shadow-lg rounded-md border border-gray-200"
        loading="lazy"
      />
    </div>
  )
}
