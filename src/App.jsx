import { useEffect, useState } from 'react'
import './App.css'
import Name from './components/name.jsx'
import Contact from './components/contact.jsx';
import Education from './components/education.jsx';
import Certificate from './components/certificate.jsx';
import Experinece from './components/experience.jsx';
import Project from './components/project.jsx';
import avata from './img/avata.jpg';

function App() {
  const skills = ["VB.NET","C#","Python (basic)","HTML","CSS","JavaScript","ReactJS","Bootstrap","TailwindCSS","SQL Server","Oracle Database"];
  const colors = ["#F5004F","#00F7FF","#08CB00","#FF0B55","#FFAAB8","#15F5BA","#FFA3FD"
                ,"#FF6868","#00FF9C","#FF0087","#B6F500","#FF0060","#08CB00"
               ];
  return <>
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 px-15 pt-10 pb-4"> 
      <div className='mr-3 lg:col-span-4 '> 
        <img 
              src= {avata}
              alt="avata " 
              className='object-cover rounded-t-full border-2 border-amber-400 h-150 '
          />
      </div>
      <div className='lg:col-span-8 pt-3 '>  
        <Name />
        <div className='text-4xl mt-5 flex flex-row-reverse font-bold '>Full Stack Developer(.Net + React)</div>
        <p className='text-xl mt-3 indent-8'>
          I started my journey as a .NET Developer working on real-world projects in an outsourcing environment, where I gained experience with C#, ASP.NET MVC, SQL Server, Oracle. This helped me understand not only how to build systems, but also how to maintain and improve them in real business scenarios.
          With a strong interest in building complete applications, I am currently focusing on becoming a Fullstack Developer by learning ReactJS and improving my frontend development skills, alongside enhancing my English and Japanese communication.
          I enjoy solving problems, building useful applications, and continuously learning new technologies. I believe consistency and adaptability are my biggest strengths.
          In the next few years, my goal is to become a Fullstack .NET & React Developer who can independently develop and deliver end-to-end products.
        </p> 
        <div className='mt-3'>
          <Contact />
        </div> 
        <div className=' pl-0 p-4 flex flex-wrap gap-1'>
            {skills.map((skill,index)=>(
              <span key={index} className='rounded-full m-2 px-4 py-1 flex justify-center items-center' style={{border:`2px solid ${colors[index]}`}}>{skill}</span>
            ))}
        </div>
      </div>
    </div>
    
    <div className='bg-(--secondary) px-15 pt-10 pb-5 text-white'>
      <Education/>
    </div>

    <div className='px-15 py-5'>
      <Certificate />
    </div>

    <div className="flex items-center justify-center my-5">
      <span className="w-20 h-px bg-gray-300"></span>
      <div className="mx-4 flex items-center justify-center w-10 h-10 
                      rounded-full border border-gray-300 
                      text-[var(--accent-dark)]">
        💼
      </div>
      <span className="w-20 h-px bg-gray-300"></span>
    </div>

    <div className='px-10 py-5'>
      <Experinece/>
    </div>

    <div className="bg-(--secondary) mt-5 px-15 pt-4 pb-5 "> 
      <Project/>
    </div>

  </>
}
export default App
