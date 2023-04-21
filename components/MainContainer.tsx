import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode; 
};
import Navbar from './Navbar'
import Footer from './Footer';

export default function MainContainer({children}: Props) {
  return (
      <>
       <Navbar/>
         <div className='min-h-[60vh] px-10 bg-white'>{children}</div>
       <Footer/>
      </>
  )
}
