import React from 'react'
import "../App.css"
import Group from "../assets/Group.png"

function Highlights() {
  return (
    <div className="w-full gabarito  py-10 bg-white flex flex-col justify-center items-center">
        <div className='w-[90%]   flex gap-16 flex-col  justify-center items-center'>
          <h1 className='font-bold text-[32px] md:text-[42px]'>Nutritional Highlights</h1>
          <div className='flex flex-col md:flex-row justify-between items-center gap-8 md:gap-14'>
              <div className="font-bold text-[16px] md:text-[24px] px-4 md:px-10 py-2 bg-[#A4CF25] rounded-3xl">30 Calories</div>
              <div className="font-bold text-[16px] md:text-[24px] px-4 md:px-10 py-2 bg-[#A4CF25] rounded-3xl">2g Net Carbs</div>
              <div className="font-bold text-[16px] md:text-[24px] px-4 md:px-10 py-2 bg-[#A4CF25] rounded-3xl">Low Carb</div>
              <div className="font-bold text-[16px] md:text-[24px] px-4 md:px-10 py-2 bg-[#A4CF25] rounded-3xl">cRc & OK Kosher Certified</div>

          </div>
          <div>
          <img src={Group} alt="" />
          </div>
      </div>
    </div>

  )
}

export default Highlights