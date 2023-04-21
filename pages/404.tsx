
import Head from 'next/head'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
    <Head>
       <title>Not Found</title>
       <meta name='keyworkds' content='Roupas, Calçados'></meta>
       <meta name='descriptions' content='Encontre as melhores roupas para você'></meta>
    </Head>
    <main className="flex flex-col bg-white text-black items-center  p-24">
      <div>404</div>
      <div>Ops...parece que essa pagina nao existe</div>
      <Link href='/'>Voltar</Link>
    </main>
    </>
  )
}
