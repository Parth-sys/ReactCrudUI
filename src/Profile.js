import React from "react";
import{useNavigate,useParams} from 'react-router-dom';


function Profile({data}){

  


    

  let navigate=useNavigate();
  const {id,name,Pic}=useParams();
  console.log(name,Pic)

    return(
      <div>
       
   {data.filter(c=>c.id === id).map((r)=>(
    
        <div className='usercard' key={r.id}  >
              <img
             className="userpic"
             src={r.Pic}
             alt={r.name}
             height="300px"
             //width="50px"
           />{" "}
           <div>
              {" "}
             <p className="username"> {r.name} </p>
             <button >Delete</button>
             <button  onClick={()=>navigate(`/Edit/${r.id}/${r.name}`)} > Edit </button>
          
          </div>
            
         </div>
         
         ))}
          
      </div>
    )
    }


    
    

  

    
    export default Profile;