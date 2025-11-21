import React from 'react'
import { FaVoicemail } from 'react-icons/fa'
import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import MessageForm from './MessageForm'

const Contact = () => {
  return (
   <div className='flex flex-col items-center mt-20 gap-5 w-full'>
    <h1 className='text-white font-bold text-4xl'>Get in Touch</h1>
    <p className='text-white text-md max-w-150 text-center mb-10'>Feel free to reach out for collaborations, job opportunities or just to say hi. I am always open to discussing new projects and innovative ideas.</p>

    <div className='grid grid-cols-2 w-full m-10 px-10'>
        <div className='flex flex-col items-center gap-7 w-full mt-5'>
            <div className='flex justify-between items-center w-full max-w-md border border-purple-300 rounded-md px-4 py-2'>
                <div className='flex justify-start items-center gap-5'> 
                    <FaEnvelope size={30} color='white'/>
                    <p className='text-white'>ajeeaidev@gmail.com</p>
                </div>
                <button className='text-purple-300 hover:text-white px-3 py-1 rounded border border-purple-300 hover:bg-purple-300 hover:bg-opacity-20 transition-colors'>
                    Copy
                </button>
            </div>

            <p className='text-purple-300'>Find me on social media</p>

            <div className='flex justify-center gap-10'>
                        <div >
                            <a href='https://github.com/AjeeAI' >
                            <div className='flex flex-col gap-2 justify-center items-center'>
                                <FaGithub size={30} color='white' className='rounded-full hover:bg-gray-700'/>
                            <p className='text-white'>Github</p>
                            </div>
                            </a>
            
                        </div>
            
                        <div >
                            <a href='https://www.linkedin.com/in/ajeeflutterdev/' >
                            <div className='flex flex-col gap-2 justify-center items-center'>
                                <FaLinkedin size={30} color='white' className=' hover:bg-gray-700'/>
                            <p className='text-white'>LinkedIn</p>
                            </div>
                            </a>
            
                        </div>
            
                        <div >
                            <a href='https://x.com/ajeeaidev' >
                            <div className='flex flex-col gap-2 justify-center items-center'>
                                <FaXTwitter size={30} color='white' className=' hover:bg-gray-700'/>
                            <p className='text-white'>Twitter</p>
                            </div>
                            </a>
            
                        </div>
                    </div>
        </div>

        <div className='flex flex-col items-center gap-7 px-10'>
            <MessageForm/>
            {/* Add your second contact item here */}
        </div>
    </div>
</div>
  )
}

export default Contact