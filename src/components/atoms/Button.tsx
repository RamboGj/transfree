import { ComponentProps, ReactNode } from 'react'
import { tv } from 'tailwind-variants'

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

interface ButtonTextProps extends ComponentProps<'span'> {
  children: ReactNode
}
interface ButtonIconProps {
  children: ReactNode
}

const button = tv({
  slots: {
    container:
      'bg-violet-500 w-full h-[52px] font-semibold text-lg flex items-center justify-center gap-2 rounded-md px-4 hover:bg-violet-700 transition-colors duration-300',
    text: 'font-semibold text-white text-base mx-2',
  },
})

const { container, text } = button()

function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button className={container({ className })} {...rest}>
      {children}
    </button>
  )
}

function ButtonText({ children, className, ...rest }: ButtonTextProps) {
  return (
    <span className={text({ className })} {...rest}>
      {children}
    </span>
  )
}

function ButtonIcon({ children }: ButtonIconProps) {
  return children
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export { Button }
