import Link from 'next/link'

export default function About() {
  return (
      <div className='flex flex-col bg-white text-black'>
         <Link className='text-blue-500' href='/'>Home</Link>
        Pagina about
      </div>
  )
}
