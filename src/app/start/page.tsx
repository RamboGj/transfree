'use client'

import { Button } from '@/components/atoms/Button'
import { Connection } from '@/components/atoms/Connection'
import { PlusCircle } from '@phosphor-icons/react'
import { useState } from 'react'
import colors from 'tailwindcss/colors'

export default function Start() {
  const [selected, setSelected] = useState<string>('')

  const connections = [
    {
      id: 'Connection0X0109',
    },
    {
      id: 'Connection0XGFF0109',
    },
    {
      id: 'Connection0X012109',
    },
    {
      id: 'Connection0X0fd109',
    },
    {
      id: 'Connection0X01099',
    },
  ]

  return (
    <div className="w-full flex justify-center min-h-screen relative pb-12">
      <div className="flex items-start w-full max-w-[1120px] flex-col bg-neutral-800 p-12 border border-neutral-700 bg-opacity-60 rounded-xl mt-12 z-20">
        <header className="flex justify-between items-center w-full">
          <h1 className="text-3xl font-medium">Rede</h1>
          <Button className="max-w-fit">
            <Button.Text>Add connection</Button.Text>
            <Button.Icon>
              <PlusCircle color={colors.white} size={24} />
            </Button.Icon>
          </Button>
        </header>

        <div className="h-px bg-neutral-700 w-full mt-8" />
        <main className="w-full mt-12">
          <ul className="flex flex-col gap-4">
            {connections.map(({ id }) => {
              const isSelected = id === selected

              return (
                <li
                  role="button"
                  key={id}
                  onClick={() => {
                    setSelected(id)
                  }}
                >
                  <Connection id={id} isSelected={isSelected} />
                </li>
              )
            })}
          </ul>
        </main>
      </div>
      <div className="w-[400px] h-[400px] bg-violet-500 absolute top-0 left-0 rounded-full blur-[200px]"></div>
    </div>
  )
}
