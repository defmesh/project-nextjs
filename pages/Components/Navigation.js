import Link from "next/link";
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const Navigation= ()=>{
    const [nav, setNav] = useState(false);
  
  
    const handleNav = () => {
      setNav(!nav);
    };
return(
    <div className='bg-[#a7b294] fixed left-0 top-0 w-full z-10 ease-in duration-300'>
    <div className='max-w-[1240px] m-auto flex justify-between items-center  text-center p-4 text-white'>
      <Link href='/'>
        <h1 className='font-mono font-bold text-4xl'>
       Flowers
        </h1>
      </Link>
      <ul  className='hidden sm:flex '>
        <li className='p-6 font-mono hover:text-[#e4d895] text-xl'>
          <Link href='/'>Home</Link>
        </li>
       
       
        <li className='p-6 font-mono hover:text-[#e4d895]  text-xl'>
          <Link href='../contact'>Contact</Link>
        </li>
        <li className='p-4 font-mono hover:text-[#e4d895]'>
          <Link href='../login'><button className="font-mono hover:text-[#e4d895]  px-8 items-center py-1 rounded-full border-2 border-[#e4d895]">Log in</button></Link>
        </li>
        <li className='p-4'>
          <Link href='../'><button className="hover:bg-white hover:text-[#434449] px-8 py-1 items-center rounded-full bg-[#e4d895] ">Log Up</button></Link>
        </li>
      </ul>

      {/* Mobile Button */}
      <div onClick={handleNav} className='block sm:hidden z-10'>
        {nav ? (
          <AiOutlineClose size={20} />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full  h-screen text-black    bg-[#d4d5d1] text-center ease-in duration-300'
            : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#81638d] text-center ease-in duration-300'
        }
      >
        <ul>
          <li onClick={handleNav} className='p-4 text-4xl hover:text-[#a7b294]  '>
            <Link href='/'>Home</Link>
          </li>
       
          <li onClick={handleNav} className='p-4 text-4xl hover:text-[#a7b294] '>
            <Link href='/contact'>Contact</Link>
          </li>
          <li onClick={handleNav} className='p-4 text-4xl hover:text-[#a7b294] '>
            <Link href='/'>Log up</Link>
          </li>
          <li onClick={handleNav} className='p-4 text-4xl hover:text-[#a7b294] '>
            <Link href='../login'>Log in</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>

)


}

export default Navigation;