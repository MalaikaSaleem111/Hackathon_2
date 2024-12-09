import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:justify-center w-full  lg:h-[704px]'>
        <div className='flex justify-between w-full  lg:w-[1280px] lg:mx-[60px] lg:mt-[60px] bg-[#2A254B] text-white pl-[60px] h-[540px] space-y-10 lg:h-[580px]'>
            <div>
                <h2 className='w-full pb-10 lg:w-[513px] h-[90px] md:text-3xl md:text font-normal text-4xl pt-[60px]'>The furniture brand for the future, with timeless designs</h2>

                <Link href="./productListing"> <div className='w-[170px] h-14 flex justify-center md:justify-start bg-gray-500 mt-[90px] py-4 px-5 '>
                 
                 <button className='w-[136px] h-6   text-base font-normal Satoshi ]'>View Collections</button>
                 </div></Link>
                

                <div className='w-full lg:w-[602px] h-[81px] mt-10 lg:pt-[210px] clash font-normal text-lg md:text-left'>A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.</div>
                
            </div>
            <div className='hidden lg:block'>
              <Image src="/heroImage.png" alt='HeroImage' width={520} height={760} />
            </div>

     </div>
    </div>
    
  )
}

export default Hero