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
        <div className="text-gray-400" >
        <p className="ml-10 text-lg leading-relaxed max-[500px]:text-[15px]  ">
  <span className="block mb-4">
    Hi, I'm <span className="font-semibold">Adarsha Gautam</span>, currently studying at Samriddhi College, where I'm pursuing a Bachelor's degree in Computer Science and Information Technology (Bsc.Csit) with an expected graduation in 2026.
  </span>
  
  <span className="block mb-4">
    I am a passionate Frontend Developer with a love for creating sleek, modern, and responsive websites. My mission is to craft visually appealing, user-centric web experiences.
  </span>

  <span className="block mb-4">
    I specialize in <span className="font-semibold">React, JavaScript, HTML, and CSS</span>, and I'm proficient in <span className="font-semibold">Tailwind CSS</span> for building responsive, mobile-friendly websites. I enjoy combining technical skills with creativity to design digital experiences that leave lasting impressions.
  </span>

  <span className="block mb-4">
    My journey started with a curiosity for web design, which led me to explore front-end development. Over time, I honed my skills by working on personal projects, collaborating with peers, and continuously learning modern web technologies.
  </span>

  <span className="block mb-4">
    I'm a lifelong learner who loves solving challenges and staying on top of industry trends. I thrive in collaborative environments, but I also enjoy deep-diving into code to build out new ideas.
  </span>

  <span className="block mb-4">
    I'm currently focused on deepening my knowledge of modern UI/UX design principles and exploring animation libraries to enhance web interactivity. My goal is to work on projects that push creative boundaries and bring fresh ideas to life.
  </span>
</p>



        </div>
      </div>
    </div>
  )
}

export default About