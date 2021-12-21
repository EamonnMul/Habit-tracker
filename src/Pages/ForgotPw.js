import React, {useState} from 'react'
import './SignUp.css'
import Navbar from '../components/navbar';

function ForgotPw() {
    const [email,setEmail] = useState('')
   


    const auth = getAuth();
    const handleEmailChange = (e) => {
    setEmail(e.target.value);
    }

    const handleSubmit = () => {

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
             
        
              <button  className="submit-button">Submit</button>

          </form>
        </div>
        </>
    )
}


export default ForgotPw
