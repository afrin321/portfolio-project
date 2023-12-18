import React from 'react'
import Me from './../assets/images/me.jpg'
import About from './About'
import Project from './Project'
import Background from './Background'


function Home() {
  return (
    <div className='w-full h-screen relative'>
        <div className='w-full relative flex flex-col lg:flex-row items-center'>
          <img src={Me} className='pointer-events-none mx-4 my-2 w-[25%] lg:w-[15%] rounded-full' alt='Me' title='Me, ' />
          <div className='flex flex-col lg:justify-start lg:items-start text-left'>
            <h1 className="text-3xl font-bold text-center mt-8">Afrin Haque</h1>
            <h2 className='whitespace-nowrap text-center lg:text-left'>Software Engineer, Web Developer</h2>
            <h4 className='text-sm font-sans text-blue-500 text-center lg:text-left'>Security Enthusiast</h4>
          </div>
          <div className='flex flex-grow lg:justify-end mx-2 h-40 relative lg:top-0 lg:items-end py-3 '>
            <button className='px-2 lg:px-4 bg-[#52805f] py-2 lg:py-3 outline-none border-none text-sm lg:text-md text-white rounded h-fit z-20 whitespace-nowrap'>Download Resume</button>
          </div>
        </div> 
        <div className='w-full h-1 lg:h-3 bg-black relative bottom-[65px] opacity-5'>
          
        </div>
        <div className='relative bottom-[45px] w-full flex justify-around align-baseline items-center px-[5%] lg:px-[20%] '>
          <span className='hover:text-blue-500'>About</span>
          <span className='hover:text-blue-500'>Projects</span>
          <span className='hover:text-blue-500'>Background</span>
          <span className='hover:text-blue-500'>Blog</span>
          <span className='hover:text-blue-500'>Contact</span>
        </div>
        <About/>
        <Project/>
        <Background/>
        
    </div>
  )
}

export default Home