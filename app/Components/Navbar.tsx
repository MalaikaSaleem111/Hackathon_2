import React from 'react'
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className='w-full h-[132px]'>
        <div className='flex justify-between items-center w-full h-[66] pt-5 px-7'>
          
            <h1 className='w-[65px] h-[30px] text-2xl font-normal'>Avion</h1>
            <div className='flex gap-6'>
              <Link href="./about"><h3>About us</h3></Link>
              <h3>Contact us</h3>
  
              

            <Search />
            <Link href="./cart"><ShoppingCart /></Link>
            <CircleUserRound />
            </div>
        </div>

        <hr className='mt-3'/>

        <div>
            <ul className='flex justify-center items-center pt-[50px] gap-[44px] w-[70-px] h-[22px] text-base font-normal text-[#726E8D]'>
                <li>Plant Pots</li>
                <li>Ceramics</li>
                <li>Tables</li>
                <li>Chairs</li>
                <li>Crockery</li>
                <li>Tableware</li>
                <li>Cutlery</li>
            </ul>
        </div>

    </nav>
  )
}

export default Navbar