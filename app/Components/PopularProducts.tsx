import Image from "next/image";
 import React from 'react'
 
  const PopularProducts = () => {
   return (
    <section>
    <div className=' text-[#2A254B] mt-12 my-8 mx:10 lg:mx-20 md:px-8'>
      <h1 className='text-2xl'>Our popular products</h1>

      {/* Flexbox layout: stack on small screens, side by side on medium and large screens */}
      <div className='flex justify-between flex-col md:flex-row gap-8 mt-8'>
        
        {/* Product 1 */}
        <div className='w-full md:w-[700px] h-auto group'>
          <Image
            src="/Sofa.png"
            height={375}
            width={730}
            alt='sofa'
            className='w-full h-[80%] object-cover '
          />
          <div className='mt-4 text-[#2A254B]'>
            <p className='py-2'>The popular suede sofa</p>
            <p>$980</p>
          </div>
        </div>

        {/* Product 2 */}
        <div className='w-full md:w-[350px] h-auto group'>
          <Image
            src="/Chair.png"
            height={375}
            width={305}
            alt='chair'
            className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
          />
          <div className='mt-4 text-[#2A254B]'>
            <p className='py-2'>The Dandy chair</p>
            <p>$250</p>
          </div>
        </div>

        {/* Product 3 */}
        <div className='w-full md:w-[350px] h-auto group'>
          <Image
            src="/Chair2.png"
            height={375}
            width={305}
            alt='chair'
            className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
          />
          <div className='mt-4 text-[#2A254B]'>
            <p className='py-2'>The Dandy chair</p>
            <p>$250</p>
          </div>
        </div>

      </div>

      {/* View Collection Button */}
      <div className='my-10 flex justify-center items-center'>
        <button className='bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]'>
          View products
        </button>
      </div>
    </div>
  </section>
   )
 }
 export default PopularProducts
 

