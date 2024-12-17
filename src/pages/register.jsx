import { useState } from "react";

export default function Register(){
    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');
const handleRegister= async (e)=>{
    
   
}
return(
    <form className="register" onSubmit={handleRegister}>
        <h1>Register</h1>
        <input type="text"
        placeholder="username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
         />
         <input type="password"
         placeholder="password"
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
          />
          <button>Sign Up</button>
    </form>
);
}