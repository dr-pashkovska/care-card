import cn from 'classnames'
import type { FC } from 'react'

import { SectionHeader } from '~/components/section-header'

import { Section } from './section'

export const AboutMe: FC = () => {
  return (
    <Section>
      <SectionHeader title="Про мене" />

      <div className="border p-4 sm:p-6 border-teal-600/40 rounded-md shadow-md bg-white/40">
        <img
          src="/care-card/img-1.jpg"
          alt="Про мене"
          className={cn(['max-h-96 rounded-md mx-auto mb-4', 'float-none', 'block', 'sm:mb-0 sm:mr-4 sm:float-left'])}
          loading="lazy"
        />

        <div className="text-lg text-slate-700 [&>p]:not-last:mb-4">
          <p>
            Я Єлизавета Пашковська, лікар-дерматолог і косметолог. Уже понад 7 років я допомагаю людям вирішувати
            проблеми зі шкірою та знаходити свій шлях до її здоров’я й краси. За цей час більше ніж 2500 пацієнтів
            довірили мені свою шкіру — і разом ми досягли результатів, які роблять їх впевненішими щодня.
          </p>
          <p>
            Сьогодні я працюю онлайн, щоб Ви могли отримати якісну допомогу незалежно від того, де знаходитесь. На
            консультації ми розберемо Вашу ситуацію, зрозуміємо, що саме потребує шкіра, та складемо просту й ефективну
            систему догляду. Ви навчитеся підбирати засоби свідомо, а не навмання, і зрозумієте, як підтримувати
            здоров’я та красу шкіри щодня.
          </p>
        </div>
      </div>
    </Section>
  )
}
