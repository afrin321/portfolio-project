import React from 'react'
import pro1 from './../assets/images/pro1.png'
import pro2 from './../assets/images/pro2.png'
import pro3 from './../assets/images/pro3.png'
import { motion } from 'framer-motion';

function Project() {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };
    
      const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
      };
  return (
    <motion.div
      id='projects'
      className='flex flex-col justify-center gap-6 px-[5%] lg:px-[5%] my-10 lg:h-screen'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <b className='text-2xl font-semibold mb-4'>PROJECTS</b>

      <motion.div
        className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 py-3'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.div
          className='rounded border'
          variants={cardVariants}
          initial='hidden'
          animate='visible'
        >
          
            <img src={pro1} className='mb-5 xl:w-full xl:h-full xl:object-scale-down' alt='Project 1' />
            <h3 className='my-2 font-semibold font-sans text-2xl'>3legant E-Commerce</h3>
            <span>Spring Boot Microservice architecture Single vendor e-comm and React Frontend.</span>
    
        </motion.div>

        <motion.div
          className='rounded border'
          variants={cardVariants}
          initial='hidden'
          animate='visible'
        >
            <img src={pro2} className='lg:h-[192px] xl:w-full xl:h-full object-fill mb-5 xl:object-scale-down' alt='Project 2' />
            <h3 className='my-2 font-semibold font-sans text-2xl'>Contact Flo</h3>
            <span>Contact Form Submission API Service using Spring Boot Monolith</span>
        </motion.div>

        <motion.div
          className='rounded border'
          variants={cardVariants}
          initial='hidden'
          animate='visible'
        >
            <img src={pro3} className='lg:h-[192px] object-fill mb-5 xl:w-full xl:h-full xl:object-scale-down' alt='Project 3' />
            <h3 className='my-2 font-semibold font-sans text-2xl'>Koala Trimmers</h3>
            <span><i style={{ color: '#ff6600' }}>Paid project</i> - Frontend Development with HTML, CSS, JS.</span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Project