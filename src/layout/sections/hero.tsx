import cn from 'classnames'
import type { FC } from 'react'

import { Badge } from '~/components'

import { Section } from './section'

export const Hero: FC = () => {
  return (
    <Section fullHeight>
      <div className="relative mx-auto w-full grow">
        <img
          src="/care-card/hero-2.png"
          className={cn(['max-h-full min-h-80 block absolute top-0 bottom-0 z-10 left-1/2 -translate-x-1/2'])}
          alt="Єлизавета Пашковська"
          loading="lazy"
        />
        <Badge text="Єлизавета Пашковська" className="absolute left-0 bottom-2 text-nowrap z-20" />
      </div>

      <h1 className="flex flex-col uppercase justify-center family-playfair !italic text-slate-600 text-wrap z-20">
        <span className="md:text-7xl sm:text-6xl text-5xl text-center">Лікар-дерматолог</span>
        <span className="md:text-6xl sm:text-5xl text-4xl text-center">і косметолог</span>
      </h1>

      <p className="italic font-light text-md text-slate-600 text-center py-4 z-20">
        Ваш персональний супровід у догляді та лікуванні шкіри
        <span className="ml-1.5 font-semibold">онлайн</span>
      </p>

      <div className="text-center pb-5 z-20">
        <a
          href="https://t.me/Yelyzaveta_Pashkovska"
          rel="noopener noreferrer"
          target="_blank"
          className={cn([
            'transition-all cursor-pointer shadow-md',
            'sm:py-4 sm:px-8 py-3 px-5',
            'bg-[#d7acaa] hover:bg-[#d7acaa]/90',
            'text-white',
            'sm:text-2xl text-lg font-normal',
            'rounded-lg border-none',
            'focus:outline-none',
            'text-center',
          ])}
        >
          Записатися на консультацію
        </a>
      </div>
    </Section>
  )
}
