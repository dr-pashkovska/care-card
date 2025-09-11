import cn from 'classnames'
import type { FC, ReactNode } from 'react'

import { SectionHeader } from '~/components/section-header'

import { Section } from './section'

export const ConsultationTypes: FC = () => {
  return (
    <Section>
      <SectionHeader title="Види консультацій" />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Block title="Консультація без супроводу" list={PACK_50} price={50} />
        <Block title="Консультація із супроводом 3 місяці" list={PACK_100} price={100} />
        <Block
          description="(рекомендований пацієнтам на системному лікуванні із хронічними дерматологічними станами)"
          title="Річний супровід"
          list={PACK_250}
          price={250}
        />
      </ul>
    </Section>
  )
}

const Block: FC<{ title: ReactNode; list: (ReactNode | string)[]; price: number; description?: string }> = ({
  title,
  list,
  price,
  description,
}) => {
  return (
    <li
      className={cn([
        'border border-teal-600/40 rounded-md p-4',
        'text-slate-700 bg-white/40 shadow-md',
        'flex flex-col gap-4',
      ])}
    >
      <span className="text-5xl font-bold text-center text-teal-600">{price} €</span>
      <h4 className="text-xl text-center">{title}</h4>
      <div className="border-b border-b-slate-200 w-1/3 mx-auto" />
      {description && <span className="text-sm text-slate-500 leading-4">{description}</span>}
      <ul>
        {list.map((item, key) => (
          <li key={key} className="flex gap-3 pb-3">
            <div className="py-1.5">
              <span className="block rounded-full p-1.5 bg-teal-500" />
            </div>
            <span className="text-base text-slate-700">{item}</span>
          </li>
        ))}
      </ul>
    </li>
  )
}

const PACK_50 = [
  'Індивідуальний файл-протокол (ранок/вечір, частота, тривалість).',
  'Аналіз ваших засобів (що залишити / що замінити).',
  'Підбір нових засобів із прикладами (до 3 варіантів на кожен).',
  '3 дні для уточнюючих питань у Telegram.',
]

const PACK_100 = [
  <>
    Усе з пакету <b>без супроводу</b>.
  </>,
  '3 місяці супроводу у Telegram.',
  '1–2 рази на тиждень повноцінні відповіді.',
  'Контроль введення активів (ретинол, кислоти тощо).',
  'Корекція догляду за потреби.',
  'Сезонні заміни та адаптація протоколу.',
]

const PACK_250 = [
  <>
    Усе з пакету <b>3 місяці</b>.
  </>,
  '12 місяців супроводу.',
  'Регулярний контроль результатів і адаптація догляду.',
  'Підтримка під час системної терапії.',
  'Запобігання «зривам» та хаотичним покупкам: готові списки альтернатив.',
]
