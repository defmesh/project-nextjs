import Link from "next/link";
import React from "react"
const Error = () => {
    return(
<>
<section className="flex items-center h-full p-16  mt-36  mb-48">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl ">
				<span className="sr-only">Error</span>404 
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
			<p className="mt-4 mb-8">But do not worry, you can find plenty of other things on our home page.</p>
		<Link href='/'>
        <p className='className="px-8 py-3 font-semibold rounded'>
		Back to home page
        </p>  </Link>
		</div>
	</div>
</section>
       
        </>
)}
        export default Error;