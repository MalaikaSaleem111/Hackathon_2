import Image from 'next/image'
import React from 'react'
import NewCeramics from '../Components/NewCeramics'
import { newCeramicsData } from '../page'
import SecondRow from '../Components/SecondRow'



const page = () => {
  return (
    <div>
      {/* Header Image */}
      <div className="w-full">
        <Image 
          src="/productHead.png" 
          alt="header" 
          width={2105} 
          height={189} 
          className="w-full h-auto"
        />
      </div>

      {/* Filters Section */}
      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-start md:items-center pt-4 px-4 md:px-8 text-sm md:text-base font-normal text-[#2A254B] space-y-4 md:space-y-0">
        {/* Left Filters */}
        <ul className="flex flex-wrap gap-2 md:gap-4">
          <li>Category</li>
          <li>Product type</li>
          <li>Price</li>
          <li>Brand</li>
        </ul>

        {/* Right Sorting Options */}
        <ul className="flex gap-2 md:gap-4">
          <li>Sorting by</li>
          <li>Date added</li>
        </ul>
      </div>

      {/* Products Sections */}
      <div className="mt-8">
        <NewCeramics products={newCeramicsData} />
      </div>
      
      <div className="mt-8">
        <SecondRow />
      </div>
      
      <div className="mt-8">
        <NewCeramics products={newCeramicsData} />
      </div>
    </div>
  );
};

export default page;



