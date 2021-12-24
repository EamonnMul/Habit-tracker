import { getAuth, signOut,onAuthStateChanged,  signInWithEmailAndPassword ,createUserWithEmailAndPassword } from "firebase/auth";
import React, {useState, useEffect} from 'react'

export const AuthContext = React.createContext()

function Contex({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [SignedOut, setSignedOut] = useState(true)
    const [error, seterror] = useState('')
    const [message, setmessage] = useState('')


    const auth = getAuth();

    const signout = () => {
        signOut(auth).then(() => {
            setmessage('Sign out successful');
        }).catch((error) => {
          seterror('Sign out unsuccessful');
        });
        
    }

    useEffect(() => {
     seterror('');
     setmessage('') ;
    }, [])

  



    const CreateUser = (email,pw) => {
        createUserWithEmailAndPassword(auth, email, pw)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          seterror("");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterror(errorMessage);
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
      seterror('');
        signInWithEmailAndPassword(auth, email, pw)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            seterror("");
            setmessage("Sign in successful")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterror(errorMessage);
        });  
        
    }
    
    
   
   



    const value = {
        signout,
        CreateUser,
        SignIn,
        currentUser,
        SignedOut,
        error,
        message
        
    }




    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
            
       
    )
}

export default Contex











