import React from "react";
import { useState } from "react";
import "./registrs.css";
import { Link } from "react-router-dom";


function login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('')
  const onSubmit=(q)=>{
    q.preventDefault()
    let arr={email:email,password:password}
    console.log(arr);
   }
const setemailf=(q)=>{
setemail(q.target.value)
}
const setpasswordf=(q)=>{
  setpassword(q.target.value)
  }
  return (
    <div className="regstr_div_2">
      <form className="regstr_div2" onSubmit={onSubmit}>
        <label>Email</label>
        <input
          type="email"
          id="email_l"
          placeholder="Email"
          value={email}
          onChange={setemailf}
        />
        <label>Password</label>
        <input
          type="password"
          id="password_l"
          placeholder="Password"
          value={password}
          onChange={setpasswordf}
        />
        <button onClick={onSubmit}>Click</button>
        <Link to='/registration'>Registration</Link>
      </form>
    </div>
  );
}

export default login;
