import React from 'react'
import dash from "/src/assets/dash_img.png"
import mols_img from "/src/assets/mols_auth.png"
const Projects = () => {

  const projects = [
  {
    "name": "React Admin Dashboard",
    "details": "A complex data visualization and management tool for business analytics.",
    "stack": ["React", "Chart.js", "Tailwind"],
    "thumbnail": dash,
    "live_link": "https://your-live-dashboard-link.com",
    "github_link": "https://github.com/yourusername/react-admin-dashboard"
  },
  {
    "name": "E-commerce Mobile App",
    "details": "A mobile shopping platform with integrated product browsing, cart, and checkout features.",
    "stack": ["Flutter", "PHP", "MySQL"],
    "thumbnail": dash,
    "live_link": "https://your-ecommerce-live-link.com",
    "github_link": "https://github.com/yourusername/ecommerce-mobile-app"
  },
  {
    "name": "Krazy Kitchen Katerers Website",
    "details": "A responsive catering website with order management and gallery features.",
    "stack": ["Flutter", "PHP", "MySQL"],
    "thumbnail": dash,
    "live_link": "https://krazykitchen-live-link.com",
    "github_link": "https://github.com/yourusername/krazy-kitchen-website"
  },
  {
    "name": "Hybrid Form Application",
    "details": "A form capturing app that integrates phone number, GPS, photo, and microphone input with API backend.",
    "stack": ["Flutter", "PHP", "MySQL", "API Integration"],
    "thumbnail": dash,
    "live_link": "https://your-hybrid-form-live-link.com",
    "github_link": "https://github.com/yourusername/hybrid-form-app"
  },
  {
    "name": "Blog Management System",
    "details": "A blog platform with database integration supporting special characters and structured content storage.",
    "stack": ["Flutter", "PHP", "MySQL"],
    "thumbnail": dash,
    "live_link": "https://your-blog-live-link.com",
    "github_link": "https://github.com/yourusername/blog-management-system"
  },
  {
    "name": "OTP Generation & Authentication System",
    "details": "Generates one-time passwords with advanced randomness assessment, supporting multi-authentication schemes.",
    "stack": ["Python", "MOLS", "RBIBD"],
    "thumbnail": mols_img,
    "live_link": "https://your-otp-system-live-link.com",
    "github_link": "https://github.com/yourusername/otp-auth-system"
  },
  {
    "name": "IoT Multi-Authentication Project",
    "details": "A research-driven application using Mutually Orthogonal Latin Squares (MOLS) for IoT device authentication.",
    "stack": ["Python", "MOLS", "RBIBD", "IoT Security"],
    "thumbnail": mols_img,
    "live_link": "https://your-iot-auth-live-link.com",
    "github_link": "https://github.com/yourusername/iot-multi-authentication"
  },
  {
    "name": "FastAPI Admin Login System",
    "details": "Backend system for secure admin login with environment-based password management.",
    "stack": ["Python", "FastAPI", "SQLAlchemy", "dotenv"],
    "thumbnail": dash,
    "live_link": "https://your-fastapi-login-live-link.com",
    "github_link": "https://github.com/yourusername/fastapi-admin-login"
  }
]

  
  return (
    <div className='mt-10 flex flex-col justify-between items-center'>
        <h1 className='text-white font-bold text-2xl'>Selected Projects</h1>

        <p className='text-white font-md my-3'>Here is a selection of my recent Projects. Click on the links for a live preview or github code.</p>

        <div className='flex w-full flex-wrap justify-center items-center'>
  {projects.map((project) => (
    <div 
      key={project.name} 
      className="flex flex-col w-full max-w-80 h-[28rem] justify-start items-center bg-gray-800 shadow-md rounded-lg m-4 hover:shadow-lg hover:scale-105 transition-all duration-300"
    >
      {/* Image Section */}
      <div className="w-full h-48 mb-4 overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.name} 
          className="w-full h-full object-cover rounded-t-lg" 
        />
      </div>

            {/* Content Section */}
            <div className='flex flex-col justify-between items-center px-4 text-center flex-grow pb-4 w-full'>
              <div className="w-full">
                <h3 className="text-lg font-bold text-white mb-2">{project.name}</h3>
                <p className="text-sm text-gray-300 mb-3 line-clamp-3">{project.details}</p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.stack.map((stackItem, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                    >
                      {stackItem}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-4 justify-center w-full mb-5">
                <a 
                  href={project.live_link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.name}`}
                  className="flex-1 max-w-32"
                >
                  <div className='w-full h-10 bg-purple-500 text-white rounded-lg flex justify-center items-center hover:bg-gray-100 transition-colors font-medium'>
                    Live Demo
                  </div>
                </a>
                <a 
                  href={project.github_link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`View GitHub repository for ${project.name}`}
                  className="flex-1 max-w-32"
                >
                  <div className='w-full h-10 bg-white rounded-lg flex justify-center items-center hover:bg-gray-100 transition-colors font-medium'>
                    GitHub
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className='text-white text-2xl font-bold mt-10'>Interested in collaborating?</p>
      <p className='text-white text-md mt-3'>Let's build something amazing together. Reach out to discuss your project.</p>

      <button className='bg-purple-800 w-30 h-8 rounded-lg my-4 text-white'>
        Get in Touch
      </button>
    </div>
  )
}

export default Projects