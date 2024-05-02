import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border border-gray-400 border-t-0 text-[1.1vw]'>
        <div className='pt-12 ps-[20%] flex flex-col gap-5'>
            <NavLink to='/' className='flex gap-3 border border-gray-400 p-2 font-medium border-r-0  items-center '>
                <img className='' src={assets.add_icon} alt="" />
                <p className='hidden sm:block'>Add items</p>
            </NavLink>
            <NavLink to='/list' className='flex gap-3 border border-gray-400 p-2 font-medium border-r-0  items-center'>
                <img src={assets.order_icon} alt="" />
                <p className='hidden sm:block'>List items</p>
            </NavLink>
            <NavLink to='/orders' className='flex gap-3 border border-gray-400 p-2 font-medium border-r-0  items-center'>
                <img src={assets.order_icon} alt="" />
                <p className='hidden sm:block'>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar