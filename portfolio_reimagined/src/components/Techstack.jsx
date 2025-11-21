import React from 'react'

const Techstack = () => {

  const skillsData = [
  {
    category: "Frontend",
    icon: "💻",
    technologies: ["React", "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: "⚙️", 
    technologies: ["FastAPI", "PHP", "MySQL", "Node.js", "Python", "MongoDB"]
  },
  {
    category: "Mobile",
    icon: "📱",
    technologies: ["Flutter", "Dart", "React Native"]
  }
];


  return (
    <div className='flex flex-col items-center my-20'>
      <h1 className='text-white font-bold text-4xl line-2 mt-12'>My Tech Stack</h1>
      <p className='text-gray-400 my-6'>A showcase of the tools and technologies I use to build modern, efficient and scalable applications.</p>

      <div className='flex flex-wrap justify-center items-stretch gap-6 px-4 my-20'>
  {skillsData.map((skillCategory) => (
    <div 
      key={skillCategory.category}
      className="flex flex-col w-80 bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-all duration-300 hover:shadow-lg"
    >
      {/* Header with Icon */}
      <div className="flex items-center mb-6 pb-3 border-b border-gray-600">
        <span className="text-2xl mr-3">{skillCategory.icon}</span>
        <p className='text-white font-bold text-2xl'>{skillCategory.category}</p>
      </div>
      
      {/* Technologies Grid */}
      <div className="flex-grow grid grid-cols-2 gap-3 mb-4">
        {skillCategory.technologies.map((tech) => (
          <div 
            key={tech}
            className="bg-gray-600 rounded-lg p-3 text-center hover:bg-gray-500 transition-colors group"
          >
            <p className='text-white font-semibold group-hover:text-blue-300 transition-colors'>
              {tech}
            </p>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

    </div>
  )
}

export default Techstack