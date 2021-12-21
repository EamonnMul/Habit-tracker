import {initializeApp} from "firebase/app"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




const app = initializeApp( {
  apiKey: "AIzaSyCVAMjpkE-uomcbwLfo0D2qKCkdQ8zidG4",
  authDomain: "habit-tracker-7df8f.firebaseapp.com",
  projectId: "habit-tracker-7df8f",
  storageBucket: "habit-tracker-7df8f.appspot.com",
  messagingSenderId: "341380442697",
  appId: "1:341380442697:web:9d82f88638856ee02d6d98",
  measurementId: "${config.measurementId}"
})

const auth = getAuth();
