// export default function Login(){

//     return(

//         <div>
//           <h1>Click Login to go to Landingpage</h1>
//         </div>

//     )

// }

import React, { useState } from "react";
// import "./ages/styles.css";
import '../Components/Pages/Style.css';
import {useNavigate, useLocation} from 'react-router-dom';
// import { useAuth } from './Components/Pages/Auth-context';
import { useAuth } from "./Pages/Auth-context";
function Login() {
  const {login,setLogin}=useAuth();
  const navigate=useNavigate();
  const location=useLocation();
   console.log(location);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button
       onClick={()=>{
        setLogin(((login)=>!login))
        navigate(location.state.from.pathname)
      }}
      className="logbutton"
      >
        {login?"logout":"login"}
      </button>
        {/* <button type="submit">Login</button> */}
      </form>
    </div>
  );
}

export default Login;
