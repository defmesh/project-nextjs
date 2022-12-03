import React from 'react';
import Image from 'next/image';


const Cap = () => {
    return(
    

      <section className='mt-32 border'>
          <div className="container px-6 py-10 mx-auto  ">
             
      
              <div className="  flex justify-center mt-8 lg:-mx-6 lg:flex lg:items-center">
                  <div className="  w-1/4 lg:mx-6 rounded-xl hidden md:block ">
                  <Image
              src={'/fq.png'}
              alt='/'
              layout='responsive'
              width='17'
              height='51'
              className="  cursor-pointer hidden md:block"/>
            </div>
                  <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    
      
                      <h3 className=" font-mono text-center block mt-4 text-2xl font-semibold text-[#e4d895] hover:underline dark:text-white md:text-3xl">
                         MONA-FLORAL DESIGNER
                      </h3>
      
                      <p className="font-mono text-center mt-3 text-bold text-[#a7b294]  md:text-sm">
                      Hi there , i am  MONA the founder of stardust flowers i help create magical celebrations with natures’s
Our seasonal and locally soured flowers are happily arranged
                      </p>
      

      
                    
                  </div>
              </div>
          </div>
      </section>


     


)}
export default Cap;