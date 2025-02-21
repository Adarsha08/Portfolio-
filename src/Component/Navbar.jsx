import React from 'react'
import { NavLink } from 'react-router-dom';
import home from '../assets/home3.png'
import address from '../assets/address-book.png'
import experience from '../assets/brand-redhat.png'
import portfolio from '../assets/file-cv.png'
import lay from '../assets/layout-2.png'



const Navbar = () => {
  return (
    <div className="bg-black h-full w-50 flex flex-col shadow-lg shadow-blue-500/50  text-white font-bold  font-mono max-md:w-40 max-sm:flex-row max-sm:w-full max-sm:h-[68px] max-sm:items-center max-sm:justify-center max-sm:fixed max-sm:bottom-0" >

      <div className="flex justify-center items-center mt-8 mb-8 text-white font-bold text-2xl max-sm:hidden  ">Adarsha</div>

      <div className="flex flex-col items-center  justify-centre  max-sm:w-full " >
        <ul className="w-50 items-center flex flex-col justify-center max-sm:justify-evenly max-sm:w-full max-sm:flex-row " >
          <NavLink to="/" className=" flex flex-row items-center rounded-xl p-2  mt-5 w-45 h-12 mb-2 max-md:ml-3  hover:bg-[#0f0f0f] max-sm:w-10 max-sm:ml-0 ">
            <img className="h-8  mr-2 " src={home} />
            <p className="flex justify-center items-center  text-[16px] max-sm:hidden " >Home</p>
          </NavLink>
          <NavLink to="/about" className=" flex flex-row items-center rounded-xl p-2  mt-5 w-45 h-12 mb-2  max-md:ml-3   hover:bg-[#0f0f0f]  max-sm:w-10   ">
          <img className="h-8 mr-2" src={lay} />
            <p  className="flex justify-center items-center text-[16px] max-sm:hidden ">About</p>
          </NavLink>
          <NavLink to="/experience"className=" flex flex-row items-center rounded-xl p-2  mt-5 w-45 h-12 mb-2  max-md:ml-3  hover:bg-[#0f0f0f] max-sm:w-10  ">
          <img className="h-8 mr-2" src={experience} />
            <p className="flex justify-center items-center text-[16px] max-sm:hidden">Experience</p>
          </NavLink>
          <NavLink to="/portfolio" className=" flex flex-row items-center rounded-xl p-2  mt-5 w-45 h-12 mb-2 max-md:ml-3   hover:bg-[#0f0f0f] max-sm:w-10   ">
          <img className="h-8 mr-2" src={portfolio} />
            <p className="flex justify-center items-center text-[16px] max-sm:hidden">Portfolio</p>
          </NavLink>
          <NavLink to="/contact" className=" flex flex-row items-center rounded-xl p-2  mt-5 w-45 h-12 mb-2  max-md:ml-3  hover:bg-[#0f0f0f] max-sm:w-10   ">
          <img className="h-8 mr-2" src={address} />
            <p className="flex justify-center items-center text-[16px] max-sm:hidden">Contact</p>
          </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Navbar