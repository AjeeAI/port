import React from 'react'
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';
const Hero = () => {
  return (
    <div className='flex w-full h-screen justify-center items-center bg-gradient-custom p-6 mx-6'>
       <div className='p-4'> 
        <p className='text-7xl text-white font-bold text-center'>Ajijolaoluwa Adesoji-Fullstack Developer</p>
        <p className='text-md text-white mt-5 text-center'>Building seamless web experiences across mobile and web</p>

        <div className='flex justify-center mt-10 gap-10'>
            <button className='border-2 w-40 h-12 bg-orange-500 text-black font-bold rounded-xl'>
                View Projects
            </button>

            <button className='border-2 border-white w-40 h-12 text-white rounded-xl font-bold'>
                Contact Me
            </button>
        </div>

        <div className='flex justify-center mt-10 gap-10'>
            <div >
                <a href='https://github.com/AjeeAI' target='_blank'>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <FaGithub size={30} color='white' className='rounded-full hover:bg-gray-700'/>
                <p className='text-white'>Github</p>
                </div>
                </a>

            </div>

            <div >
                <a href='https://www.linkedin.com/in/ajeeflutterdev/' target='_blank'>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <FaLinkedin size={30} color='white' className=' hover:bg-gray-700'/>
                <p className='text-white'>LinkedIn</p>
                </div>
                </a>

            </div>

            <div >
                <a href='https://x.com/ajeeaidev' target='_blank'>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <FaXTwitter size={30} color='white' className=' hover:bg-gray-700'/>
                <p className='text-white'>Twitter</p>
                </div>
                </a>

            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero