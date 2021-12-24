import React, {useState, useContext} from 'react';
import { getAuth} from "firebase/auth";
import './SignUp.css'
import Navbar from '../components/navbar';
import {AuthContext} from '../Pages/context/contex'



  

function SignIn() {
    const [email,setEmail] = useState('')
    const [pw, setPw] = useState('')
    const [message, setmessage] = useState('')

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

      values.SignIn(auth, email,pw);
    }

    
    
  


    return (
        <>
        <Navbar />
        <div className="form-container">
              <form action=""  onSubmit={handleSubmit}  className="form-auth">
        
              <label htmlFor="" onChange={handleEmailChange}  className="email">
                  Email
                  <input type="email" />
              </label>
              <label htmlFor="" onChange={handlePw} className="email">
                  Password
                  <input type="password" />
              </label>
        
              <button  className="submit-button">Submit</button>
              <div className="message-box">
                <p className="message">{values.error}</p>
            
            </div>

          </form>
        
        </div>
        </>
    )
}

export default SignIn
