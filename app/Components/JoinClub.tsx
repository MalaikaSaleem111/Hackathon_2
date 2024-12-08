import React from 'react'

const JoinClub = () => {
  return (
    <div className='w-full h-auto bg-[#F9F9F9] py-6'>
      <div className='max-w-screen-xl mx-auto flex flex-col justify-center items-center space-y-4 h-auto mt-[52px] px-4 md:px-8"mt-[52px] bg-white '>
         <h2 className='w-full max-w-[571px] text-[#2A254B] Clash Display text-center font-normal text-4xl sm:text-3xl md:text-4xl"'>Join the club and get the benefits</h2>
        <p className='w-full max-w-[470px] text-[#2A254B] Clash Display text-center font-normal text-base sm:text-sm md:text-base'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
        <div className='flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4" '>
        <input type="email" placeholder='your@email.com' className='w-full max-w-[354px] h-14 bg-[#F9F9F9] px-4' />
        <div className=' w-full sm:w-[118px] h-14 bg-[#2A254B] flex justify-center items-center'>
        <button className='w-full text-base font-normal text-white'>Sign up</button>
        </div>
        </div>
        
        
      </div>
       
    </div>
  )
}

export default JoinClub