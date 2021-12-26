import HabitForm from './habit-form';
import Habit from './habit';
import {useState, useEffect, useContext} from 'react';
import classes from './habit-tracker.module.css'
import Navbar from './navbar'
import { getFirestore, doc, setDoc, collection, addDoc, getDocs, getDoc  } from "firebase/firestore";
import { AuthContext } from '../Pages/context/contex';
import { getAuth, onAuthStateChanged } from "firebase/auth";





const HabitTracker = () => {
  
   
   
  //store Habits - initialize with a blank array
  const values = useContext(AuthContext);
  const [habits,setHabits] = useState([]);
  const [uid, setuid] = useState('')
  

  const [dayCount, setDayCount] = useState(6)
  
  

  //function to add to the habits array
  const addToHabits = (habit) => {
    const newHabits = [habit,...habits];
    setHabits(newHabits);
    console.log(newHabits);

  }

 ;

  //sending to google firebase

  const db = getFirestore();
  
  



const handleSave =  () => {
  setDoc(doc(db, 'habits',values.currentUser.uid), 
  {habits});
  
}




   
  //function to remove a given habit from the habits array
  const removeFromHabits = (id) => {
    
    const filteredArray = habits.filter(
      habit => habit.id !== id
    );
    console.log(filteredArray);
    setHabits(filteredArray);
  }
  //function to edit habits
  const editHabit = (id,newValue) => {
    habits.map(
      (habit)=>{
        if (habit.id===id) {
          habit.text =newValue
        
        }
        return habit;
        }
    )
  }


  

  //function to create a new day
  const createNewDay = ( id) => {
    setDayCount(dayCount + 1);
  
    habits.map(
      (habit)=>{
        if (habit.id===id ) {
          habit.DayCount += 1;
          habit.Days['day'+habit.DayCount] = false
          
        
        }
        console.log(habits);
        return habit;
        })

    
  }

  //function to add to the streak
  const addToStreak = (id) => {
    
  
    habits.map(
      (habit)=>{
        if (habit.id===id) {
          habit.streak += 1;
          
        }
        return habit;
        })

    
  }

  //retrieves the habits from firebase for the user
  const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    getDoc(doc(db, 'habits',uid)).then(docSnap => {
      if (docSnap.exists()) {
   const habits = docSnap.data().habits;
    
    
  } else {
    console.log("No such document!");
  }
})
    
    // ...
  } else {
    // User is signed out
    // ...
  }
});




  //////////////////////////
  //function to change a day from true to false or vice versa
  const changeDayStatus = (id,day) => {
    habits.map(
      (habit)=>{
        if (habit.id===id) {
          
          habit.Days[day] = !habit[day];
          console.log(habit.Days[day]);
          
        }
        
  
        return habit;
        })

    
  }
  //function to count the streak of an individual habit
  const countDaysOfSuccessfulHabit = (id) => {
    for (let index = 0; index < Object.values(habits).length; index++) {
      if (Object.values(habits)[index]=== true) {
        return;
      }
      else{
        return;
      }
    }  
  }







  return (
    
    <div className={classes.HT}>
      <Navbar />
    
      <div className={classes.headerSection}>
      <h1 > Habit Tracker </h1>
      <h2> Enter your Habit to begin</h2>
      <HabitForm
      //passing the functions as props
      addToHabits={addToHabits}
    />

      </div>
 

   
    <div className={classes.X}>
    <div className="save-habits">
    {!values.SignedOut?
                        ( 
                                <button className={classes.btn} onClick={handleSave}>Save Habits</button>
                        ):
                        ( 
                              <></>
                        )

                        }
    </div>
    {habits.map((habit) =>
    (
     <Habit
     habits={habit}
     removeFromHabits={removeFromHabits}
     editHabit={editHabit}
     key={habit.id}
     createNewDay={createNewDay}
     changeDayStatus={changeDayStatus}
     

     />

    ))}
    </div>

   
   
   
    </div>
  )

}

export default HabitTracker;
