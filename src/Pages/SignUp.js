import React, {useState,useEffect, useRef, useContext} from 'react'
import './SignUp.css';

import {app} from '../firebase';

import { Link} from "react-router-dom"

import Navbar from '../components/navbar'

import { AuthContext } from './context/contex';

import { getAuth} from "firebase/auth";





export default function Signup() {



    const [email,setEmail] = useState('')
    const [pw, setPw] = useState('')
    const confirmPasswordReset = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
  
   
    const values = useContext(AuthContext);


    const auth = getAuth();


    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      
    }
    const handlePw = (e) => {
      setPw(e.target.value);
      
    }
    
    

    const handleSubmit = (e) => {
     e.preventDefault();
     console.log( pw, email);
     values.CreateUser(email,pw);
    }
    
    
    

    
  

  


    return (
      <>
      <Navbar />

      <div className="form-container">

        
          <form action=""  onSubmit={handleSubmit}  className="form-auth">
              <label htmlFor="" className="name-label">
                  Name
                  <input type="text" />
              </label>
              <label htmlFor="" onChange={handleEmailChange}  className="email">
                  Email
                  <input type="email" />
              </label>
              <label htmlFor="" onChange={handlePw} className="email">
                  Password
                  <input type="text" />
              </label>
              <label htmlFor="" ref={confirmPasswordReset} className="email">
                  Confirm Password
                  <input type="text" />
              </label>

              <button  className="submit-button ">Submit</button>

              <div className="signIn">
                <h3>Already a user?</h3>
                <Link to='/SignIn'>
                <button className="submit-button ">Sign In</button>
                </Link>
          </div>

          </form>
          
      </div>
    </>
    )
}
