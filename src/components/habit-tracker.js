import HabitForm from './habit-form';
import Habit from './habit';
import {useState, useEffect, useContext} from 'react';
import classes from './habit-tracker.module.css'
import Navbar from './navbar'
import { getFirestore, doc, setDoc, collection, addDoc, getDocs, getDoc  } from "firebase/firestore";
import { AuthContext } from '../Pages/context/contex';



const HabitTracker = () => {
  
   
   
  //store Habits - initialize with a blank array
  const [habits,setHabits] = useState([]);

  const [dayCount, setDayCount] = useState(6)

  const values = useContext(AuthContext);

  //function to add to the habits array
  const addToHabits = (habit) => {
    const newHabits = [habit,...habits];
    setHabits(newHabits);
    console.log(newHabits);

  }

  //sending to google firebase

  const db = getFirestore();
  
  


//console.log(values.SignedOut, values.currentUser.uid);

const handleSave =  () => {
  setDoc(doc(db, 'habits',values.currentUser.uid), 
  {habits});
  
}

//retrieves the habits from firebase for the user
useEffect(() => {
  getDoc(doc(db, 'habits','VpR0OhGbZ3R7Mc0O67pQQF39jRz2')).then(docSnap => {
    if (docSnap.exists()) {
      setHabits(docSnap.data().habits);
      
      
    } else {
      console.log("No such document!");
    }
  })
  }
, [])







   
  //function to remove a given habit from the habits array
  const removeFromHabits = (id) => {
    const filteredArray = habits.filter(
      habit => habit.id !== id
    );
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
  const createNewDay = (id) => {
    setDayCount(dayCount + 1);
  
    habits.map(
      (habit)=>{
        if (habit.id===id) {
          habit.DayCount += 1;
          habit['day'+habit.DayCount] = false
          
        
        }
        console.log(habits);
        return habit;
        })

    
  }
  //////////////////////////
  //function to create a new day
  const changeDayStatus = (id,day) => {
    habits.map(
      (habit)=>{
        if (habit.id===id) {
          
          habit[day] = !habit[day];
          
        }
        console.log(habits);
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

  //Function to count the amount of Trues, returns a count 
  function getOccurrence(array) {
    var count = 0;
    array.forEach((v) => (v === true && count++));
    return count;
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

    <div className="save-habits">
    {!values.SignedOut?
                        ( 
                                <button onClick={handleSave}>Save Habits</button>
                        ):
                        ( 
                              <></>
                        )

                        }
    </div>
   
   
    </div>
  )

}

export default HabitTracker;
