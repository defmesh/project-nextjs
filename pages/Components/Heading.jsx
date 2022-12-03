import React from 'react';
import { Element } from "react-scroll";

const Heading = () => {
  return (
		<Element id="home" name="home">
			<div>
				<div className="flex text-center md:pt-32 pt-28  bg-cover bg-[url(/bg1.jpg)] ">
					
					<div className=" flex container items-center  flex-col md:items-center sm:items-center mx-20 my-48">
						<h1 className=" font-mono text-[#434449]  animate-bounce font-bold text-7xl items-center mb-5">
						Flowers for magical  moments
						</h1>
					 
						<a
							href="#"
							className="font-mono  items-center font-semibold text-white md:mt-10 mt-5 pt-5 bg-[#a7b294] rounded-md w-60 h-16 text-lg hover:bg-[#e4d895] "
						>
							Shop Now
						</a>
					</div>
				</div>
			</div>
		</Element>


        
        
      
  );
};

export default Heading;