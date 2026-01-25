import { useEffect, useState } from 'react'
import './App.css'
import Name from './components/name.jsx'
import Contact from './components/contact.jsx';
import Education from './components/education.jsx';
import Certificate from './components/certificate.jsx';
import Experinece from './components/experience.jsx';
import Project from './components/project.jsx';

function App() {
  const skills = ["VB.NET","C#","Python (basic)","HTML","CSS","JavaScript","ReactJS","Bootstrap","TailwindCSS","SQL Server","Oracle Database"];
  const colors = ["#F5004F","#00F7FF","#08CB00","#FF0B55","#FFAAB8","#15F5BA","#FFA3FD"
                ,"#FF6868","#00FF9C","#FF0087","#B6F500","#FF0060","#08CB00"
               ];
  return <>
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 px-15 pt-15 pb-5"> 
      <div className='lg:col-span-4 '> 
        <h5>sdsd</h5>
      </div>
      <div className='lg:col-span-8'>  
        <Name />
        <div className='text-4xl mt-5 flex flex-row-reverse font-bold '>Frontend Engineer</div>
        <p className='text-2xl mt-4 indent-8'>
          A WinForms Developer with over one year of experience, recognized for adaptability, eagerness to learn, and continuous self-improvement. I am seeking new challenges as a Software Developer, starting in a Fresher Frontend position to build a solid foundation and develop into a Full Stack Developer within three years.
        </p> 
        <div className='mt-5'>
          <Contact />
        </div> 
        <div className='mt-2 pl-0 p-4 grid grid-cols-6 w-fit'>
            {skills.map((skill,index)=>(
              <span key={index} className='rounded-full m-2 px-1 py-1 flex justify-center items-center' style={{border:`2px solid ${colors[index]}`}}>{skill}</span>
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
