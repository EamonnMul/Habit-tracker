import classes from './habit.module.css';
import {useState,useE} from 'react';
//importing deletion icon
import { AiFillCloseCircle, AiFillEdit } from 'react-icons/ai';
import IndividualHabit from './individualHabit';

// functional component deals with habits on the basis of a singlural object

const Habit = (props) =>
{
  const [editIsOpen,setEditIsOpen] =useState(false);
  const [edit,setEdit] = useState('');
  const [streak, setstreak] = useState(0)
  
  //import habits from parent habit-tracker component
  const habits = props.habits


  

  
  //function to handle what happens when delete button called

  const handleDeletion = () => {
    props.removeFromHabits(habits.id);
  }
  //fucntion to
  const handleEdit = (e) => {
    setEditIsOpen(!editIsOpen);
    setEdit(e.target.value);
    console.log(edit);
  }
  //function to handle what happens when someone submits an edit
  const handleEditSubmit = () => {
    setEditIsOpen(!editIsOpen);
    props.editHabit(habits.id,edit);
  }
  const handleEditChange = (e) => {
    e.preventDefault();
    setEdit(e.target.value);
  }
  
  const handleAddDay = () => {
    props.createNewDay(habits.id);
  }

  const ChangeDay = (day) => {
    props.changeDayStatus(habits.id,day);
  
  }
  
    //Function to count the amount of Trues, returns a count 
    function getOccurrence(array) {
      var count = 0;
      array.forEach((v) => (v === true && count++));
      return count;
  }
  


  //printing the number of times that true appears for the first object in the habits array
  console.log(getOccurrence(Object.values(habits.Days)));
  
  
 
    
  
  


  return (
    <div className={classes.BottomSection}>

      <div className={classes.habitContainer}>
        <div
        className={classes.HabitDescription}
        key='HabitDescription'>
          {editIsOpen? 
          <form onSubmit={handleEditSubmit}>
            <input type='text' placeholder='Edit habit' onChange={handleEditChange}></input>
          </form>
         :habits.text}
       <button className={classes.btn}
       onClick={handleAddDay}
       >Add Day</button>
       <AiFillEdit onClick={handleEdit}/>
       <AiFillCloseCircle
       onClick={handleDeletion}
       />
       </div>

      
       
      <div className={classes.individualDays}>
       {Object.keys(habits.Days).sort().map((habit,index) =>( 
          
          <IndividualHabit
          habit={habit}
          key={habits.uid+habits.id+index}
          val={habits.Days[habit]}
          ChangeDay={ChangeDay}
          />
         
       ))}
       
       </div>
  </div>

    
</div>
    

  )


}
export default Habit;
