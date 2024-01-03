import React from 'react'
import { motion } from 'framer-motion';

function Blog() {
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
      id='blog'
      className='flex flex-col justify-center gap-3 px-[5%] lg:px-[5%] my-10 h-screen lg:h-screen'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <b className='text-2xl font-semibold mb-4'>BLOG</b>
      <motion.p
        variants={contentVariants}
        initial='hidden'
        animate='visible'
      >
        Here are some articles I've recently written. These are my <i>summarized</i> version of different <i>Tech</i> topics and happenings.
      </motion.p>
      <motion.section
        className="flex flex-wrap gap-x-8 w-full lg:w-[70%]"
        variants={contentVariants}
        initial='hidden'
        animate='visible'
      >
        <a className='text-xl font-mono my-4 underline hover:text-green-800 decoration-green-600 hover:decoration-solid decoration-wavy underline-offset-2 '>IT’s profound Obsession with ‘-Ops’ - Demystified</a>
        <a href='https://www.dailymessenger.net/opinions/news/6612?fbclid=IwAR003Z6PAqGZKKIvksIrXLh_alGfuZsC9crzMSR4R7yD0D-fQZBu34trlgg' className='text-xl font-mono my-4 underline hover:text-blue-800 decoration-blue-600 hover:decoration-solid decoration-wavy underline-offset-2 '>The recent data breach in Bangladesh and the possible consequences</a>
        <a className='text-xl font-mono my-4 underline hover:text-pink-800 decoration-pink-600 hover:decoration-solid decoration-wavy underline-offset-2 '>5 Tips I Used To Grow In Front-End Engineering - Proven Strategies To Level Up Your Game In Front-End</a>
      </motion.section>
      <motion.i
        variants={contentVariants}
        initial='hidden'
        animate='visible'
      >
        Many more on the way...
      </motion.i>
    </motion.div>
  )
}

export default Blog