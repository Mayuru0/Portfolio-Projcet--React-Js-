import React from 'react';
import pro from '../assets/Pro.png';
import { TypeAnimation } from 'react-type-animation';

const Profile = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
      <div className='col-span-1 my-auto mx-auto'>
        <div className='w-[300px] h-auto lg:w-[400px]'>
          <img src={pro} alt="Profile" />
        </div>
      </div>
      <div className='col-span-2 px-5 my-auto '>
        <h1 className='text-white text-4xl sm:text-8xl font-extrabold'>
          <span className='primary'>I'm a</span> <br />
        </h1>
        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            1000,
            "UI/UX Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-white text-2xl sm:text-5xl"
        />
       
         <p className='text-white sm:text-lg my-6  lg:text-xl'>
          I'm Mayuru Madhuranga and I am looking for internship as Full-Stack developer or UI/UX Developer
         </p>

         <div className='my-8' >
           <a href='/' className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>
           Download CV
           </a> 

         </div>
      </div>
    </div>
  );
};

export default Profile;
