import cn from 'classnames'
import type { FC, ReactNode } from 'react'

export const Badge: FC<Props> = ({ text, className }) => {
  return (
    <div
      className={cn([
        'inline-block px-4 py-1 -skew-x-12 rounded-md text-lg',
        'bg-teal-600/70 text-white',
        '[text-shadow:2px_2px_6px_rgba(0,0,0,0.4)]',
        className,
      ])}
    >
      {text}
    </div>
  )
}

interface Props {
  text: string | ReactNode
  className?: string
}
