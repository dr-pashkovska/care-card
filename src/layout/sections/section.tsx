import cn from 'classnames'
import type { FC, PropsWithChildren } from 'react'

export const Section: FC<Props> = ({ className, fullHeight = false, children }) => {
  return (
    <section className={cn({ 'min-h-dvh': fullHeight })}>
      <div
        className={cn(['flex flex-col gap-3', 'p-4 container m-auto relative max-w-4xl bg-brand-cream', className], {
          'min-h-dvh': fullHeight,
        })}
      >
        {children}
      </div>
    </section>
  )
}

interface Props extends PropsWithChildren {
  fullHeight?: boolean
  className?: string
}
