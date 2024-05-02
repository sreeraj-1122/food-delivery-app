import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div id='app-download' className='flext flex-col items-center font-semibold mt-16 sm:mt-20 text-basic md:text-4xl text-center'   >
        <p>For Better Experience Download <br />Tomato App</p>
        <div className='flex justify-center gap-5 mt-9'>
            <img className='w-28  sm:w-40  duration-700 cursor-pointer hover:scale-105	' src={assets.play_store} alt="" />
            <img className='w-28  sm:w-40  duration-700 cursor-pointer hover:scale-105	' src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload