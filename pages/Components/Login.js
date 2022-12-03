
import React from "react";
const Login = () => {
    return (
		<div className="  max-w-screen-md h-full  px-8 py-44 mx-auto rounded-lg  md:px-12 lg:px-16 xl:px-32 mt-10 mb-12">

		  <div className="space-y-6 border mt-15 rounded-xl drop-shadow-2xl p-20 bg-[#d4d5d1] ">
		  <form novalidate="" className=" ng-untouched ng-pristine  ng-valid">
			  <div>
				  <label for="email" className="text-sm text-[#434449] ">Username or Email</label>
				  <input id="name" type="text" className="w-full p-3 rounded-full " required />
			  </div>
			  <div>
				  <label for="password" className="text-sm text-[#434449] ">Password</label>
				  <input id="password" type="password" className="w-full p-3 rounded-full " required />
				
			  </div>
			
			  <button type="submit" className="w-1/2 place-self-center p-3 text-sm text-white mt-8 font-bold tracking-wide uppercase hover:bg-[#e4d895] bg-[#a7b294] rounded-full ">sign-in </button>
			  <div className="flex justify-center mt-6 space-x-2 text-xs">
			<a rel="noopener noreferrer" href="#" className="text-[#434449]">Forgot Password?</a>
			<span className="text-gray-400">/</span>
			<a rel="noopener noreferrer" href="#" className="text-[#434449]">Sign Up</a>
		</div>
		  </form>
	  </div></div>

    )
  }
  
  export default Login;