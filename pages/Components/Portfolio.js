import Image from 'next/image';
import React from 'react';

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
    <h1 className='font-bold text-[#4e515a]  font-mono text-5xl p-4 '>Recent Work</h1>
    <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
    
      <Image className=" object-center w-1/4 rounded-full h-full col-span-2 md:col-span-3 row-span-2"

src={'/d6.jpg'}
alt='/'
layout='responsive'
width='215'
height='217'
object='cover'
/> 
 
      <Image className=" object-center w-1/4 rounded-full h-full"

src={'/k15.jpg'}
alt='/'
layout='responsive'
width='215'
height='217'
object='cover'
/> 
      
<Image className=" object-center w-1/4 rounded-full h-full"

src={'/k1.jpg'}
alt='/'
layout='responsive'
width='215'
height='217'
object='cover'
/> 
      
<Image className=" object-center w-1/4 rounded-full"

src={'/k8.jpg'}
alt='/'
layout='responsive'
width='215'
height='217'
object='cover'
/> 
      
      <Image className=" object-center w-1/4 rounded-full h-full"

src={'/k10.jpg'}
alt='/'
layout='responsive'
width='215'
height='217'
object='cover'
/> 
  
  </div></div>



);
};

export default Portfolio;