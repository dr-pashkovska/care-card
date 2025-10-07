/** biome-ignore-all lint/suspicious/noArrayIndexKey: explanation */
import type { FC, ReactNode } from 'react'

import { Check } from '~/components/icons'
import { SectionHeader } from '~/components/section-header'

import { Section } from './section'

export const Differences: FC = () => {
  return (
    <Section>
      <SectionHeader title="Порівняння пакетів" />

      <div className="border p-4 sm:p-6 border-brand-green-dark rounded-md shadow-md">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-brand-text-dark">
            <thead className="text-xs uppercase bg-brand-green-light">
              <tr>
                {HEADERS.map((item) => (
                  <th key={item} scope="col" className="px-6 py-3 text-white">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{[PACK_1, PACK_2, PACK_3].map(makeRow)}</tbody>
          </table>
        </div>
      </div>
    </Section>
  )
}

const makeRow: MakeRow = (items, key) => {
  return (
    <tr className="border-b border-brand-green-light/60" key={key}>
      {items.map((item, key) =>
        !key ? (
          <th key={key} scope="row" className="px-6 py-4 font-semibold text-brand-text-dark whitespace-nowrap">
            {item}
          </th>
        ) : (
          <td key={key} className="px-6 py-4">
            {item === '+' ? <CheckCell /> : item}
          </td>
        )
      )}
    </tr>
  )
}

const CheckCell: FC = () => (
  <div className="flex items-center justify-center w-full">
    <Check width="1.5rem" height="1.5rem" className="text-brand-green-light" />
  </div>
)

const HEADERS = ['Пакет', 'Файл-протокол', 'Час на запитання', "Зв'язок", 'Тривалість']

const PACK_1 = ['Без супроводу (50 €)', '+', '3 дні', 'за потреби', '-']
const PACK_2 = ['3 місяці (100 €)', '+', 'увесь період', '1–2 рази/тиждень', '3 місяці']
const PACK_3 = ['Рік (250 €)', '+', 'увесь період', '1–2 рази/тиждень', '12 місяців']

type MakeRow = (items: string[], index: number, array: string[][]) => ReactNode
