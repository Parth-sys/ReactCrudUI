

import React, { useState } from "react";
import { useParams } from "react-router-dom";



export default function Edit({d,getUsers}){

  

  const {id,name,Pic}=useParams();

  
  
  
  const[Name1,setName1]=useState(name)
  const [ID,setID]=useState(id)
  const [Pic1,setPic1]=useState(" ")
  
  //d.filter(c=>c.id === id).map((r)=>{
     
    // Pic1=r.Pic
  //})


   const edit=()=>{
           
    fetch(`https://60ebd304e9647b0017cdde45.mockapi.io/dashuser/${id}`,{
        method:"PUT",
       header:{
          "Content-Type":"application/json ,Charset UTF-8"
       },
       body:JSON.stringify({
           Name1:name,
           Pic1:Pic,
       
       })

     }).then(()=>getUsers())
     
}






    return(
    


    <div>
    
        Edit Profile {id}

    
        
        
        <div className='usercard'  key={id}>
      <form>




      <input
           required
         
           type="number"
           placeholder="id"
           value={ID}
           onChange={(event) => setID(event.target.value)}
           ></input> <br></br>




        <input
          
          className="input"
          required
          type="text"
          value={Name1}
          placeholder="enter name"
          onChange={(event) => setName1(event.target.value)}

          ></input>
        
        <br />
        
        <input
           required
           value={Pic1}
           type="url"
           placeholder="url"
           onChange={(event) => setPic1(event.target.value)}
           ></input> 
      
      <button onClick={edit} > Add</button>
        
        </form>

        </div>
    

    

        </div>
        )
}


 