import type { FC } from 'react'

import type { Icon } from './interface'

export const Mobile: FC<Icon> = ({
  width = '1.25rem',
  height = '1.25rem',
  currentColor = 'currentColor',
  ...props
}) => (
  <svg height={height} viewBox="0 0 640 640" width={width} xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Mobile</title>
    <path
      d="M144 128C144 92.7 172.7 64 208 64L432 64C467.3 64 496 92.7 496 128L496 512C496 547.3 467.3 576 432 576L208 576C172.7 576 144 547.3 144 512L144 128zM256 504C256 517.3 266.7 528 280 528L360 528C373.3 528 384 517.3 384 504C384 490.7 373.3 480 360 480L280 480C266.7 480 256 490.7 256 504zM432 128L208 128L208 432L432 432L432 128z"
      fill={currentColor}
    />
  </svg>
)
