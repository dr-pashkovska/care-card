import cn from 'classnames'
import type { FC, PropsWithChildren } from 'react'

import { SectionHeader } from '~/components/section-header'

import { Section } from './section'

export const OurProcess: FC = () => {
  return (
    <Section>
      <SectionHeader title="Як ми працюємо" />

      <div className="border p-4 sm:p-6 border-brand-green-dark rounded-md shadow-md flex gap-4 flex-col-reverse sm:flex-row">
        <ul className={cn(['text-lg text-brand-text-dark flex flex-col gap-6'])}>
          <Block stepNumber={1}>Ви залишаєте заявку.</Block>
          <Block stepNumber={2}>Я надсилаю анкету у Telegram.</Block>
          <Block stepNumber={3}>Ви заповнюєте її та надсилаєте фото/відео шкіри.</Block>
          <Block stepNumber={4}>Я аналізую ваші засоби, стан шкіри та складаю персональний файл-протокол.</Block>
          <Block stepNumber={5}>Супровід починається з моменту, як ви отримуєте файл і всі рекомендації.</Block>
        </ul>

        <div>
          <img
            src="/care-card/img-4.webp"
            alt="Як ми працюємо"
            className={cn(['max-h-96 rounded-md', 'mx-auto mb-4 sm:mb-0'])}
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  )
}

const Block: FC<PropsWithChildren & { stepNumber: number }> = ({ stepNumber, children }) => {
  return (
    <li>
      <div
        className={cn([
          'float-start mr-4 w-10 h-10',
          'flex-shrink-0 flex items-center justify-center rounded-full',
          'bg-brand-green-light text-white font-semibold italic shadow-lg',
        ])}
      >
        {stepNumber}
      </div>
      <p className="text-brand-text-dark text-lg">{children}</p>
    </li>
  )
}
