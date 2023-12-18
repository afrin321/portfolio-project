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

function About() {
  return (
    <div id='about' className='px-[5%] lg:px-[10%] my-3 mb-10'>
          <b className='mb-4'>ABOUT ME</b>
          <div className='flex flex-col lg:flex-row justify-between gap-12'>
            <div className='w-full lg:w-[70%]'>
              <p className='font-sans'><span className='text-3xl font-sans'>Hi!</span> I am Afrin. A software engineer with 2 years of experience. I started out as a <i>Frontend</i> engineer working on UI with pure JavaScript and CSS.
              During this time, I built and tackled complex <i>front-end structures and functionalities</i>. Alongside, I partly worked on the backend side of things inquisitively observing the many things that needed to be taken care of. 
              </p>
              <br/>
              <p>Soon enough, I relaized that back-end was much more than just <i>CRUD</i>. From database designing to architecture planning, I became increasingly interested in getting the full picture of how complicated IT systems were built.
              Happened to be enrolled in a year-long Cyber Security diploma at that time, I was blessed with a good understanding of IT infrastructures and practices that faciliated development - DevOps. I felt like I was finally getting a clearer picture 
              of things.</p>
              <br/>
              <p>Fast forward a few months, I deep dived into various architectures, design practices and concepts. My current areas of interests are <i>Microservices, Distributed Systems and Serverless Architectures.</i> I'm also keen on 
              gradually building <i>cloud native</i> apps and services. Why I strive to explore the corners of web development stems from a strange desire to <i>creatively</i> solve problems. Right now, my only <span className='font-semibold'>toolset</span> at hand to do so is with <i>Tech</i>.</p>
            </div>
            <div className='mx-2 flex flex-col items-center align-middle justify-start gap-3'>
              <h2 className='text-2xl font-semibold'>What I build</h2>
              <span className=''>Frontend Development</span>
              <span className=''>Websites/Landing pages</span>
              <span className=''>Full-stack Application Development</span>
              <span className=''>Monolithic Applications</span>
              <span className=''>REST APIs</span>
              <span className=''>Module Development</span>
              
            </div>
          </div>
          <div className='my-3 flex flex-col font-sans gap-3 justify-center align-middle items-center p-4'>           
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
            </div>
            
          
          
        </div>
  )
}

export default About