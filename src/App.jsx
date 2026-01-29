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
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 px-15 pt-10 pb-5"> 
      <div className='lg:col-span-4'> 
        <img 
              src= {avata}
              alt="avata " 
              className='object-cover rounded-t-full border-2 border-amber-400 h-150 '
          />
      </div>
      <div className='lg:col-span-8 pt-3'>  
        <Name />
        <div className='text-4xl mt-5 flex flex-row-reverse font-bold '>Fresher Frontend Developer</div>
        <p className='text-2xl mt-4 indent-8'>
          Fresher Frontend Developer with a solid foundation in HTML, CSS, JavaScript, and ReactJS. I focus on building clean, responsive user interfaces and writing maintainable code through real project tasks. Starting from Frontend, my long-term goal is to grow into a Fullstack Developer by gradually expanding my backend knowledge while continuing to contribute reliably as a Frontend developer.
        </p> 
        <div className='mt-4'>
          <Contact />
        </div> 
        <div className='mt-1 pl-0 p-4 flex flex-wrap gap-1'>
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

    <div className="flex items-center justify-center my-10">
      <span className="w-20 h-px bg-gray-300"></span>
      <div className="mx-4 flex items-center justify-center w-10 h-10 
                      rounded-full border border-gray-300 
                      text-[var(--accent-dark)]">
        💼
      </div>
      <span className="w-20 h-px bg-gray-300"></span>
    </div>

    <div className='px-15 py-5'>
      <Experinece/>
    </div>

    <div className="bg-(--secondary) mt-5 px-15 pt-4 pb-5 "> 
      <Project/>
    </div>

  </>
}
export default App
