import React from 'react'
const Footer= ()=>{

    return(


<footer className="py-6 bg-[#a7b294] ">
<div className="container px-6 mx-auto space-y-6 divide-y  md:space-y-12 divide-opacity-50">
  <div className="grid grid-cols-12">
    <div className="pb-6 col-span-full md:pb-0 md:col-span-6">

    </div>
 
  </div>
  
    <div className="text-white  flex flex-row self-center justify-center space-x-10 text-sm text-center md:flex-row  md:space-x-30 ">
      <span >©2022 All rights reserved</span>
      <a rel="noopener noreferrer" href="#">
        <span >Privacy policy</span>
      </a>
      <a rel="noopener noreferrer" href="#">
        <span >Terms of service</span>
      </a>

   
  </div>
</div>
</footer>
    )
    }
    
    export default Footer;