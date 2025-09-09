import type { FC } from 'react'

import { SectionHeader } from '~/components/section-header'

import { Section } from './section'

export const ConsultationTypes: FC = () => {
  return (
    <Section>
      <SectionHeader title="Види консультацій" />

      <div className="text-lg text-slate-700 flex flex-col gap-2">
        <h3>Консультація без супроводу — 50 €</h3>
        <ul className="text-lg text-slate-700 flex flex-col gap-2">
          <li>- Індивідуальний файл-протокол (ранок/вечір, частота, тривалість).</li>
          <li>- Аналіз ваших засобів (що залишити / що замінити).</li>
          <li>- Підбір нових засобів із прикладами (до 3 варіантів на кожен).</li>
          <li>- 3 дні для уточнюючих питань у Telegram.</li>
        </ul>
      </div>

      <div className="text-lg text-slate-700 flex flex-col gap-2">
        <h3>Консультація із супроводом 3 місяці — 100 €</h3>
        <ul className="text-lg text-slate-700 flex flex-col gap-2">
          <li>
            - Усе з пакету <b>без супроводу</b>.
          </li>
          <li>- 3 місяці супроводу у Telegram.</li>
          <li>- 1–2 рази на тиждень повноцінні відповіді.</li>
          <li>- Контроль введення активів (ретинол, кислоти тощо).</li>
          <li>- Корекція догляду за потреби.</li>
          <li>- Сезонні заміни та адаптація протоколу.</li>
        </ul>
      </div>

      <div className="text-lg text-slate-700 flex flex-col gap-2">
        <h3>
          Річний супровід — 250 € (рекомендований пацієнтам на системному лікуванні із хронічними дерматологічними
          станами)
        </h3>
        <ul className="text-lg text-slate-700 flex flex-col gap-2">
          <li>
            - Усе з пакету <b>3 місяці</b>.
          </li>
          <li>- 12 місяців супроводу.</li>
          <li>- Регулярний контроль результатів і адаптація догляду.</li>
          <li>- Підтримка під час системної терапії.</li>
          <li>- Запобігання «зривам» та хаотичним покупкам: готові списки альтернатив.</li>
        </ul>
      </div>
    </Section>
  )
}
