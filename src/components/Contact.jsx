import React from 'react'
import { motion } from 'framer-motion';
function Contact() {
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
      id='contact'
      className='flex flex-col justify-center gap-3 px-[5%] lg:px-[5%] my-10 lg:h-screen'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <b className='text-2xl font-semibold mb-4'>CONTACT</b>

      <motion.div
        className='flex flex-col lg:flex-row gap-10'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.div
          className='w-full lg:w-[50%] py-4 rounded-xl flex flex-col gap-10'
          variants={contentVariants}
          initial='hidden'
          animate='visible'
        >
          <p className='flex gap-14'>
            <label className='text-lg font-sans font-semibold'>Name</label>
            <input placeholder={`Your Name`} type='text' className='w-full p-1 outline-none border-b-[1px] focus:b-b-[1px] focus:border-pink-500' />
          </p>
          <p className='flex gap-14'>
            <label className='text-lg font-sans font-semibold'>Email</label>
            <input placeholder={`Your Email`} type='text' className='w-full p-1 outline-none border-b-[1px] focus:b-b-[1px] focus:border-pink-500' />
          </p>
          <p className='flex gap-10'>
            <label className='text-lg font-sans font-semibold'>Subject</label>
            <input placeholder={`Subject`} type='text' className='w-full p-1 outline-none border-b-[1px] focus:b-b-[1px] focus:border-pink-500' />
          </p>
          <p className='flex flex-col lg:flex-row gap-5 mt-5'>
            <label className='text-lg font-sans font-semibold'>Message</label>
            <textarea placeholder='Your Message' className='w-full h-[200px] p-1 outline-none border-[1px] focus:border-[1px] focus:border-pink-500'></textarea>
          </p>
        </motion.div>

        <motion.div
          className='px-[10%] text-center w-auto lg:w-[45%] flex flex-col gap-5'
          variants={contentVariants}
          initial='hidden'
          animate='visible'
        >
          <i className='text-2xl font-normal font-sans'>Find Me @</i>

            <div className='flex flex-col gap-2 text-left'>
              <i>LinkedIn</i>
              <a>www.linkedin.com/in/afrin-haque-dev</a>
            </div>

            <div className='flex flex-col gap-2 text-left'>
              <i>Twitter/X</i>
              <a>https://twitter.com/AfrinDev</a>
            </div>

            <div className='flex flex-col gap-2 text-left'>
              <i>Medium</i>
              <a>https://medium.com/@afrinhaque19</a>
            </div>

            <div className='flex flex-col gap-2 text-left'>
              <i>GitHub</i>
              <a>https://github.com/afrin321</a>
            </div>
          
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Contact