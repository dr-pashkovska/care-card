import cn from 'classnames'
import type { FC, ReactNode } from 'react'

export const Badge: FC<Props> = ({ text, className }) => {
  return (
    <div
      className={cn([
        'inline-block px-4 py-1 -skew-x-12 rounded-md text-lg',
        'bg-brand-green-dark text-white',
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
