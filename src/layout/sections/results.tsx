import type { FC } from 'react'

import { SectionHeader } from '~/components/section-header'

import { Section } from './section'

export const Results: FC = () => {
  return (
    <Section>
      <SectionHeader title="Результати моїх пацієнтів" />
      IMAGES HERE
    </Section>
  )
}
