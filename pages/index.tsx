
import { Inter } from 'next/font/google'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
       <title>(10) Curso Next</title>
       <meta name='keyworkds' content='Roupas, Calçados'></meta>
       <meta name='descriptions' content='Encontre as melhores roupas para você'></meta>
    </Head>
    <main className="flex flex-col bg-white text-black items-center  p-24">
      <div>Sua Loja de Roupa</div>
    </main>
    </>
  )
}
