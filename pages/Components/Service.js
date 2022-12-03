import React from "react";

import Image from 'next/image';
function Service(){
  return (
 
    <div className="services  flex flex-wrap items-center justify-between mb-10 mt-20 px-10 md:px-64 p-20   ">
      
    <div className="w-full md:w-1/4 mt-4 md:mt-0 flex flex-col items-center space-y-3 md:items-center sm:items-center">
      
    <div className=' w-1/4 h-auto'>
        <Image
          src={'/del3.png'}
          alt='/'
          layout='responsive'
          width='677'
          height='451'
        /></div>
      <h2 className=" text-[#e4d895] text-2xl">		Delivery on Time</h2>
      <p className="font-mono text-[#a7b294] font-thin">A courier visit at the exact time                 </p>
  
    </div>
    <div className="w-full md:w-1/4 mt-4 md:mt-0 flex flex-col items-center space-y-3">
    <div className=' w-1/4 h-auto'>
        <Image
          src={'/card.png'}
          alt='/'
          layout='responsive'
          width='677'
          height='451'
        /></div>
          <h2 className="text-[#e4d895]  text-2xl">Easy Payment</h2>
      <p className="text-center font-mono text-[#a7b294]  font-thin">You can choose your preferred payment method</p>

    </div>
    <div className="w-full md:w-1/4 mt-4 md:mt-0 flex flex-col items-center space-y-3">
    <div className=' w-1/4 h-auto'>
        <Image
          src={'/cam1.png'}
          alt='/'
          layout='responsive'
          width='677'
          height='451'
        /></div>
        <h2 className="text-[#e4d895] text-2xl">Real Photo</h2>
        <p className="text-[#a7b294] font-mono font-thin">You can see your order before receiving just send your email</p>
      
      </div>
      <div className="w-full md:w-1/4 mt-4 md:mt-0 flex flex-col items-center sm:w-12 space-y-3">
      <div className=' w-1/4 h-auto'>
        <Image
          src={'/ch1.png'}
          alt='/'
          layout='responsive'
          width='677'
          height='451'
        /></div>
        <h2 className="text-2xl text-[#e4d895] ">Help With the Selections</h2>
        <p className="font-mono  text-[#a7b294]  font-thin">You can call to our experts and they will help you with a choice</p>
       
      </div>
</div> 
  );
}
export default Service;