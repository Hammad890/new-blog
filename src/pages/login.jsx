import { useState } from "react";

export default function Login (){
    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');
const handleLogin= async(e)=>{
   
}
return(
    <form className="login" onSubmit={handleLogin}>
        <h1>Login</h1>
        <input type="text"
        placeholder="username"
        value={username}
        onChange={e=>setUsername(e.target.value)}
         />
         <input type="password"
         placeholder="password"
         value={password}
         onChange={e=>setPassword(e.target.value)}
          />
          <button>Login</button>
    </form>
);
}