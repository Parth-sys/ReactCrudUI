import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function List(){

 useEffect(()=>{
users()
 },[])

  const [name,setname]=useState(" ");
  const [Pic,setPic]=useState(" ");
  const[User,setUser]=useState([]);

  


  const users=()=>{
    fetch('https://60ebd304e9647b0017cdde45.mockapi.io/dashuser')
   .then(response => response.json())
   .then((data) => setUser(data));
 }
 

   


   const AddUser=()=>{
       
    fetch("https://60ebd304e9647b0017cdde45.mockapi.io/dashuser",{
           method:"POST",
          header:{
             "Content-Type":"application/json ,Charset UTF-8"
          },
          body:JSON.stringify({
              name:name,
              Pic:Pic
          }),
            
        }).then((data)=>setUser(data))
        console.log(setUser)
        users()
   }



   
   
   
   return(
     
     <div className='App'>
      <form>
        <input
          className="input"
          required
          type="text"
          value={name}
          placeholder="enter name"
          onChange={(event) => setname(event.target.value)}
          ></input>
        
        <br />
        
        <input
           required
           value={Pic}
           type="url"
           placeholder="url"
           onChange={(event) => setPic(event.target.value)}
           ></input> 
         <button onClick={AddUser} > Add</button>
        </form>

      
      
      {User.map((ur)=>(
        
        <Users  key={ur.id}  name={ur.name} Pic={ur.Pic} id={ur.id} users={users}  ></Users>
        ))
}

      


        </div>
    )
  }
  
  
  function  Users({name,Pic,id,users}){
    
    



    const Delete = () => {
     fetch("https://60ebd304e9647b0017cdde45.mockapi.io/dashuser/"+id, {
       method: "DELETE"
     }).then(() => users());
   };
    
  let navigate=useNavigate()

     
    return(
      <div>
        <div className='usercard'    onClick={()=>navigate(`/Profile/${id}`)} >
            <img
           className="userpic"
           src={Pic}
           alt={name}
           height="100px"
           //width="50px"
         />{" "}
         <div>
            {" "}
           <p className="username"> {name} </p>
         </div>
      
       </div>
           <button  onClick={Delete} >Delete</button>
           
           </div>  
      
  )
}  


