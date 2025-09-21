/** biome-ignore-all lint/suspicious/noArrayIndexKey: explanation */
import type { FC, ReactNode } from 'react'

import { Check } from '~/components/icons'
import { SectionHeader } from '~/components/section-header'

import { Section } from './section'

export const Differences: FC = () => {
  return (
    <Section>
      <SectionHeader title="Порівняння пакетів" />

      <div className="border p-4 sm:p-6 border-teal-600/40 rounded-md shadow-md bg-white/40">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-teal-600/70">
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
    <tr className="border-b border-gray-200" key={key}>
      {items.map((item, key) =>
        !key ? (
          <th key={key} scope="row" className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap">
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
    <Check width="1.5rem" height="1.5rem" className="text-[#d7acaa]" />
  </div>
)

const HEADERS = ['Пакет', 'Файл-протокол', 'Час на запитання', "Зв'язок", 'Тривалість']

const PACK_1 = ['Без супроводу (50 €)', '+', '3 дні', 'за потреби', '-']
const PACK_2 = ['3 місяці (100 €)', '+', 'увесь період', '1–2 рази/тиждень', '3 місяці']
const PACK_3 = ['Рік (250 €)', '+', 'увесь період', '1–2 рази/тиждень', '12 місяців']

type MakeRow = (items: string[], index: number, array: string[][]) => ReactNode
