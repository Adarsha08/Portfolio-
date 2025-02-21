import React from 'react'
import './index.css'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Experience from './Pages/Experience'
import Portfolio from './Pages/Portfolio'
import { Routes, Route, } from "react-router-dom";

function App() {
  return (
    <>
    <div className="flex h-screen flex-row  bg-gradient-to-b from-black to-gray-800 max-sm:bg-black " >
      <Navbar/>
      <div className="max-sm:h-full w-full max-sm:flex-grow overflow-scroll  " >
      
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          
       </Routes>
       </div>
    </div>
    </>
  )
}

export default App
