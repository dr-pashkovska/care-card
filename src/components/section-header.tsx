import type { FC } from 'react'

export const SectionHeader: FC<Props> = ({ title }) => {
  return <h2 className="!italic family-playfair text-brand-green-dark text-4xl text-center py-6 sm:py-12">{title}</h2>
}

interface Props {
  title: string
}
