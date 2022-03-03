
import './App.css';
import { Routes,Route } from 'react-router-dom'
import List from './List';
import Edit from './Edit';
import Profile from './Profile';
import { useEffect, useState } from 'react';


  function App() {

useEffect(()=>{

  users();

},[])

const[People,setPeople]=useState([])
const users=()=>{
   fetch('https://60ebd304e9647b0017cdde45.mockapi.io/dashuser')
  .then(response => response.json())
  .then((data) => setPeople(data));
}







  return (

<div className="App">

     <div className='App'>     
    
  
    </div>




   <Routes>

   <Route path="/List" element={<List  users={users} People={People} setPeople={setPeople}></List>}  />
    
   
   <Route path="/Edit/:id/:name" element={<Edit  d={People} getUsers={users}  ></Edit>}>
     
    
   </Route>

   <Route path="/Profile" element={<Profile  data={People}/>}>

     <Route path="/Profile/:id" element={<Profile  data={People} />} /> 
   </Route>

  
   <Route path="/"  element={<List></List>}  />

   </Routes>








    </div>
  );
}


export default App;