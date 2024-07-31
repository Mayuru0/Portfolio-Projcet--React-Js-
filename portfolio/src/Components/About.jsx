import React from 'react'
import about from '../assets/about.jpg';

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id="about">
        
    <div className='md:grid md:grid-cols-2 sm:py-16'>
        
        
        <div className='mt-4 md:mt-0 text-left flex  '>
            <div className='my-auto mx-6'>
                <h2 className='text-4xl font-bold mb-4 primary'>About Me</h2>
                <p className='text-base lg:text-lg'>
                I am currently a dedicated and proficient learner pursuing a Higher
          National Diploma in Information Technology, actively seeking an
          internship opportunity to fulfill my diploma requirements. With a
          strong background in various programming languages and
          development tools, my goal is to contribute to the success and growth
          of a fast-paced firm.
                </p>
            </div>
        </div>
        
        <img className='mx-auto rounded-3xl py-8 md:py-0' src ={about} width={300} height={300}/>

        
        
        </div>    
    





    </div>
  )
}

export default About