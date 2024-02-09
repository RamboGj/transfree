'use client'

import { Input } from '@/components/atoms/Input'
import { Warning } from '@phosphor-icons/react'
import colors from 'tailwindcss/colors'

export default function Register() {
  return (
    <div className="w-full flex items-center justify-center min-h-screen relative">
      <div className="flex items-center w-full max-w-lg flex-col bg-neutral-800 p-12 border border-neutral-700 rounded-xl">
        <h1 className="text-3xl font-medium">CRIAR CONTA</h1>

        <form className="w-full mt-8">
          <div className="flex flex-col gap-4">
            <Input>
              <Input.Label htmlFor="email">Email</Input.Label>
              <Input.Field
                type="email"
                id="email"
                placeholder="Your e-mail here..."
                autoComplete="off"
              />
            </Input>

            <Input>
              <Input.Label htmlFor="password">Password</Input.Label>
              <Input.Field
                type="password"
                id="email"
                placeholder="Your password here..."
              />
            </Input>

            <Input>
              <Input.Label htmlFor="confirmPassword">
                Confirm Password
              </Input.Label>
              <Input.Field
                type="password"
                id="email"
                placeholder="Confirm your password..."
              />
            </Input>
          </div>

          <div className="flex items-center gap-1 mt-4">
            <Warning color={colors.amber[500]} size={16} />
            <p className="text-xs text-amber-600">
              We strongly recommend you not to use personal e-mails.
            </p>
          </div>

          <button className="mt-16 bg-violet-500 w-full h-[52px] font-semibold text-lg rounded-md hover:bg-violet-700 transition-colors duration-300">
            Criar conta
          </button>
        </form>
      </div>

      <div className="w-[400px] h-[400px] bg-violet-500 absolute top-0 left-0 rounded-full blur-[200px]"></div>
    </div>
  )
}
