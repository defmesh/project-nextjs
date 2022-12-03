import React from "react";
import Image from 'next/image';

const Contact = () => {
  return (
<div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-44 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">

  <div className="flex flex-col justify-between ">
		<div className="space-y-2">
			<h2 className="text-4xl text-[#434449]  text-center font-bold leading-tight font-mono lg:text-5xl">Lets talk!</h2>
		
		</div>
    <Image
              src={'/fw.png'}
              alt='/'
              layout='responsive'
              width='17'
              height='51'
              />
	</div>
	<div className="space-y-6 border mt-15 rounded-xl drop-shadow-2xl p-20 bg-[#d4d5d1] ">
	<form novalidate="" className=" ng-untouched ng-pristine  ng-valid">
		<div>
			<label for="name" className="text-sm text-[#434449]  ">Full name</label>
			<input id="name" type="text" placeholder="Enter Full Name" className="w-full p-3   rounded-full " required />
		</div>
		<div>
			<label for="email" className="text-sm text-[#434449] ">Email</label>
			<textarea id="email" type="email" className="w-full p-3  rounded-full "  required placeholder="Enter your email"/>
		</div>
		<div>
			<label for="message" className="text-sm text-[#434449] ">Message</label>
			<textarea id="message"  className="  w-full h-36 mt-2 p-4 outline-none border-none rounded-lg" placeholder="Enter your message"></textarea>
		</div>
		<button type="submit" className=" hover:bg-[#e4d895] w-full p-3 text-sm text-white mt-8 font-bold tracking-wide uppercase bg-[#a7b294] rounded-full ">Send </button>
	</form>
</div></div>
  )
}

export default Contact;