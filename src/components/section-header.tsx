import type { FC } from 'react'

export const SectionHeader: FC<Props> = ({ title }) => {
  return <h2 className="!italic family-playfair text-slate-600 text-4xl text-center py-12">{title}</h2>
}

interface Props {
  title: string
}
