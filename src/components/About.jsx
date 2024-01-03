import React from 'react'
import react from './../assets/images/react.jpg'
import js from './../assets/images/js.jpg'
import css from './../assets/images/css.svg'
import html from './../assets/images/html.png'
import java from './../assets/images/java.png'
import spring from './../assets/images/spring.jpg'
import aws from './../assets/images/aws.png'
import bootstrap from './../assets/images/bootstrap.png'
import jquery from './../assets/images/jquery.png'
import vue from './../assets/images/vue.png'
import php from './../assets/images/php.png'
import linux from './../assets/images/linux.png'
import tailwind from './../assets/images/tailwind.png'
import docker from './../assets/images/docker.png'
import { motion } from 'framer-motion'

function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
  };
  return (
    <motion.div
      id='about'
      className='flex flex-col gap-3 px-[5%] lg:px-[5%] my-10 mb-10 lg:h-screen'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <b className='mb-4 text-2xl font-semibold'>ABOUT ME</b>
      <motion.div
        className='flex flex-col lg:flex-row justify-between gap-12'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.div
          className='w-full lg:w-[70%]'
          variants={textVariants}
          initial='hidden'
          animate='visible'
        >
          <p className='font-sans text-lg'>
  <span className='text-3xl font-sans'>H</span>ello there! I'm Afrin, a software engineer with a journey spanning over 2 years. My career kickstarted as a <span style={{ color: '#52805f' }}><i>Frontend</i></span> engineer, sculpting user interfaces with pure JavaScript and CSS. In this realm, I crafted intricate <span style={{ color: '#52805f' }}><i>front-end structures and functionalities</i></span>. Concurrently, I delved into the backend realm, exploring its complexities and observing the myriad aspects that demanded attention.
</p>
<br />
<p className='text-lg'>
  Soon, the backend world unfolded beyond mere <span style={{ color: '#52805f' }}><i>CRUD</i></span>. From designing databases to planning architectures, my curiosity deepened. Enrolled in a year-long Cyber Security diploma, I gained insights into IT infrastructures and DevOps practices, providing a holistic view of software development. It felt like the missing puzzle pieces were falling into place.
</p>
<br />
<p className='text-lg'>
  Fast forward a few months, and I immersed myself in diverse architectures, design principles, and cutting-edge concepts. My present focus revolves around <span style={{ color: '#52805f' }}><i>Microservices, Distributed Systems, and Serverless Architectures.</i></span> I aspire to incrementally construct <span style={{ color: '#52805f' }}><i>cloud-native</i></span> applications and services. My passion for exploring the fringes of web development stems from an unconventional desire to <span style={{ color: '#52805f' }}><i>creatively</i></span> tackle challenges. Currently, my primary <span className='font-semibold'>toolset</span> for this adventure is <span style={{ color: '#52805f' }}><i>Tech</i></span>.
</p>

        </motion.div>
        <motion.div
          className='mx-2 flex flex-col items-center text-center align-middle justify-start gap-3'
          variants={textVariants}
          initial='hidden'
          animate='visible'
        >
          <h2 className='text-2xl font-semibold'>What I Build</h2>
          <span className='text-gray-800'>Immersive Frontend Experiences</span>
          <span>Dynamically Crafted <br/>Websites and Landing Pages</span>
          <span className='text-gray-800'>End-to-End Full-stack Applications</span>
          <span>Robust Monolithic Applications</span>
          <span className='text-gray-800'>Powerful, Secure RESTful APIs</span>
          <span>Custom Module Development</span>
        </motion.div>
      </motion.div>
      <motion.div
        className='my-3 flex flex-col font-sans gap-3 justify-center align-middle items-center p-4'
        variants={textVariants}
        initial='hidden'
        animate='visible'
      >
        <div className='grid grid-rows-2 grid-flow-col gap-2 '>
                <img className='rounded w-20' src={react} />
                <img className='rounded w-10' src={js} />
                <img className='rounded w-10' src={css} />
                <img className='rounded w-10' src={html} />
                <img className='rounded w-10' src={java} />
                <img className='rounded w-20' src={spring} />
                <img className='rounded w-10' src={aws} />
                <img className='rounded w-20' src={bootstrap} />
                <img className='rounded w-10' src={jquery} />
                <img className='rounded w-20' src={vue} />
                <img className='rounded w-20' src={php} />
                <img className='rounded w-20' src={linux} />
                <img className='rounded w-20' src={tailwind} />
                <img className='rounded w-20' src={docker} />
                </div>
      </motion.div>
    </motion.div>
  );
};

export default About