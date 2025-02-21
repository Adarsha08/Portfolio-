import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import tailwind from '../assets/ta.png'
import github from '../assets/github.png'


const Experience = () => {
  const code=[
    {
      id:1,
      img:html,
      title:"HTML",
      shadow: "shadow-[10px_10px_15px_rgba(255,165,0,0.75)]",
      
    },
    {
      id:2,
      img:css,
      title:"CSS",
      shadow: "shadow-[10px_10px_15px_rgba(0,191,255,0.75)]",
      
    },
    {
      id:3,
      img:js,
      title:"JavaScript",
      shadow: "shadow-[10px_10px_15px_rgba(255,223,0,0.75)]",
      
    },
    {
      id:4,
      img:react,
      title:"React",
      shadow: "shadow-[10px_10px_15px_rgba(0,216,255,0.75)]",
      
    },
    {
      id:5,
      img:tailwind,
      title:"Tailwind CSS",
      shadow: "shadow-[10px_10px_15px_rgba(59,130,246,0.75)]",
      
    }
    ,
    {
      id:6,
      img:github,
      title:"GitHub",
      shadow: "shadow-[10px_10px_20px_rgba(169,169,169,0.75)]",
    }
  ]
  return (
    <div className=" h-full flex flex-col text-white max-sm:items-center ">
      <div className="ml-10 mt-10  max-md:mt-2 max-sm:mb-4 max-sm:ml-0 " >
        <p className="text-3xl font-bold max-sm:text-2xl " >Experience</p>
        <p className="text-[16px] font-bold max-sm:text-[13px]  ">These are the technologies I've worked with,</p>
      </div>
      <div className="mt-20 ml-10  grid grid-cols-3 max-[1034px]:grid-cols-2 max-md:mt-3 max-sm:ml-2 max-sm:mt-4 " >
        {code.map(({ id, img, title,shadow }) => (
          <div className={`mb-15 w-60 h-35 flex flex-col cursor-pointer  justify-center items-center  rounded-lg ${shadow} hover:shadow-[5px_5px_15px_rgba(255,0,0,0.8)] transition-shadow duration-300 max-md:w-50 max-sm:w-35 max-sm:mr-6 max-[372px]:h-27 `}    key={id}>
            <img className="h-20 max-sm:h-18 " src={img} alt={title} />
            <p>{title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience