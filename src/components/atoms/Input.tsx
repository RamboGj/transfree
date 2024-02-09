'use client'

import { EyeSlash, Eye } from '@phosphor-icons/react'
import { ComponentProps, ReactNode, useState } from 'react'
import { tv } from 'tailwind-variants'
import colors from 'tailwindcss/colors'

interface InputLabelProps extends ComponentProps<'label'> {
  children: ReactNode
}

interface InputFieldProps extends ComponentProps<'input'> {}

interface InputEyeButtonProps extends ComponentProps<'div'> {
  isHidden: boolean
}

interface InputProps extends ComponentProps<'div'> {
  children: ReactNode
}

const input = tv({
  slots: {
    container: 'flex flex-col items-start gap-1.5 w-full',
    label: 'font-medium text-white text-base',
    field:
      'w-full bg-transparent h-[52px] focus:outline-none border-b-2 border-transparent focus:border-violet-800 focus:bg-neutral-500/10 hover:bg-neutral-500/10 px-2 transition-colors duration-300',
  },
  variants: {
    type: {
      password: {
        field: 'relative',
      },
      default: {},
    },
  },
  defaultVariants: {
    type: 'default',
  },
})

const { container, label } = input()

function Input({ className, children }: InputProps) {
  return <div className={container({ className })}>{children}</div>
}

function InputLabel({ children, className, ...rest }: InputLabelProps) {
  return (
    <label className={label({ className })} {...rest}>
      {children}
    </label>
  )
}

function InputField({ type, className, ...rest }: InputFieldProps) {
  const [inputType, setInputType] = useState<string>(type!)

  const isPasswordInput = type === 'password'

  const hiddenContent = inputType === 'password'

  const { field } = input({
    type: isPasswordInput ? 'password' : 'default',
    className,
  })

  function handleChangeContentVisibility() {
    if (inputType === 'text') {
      setInputType('password')
    } else setInputType('text')
  }

  if (!isPasswordInput)
    return <input type={type} className={field()} {...rest} />

  return (
    <div className="relative w-full">
      <input type={inputType} className={field()} {...rest} />

      <InputEyeButton
        isHidden={hiddenContent}
        onClick={handleChangeContentVisibility}
      />
    </div>
  )
}

function InputEyeButton({ isHidden, ...rest }: InputEyeButtonProps) {
  return (
    <div
      role="button"
      className="absolute z-20 right-4 top-1/2 -translate-y-1/2"
      {...rest}
    >
      {isHidden ? (
        <EyeSlash color={colors.violet[500]} size={24} />
      ) : (
        <Eye color={colors.violet[500]} size={24} />
      )}
    </div>
  )
}

Input.Label = InputLabel
Input.Field = InputField

export { Input }
