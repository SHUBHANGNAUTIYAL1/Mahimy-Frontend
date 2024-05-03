import React from 'react'
import Hero from '../assets/Hero.png'
import Arrow from '../assets/Arrow 4.png'

import "../App.css"
function HeroSection() {
  return (
    <div className="h-full w-full">
       
        <img src={Hero} alt="" className="h-[80vh] md:h-[100vh] w-full relative object-cover" />
        
        <div className=' flex flex-col absolute top-[20%] left-[20%] md:left-[10%] lg:left-[5%]  w-[50%] h-[40%] md:h-[50%] lg:h-[70%]'>
            <div className=" h-[80%] w-[70%] ml-7">
                <h1 className="italianno-regular text-[70px] md:text-[100px] lg:text-[142px] relative  text-[#A4CF25] ">Freshness</h1>
                <p className='gideon-roman-regular text-[50px] md:text-[60px] lg:text-[84px] absolute text-white top-[24%] md:top-[16%] lg:top-[20%] left-[50%] md:left-[15%] '>meets</p>
                <p className='gabarito text-[60px] md:text-[100px] lg:text-[100px] absolute  top:[15%] md:top-[25%] lg:top-[35%] text-white left-[8%] '>delight</p>
            </div>
            <button className=" p-3 px-10 w-[80%] md:w-[60%] lg:w-[40%] gabarito text-[16px] md:text-[20px] lg:text-[30px]   ml-[9%] border-[#F7F6BB] border-2  rounded-full text-[#F7F6BB] flex items-center gap-2 justify-center">Taste Now <img src={Arrow} alt="" /></button>

        </div>
      
    </div>
  )
}

export default HeroSection