import cn from 'classnames'
import type { FC } from 'react'

import { Section } from '../sections/section'

export const Footer: FC = () => {
  return (
    <footer>
      <Section>
        <p className="text-center text-xl text-slate-600">Готові отримати зрозумілий план догляду?</p>
        <p className="text-center text-xl text-slate-600">
          Ніяких хаотичних покупок, лише чітка система, яка працює саме для вас.
        </p>
        <button
          type="button"
          className={cn([
            'transition-all cursor-pointer shadow-md hover:shadow-lg',
            'sm:py-4 sm:px-8 py-3 px-5',
            'bg-orange-400/70 hover:bg-orange-400/80',
            'text-white hover:text-gray-100',
            'sm:text-2xl text-lg font-normal',
            'rounded-lg border-none',
            'focus:outline-none',
            'sm:max-w-2/3 w-full mx-auto',
          ])}
        >
          Записатися на консультацію
        </button>
      </Section>
    </footer>
  )
}
