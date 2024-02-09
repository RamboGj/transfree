import { UserCircle } from '@phosphor-icons/react'
import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import colors from 'tailwindcss/colors'

const connection = tv({
  slots: {
    container:
      'flex items-center gap-4 hover:bg-neutral-700 h-16 transition-colors duration-300 hover:cursor-pointer',
    text: 'font-medium text-neutral-400',
  },
  variants: {
    isSelected: {
      true: {
        container:
          'bg-gradient-to-r from-violet-950 to-violet-900 hover:bg-violet-950',
        text: 'text-neutral-100',
      },
      false: {},
    },
  },
  defaultVariants: {
    isSelected: false,
  },
})

interface ConnectionProps
  extends ComponentProps<'div'>,
    VariantProps<typeof connection> {
  id: string
}

export function Connection({
  id,
  className,
  isSelected = false,
  ...rest
}: ConnectionProps) {
  const { container, text } = connection({ className, isSelected })

  return (
    <div className={container()} {...rest}>
      <UserCircle color={colors.violet[500]} size={32} weight="thin" />
      <strong className={text()}>{id}</strong>
    </div>
  )
}
