import { useState } from "react";
export const projects = [
    { 
    id: 1,
    title: "Floda - Web",
    year: "06/2022 - 11/2022",
    description:
        "Floda flower shop web management is a web application for managing flower sales, built using various full-stack technologies, including JavaScript, HTML, CSS, and C# (ASP.NET).",
    tech: ["JavaScript", "HTML", "CSS" ,"C#", "ASP.NET","Bootstrap","SQL Server"],
    youtubeId: "",
    github: "https://github.com/lylian01/Floda",
    demo: "",
    },
    {
    id: 2,
    title: "QLHocSinh - Winform app",
    year: "11/2022 - 02/2023",
    description:
      "QLHocSinh is a student management software (Student Information Management) developed using the C# language (WinForms) along with an SQL database – commonly created for Software Engineering / Object-Oriented Programming courses at university. This is a basic project but includes full CRUD functionalities (Create-Read-Update-Delete), helping you get familiar with the interaction between an application and a database.",
    tech: ["C#" , "WinForms","SQL Server"],
    youtubeId: "",
    github: "https://github.com/lylian01/QLHocSinh",
    demo: "",
    },
    {
    id: 3,
    title: "Jewels - Web",
    year: "12/2022 - 01/2023",
    description:
      "Jewels is a website/front-end project related to jewelry designed to showcase the interface or basic functionality of an online jewelry store. The project may include UI components to display products, responsive layouts, interactive effects, and a simulated product browsing experience.",
    tech: ["JavaScript", "HTML", "CSS" ,"C#", "ASP.NET","Bootstrap","SQL Server"],
    youtubeId: "gM2XKTRkVWE",
    github: "https://github.com/lylian01/Jewels",
    demo: "",
    },
    {
    id: 4,
    title: "FlashCard - Web",
    year: "11/2025 - 02/2026",
    description:
      "FlashCard is a web-based flashcard application built with ASP.NET Core MVC, offering learning and practice features in a question-and-answer card format. The project applies the MVC (Model-View-Controller) pattern and uses Bootstrap 5 to create an interactive, responsive, and attractive interface, along with a database that manages flashcard data using a code-first approach with SQL Server.",
    tech: ["JavaScript", "HTML", "CSS" ,"C#", "ASP.NET","Bootstrap","SQL Server"],
    youtubeId: "74ftGQHD7rg",
    github: "https://github.com/lylian01/FlashCard",
    demo: "",
    },
    {
    id: 5,
    title: "UpLoad Data FlashCard - Web",
    year: "01/2026 - 01/2026",
    description:
      "A web application that allows users to upload JSON flashcard files, read and parse data, synchronize data with MockAPI, delete remote data, and re-export updated data back to JSON files.",
    tech: ["React", "Fetch API", "TailwindCSS","MockApi"],
    youtubeId: "UnpmcwN3oSc",
    github: "https://github.com/lylian01/uploadDataFlashCard",
    demo: "",
    },
    {
    id: 6,
    title: "QUIZ WEB - Web",
    year: "01/2026 - 01/2026",
    description:
      "Developed a quiz application that generates questions from flashcards, supports multiple question types, timer, score calculation, result storage, and leaderboard display. Integrated MockAPI and React Query for data fetching and state management.",
    tech: ["React", "Vite", "TailwindCSS","Axios"],
    youtubeId: "cE2lFkc418A",
    github: "https://github.com/lylian01/quiz-app",
    demo: "https://quiz-app-nu-ashen.vercel.app/",
    },
];

export default function Project (){
    const [activeProject, setActiveProject] = useState(projects[5]);
    const colors = ["#F5004F","#00F7FF","#08CB00","#FF0B55","#15F5BA","#FE6244","#FF6868","#00FF9C","#FF0087","#B6F500","#FF0060","#00F5FF"];

    return <>
    <div className="grid grid-cols-1 lg:grid-cols-8 gap-2 relative">
        <div className='lg:col-span-2 pt-6 '>
            <p className='font-bold text-4xl text-white mb-3'>Project</p>
            <div className="sticky top-3">
            {projects.sort((a,b)=>b.id-a.id).map((project)=>(
                <button key={project.id}
                    onClick={() => setActiveProject(project)}
                    className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 mb-1
                    ${
                    activeProject.id === project.id
                    ? "bg-white text-black shadow-lg"
                    : " hover:bg-white/70"
                    }`}
                >
                <p className="font-semibold text-lg"> {project.title} </p>
                </button>
            ))}
            </div>
        </div>
        <div className="lg:col-span-6 bg-white rounded-lg ms-4">
            <div className="p-2">
                {activeProject.youtubeId && (
                <div className="relative w-full aspect-video">
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${activeProject.youtubeId}`}
                    title={activeProject.title}
                    frameBorder="0"
                    loading="lazy"
                    allowFullScreen
                />
                </div>
                )}
            </div>

            <div className="px-6 py-4 ">
                <div className=" mb-2 grid grid-cols-1 lg:grid-cols-8">
                <h3 className="text-2xl font-bold lg:col-span-6">
                    {activeProject.title}
                </h3>
                <span className="text-xl lg:col-span-2 text-end">
                    ({activeProject.year})
                </span>
                </div>
            
              <p className="text-gray-700 mb-6 leading-relaxed">
                {activeProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {activeProject.tech.map((item, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 text-sm  rounded-full`}
                    style={{border:`2px solid ${colors[index]}`}}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-6">
                {activeProject.demo && (
                  <a
                    href={activeProject.demo}
                    target="_blank"
                    className="px-6 py-3 bg-black text-white rounded-full"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={activeProject.github}
                  target="_blank"
                  className="px-6 py-3 border border-black rounded-full"
                >
                  GitHub
                </a>
              </div>
            </div>

        </div>

    </div>
    </>
}