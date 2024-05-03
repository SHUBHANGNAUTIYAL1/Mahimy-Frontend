import React from 'react'
import Bread from "../assets/bread.png"

function Bread2() {
  return (
    <div className='w-full py-20 bg-[#114232]  flex items-center justify-center'>
      <div className='w-[90%] flex flex-col md:flex-row  items-center gap-16 justify-center '>
        <img src={Bread} alt="" />
        <div className=' w-[44%]  flex flex-col gap-12'>
            <h1 className='font-bold text-[30px] md:text-[40px] gabarito text-white'>Coconut Milk and Butter Bread</h1>
            <p className="text-white text-[16px] gabarito">A unique blend offering a rich, creamy texture.A unique blend offering a rich, creamy texture.A unique blend offering a rich, creamy texture.A unique blend offering a rich, creamy texture.A unique blend offering a rich, creamy texture.A unique blend offering a rich, creamy texture.</p>
            <div className="flex w-full">
             <button className=' text-[16px] md:text-[21.55px] gabarito px-6 md:px-12 bg-[#A4CF25] py-4  rounded-2xl'>Order Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Bread2
