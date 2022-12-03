import React from "react";




  const Post= (props) => {

  return (
    <div className="container px-4  mt-40 mb-20 bg-black text-yellow-300">
<h1>this is Users:</h1>{props.users&&users.map((user) => (
<div className="bg-red-100 px-4 mt-20" key={user.id}>{console.log(user.name)}
 



  
</div>))}
</div>
  )}

    
  
  export default Post;
  


  export async function getServerSideProps() {
    try{
      const users =await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
    return {
      props: {
        users,
      }, 
   
    };
  } catch(error){
    console.log(error);
    return{
      props:{
        users : [],
        error,
      }
    }
  }
  }
  
  
  