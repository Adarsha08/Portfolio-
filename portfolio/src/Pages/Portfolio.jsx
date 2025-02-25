import React from 'react'
import calculator from '../assets/calculator.webp'
import newsapi from '../assets/newsapi.png'
import stopwatch from '../assets/stopwatch.png'
import amazonclone from '../assets/amazon clone.png'
import country from '../assets/Country.jpg'
import htmljs from '../assets/htmljs.png'
import dictationary from '../assets/Dictionary.jpg'
import jokes from '../assets/jokes.jpg'
import sun from '../assets/sun.jpg'

const Portfolio = () => {
 
    
  const links=[
    {
      id:1,
      name:"Calculator",
      src:"https://github.com/Adarsha08/Calculator",
      image:calculator
    },
    {
      id:2,
      name:"NewsApi",
      src:"https://github.com/Adarsha08/News-Api-",
      image:newsapi
    },
    {
      id:3,
      name:"Stopwatch",
      src:"https://github.com/Adarsha08/Stopwatch",
      image:stopwatch
    },
    {
      id:4,
      name:"Amazon Clone",
      src:"https://github.com/Adarsha08/Amazon-Clone",
      image:amazonclone 
    },
    {
      id:5,
      name:"Country info",
      src:"https://github.com/Adarsha08/Country-info",
      image:country
    },
    {
      id:6,
      name:"More projects",
      src:"https://github.com/Adarsha08/Html-Css-Js-Projects",
      image:htmljs
    },
    {
      id:7,
      name:"Dictationary",
      src:"https://github.com/Adarsha08/Dictationary-app",
      image:dictationary
    },
    {
      id:8,
      name:"Random Jokes",
      src:"https://github.com/Adarsha08/Random-joke-generator",
      image:jokes
    },
    {
      id:9,
      name:"Solar system",
      src:"https://github.com/Adarsha08/Solor-system",
      image:sun
    },
  ]
  return (
    <div className="text-white ml-10 mb-10 " >
      <div className="mt-10  " >
        <h1 className="text-3xl font-bold" >Portfolio</h1>
        <p className="text-[15px]" >Check out some of my works</p>
      </div>

      <div className="mt-18 grid grid-cols-2 max-sm:mt-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full " >
      {links.map(({id,name,src,image})=>(
        <div key={id}  className="flex flex-col items-center mb-10  mr-20  bg-gray-800 cursor-pointer  p-2 rounded-lg w-30" >
        <a className=""  href={src} target="_blank" rel="noopener noreferrer">
        
        
          <img className="h-25 w-25" src={image} alt="hello" />
          <p>{name}</p>
          </a>
        </div>
        
        
      ))}
      
      </div>
      
    </div>
  )
}

export default Portfolio