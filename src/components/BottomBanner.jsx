import React from 'react'
import background from "../assets/background.png"

function BottomBanner() {
  return (
    <div className='h-[1000px] md:h-[581px] w-full flex items-center relative justify-center md:justify-end'>z
        <img src={background} alt="" className='w-full h-full object-cover'/>
        <div className=" w-full md:w-[45%]  absolute flex flex-col gap-12 p-20">
            <h1 className='font-bold text-[30px] md:text-[40px] text-center md:text-right gabarito text-white'>Upgrade Your Shelves: Deliver Quality Customers are Looking For</h1>
            <p className="text-white text-[16px] text-right gabarito">Our customers rave about the quality freshness, soft textures, and rich flavors of our bread. Statistically proven to drive bakery sales, learn what it means to be a Bakehouse Bread Company partner.</p>
            <div className="w-full flex justify-end">
            <button className=" text-[16px] md:text-[21.55px] gabarito px-12 bg-[#A4CF25] py-4  rounded-2xl">Join with Us</button>
            </div>
        </div>
    </div>
  )
}

export default BottomBanner