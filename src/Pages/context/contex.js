import { getAuth, signOut,onAuthStateChanged,  signInWithEmailAndPassword ,createUserWithEmailAndPassword } from "firebase/auth";
import React, {useState, useEffect} from 'react'

export const AuthContext = React.createContext()

function Contex({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [SignedOut, setSignedOut] = useState(true)


    const auth = getAuth();

    const signout = () => {
        signOut(auth).then(() => {
            console.log('Sign out successful');
        }).catch((error) => {
          // An error happened.
        });
        
    }

  



    const CreateUser = (email,pw) => {
        createUserWithEmailAndPassword(auth, email, pw)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
          // ..
        });
        
      }
      useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              setCurrentUser(user);
              setSignedOut(false);
              // ...
            } else {
              setSignedOut(true);
              return;
            }
          });
      }, [])

    const SignIn = (auth,email,pw) => {
        signInWithEmailAndPassword(auth, email, pw)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });  
        
    }
    
    
   
   



    const value = {
        signout,
        CreateUser,
        SignIn,
        currentUser,
        SignedOut
        
    }




    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
            
       
    )
}

export default Contex











