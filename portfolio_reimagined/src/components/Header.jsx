import React from 'react'
import { PiDiamondFill } from "react-icons/pi";

const Header = () => {
  return (
    <div className='my-5 w-[60%] h-10 flex justify-between items-center bg-gradient-custom  px-15 py-8 rounded-md shadow-xl sticky top-0 z-10'>
        <div className='flex gap-5'>
            <PiDiamondFill size={30} color='orange' className='bg-gray-100'/>
            <p className='text-white font-bold text-xl'>
                Ajee
            </p>
        </div>

        <div className='flex gap-5'>
             <button className='text-white text-md'>
                Home
            </button>
            <button className='text-white text-md'>
                Projects
            </button>

            <button className='text-white text-md'>
                About
            </button>

            <button className='text-white text-md'>
                Contact
            </button>
        </div>
    </div>
  )
}

export default Header