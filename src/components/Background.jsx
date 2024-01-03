import React from 'react'
import { motion } from 'framer-motion';

function Background() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
  };
  return (
    <motion.div
      id='background'
      className='flex flex-col justify-center gap-3 px-[5%] lg:px-[5%] my-10  lg:h-screen'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <b className='text-2xl font-semibold mb-4'>BACKGROUND</b>
      <motion.div
        className='flex flex-col lg:flex-row mt-4 gap-5 justify-between px-[5%] lg:p-auto w-full'
        variants={contentVariants}
        initial='hidden'
        animate='visible'
      >
        <div className='flex flex-col gap-2 '>
          <span className='font-semibold text-3xl'>Work</span><br />
          <div className='grid row-span-3 lg:grid-cols-3 gap-4'>
          <div className='flex flex-col'>
                <span className='font-bold'>Fullstack Engineer</span>
                <p className='text-blue-500'>Workspacify, Germany</p>
                <p className='text-lg font-light'>What I worked on</p>
                <ul>
                  <li>
                    <i>Social Network Admin Portal</i>
                  </li>
                  <li>
                    <i>Social Network Backend</i>
                  </li>
                </ul>
              </div>
              <div className='flex flex-col'>
                <span className='font-bold'>Junior Software Engineer</span>
                <p className='text-blue-500'>TigerIT Bangladesh</p>
                <p className='text-lg font-light'>What I worked on</p>
                <ul>
                  <li>
                    <i>Enterprise Application Portal</i>
                  </li>
                  <li>
                    <i>Government Application UI</i>
                  </li>
                </ul>
              </div>
              <div className='flex flex-col'>
                <span className='font-bold'>Frontend Engineer</span>
                <p className='text-blue-500'>Plus Marketing, Mexico</p>
                <p className='text-lg font-light'>What I worked on</p>
                <ul>
                  <li>
                    <i>ICS Component Building</i>
                  </li>
                  <li>
                    <i>API Integration & Interactivity</i>
                  </li>
                </ul>
              </div>
          </div>
        </div>

        <div>
          <span className='font-semibold text-3xl'>Education</span><br />
          <i className='text-blue-500'>Always loved solving logical problems.</i>
          <p className="mt-2 font-light">BSc. Computer Science & Software Engineering</p>
          <p>2017 - 2021 <i>@ AIUB</i></p>
          <p className="mt-2 font-light">Diploma in Cloud Cyber Security</p>
          <p>2023 </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Background