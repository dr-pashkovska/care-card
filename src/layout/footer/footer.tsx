import cn from 'classnames'
import type { FC } from 'react'

import { Section } from '../sections/section'

export const Footer: FC = () => {
  return (
    <footer>
      <Section>
        <div className="border p-4 sm:p-6 border-teal-600/40 rounded-md shadow-md bg-white/40 flex gap-4 items-center flex-col sm:flex-row">
          <div className="hidden sm:block">
            <img
              src="/care-card/img-2.jpg"
              alt="Готові отримати зрозумілий план догляду?"
              className={cn(['max-h-96 max-w-68 rounded-md', 'mx-auto mb-4 sm:mb-0'])}
              loading="lazy"
            />
          </div>

          <div className="flex gap-4 flex-col justify-evenly">
            <p className="text-center text-gray-700 text-lg">Готові отримати зрозумілий план догляду?</p>
            <div className="block sm:hidden">
              <img
                src="/care-card/img-2.jpg"
                alt="Готові отримати зрозумілий план догляду?"
                className={cn(['max-h-96 max-w-68 rounded-md m-auto'])}
                loading="lazy"
              />
            </div>
            <p className="text-center text-gray-700 text-lg mb-8">
              Ніяких хаотичних покупок, лише чітка система, яка працює саме для вас.
            </p>

            <a
              href="https://t.me/Yelyzaveta_Pashkovska"
              rel="noopener noreferrer"
              target="_blank"
              className={cn([
                'transition-all cursor-pointer shadow-md hover:shadow-lg',
                'py-3 px-5',
                'bg-[#d7acaa] hover:bg-[#d7acaa]/90',
                'text-white',
                'sm:text-xl text-lg font-normal',
                'rounded-lg border-none',
                'focus:outline-none',
                'sm:max-w-2/3 w-full mx-auto',
              ])}
            >
              Записатися на консультацію
            </a>
          </div>
        </div>
      </Section>
    </footer>
  )
}
