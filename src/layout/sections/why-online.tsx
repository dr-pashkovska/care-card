import cn from 'classnames'
import type { FC, PropsWithChildren, ReactNode } from 'react'

import { FileLines, HourglassHalf, Mobile, Question } from '~/components/icons'
import { SectionHeader } from '~/components/section-header'

import { Section } from './section'

export const WhyOnline: FC = () => {
  return (
    <Section>
      <SectionHeader title="Чому онлайн-консультація зручніша за кабінет?" />

      <ul className="text-lg text-slate-700 flex flex-col gap-4">
        <Block icon={<FileLines height="4rem" width="4rem" />}>
          Ви отримуєте <span className="ml-1.5 font-semibold">зрозумілий файл із протоколом</span> — з прикладами
          засобів (до 3 варіантів на позицію), чіткою схемою застосування та рекомендаціями від мене в аудіо-форматі, а
          не «швидкі поради» під час візиту.
        </Block>

        <Block icon={<HourglassHalf height="4rem" width="4rem" />}>
          Є час спокійно все обдумати, перечитати й задати питання у межах обраного пакету.
        </Block>

        <Block icon={<Question height="4rem" width="4rem" />}>
          Всі питання зазвичай виникають <b>після виходу з кабінету лікаря</b>— тут у вас є можливість поставити їх у
          Telegram.
        </Block>

        <Block icon={<Mobile height="4rem" width="4rem" />}>
          Гнучкий формат: не потрібно підлаштовуватись під графік, усе відбувається у зручному для вас режимі.
        </Block>
      </ul>
    </Section>
  )
}

const Block: FC<PropsWithChildren & { icon: ReactNode }> = ({ children, icon }) => {
  return (
    <li
      className={cn([
        'border border-teal-600/40 rounded-md p-4',
        'text-slate-700 bg-white/40 shadow-md',
        '[&>svg]:text-teal-600 [&>svg]:float-start [&>svg]:mr-4',
      ])}
    >
      {icon}
      <p>{children}</p>
    </li>
  )
}
