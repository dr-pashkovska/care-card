import cn from 'classnames'
import type { FC, PropsWithChildren, ReactNode } from 'react'

import { FileLines, HourglassHalf, Mobile, Question } from '~/components/icons'
import { SectionHeader } from '~/components/section-header'

import { Section } from './section'

export const WhyOnline: FC = () => {
  return (
    <Section>
      <SectionHeader title="Чому онлайн-консультація зручніша за кабінет?" />

      <div className="flex gap-2 justify-evenly items-center">
        <div className="border p-2 border-brand-green-dark rounded-md shadow-md">
          <img
            src="/care-card/example/img-1.webp"
            alt="Audio"
            className={cn(['max-h-96 rounded-md mx-auto'])}
            loading="lazy"
          />
        </div>

        <div className="border p-2 border-brand-green-dark rounded-md shadow-md">
          <img
            src="/care-card/example/img-2.webp"
            alt="TextFile"
            className={cn(['max-h-96 rounded-md mx-auto'])}
            loading="lazy"
          />
        </div>
      </div>

      <ul className="text-lg text-brand-text-dark flex flex-col gap-4">
        <Block icon={<FileLines className="max-h-10 max-w-10 sm:max-h-16 sm:max-w-16" height="4rem" width="4rem" />}>
          Ви отримуєте <span className="ml-1.5 font-semibold">зрозумілий файл із протоколом</span> — з прикладами
          засобів (до 3 варіантів на позицію), чіткою схемою застосування та рекомендаціями від мене в аудіо-форматі, а
          не «швидкі поради» під час візиту.
        </Block>

        <Block
          icon={<HourglassHalf className="max-h-10 max-w-10 sm:max-h-16 sm:max-w-16" height="4rem" width="4rem" />}
        >
          Є час спокійно все обдумати, перечитати й задати питання у межах обраного пакету.
        </Block>

        <Block icon={<Question className="max-h-10 max-w-10 sm:max-h-16 sm:max-w-16" height="4rem" width="4rem" />}>
          Всі питання зазвичай виникають <b>після виходу з кабінету лікаря</b>— тут у вас є можливість поставити їх у
          Telegram.
        </Block>

        <Block icon={<Mobile className="max-h-10 max-w-10 sm:max-h-16 sm:max-w-16" height="4rem" width="4rem" />}>
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
        'border border-brand-green-dark rounded-md p-4',
        'text-brand-green-dark shadow-md',
        '[&>svg]:text-brand-text-dark [&>svg]:float-start sm:[&>svg]:mr-4 [&>svg]:mr-2',
      ])}
    >
      {icon}
      <p>{children}</p>
    </li>
  )
}
