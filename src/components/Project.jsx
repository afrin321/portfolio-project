import React from 'react'
import pro1 from './../assets/images/pro1.png'
import pro2 from './../assets/images/pro2.png'
import pro3 from './../assets/images/pro3.png'

function Project() {
  return (
    <div id='projects' className='px-[5%] lg:px-[10%] my-3 pb-24'>
        <b className='mb-4'>PROJECTS</b>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 py-3'>
            <div className='rounded border'>
                <img src={pro1} className='mb-5' />
                <h3 className='my-2 font-semibold font-sans text-2xl'>3legant E-Commerce</h3>
                <span>Spring Boot Microservice architecture Single vendor e-comm and React Frontend.</span>
            </div>

            <div className='rounded border'>
                <img src={pro2} className='h-[192px] object-fill mb-5' />
                <h3 className='my-2 font-semibold font-sans text-2xl'>Contact Flo</h3>
                <span>Contact Form Submission API Service using Spring Boot Monolith</span>
            </div>

            <div className='rounded border'>
                <img src={pro3} className='h-[192px] object-cover mb-5' />
                <h3 className='my-2 font-semibold font-sans text-2xl'>Koala Trimmers</h3>
                <span><i>Paid project</i> - Frontend Development with HTML, CSS, JS.</span>
            </div>

        </div>
    </div>
  )
}

export default Project