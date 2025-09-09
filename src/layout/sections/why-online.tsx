import type { FC } from 'react'

import { SectionHeader } from '~/components/section-header'

import { Section } from './section'

export const WhyOnline: FC = () => {
  return (
    <Section>
      <SectionHeader title="Чому онлайн-консультація зручніша за кабінет?" />

      <ul className="text-lg text-slate-700 flex flex-col gap-2">
        <li>
          📝 Ви отримуєте <span className="ml-1.5 font-semibold">зрозумілий файл із протоколом</span> — з прикладами
          засобів (до 3 варіантів на позицію), чіткою схемою застосування та рекомендаціями від мене в аудіо-форматі, а
          не «швидкі поради» під час візиту.
        </li>
        <li>⏳ Є час спокійно все обдумати, перечитати й задати питання у межах обраного пакету.</li>
        <li>
          <img alt="" height="2rem" className="h-8 text-white" src="/icons/question.svg" />
          Всі питання зазвичай виникають <span className="ml-1.5 font-semibold">після виходу з кабінету лікаря</span> —
          тут у вас є можливість поставити їх у Telegram.
        </li>
        <li>📱 Гнучкий формат: не потрібно підлаштовуватись під графік, усе відбувається у зручному для вас режимі.</li>
      </ul>
    </Section>
  )
}
