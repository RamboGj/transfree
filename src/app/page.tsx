import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center min-h-screen relative">
      <div className="flex items-center max-w-lg flex-col gap-32 bg-neutral-800 p-12 border border-neutral-700 rounded-xl">
        <h1 className="text-3xl font-medium">
          BEM-VINDO AO{' '}
          <strong className="text-violet-500 font-bold">TRANSFREE</strong>
        </h1>

        <Link className="w-full" href="/register">
          <button className="bg-violet-500 w-full h-[52px] font-semibold text-lg rounded-md hover:bg-violet-700 transition-colors duration-300">
            Entrar
          </button>
        </Link>
      </div>

      <div className="w-[320px] h-[320px] bg-violet-500 absolute top-0 left-0 rounded-full blur-[200px]"></div>
    </div>
  )
}
