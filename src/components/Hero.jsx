import React from 'react'
import Img1 from './../assets/images/my.jpg'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Bubbles from './../assets/images/bubbles.png'

function Hero() {
    
  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ['start start', 'end start']

  })

  const displayNav = useTransform(scrollYProgress, [0, 1], ['100%', '0%'])


  return (
    <div ref={targetRef} className='bubbles-bg relative w-full h-[200vh]'>      
      <div className=' sticky top-0 left-0 h-screen overflow-hidden flex flex-col items-center font-mono text-md'>
        <nav style={{opacity: displayNav}} className='fixed top-0 w-full lg:w-[40%] py-2 flex flex-col items-center text-white'> 
          <div className='w-full py-2 flex flex-col sm:flex-row sm:justify-around align-middle items-center text-white'>
            <span className='drop-shadow-2xl	'>What I've Built</span>
            <span className='drop-shadow-2xl	'>About Me</span>
            <span className='drop-shadow-2xl	'>Got A Project?</span>
          </div>
        </nav>
        
        <div className='h-full flex flex-col justify-center items-center'>
          <img src={Img1} className='rounded-full object-left object-scale-down w-[120px] h-auto hover:w-[180px] sticky top-2' />      
          <span className='text-lg sm:text-3xl text-white font-mono font-bold my-3 mx-4 text-center'>🎧 Software Engineer 💻</span>          
          <span className='header-text text-white font-mono text-lg sm:text-3xl my-3 mx-5'>🙋🏻‍♀️ Afrin Haque 🌺</span>
          
          <span className='text-orange-300 font-mono text-lg sm:text-xl my-3 mx-5 text-center'>✨ 2+ Years Full Stack Engineering Experience ✨</span>      
          <span className='ts-blue text-lg sm:text-xl text-blue-300 font-mono font-bold my-3 mx-4 text-center'>Web Dev <b className='text-white'>+</b> Infrastructure <b className='text-white'>+</b> Security</span>
        </div>
        
      </div>

    </div>
  )
}

export default Hero