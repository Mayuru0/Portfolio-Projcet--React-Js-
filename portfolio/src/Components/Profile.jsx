import React from 'react';
import pro from '../assets/Pro.png';
import { TypeAnimation } from 'react-type-animation';

const Profile = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] h-[70vh] mx-auto py-8 bg-black'>
      <div className='col-span-1 my-auto mx-auto'>
        <div className='w-[300px] h-auto lg:w-[400px]'>
          <img src={pro} alt="Profile" />
        </div>
      </div>
      <div className='col-span-2 px-5 my-auto'>
        <h1 className='text-white text-4xl sm:text-8xl font-extrabold'>
          <span className='primary'>I'm a</span> <br />
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
        </h1>
         <p className='text-white sm:text-lg my-6 lg:text-xl'>
          I am currently a dedicated and proficient learner pursuing a Higher
          National Diploma in Information Technology, actively seeking an
          internship opportunity to fulfill my diploma requirements. With a
          strong background in various programming languages and
          development tools, my goal is to contribute to the success and growth
          of a fast-paced firm.

         </p>
      </div>
    </div>
  );
};

export default Profile;
