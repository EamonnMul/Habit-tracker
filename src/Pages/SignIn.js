import React, {useState, useContext} from 'react';
import { getAuth} from "firebase/auth";
import './SignUp.css'
import Navbar from '../components/navbar';
import {AuthContext} from '../Pages/context/contex'



  

function SignIn() {
    const [email,setEmail] = useState('')
    const [pw, setPw] = useState('')

    const values = useContext(AuthContext);

    console.log(values.currentUser.uid);




    const auth = getAuth();
    
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    }
    const handlePw = (e) => {
      setPw(e.target.value);
    }

    const handleSubmit = () => {
      values.SignIn(auth, email,pw);
    }

    alert(values.SignedOut);
    
  


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
                  <input type="text" />
              </label>
        
              <button  className="submit-button">Submit</button>

          </form>
        </div>
        </>
    )
}

export default SignIn
