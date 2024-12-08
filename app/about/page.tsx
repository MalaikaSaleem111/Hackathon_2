import React from 'react'
import Fearture from '../Components/Fearture'
import JoinClub from '../Components/JoinClub'
import Image from 'next/image'



const About = () => {
  return (
    <main>
      {/* First Section: Title and Button */}
      <div className='wrapper flex flex-col md:flex-row justify-between w-full pt-14 space-y-6 md:space-y-0'>
        <h2 className='w-full md:w-[704px] text-4xl font-normal Clash Display text-center md:text-left'>
          A Brand built on the love of craftsmanship, quality, and outstanding customer service
        </h2>
        <div className='w-full md:w-[202px] h-14 bg-[#F9F9F9] mx-auto md:mx-0'>
          <button className='w-full md:w-[188px] h-6 px-4 py-4 text-base font-normal'>View our products</button>
        </div>
      </div>

      {/* Second Section: "It started with a small idea" */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-16'>
        <div className='bg-[#2A254B] text-white p-8 space-y-6'>
          <h2 className='font-normal text-4xl'>It started with a small idea</h2>
          <p className='font-normal text-lg'>A global brand with local beginnings, our story began in a small studio in South London in early 2014.</p>
          <button className='bg-gray-400 h-14 px-4 py-4 text-base font-normal'>View Collection</button>
        </div>
        <Image src="/About1.png" alt='About' width={603} height={478} />
      </div>

      {/* Third Section: "Our service is not just personal" */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-16 mb-10'>
        <Image src="/About2.png" alt='About' width={720} height={603} />
        <div className='flex flex-col justify-between py-8 px-8 bg-gray-100'>
          <h2 className='text-2xl font-normal text-[#2A254B]'>
            Our service is not just personal, it is actually hyper personally exquisite
          </h2>
          <p className='text-base font-normal text-[#2A254B]'>
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design. Our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <button className="w-[118px] h-12 bg-slate-400 text-[#2A254B] mt-4">Get in touch</button>
        </div>
      </div>

      
      <div>
        <Fearture />
        <JoinClub />
      </div>
    </main>
  );
}

export default About;



