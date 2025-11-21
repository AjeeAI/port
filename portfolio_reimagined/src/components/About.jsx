import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3, 
  FaPython, 
  FaDatabase, 
  FaFire, 
  FaPhp, 
  FaGit 
} from 'react-icons/fa';
import { SiFlutter, SiDart, SiFastapi } from 'react-icons/si';

import React from 'react'

const About = () => {
    const skills = [
  { name: "Flutter", icon: <SiFlutter size={40} color='white'/> },
  { name: "Dart", icon: <SiDart size={40} color='white'/> },
  { name: "React", icon: <FaReact size={40} color='white'/> },
  { name: "Javascript", icon: <FaJs size={40} color='white'/> },
  { name: "HTML", icon: <FaHtml5 size={40} color='white'/> },
  { name: "CSS", icon: <FaCss3 size={40} color='white'/> },
  { name: "FastAPI", icon: <SiFastapi size={40} color='white'/> },
  { name: "Python", icon: <FaPython size={40} color='white'/> },
  { name: "MySQL", icon: <FaDatabase size={40} color='white'/> },
  { name: "Firebase", icon: <FaFire size={40} color='white'/> },
  { name: "PHP", icon: <FaPhp size={40} color='white'/> },
  { name: "Git", icon: <FaGit size={40} color='white'/> } 
];
  return (
    <div className='w-[60%] flex flex-col'>
        <div className='flex justify-start items-center mt-10 w-full gap-20'>
            <div>
                <img 
                src='src\\assets\\avatar2.jpg'
                alt='Profile Image'
                
                className='rounded-full h-50 w-50 object-cover'
                />
                
            </div>

            <div className='w-[70%] flex flex-col justify-start items-start text-left'>
                <h1 className='text-white text-3xl font-bold'>
                    About me
                </h1>
                <p className='text-white font-md'>
                    Hi! I am Ajijolaoluwa Adesoji, a fullstack developer passionate about building efficient, scalable applcaitions. With deep experience in mobile development with Flutter, dynamic frontends with react, and robust backend systems with fastapi, I thrive on creating seamless user experiences from concept to deployment.
                </p>
                <button className='w-30 h-10 text-white bg-green-400 rounded-xl font-bold mt-10'>
                Contact Me
        </button>
            </div>
        </div>
        
        <div className='flex flex-col justify-center items-center mt-15'>
            <h2 className='text-white font-bold text-2xl'>
                My Tech Stack
            </h2>

            <div className='flex flex-wrap w-full justify-center gap-6 p-6'>
                {skills.map((skill) => (
                    <div 
                    key={skill.name} 
                    className='flex flex-col w-40 h-40 justify-center items-center gap-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105'
                    >
                    <div className='text-white text-5xl'>
                        {skill.icon}
                    </div>
                    <p className='text-white font-medium text-center'>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default About