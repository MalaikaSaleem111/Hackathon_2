import React from 'react'
import { Truck } from 'lucide-react';
import { CircleCheck } from 'lucide-react';
import { CreditCard } from 'lucide-react'
import { Sprout } from 'lucide-react'



const Feature = () => {
    return (
        <div className="w-full md:h-[323px] mt-12 my-8 mx:10  md:px-8">
          <div className="flex justify-center pb-8  ">
            <h3 className="text-center text-3xl md:text-4xl font-normal text-[#2A254B]">
              What makes our brand different
            </h3>
          </div>
    
          <div className="w-full flex flex-col md:flex-row justify-center gap-10 items-center space-y-8 sm:space-y-0 sm:space-x-8">
            {/* First Feature */}
            <div className="flex flex-col items-center bg-gray-100 w-full h-48 pt-6 sm:w-[366px] space-y-4">
              <div><Truck /></div>
              <h4 className="text-xl font-normal text-[#2A254B] text-center">Next day as standard</h4>
              <p className="text-base font-normal text-[#2A254B] text-center px-4 sm:px-0">
                Order before 3pm and get your order the next day as standard.
              </p>
            </div>
    
            {/* Second Feature */}
            <div className="flex flex-col items-center bg-gray-100 w-full h-48 pt-6 sm:w-[366px] space-y-4">
              <div><CircleCheck /></div>
              <h4 className="text-xl font-normal text-[#2A254B] text-center">Made by true artisans</h4>
              <p className="text-base font-normal text-[#2A254B] text-center px-4 sm:px-0">
                Handmade crafted goods made with real passion and craftsmanship.
              </p>
            </div>
    
            {/* Third Feature */}
            <div className="flex flex-col items-center bg-gray-100 w-full h-48 pt-6 sm:w-[366px] space-y-4">
              <div><CreditCard /></div>
              <h4 className="text-xl font-normal text-[#2A254B] text-center">Unbeatable prices</h4>
              <p className="text-base font-normal text-[#2A254B] text-center px-4 sm:px-0">
                For our materials and quality, you would not find better prices anywhere.
              </p>
            </div>
    
            {/* Fourth Feature */}
            <div className="flex flex-col items-center bg-gray-100 w-full h-48 pt-6 sm:w-[366px] space-y-4">
              <div><Sprout /></div>
              <h4 className="text-xl font-normal text-[#2A254B] text-center">Recycled packaging</h4>
              <p className="text-base font-normal text-[#2A254B] text-center px-4 sm:px-0">
                We use 100% recycled packaging to ensure our footprint is manageable.
              </p>
            </div>
          </div>
        </div>
      );
    };
    
    export default Feature;
    