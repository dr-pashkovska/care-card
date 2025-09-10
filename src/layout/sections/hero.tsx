import cn from 'classnames'
import type { FC } from 'react'

import { Badge } from '~/components'

import { Section } from './section'

export const Hero: FC = () => {
  return (
    <Section fullHeight>
      <div className="relative mx-auto w-full grow">
        <img
          // src="/hero-test.png"
          // src="/hero.jpeg"
          src="/care-card/hero2.webp"
          className="max-h-full block absolute top-0 bottom-0 z-10 left-1/2 -translate-x-1/2"
          alt="Єлизавета Пашковська"
        />
        <Badge text="Єлизавета Пашковська" className="absolute left-0 bottom-2 text-nowrap z-20" />
      </div>

      <h1 className="flex flex-col uppercase justify-center family-playfair !italic text-slate-600 text-wrap">
        <span className="md:text-7xl sm:text-6xl text-5xl text-center">Лікар-дерматолог</span>
        <span className="md:text-6xl sm:text-5xl text-4xl text-center">і косметолог</span>
      </h1>

      <p className="italic font-light text-md text-slate-600 text-center py-4">
        Ваш персональний супровід у догляді та лікуванні шкіри
        <span className="ml-1.5 font-semibold">онлайн</span>
      </p>

      <div className="text-center pb-5">
        <button
          type="button"
          className={cn([
            'transition-all cursor-pointer shadow-md hover:shadow-lg',
            'sm:py-4 sm:px-8 py-3 px-5',
            // 'bg-gradient-to-tr from-orange-300/70 to-orange-300',
            'bg-orange-400/70 hover:bg-orange-400/80',
            'text-white hover:text-gray-100',
            'sm:text-2xl text-lg font-normal',
            'rounded-lg border-none',
            'focus:outline-none',
          ])}
        >
          Записатися на консультацію
        </button>
      </div>
    </Section>
  )
}

// const DescVersion: FC = () => (
//   <Section fullHeight className="flex-row items-center">
//     <div className="z-20 flex flex-col gap-10 w-2/3">
//       <h1 className="flex flex-col items-start">
//         <Badge text="Єлизавета Пашковська" className="rounded-bl-none" />
//         <span className="italic text-md text-slate-600">
//           Ваш персональний супровід у догляді та лікуванні шкіри
//           <b className="text-xl ml-2">онлайн</b>
//         </span>
//         <span className="block mt-16 family-great-vibes text-[clamp(1rem,14dvw,6rem)] leading-16 text-slate-600 gap-6">
//           Лікар-дерматоло і косметолог
//         </span>
//       </h1>

//       <div className="text-md text-slate-700 flex flex-col gap-2 rounded-xl p-4 bg-white/70 border-2 border-teal-600/70 max-w-[50rem]">
//         <p>
//           Я Єлизавета Пашковська, лікар-дерматолог і косметолог. Уже понад 7 років я допомагаю людям вирішувати проблеми
//           зі шкірою та знаходити свій шлях до її здоров’я й краси. За цей час більше ніж 2500 пацієнтів довірили мені
//           свою шкіру — і разом ми досягли результатів, які роблять їх впевненішими щодня.
//         </p>
//         <p>
//           Сьогодні я працюю онлайн, щоб Ви могли отримати якісну допомогу незалежно від того, де знаходитесь. На
//           консультації ми розберемо Вашу ситуацію, зрозуміємо, що саме потребує шкіра, та складемо просту й ефективну
//           систему догляду. Ви навчитеся підбирати засоби свідомо, а не навмання, і зрозумієте, як підтримувати здоров’я
//           та красу шкіри щодня.
//         </p>
//         {/* <p className="flex justify-end pt-6">
//             <Badge
//               className="text-lg"
//               text={
//                 <span className="flex gap-2 items-center">
//                   Ваш персональний супровід у догляді та лікуванні шкіри
//                   <b className="text-2xl text-white">онлайн</b>
//                 </span>
//               }
//             />
//           </p> */}
//       </div>

//       <div className="text-center mt-6">
//         <button
//           type="button"
//           className={cn([
//             'transition-all cursor-pointer shadow-2xl',
//             'py-6 px-10',
//             'bg-gradient-to-tr from-orange-600 to-orange-400',
//             'text-gray-100 hover:text-white',
//             'text-3xl font-normal',
//             '[text-shadow:0.25rem_0.25rem_0.5rem_rgba(0,0,0,0.4)]',
//             'rounded-lg border-3 border-none',
//             'focus:outline-none',
//           ])}
//         >
//           Записатися на консультацію
//         </button>
//       </div>
//     </div>
//     <img
//       // src="/hero-test.png"
//       src="/hero2.webp"
//       // src="/hero.jpeg"
//       className="max-h-[90dvh] absolute right-2 bottom-0 z-10"
//       alt="Єлизавета Пашковська"
//     />
//   </Section>
// )
