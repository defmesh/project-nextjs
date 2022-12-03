

import React from 'react';
import Image from 'next/image';
import Carr from './Carr'


import { GiCardboardBox } from "react-icons/gi";
import { HiColorSwatch } from "react-icons/hi";
import { MdDeveloperBoard } from "react-icons/md";
import { AiOutlineBlock } from "react-icons/ai";
import { Element } from "react-scroll";

const Care = () => {
  return (
		<Element id="services" name="services">
      	<h1 className="max-w-[1240px] mx-auto px-4 py-16">
					Way Chose Us
				</h1>
			<div className="flex sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
			
			
				<div className="flex justify-between items-center mt-20">
					<div className="flex  flex-col justify-center items-center">
						{/* first block */}
						<div className="flex flex-col justify-center items-center">
            
						<div className="flex justify-center items-center cursor-pointer">
            <div className=' w-1/2h-auto'>
        <Image
          src={'/credit-card.png'}
          alt='/'
          layout='responsive'
          width='677'
          height='451'
        /></div>
						
						</div>
            <h2 className=" text-lg text-indigo-600 font-semibold">
								Easy Payment
							</h2>
						<p className="md:text-base text-gray-400 md:text-center sm:text-sm sm:text-left">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Perferendis aliquid fuga, asperiores voluptas expedita nulla.
						</p>
					</div>
				</div>

					{/* second block */}
					<div className="flex flex-col justify-center items-center">
            
						<div className="flex justify-center items-center cursor-pointer">
            <div className=' w-1/4 h-auto'>
        <Image
          src={'/clock.png'}
          alt='/'
          layout='responsive'
          width='677'
          height='451'
        /></div>
						
						</div>
            <h2 className=" text-lg text-indigo-600 font-semibold">
								Delivery on Time
							</h2>
						<p className="md:text-base text-gray-400 md:text-center sm:text-sm sm:text-left">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Perferendis aliquid fuga, asperiores voluptas expedita nulla.
						</p>
					</div>
				</div>

				{/* second grid */}
				<div className="flex justify-items-start items-center mt-20">
					<div className="flex flex-col justify-center items-center">
						{/* first block */}
						<div className="flex justify-center items-center cursor-pointer">
            <div className=' w-1/4 h-auto'>
        <Image
          src={'/camera.png'}
          alt='/'
          layout='responsive'
          width='677'
          height='451'
        /></div>
							
						</div>
            <h2 className="text-xl text-indigo-600 font-semibold text-center ">
								Real Photo
							</h2>
						<p className="md:text-base text-gray-400 md:text-center sm:text-center sm:text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Perferendis aliquid fuga, asperiores voluptas expedita nulla.
						</p>
					</div>

					{/* second block */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer">
            <div className='  w-1/5 h-auto items-center'>
        <Image
          src={'/chat.png'}
          alt='/'
          layout='responsive'
          width='677'
          height='451'
        /></div>
							
						</div>

            <h2 className="text-l text-indigo-600 font-semibold">
							Help With the Selections
							</h2>
						<p className="md:text-base text-gray-400 md:text-center sm:text-center sm:text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Perferendis aliquid fuga, asperiores voluptas expedita nulla.
						</p>
					</div>
				</div>
			</div>
		</Element>
	);
}


export default Care;