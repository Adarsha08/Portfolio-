import React from 'react'
import profle from '../assets/Profilepic.jpg'

const Home = () => {
  return (
    <>
    <div className=" h-full w-full text-indigo-500 flex justify-center items-center  " >
      <div className=" ml-3 mr-3   rounded-4xl w-full" >
        <div className="flex flex-row w-full md:flex-row justify-evenly max-[915px]:items-center max-[480px]:flex-col-reverse max-[480ox]:items-centre " >
          <div className="max-[480px]:justify-centre" >
          <h1 className="font-bold text-5xl mt-20 bg-gradient-to-r text-white drop-shadow-[0_3px_20px_rgba(59,130,246,0.75)] max-[1079px]:text-3xl max-[915px]:text-3xl max-[915px]:w-[250px] max-[480px]:text-2xl max-[480px]:mt-10 ">I am a Web Developer</h1>
          <p className="w-[450px]  mt-8 text-gray-600 max-[1079px]:w-[300px] max-[915px]:w-[200px] max-[915px]:text-[12px] " >As a dedicated web developer, I aim to transform complex ideas into dynamic, interactive websites that meet the needs of modern users.</p>
          <div>
          <button className="mt-10 mb-10 bg-gradient-to-r from-blue-400 to-blue-600 h-10 w-40 rounded-3xl cursor-pointer text-white font-semibold shadow-lg hover:shadow-[0_0_15px_rgba(255,0,0,0.8)] transition-shadow duration-300 max-[915px]:w-25 max-[915px]:h-6 max-[915px]:text-[12px] ">Download CV</button>

          </div>
          </div>
          <img className="h-100 w-100 rounded-[100%] max-[1079px]:h-80 max-[1079px]:w-80 max-[915px]:h-60 max-[915px]:w-60 max-[671px]:h-50 max-[671px]:w-50 " src={profle} />
        </div>
        
      </div>

      
    </div>
    
    

    </>
  )
}

export default Home