import type { FC } from 'react'

import { SectionHeader } from '~/components/section-header'

import { Section } from './section'

export const OurProcess: FC = () => {
  return (
    <Section>
      <SectionHeader title="Як ми працюємо" />

      <ul className="text-lg text-slate-700 flex flex-col gap-2">
        <li>- Ви залишаєте заявку.</li>
        <li>- Я надсилаю анкету у Telegram.</li>
        <li>- Ви заповнюєте її та надсилаєте фото/відео шкіри.</li>
        <li>- Я аналізую ваші засоби, стан шкіри та складаю персональний файл-протокол.</li>
        <li>- Супровід починається з моменту, як ви отримуєте файл і всі рекомендації.</li>
      </ul>
    </Section>
  )
}
