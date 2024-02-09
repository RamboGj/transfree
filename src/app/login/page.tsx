'use client'

import { Button } from '@/components/atoms/Button'
import { Input } from '@/components/atoms/Input'

export default function Login() {
  return (
    <div className="w-full flex items-center justify-center min-h-screen relative">
      <div className="flex items-center w-full max-w-lg flex-col bg-neutral-800 p-12 border border-neutral-700 rounded-xl">
        <h1 className="text-3xl font-medium">ENTRAR</h1>

        <form autoComplete="off" className="w-full mt-8">
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
              <Input.Label htmlFor="password">Passowrd</Input.Label>
              <Input.Field
                type="password"
                id="password"
                placeholder="Your password here..."
              />
            </Input>
          </div>

          <Button className="mt-12">
            <Button.Text>Entrar</Button.Text>
          </Button>
        </form>
      </div>

      <div className="w-[400px] h-[400px] bg-violet-500 absolute top-0 left-0 rounded-full blur-[200px]"></div>
    </div>
  )
}
