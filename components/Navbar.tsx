import Link from 'next/link'
export default function Navbar() {
    return (
        <div className='flex py-6 px-10 text-white bg-black justify-between'>
        <ul className='flex gap-10'>
          
          <li>
              <Link className='hover:text-blue-500 ' href='/products/products'>PRODUCTS</Link>
          </li>
          <li>
              <Link className='hover:text-blue-500' href='/about'>ABOUT</Link>
          </li>
          <li>
              <Link className='hover:text-blue-500' href='/contact'>CONTACT</Link>
          </li>
          <li>
              <Link className='hover:text-blue-500' href='/todos'>TODO</Link>
          </li>
      </ul>

      <Link className='hover:text-blue-500' href='/'>HOME</Link>
            
        </div>
    )
  }