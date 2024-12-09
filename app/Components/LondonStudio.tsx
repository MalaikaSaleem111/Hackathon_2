import React from 'react'
import Image from 'next/image'




const LondonStudio = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-20 py-10">
      {/* Left Section */}
      <div className="flex flex-col justify-between pt-16 space-y-8 lg:w-[50%]">
        <h3 className="text-2xl font-normal text-[#2A254B]">
          From a studio in London to a global brand with over 400 outlets
        </h3>
        <p className="text-base font-normal text-[#2A254B]">
          When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
          <br />
          Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so our Chelsea boutique became the hotbed for the London interior design community.
        </p>
        <div className="w-[150px] h-14 px-8  bg-[#F9F9F9]">
          <button className="w-[96px] h-8 mt-3 text-base font-normal text-[#2A254B]">
            Get in touch
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-10 lg:mt-0">
        <Image src="/Studio.png" alt="Studio" width={720} height={603} />
      </div>
    </div>
  );
};

export default LondonStudio;

