import classes from './habit.module.css';
import {useState} from 'react';
//importing deletion icon
import { AiFillCloseCircle, AiFillEdit } from 'react-icons/ai';
import IndividualHabit from './individualHabit';

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
       <button 
       onClick={handleAddDay}
       >Add Day</button>
       <AiFillEdit onClick={handleEdit}/>
       <AiFillCloseCircle
       onClick={handleDeletion}
       />
       </div>

       <div className="NumberOfDays">

         {streak}

       </div>
       
      <div className={classes.individualDays}>
       {Object.keys(habits).map((habit) =>( 
       <IndividualHabit
       habit={habit}
       ChangeDay={ChangeDay}
       />))}
       
       </div>
  </div>

    
</div>
    

  )


}
export default Habit;
