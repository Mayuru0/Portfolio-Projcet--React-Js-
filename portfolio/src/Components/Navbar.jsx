import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='bg-black h-[100px] text-gray-400 max-w-[1200px] mx-auto flex justify-between items-center'>
      <h1 className='text-3xl font-bold primary ml-4 font-mono'>MAYURU MADHURANGA</h1>
      <ul className='hidden md:flex'>
      <li className='p-5'> <a href='#skills'> Skills </a></li>
        <li className='p-5'><a href='#about'>   About </a></li>
        <li className='p-5'><a href='#project'>Project </a></li>
        <li className='p-5'><a href='#contact'>Contact </a></li>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%] top-0 h-full ease-in-out duration-500'}>
        <h1 className='text-3xl font-bold primary ml-4'>Mayuru Madhuranga</h1>
        <ul className='p-5'>
        <li className='p-5'> <a href='#skills'> Skills </a></li>
        <li className='p-5'><a href='#about'>   About </a></li>
        <li className='p-5'><a href='#project'>Project </a></li>
        <li className='p-5'><a href='#contact'>Contact </a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
