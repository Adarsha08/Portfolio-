import React from 'react'
import profle from '../assets/Profilepic.jpg'

const About = () => {
  return (
    <div className=" h-full" >
       
      <div className=" h-full " >
      
        <div className="flex flex-row items-centre max-[425px]:flex-col   ">
          <img className="h-55 w-55 mt-10 ml-10  rounded-[30%] max-[1079px]:h-80 max-[1079px]:w-80 max-[915px]:h-60 max-[915px]:w-60 max-[671px]:h-50 max-[671px]:w-50 max-[425px]:h-40 max-[425px]:w-40 " src={profle} />
          <p className=" mt-30 ml-10 h-10 font-bold text-3xl text-white max-[500px]:text-2xl max-[425px]:ml-10 max-sm:mb-4 max-[425px]:mt-1   " >Web Developer and Student</p>
          
        </div>
        <h1 className="text-3xl font-bold ml-10 mt-10  text-white max-[500px]:text-2xl max-[425px]:mt-2 " >About me: </h1>
        <div className="text-gray-400  " >
        <p className="ml-10 mr-10 pb-20 text-lg leading-relaxed max-[500px]:text-[15px]">
  <span className="block mb-4">
    Hi, I'm <span className="font-semibold">Adarsha Gautam</span>, a Computer Science and Information Technology (BSc. CSIT) student at Samriddhi College, expected to graduate in 2026.
  </span>
  
  <span className="block mb-4">
    I'm a passionate Frontend Developer dedicated to building sleek, modern, and responsive websites. My goal is to create visually appealing and user-friendly web experiences.
  </span>

  <span className="block mb-4">
    My expertise lies in <span className="font-semibold">React, JavaScript, HTML, and CSS</span>, with proficiency in <span className="font-semibold">Tailwind CSS</span> for crafting responsive, mobile-friendly designs. I enjoy merging creativity with technical skills to develop engaging digital experiences.
  </span>

  <span className="block mb-4">
    My journey into web development began with a fascination for design, which led me to explore frontend technologies. Over time, I have refined my skills through personal projects, collaborations, and continuous learning.
  </span>

  <span className="block mb-4">
    As a lifelong learner, I thrive on solving challenges and staying up to date with industry trends. While I enjoy collaborating with teams, I also love diving deep into code to bring innovative ideas to life.
  </span>

  <span className="block mb-4">
    Currently, I am focused on enhancing my knowledge of modern UI/UX design principles and exploring animation libraries to improve web interactivity. My aspiration is to work on projects that push creative boundaries and deliver impactful digital experiences.
  </span>
</p>




        </div>
      </div>
    </div>
  )
}

export default About